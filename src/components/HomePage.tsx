import React from 'react';
import Icon from './Icon';
import PageWrapper from './PageWrapper';

const HomePage: React.FC = () => {
  return (
    <PageWrapper>
      {/* Hero Section - Full Viewport Height */}
      <div className="min-h-screen min-h-[100vh] min-h-[100svh] relative overflow-hidden flex flex-col justify-center">
        <div className="relative z-10 max-w-7xl mx-auto py-8">
          {/* Main Headline */}
          <div className="text-center mb-16 relative">
            {/* Scattered decorative elements */}
            <div className="absolute -top-8 left-1/4 text-foundation handwritten-sm opacity-60 transform -rotate-12">
              &quot;Big dreams&quot;
            </div>
            <div className="absolute top-32 right-1/4 text-growth handwritten-sm opacity-60 transform rotate-6">
              &quot;Real results&quot;
            </div>
            
            <h1 className="handwritten-title hero-title-sm md:hero-title-md lg:hero-title-lg xl:hero-title-xl font-bold text-notebook-dark mb-12 leading-[0.85]">
              <span className="inline-block transform -rotate-1">Turn Your</span>
              <br className="hidden sm:block" />{' '}
              <span className="inline-block transform rotate-1 text-growth">Startup Idea</span>
              <br />
              <span className="inline-block transform rotate-1">Into a</span>
              <br className="hidden sm:block" />{' '}
              <span className="inline-block transform -rotate-2 text-scale">Thriving Business</span>
            </h1>
            
            <p className="text-2xl md:text-4xl text-notebook-medium handwritten-body max-w-5xl mx-auto leading-relaxed mb-12">
              <span className="inline-block transform rotate-0.5">We guide ambitious entrepreneurs through every stage</span>{' '}
              <span className="inline-block transform -rotate-0.5">of building successful, scalable companies.</span>
            </p>

            {/* Doodle arrows pointing to CTA */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-50">
              <Icon name="scribble" size="lg" color="#7c3aed" />
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mb-16 relative">
            <div className="absolute -top-6 left-1/3 handwritten-sm text-enterprise opacity-70 transform rotate-8">
              &quot;Start here!&quot;
            </div>
            
            <button className="bg-growth text-white px-12 py-6 rounded-lg text-3xl handwritten-casual shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 -rotate-1 hover:rotate-0 border-2 border-notebook-dark">
              Get Your Startup Assessment
            </button>
            
            <p className="mt-6 text-notebook-medium handwritten-body transform rotate-0.5">
              Free 30-minute consultation • No obligation • Real insights
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections - Separate from Hero */}
      <div className="relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">

          {/* Value Proposition Grid */}
          <div className="grid md:grid-cols-3 gap-12 mb-24">
            {/* From Idea to Launch */}
            <div className="text-center p-8 relative">
              <div className="absolute -top-3 -right-3 handwritten-xs text-foundation opacity-60 transform rotate-12">
                &quot;Step 1&quot;
              </div>
              
              <div className="mb-6 flex justify-center">
                <Icon name="lightbulb" size="xl" color="#e67e22" />
              </div>
              
              <h3 className="text-3xl handwritten-title text-notebook-dark mb-4 transform -rotate-1">
                From Idea to Launch
              </h3>
              
              <p className="text-notebook-medium handwritten-body leading-relaxed">
                <span className="inline-block transform rotate-0.5">Turn your concept into a</span>{' '}
                <span className="inline-block transform -rotate-0.5">validated, market-ready product</span>{' '}
                <span className="inline-block transform rotate-0.3">with our proven framework.</span>
              </p>
              
              {/* Decorative doodle */}
              <div className="absolute -bottom-4 right-8 opacity-30">
                <Icon name="scribble" size="sm" color="#e67e22" />
              </div>
            </div>

            {/* Scale & Grow */}
            <div className="text-center p-8 relative">
              <div className="absolute -top-3 -left-3 handwritten-xs text-growth opacity-60 transform -rotate-8">
                &quot;Step 2&quot;
              </div>
              
              <div className="mb-6 flex justify-center">
                <Icon name="growth" size="xl" color="#27ae60" />
              </div>
              
              <h3 className="text-3xl handwritten-title text-notebook-dark mb-4 transform rotate-1">
                Scale & Grow
              </h3>
              
              <p className="text-notebook-medium handwritten-body leading-relaxed">
                <span className="inline-block transform -rotate-0.5">Build systems that work</span>{' '}
                <span className="inline-block transform rotate-0.5">without you, and create</span>{' '}
                <span className="inline-block transform -rotate-0.3">sustainable growth engines.</span>
              </p>
              
              {/* Decorative star */}
              <div className="absolute top-4 right-4 opacity-30">
                <Icon name="star" size="sm" color="#27ae60" />
              </div>
            </div>

            {/* Exit Successfully */}
            <div className="text-center p-8 relative">
              <div className="absolute -top-3 right-8 handwritten-xs text-scale opacity-60 transform rotate-6">
                &quot;Step 3&quot;
              </div>
              
              <div className="mb-6 flex justify-center">
                <Icon name="target" size="xl" color="#8e44ad" />
              </div>
              
              <h3 className="text-3xl handwritten-title text-notebook-dark mb-4 transform -rotate-0.5">
                Exit Successfully
              </h3>
              
              <p className="text-notebook-medium handwritten-body leading-relaxed">
                <span className="inline-block transform rotate-0.3">Whether acquisition or IPO,</span>{' '}
                <span className="inline-block transform -rotate-0.5">we prepare you for</span>{' '}
                <span className="inline-block transform rotate-0.5">maximum value realization.</span>
              </p>
              
              {/* Decorative arrow */}
              <div className="absolute bottom-2 left-4 opacity-30">
                <Icon name="arrowRight" size="sm" color="#8e44ad" />
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center mb-16 relative">
            <div className="absolute -top-6 left-1/4 handwritten-sm text-enterprise opacity-60 transform -rotate-12">
              &quot;Real founders&quot;
            </div>
            <div className="absolute -top-2 right-1/4 handwritten-sm text-foundation opacity-60 transform rotate-8">
              &quot;Real results&quot;
            </div>
            
            <h2 className="text-5xl handwritten-title text-notebook-dark mb-12 transform rotate-1">
              Trusted by 200+ Entrepreneurs
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-6xl handwritten-xl text-growth mb-2 transform -rotate-2">$50M+</div>
                <p className="handwritten-body text-notebook-medium transform rotate-0.5">in funding raised</p>
              </div>
              <div className="p-6">
                <div className="text-6xl handwritten-xl text-scale mb-2 transform rotate-1">12</div>
                <p className="handwritten-body text-notebook-medium transform -rotate-0.5">successful exits</p>
              </div>
              <div className="p-6">
                <div className="text-6xl handwritten-xl text-enterprise mb-2 transform -rotate-1">85%</div>
                <p className="handwritten-body text-notebook-medium transform rotate-0.8">still in business after 3 years</p>
              </div>
            </div>
          </div>

          {/* Services Preview */}
          <div className="text-center mb-16 relative">
            <div className="absolute -top-4 left-8 handwritten-sm text-growth opacity-60 transform rotate-15">
              &quot;Choose your path&quot;
            </div>
            
            <h2 className="text-5xl handwritten-title text-notebook-dark mb-4 transform -rotate-0.5">
              How We Help You Win
            </h2>
            
            <p className="text-2xl text-notebook-medium handwritten-body mb-12 max-w-3xl mx-auto transform rotate-0.3">
              From weekend side project to unicorn startup - we meet you where you are
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 border-2 border-notebook-medium rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 rotate-1 hover:rotate-0">
                <div className="text-foundation text-3xl handwritten-casual mb-2">Foundation</div>
                <p className="text-notebook-medium handwritten-body">For early-stage ideas</p>
              </div>
              
              <div className="p-6 border-2 border-notebook-medium rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 -rotate-1 hover:rotate-0">
                <div className="text-growth text-3xl handwritten-casual mb-2">Growth</div>
                <p className="text-notebook-medium handwritten-body">For scaling startups</p>
              </div>
              
              <div className="p-6 border-2 border-notebook-medium rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 rotate-0.5 hover:rotate-0">
                <div className="text-scale text-3xl handwritten-casual mb-2">Scale</div>
                <p className="text-notebook-medium handwritten-body">For growing companies</p>
              </div>
              
              <div className="p-6 border-2 border-notebook-medium rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 -rotate-0.5 hover:rotate-0">
                <div className="text-enterprise text-3xl handwritten-casual mb-2">Enterprise</div>
                <p className="text-notebook-medium handwritten-body">For established businesses</p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center relative">
            <div className="absolute -top-8 right-1/3 handwritten-sm text-scale opacity-70 transform -rotate-12">
              &quot;Your future starts now&quot;
            </div>
            
            <h2 className="text-4xl handwritten-title text-notebook-dark mb-6 transform rotate-0.5">
              Ready to Build Something Amazing?
            </h2>
            
            <button className="bg-notebook-dark text-white px-10 py-4 rounded-lg text-2xl handwritten-casual shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rotate-1 hover:rotate-0 border-2 border-notebook-dark mb-6">
              Start Your Journey Today
            </button>
            
            <p className="text-notebook-medium handwritten-body transform -rotate-0.5">
              Join hundreds of successful entrepreneurs who chose Origin Path
            </p>
            
            {/* Final decorative elements */}
            <div className="absolute -bottom-8 left-1/4 opacity-40">
              <Icon name="rocket" size="md" color="#e67e22" />
            </div>
            <div className="absolute -bottom-12 right-1/4 opacity-40">
              <Icon name="star" size="sm" color="#27ae60" />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default HomePage;