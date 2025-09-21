import { z } from 'zod'

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(255, 'Name must be less than 255 characters')
    .regex(/^[a-zA-Z\s\-']+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  
  phone: z
    .string()
    .optional()
    .refine((val) => {
      if (!val) return true // Optional field
      return /^[\+]?[\d\s\-\(\)]{10,}$/.test(val)
    }, 'Please enter a valid phone number'),
  
  company: z
    .string()
    .max(255, 'Company name must be less than 255 characters')
    .optional(),
  
  subject: z
    .string()
    .min(5, 'Subject must be at least 5 characters')
    .max(500, 'Subject must be less than 500 characters'),
  
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters'),
  
  inquiryType: z
    .enum(['general', 'service', 'partnership', 'support', 'other']),
  
  source: z
    .string()
    .max(100, 'Source must be less than 100 characters')
    .optional()
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Newsletter subscription validation schema
export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  
  name: z
    .string()
    .max(255, 'Name must be less than 255 characters')
    .optional(),
  
  interests: z
    .array(z.string())
    .max(10, 'You can select up to 10 interests')
    .optional(),
  
  source: z
    .string()
    .max(100, 'Source must be less than 100 characters')
    .optional()
})

export type NewsletterData = z.infer<typeof newsletterSchema>

// Service inquiry validation schema
export const serviceInquirySchema = z.object({
  serviceId: z
    .string()
    .uuid('Invalid service ID'),
  
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(255, 'Name must be less than 255 characters')
    .regex(/^[a-zA-Z\s\-']+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  
  phone: z
    .string()
    .optional()
    .refine((val) => {
      if (!val) return true // Optional field
      return /^[\+]?[\d\s\-\(\)]{10,}$/.test(val)
    }, 'Please enter a valid phone number'),
  
  company: z
    .string()
    .max(255, 'Company name must be less than 255 characters')
    .optional(),
  
  companySize: z
    .enum(['1-10', '11-50', '51-200', '201-1000', '1000+'])
    .optional(),
  
  budgetRange: z
    .enum(['<10k', '10k-50k', '50k-100k', '100k-500k', '500k+'])
    .optional(),
  
  timeline: z
    .enum(['immediate', '1-3 months', '3-6 months', '6+ months'])
    .optional(),
  
  message: z
    .string()
    .max(2000, 'Message must be less than 2000 characters')
    .optional(),
  
  specificRequirements: z
    .string()
    .max(5000, 'Requirements must be less than 5000 characters')
    .optional()
})

export type ServiceInquiryData = z.infer<typeof serviceInquirySchema>

// Research article search validation schema
export const articleSearchSchema = z.object({
  category: z
    .enum(['whitepapers', 'industry-reports', 'case-studies', 'company-insights'])
    .optional(),
  
  featured: z
    .boolean()
    .optional(),
  
  limit: z
    .number()
    .min(1, 'Limit must be at least 1')
    .max(50, 'Limit cannot exceed 50')
    .default(10),
  
  offset: z
    .number()
    .min(0, 'Offset cannot be negative')
    .default(0),
  
  searchQuery: z
    .string()
    .max(200, 'Search query must be less than 200 characters')
    .optional()
})

export type ArticleSearchParams = z.infer<typeof articleSearchSchema>

// Services filter validation schema
export const servicesFilterSchema = z.object({
  category: z
    .enum(['audit', 'implementation', 'founders', 'accelerator', 'network'])
    .optional(),
  
  featured: z
    .boolean()
    .optional(),
  
  active: z
    .boolean()
    .default(true)
})

export type ServicesFilterParams = z.infer<typeof servicesFilterSchema>

// Generic form validation helpers
export function validateFormData<T>(schema: z.ZodSchema<T>, data: unknown): {
  success: boolean
  data?: T
  errors?: Record<string, string>
} {
  try {
    const validatedData = schema.parse(data)
    return { success: true, data: validatedData }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {}
      error.issues.forEach((issue: z.ZodIssue) => {
        if (issue.path.length > 0) {
          errors[issue.path[0].toString()] = issue.message
        }
      })
      return { success: false, errors }
    }
    return { 
      success: false, 
      errors: { general: 'Validation failed' } 
    }
  }
}

// Sanitization helpers
export function sanitizeStringInput(input: string): string {
  return input
    .replace(/<script[^>]*>.*?<\/script>/gi, '') // Remove script tags
    .replace(/<[^>]*>/g, '') // Remove all HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .trim()
}

export function sanitizeFormData<T extends Record<string, unknown>>(data: T): T {
  const sanitized = { ...data }
  
  for (const key in sanitized) {
    const value = sanitized[key]
    if (typeof value === 'string') {
      sanitized[key] = sanitizeStringInput(value) as T[typeof key]
    }
  }
  
  return sanitized
}

// Rate limiting helper (client-side tracking)
const rateLimitCache = new Map<string, { count: number; resetTime: number }>()

export function checkRateLimit(
  identifier: string, 
  maxRequests: number = 5, 
  windowMs: number = 60000 // 1 minute default
): { allowed: boolean; remainingRequests: number; resetTime: number } {
  const now = Date.now()
  const current = rateLimitCache.get(identifier)
  
  if (!current || now > current.resetTime) {
    // Reset or create new entry
    const resetTime = now + windowMs
    rateLimitCache.set(identifier, { count: 1, resetTime })
    return { allowed: true, remainingRequests: maxRequests - 1, resetTime }
  }
  
  if (current.count >= maxRequests) {
    return { allowed: false, remainingRequests: 0, resetTime: current.resetTime }
  }
  
  // Increment count
  current.count++
  rateLimitCache.set(identifier, current)
  
  return { 
    allowed: true, 
    remainingRequests: maxRequests - current.count, 
    resetTime: current.resetTime 
  }
}

// Form field error display helper
export function getFieldError(errors: Record<string, string> | undefined, fieldName: string): string | undefined {
  return errors?.[fieldName]
}

// Form success/error message helper
export function formatFormMessage(response: { success: boolean; message?: string; error?: string }): {
  type: 'success' | 'error'
  message: string
} {
  if (response.success) {
    return {
      type: 'success',
      message: response.message || 'Operation completed successfully!'
    }
  }
  
  const errorMessages: Record<string, string> = {
    rate_limit_exceeded: 'Too many requests. Please try again later.',
    invalid_email: 'Please provide a valid email address.',
    invalid_name: 'Please provide a valid name.',
    invalid_subject: 'Please provide a valid subject.',
    invalid_message: 'Please provide a valid message.',
    invalid_service: 'The selected service is not available.',
    already_subscribed: 'This email is already subscribed to our newsletter.',
    database_error: 'A database error occurred. Please try again.',
    network_error: 'Network error. Please check your connection.',
    server_error: 'An unexpected error occurred. Please try again.'
  }
  
  return {
    type: 'error',
    message: errorMessages[response.error || ''] || response.message || 'An error occurred. Please try again.'
  }
}