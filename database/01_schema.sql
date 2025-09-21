-- OriginPath Database Schema
-- Optimized for performance and scalability with proper indexing and RLS

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- 1. Contact Submissions Table
CREATE TABLE contact_submissions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  subject VARCHAR(500) NOT NULL,
  message TEXT NOT NULL,
  inquiry_type VARCHAR(50) CHECK (inquiry_type IN ('general', 'service', 'partnership', 'support', 'other')),
  source VARCHAR(100), -- where they came from (contact page, footer, etc.)
  status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'read', 'responded', 'closed')),
  priority VARCHAR(10) DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  ip_address INET,
  user_agent TEXT
);

-- 2. Research Articles Table
CREATE TABLE research_articles (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(500) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  summary TEXT NOT NULL,
  content TEXT, -- Full content of the article
  excerpt TEXT, -- Short excerpt for previews
  keywords TEXT[] DEFAULT '{}',
  category VARCHAR(50) NOT NULL CHECK (category IN ('whitepapers', 'industry-reports', 'case-studies', 'company-insights')),
  author VARCHAR(255) DEFAULT 'OriginPath Team',
  image_url VARCHAR(1000),
  image_alt TEXT,
  featured BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT false,
  publish_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  views_count INTEGER DEFAULT 0,
  read_time_minutes INTEGER DEFAULT 5,
  meta_title VARCHAR(255),
  meta_description VARCHAR(320),
  tags TEXT[] DEFAULT '{}'
);

-- 3. Services Table
CREATE TABLE services (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(500) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  subtitle VARCHAR(500),
  description TEXT NOT NULL,
  short_description TEXT,
  key_features TEXT[] DEFAULT '{}',
  benefits TEXT[] DEFAULT '{}',
  target_audience TEXT,
  duration VARCHAR(100),
  type VARCHAR(20) CHECK (type IN ('service', 'program')) DEFAULT 'service',
  category VARCHAR(50) NOT NULL CHECK (category IN ('audit', 'implementation', 'founders', 'accelerator', 'network')),
  color VARCHAR(50),
  icon VARCHAR(10),
  price_range VARCHAR(100),
  active BOOLEAN DEFAULT true,
  featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  meta_title VARCHAR(255),
  meta_description VARCHAR(320)
);

-- 4. Service Inquiries Table
CREATE TABLE service_inquiries (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  service_id UUID REFERENCES services(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  company_size VARCHAR(50),
  budget_range VARCHAR(100),
  timeline VARCHAR(100),
  message TEXT,
  specific_requirements TEXT,
  status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'qualified', 'proposal_sent', 'negotiating', 'won', 'lost')),
  priority VARCHAR(10) DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  ip_address INET,
  user_agent TEXT
);

-- 5. Newsletter Subscriptions Table
CREATE TABLE newsletter_subscriptions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  unsubscribed_at TIMESTAMP WITH TIME ZONE,
  subscription_source VARCHAR(100), -- footer, popup, article, etc.
  interests TEXT[] DEFAULT '{}',
  status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced')),
  confirmation_token VARCHAR(255),
  confirmed BOOLEAN DEFAULT false,
  ip_address INET
);

-- 6. Analytics Events Table (for tracking user interactions)
CREATE TABLE analytics_events (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  event_type VARCHAR(100) NOT NULL,
  event_data JSONB DEFAULT '{}',
  user_id VARCHAR(255), -- Can be session ID or user identifier
  page_url TEXT,
  referrer TEXT,
  user_agent TEXT,
  ip_address INET,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 7. Site Configuration Table
CREATE TABLE site_config (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  key VARCHAR(255) UNIQUE NOT NULL,
  value JSONB NOT NULL,
  description TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_by VARCHAR(255) DEFAULT 'system'
);

-- Create optimized indexes for performance
-- Contact submissions indexes
CREATE INDEX idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX idx_contact_submissions_priority ON contact_submissions(priority, status);

-- Research articles indexes
CREATE INDEX idx_research_articles_category ON research_articles(category);
CREATE INDEX idx_research_articles_published ON research_articles(published, publish_date DESC);
CREATE INDEX idx_research_articles_featured ON research_articles(featured, publish_date DESC);
CREATE INDEX idx_research_articles_slug ON research_articles(slug);
CREATE INDEX idx_research_articles_keywords ON research_articles USING gin(keywords);
CREATE INDEX idx_research_articles_tags ON research_articles USING gin(tags);
CREATE INDEX idx_research_articles_search ON research_articles USING gin(to_tsvector('english', title || ' ' || summary || ' ' || COALESCE(content, '')));

-- Services indexes  
CREATE INDEX idx_services_category ON services(category);
CREATE INDEX idx_services_active ON services(active, sort_order);
CREATE INDEX idx_services_featured ON services(featured, sort_order);
CREATE INDEX idx_services_slug ON services(slug);

-- Service inquiries indexes
CREATE INDEX idx_service_inquiries_service_id ON service_inquiries(service_id);
CREATE INDEX idx_service_inquiries_status ON service_inquiries(status);
CREATE INDEX idx_service_inquiries_created_at ON service_inquiries(created_at DESC);
CREATE INDEX idx_service_inquiries_email ON service_inquiries(email);

-- Newsletter subscriptions indexes
CREATE INDEX idx_newsletter_subscriptions_status ON newsletter_subscriptions(status);
CREATE INDEX idx_newsletter_subscriptions_email ON newsletter_subscriptions(email);
CREATE INDEX idx_newsletter_subscriptions_interests ON newsletter_subscriptions USING gin(interests);

-- Analytics events indexes
CREATE INDEX idx_analytics_events_type ON analytics_events(event_type);
CREATE INDEX idx_analytics_events_created_at ON analytics_events(created_at DESC);
CREATE INDEX idx_analytics_events_user_id ON analytics_events(user_id);

-- Site config indexes
CREATE INDEX idx_site_config_key ON site_config(key);

-- Updated at triggers for automatic timestamp updates
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';

CREATE TRIGGER update_contact_submissions_updated_at BEFORE UPDATE ON contact_submissions FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_research_articles_updated_at BEFORE UPDATE ON research_articles FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_service_inquiries_updated_at BEFORE UPDATE ON service_inquiries FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_site_config_updated_at BEFORE UPDATE ON site_config FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();