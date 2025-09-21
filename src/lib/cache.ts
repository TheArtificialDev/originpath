import { unstable_cache } from 'next/cache';
import { getResearchArticles, getServices, getSiteConfig } from './database';
import { convertDatabaseArticleToResearchItem } from '../types/research';

// Cache research articles with 5 minute TTL
export const getCachedResearchArticles = unstable_cache(
  async (options: {
    category?: 'whitepapers' | 'industry-reports' | 'case-studies' | 'company-insights'
    featured?: boolean
    limit?: number
    offset?: number
    searchQuery?: string
  } = {}) => {
    const articlesData = await getResearchArticles(options);
    if (!articlesData) return null;
    
    return {
      ...articlesData,
      articles: articlesData.data.map(convertDatabaseArticleToResearchItem)
    };
  },
  ['research-articles'],
  {
    revalidate: 300, // 5 minutes
    tags: ['research']
  }
);

// Cache featured articles with 10 minute TTL
export const getCachedFeaturedArticles = unstable_cache(
  async () => {
    const articlesData = await getResearchArticles({ featured: true, limit: 6 });
    if (!articlesData) return [];
    
    return articlesData.data.map(convertDatabaseArticleToResearchItem);
  },
  ['featured-articles'],
  {
    revalidate: 600, // 10 minutes
    tags: ['research', 'featured']
  }
);

// Cache services with 15 minute TTL
export const getCachedServices = unstable_cache(
  async (options: {
    category?: 'audit' | 'implementation' | 'founders' | 'accelerator' | 'network'
    featured?: boolean
    active?: boolean
  } = {}) => {
    return await getServices(options);
  },
  ['services'],
  {
    revalidate: 900, // 15 minutes
    tags: ['services']
  }
);

// Cache site configuration with 30 minute TTL
export const getCachedSiteConfig = unstable_cache(
  async () => {
    return await getSiteConfig();
  },
  ['site-config'],
  {
    revalidate: 1800, // 30 minutes
    tags: ['config']
  }
);

// Cache statistics/counts with 5 minute TTL
export const getCachedStats = unstable_cache(
  async () => {
    // This could be expanded to get various stats from the database
    const [articlesData, servicesData] = await Promise.all([
      getResearchArticles({ limit: 1 }),
      getServices({ active: true })
    ]);
    
    return {
      totalArticles: articlesData?.total || 0,
      totalServices: servicesData?.data?.length || 0,
      lastUpdated: new Date().toISOString()
    };
  },
  ['site-stats'],
  {
    revalidate: 300, // 5 minutes
    tags: ['stats']
  }
);

// Cache invalidation helpers
export const revalidateCache = {
  research: () => {
    // This would be used in API routes to invalidate cache
    // revalidateTag('research');
  },
  services: () => {
    // revalidateTag('services');
  },
  config: () => {
    // revalidateTag('config');
  },
  all: () => {
    // revalidateTag('research');
    // revalidateTag('services');
    // revalidateTag('config');
    // revalidateTag('stats');
  }
};

// Performance monitoring
export const performanceMonitor = {
  trackDatabaseQuery: (operation: string, duration: number) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[DB Query] ${operation}: ${duration}ms`);
    }
    
    // In production, you might want to send this to a monitoring service
    // like Vercel Analytics, DataDog, etc.
  },
  
  trackCacheHit: (key: string, hit: boolean) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Cache] ${key}: ${hit ? 'HIT' : 'MISS'}`);
    }
  }
};

// Rate limiting helper for client-side operations
export class ClientRateLimit {
  private static instance: ClientRateLimit;
  private requests: Map<string, number[]> = new Map();
  
  static getInstance(): ClientRateLimit {
    if (!ClientRateLimit.instance) {
      ClientRateLimit.instance = new ClientRateLimit();
    }
    return ClientRateLimit.instance;
  }
  
  canMakeRequest(key: string, maxRequests: number = 10, windowMs: number = 60000): boolean {
    const now = Date.now();
    const requests = this.requests.get(key) || [];
    
    // Remove old requests outside the window
    const validRequests = requests.filter(time => now - time < windowMs);
    
    if (validRequests.length >= maxRequests) {
      return false;
    }
    
    // Add current request
    validRequests.push(now);
    this.requests.set(key, validRequests);
    
    return true;
  }
  
  getRemainingRequests(key: string, maxRequests: number = 10, windowMs: number = 60000): number {
    const now = Date.now();
    const requests = this.requests.get(key) || [];
    const validRequests = requests.filter(time => now - time < windowMs);
    
    return Math.max(0, maxRequests - validRequests.length);
  }
  
  getResetTime(key: string, windowMs: number = 60000): number {
    const requests = this.requests.get(key) || [];
    if (requests.length === 0) return 0;
    
    const oldestRequest = Math.min(...requests);
    return oldestRequest + windowMs;
  }
}

// Database connection pooling recommendations (to be implemented in Supabase settings)
export const databaseOptimizations = {
  connectionPool: {
    // These settings should be configured in Supabase dashboard
    minConnections: 2,
    maxConnections: 10,
    acquireTimeoutMillis: 30000,
    createTimeoutMillis: 30000,
    destroyTimeoutMillis: 5000,
    idleTimeoutMillis: 30000,
    reapIntervalMillis: 1000,
    createRetryIntervalMillis: 200
  },
  
  queryOptimizations: [
    'Use database functions for complex queries',
    'Implement proper indexing on frequently queried columns',
    'Use pagination for large result sets',
    'Cache frequently accessed data',
    'Use connection pooling',
    'Monitor slow queries and optimize them',
    'Use read replicas for read-heavy operations',
    'Implement database query monitoring'
  ]
};

// Export performance utilities
export const perfUtils = {
  measure: async <T>(name: string, fn: () => Promise<T>): Promise<T> => {
    const start = typeof window !== 'undefined' && window.performance ? window.performance.now() : Date.now();
    try {
      const result = await fn();
      const duration = (typeof window !== 'undefined' && window.performance ? window.performance.now() : Date.now()) - start;
      performanceMonitor.trackDatabaseQuery(name, duration);
      return result;
    } catch (error) {
      const duration = (typeof window !== 'undefined' && window.performance ? window.performance.now() : Date.now()) - start;
      performanceMonitor.trackDatabaseQuery(`${name} (error)`, duration);
      throw error;
    }
  },
  
  // Debounce function for search operations
  debounce: <T extends (...args: unknown[]) => unknown>(func: T, wait: number): T => {
    let timeout: NodeJS.Timeout;
    return ((...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    }) as T;
  }
};