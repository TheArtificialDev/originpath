'use client';

import React from 'react';
import Link from 'next/link';
import { ResearchItem } from '@/types/research';
import ResearchCard from './ResearchCard';

interface ResearchSectionProps {
  title: string;
  items: ResearchItem[];
  category: string;
  exploreMoreUrl?: string;
}

export default function ResearchSection({ title, items, category, exploreMoreUrl }: ResearchSectionProps) {
  if (items.length === 0) return null;

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="handwritten-title text-5xl mb-4">{title}</h2>
            <div className="w-24 h-1 bg-foundation rounded-full"></div>
          </div>
          
          {exploreMoreUrl && (
            <Link 
              href={exploreMoreUrl}
              className="group flex items-center gap-2 handwritten-md text-foundation hover:text-scale transition-colors duration-300"
            >
              Explore More
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className="transform group-hover:translate-x-1 transition-transform duration-300"
              >
                <path d="M5 12h14m-7-7l7 7-7 7"/>
              </svg>
            </Link>
          )}
        </div>

        {/* Cards Grid - 1 large card on left, 2 smaller cards on right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Large card */}
          <div className="lg:col-span-2">
            {items[0] && (
              <ResearchCard 
                item={items[0]} 
                size="large"
                className="h-full"
              />
            )}
          </div>

          {/* Right column - Two smaller cards */}
          <div className="flex flex-col gap-6">
            {items[1] && (
              <ResearchCard 
                item={items[1]} 
                size="small"
                className="flex-1"
              />
            )}
            {items[2] && (
              <ResearchCard 
                item={items[2]} 
                size="small"
                className="flex-1"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}