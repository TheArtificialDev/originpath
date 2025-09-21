'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ResearchSearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get('search') || '');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setSearchValue(searchParams.get('search') || '');
  }, [searchParams]);

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (value.trim()) {
      params.set('search', value.trim());
    } else {
      params.delete('search');
    }
    
    // Remove category when searching
    if (value.trim()) {
      params.delete('category');
    }
    
    router.push(`/research?${params.toString()}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(searchValue);
    }
  };

  const clearSearch = () => {
    setSearchValue('');
    const params = new URLSearchParams(searchParams.toString());
    params.delete('search');
    router.push(`/research?${params.toString()}`);
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className={`relative bg-white rounded-full border-2 transition-all duration-300 ${
        isFocused ? 'border-foundation shadow-lg' : 'border-gray-200 shadow-md'
      }`}>
        {/* Search Icon */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className={`transition-colors duration-300 ${
              isFocused ? 'text-foundation' : 'text-gray-400'
            }`}
          >
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        </div>

        {/* Input Field */}
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search research articles, whitepapers, and insights..."
          className="w-full py-4 pl-12 pr-12 bg-transparent rounded-full handwritten-body text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {/* Search/Clear Button */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex gap-2">
          {searchValue && (
            <button
              onClick={clearSearch}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-300"
              type="button"
              title="Clear search"
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className="text-gray-400 hover:text-gray-600"
              >
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          )}
          <button
            onClick={() => handleSearch(searchValue)}
            className="px-4 py-1 bg-foundation text-white rounded-full text-sm handwritten-body hover:bg-growth transition-all duration-300"
            type="button"
          >
            Search
          </button>
        </div>
      </div>

      {/* Quick category filters */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {[
          { label: 'All', value: '' },
          { label: 'Whitepapers', value: 'whitepapers' },
          { label: 'Reports', value: 'industry-reports' },
          { label: 'Case Studies', value: 'case-studies' },
          { label: 'Insights', value: 'company-insights' }
        ].map((category) => {
          const isActive = searchParams.get('category') === category.value || 
                          (!searchParams.get('category') && category.value === '');
          
          return (
            <button
              key={category.value}
              onClick={() => {
                const params = new URLSearchParams(searchParams.toString());
                if (category.value) {
                  params.set('category', category.value);
                } else {
                  params.delete('category');
                }
                router.push(`/research?${params.toString()}`);
              }}
              className={`px-4 py-2 rounded-full text-sm handwritten-body transition-all duration-300 ${
                isActive 
                  ? 'bg-foundation text-white shadow-md' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}