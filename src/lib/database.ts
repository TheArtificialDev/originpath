// Database utilities for OriginPath
// Production implementations using Supabase database functions

/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabase } from './supabase'
import { ContactFormResponse, DatabaseFunctionResponse, Json } from '../types/database'

// Contact form utilities
export async function submitContactForm(data: {
  name: string
  email: string
  phone?: string
  company?: string
  subject: string
  message: string
  inquiryType?: 'general' | 'service' | 'partnership' | 'support' | 'other'
  source?: string
}): Promise<ContactFormResponse> {
  try {
    // Note: RPC type assertion needed due to Supabase generated types limitations
    const { data: result, error } = await (supabase.rpc as any)('submit_contact_form', {
      p_name: data.name,
      p_email: data.email,
      p_subject: data.subject,
      p_message: data.message,
      p_phone: data.phone || null,
      p_company: data.company || null,
      p_inquiry_type: data.inquiryType || 'general',
      p_source: data.source || 'contact_page',
      p_ip_address: null, // Will be set server-side in API route
      p_user_agent: null  // Will be set server-side in API route
    });

    if (error) {
      console.error('Contact form submission error:', error)
      return handleDatabaseError(error)
    }

    return result as ContactFormResponse
  } catch (error) {
    return handleDatabaseError(error)
  }
}

// Newsletter utilities  
export async function subscribeToNewsletter(data: {
  email: string
  name?: string
  interests?: string[]
  source?: string
}): Promise<{ success: boolean; message: string; subscription_id?: string; error?: string }> {
  try {
    const { data: result, error } = await (supabase.rpc as any)('subscribe_to_newsletter', {
      p_email: data.email,
      p_name: data.name || null,
      p_interests: data.interests || [],
      p_source: data.source || 'newsletter_form',
      p_ip_address: null // Will be set server-side in API route
    })

    if (error) {
      console.error('Newsletter subscription error:', error)
      return {
        success: false,
        message: 'Subscription failed. Please try again.',
        error: 'network_error'
      }
    }

    return result
  } catch {
    return {
      success: false,
      message: 'Subscription failed. Please try again.',
      error: 'network_error'
    }
  }
}

// Analytics utilities
export async function trackEvent(eventType: string, eventData: Record<string, unknown> = {}) {
  try {
    const { error } = await (supabase
      .from('analytics_events') as any)
      .insert({
        event_type: eventType,
        event_data: eventData as Json,
        user_id: null, // Could be session ID if available
        page_url: null,
        referrer: null,
        user_agent: null,
        ip_address: null
      })

    if (error) {
      console.error('Track event error:', error)
      return false
    }

    return true
  } catch (error) {
    console.error('Track event error:', error)
    return false
  }
}

// Error handling utility
export function handleDatabaseError(error: Error | unknown): DatabaseFunctionResponse {
  console.error('Database error:', error)
  
  return {
    success: false,
    error: 'server_error',
    message: 'An unexpected error occurred. Please try again.'
  }
}

// Research utilities
export async function getResearchArticles(options: {
  category?: 'whitepapers' | 'industry-reports' | 'case-studies' | 'company-insights'
  featured?: boolean
  limit?: number
  offset?: number
  search?: string
} = {}) {
  try {
    const { data: result, error } = await (supabase.rpc as any)('get_research_articles', {
      p_category: options.category || null,
      p_featured: options.featured ?? null,
      p_limit: options.limit || 10,
      p_offset: options.offset || 0,
      p_search_query: options.search || null
    })

    if (error) {
      console.error('Get research articles error:', error)
      return {
        success: false,
        data: [],
        total: 0,
        hasMore: false
      }
    }

    const response = result as any
    return {
      success: true,
      data: response.articles || [],
      total: response.total_count || 0,
      hasMore: response.has_more || false
    }
  } catch (error) {
    console.error('Get research articles error:', error)
    return {
      success: false,
      data: [],
      total: 0,
      hasMore: false
    }
  }
}

// Services utilities
export async function getServices(options: {
  category?: 'audit' | 'implementation' | 'founders' | 'accelerator' | 'network'
  featured?: boolean
  active?: boolean
} = {}) {
  try {
    const { data: result, error } = await (supabase.rpc as any)('get_services', {
      p_category: options.category || null,
      p_featured: options.featured ?? null,
      p_active: options.active ?? true
    })

    if (error) {
      console.error('Get services error:', error)
      return {
        success: false,
        data: [],
        total: 0
      }
    }

    const response = result as any
    return {
      success: true,
      data: response.services || [],
      total: (response.services || []).length
    }
  } catch (error) {
    console.error('Get services error:', error)
    return {
      success: false,
      data: [],
      total: 0
    }
  }
}

// Service inquiry utilities
export async function submitServiceInquiry(data: {
  serviceId: string
  name: string
  email: string
  phone?: string
  company?: string
  companySize?: string
  budgetRange?: string
  timeline?: string
  message?: string
  specificRequirements?: string
}) {
  try {
    const { data: result, error } = await (supabase.rpc as any)('submit_service_inquiry', {
      p_service_id: data.serviceId,
      p_name: data.name,
      p_email: data.email,
      p_phone: data.phone || null,
      p_company: data.company || null,
      p_company_size: data.companySize || null,
      p_budget_range: data.budgetRange || null,
      p_timeline: data.timeline || null,
      p_message: data.message || null,
      p_specific_requirements: data.specificRequirements || null,
      p_ip_address: null, // Will be set server-side in API route
      p_user_agent: null  // Will be set server-side in API route
    })

    if (error) {
      console.error('Service inquiry submission error:', error)
      return handleDatabaseError(error)
    }

    return result
  } catch (error) {
    return handleDatabaseError(error)
  }
}

// Article utilities
export async function incrementArticleViews(articleId: string) {
  try {
    const { error } = await (supabase.rpc as any)('increment_article_views', {
      p_article_id: articleId
    })

    if (error) {
      console.error('Increment article views error:', error)
      return false
    }

    return true
  } catch (error) {
    console.error('Increment article views error:', error)
    return false
  }
}

// Configuration utilities
export async function getSiteConfig(keys?: string[]): Promise<Record<string, unknown>> {
  try {
    let query = supabase
      .from('site_config')
      .select('key, value')

    if (keys && keys.length > 0) {
      query = query.in('key', keys)
    }

    const { data, error } = await query

    if (error) {
      console.error('Get site config error:', error)
      return {}
    }

    const config: Record<string, unknown> = {}
    data?.forEach((item: any) => {
      config[item.key] = item.value
    })

    return config
  } catch (error) {
    console.error('Get site config error:', error)
    return {}
  }
}