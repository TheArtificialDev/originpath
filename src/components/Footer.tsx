'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI & Automation Audit', href: '/services#audit' },
      { name: 'Implementation Services', href: '/services#implementation' },
      { name: 'Founder Network Program', href: '/services#founders' },
      { name: 'Virtual Accelerator', href: '/services#accelerator' },
      { name: 'Elite Social Network', href: '/services#network' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Research', href: '/research' },
      { name: 'Insights', href: '/insights' },
      { name: 'Events', href: '/events' },
      { name: 'Careers', href: '/careers' }
    ],
    resources: [
      { name: 'White Papers', href: '/research/whitepapers' },
      { name: 'Case Studies', href: '/research/case-studies' },
      { name: 'Industry Reports', href: '/research/industry-reports' },
      { name: 'Company Insights', href: '/research/company-insights' },
      { name: 'Blog', href: '/blog' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Data Protection', href: '/data-protection' }
    ]
  };

  return (
    <footer className="bg-white border-t-3 border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo size="xl" />
            </div>
            <p className="handwritten-body text-gray-600 mb-6 leading-relaxed">
              Empowering businesses through AI adoption, automation, and elite founder networks. 
              We transform organizations with comprehensive services and exclusive programs that 
              drive sustainable growth and innovation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-foundation">📧</span>
                <a 
                  href="mailto:hello@originpath.in" 
                  className="handwritten-body text-gray-700 hover:text-foundation transition-colors duration-300"
                >
                  hello@originpath.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-foundation">📱</span>
                <a 
                  href="tel:+91-6362616467" 
                  className="handwritten-body text-gray-700 hover:text-foundation transition-colors duration-300"
                >
                  +91 6362616467
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-foundation">📍</span>
                <span className="handwritten-body text-gray-700">
                  Bangalore, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-foundation">🌐</span>
                <a 
                  href="https://originpath.in" 
                  className="handwritten-body text-gray-700 hover:text-foundation transition-colors duration-300"
                >
                  originpath.in
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="handwritten-lg text-notebook-dark mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="handwritten-body text-sm text-gray-600 hover:text-foundation transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="handwritten-lg text-notebook-dark mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="handwritten-body text-sm text-gray-600 hover:text-foundation transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="handwritten-lg text-notebook-dark mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="handwritten-body text-sm text-gray-600 hover:text-foundation transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="handwritten-title text-3xl text-notebook-dark mb-4">
              Stay Connected
            </h3>
            <p className="handwritten-body text-gray-600 mb-6">
              Get the latest insights, research, and updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-full handwritten-body text-gray-700 focus:outline-none focus:border-foundation transition-colors duration-300"
              />
              <button className="px-6 py-3 bg-foundation text-white handwritten-body rounded-full hover:bg-scale transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 text-center">
          <div className="flex justify-center gap-6 mb-8">
            {[
              { name: 'LinkedIn', icon: '💼', href: '#' },
              { name: 'Twitter', icon: '🐦', href: '#' },
              { name: 'Instagram', icon: '📸', href: '#' },
              { name: 'YouTube', icon: '📹', href: '#' }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl hover:bg-foundation hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="handwritten-body text-sm text-gray-600">
              © {currentYear} originpath.in. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6">
              {footerLinks.legal.map((link, index) => (
                <React.Fragment key={link.name}>
                  <Link 
                    href={link.href}
                    className="handwritten-body text-sm text-gray-600 hover:text-foundation transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                  {index < footerLinks.legal.length - 1 && (
                    <span className="text-gray-400">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 handwritten-body text-sm text-gray-600 hover:text-foundation transition-colors duration-300 group"
            >
              Back to Top
              <span className="transform group-hover:-translate-y-1 transition-transform duration-300">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}