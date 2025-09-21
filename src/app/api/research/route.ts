import { NextRequest, NextResponse } from 'next/server';
import { getCachedResearchArticles } from '@/lib/cache';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const options = {
      category: searchParams.get('category') as 'whitepapers' | 'industry-reports' | 'case-studies' | 'company-insights' | undefined,
      featured: searchParams.get('featured') === 'true' ? true : undefined,
      limit: parseInt(searchParams.get('limit') || '10'),
      offset: parseInt(searchParams.get('offset') || '0'),
      searchQuery: searchParams.get('search') || undefined
    };

    const result = await getCachedResearchArticles(options);
    
    if (result) {
      return NextResponse.json(result, { 
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600'
        }
      });
    } else {
      return NextResponse.json(
        { 
          articles: [], 
          total_count: 0, 
          has_more: false,
          page_size: options.limit,
          offset: options.offset
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Research API error:', error);
    return NextResponse.json(
      { 
        error: 'server_error',
        message: 'An error occurred while fetching research articles.' 
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}