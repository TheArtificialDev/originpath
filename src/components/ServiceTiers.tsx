'use client';

import React from 'react';
import Link from 'next/link';

interface ServiceTier {
  name: string;
  priceRange: string;
  description: string;
  services: string[];
  color: string;
  bgClass: string;
  href: string;
}

const serviceTiers: ServiceTier[] = [
  {
    name: 'Foundation',
    priceRange: '₹25K - ₹1.5L',
    description: 'Perfect for pre-seed startups and early entrepreneurs',
    services: ['Business Model Canvas', 'MVP Planning', 'Pitch Decks', 'Basic Market Research', 'Digital Marketing Strategy'],
    color: 'var(--foundation-color)',
    bgClass: 'service-foundation',
    href: '/services/foundation'
  },
  {
    name: 'Growth',
    priceRange: '₹1.5L - ₹5L',
    description: 'Ideal for seed-stage startups ready to scale',
    services: ['Complete MVP Development', 'Go-to-Market Strategy', 'Advanced Research', 'Digital Transformation', 'Analytics Setup'],
    color: 'var(--growth-color)',
    bgClass: 'service-growth',
    href: '/services/growth'
  },
  {
    name: 'Scale',
    priceRange: '₹5L - ₹15L',
    description: 'For growth-stage companies expanding rapidly',
    services: ['Enterprise Development', 'Business Intelligence', 'Market Expansion', 'System Integration', 'Strategic Planning'],
    color: 'var(--scale-color)',
    bgClass: 'service-scale',
    href: '/services/scale'
  },
  {
    name: 'Enterprise',
    priceRange: '₹15L+',
    description: 'Complete digital transformation for established companies',
    services: ['Full Digital Transformation', 'Innovation Labs', 'Custom Solutions', 'Executive Advisory', 'Long-term Partnerships'],
    color: 'var(--enterprise-color)',
    bgClass: 'service-enterprise',
    href: '/services/enterprise'
  }
];

interface ServiceTierCardProps {
  tier: ServiceTier;
  index: number;
}

const ServiceTierCard: React.FC<ServiceTierCardProps> = ({ tier, index }) => {
  const rotations = ['-0.5deg', '0.3deg', '-0.2deg', '0.4deg'];
  const positions = [
    'transform translate-x-2',
    'transform -translate-x-1 translate-y-1',
    'transform translate-x-1 -translate-y-1',
    'transform -translate-x-2 translate-y-2'
  ];

  return (
    <Link href={tier.href}>
      <div 
        className={`
          ${tier.bgClass} p-6 rounded-lg border-2 border-gray-200 
          ${positions[index]} hover:scale-105 transition-all duration-300
          cursor-pointer shadow-md hover:shadow-lg relative overflow-hidden
        `}
        style={{ 
          transform: `rotate(${rotations[index]}) ${positions[index].split(' ').slice(1).join(' ')}`
        }}
      >
        {/* Tier name with handwritten style */}
        <div className="text-center mb-4">
          <h3 className="handwritten-bold text-3xl mb-2" style={{ color: tier.color }}>
            {tier.name}
          </h3>
          <div className="handwritten-casual text-xl text-gray-700 transform rotate-1">
            {tier.priceRange}
          </div>
        </div>

        {/* Description */}
        <p className="handwritten-body text-sm text-gray-600 mb-4 text-center transform -rotate-0.5">
          {tier.description}
        </p>

        {/* Services list */}
        <ul className="space-y-2">
          {tier.services.map((service, serviceIndex) => (
            <li 
              key={serviceIndex}
              className="handwritten-light text-sm flex items-start transform"
              style={{ 
                transform: `rotate(${(serviceIndex % 2 === 0 ? 0.2 : -0.2)}deg)`,
                marginLeft: `${serviceIndex % 3 * 8}px`
              }}
            >
              <span className="text-gray-400 mr-2">•</span>
              <span>{service}</span>
            </li>
          ))}
        </ul>

        {/* Call to action */}
        <div className="mt-6 text-center">
          <span className="handwritten-casual text-gray-500 transform rotate-1 inline-block hover:text-gray-700">
            Explore {tier.name} →
          </span>
        </div>

        {/* Decorative element */}
        <div 
          className="absolute top-2 right-2 w-3 h-3 rounded-full opacity-30"
          style={{ backgroundColor: tier.color }}
        />
      </div>
    </Link>
  );
};

const ServiceTiers: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {serviceTiers.map((tier, index) => (
        <ServiceTierCard key={tier.name} tier={tier} index={index} />
      ))}
    </div>
  );
};

export default ServiceTiers;