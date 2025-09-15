'use client';

import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon' | 'text';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'full', 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-base',
    lg: 'w-16 h-16 text-lg',
    xl: 'w-24 h-24 text-2xl'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-4xl'
  };

  const IconSVG = () => (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeClasses[size]} ${className}`}
    >
      {/* Notebook page background */}
      <rect 
        x="10" 
        y="10" 
        width="80" 
        height="80" 
        fill="#ffffff" 
        stroke="#e0e0e0" 
        strokeWidth="1"
        rx="2"
      />
      
      {/* Grid lines */}
      <defs>
        <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#f0f0f0" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect x="10" y="10" width="80" height="80" fill="url(#grid)" />
      
      {/* Origin Path elements - handwritten style */}
      <g transform="rotate(-2 50 50)">
        {/* Arrow path representing "origin" */}
        <path 
          d="M 25 45 Q 35 35 45 45 T 65 40" 
          stroke="#2c3e50" 
          strokeWidth="2.5" 
          fill="none" 
          strokeLinecap="round"
        />
        
        {/* Arrow head */}
        <path 
          d="M 62 38 L 68 40 L 62 43" 
          stroke="#2c3e50" 
          strokeWidth="2.5" 
          fill="none" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Dots representing milestones */}
        <circle cx="30" cy="42" r="1.5" fill="#3498db" />
        <circle cx="45" cy="45" r="1.5" fill="#3498db" />
        <circle cx="60" cy="41" r="1.5" fill="#3498db" />
      </g>
      
      {/* Small handwritten "OP" initials */}
      <g transform="rotate(1 75 25)">
        <text 
          x="75" 
          y="25" 
          fontSize="12" 
          fill="#7f8c8d" 
          fontFamily="Caveat, cursive"
          fontWeight="600"
        >
          OP
        </text>
      </g>
    </svg>
  );

  const TextLogo = ({ size: textSize }: { size: keyof typeof textSizes }) => (
    <span 
      className={`handwritten-title ${textSizes[textSize]} text-gray-800 ${className}`}
      style={{ transform: 'rotate(-0.5deg)' }}
    >
      Origin<span className="text-blue-600 ml-1" style={{ transform: 'rotate(1deg)' }}>Path</span>
    </span>
  );

  if (variant === 'icon') {
    return <IconSVG />;
  }

  if (variant === 'text') {
    return <TextLogo size={size} />;
  }

  // Full logo with icon and text
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <IconSVG />
      <TextLogo size={size} />
    </div>
  );
};

export default Logo;