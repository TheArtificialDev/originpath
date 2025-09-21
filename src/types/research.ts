import { generatePlaceholderImageUrl } from '@/utils/imageUtils';
import type { ResearchArticle } from '@/types/database';

export interface ResearchItem {
  id: string;
  title: string;
  summary: string;
  keywords: string[];
  image: string;
  category: 'whitepapers' | 'industry-reports' | 'case-studies' | 'company-insights';
  publishDate: string;
  slug: string;
  featured?: boolean;
  excerpt?: string;
  author?: string;
  viewsCount?: number;
  readTimeMinutes?: number;
  tags?: string[];
}

export interface ResearchCategory {
  id: string;
  title: string;
  slug: string;
  description: string;
}

// Convert database article to ResearchItem interface
export function convertDatabaseArticleToResearchItem(article: ResearchArticle): ResearchItem {
  return {
    id: article.id,
    title: article.title,
    summary: article.summary,
    keywords: article.keywords,
    image: article.image_url || generatePlaceholderImageUrl(article.title),
    category: article.category,
    publishDate: article.publish_date || article.created_at,
    slug: article.slug,
    featured: article.featured,
    excerpt: article.excerpt || undefined,
    author: article.author,
    viewsCount: article.views_count,
    readTimeMinutes: article.read_time_minutes,
    tags: article.tags
  };
}

export const researchCategories: ResearchCategory[] = [
  {
    id: 'whitepapers',
    title: 'White Papers',
    slug: 'whitepapers',
    description: 'In-depth research papers and comprehensive analysis on business and technology topics.'
  },
  {
    id: 'industry-reports',
    title: 'Industry Reports',
    slug: 'industry-reports',
    description: 'Market analysis and industry trend reports to keep you informed of the latest developments.'
  },
  {
    id: 'case-studies',
    title: 'Case Studies',
    slug: 'case-studies',
    description: 'Real-world examples of successful business transformations and strategic implementations.'
  },
  {
    id: 'company-insights',
    title: 'Company Insights',
    slug: 'company-insights',
    description: 'Our thoughts and perspectives on business trends, strategies, and market observations.'
  }
];