'use client';

import React from 'react';
import { ServiceCategory } from '@/types/services';
import ServiceCard from './ServiceCard';

interface ServiceSectionProps {
  category: ServiceCategory;
  className?: string;
}

export default function ServiceSection({ category, className = '' }: ServiceSectionProps) {
  return (
    <section className={`py-20 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="handwritten-title text-5xl md:text-6xl mb-6 text-notebook-dark">
            {category.title}
          </h2>
          <p className="handwritten-subtitle text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {category.description}
          </p>
          <div className="w-32 h-1 bg-foundation rounded-full mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className={`grid gap-8 ${
          category.services.length === 2 
            ? 'grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto' 
            : 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'
        }`}>
          {category.services.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service}
              className="flex-1"
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200">
            <h3 className="handwritten-title text-3xl text-notebook-dark mb-4">
              Ready to Get Started?
            </h3>
            <p className="handwritten-body text-gray-600 mb-6 max-w-md mx-auto">
              Let&apos;s discuss how we can help transform your business and accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-foundation text-white handwritten-lg rounded-full hover:bg-scale transition-all duration-300 transform hover:scale-105 shadow-lg">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border-2 border-foundation text-foundation handwritten-lg rounded-full hover:bg-foundation hover:text-white transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}