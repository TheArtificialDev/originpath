import { Suspense } from 'react';
import PageWrapper from '@/components/PageWrapper';
import ResearchSection from '@/components/research/ResearchSection';
import ResearchSearchBar from '@/components/research/ResearchSearchBar';
import { getResearchArticles } from '../../lib/database';
import { convertDatabaseArticleToResearchItem, type ResearchItem } from '@/types/research';

export default async function Research({
  searchParams,
}: {
  searchParams: { category?: string; search?: string }
}) {
  // Get research articles from database
  const articlesData = await getResearchArticles({
    category: searchParams.category as 'whitepapers' | 'industry-reports' | 'case-studies' | 'company-insights',
    limit: 20,
    search: searchParams.search
  });

  const articles = articlesData?.data?.map(convertDatabaseArticleToResearchItem) || [];
  const hasResults = articles.length > 0;

  return (
    <PageWrapper>
      <section className="min-h-screen pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="handwritten-title text-6xl md:text-8xl mb-4 transform -rotate-2 text-foundation 
                         hover:rotate-1 transition-transform duration-500 cursor-default">
              Research Hub
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-foundation to-growth mx-auto transform rotate-1 
                          rounded-full shadow-md mb-6"></div>
            <p className="handwritten-body text-xl text-gray-600 max-w-3xl mx-auto">
              Discover insights, trends, and strategic intelligence through our comprehensive research platform. 
              From whitepapers to industry reports, we provide the knowledge you need to make informed decisions.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-12">
            <ResearchSearchBar />
          </div>

          {/* Content */}
          <Suspense fallback={<div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-foundation"></div>
            <p className="handwritten-body text-gray-600 mt-4">Loading research articles...</p>
          </div>}>
            {searchParams.category ? (
              // For now, show a category-specific view
              <div className="text-center py-20">
                <div className="handwritten-title text-4xl text-foundation mb-4">
                  📚 {searchParams.category.split('-').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ')}
                </div>
                <p className="handwritten-body text-gray-600 max-w-2xl mx-auto mb-8">
                  We&apos;re working on bringing you comprehensive {searchParams.category.replace('-', ' ')} 
                  content. This section will feature curated research and insights.
                </p>
                <a
                  href="/research"
                  className="inline-flex items-center gap-2 bg-foundation text-white px-6 py-3 
                           rounded-full handwritten-subtitle hover:bg-growth transition-all duration-300 
                           transform hover:scale-105"
                >
                  🏠 Back to Research Hub
                </a>
              </div>
            ) : (
              <>
                {/* Featured Articles */}
                {hasResults && (
                  <ResearchSection
                    title="Featured Research"
                    items={articles.filter((article: ResearchItem) => article.featured).slice(0, 3)}
                    exploreMoreUrl="/research?category=whitepapers"
                  />
                )}

                {/* Categories Overview */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                  {[
                    {
                      title: 'Whitepapers',
                      category: 'whitepapers',
                      description: 'In-depth research and analysis on digital transformation trends',
                      icon: '📄',
                      color: 'from-blue-50 to-blue-100 border-blue-200'
                    },
                    {
                      title: 'Industry Reports',
                      category: 'industry-reports',
                      description: 'Comprehensive market analysis and industry insights',
                      icon: '📊',
                      color: 'from-green-50 to-green-100 border-green-200'
                    },
                    {
                      title: 'Case Studies',
                      category: 'case-studies',
                      description: 'Real-world examples of successful digital transformations',
                      icon: '🎯',
                      color: 'from-purple-50 to-purple-100 border-purple-200'
                    },
                    {
                      title: 'Company Insights',
                      category: 'company-insights',
                      description: 'Strategic perspectives and thought leadership from OriginPath',
                      icon: '💡',
                      color: 'from-amber-50 to-amber-100 border-amber-200'
                    }
                  ].map((categoryItem) => (
                    <a
                      key={categoryItem.category}
                      href={`/research?category=${categoryItem.category}`}
                      className={`group bg-gradient-to-br ${categoryItem.color} p-6 rounded-2xl 
                               border-2 border-dashed transition-all duration-300 hover:shadow-lg
                               transform hover:scale-105 hover:-rotate-1`}
                    >
                      <div className="text-center">
                        <div className="text-4xl mb-4 group-hover:animate-bounce">
                          {categoryItem.icon}
                        </div>
                        <h3 className="handwritten-subtitle text-xl text-foundation mb-3">
                          {categoryItem.title}
                        </h3>
                        <p className="handwritten-body text-gray-600 text-sm leading-relaxed">
                          {categoryItem.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Recent Articles */}
                {hasResults && (
                  <ResearchSection
                    title="Latest Research"
                    items={articles.slice(0, 6)}
                    exploreMoreUrl="/research?category=whitepapers"
                  />
                )}

                {/* No Content State */}
                {!hasResults && !searchParams.search && (
                  <div className="text-center py-20">
                    <div className="handwritten-title text-4xl text-gray-400 mb-4">
                      🔬 Research Coming Soon
                    </div>
                    <p className="handwritten-body text-gray-600 max-w-2xl mx-auto">
                      We&apos;re working on bringing you comprehensive research articles, whitepapers, 
                      and industry insights. Stay tuned for valuable content that will help drive 
                      your business decisions.
                    </p>
                    <div className="mt-8">
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-foundation text-white px-6 py-3 
                                 rounded-full handwritten-subtitle hover:bg-growth transition-all duration-300 
                                 transform hover:scale-105"
                      >
                        📧 Request Research Topics
                      </a>
                    </div>
                  </div>
                )}

                {/* No Search Results */}
                {!hasResults && searchParams.search && (
                  <div className="text-center py-20">
                    <div className="handwritten-title text-4xl text-gray-400 mb-4">
                      🔍 No Results Found
                    </div>
                    <p className="handwritten-body text-gray-600 max-w-2xl mx-auto">
                      We couldn&apos;t find any research articles matching &ldquo;{searchParams.search}&rdquo;. 
                      Try searching for different keywords or browse our categories.
                    </p>
                    <div className="mt-8">
                      <a
                        href="/research"
                        className="inline-flex items-center gap-2 bg-foundation text-white px-6 py-3 
                                 rounded-full handwritten-subtitle hover:bg-growth transition-all duration-300 
                                 transform hover:scale-105"
                      >
                        🏠 Browse All Research
                      </a>
                    </div>
                  </div>
                )}
              </>
            )}
          </Suspense>
        </div>
      </section>
    </PageWrapper>
  );
}
