import PageWrapper from '@/components/PageWrapper';

export default function Services() {
  return (
    <PageWrapper>
      <section className="min-h-screen flex flex-col justify-center">
        <div className="max-w-5xl">
          {/* Page Title */}
          <h1 className="handwritten-title text-6xl md:text-8xl mb-12 transform -rotate-0.5 text-red-600">
            Services
          </h1>

          {/* Main Content */}
          <div className="space-y-12">
            <div className="handwritten-subtitle text-3xl md:text-4xl transform rotate-0.3">
              What we offer, written by hand...
            </div>

            {/* Content placeholders */}
            <div className="handwritten-body text-xl leading-relaxed space-y-6">
              <p className="transform -rotate-0.1">
                [List your main services]
              </p>
              <p className="transform rotate-0.2 ml-8">
                [Describe your service offerings]
              </p>
              <p className="transform -rotate-0.3">
                [Include pricing or packages]
              </p>
            </div>

            <div className="handwritten-casual text-lg space-y-4">
              <p className="transform rotate-0.1">
                [Add service benefits]
              </p>
              <p className="transform -rotate-0.2 ml-10">
                [Include testimonials or case studies]
              </p>
            </div>

            {/* Note-style annotations */}
            <div className="mt-16 border-l-4 border-red-400 pl-6">
              <p className="handwritten-light text-lg transform rotate-0.2 text-gray-600">
                * Detail your services and what makes them special
              </p>
              <p className="handwritten-light text-sm transform -rotate-0.1 text-gray-500 mt-2">
                Consider adding service categories, pricing tiers, or client success stories
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}