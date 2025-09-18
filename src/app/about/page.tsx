import PageWrapper from '@/components/PageWrapper';

export default function About() {
  return (
    <PageWrapper>
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-24">
        {/* Scattered background elements for character */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 text-amber-300 handwritten-light text-lg transform -rotate-12 opacity-40">
            ✨ Innovation
          </div>
          <div className="absolute top-40 right-20 text-green-300 handwritten-light text-base transform rotate-15 opacity-30">
            • Research • Strategy •
          </div>
          <div className="absolute bottom-40 left-20 text-blue-300 handwritten-light text-sm transform -rotate-8 opacity-40">
            Digital First →
          </div>
          <div className="absolute bottom-20 right-10 text-purple-300 handwritten-light text-lg transform rotate-12 opacity-30">
            3x Founder ⭐
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Page Title with enhanced styling */}
          <div className="text-center mb-16 relative">
            <h1 className="handwritten-title text-6xl md:text-8xl mb-4 transform -rotate-2 text-green-600 
                         hover:rotate-1 transition-transform duration-500 cursor-default
                         drop-shadow-lg animate-pulse">
              About Us
            </h1>
            {/* Decorative underline */}
            <div className="w-32 h-1 bg-gradient-to-r from-foundation to-growth mx-auto transform rotate-1 
                          rounded-full shadow-md"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-16 text-center">
            {/* Hero tagline with typewriter effect */}
            <div className="text-center relative">
              <div className="handwritten-subtitle text-3xl md:text-4xl transform hover:rotate-1 
                            transition-all duration-300 text-foundation hover:text-growth mb-4
                            animate-fade-in-up">
                Bridging the digital gap in India&apos;s startup ecosystem
              </div>
              {/* Typing cursor effect */}
              <span className="text-4xl text-foundation animate-pulse">|</span>
            </div>

            {/* Origin Story with scattered layout */}
            <div className="space-y-12 max-w-4xl mx-auto">
              <div className="relative bg-amber-50/50 p-8 rounded-2xl border-2 border-dashed border-amber-200 
                            transform hover:-rotate-1 transition-all duration-300 hover:shadow-lg text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-200 rounded-full w-8 h-8 
                              flex items-center justify-center text-amber-700 font-bold rotate-12">
                  1
                </div>
                <p className="handwritten-body text-xl leading-relaxed transform rotate-0.5 text-gray-800">
                  OriginPath was born from a simple observation: India&apos;s vibrant startup ecosystem was missing 
                  a crucial piece. While entrepreneurs had brilliant ideas and boundless energy, they struggled 
                  to access the research, strategic guidance, and operational support needed to transform concepts 
                  into sustainable digital businesses.
                </p>
              </div>
              
              <div className="relative bg-blue-50/50 p-8 rounded-2xl border-2 border-dashed border-blue-200 
                            transform hover:rotate-1 transition-all duration-300 hover:shadow-lg text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-200 rounded-full w-8 h-8 
                              flex items-center justify-center text-blue-700 font-bold -rotate-12">
                  2
                </div>
                <p className="handwritten-body text-xl leading-relaxed transform -rotate-0.5 text-gray-800">
                  Founded by <span className="text-2xl font-bold text-foundation hover:text-scale
                                  hover:scale-110 inline-block transition-all duration-200">Abhishek Kumar</span>, 
                  a 3x founder with deep expertise in technology, research, and business strategy, OriginPath exists to fill this critical gap. 
                  Having navigated the challenges of building multiple ventures from ground zero, Abhishek recognized the need for 
                  a digital-first acceleration platform that could democratize access to world-class startup resources.
                </p>
              </div>
              
              <div className="relative bg-green-50/50 p-8 rounded-2xl border-2 border-dashed border-green-200 
                            transform hover:-rotate-1 transition-all duration-300 hover:shadow-lg text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-200 rounded-full w-8 h-8 
                              flex items-center justify-center text-green-700 font-bold rotate-12">
                  3
                </div>
                <p className="handwritten-body text-xl leading-relaxed transform rotate-0.3 text-gray-800">
                  Today, we&apos;re India&apos;s premier remote-first startup acceleration platform, empowering entrepreneurs 
                  with comprehensive research, strategic partnerships, and end-to-end operational support. 
                  From MVP development to scaling strategies, we&apos;ve made it our mission to eliminate the digital 
                  vacuum that holds back so many promising ventures.
                </p>
              </div>
            </div>

            {/* Mission & Vision with enhanced styling */}
            <div className="grid md:grid-cols-2 gap-8 mt-20 max-w-5xl mx-auto">
              <div className="relative transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-foundation/10 to-foundation/20 p-8 rounded-3xl 
                              border-l-8 border-foundation shadow-xl transform hover:-rotate-1 transition-all duration-300 text-center">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-foundation text-white px-6 py-2 rounded-full 
                                text-sm font-bold -rotate-3 shadow-lg">
                    MISSION
                  </div>
                  <div className="mt-4">
                    <h3 className="handwritten-subtitle text-2xl text-foundation mb-4 transform rotate-0.5">
                      Our North Star
                    </h3>
                    <p className="handwritten-body text-lg text-gray-700 leading-relaxed transform -rotate-0.2">
                      To democratize access to world-class startup resources, research, and strategic guidance 
                      for Indian entrepreneurs building digital products, thereby accelerating the growth of 
                      India&apos;s technology ecosystem.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-growth/10 to-growth/20 p-8 rounded-3xl 
                              border-l-8 border-growth shadow-xl transform hover:rotate-1 transition-all duration-300 text-center">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-growth text-white px-6 py-2 rounded-full 
                                text-sm font-bold rotate-3 shadow-lg">
                    VISION
                  </div>
                  <div className="mt-4">
                    <h3 className="handwritten-subtitle text-2xl text-growth mb-4 transform -rotate-0.5">
                      Our Future
                    </h3>
                    <p className="handwritten-body text-lg text-gray-700 leading-relaxed transform rotate-0.2">
                      To become India&apos;s premier digital-first startup acceleration platform, fostering innovation 
                      and empowering entrepreneurs with cutting-edge research, strategic partnerships, and 
                      comprehensive operational support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Section with enhanced design */}
            <div className="relative mt-24 max-w-5xl mx-auto">
              {/* Polaroid-style founder card */}
              <div className="bg-white p-6 rounded-lg shadow-2xl transform -rotate-2 
                            hover:rotate-1 transition-all duration-500 hover:shadow-3xl border-4 border-gray-100">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-lg space-y-6 
                              border-2 border-dashed border-amber-200 text-center">
                  
                  {/* Vintage photo frame effect */}
                  <div className="flex flex-col items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-foundation to-growth rounded-full 
                                  flex items-center justify-center text-white text-2xl font-bold shadow-lg 
                                  transform hover:rotate-12 transition-transform duration-300">
                      AK
                    </div>
                    <div className="text-center">
                      <h3 className="handwritten-title text-4xl transform rotate-1 text-gray-800 mb-2">
                        Meet the Founder
                      </h3>
                      <div className="flex flex-wrap justify-center gap-2">
                        <span className="bg-foundation text-white px-3 py-1 rounded-full text-xs font-bold transform -rotate-2">
                          3x FOUNDER
                        </span>
                        <span className="bg-growth text-white px-3 py-1 rounded-full text-xs font-bold transform rotate-2">
                          RESEARCHER
                        </span>
                        <span className="bg-scale text-white px-3 py-1 rounded-full text-xs font-bold transform -rotate-1">
                          AUTHOR
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="handwritten-casual text-lg space-y-6 text-center">
                    <p className="transform rotate-0.5 leading-relaxed">
                      <span className="text-3xl font-bold text-foundation hover:text-scale
                                     hover:scale-110 inline-block transition-transform duration-200">
                        Abhishek Kumar
                      </span> brings a unique blend of entrepreneurial experience, 
                      technical expertise, and research acumen to OriginPath. As a 3x founder, researcher, 
                      and author, he has firsthand experience with the challenges that digital entrepreneurs face.
                    </p>
                    
                    <p className="transform -rotate-0.3 leading-relaxed text-gray-700">
                      His journey through multiple successful ventures has provided deep insights into what 
                      works—and what doesn&apos;t—in India&apos;s startup ecosystem. This experience forms the foundation 
                      of OriginPath&apos;s research-driven, practical approach to startup acceleration.
                    </p>
                  </div>
                  
                  {/* Social links with hover effects */}
                  <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t-2 border-dashed border-amber-300">
                    <a 
                      href="https://www.linkedin.com/in/theartificialdev/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-full 
                               handwritten-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 
                               hover:-rotate-2 shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-5 h-5 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                      </svg>
                      Connect on LinkedIn
                    </a>
                    
                    <a 
                      href="https://www.github.com/theartificialdev" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 bg-gray-800 text-white px-6 py-3 rounded-full 
                               handwritten-md hover:bg-gray-900 transition-all duration-300 transform hover:scale-110 
                               hover:rotate-2 shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-5 h-5 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                      </svg>
                      View on GitHub
                    </a>
                  </div>
                </div>
                
                {/* Polaroid-style tape */}
                <div className="absolute -top-2 left-8 w-16 h-8 bg-yellow-200 transform rotate-12 opacity-80 rounded-sm shadow-sm"></div>
                <div className="absolute -top-2 right-8 w-16 h-8 bg-yellow-200 transform -rotate-12 opacity-80 rounded-sm shadow-sm"></div>
              </div>
            </div>

            {/* Values with card-style layout */}
            <div className="space-y-8 mt-24">
              <div className="text-center">
                <h3 className="handwritten-title text-5xl transform -rotate-1 text-gray-800 mb-4 
                             hover:rotate-1 transition-transform duration-300 cursor-default">
                  Our Core Values
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-scale to-enterprise mx-auto transform rotate-2 rounded-full"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
                <div className="group relative transform hover:scale-105 hover:-rotate-1 transition-all duration-300">
                  <div className="bg-gradient-to-br from-foundation/20 to-foundation/30 p-8 rounded-3xl 
                                shadow-xl border-t-4 border-foundation relative overflow-hidden text-center">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-foundation/10 rounded-full 
                                  transform translate-x-8 -translate-y-8"></div>
                    <div className="relative z-10">
                      <div className="flex flex-col items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-foundation rounded-full flex items-center justify-center text-white font-bold">
                          🚀
                        </div>
                        <h4 className="handwritten-subtitle text-xl text-foundation transform rotate-0.5">
                          Digital-First Approach
                        </h4>
                      </div>
                      <p className="handwritten-light text-base text-gray-700 leading-relaxed transform -rotate-0.2">
                        Everything we do is optimized for the digital economy, ensuring our solutions 
                        are future-ready and scalable.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="group relative transform hover:scale-105 hover:rotate-1 transition-all duration-300">
                  <div className="bg-gradient-to-br from-growth/20 to-growth/30 p-8 rounded-3xl 
                                shadow-xl border-t-4 border-growth relative overflow-hidden text-center">
                    <div className="absolute top-0 left-0 w-16 h-16 bg-growth/10 rounded-full 
                                  transform -translate-x-8 -translate-y-8"></div>
                    <div className="relative z-10">
                      <div className="flex flex-col items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-growth rounded-full flex items-center justify-center text-white font-bold">
                          📊
                        </div>
                        <h4 className="handwritten-subtitle text-xl text-growth transform -rotate-0.5">
                          Research-Driven Insights
                        </h4>
                      </div>
                      <p className="handwritten-light text-base text-gray-700 leading-relaxed transform rotate-0.2">
                        Data and comprehensive research inform all our recommendations, ensuring 
                        evidence-based strategies.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="group relative transform hover:scale-105 hover:rotate-1 transition-all duration-300">
                  <div className="bg-gradient-to-br from-scale/20 to-scale/30 p-8 rounded-3xl 
                                shadow-xl border-t-4 border-scale relative overflow-hidden text-center">
                    <div className="absolute bottom-0 right-0 w-16 h-16 bg-scale/10 rounded-full 
                                  transform translate-x-8 translate-y-8"></div>
                    <div className="relative z-10">
                      <div className="flex flex-col items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-scale rounded-full flex items-center justify-center text-white font-bold">
                          🤝
                        </div>
                        <h4 className="handwritten-subtitle text-xl text-scale transform rotate-0.3">
                          Collaborative Growth
                        </h4>
                      </div>
                      <p className="handwritten-light text-base text-gray-700 leading-relaxed transform -rotate-0.3">
                        Success through strategic partnerships and community building, fostering 
                        an ecosystem of mutual growth.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="group relative transform hover:scale-105 hover:-rotate-1 transition-all duration-300">
                  <div className="bg-gradient-to-br from-enterprise/20 to-enterprise/30 p-8 rounded-3xl 
                                shadow-xl border-t-4 border-enterprise relative overflow-hidden text-center">
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-enterprise/10 rounded-full 
                                  transform -translate-x-8 translate-y-8"></div>
                    <div className="relative z-10">
                      <div className="flex flex-col items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-enterprise rounded-full flex items-center justify-center text-white font-bold">
                          ✨
                        </div>
                        <h4 className="handwritten-subtitle text-xl text-enterprise transform -rotate-0.3">
                          Accessibility
                        </h4>
                      </div>
                      <p className="handwritten-light text-base text-gray-700 leading-relaxed transform rotate-0.3">
                        Making premium startup resources available to all entrepreneurs, 
                        democratizing access to world-class support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action with enhanced design */}
            <div className="relative mt-24 max-w-5xl mx-auto">
              <div className="bg-gradient-to-r from-foundation via-growth to-scale p-1 rounded-3xl 
                            transform hover:scale-105 transition-all duration-300 hover:-rotate-1 shadow-2xl">
                <div className="bg-white p-12 rounded-3xl text-center space-y-8 relative overflow-hidden">
                  {/* Animated background elements */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-foundation/10 to-transparent 
                                rounded-full transform -translate-x-16 -translate-y-16 animate-pulse"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-scale/10 to-transparent 
                                rounded-full transform translate-x-20 translate-y-20 animate-pulse"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-8">
                      <h3 className="handwritten-title text-4xl md:text-5xl transform hover:rotate-2 
                                   transition-transform duration-300 text-gray-800 mb-4 cursor-default">
                        Ready to accelerate your startup journey?
                      </h3>
                      <div className="flex justify-center items-center gap-2 mb-4">
                        <div className="w-8 h-1 bg-foundation rounded-full transform -rotate-12"></div>
                        <div className="w-12 h-1 bg-growth rounded-full"></div>
                        <div className="w-8 h-1 bg-scale rounded-full transform rotate-12"></div>
                      </div>
                    </div>
                    
                    <p className="handwritten-body text-xl text-gray-700 mb-10 max-w-2xl mx-auto 
                               transform hover:rotate-0.5 transition-transform duration-300 leading-relaxed">
                      Join the growing community of entrepreneurs who trust OriginPath 
                      to guide their digital transformation and startup acceleration.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-6">
                      <a 
                        href="/services" 
                        className="group relative inline-block transform hover:scale-110 hover:-rotate-2 
                                 transition-all duration-300"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-foundation to-growth 
                                      rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform duration-300"></div>
                        <div className="relative bg-foundation hover:bg-foundation/90 text-white px-10 py-4 
                                      rounded-2xl handwritten-md text-lg font-bold shadow-lg 
                                      group-hover:shadow-xl transition-all duration-300">
                          🚀 Explore Our Services
                        </div>
                      </a>
                      
                      <a 
                        href="/research" 
                        className="group relative inline-block transform hover:scale-110 hover:rotate-2 
                                 transition-all duration-300"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-scale to-enterprise 
                                      rounded-2xl transform -rotate-1 group-hover:-rotate-3 transition-transform duration-300"></div>
                        <div className="relative border-3 border-foundation bg-white hover:bg-gray-50 
                                      text-foundation px-10 py-4 rounded-2xl handwritten-md text-lg font-bold 
                                      shadow-lg group-hover:shadow-xl transition-all duration-300">
                          📊 Browse Our Research
                        </div>
                      </a>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute top-8 right-8 text-2xl animate-bounce opacity-60">✨</div>
                    <div className="absolute bottom-8 left-8 text-2xl animate-pulse opacity-60">🎯</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Note-style annotations with vintage styling */}
            <div className="mt-20 relative max-w-4xl mx-auto">
              <div className="bg-yellow-100/80 p-8 rounded-lg border-2 border-dashed border-yellow-400 
                            transform hover:rotate-1 transition-all duration-300 hover:shadow-lg 
                            relative overflow-hidden">
                {/* Vintage paper texture */}
                <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-amber-100 to-yellow-200"></div>
                
                {/* Coffee stain effects */}
                <div className="absolute top-2 right-8 w-6 h-6 bg-amber-300/30 rounded-full"></div>
                <div className="absolute bottom-4 left-12 w-4 h-4 bg-amber-400/20 rounded-full"></div>
                
                <div className="relative z-10 space-y-3 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <span className="text-yellow-600 text-xl transform -rotate-12">📝</span>
                    <p className="handwritten-light text-lg transform rotate-0.3 text-gray-700">
                      <span className="font-bold text-yellow-700">Note:</span> Based in India, serving entrepreneurs globally through our remote-first approach
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center gap-3">
                    <span className="text-yellow-600 text-lg transform rotate-8">🌐</span>
                    <p className="handwritten-light text-base transform -rotate-0.2 text-gray-600">
                      <span className="font-semibold">Domain:</span> originpath.in • 
                      <span className="font-semibold ml-2">Founded:</span> 2024 • 
                      <span className="font-semibold ml-2">Phone:</span> +91 6362616467 •
                      <span className="font-semibold ml-2">Headquarters:</span> India (Remote-First)
                    </p>
                  </div>
                  
                  {/* Signature style element */}
                  <div className="mt-8 pt-4 border-t border-dashed border-yellow-400">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                      <div className="handwritten-casual text-gray-600 transform -rotate-1">
                        Crafted with ❤️ by the OriginPath team
                      </div>
                      <div className="handwritten-light text-sm text-gray-500 transform rotate-2">
                        Est. 2024
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Vintage corner decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-yellow-500 transform rotate-45 -translate-x-2 -translate-y-2"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-yellow-500 transform rotate-45 translate-x-2 translate-y-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}