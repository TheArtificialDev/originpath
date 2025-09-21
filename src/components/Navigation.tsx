'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Logo from './Logo';

const Navigation = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Research', path: '/research' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky-nav py-2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
            <Logo size="lg" />
          </Link>
          
          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                href={item.path}
                className={`
                  handwritten-casual text-2xl font-bold transition-all duration-300 hover:text-gray-800 hover:scale-110
                  ${pathname === item.path ? 'text-gray-800 sketch-underline' : 'text-gray-600'}
                  ${pathname === item.path ? 'transform rotate-0.5' : 'hover:rotate-0.5'}
                `}
                style={{ 
                  transform: `rotate(${(index % 2 === 0 ? 0.3 : -0.3) * (index + 1)}deg)`,
                  display: 'inline-block'
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="handwritten-casual text-3xl font-bold text-gray-700 hover:text-gray-900 transition-transform duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={closeMobileMenu}
                  className={`
                    handwritten-casual text-2xl font-bold transition-all duration-300 hover:text-gray-800
                    ${pathname === item.path ? 'text-gray-800 sketch-underline' : 'text-gray-600'}
                    px-2 py-1 block
                  `}
                  style={{ 
                    transform: `rotate(${(index % 2 === 0 ? 0.2 : -0.2)}deg)`,
                    display: 'block'
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;