import React from 'react';
import ArticlePage from '@/components/research/ArticlePage';

interface IndustryReportDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function IndustryReportDetailPage({ params }: IndustryReportDetailPageProps) {
  const { slug } = await params;
  return <ArticlePage categoryId="industry-reports" slug={slug} />;
}