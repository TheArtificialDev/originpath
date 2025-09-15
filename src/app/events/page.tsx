import PageWrapper from '@/components/PageWrapper';

export default function Events() {
  return (
    <PageWrapper>
      <section className="min-h-screen flex flex-col justify-center">
        <div className="max-w-5xl">
          {/* Page Title */}
          <h1 className="handwritten-title text-6xl md:text-8xl mb-12 transform rotate-0.5 text-orange-600">
            Events
          </h1>

          {/* Main Content */}
          <div className="space-y-12">
            <div className="handwritten-subtitle text-3xl md:text-4xl transform -rotate-0.3">
              Moments captured in time...
            </div>

            {/* Content placeholders */}
            <div className="handwritten-body text-xl leading-relaxed space-y-6">
              <p className="transform rotate-0.1">
                [Upcoming events and workshops]
              </p>
              <p className="transform -rotate-0.2 ml-6">
                [Past event highlights]
              </p>
              <p className="transform rotate-0.3">
                [Event calendar and schedules]
              </p>
            </div>

            <div className="handwritten-casual text-lg space-y-4">
              <p className="transform -rotate-0.1">
                [Event photos and memories]
              </p>
              <p className="transform rotate-0.2 ml-8">
                [Registration information]
              </p>
            </div>

            {/* Note-style annotations */}
            <div className="mt-16 border-l-4 border-orange-400 pl-6">
              <p className="handwritten-light text-lg transform -rotate-0.2 text-gray-600">
                * Add your events, conferences, and special occasions
              </p>
              <p className="handwritten-light text-sm transform rotate-0.1 text-gray-500 mt-2">
                Include dates, locations, registration links, and event highlights
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}