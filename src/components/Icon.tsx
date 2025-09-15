'use client';

import React from 'react';

interface IconProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 'md', className = '', color = '#2c3e50' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const icons = {
    // Business and Strategy Icons
    lightbulb: (
      <svg viewBox="0 0 24 24" fill="none" className={`${sizeClasses[size]} ${className}`}>
        <path d="M12 2c-3.5 0-6.5 2.5-6.5 6 0 2.5 1.5 4.5 3 5.5v2c0 0.5 0.5 1 1 1h5c0.5 0 1-0.5 1-1v-2c1.5-1 3-3 3-5.5 0-3.5-3-6-6.5-6z" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" transform="rotate(-2 12 12)" />
        <path d="M9 16h6M10 19h4" stroke={color} strokeWidth="1.5" strokeLinecap="round" transform="rotate(1 12 17.5)" />
      </svg>
    ),

    rocket: (
      <svg viewBox="0 0 24 24" fill="none" className={`${sizeClasses[size]} ${className}`}>
        <path d="M12 2l-2 8-8 2 8 2 2 8 2-8 8-2-8-2-2-8z" stroke={color} strokeWidth="1.5" fill="none" transform="rotate(-3 12 12)" />
        <circle cx="12" cy="8" r="1.5" fill={color} transform="rotate(1 12 8)" />
        <path d="M8 16c-1 1-1 3 0 4s3 1 4 0" stroke={color} strokeWidth="1.5" strokeLinecap="round" transform="rotate(2 10 18)" />
      </svg>
    ),

    chart: (
      <svg viewBox="0 0 24 24" fill="none" className={`${sizeClasses[size]} ${className}`}>
        <path d="M3 17l4-4 4 4 6-6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(-1 12 12)" />
        <path d="M17 7h4v4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(1 19 9)" />
        <path d="M3 20h18" stroke={color} strokeWidth="1.5" strokeLinecap="round" transform="rotate(0.5 12 20)" />
      </svg>
    ),

    users: (
      <svg viewBox="0 0 24 24" fill="none" className={`${sizeClasses[size]} ${className}`}>
        <circle cx="9" cy="7" r="3" stroke={color} strokeWidth="1.5" fill="none" transform="rotate(-2 9 7)" />
        <circle cx="16" cy="7" r="2.5" stroke={color} strokeWidth="1.5" fill="none" transform="rotate(1 16 7)" />
        <path d="M3 20c0-3.5 2.5-6 6-6s6 2.5 6 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" transform="rotate(0.5 9 17)" />
        <path d="M16 13c2.5 0 5 1.5 5 4v3" stroke={color} strokeWidth="1.5" strokeLinecap="round" transform="rotate(-0.5 18.5 16.5)" />
      </svg>
    ),

    research: (
      <svg viewBox="0 0 24 24" fill="none" className={`${sizeClasses[size]} ${className}`}>
        <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="1.5" fill="none" transform="rotate(-1 12 12)" />
        <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.5" fill="none" transform="rotate(2 12 12)" />
        <path d="M18.5 18.5l3 3" stroke={color} strokeWidth="1.5" strokeLinecap="round" transform="rotate(-2 20 20)" />
      </svg>
    ),

    // Technology Icons
    code: (
      <svg viewBox="0 0 24 24" fill="none" className={`${sizeClasses[size]} ${className}`}>
        <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(1 12 12)" />
        <path d="M14 4l-4 16" stroke={color} strokeWidth="1.5" strokeLinecap="round" transform="rotate(-1 12 12)" />
      </svg>
    ),

    mobile: (
      <svg viewBox="0 0 24 24" fill="none" className={`${sizeClasses[size]} ${className}`}>
        <rect x="5" y="2" width="14" height="20" rx="3" stroke={color} strokeWidth="1.5" fill="none" transform="rotate(-0.5 12 12)" />
        <circle cx="12" cy="18" r="1" fill={color} transform="rotate(1 12 18)" />
        <path d="M8 5h8" stroke={color} strokeWidth="1.5" strokeLinecap="round" transform="rotate(0.3 12 5)" />
      </svg>
    ),

    // Business Process Icons
    target: (
      <svg viewBox="0 0 24 24" fill="none" className={`${sizeClasses[size]} ${className}`}>
        <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" fill="none" transform="rotate(-1 12 12)" />
        <circle cx="12" cy="12" r="6" stroke={color} strokeWidth="1.5" fill="none" transform="rotate(1 12 12)" />
        <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.5" fill="none" transform="rotate(-0.5 12 12)" />
        <circle cx="12" cy="12" r="1" fill={color} />
      </svg>
    ),

    growth: (
      <svg viewBox="0 0 24 24" fill="none" className={`${sizeClasses[size]} ${className}`}>
        <path d="M3 12h3l3-9 6 18 3-9h3" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="rotate(-0.5 12 12)" />
        <circle cx="18" cy="6" r="2" stroke={color} strokeWidth="1.5" fill="none" transform="rotate(2 18 6)" />
      </svg>
    ),

    partnership: (
      <svg viewBox="0 0 24 24" fill="none" className={`${sizeClasses[size]} ${className}`}>
        <path d="M17 12c0-3-2.5-5-5-5s-5 2-5 5" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" transform="rotate(-1 12 9.5)" />
        <circle cx="7" cy="12" r="3" stroke={color} strokeWidth="1.5" fill="none" transform="rotate(2 7 12)" />
        <circle cx="17" cy="12" r="3" stroke={color} strokeWidth="1.5" fill="none" transform="rotate(-1 17 12)" />
        <path d="M12 7v10" stroke={color} strokeWidth="1.5" strokeLinecap="round" transform="rotate(0.5 12 12)" />
      </svg>
    ),

    // Arrow variations
    arrowRight: (
      <svg viewBox="0 0 24 24" fill="none" className={`${sizeClasses[size]} ${className}`}>
        <path d="M7 12h10M14 7l5 5-5 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(-0.5 12 12)" />
      </svg>
    ),

    star: (
      <svg viewBox="0 0 24 24" fill="none" className={`${sizeClasses[size]} ${className}`}>
        <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.8 5.6 21.2 8 14l-6-4.8h7.6L12 2z" stroke={color} strokeWidth="1.5" fill="none" transform="rotate(1 12 12)" />
      </svg>
    ),

    // Doodle elements
    scribble: (
      <svg viewBox="0 0 24 24" fill="none" className={`${sizeClasses[size]} ${className}`}>
        <path d="M3 12c3-3 6-3 9 0s6 3 9 0" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" transform="rotate(-2 12 12)" />
        <path d="M2 8c4-2 8-2 12 0s8 2 8 0" stroke={color} strokeWidth="1" strokeLinecap="round" fill="none" transform="rotate(1 12 8)" opacity="0.7" />
        <path d="M4 16c3-1 6-1 9 0s6 1 7 0" stroke={color} strokeWidth="1" strokeLinecap="round" fill="none" transform="rotate(-1 12 16)" opacity="0.7" />
      </svg>
    )
  };

  return icons[name as keyof typeof icons] || null;
};

export default Icon;