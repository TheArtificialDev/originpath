import PageWrapper from '@/components/PageWrapper';

export default function About() {
  return (
    <PageWrapper>
      <section className="min-h-screen flex flex-col justify-center">
        <div className="max-w-5xl">
          {/* Page Title */}
          <h1 className="handwritten-title text-6xl md:text-8xl mb-12 transform -rotate-1 text-green-600">
            About
          </h1>

          {/* Main Content */}
          <div className="space-y-12">
            <div className="handwritten-subtitle text-3xl md:text-4xl transform rotate-0.5">
              Our story is written here...
            </div>

            {/* Content placeholders with different handwriting styles */}
            <div className="handwritten-body text-xl leading-relaxed space-y-6">
              <p className="transform -rotate-0.2">
                [Tell us about your company's origin story]
              </p>
              <p className="transform rotate-0.3 ml-8">
                [Share your mission and vision]
              </p>
              <p className="transform -rotate-0.1">
                [Describe what makes you unique]
              </p>
            </div>

            <div className="handwritten-casual text-lg space-y-4">
              <p className="transform rotate-0.2">
                [Add your team information]
              </p>
              <p className="transform -rotate-0.3 ml-4">
                [Include your company values]
              </p>
            </div>

            {/* Note-style annotations */}
            <div className="mt-16 border-l-4 border-green-400 pl-6">
              <p className="handwritten-light text-lg transform rotate-0.1 text-gray-600">
                * Remember to add your actual content here
              </p>
              <p className="handwritten-light text-sm transform -rotate-0.1 text-gray-500 mt-2">
                This is just a template showing the handwritten notebook style
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}