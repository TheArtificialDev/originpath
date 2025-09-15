import React from 'react';
import ArticlePage from '@/components/research/ArticlePage';

interface CompanyInsightDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CompanyInsightDetailPage({ params }: CompanyInsightDetailPageProps) {
  const { slug } = await params;
  return <ArticlePage categoryId="company-insights" slug={slug} />;
}