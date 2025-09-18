'use client';

import React, { useState } from 'react';
import { Service } from '@/types/services';

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export default function ServiceCard({ service, className = '' }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardSize = service.type === 'program' ? 'h-auto min-h-[600px]' : 'h-auto min-h-[550px]';
  
  return (
    <div className={`${cardSize} ${className}`}>
      <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-3 border-gray-200 hover:border-gray-300 overflow-hidden group">
        {/* Header */}
        <div className="p-8 border-b-2 border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-4xl">{service.icon}</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="handwritten-title text-2xl text-notebook-dark group-hover:text-foundation transition-colors duration-300">
                  {service.title}
                </h3>
                <span className={`px-3 py-1 text-xs handwritten-xs rounded-full text-white`} style={{ backgroundColor: service.color }}>
                  {service.type.toUpperCase()}
                </span>
              </div>
              <p className="handwritten-subtitle text-lg text-gray-600">
                {service.subtitle}
              </p>
            </div>
          </div>
          
          <p className="handwritten-body text-gray-700 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Content */}
        <div className="p-8 flex-1">
          {/* Key Features */}
          <div className="mb-6">
            <h4 className="handwritten-lg text-notebook-dark mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: service.color }}></span>
              Key Features
            </h4>
            <ul className="space-y-2">
              {service.keyFeatures.slice(0, isExpanded ? service.keyFeatures.length : 3).map((feature, index) => (
                <li key={index} className="handwritten-body text-sm text-gray-600 flex items-start gap-2">
                  <span className="text-foundation mt-1">•</span>
                  {feature}
                </li>
              ))}
            </ul>
            {service.keyFeatures.length > 3 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 text-sm handwritten-xs text-foundation hover:text-scale transition-colors duration-300"
              >
                {isExpanded ? 'Show less' : `+${service.keyFeatures.length - 3} more features`}
              </button>
            )}
          </div>

          {/* Benefits */}
          <div className="mb-6">
            <h4 className="handwritten-lg text-notebook-dark mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-growth"></span>
              Benefits
            </h4>
            <ul className="space-y-2">
              {service.benefits.slice(0, 3).map((benefit, index) => (
                <li key={index} className="handwritten-body text-sm text-gray-600 flex items-start gap-2">
                  <span className="text-growth mt-1">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Meta Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="handwritten-xs text-gray-500 mb-1">Target Audience</p>
              <p className="handwritten-body text-sm text-gray-700">{service.targetAudience}</p>
            </div>
            <div>
              <p className="handwritten-xs text-gray-500 mb-1">Duration</p>
              <p className="handwritten-body text-sm text-gray-700">{service.duration}</p>
            </div>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="p-6 bg-gray-50 border-t border-gray-100">
          <div className="flex flex-row gap-3 justify-center items-center">
            <button className="px-4 py-2 bg-foundation text-white handwritten-body text-sm rounded-full hover:bg-scale transition-all duration-300 transform hover:scale-105 shadow-md">
              Learn More
            </button>
            <button className="px-4 py-2 border-2 border-foundation text-foundation handwritten-body text-sm rounded-full hover:bg-foundation hover:text-white transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}