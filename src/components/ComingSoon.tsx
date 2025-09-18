'use client';

import React from 'react';
import Link from 'next/link';
import PageWrapper from './PageWrapper';

interface ComingSoonProps {
  pageTitle: string;
  description?: string;
  expectedDate?: string;
}

export default function ComingSoon({ 
  pageTitle, 
  description = "We're working hard to bring you something amazing!",
  expectedDate = "Coming Soon"
}: ComingSoonProps) {
  return (
    <PageWrapper>
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-24">
        {/* Scattered background elements for character */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 text-amber-300 handwritten-light text-lg transform -rotate-12 opacity-40">
            ✨ Under Construction
          </div>
          <div className="absolute top-40 right-20 text-green-300 handwritten-light text-base transform rotate-15 opacity-30">
            • Building • Creating •
          </div>
          <div className="absolute bottom-40 left-20 text-blue-300 handwritten-light text-sm transform -rotate-8 opacity-40">
            Stay Tuned →
          </div>
          <div className="absolute bottom-20 right-10 text-purple-300 handwritten-light text-lg transform rotate-12 opacity-30">
            Amazing Things ⚡
          </div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          {/* Page Title with enhanced styling */}
          <div className="text-center mb-16 relative">
            <h1 className="handwritten-title text-5xl md:text-7xl mb-4 transform -rotate-1 text-foundation 
                         hover:rotate-1 transition-transform duration-500 cursor-default
                         drop-shadow-lg">
              {pageTitle}
            </h1>
            {/* Decorative underline */}
            <div className="w-32 h-1 bg-gradient-to-r from-foundation to-growth mx-auto transform rotate-1 
                          rounded-full shadow-md"></div>
          </div>

          {/* Coming Soon Content */}
          <div className="space-y-12">
            {/* Main message */}
            <div className="space-y-6">
              <div className="bg-amber-50/80 p-8 rounded-2xl border-2 border-dashed border-amber-200 
                            transform hover:-rotate-1 transition-all duration-300 hover:shadow-lg
                            relative overflow-hidden max-w-3xl mx-auto">
                {/* Coffee stain effects */}
                <div className="absolute top-2 right-8 w-6 h-6 bg-amber-300/30 rounded-full"></div>
                <div className="absolute bottom-4 left-12 w-4 h-4 bg-amber-400/20 rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="text-6xl mb-4 animate-bounce">🚧</div>
                  <h2 className="handwritten-subtitle text-3xl text-gray-800 mb-4 transform rotate-0.5">
                    {expectedDate}
                  </h2>
                  <p className="handwritten-body text-xl text-gray-700 leading-relaxed transform -rotate-0.2">
                    {description}
                  </p>
                </div>
              </div>
            </div>

            {/* Features preview */}
            <div className="bg-gradient-to-br from-blue-50/50 to-green-50/50 p-8 rounded-2xl 
                          border-2 border-dashed border-blue-200 max-w-3xl mx-auto
                          transform hover:rotate-1 transition-all duration-300 hover:shadow-lg">
              <h3 className="handwritten-subtitle text-2xl text-blue-700 mb-6 transform -rotate-0.5">
                What's Coming
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-foundation text-xl">📝</span>
                    <span className="handwritten-body text-gray-700">Rich Content</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-growth text-xl">🎨</span>
                    <span className="handwritten-body text-gray-700">Beautiful Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-scale text-xl">⚡</span>
                    <span className="handwritten-body text-gray-700">Fast Performance</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-enterprise text-xl">📱</span>
                    <span className="handwritten-body text-gray-700">Mobile Friendly</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-foundation text-xl">🔍</span>
                    <span className="handwritten-body text-gray-700">Easy Navigation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-growth text-xl">🚀</span>
                    <span className="handwritten-body text-gray-700">Amazing Features</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter signup */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-100 max-w-2xl mx-auto
                          transform hover:scale-105 transition-all duration-300">
              <h3 className="handwritten-subtitle text-2xl text-gray-800 mb-4 transform rotate-0.3">
                Get Notified When It's Ready!
              </h3>
              <p className="handwritten-body text-gray-600 mb-6">
                Be the first to know when this page goes live. We'll send you an update!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-full handwritten-body text-gray-700 
                           focus:outline-none focus:border-foundation transition-colors duration-300"
                />
                <button className="px-6 py-3 bg-foundation text-white handwritten-body rounded-full 
                                 hover:bg-scale transition-all duration-300 transform hover:scale-105">
                  Notify Me
                </button>
              </div>
            </div>

            {/* Navigation back */}
            <div className="space-y-4">
              <div className="handwritten-body text-gray-600 mb-6">
                In the meantime, explore what's already available:
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/"
                  className="group inline-flex items-center gap-2 bg-white border-2 border-foundation 
                           text-foundation px-6 py-3 rounded-full handwritten-body hover:bg-foundation 
                           hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  <span className="group-hover:animate-bounce">🏠</span>
                  Home
                </Link>
                <Link 
                  href="/about"
                  className="group inline-flex items-center gap-2 bg-white border-2 border-growth 
                           text-growth px-6 py-3 rounded-full handwritten-body hover:bg-growth 
                           hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  <span className="group-hover:animate-bounce">👋</span>
                  About Us
                </Link>
                <Link 
                  href="/services"
                  className="group inline-flex items-center gap-2 bg-white border-2 border-scale 
                           text-scale px-6 py-3 rounded-full handwritten-body hover:bg-scale 
                           hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  <span className="group-hover:animate-bounce">🚀</span>
                  Services
                </Link>
                <Link 
                  href="/research"
                  className="group inline-flex items-center gap-2 bg-white border-2 border-enterprise 
                           text-enterprise px-6 py-3 rounded-full handwritten-body hover:bg-enterprise 
                           hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  <span className="group-hover:animate-bounce">📊</span>
                  Research
                </Link>
              </div>
            </div>

            {/* Contact info */}
            <div className="bg-yellow-100/80 p-6 rounded-lg border-2 border-dashed border-yellow-400 
                          transform hover:rotate-0.5 transition-all duration-300 max-w-xl mx-auto">
              <p className="handwritten-light text-gray-700 mb-3">
                <span className="font-bold text-yellow-700">Questions?</span> We're here to help!
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a 
                  href="mailto:hello@originpath.in" 
                  className="handwritten-body text-foundation hover:text-scale transition-colors duration-300"
                >
                  📧 hello@originpath.in
                </a>
                <a 
                  href="tel:+91-6362616467" 
                  className="handwritten-body text-foundation hover:text-scale transition-colors duration-300"
                >
                  📱 +91 6362616467
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}