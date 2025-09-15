import React from 'react';
import ArticlePage from '@/components/research/ArticlePage';

interface CaseStudyDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CaseStudyDetailPage({ params }: CaseStudyDetailPageProps) {
  const { slug } = await params;
  return <ArticlePage categoryId="case-studies" slug={slug} />;
}