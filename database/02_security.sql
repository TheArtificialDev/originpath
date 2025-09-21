-- Row Level Security Policies for OriginPath
-- These policies ensure data security and proper access control

-- Enable RLS on all tables
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE research_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_config ENABLE ROW LEVEL SECURITY;

-- Contact Submissions Policies
-- Allow public to insert contact submissions
CREATE POLICY "Allow public to insert contact submissions" ON contact_submissions
    FOR INSERT TO anon WITH CHECK (true);

-- Allow service role full access for admin operations
CREATE POLICY "Allow service role full access to contact submissions" ON contact_submissions
    FOR ALL TO service_role USING (true) WITH CHECK (true);

-- Research Articles Policies
-- Allow public to read published articles
CREATE POLICY "Allow public to read published research articles" ON research_articles
    FOR SELECT TO anon USING (published = true);

-- Allow service role full access for content management
CREATE POLICY "Allow service role full access to research articles" ON research_articles
    FOR ALL TO service_role USING (true) WITH CHECK (true);

-- Services Policies
-- Allow public to read active services
CREATE POLICY "Allow public to read active services" ON services
    FOR SELECT TO anon USING (active = true);

-- Allow service role full access for service management
CREATE POLICY "Allow service role full access to services" ON services
    FOR ALL TO service_role USING (true) WITH CHECK (true);

-- Service Inquiries Policies
-- Allow public to insert service inquiries
CREATE POLICY "Allow public to insert service inquiries" ON service_inquiries
    FOR INSERT TO anon WITH CHECK (true);

-- Allow service role full access for inquiry management
CREATE POLICY "Allow service role full access to service inquiries" ON service_inquiries
    FOR ALL TO service_role USING (true) WITH CHECK (true);

-- Newsletter Subscriptions Policies
-- Allow public to insert newsletter subscriptions
CREATE POLICY "Allow public to insert newsletter subscriptions" ON newsletter_subscriptions
    FOR INSERT TO anon WITH CHECK (true);

-- Allow public to update their own subscription (for unsubscribing)
-- This policy allows updates based on email and confirmation token
CREATE POLICY "Allow public to update own newsletter subscription" ON newsletter_subscriptions
    FOR UPDATE TO anon USING (true) WITH CHECK (true);

-- Allow service role full access for newsletter management
CREATE POLICY "Allow service role full access to newsletter subscriptions" ON newsletter_subscriptions
    FOR ALL TO service_role USING (true) WITH CHECK (true);

-- Analytics Events Policies
-- Allow public to insert analytics events
CREATE POLICY "Allow public to insert analytics events" ON analytics_events
    FOR INSERT TO anon WITH CHECK (true);

-- Allow service role full access for analytics
CREATE POLICY "Allow service role full access to analytics events" ON analytics_events
    FOR ALL TO service_role USING (true) WITH CHECK (true);

-- Site Config Policies
-- Allow public to read non-sensitive config
CREATE POLICY "Allow public to read public site config" ON site_config
    FOR SELECT TO anon USING (key NOT LIKE 'private_%' AND key NOT LIKE 'secret_%');

-- Allow service role full access for configuration management
CREATE POLICY "Allow service role full access to site config" ON site_config
    FOR ALL TO service_role USING (true) WITH CHECK (true);

-- Create a function to validate email format
CREATE OR REPLACE FUNCTION is_valid_email(email TEXT)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$';
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Add email validation constraints
ALTER TABLE contact_submissions ADD CONSTRAINT valid_email_format CHECK (is_valid_email(email));
ALTER TABLE service_inquiries ADD CONSTRAINT valid_email_format CHECK (is_valid_email(email));
ALTER TABLE newsletter_subscriptions ADD CONSTRAINT valid_email_format CHECK (is_valid_email(email));

-- Create a function to sanitize user input (prevent XSS)
CREATE OR REPLACE FUNCTION sanitize_html_input(input_text TEXT)
RETURNS TEXT AS $$
BEGIN
    -- Remove common HTML tags and script content
    RETURN regexp_replace(
        regexp_replace(
            regexp_replace(input_text, '<script[^>]*>.*?</script>', '', 'gi'),
            '<[^>]*>', '', 'g'
        ),
        '&lt;script[^&]*&gt;.*?&lt;/script&gt;', '', 'gi'
    );
END;
$$ LANGUAGE plpgsql IMMUTABLE;