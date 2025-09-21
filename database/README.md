# OriginPath Database Setup

This directory contains all the SQL files needed to set up the OriginPath database in Supabase.

## File Execution Order

Execute the SQL files in the following order in your Supabase SQL editor:

1. **01_schema.sql** - Creates all tables, indexes, and triggers
2. **02_security.sql** - Sets up Row Level Security (RLS) policies
3. **03_functions.sql** - Creates optimized database functions and procedures

## Database Structure

### Tables

- **contact_submissions** - Stores contact form submissions
- **research_articles** - Stores blog posts, whitepapers, and research content
- **services** - Stores service offerings and programs
- **service_inquiries** - Stores service-specific inquiries
- **newsletter_subscriptions** - Stores newsletter subscribers
- **analytics_events** - Stores user interaction events
- **site_config** - Stores site-wide configuration

### Key Features

#### Performance Optimizations
- **Optimized Indexes**: Strategic indexes for fast queries
- **Full-text Search**: PostgreSQL text search for articles
- **Database Functions**: Server-side functions reduce computational overhead
- **Triggers**: Automatic timestamp updates
- **Views**: Pre-optimized views for common queries

#### Security Features
- **Row Level Security (RLS)**: Granular access control
- **Input Validation**: Server-side validation and sanitization
- **Rate Limiting**: Built-in rate limiting for form submissions
- **Email Validation**: Robust email format validation
- **XSS Protection**: HTML input sanitization

#### Scalability Features
- **Efficient Pagination**: Optimized pagination for large datasets
- **Caching-Ready**: Designed for caching layers
- **Analytics Events**: Built-in analytics event tracking
- **Background Jobs Ready**: Prepared for background processing

## Setup Instructions

### 1. Create Database in Supabase
1. Go to your Supabase dashboard
2. Create a new project or use existing one
3. Go to the SQL Editor

### 2. Execute SQL Files
Run each SQL file in order in the SQL Editor:

```sql
-- Copy and paste the contents of each file in order:
-- 1. 01_schema.sql
-- 2. 02_security.sql  
-- 3. 03_functions.sql
```

### 3. Verify Setup
After running all files, verify the setup:

```sql
-- Check that all tables exist
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_type = 'BASE TABLE';

-- Check database functions
SELECT routine_name FROM information_schema.routines 
WHERE routine_schema = 'public' 
AND routine_type = 'FUNCTION';
```

## Environment Variables

Make sure your `.env.local` file has the correct Supabase credentials:

```env
URL=your_supabase_url
API_KEY=your_supabase_anon_key
```

## Database Functions

The database includes several optimized functions:

### Contact Form
- `submit_contact_form()` - Handles contact form submissions with validation and rate limiting

### Newsletter
- `subscribe_to_newsletter()` - Manages newsletter subscriptions with duplicate checking

### Research Articles
- `get_research_articles()` - Retrieves articles with filtering, search, and pagination
- `increment_article_views()` - Tracks article view counts

### Services
- `get_services()` - Retrieves services with filtering
- `submit_service_inquiry()` - Handles service inquiry submissions

## Security Policies

Row Level Security is enabled on all tables with appropriate policies:

- **Public Access**: Read access to published content (articles, services)
- **Form Submissions**: Insert-only access for contact forms and inquiries
- **Admin Access**: Full access via service role for content management

## Performance Notes

### Indexes
- All foreign keys are indexed
- Search columns have GIN indexes for full-text search
- Composite indexes for common query patterns
- Partial indexes for filtered queries

### Query Optimization
- Use the provided database functions instead of raw queries
- Leverage the created views for common operations
- Use pagination for large result sets
- Consider caching at the application level

### Monitoring
Monitor these metrics:
- Query performance via Supabase dashboard
- Index usage statistics
- Rate limiting effectiveness
- Error rates in form submissions

## Maintenance

### Regular Tasks
1. Monitor database performance
2. Review and update indexes as needed
3. Clean up old analytics events (consider partitioning)
4. Review and update security policies
5. Backup database regularly

### Scaling Considerations
- Consider read replicas for high traffic
- Implement connection pooling
- Use Redis for caching frequently accessed data
- Consider CDN for static content

## Troubleshooting

### Common Issues

**Functions not accessible:**
- Ensure RLS policies allow access to the functions
- Check that the service role has proper permissions

**Slow queries:**
- Review query plans using EXPLAIN
- Check index usage
- Consider adding missing indexes

**Form submissions failing:**
- Check RLS policies for insert permissions
- Verify input validation requirements
- Review rate limiting settings

**Contact**
For database-related issues, contact the development team or refer to the Supabase documentation.