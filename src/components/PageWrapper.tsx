'use client';

import { ReactNode } from 'react';
import Navigation from './Navigation';

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className="notebook-bg min-h-screen relative page-transition">      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content with top padding for sticky nav */}
      <div className="relative z-10">
        <main className="px-6 md:px-12 lg:px-20 pt-16">
          {children}
        </main>
      </div>
    </div>
  );
};

export default PageWrapper;