'use client';

import React, { useState } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function SearchBar({ value, onChange, placeholder = "Search...", className = "" }: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`relative max-w-2xl mx-auto ${className}`}>
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
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full py-4 pl-12 pr-12 bg-transparent rounded-full handwritten-body text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {/* Clear Button */}
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 transition-colors duration-300"
            type="button"
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
      </div>

      {/* Search suggestions placeholder - can be expanded later */}
      {value && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-60 overflow-y-auto">
          {/* This can be expanded to show search suggestions */}
          <div className="p-4 text-sm handwritten-body text-gray-500 text-center">
            Press Enter to search for &quot;{value}&quot;
          </div>
        </div>
      )}
    </div>
  );
}