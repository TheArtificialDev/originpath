'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ResearchItem } from '@/types/research';

interface ResearchCardProps {
  item: ResearchItem;
  size?: 'large' | 'small';
  className?: string;
}

export default function ResearchCard({ item, size = 'large', className = '' }: ResearchCardProps) {
  const cardHeight = size === 'large' ? 'h-96' : 'h-44';
  const imageHeight = size === 'large' ? 'h-48' : 'h-24';
  const titleSize = size === 'large' ? 'handwritten-lg' : 'handwritten-md';
  const summarySize = size === 'large' ? 'handwritten-body text-sm' : 'handwritten-body text-xs';

  return (
    <Link 
      href={`/research/${item.category}/${item.slug}`}
      className={`group block ${className}`}
    >
      <div className={`${cardHeight} bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-gray-200 hover:border-gray-300 overflow-hidden`}>
        {/* Image */}
        <div className={`${imageHeight} relative overflow-hidden`}>
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              // Fallback to a placeholder if image fails to load
              const target = e.target as HTMLImageElement;
              target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjlmYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNmI3MjgwIiBmb250LXNpemU9IjE0Ij5SZXNlYXJjaCBJbWFnZTwvdGV4dD48L3N2Zz4=';
            }}
          />
          
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 text-xs font-semibold text-white bg-black/70 rounded-full backdrop-blur-sm">
              {item.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 h-full flex flex-col justify-between">
          <div className="flex-grow">
            <h3 className={`${titleSize} text-notebook-dark mb-2 line-clamp-2 group-hover:text-foundation transition-colors duration-300`}>
              {item.title}
            </h3>
            {size === 'large' && (
              <p className={`${summarySize} text-gray-600 mb-3 line-clamp-3`}>
                {item.summary}
              </p>
            )}
          </div>

          {/* Keywords */}
          <div className="flex flex-wrap gap-1 mt-auto">
            {item.keywords.slice(0, size === 'large' ? 4 : 2).map((keyword, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs handwritten-xs bg-gray-100 text-gray-600 rounded-full"
              >
                {keyword}
              </span>
            ))}
            {item.keywords.length > (size === 'large' ? 4 : 2) && (
              <span className="px-2 py-1 text-xs handwritten-xs text-gray-400">
                +{item.keywords.length - (size === 'large' ? 4 : 2)} more
              </span>
            )}
          </div>

          {/* Date */}
          <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
            <span className="text-xs handwritten-xs text-gray-500">
              {new Date(item.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </span>
            <div className="text-foundation opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 12h14m-7-7l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}