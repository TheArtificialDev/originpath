// Database types generated from Supabase schema
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      contact_submissions: {
        Row: {
          id: string
          name: string
          email: string
          phone: string | null
          company: string | null
          subject: string
          message: string
          inquiry_type: 'general' | 'service' | 'partnership' | 'support' | 'other' | null
          source: string | null
          status: 'new' | 'read' | 'responded' | 'closed'
          priority: 'low' | 'normal' | 'high' | 'urgent'
          created_at: string
          updated_at: string
          ip_address: string | null
          user_agent: string | null
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone?: string | null
          company?: string | null
          subject: string
          message: string
          inquiry_type?: 'general' | 'service' | 'partnership' | 'support' | 'other' | null
          source?: string | null
          status?: 'new' | 'read' | 'responded' | 'closed'
          priority?: 'low' | 'normal' | 'high' | 'urgent'
          created_at?: string
          updated_at?: string
          ip_address?: string | null
          user_agent?: string | null
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string | null
          company?: string | null
          subject?: string
          message?: string
          inquiry_type?: 'general' | 'service' | 'partnership' | 'support' | 'other' | null
          source?: string | null
          status?: 'new' | 'read' | 'responded' | 'closed'
          priority?: 'low' | 'normal' | 'high' | 'urgent'
          created_at?: string
          updated_at?: string
          ip_address?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
      research_articles: {
        Row: {
          id: string
          title: string
          slug: string
          summary: string
          content: string | null
          excerpt: string | null
          keywords: string[]
          category: 'whitepapers' | 'industry-reports' | 'case-studies' | 'company-insights'
          author: string
          image_url: string | null
          image_alt: string | null
          featured: boolean
          published: boolean
          publish_date: string | null
          created_at: string
          updated_at: string
          views_count: number
          read_time_minutes: number
          meta_title: string | null
          meta_description: string | null
          tags: string[]
        }
        Insert: {
          id?: string
          title: string
          slug: string
          summary: string
          content?: string | null
          excerpt?: string | null
          keywords?: string[]
          category: 'whitepapers' | 'industry-reports' | 'case-studies' | 'company-insights'
          author?: string
          image_url?: string | null
          image_alt?: string | null
          featured?: boolean
          published?: boolean
          publish_date?: string | null
          created_at?: string
          updated_at?: string
          views_count?: number
          read_time_minutes?: number
          meta_title?: string | null
          meta_description?: string | null
          tags?: string[]
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          summary?: string
          content?: string | null
          excerpt?: string | null
          keywords?: string[]
          category?: 'whitepapers' | 'industry-reports' | 'case-studies' | 'company-insights'
          author?: string
          image_url?: string | null
          image_alt?: string | null
          featured?: boolean
          published?: boolean
          publish_date?: string | null
          created_at?: string
          updated_at?: string
          views_count?: number
          read_time_minutes?: number
          meta_title?: string | null
          meta_description?: string | null
          tags?: string[]
        }
        Relationships: []
      }
      services: {
        Row: {
          id: string
          title: string
          slug: string
          subtitle: string | null
          description: string
          short_description: string | null
          key_features: string[]
          benefits: string[]
          target_audience: string | null
          duration: string | null
          type: 'service' | 'program'
          category: 'audit' | 'implementation' | 'founders' | 'accelerator' | 'network'
          color: string | null
          icon: string | null
          price_range: string | null
          active: boolean
          featured: boolean
          sort_order: number
          created_at: string
          updated_at: string
          meta_title: string | null
          meta_description: string | null
        }
        Insert: {
          id?: string
          title: string
          slug: string
          subtitle?: string | null
          description: string
          short_description?: string | null
          key_features?: string[]
          benefits?: string[]
          target_audience?: string | null
          duration?: string | null
          type?: 'service' | 'program'
          category: 'audit' | 'implementation' | 'founders' | 'accelerator' | 'network'
          color?: string | null
          icon?: string | null
          price_range?: string | null
          active?: boolean
          featured?: boolean
          sort_order?: number
          created_at?: string
          updated_at?: string
          meta_title?: string | null
          meta_description?: string | null
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          subtitle?: string | null
          description?: string
          short_description?: string | null
          key_features?: string[]
          benefits?: string[]
          target_audience?: string | null
          duration?: string | null
          type?: 'service' | 'program'
          category?: 'audit' | 'implementation' | 'founders' | 'accelerator' | 'network'
          color?: string | null
          icon?: string | null
          price_range?: string | null
          active?: boolean
          featured?: boolean
          sort_order?: number
          created_at?: string
          updated_at?: string
          meta_title?: string | null
          meta_description?: string | null
        }
        Relationships: []
      }
      service_inquiries: {
        Row: {
          id: string
          service_id: string | null
          name: string
          email: string
          phone: string | null
          company: string | null
          company_size: string | null
          budget_range: string | null
          timeline: string | null
          message: string | null
          specific_requirements: string | null
          status: 'new' | 'qualified' | 'proposal_sent' | 'negotiating' | 'won' | 'lost'
          priority: 'low' | 'normal' | 'high' | 'urgent'
          created_at: string
          updated_at: string
          ip_address: string | null
          user_agent: string | null
        }
        Insert: {
          id?: string
          service_id?: string | null
          name: string
          email: string
          phone?: string | null
          company?: string | null
          company_size?: string | null
          budget_range?: string | null
          timeline?: string | null
          message?: string | null
          specific_requirements?: string | null
          status?: 'new' | 'qualified' | 'proposal_sent' | 'negotiating' | 'won' | 'lost'
          priority?: 'low' | 'normal' | 'high' | 'urgent'
          created_at?: string
          updated_at?: string
          ip_address?: string | null
          user_agent?: string | null
        }
        Update: {
          id?: string
          service_id?: string | null
          name?: string
          email?: string
          phone?: string | null
          company?: string | null
          company_size?: string | null
          budget_range?: string | null
          timeline?: string | null
          message?: string | null
          specific_requirements?: string | null
          status?: 'new' | 'qualified' | 'proposal_sent' | 'negotiating' | 'won' | 'lost'
          priority?: 'low' | 'normal' | 'high' | 'urgent'
          created_at?: string
          updated_at?: string
          ip_address?: string | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "service_inquiries_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          }
        ]
      }
      newsletter_subscriptions: {
        Row: {
          id: string
          email: string
          name: string | null
          subscribed_at: string
          unsubscribed_at: string | null
          subscription_source: string | null
          interests: string[]
          status: 'active' | 'unsubscribed' | 'bounced'
          confirmation_token: string | null
          confirmed: boolean
          ip_address: string | null
        }
        Insert: {
          id?: string
          email: string
          name?: string | null
          subscribed_at?: string
          unsubscribed_at?: string | null
          subscription_source?: string | null
          interests?: string[]
          status?: 'active' | 'unsubscribed' | 'bounced'
          confirmation_token?: string | null
          confirmed?: boolean
          ip_address?: string | null
        }
        Update: {
          id?: string
          email?: string
          name?: string | null
          subscribed_at?: string
          unsubscribed_at?: string | null
          subscription_source?: string | null
          interests?: string[]
          status?: 'active' | 'unsubscribed' | 'bounced'
          confirmation_token?: string | null
          confirmed?: boolean
          ip_address?: string | null
        }
        Relationships: []
      }
      analytics_events: {
        Row: {
          id: string
          event_type: string
          event_data: Json
          user_id: string | null
          page_url: string | null
          referrer: string | null
          user_agent: string | null
          ip_address: string | null
          created_at: string
        }
        Insert: {
          id?: string
          event_type: string
          event_data?: Json
          user_id?: string | null
          page_url?: string | null
          referrer?: string | null
          user_agent?: string | null
          ip_address?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          event_type?: string
          event_data?: Json
          user_id?: string | null
          page_url?: string | null
          referrer?: string | null
          user_agent?: string | null
          ip_address?: string | null
          created_at?: string
        }
        Relationships: []
      }
      site_config: {
        Row: {
          id: string
          key: string
          value: Json
          description: string | null
          updated_at: string
          updated_by: string
        }
        Insert: {
          id?: string
          key: string
          value: Json
          description?: string | null
          updated_at?: string
          updated_by?: string
        }
        Update: {
          id?: string
          key?: string
          value?: Json
          description?: string | null
          updated_at?: string
          updated_by?: string
        }
        Relationships: []
      }
    }
    Views: {
      published_research_articles: {
        Row: {
          id: string | null
          title: string | null
          slug: string | null
          summary: string | null
          excerpt: string | null
          keywords: string[] | null
          category: 'whitepapers' | 'industry-reports' | 'case-studies' | 'company-insights' | null
          author: string | null
          image_url: string | null
          image_alt: string | null
          featured: boolean | null
          publish_date: string | null
          views_count: number | null
          read_time_minutes: number | null
          tags: string[] | null
        }
      }
      active_services: {
        Row: {
          id: string | null
          title: string | null
          slug: string | null
          subtitle: string | null
          description: string | null
          short_description: string | null
          key_features: string[] | null
          benefits: string[] | null
          target_audience: string | null
          duration: string | null
          type: 'service' | 'program' | null
          category: 'audit' | 'implementation' | 'founders' | 'accelerator' | 'network' | null
          color: string | null
          icon: string | null
          price_range: string | null
          featured: boolean | null
          sort_order: number | null
        }
      }
    }
    Functions: {
      submit_contact_form: {
        Args: {
          p_name: string
          p_email: string
          p_phone?: string
          p_company?: string
          p_subject: string
          p_message: string
          p_inquiry_type?: string
          p_source?: string
          p_ip_address?: string
          p_user_agent?: string
        }
        Returns: Json
      }
      subscribe_to_newsletter: {
        Args: {
          p_email: string
          p_name?: string
          p_interests?: string[]
          p_source?: string
          p_ip_address?: string
        }
        Returns: Json
      }
      get_research_articles: {
        Args: {
          p_category?: string
          p_featured?: boolean
          p_limit?: number
          p_offset?: number
          p_search_query?: string
        }
        Returns: Json
      }
      increment_article_views: {
        Args: {
          p_article_id: string
        }
        Returns: boolean
      }
      get_services: {
        Args: {
          p_category?: string
          p_featured?: boolean
          p_active?: boolean
        }
        Returns: Json
      }
      submit_service_inquiry: {
        Args: {
          p_service_id: string
          p_name: string
          p_email: string
          p_phone?: string
          p_company?: string
          p_company_size?: string
          p_budget_range?: string
          p_timeline?: string
          p_message?: string
          p_specific_requirements?: string
          p_ip_address?: string
          p_user_agent?: string
        }
        Returns: Json
      }
    }
  }
}

// Utility types for working with the database
export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type TablesInsert<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert']
export type TablesUpdate<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update']

// Specific table types for convenience
export type ContactSubmission = Tables<'contact_submissions'>
export type ResearchArticle = Tables<'research_articles'>
export type Service = Tables<'services'>
export type ServiceInquiry = Tables<'service_inquiries'>
export type NewsletterSubscription = Tables<'newsletter_subscriptions'>
export type AnalyticsEvent = Tables<'analytics_events'>
export type SiteConfig = Tables<'site_config'>

// Insert types
export type ContactSubmissionInsert = TablesInsert<'contact_submissions'>
export type ResearchArticleInsert = TablesInsert<'research_articles'>
export type ServiceInsert = TablesInsert<'services'>
export type ServiceInquiryInsert = TablesInsert<'service_inquiries'>
export type NewsletterSubscriptionInsert = TablesInsert<'newsletter_subscriptions'>
export type AnalyticsEventInsert = TablesInsert<'analytics_events'>
export type SiteConfigInsert = TablesInsert<'site_config'>

// Function response types
export interface DatabaseFunctionResponse {
  success: boolean
  error?: string
  message?: string
  [key: string]: unknown
}

export interface ContactFormResponse extends DatabaseFunctionResponse {
  submission_id?: string
}

export interface NewsletterSubscribeResponse extends DatabaseFunctionResponse {
  subscription_id?: string
  confirmation_token?: string
}

export interface ResearchArticlesResponse {
  articles: ResearchArticle[]
  total_count: number
  has_more: boolean
  page_size: number
  offset: number
}

export interface ServicesResponse {
  services: Service[]
}

export interface ServiceInquiryResponse extends DatabaseFunctionResponse {
  inquiry_id?: string
}