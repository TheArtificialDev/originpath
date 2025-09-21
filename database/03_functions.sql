-- Optimized Functions and Procedures for OriginPath
-- These functions reduce computational burden on the database server

-- Function to submit contact form with validation and rate limiting
CREATE OR REPLACE FUNCTION submit_contact_form(
    p_name VARCHAR(255),
    p_email VARCHAR(255),
    p_subject VARCHAR(500),
    p_message TEXT,
    p_phone VARCHAR(50) DEFAULT NULL,
    p_company VARCHAR(255) DEFAULT NULL,
    p_inquiry_type VARCHAR(50) DEFAULT 'general',
    p_source VARCHAR(100) DEFAULT 'contact_page',
    p_ip_address INET DEFAULT NULL,
    p_user_agent TEXT DEFAULT NULL
)
RETURNS JSON AS $$
DECLARE
    v_submission_id UUID;
    v_recent_submissions INT;
    v_result JSON;
BEGIN
    -- Rate limiting: Check for recent submissions from same IP
    IF p_ip_address IS NOT NULL THEN
        SELECT COUNT(*) INTO v_recent_submissions
        FROM contact_submissions 
        WHERE ip_address = p_ip_address 
        AND created_at > NOW() - INTERVAL '1 hour';
        
        IF v_recent_submissions >= 5 THEN
            RETURN json_build_object(
                'success', false,
                'error', 'rate_limit_exceeded',
                'message', 'Too many submissions from your IP. Please try again later.'
            );
        END IF;
    END IF;
    
    -- Input validation
    IF LENGTH(TRIM(p_name)) < 2 THEN
        RETURN json_build_object('success', false, 'error', 'invalid_name', 'message', 'Name must be at least 2 characters');
    END IF;
    
    IF NOT is_valid_email(p_email) THEN
        RETURN json_build_object('success', false, 'error', 'invalid_email', 'message', 'Please provide a valid email address');
    END IF;
    
    IF LENGTH(TRIM(p_subject)) < 5 THEN
        RETURN json_build_object('success', false, 'error', 'invalid_subject', 'message', 'Subject must be at least 5 characters');
    END IF;
    
    IF LENGTH(TRIM(p_message)) < 10 THEN
        RETURN json_build_object('success', false, 'error', 'invalid_message', 'message', 'Message must be at least 10 characters');
    END IF;
    
    -- Sanitize inputs
    p_name := sanitize_html_input(p_name);
    p_subject := sanitize_html_input(p_subject);
    p_message := sanitize_html_input(p_message);
    p_company := sanitize_html_input(p_company);
    
    -- Insert the submission
    INSERT INTO contact_submissions (
        name, email, phone, company, subject, message, 
        inquiry_type, source, ip_address, user_agent
    )
    VALUES (
        TRIM(p_name), LOWER(TRIM(p_email)), p_phone, p_company, 
        TRIM(p_subject), TRIM(p_message), p_inquiry_type, 
        p_source, p_ip_address, p_user_agent
    )
    RETURNING id INTO v_submission_id;
    
    -- Log analytics event
    INSERT INTO analytics_events (event_type, event_data, ip_address, user_agent)
    VALUES (
        'contact_form_submitted',
        json_build_object(
            'submission_id', v_submission_id,
            'inquiry_type', p_inquiry_type,
            'source', p_source,
            'has_company', CASE WHEN p_company IS NOT NULL THEN true ELSE false END
        ),
        p_ip_address,
        p_user_agent
    );
    
    RETURN json_build_object(
        'success', true,
        'submission_id', v_submission_id,
        'message', 'Thank you for your message. We''ll get back to you within 24 hours.'
    );
    
EXCEPTION
    WHEN OTHERS THEN
        RETURN json_build_object(
            'success', false,
            'error', 'server_error',
            'message', 'An error occurred while processing your request. Please try again.'
        );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to subscribe to newsletter with validation
CREATE OR REPLACE FUNCTION subscribe_to_newsletter(
    p_email VARCHAR(255),
    p_name VARCHAR(255) DEFAULT NULL,
    p_interests TEXT[] DEFAULT '{}',
    p_source VARCHAR(100) DEFAULT 'footer',
    p_ip_address INET DEFAULT NULL
)
RETURNS JSON AS $$
DECLARE
    v_subscription_id UUID;
    v_existing_subscription UUID;
    v_confirmation_token VARCHAR(255);
BEGIN
    -- Validate email
    IF NOT is_valid_email(p_email) THEN
        RETURN json_build_object('success', false, 'error', 'invalid_email', 'message', 'Please provide a valid email address');
    END IF;
    
    -- Check if already subscribed
    SELECT id INTO v_existing_subscription
    FROM newsletter_subscriptions 
    WHERE email = LOWER(TRIM(p_email)) AND status = 'active';
    
    IF v_existing_subscription IS NOT NULL THEN
        RETURN json_build_object('success', false, 'error', 'already_subscribed', 'message', 'This email is already subscribed to our newsletter');
    END IF;
    
    -- Generate confirmation token
    v_confirmation_token := encode(gen_random_bytes(32), 'hex');
    
    -- Sanitize inputs
    p_name := sanitize_html_input(p_name);
    
    -- Insert or update subscription
    INSERT INTO newsletter_subscriptions (email, name, interests, subscription_source, confirmation_token, ip_address)
    VALUES (LOWER(TRIM(p_email)), TRIM(p_name), p_interests, p_source, v_confirmation_token, p_ip_address)
    ON CONFLICT (email) DO UPDATE SET
        name = COALESCE(EXCLUDED.name, newsletter_subscriptions.name),
        interests = EXCLUDED.interests,
        subscription_source = EXCLUDED.subscription_source,
        status = 'active',
        subscribed_at = NOW(),
        unsubscribed_at = NULL,
        confirmation_token = EXCLUDED.confirmation_token,
        confirmed = false
    RETURNING id INTO v_subscription_id;
    
    -- Log analytics event
    INSERT INTO analytics_events (event_type, event_data, ip_address)
    VALUES (
        'newsletter_subscribed',
        json_build_object(
            'subscription_id', v_subscription_id,
            'source', p_source,
            'interests', p_interests
        ),
        p_ip_address
    );
    
    RETURN json_build_object(
        'success', true,
        'subscription_id', v_subscription_id,
        'confirmation_token', v_confirmation_token,
        'message', 'Successfully subscribed to our newsletter!'
    );
    
EXCEPTION
    WHEN OTHERS THEN
        RETURN json_build_object(
            'success', false,
            'error', 'server_error',
            'message', 'An error occurred while processing your subscription. Please try again.'
        );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get research articles with filters and pagination
CREATE OR REPLACE FUNCTION get_research_articles(
    p_category VARCHAR(50) DEFAULT NULL,
    p_featured BOOLEAN DEFAULT NULL,
    p_limit INTEGER DEFAULT 10,
    p_offset INTEGER DEFAULT 0,
    p_search_query TEXT DEFAULT NULL
)
RETURNS JSON AS $$
DECLARE
    v_articles JSON;
    v_total_count INTEGER;
    v_where_clause TEXT := 'WHERE published = true';
    v_search_clause TEXT := '';
BEGIN
    -- Build dynamic where clause
    IF p_category IS NOT NULL THEN
        v_where_clause := v_where_clause || ' AND category = ' || quote_literal(p_category);
    END IF;
    
    IF p_featured IS NOT NULL THEN
        v_where_clause := v_where_clause || ' AND featured = ' || p_featured;
    END IF;
    
    IF p_search_query IS NOT NULL AND LENGTH(TRIM(p_search_query)) > 0 THEN
        v_search_clause := ' AND to_tsvector(''english'', title || '' '' || summary || '' '' || COALESCE(content, '''')) @@ plainto_tsquery(''english'', ' || quote_literal(TRIM(p_search_query)) || ')';
        v_where_clause := v_where_clause || v_search_clause;
    END IF;
    
    -- Get total count for pagination
    EXECUTE 'SELECT COUNT(*) FROM research_articles ' || v_where_clause INTO v_total_count;
    
    -- Get articles
    EXECUTE '
        SELECT json_agg(
            json_build_object(
                ''id'', id,
                ''title'', title,
                ''slug'', slug,
                ''summary'', summary,
                ''excerpt'', excerpt,
                ''keywords'', keywords,
                ''category'', category,
                ''author'', author,
                ''image_url'', image_url,
                ''image_alt'', image_alt,
                ''featured'', featured,
                ''publish_date'', publish_date,
                ''views_count'', views_count,
                ''read_time_minutes'', read_time_minutes,
                ''tags'', tags
            ) ORDER BY 
                CASE WHEN featured THEN 0 ELSE 1 END,
                publish_date DESC,
                created_at DESC
        )
        FROM research_articles ' || v_where_clause || '
        LIMIT ' || p_limit || ' OFFSET ' || p_offset
    INTO v_articles;
    
    RETURN json_build_object(
        'articles', COALESCE(v_articles, '[]'::json),
        'total_count', v_total_count,
        'has_more', (p_offset + p_limit) < v_total_count,
        'page_size', p_limit,
        'offset', p_offset
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to increment article view count
CREATE OR REPLACE FUNCTION increment_article_views(p_article_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
    UPDATE research_articles 
    SET views_count = views_count + 1 
    WHERE id = p_article_id AND published = true;
    
    -- Log analytics event
    INSERT INTO analytics_events (event_type, event_data)
    VALUES (
        'article_viewed',
        json_build_object('article_id', p_article_id)
    );
    
    RETURN FOUND;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get services with filters
CREATE OR REPLACE FUNCTION get_services(
    p_category VARCHAR(50) DEFAULT NULL,
    p_featured BOOLEAN DEFAULT NULL,
    p_active BOOLEAN DEFAULT true
)
RETURNS JSON AS $$
DECLARE
    v_services JSON;
    v_where_clause TEXT := 'WHERE true';
BEGIN
    -- Build dynamic where clause
    IF p_active IS NOT NULL THEN
        v_where_clause := v_where_clause || ' AND active = ' || p_active;
    END IF;
    
    IF p_category IS NOT NULL THEN
        v_where_clause := v_where_clause || ' AND category = ' || quote_literal(p_category);
    END IF;
    
    IF p_featured IS NOT NULL THEN
        v_where_clause := v_where_clause || ' AND featured = ' || p_featured;
    END IF;
    
    -- Get services
    EXECUTE '
        SELECT json_agg(
            json_build_object(
                ''id'', id,
                ''title'', title,
                ''slug'', slug,
                ''subtitle'', subtitle,
                ''description'', description,
                ''short_description'', short_description,
                ''key_features'', key_features,
                ''benefits'', benefits,
                ''target_audience'', target_audience,
                ''duration'', duration,
                ''type'', type,
                ''category'', category,
                ''color'', color,
                ''icon'', icon,
                ''price_range'', price_range,
                ''featured'', featured
            ) ORDER BY 
                CASE WHEN featured THEN 0 ELSE 1 END,
                sort_order ASC,
                created_at DESC
        )
        FROM services ' || v_where_clause
    INTO v_services;
    
    RETURN json_build_object(
        'services', COALESCE(v_services, '[]'::json)
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to submit service inquiry
CREATE OR REPLACE FUNCTION submit_service_inquiry(
    p_service_id UUID,
    p_name VARCHAR(255),
    p_email VARCHAR(255),
    p_phone VARCHAR(50) DEFAULT NULL,
    p_company VARCHAR(255) DEFAULT NULL,
    p_company_size VARCHAR(50) DEFAULT NULL,
    p_budget_range VARCHAR(100) DEFAULT NULL,
    p_timeline VARCHAR(100) DEFAULT NULL,
    p_message TEXT DEFAULT NULL,
    p_specific_requirements TEXT DEFAULT NULL,
    p_ip_address INET DEFAULT NULL,
    p_user_agent TEXT DEFAULT NULL
)
RETURNS JSON AS $$
DECLARE
    v_inquiry_id UUID;
    v_service_title VARCHAR(500);
BEGIN
    -- Validate inputs
    IF NOT is_valid_email(p_email) THEN
        RETURN json_build_object('success', false, 'error', 'invalid_email', 'message', 'Please provide a valid email address');
    END IF;
    
    IF LENGTH(TRIM(p_name)) < 2 THEN
        RETURN json_build_object('success', false, 'error', 'invalid_name', 'message', 'Name must be at least 2 characters');
    END IF;
    
    -- Check if service exists
    SELECT title INTO v_service_title FROM services WHERE id = p_service_id AND active = true;
    IF NOT FOUND THEN
        RETURN json_build_object('success', false, 'error', 'invalid_service', 'message', 'Service not found');
    END IF;
    
    -- Sanitize inputs
    p_name := sanitize_html_input(p_name);
    p_company := sanitize_html_input(p_company);
    p_message := sanitize_html_input(p_message);
    p_specific_requirements := sanitize_html_input(p_specific_requirements);
    
    -- Insert inquiry
    INSERT INTO service_inquiries (
        service_id, name, email, phone, company, company_size,
        budget_range, timeline, message, specific_requirements,
        ip_address, user_agent
    )
    VALUES (
        p_service_id, TRIM(p_name), LOWER(TRIM(p_email)), p_phone, 
        p_company, p_company_size, p_budget_range, p_timeline,
        p_message, p_specific_requirements, p_ip_address, p_user_agent
    )
    RETURNING id INTO v_inquiry_id;
    
    -- Log analytics event
    INSERT INTO analytics_events (event_type, event_data, ip_address, user_agent)
    VALUES (
        'service_inquiry_submitted',
        json_build_object(
            'inquiry_id', v_inquiry_id,
            'service_id', p_service_id,
            'service_title', v_service_title,
            'budget_range', p_budget_range,
            'timeline', p_timeline
        ),
        p_ip_address,
        p_user_agent
    );
    
    RETURN json_build_object(
        'success', true,
        'inquiry_id', v_inquiry_id,
        'message', 'Thank you for your inquiry about ' || v_service_title || '. We''ll get back to you within 24 hours.'
    );
    
EXCEPTION
    WHEN OTHERS THEN
        RETURN json_build_object(
            'success', false,
            'error', 'server_error',
            'message', 'An error occurred while processing your inquiry. Please try again.'
        );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;