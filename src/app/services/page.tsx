import React from 'react';
import Navigation from '@/components/Navigation';
import ServiceSection from '@/components/services/ServiceSection';
import Footer from '@/components/Footer';
import { serviceCategories } from '@/types/services';

export default function ServicesPage() {
  const coreServicesCategory = serviceCategories.find(cat => cat.id === 'core-services');
  const programsCategory = serviceCategories.find(cat => cat.id === 'programs');

  return (
    <div className="min-h-screen notebook-bg">
      <Navigation />
      
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-20">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="hero-title hero-title-xl mb-8 text-notebook-dark">
            Services
          </h1>
          <p className="handwritten-subtitle text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses through AI adoption, automation, and elite founder networks. 
            Transform your organization with our comprehensive services and exclusive programs.
          </p>
          
          {/* Value Proposition */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="handwritten-lg text-foundation mb-2">Expert Assessment</h3>
              <p className="handwritten-body text-sm text-gray-600">
                Comprehensive audits and readiness evaluations
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="handwritten-lg text-growth mb-2">Rapid Implementation</h3>
              <p className="handwritten-body text-sm text-gray-600">
                Fast-track your automation and AI adoption
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="handwritten-lg text-scale mb-2">Elite Network</h3>
              <p className="handwritten-body text-sm text-gray-600">
                Connect with top-tier founders and leaders
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-transparent via-gray-400 to-transparent rounded-full"></div>
        </div>
      </div>

      {/* Core Services Section */}
      {coreServicesCategory && (
        <ServiceSection category={coreServicesCategory} />
      )}

      {/* Programs Section */}
      {programsCategory && (
        <ServiceSection 
          category={programsCategory} 
          className="bg-gray-50" 
        />
      )}

      {/* Process Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="handwritten-title text-5xl mb-6 text-notebook-dark">
              How We Work
            </h2>
            <p className="handwritten-subtitle text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures successful outcomes for every engagement
            </p>
            <div className="w-32 h-1 bg-foundation rounded-full mx-auto mt-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Assessment',
                description: 'We start by understanding your business, challenges, and goals through comprehensive analysis.',
                color: 'var(--foundation-color)'
              },
              {
                step: '02', 
                title: 'Strategic Planning',
                description: 'Develop customized strategies and roadmaps tailored to your specific needs and objectives.',
                color: 'var(--growth-color)'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Execute solutions with precision, keeping you informed throughout the entire process.',
                color: 'var(--scale-color)'
              },
              {
                step: '04',
                title: 'Optimization & Growth',
                description: 'Continuous monitoring, optimization, and support to ensure sustained success and growth.',
                color: 'var(--enterprise-color)'
              }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div 
                    className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-white handwritten-title text-2xl transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: process.color }}
                  >
                    {process.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="handwritten-lg text-notebook-dark mb-3 group-hover:text-foundation transition-colors duration-300">
                  {process.title}
                </h3>
                <p className="handwritten-body text-sm text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-foundation/5 to-scale/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="handwritten-title text-5xl mb-6 text-notebook-dark">
            Ready to Transform Your Business?
          </h2>
          <p className="handwritten-subtitle text-xl text-gray-600 mb-8 leading-relaxed">
            Join the elite network of forward-thinking organizations that have chosen 
            OriginPath to accelerate their growth and digital transformation journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="px-10 py-4 bg-foundation text-white handwritten-lg rounded-full hover:bg-scale transition-all duration-300 transform hover:scale-105 shadow-xl">
              Schedule Free Consultation
            </button>
            <button className="px-10 py-4 border-2 border-foundation text-foundation handwritten-lg rounded-full hover:bg-foundation hover:text-white transition-all duration-300 transform hover:scale-105">
              View Case Studies
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="handwritten-title text-3xl text-foundation mb-2">50+</div>
              <p className="handwritten-body text-gray-600">Organizations Transformed</p>
            </div>
            <div className="text-center">
              <div className="handwritten-title text-3xl text-growth mb-2">95%</div>
              <p className="handwritten-body text-gray-600">Client Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="handwritten-title text-3xl text-scale mb-2">2.5x</div>
              <p className="handwritten-body text-gray-600">Average ROI Increase</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}