import { generatePlaceholderImageUrl } from '@/utils/imageUtils';

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
}

export interface ResearchCategory {
  id: string;
  title: string;
  slug: string;
  description: string;
}

// Sample data for development
export const mockResearchItems: ResearchItem[] = [
  // Featured Research
  {
    id: '1',
    title: 'The Future of Digital Transformation in SMEs',
    summary: 'An in-depth analysis of how small and medium enterprises are navigating digital transformation challenges and opportunities in 2024.',
    keywords: ['digital transformation', 'SME', 'technology adoption', 'business strategy'],
    image: generatePlaceholderImageUrl('Digital Transformation'),
    category: 'whitepapers',
    publishDate: '2024-01-15',
    slug: 'future-digital-transformation-smes',
    featured: true
  },
  
  // Whitepapers
  {
    id: '2',
    title: 'AI Integration Strategies for Modern Businesses',
    summary: 'Comprehensive guide on implementing artificial intelligence solutions across different business functions.',
    keywords: ['artificial intelligence', 'AI strategy', 'business integration', 'automation'],
    image: generatePlaceholderImageUrl('AI Integration'),
    category: 'whitepapers',
    publishDate: '2024-01-10',
    slug: 'ai-integration-strategies-modern-businesses'
  },
  {
    id: '3',
    title: 'Cybersecurity Best Practices for SMEs',
    summary: 'Essential cybersecurity measures every small and medium enterprise should implement.',
    keywords: ['cybersecurity', 'data protection', 'SME security', 'risk management'],
    image: generatePlaceholderImageUrl('Cybersecurity Best Practices'),
    category: 'whitepapers',
    publishDate: '2024-01-05',
    slug: 'cybersecurity-best-practices-smes'
  },
  {
    id: '4',
    title: 'Cloud Migration Roadmap for Enterprises',
    summary: 'Step-by-step guide for successful cloud migration with minimal business disruption.',
    keywords: ['cloud migration', 'enterprise', 'infrastructure', 'digital strategy'],
    image: generatePlaceholderImageUrl('Cloud Migration'),
    category: 'whitepapers',
    publishDate: '2023-12-20',
    slug: 'cloud-migration-roadmap-enterprises'
  },

  // Industry Reports
  {
    id: '5',
    title: 'Tech Industry Trends 2024',
    summary: 'Annual report covering the most significant technology trends shaping industries worldwide.',
    keywords: ['tech trends', '2024 outlook', 'industry analysis', 'market research'],
    image: generatePlaceholderImageUrl('Tech Trends 2024'),
    category: 'industry-reports',
    publishDate: '2024-01-01',
    slug: 'tech-industry-trends-2024'
  },
  {
    id: '6',
    title: 'E-commerce Growth Patterns in Asia',
    summary: 'Detailed analysis of e-commerce growth trajectories across Asian markets.',
    keywords: ['e-commerce', 'Asia market', 'growth analysis', 'retail trends'],
    image: generatePlaceholderImageUrl('E-commerce Growth Asia'),
    category: 'industry-reports',
    publishDate: '2023-12-15',
    slug: 'ecommerce-growth-patterns-asia'
  },
  {
    id: '7',
    title: 'Remote Work Impact Assessment',
    summary: 'Comprehensive study on the long-term effects of remote work on productivity and company culture.',
    keywords: ['remote work', 'productivity', 'company culture', 'workplace trends'],
    image: generatePlaceholderImageUrl('Remote Work Impact'),
    category: 'industry-reports',
    publishDate: '2023-12-10',
    slug: 'remote-work-impact-assessment'
  },

  // Case Studies
  {
    id: '8',
    title: 'TechCorp\'s Digital Transformation Journey',
    summary: 'How a traditional manufacturing company successfully digitized their operations and increased efficiency by 40%.',
    keywords: ['digital transformation', 'manufacturing', 'efficiency', 'case study'],
    image: generatePlaceholderImageUrl('TechCorp Case Study'),
    category: 'case-studies',
    publishDate: '2023-12-05',
    slug: 'techcorp-digital-transformation-journey'
  },
  {
    id: '9',
    title: 'StartupXYZ\'s Scaling Strategy',
    summary: 'From startup to unicorn: A detailed look at how StartupXYZ scaled their operations globally.',
    keywords: ['startup scaling', 'global expansion', 'growth strategy', 'unicorn'],
    image: generatePlaceholderImageUrl('Startup Scaling Strategy'),
    category: 'case-studies',
    publishDate: '2023-11-28',
    slug: 'startupxyz-scaling-strategy'
  },
  {
    id: '10',
    title: 'RetailGiant\'s Customer Experience Revolution',
    summary: 'How a major retailer transformed their customer experience using data analytics and personalization.',
    keywords: ['customer experience', 'retail', 'data analytics', 'personalization'],
    image: generatePlaceholderImageUrl('Retail Customer Experience'),
    category: 'case-studies',
    publishDate: '2023-11-20',
    slug: 'retailgiant-customer-experience-revolution'
  },

  // Company Insights
  {
    id: '11',
    title: 'Building Resilient Business Models',
    summary: 'Our insights on creating business models that can withstand market volatility and economic uncertainty.',
    keywords: ['business resilience', 'market volatility', 'strategic planning', 'risk management'],
    image: generatePlaceholderImageUrl('Resilient Business Models'),
    category: 'company-insights',
    publishDate: '2023-11-15',
    slug: 'building-resilient-business-models'
  },
  {
    id: '12',
    title: 'The Future of Consulting Services',
    summary: 'Our perspective on how consulting services are evolving to meet changing client needs in the digital age.',
    keywords: ['consulting evolution', 'digital consulting', 'client needs', 'service innovation'],
    image: generatePlaceholderImageUrl('Future of Consulting'),
    category: 'company-insights',
    publishDate: '2023-11-10',
    slug: 'future-of-consulting-services'
  },
  {
    id: '13',
    title: 'Sustainable Business Practices Guide',
    summary: 'Our comprehensive guide to implementing sustainable practices that drive both profit and positive impact.',
    keywords: ['sustainability', 'ESG', 'sustainable business', 'impact investing'],
    image: generatePlaceholderImageUrl('Sustainable Business Guide'),
    category: 'company-insights',
    publishDate: '2023-11-05',
    slug: 'sustainable-business-practices-guide'
  }
];

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