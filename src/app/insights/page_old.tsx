import PageWrapper from '@/components/PageWrapper';

export default function Insights() {
  return (
    <PageWrapper>
      <section className="min-h-screen flex flex-col justify-center">
        <div className="max-w-5xl">
          {/* Page Title */}
          <h1 className="handwritten-title text-6xl md:text-8xl mb-12 transform rotate-1 text-purple-600">
            Insights
          </h1>

          {/* Main Content */}
          <div className="space-y-12">
            <div className="handwritten-subtitle text-3xl md:text-4xl transform -rotate-0.5">
              Thoughts scribbled in the margins...
            </div>

            {/* Content placeholders */}
            <div className="handwritten-body text-xl leading-relaxed space-y-6">
              <p className="transform rotate-0.2">
                [Share your industry insights]
              </p>
              <p className="transform -rotate-0.3 ml-12">
                [Add thought leadership content]
              </p>
              <p className="transform rotate-0.1">
                [Include market observations]
              </p>
            </div>

            <div className="handwritten-casual text-lg space-y-4">
              <p className="transform -rotate-0.2">
                [Add trend analyses]
              </p>
              <p className="transform rotate-0.3 ml-6">
                [Share predictions and forecasts]
              </p>
            </div>

            {/* Note-style annotations */}
            <div className="mt-16 border-l-4 border-purple-400 pl-6">
              <p className="handwritten-light text-lg transform -rotate-0.1 text-gray-600">
                * Add your insights and thought pieces here
              </p>
              <p className="handwritten-light text-sm transform rotate-0.1 text-gray-500 mt-2">
                This could include blog posts, research findings, or industry commentary
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}