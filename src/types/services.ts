export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyFeatures: string[];
  benefits: string[];
  targetAudience: string;
  duration: string;
  type: 'service' | 'program';
  color: string;
  icon: string;
  category: 'audit' | 'implementation' | 'founders' | 'accelerator' | 'network';
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  services: Service[];
}

// Core Services Data
export const coreServices: Service[] = [
  {
    id: 'automation-audit',
    title: 'Internal Automation & AI Adoption Audit',
    subtitle: 'Comprehensive Readiness Assessment',
    description: 'We visit your organization to conduct a thorough assessment of your automation and AI adoption readiness. Our experts identify bottlenecks, process inefficiencies, and provide actionable solutions to prepare your organization for digital transformation.',
    keyFeatures: [
      'On-site organizational assessment',
      'Process documentation and analysis', 
      'AI/Automation readiness evaluation',
      'Infrastructure capability review',
      'Team skill gap analysis',
      'Comprehensive reporting with recommendations'
    ],
    benefits: [
      'Clear roadmap for digital transformation',
      'Identified cost-saving opportunities',
      'Risk mitigation strategies',
      'Enhanced operational efficiency',
      'Prepared workforce for automation'
    ],
    targetAudience: 'SMEs and enterprises looking to adopt AI and automation',
    duration: '2-4 weeks',
    type: 'service',
    color: 'var(--foundation-color)',
    icon: '🔍',
    category: 'audit'
  },
  {
    id: 'automation-implementation',
    title: 'In-house AI & Automation Implementation',
    subtitle: 'Build & Deploy Custom Solutions',
    description: 'Our expert team identifies high-ROI automation opportunities and builds custom AI and automation systems right within your organization. We focus on critical infrastructure and processes that deliver immediate impact.',
    keyFeatures: [
      'High-ROI opportunity identification',
      'Custom automation system development',
      'AI solution implementation',
      'Critical infrastructure optimization',
      'Real-time system integration',
      'Performance monitoring and optimization'
    ],
    benefits: [
      'Immediate operational improvements',
      'Significant cost reductions',
      'Enhanced productivity and efficiency',
      'Scalable automation solutions',
      'Competitive advantage through innovation'
    ],
    targetAudience: 'Organizations ready to implement automation solutions',
    duration: '4-12 weeks',
    type: 'service',
    color: 'var(--growth-color)',
    icon: '🤖',
    category: 'implementation'
  },
  {
    id: 'founder-network',
    title: 'Founder Network & Assistance Program',
    subtitle: 'High-Impact Leadership Development',
    description: 'An exclusive program for founders and leaders to share challenges, receive expert guidance, and accelerate their growth. We focus on creating high-impact founders who can drive meaningful change in their organizations.',
    keyFeatures: [
      'One-on-one founder mentorship',
      'Problem-solving workshops',
      'GTM strategy optimization',
      'Team performance enhancement',
      'Leadership development',
      'Exclusive founder community access'
    ],
    benefits: [
      'Accelerated personal and professional growth',
      'Enhanced leadership capabilities',
      'Improved team effectiveness',
      'Strategic decision-making skills',
      'Valuable network connections'
    ],
    targetAudience: 'Founders and senior leaders seeking growth acceleration',
    duration: '3-6 months',
    type: 'service',
    color: 'var(--scale-color)',
    icon: '🚀',
    category: 'founders'
  }
];

// Programs Data
export const programs: Service[] = [
  {
    id: 'virtual-accelerator',
    title: 'Virtual Tech Accelerator Program',
    subtitle: 'India\'s First Fully Virtual Accelerator',
    description: 'A comprehensive virtual accelerator program for tech entrepreneurs worldwide. We provide MVP development support, strategic planning, and access to a curated network of high-skilled professionals ready to join startups.',
    keyFeatures: [
      'Virtual mentorship and guidance',
      'MVP development support',
      'Strategic business planning',
      'Access to skilled talent network',
      'Global reach and accessibility',
      'Comprehensive startup toolkit'
    ],
    benefits: [
      'Accelerated startup development',
      'Access to global talent pool',
      'Reduced geographical constraints',
      'Cost-effective program participation',
      'Strong peer network',
      'Proven framework for success'
    ],
    targetAudience: 'Tech entrepreneurs and early-stage startups globally',
    duration: '3-6 months',
    type: 'program',
    color: 'var(--enterprise-color)',
    icon: '🌐',
    category: 'accelerator'
  },
  {
    id: 'elite-network',
    title: 'Elite Founder Social Network',
    subtitle: 'Exclusive Tech Leadership Community',
    description: 'An invite-only, exclusive social network designed for elite founders and leaders in the Indian tech ecosystem. This premium community facilitates high-level connections, strategic discussions, and collaborative opportunities.',
    keyFeatures: [
      'Invite-only exclusive membership',
      'Elite founder community',
      'High-level networking opportunities',
      'Strategic collaboration platform',
      'Industry insights and trends',
      'Private discussion forums'
    ],
    benefits: [
      'Access to top-tier professional network',
      'Strategic partnership opportunities',
      'Industry insider knowledge',
      'High-quality business connections',
      'Collaborative innovation opportunities',
      'Exclusive event access'
    ],
    targetAudience: 'Elite founders and leaders in Indian tech ecosystem',
    duration: 'Ongoing membership',
    type: 'program',
    color: 'var(--scale-color)',
    icon: '👑',
    category: 'network'
  }
];

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'core-services',
    title: 'Core Services',
    description: 'Comprehensive solutions designed to transform your business operations and leadership capabilities',
    services: coreServices
  },
  {
    id: 'programs',
    title: 'Signature Programs',
    description: 'Exclusive programs designed to accelerate growth and build elite professional networks',
    services: programs
  }
];