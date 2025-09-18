import PageWrapper from '@/components/PageWrapper';

export default function Contact() {
  return (
    <PageWrapper>
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-24">
        {/* Scattered background elements for character */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 text-blue-300 handwritten-light text-lg transform -rotate-12 opacity-40">
            💌 Let&apos;s Talk
          </div>
          <div className="absolute top-40 right-20 text-green-300 handwritten-light text-base transform rotate-15 opacity-30">
            • Connect • Collaborate •
          </div>
          <div className="absolute bottom-40 left-20 text-purple-300 handwritten-light text-sm transform -rotate-8 opacity-40">
            Reply in 24h ⚡
          </div>
          <div className="absolute bottom-20 right-10 text-amber-300 handwritten-light text-lg transform rotate-12 opacity-30">
            Startup Ready 🚀
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 px-6">
          {/* Page Title */}
          <div className="text-center mb-16 relative">
            <h1 className="handwritten-title text-6xl md:text-8xl mb-4 transform -rotate-2 text-foundation 
                         hover:rotate-1 transition-transform duration-500 cursor-default
                         drop-shadow-lg animate-pulse">
              Get in Touch
            </h1>
            {/* Decorative underline */}
            <div className="w-32 h-1 bg-gradient-to-r from-foundation to-growth mx-auto transform rotate-1 
                          rounded-full shadow-md"></div>
          </div>

          {/* Contact hero message */}
          <div className="text-center mb-16">
            <div className="handwritten-subtitle text-3xl md:text-4xl transform hover:rotate-1 
                          transition-all duration-300 text-scale hover:text-growth mb-4
                          animate-fade-in-up">
              Ready to transform your business idea into reality?
            </div>
            <p className="handwritten-body text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you&apos;re a startup founder, investor, or enterprise leader, we&apos;re here to help 
              you navigate the digital transformation journey.
            </p>
          </div>

          {/* Main contact sections */}
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="bg-gradient-to-br from-blue-50/80 to-green-50/80 p-8 rounded-2xl 
                            border-2 border-dashed border-blue-200 transform hover:-rotate-1 
                            transition-all duration-300 hover:shadow-lg relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-3 right-6 w-4 h-4 bg-blue-300/30 rounded-full"></div>
                <div className="absolute bottom-4 left-8 w-6 h-6 bg-green-400/20 rounded-full"></div>
                
                <div className="relative z-10">
                  <h3 className="handwritten-subtitle text-2xl text-foundation mb-6 transform -rotate-0.5 flex items-center gap-3">
                    <span className="text-3xl">📞</span>
                    Direct Contact
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="group">
                      <p className="handwritten-body text-gray-600 mb-2">Email us directly:</p>
                      <a 
                        href="mailto:hello@originpath.in" 
                        className="handwritten-subtitle text-xl text-foundation hover:text-scale 
                                 transition-colors duration-300 group-hover:animate-pulse"
                      >
                        📧 hello@originpath.in
                      </a>
                    </div>
                    
                    <div className="group">
                      <p className="handwritten-body text-gray-600 mb-2">Call us anytime:</p>
                      <a 
                        href="tel:+91-6362616467" 
                        className="handwritten-subtitle text-xl text-foundation hover:text-scale 
                                 transition-colors duration-300 group-hover:animate-pulse"
                      >
                        📱 +91 6362616467
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Information */}
              <div className="bg-gradient-to-br from-amber-50/80 to-orange-50/80 p-8 rounded-2xl 
                            border-2 border-dashed border-amber-200 transform hover:rotate-1 
                            transition-all duration-300 hover:shadow-lg relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-2 right-4 w-5 h-5 bg-amber-300/40 rounded-full"></div>
                <div className="absolute bottom-3 left-6 w-3 h-3 bg-orange-400/30 rounded-full"></div>
                
                <div className="relative z-10">
                  <h3 className="handwritten-subtitle text-2xl text-growth mb-6 transform rotate-0.5 flex items-center gap-3">
                    <span className="text-3xl">🏢</span>
                    Our Office
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="handwritten-body text-gray-600 mb-2">Find us at:</p>
                      <p className="handwritten-subtitle text-lg text-gray-800">
                        Bangalore, Karnataka<br />
                        India 🇮🇳
                      </p>
                    </div>
                    
                    <div>
                      <p className="handwritten-body text-gray-600 mb-2">Business hours:</p>
                      <p className="handwritten-subtitle text-lg text-gray-800">
                        Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                        Weekend: By appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="space-y-8">
              {/* Response Time */}
              <div className="bg-gradient-to-br from-purple-50/80 to-pink-50/80 p-8 rounded-2xl 
                            border-2 border-dashed border-purple-200 transform hover:-rotate-1 
                            transition-all duration-300 hover:shadow-lg relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-4 right-3 w-4 h-4 bg-purple-300/40 rounded-full"></div>
                <div className="absolute bottom-2 left-4 w-6 h-6 bg-pink-400/20 rounded-full"></div>
                
                <div className="relative z-10">
                  <h3 className="handwritten-subtitle text-2xl text-enterprise mb-6 transform -rotate-0.5 flex items-center gap-3">
                    <span className="text-3xl">⚡</span>
                    Quick Response
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🕐</span>
                      <div>
                        <p className="handwritten-body text-gray-600">Email response:</p>
                        <p className="handwritten-subtitle text-lg text-gray-800">Within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📞</span>
                      <div>
                        <p className="handwritten-body text-gray-600">Call response:</p>
                        <p className="handwritten-subtitle text-lg text-gray-800">Same day callback</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🤝</span>
                      <div>
                        <p className="handwritten-body text-gray-600">Meeting setup:</p>
                        <p className="handwritten-subtitle text-lg text-gray-800">Within 2-3 days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder Connect */}
              <div className="bg-gradient-to-br from-green-50/80 to-teal-50/80 p-8 rounded-2xl 
                            border-2 border-dashed border-green-200 transform hover:rotate-1 
                            transition-all duration-300 hover:shadow-lg relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-3 right-5 w-5 h-5 bg-green-300/30 rounded-full"></div>
                <div className="absolute bottom-4 left-3 w-4 h-4 bg-teal-400/40 rounded-full"></div>
                
                <div className="relative z-10">
                  <h3 className="handwritten-subtitle text-2xl text-scale mb-6 transform rotate-0.5 flex items-center gap-3">
                    <span className="text-3xl">👨‍💼</span>
                    Meet Abhishek
                  </h3>
                  
                  <div className="space-y-4">
                    <p className="handwritten-body text-gray-700 leading-relaxed">
                      As the founder of OriginPath, Abhishek brings 3x startup experience 
                      and deep expertise in digital transformation.
                    </p>
                    
                    <div className="space-y-2">
                      <p className="handwritten-body text-gray-600 font-semibold">Perfect for discussing:</p>
                      <ul className="handwritten-body text-gray-700 space-y-1">
                        <li>• Business strategy & planning</li>
                        <li>• Digital transformation roadmaps</li>
                        <li>• Startup mentoring & guidance</li>
                        <li>• Partnership opportunities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-foundation/10 to-growth/10 p-8 rounded-2xl 
                          border-2 border-dashed border-foundation/30 max-w-3xl mx-auto
                          transform hover:-rotate-0.5 transition-all duration-300 hover:shadow-lg">
              <h3 className="handwritten-subtitle text-3xl text-foundation mb-6">
                Ready to Start Your Journey? 🚀
              </h3>
              
              <p className="handwritten-body text-xl text-gray-700 mb-8 leading-relaxed">
                From idea to execution, from startup to scale-up, we&apos;re here to be your 
                strategic partner in the digital transformation journey.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="mailto:hello@originpath.in" 
                  className="group inline-flex items-center gap-2 bg-foundation text-white 
                           px-8 py-4 rounded-full handwritten-subtitle text-lg hover:bg-growth 
                           transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span className="group-hover:animate-bounce">📧</span>
                  Send us an Email
                </a>
                <a 
                  href="tel:+91-6362616467" 
                  className="group inline-flex items-center gap-2 bg-white border-2 border-foundation 
                           text-foundation px-8 py-4 rounded-full handwritten-subtitle text-lg 
                           hover:bg-foundation hover:text-white transition-all duration-300 
                           transform hover:scale-105 shadow-lg"
                >
                  <span className="group-hover:animate-bounce">📱</span>
                  Give us a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}