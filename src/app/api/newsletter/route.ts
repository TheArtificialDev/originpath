import { NextRequest, NextResponse } from 'next/server';
import { subscribeToNewsletter } from '../../../lib/database';
import { validateFormData, newsletterSchema } from '../../../lib/validation';
import { ClientRateLimit } from '../../../lib/cache';

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimit = ClientRateLimit.getInstance();
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown';
    
    if (!rateLimit.canMakeRequest(`newsletter-${clientIP}`, 5, 300000)) { // 5 per 5 minutes
      return NextResponse.json(
        { 
          success: false, 
          error: 'rate_limit_exceeded',
          message: 'Too many subscription attempts. Please try again later.' 
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    
    // Validate form data
    const validation = validateFormData(newsletterSchema, body);
    if (!validation.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'validation_failed',
          message: 'Please check your form data.',
          errors: validation.errors 
        },
        { status: 400 }
      );
    }

    // Subscribe to newsletter
    const result = await subscribeToNewsletter(validation.data!);
    
    if (result.success) {
      return NextResponse.json(result, { status: 200 });
    } else {
      return NextResponse.json(result, { status: 400 });
    }
  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'server_error',
        message: 'An unexpected error occurred. Please try again.' 
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
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}