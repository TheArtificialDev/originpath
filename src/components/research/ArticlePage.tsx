'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { mockResearchItems, researchCategories } from '@/types/research';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface ArticlePageProps {
  categoryId: 'whitepapers' | 'industry-reports' | 'case-studies' | 'company-insights';
  slug: string;
}

export default function ArticlePage({ categoryId, slug }: ArticlePageProps) {
  // Find the article
  const article = mockResearchItems.find(
    item => item.category === categoryId && item.slug === slug
  );
  
  const categoryInfo = researchCategories.find(cat => cat.id === categoryId);

  if (!article || !categoryInfo) {
    return (
      <div className="min-h-screen notebook-bg">
        <Navigation />
        <div className="flex items-center justify-center" style={{ minHeight: 'calc(100vh - 80px)' }}>
          <div className="text-center max-w-md mx-auto px-6">
            <div className="w-24 h-24 mx-auto mb-6 opacity-50">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-gray-400">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h1 className="handwritten-title text-4xl mb-4">Article Not Found</h1>
            <p className="handwritten-body text-gray-600 mb-6">
              The article you&apos;re looking for doesn&apos;t exist or may have been moved.
            </p>
            <div className="space-y-3">
              <Link 
                href={`/research/${categoryId}`}
                className="block handwritten-md text-foundation hover:text-scale transition-colors duration-300"
              >
                Back to {categoryInfo?.title || 'Category'}
              </Link>
              <Link 
                href="/research"
                className="block handwritten-md text-gray-600 hover:text-foundation transition-colors duration-300"
              >
                All Research
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Get related articles (same category, excluding current)
  const relatedArticles = mockResearchItems
    .filter(item => item.category === categoryId && item.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen notebook-bg">
      <Navigation />
      {/* Header Section */}
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 handwritten-body text-gray-600">
              <Link href="/research" className="hover:text-foundation transition-colors duration-300">
                Research
              </Link>
              <span>/</span>
              <Link 
                href={`/research/${categoryId}`}
                className="hover:text-foundation transition-colors duration-300"
              >
                {categoryInfo.title}
              </Link>
              <span>/</span>
              <span className="text-foundation line-clamp-1">{article.title}</span>
            </div>
          </nav>

          {/* Article Header */}
          <div className="mb-12">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-sm handwritten-xs bg-foundation/10 text-foundation rounded-full mb-4">
                {categoryInfo.title}
              </span>
              <h1 className="handwritten-title text-5xl lg:text-6xl mb-6 text-notebook-dark leading-tight">
                {article.title}
              </h1>
              <p className="handwritten-subtitle text-gray-600 mb-6">
                {article.summary}
              </p>
              
              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-4 text-sm handwritten-xs text-gray-500">
                <span>
                  Published {new Date(article.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span>•</span>
                <span>5 min read</span>
              </div>
            </div>

            {/* Keywords */}
            <div className="flex flex-wrap gap-2">
              {article.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm handwritten-xs bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-300"
                >
                  #{keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Article Image */}
      <div className="px-6 mb-16">
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgZmlsbD0iI2Y4ZjlmYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNmI3MjgwIiBmb250LXNpemU9IjI0Ij5BcnRpY2xlIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
              }}
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {/* This would be replaced with actual article content */}
            <div className="handwritten-body space-y-6 text-gray-800 leading-relaxed">
              <p>
                This is a placeholder for the actual article content. In a real implementation, 
                this would be populated with the full article text, which could be stored in a 
                database, markdown files, or a content management system.
              </p>
              
              <p>
                The article content would include detailed analysis, insights, and research 
                findings related to <strong>{article.title.toLowerCase()}</strong>. This section 
                would be comprehensive and provide value to readers seeking in-depth information 
                about the topic.
              </p>

              <h2 className="handwritten-title text-3xl text-notebook-dark mt-12 mb-6">
                Key Findings
              </h2>
              
              <p>
                Here we would present the main discoveries and conclusions from the research. 
                This could include statistical data, trend analysis, case study results, or 
                strategic recommendations based on the research conducted.
              </p>

              <h2 className="handwritten-title text-3xl text-notebook-dark mt-12 mb-6">
                Implications
              </h2>
              
              <p>
                This section would discuss what these findings mean for businesses, organizations, 
                or individuals in the relevant field. We'd explore practical applications and 
                actionable insights that readers can implement.
              </p>

              <h2 className="handwritten-title text-3xl text-notebook-dark mt-12 mb-6">
                Conclusion
              </h2>
              
              <p>
                The conclusion would summarize the key points and provide a forward-looking 
                perspective on the topic, including potential future developments and areas 
                for further research.
              </p>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-20 pt-12 border-t border-gray-200">
              <h2 className="handwritten-title text-4xl mb-8 text-notebook-dark">
                Related {categoryInfo.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    href={`/research/${relatedArticle.category}/${relatedArticle.slug}`}
                    className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-gray-200 hover:border-gray-300 overflow-hidden"
                  >
                    <div className="h-32 relative overflow-hidden">
                      <Image
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjlmYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNmI3MjgwIiBmb250LXNpemU9IjE0Ij5SZXNlYXJjaCBJbWFnZTwvdGV4dD48L3N2Zz4=';
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="handwritten-md text-notebook-dark mb-2 line-clamp-2 group-hover:text-foundation transition-colors duration-300">
                        {relatedArticle.title}
                      </h3>
                      <p className="handwritten-body text-sm text-gray-600 line-clamp-2">
                        {relatedArticle.summary}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}