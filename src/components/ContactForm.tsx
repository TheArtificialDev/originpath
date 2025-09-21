'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '../lib/validation';
import { submitContactForm } from '../lib/database';
import { trackEvent } from '../lib/database';

interface ContactFormProps {
  inquiryType?: ContactFormData['inquiryType'];
  source?: string;
  className?: string;
}

export default function ContactForm({ inquiryType = 'general', source = 'contact_page', className = '' }: ContactFormProps) {
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
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      inquiryType,
      source
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Track form submission attempt
      await trackEvent('contact_form_started', {
        inquiry_type: data.inquiryType,
        source: data.source,
        has_company: !!data.company
      });

      const response = await submitContactForm(data);

      if (response.success) {
        setSubmitStatus({
          type: 'success',
          message: response.message || 'Thank you for your message! We\'ll get back to you within 24 hours.'
        });
        
        // Track successful submission
        await trackEvent('contact_form_completed', {
          submission_id: response.submission_id,
          inquiry_type: data.inquiryType,
          source: data.source
        });
        
        // Reset form on success
        reset();
      } else {
        setSubmitStatus({
          type: 'error',
          message: response.message || 'Failed to submit your message. Please try again.'
        });
        
        // Track failed submission
        await trackEvent('contact_form_failed', {
          error: response.error,
          inquiry_type: data.inquiryType,
          source: data.source
        });
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again.'
      });
      
      // Track error
      await trackEvent('contact_form_error', {
        error: 'network_error',
        inquiry_type: data.inquiryType,
        source: data.source
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`contact-form ${className}`}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

        <div className="grid md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block handwritten-md text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              {...register('name')}
              className={`w-full px-4 py-3 rounded-lg border-2 border-dashed transition-all duration-300
                         handwritten-body text-lg focus:outline-none focus:ring-2 focus:ring-foundation/20
                         ${errors.name 
                           ? 'border-red-300 bg-red-50 focus:border-red-400' 
                           : 'border-gray-200 focus:border-foundation bg-white'}`}
              placeholder="Your full name"
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
            <label htmlFor="email" className="block handwritten-md text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className={`w-full px-4 py-3 rounded-lg border-2 border-dashed transition-all duration-300
                         handwritten-body text-lg focus:outline-none focus:ring-2 focus:ring-foundation/20
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
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block handwritten-md text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone')}
              className={`w-full px-4 py-3 rounded-lg border-2 border-dashed transition-all duration-300
                         handwritten-body text-lg focus:outline-none focus:ring-2 focus:ring-foundation/20
                         ${errors.phone 
                           ? 'border-red-300 bg-red-50 focus:border-red-400' 
                           : 'border-gray-200 focus:border-foundation bg-white'}`}
              placeholder="+91 98765 43210"
              disabled={isSubmitting}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600 handwritten-body">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Company Field */}
          <div>
            <label htmlFor="company" className="block handwritten-md text-gray-700 mb-2">
              Company/Organization
            </label>
            <input
              type="text"
              id="company"
              {...register('company')}
              className={`w-full px-4 py-3 rounded-lg border-2 border-dashed transition-all duration-300
                         handwritten-body text-lg focus:outline-none focus:ring-2 focus:ring-foundation/20
                         ${errors.company 
                           ? 'border-red-300 bg-red-50 focus:border-red-400' 
                           : 'border-gray-200 focus:border-foundation bg-white'}`}
              placeholder="Your company name"
              disabled={isSubmitting}
            />
            {errors.company && (
              <p className="mt-1 text-sm text-red-600 handwritten-body">
                {errors.company.message}
              </p>
            )}
          </div>
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block handwritten-md text-gray-700 mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            {...register('subject')}
            className={`w-full px-4 py-3 rounded-lg border-2 border-dashed transition-all duration-300
                       handwritten-body text-lg focus:outline-none focus:ring-2 focus:ring-foundation/20
                       ${errors.subject 
                         ? 'border-red-300 bg-red-50 focus:border-red-400' 
                         : 'border-gray-200 focus:border-foundation bg-white'}`}
            placeholder="What would you like to discuss?"
            disabled={isSubmitting}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600 handwritten-body">
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Inquiry Type Field */}
        <div>
          <label htmlFor="inquiryType" className="block handwritten-md text-gray-700 mb-2">
            Type of Inquiry
          </label>
          <select
            id="inquiryType"
            {...register('inquiryType')}
            className={`w-full px-4 py-3 rounded-lg border-2 border-dashed transition-all duration-300
                       handwritten-body text-lg focus:outline-none focus:ring-2 focus:ring-foundation/20
                       ${errors.inquiryType 
                         ? 'border-red-300 bg-red-50 focus:border-red-400' 
                         : 'border-gray-200 focus:border-foundation bg-white'}`}
            disabled={isSubmitting}
          >
            <option value="general">General Inquiry</option>
            <option value="service">Service Information</option>
            <option value="partnership">Partnership Opportunity</option>
            <option value="support">Technical Support</option>
            <option value="other">Other</option>
          </select>
          {errors.inquiryType && (
            <p className="mt-1 text-sm text-red-600 handwritten-body">
              {errors.inquiryType.message}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block handwritten-md text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            rows={6}
            {...register('message')}
            className={`w-full px-4 py-3 rounded-lg border-2 border-dashed transition-all duration-300
                       handwritten-body text-lg focus:outline-none focus:ring-2 focus:ring-foundation/20 resize-none
                       ${errors.message 
                         ? 'border-red-300 bg-red-50 focus:border-red-400' 
                         : 'border-gray-200 focus:border-foundation bg-white'}`}
            placeholder="Tell us about your project, goals, or how we can help you..."
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 handwritten-body">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group inline-flex items-center gap-3 bg-foundation text-white px-8 py-4 
                     rounded-full handwritten-subtitle text-lg hover:bg-growth transition-all duration-300 
                     transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed 
                     disabled:transform-none"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending Message...
              </>
            ) : (
              <>
                <span className="group-hover:animate-bounce">📧</span>
                Send Message
              </>
            )}
          </button>
        </div>

        {/* Privacy Note */}
        <div className="text-center">
          <p className="handwritten-body text-sm text-gray-600">
            By submitting this form, you agree to our{' '}
            <a href="/privacy" className="text-foundation hover:text-growth underline">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="/terms" className="text-foundation hover:text-growth underline">
              Terms of Service
            </a>
            . We&apos;ll never share your information.
          </p>
        </div>
      </form>
    </div>
  );
}