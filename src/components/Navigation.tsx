'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Research', path: '/research' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky-nav py-2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo size="lg" />
          </Link>
          
          {/* Navigation Items */}
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
            <button className="handwritten-casual text-3xl font-bold text-gray-700 hover:text-gray-900">
              Menu
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;