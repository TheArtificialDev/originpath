import React from 'react';
import ArticlePage from '@/components/research/ArticlePage';

interface WhitepaperDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function WhitepaperDetailPage({ params }: WhitepaperDetailPageProps) {
  const { slug } = await params;
  return <ArticlePage categoryId="whitepapers" slug={slug} />;
}