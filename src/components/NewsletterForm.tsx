'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { newsletterSchema, type NewsletterData } from '../lib/validation';
import { subscribeToNewsletter, trackEvent } from '../lib/database';

interface NewsletterFormProps {
  source?: string;
  className?: string;
  showInterests?: boolean;
}

export default function NewsletterForm({ source = 'footer', className = '', showInterests = false }: NewsletterFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<NewsletterData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      source
    }
  });

  const onSubmit = async (data: NewsletterData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Track subscription attempt
      await trackEvent('newsletter_subscription_started', {
        source: data.source,
        interests: data.interests || []
      });

      const response = await subscribeToNewsletter(data);

      if (response.success) {
        setSubmitStatus({
          type: 'success',
          message: response.message || 'Successfully subscribed to our newsletter!'
        });
        
        // Track successful subscription
        await trackEvent('newsletter_subscription_completed', {
          subscription_id: response.subscription_id,
          source: data.source,
          interests: data.interests || []
        });
        
        // Reset form on success
        reset();
      } else {
        setSubmitStatus({
          type: 'error',
          message: response.message || 'Failed to subscribe. Please try again.'
        });
        
        // Track failed subscription
        await trackEvent('newsletter_subscription_failed', {
          error: response.error,
          source: data.source
        });
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again.'
      });
      
      // Track error
      await trackEvent('newsletter_subscription_error', {
        error: 'network_error',
        source: data.source
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const interestOptions = [
    'Digital Transformation',
    'AI & Automation',
    'Startup Strategy',
    'Industry Reports',
    'Case Studies',
    'Technology Trends',
    'Business Growth',
    'Innovation'
  ];

  return (
    <div className={`newsletter-form ${className}`}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Status Message */}
        {submitStatus.type && (
          <div className={`p-4 rounded-lg border ${
            submitStatus.type === 'success' 
              ? 'bg-green-50 border-green-200 text-green-800' 
              : 'bg-red-50 border-red-200 text-red-800'
          }`}>
            <div className="flex items-center gap-2">
              <span className="text-lg">
                {submitStatus.type === 'success' ? '✅' : '❌'}
              </span>
              <p className="handwritten-body font-medium">{submitStatus.message}</p>
            </div>
          </div>
        )}

        {/* Name Field (Optional) */}
        <div>
          <label htmlFor="newsletter-name" className="block handwritten-md text-gray-700 mb-2">
            Name (Optional)
          </label>
          <input
            type="text"
            id="newsletter-name"
            {...register('name')}
            className={`w-full px-4 py-3 rounded-lg border-2 border-dashed transition-all duration-300
                       handwritten-body focus:outline-none focus:ring-2 focus:ring-foundation/20
                       ${errors.name 
                         ? 'border-red-300 bg-red-50 focus:border-red-400' 
                         : 'border-gray-200 focus:border-foundation bg-white'}`}
            placeholder="Your name"
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 handwritten-body">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="newsletter-email" className="block handwritten-md text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="newsletter-email"
            {...register('email')}
            className={`w-full px-4 py-3 rounded-lg border-2 border-dashed transition-all duration-300
                       handwritten-body focus:outline-none focus:ring-2 focus:ring-foundation/20
                       ${errors.email 
                         ? 'border-red-300 bg-red-50 focus:border-red-400' 
                         : 'border-gray-200 focus:border-foundation bg-white'}`}
            placeholder="your.email@company.com"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 handwritten-body">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Interests (Optional) */}
        {showInterests && (
          <div>
            <label className="block handwritten-md text-gray-700 mb-3">
              Interests (Select up to 5)
            </label>
            <div className="grid grid-cols-2 gap-2">
              {interestOptions.map((interest) => (
                <label key={interest} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={interest}
                    {...register('interests')}
                    className="rounded border-gray-300 text-foundation focus:ring-foundation"
                    disabled={isSubmitting}
                  />
                  <span className="handwritten-body text-sm text-gray-700">{interest}</span>
                </label>
              ))}
            </div>
            {errors.interests && (
              <p className="mt-1 text-sm text-red-600 handwritten-body">
                {errors.interests.message}
              </p>
            )}
          </div>
        )}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 bg-foundation text-white 
                     px-6 py-3 rounded-full handwritten-subtitle hover:bg-growth transition-all duration-300 
                     transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed 
                     disabled:transform-none"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Subscribing...
              </>
            ) : (
              <>
                <span className="group-hover:animate-bounce">📧</span>
                Subscribe to Newsletter
              </>
            )}
          </button>
        </div>

        {/* Privacy Note */}
        <div className="text-center">
          <p className="handwritten-body text-xs text-gray-500">
            By subscribing, you agree to our{' '}
            <a href="/privacy" className="text-foundation hover:text-growth underline">
              Privacy Policy
            </a>
            . Unsubscribe anytime.
          </p>
        </div>
      </form>
    </div>
  );
}