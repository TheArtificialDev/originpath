'use client';

import React, { useState, useMemo } from 'react';
import { mockResearchItems } from '@/types/research';
import ResearchCard from '@/components/research/ResearchCard';
import ResearchSection from '@/components/research/ResearchSection';
import SearchBar from '@/components/research/SearchBar';
import Navigation from '@/components/Navigation';

export default function ResearchPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter all items based on search
  const filteredItems = useMemo(() => {
    if (!searchTerm) return mockResearchItems;

    return mockResearchItems.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.keywords.some(keyword => 
        keyword.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  // Get featured research (only if not searching)
  const featuredResearch = !searchTerm ? mockResearchItems.filter(item => item.featured) : [];

  // Get items by category (filtered if searching)
  const getItemsByCategory = (category: string) => {
    if (searchTerm) {
      return filteredItems
        .filter(item => item.category === category)
        .slice(0, 6); // Show more items when searching
    }
    return mockResearchItems
      .filter(item => item.category === category && !item.featured)
      .slice(0, 3); // Only show 3 items per section normally
  };

  const whitePapers = getItemsByCategory('whitepapers');
  const industryReports = getItemsByCategory('industry-reports');
  const caseStudies = getItemsByCategory('case-studies');
  const companyInsights = getItemsByCategory('company-insights');

  // If searching and have results, show all results in one section
  if (searchTerm && filteredItems.length > 0) {
    return (
      <div className="min-h-screen notebook-bg">
        <Navigation />
        {/* Hero Section */}
        <div className="h-screen flex flex-col items-center justify-center relative px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="hero-title hero-title-xl mb-8">
              Research
            </h1>
            <p className="handwritten-subtitle mb-12 max-w-2xl mx-auto">
              Discover insights, analysis, and thought leadership that drives business transformation
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <SearchBar 
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="Search by keywords, titles, or topics..."
              />
            </div>
          </div>
        </div>

        {/* Search Results */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="handwritten-title text-4xl mb-4">
                Search Results
              </h2>
              <p className="handwritten-body text-gray-600">
                Found <span className="text-foundation font-bold">{filteredItems.length}</span> result{filteredItems.length !== 1 ? 's' : ''} 
                for &quot;<span className="text-foundation">{searchTerm}</span>&quot;
              </p>
              <div className="w-24 h-1 bg-foundation rounded-full mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <ResearchCard 
                  key={item.id}
                  item={item}
                  size="large"
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // If searching but no results
  if (searchTerm && filteredItems.length === 0) {
    return (
      <div className="min-h-screen notebook-bg">
        <Navigation />
        {/* Hero Section */}
        <div className="h-screen flex flex-col items-center justify-center relative px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="hero-title hero-title-xl mb-8">
              Research
            </h1>
            <p className="handwritten-subtitle mb-12 max-w-2xl mx-auto">
              Discover insights, analysis, and thought leadership that drives business transformation
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <SearchBar 
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="Search by keywords, titles, or topics..."
              />
            </div>
          </div>
        </div>

        {/* No Results */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-6 opacity-50">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-gray-400">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </div>
            <h3 className="handwritten-title text-4xl text-gray-700 mb-4">
              No Results Found
            </h3>
            <p className="handwritten-body text-gray-600 mb-8">
              We couldn&apos;t find any research matching &quot;<span className="text-foundation">{searchTerm}</span>&quot;. 
              Try using different keywords or browse our categories below.
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="handwritten-md text-foundation hover:text-scale transition-colors duration-300"
            >
              Clear Search & Browse All Research
            </button>
          </div>
        </section>
      </div>
    );
  }

  // Default view (no search)
  return (
    <div className="min-h-screen notebook-bg">
      <Navigation />
      {/* Hero Section */}
      <div className="h-screen flex flex-col items-center justify-center relative px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="hero-title hero-title-xl mb-8">
            Research
          </h1>
          <p className="handwritten-subtitle mb-12 max-w-2xl mx-auto">
            Discover insights, analysis, and thought leadership that drives business transformation
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <SearchBar 
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Search by keywords, titles, or topics..."
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-transparent via-gray-400 to-transparent rounded-full"></div>
        </div>
      </div>

      {/* Featured Research Section */}
      {featuredResearch.length > 0 && (
        <ResearchSection
          title="Featured Research"
          items={featuredResearch}
          category="featured"
        />
      )}

      {/* White Papers Section */}
      {whitePapers.length > 0 && (
        <ResearchSection
          title="White Papers"
          items={whitePapers}
          category="whitepapers"
          exploreMoreUrl="/research/whitepapers"
        />
      )}

      {/* Industry Reports Section */}
      {industryReports.length > 0 && (
        <ResearchSection
          title="Industry Reports"
          items={industryReports}
          category="industry-reports"
          exploreMoreUrl="/research/industry-reports"
        />
      )}

      {/* Case Studies Section */}
      {caseStudies.length > 0 && (
        <ResearchSection
          title="Case Studies"
          items={caseStudies}
          category="case-studies"
          exploreMoreUrl="/research/case-studies"
        />
      )}

      {/* Company Insights Section */}
      {companyInsights.length > 0 && (
        <ResearchSection
          title="Company Insights"
          items={companyInsights}
          category="company-insights"
          exploreMoreUrl="/research/company-insights"
        />
      )}
    </div>
  );
}