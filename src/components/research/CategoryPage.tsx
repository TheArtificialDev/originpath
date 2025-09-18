'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { mockResearchItems, researchCategories } from '@/types/research';
import ResearchCard from '@/components/research/ResearchCard';
import SearchBar from '@/components/research/SearchBar';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface CategoryPageProps {
  categoryId: 'whitepapers' | 'industry-reports' | 'case-studies' | 'company-insights';
}

export default function CategoryPage({ categoryId }: CategoryPageProps) {
  const [searchTerm, setSearchTerm] = useState('');

  // Get category info and items
  const categoryInfo = researchCategories.find(cat => cat.id === categoryId);
  const categoryItems = mockResearchItems.filter(item => item.category === categoryId);

  // Filter and sort items based on search
  const filteredItems = useMemo(() => {
    let filtered = categoryItems;

    if (searchTerm) {
      filtered = categoryItems.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.keywords.some(keyword => 
          keyword.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Sort by date (most recent first)
    return filtered.sort((a, b) => 
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
  }, [categoryItems, searchTerm]);

  if (!categoryInfo) {
    return (
      <div className="min-h-screen notebook-bg">
        <Navigation />
        <div className="flex items-center justify-center" style={{ minHeight: 'calc(100vh - 80px)' }}>
          <div className="text-center">
            <h1 className="handwritten-title text-4xl mb-4">Category Not Found</h1>
            <Link href="/research" className="handwritten-md text-foundation hover:text-scale">
              Back to Research
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen notebook-bg">
      <Navigation />
      {/* Header Section */}
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 handwritten-body text-gray-600">
              <Link href="/research" className="hover:text-foundation transition-colors duration-300">
                Research
              </Link>
              <span>/</span>
              <span className="text-foundation">{categoryInfo.title}</span>
            </div>
          </nav>

          {/* Page Title */}
          <div className="mb-8">
            <h1 className="handwritten-title text-6xl mb-4 text-notebook-dark">
              {categoryInfo.title}
            </h1>
            <p className="handwritten-subtitle max-w-3xl">
              {categoryInfo.description}
            </p>
            <div className="w-32 h-1 bg-foundation rounded-full mt-6"></div>
          </div>

          {/* Search Bar */}
          <div className="mb-12">
            <SearchBar 
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder={`Search ${categoryInfo.title.toLowerCase()} by title, content, or keywords...`}
              className="max-w-xl"
            />
          </div>

          {/* Results Summary */}
          <div className="mb-8">
            <p className="handwritten-body text-gray-600">
              {searchTerm ? (
                <>
                  Found <span className="text-foundation font-bold">{filteredItems.length}</span> result{filteredItems.length !== 1 ? 's' : ''} 
                  {searchTerm && (
                    <> matching &quot;<span className="text-foundation">{searchTerm}</span>&quot;</>
                  )}
                </>
              ) : (
                <>
                  Showing all <span className="text-foundation font-bold">{filteredItems.length}</span> item{filteredItems.length !== 1 ? 's' : ''}
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <ResearchCard 
                  key={item.id}
                  item={item}
                  size="large"
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 opacity-50">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-gray-400">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                </div>
                <h3 className="handwritten-lg text-gray-700 mb-4">
                  {searchTerm ? 'No Results Found' : `No ${categoryInfo.title} Available`}
                </h3>
                <p className="handwritten-body text-gray-600 mb-6">
                  {searchTerm 
                    ? `We couldn&apos;t find any ${categoryInfo.title.toLowerCase()} matching &quot;${searchTerm}&quot;. Try adjusting your search terms.`
                    : `Check back soon for new ${categoryInfo.title.toLowerCase()}.`
                  }
                </p>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="handwritten-md text-foundation hover:text-scale transition-colors duration-300"
                  >
                    Clear Search
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}