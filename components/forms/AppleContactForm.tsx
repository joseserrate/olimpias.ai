'use client';

import React, { useState, FormEvent } from 'react';
import { AppleButton } from '@/components/ui';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  useCase: string;
  timeline: string;
  budget: string;
  message: string;
  honeypot: string;
}

export const AppleContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    useCase: '',
    timeline: '',
    budget: '',
    message: '',
    honeypot: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          useCase: '',
          timeline: '',
          budget: '',
          message: '',
          honeypot: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (submitStatus === 'success') {
    return (
      <div className="p-12 text-center bg-white/80 backdrop-blur-xl rounded-3xl border border-[#E6E6EA]/50 shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
        <div className="w-16 h-16 bg-[#0B0B0D] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-[24px] font-semibold text-[#0B0B0D] mb-3 tracking-tight">
          Message Received
        </h3>
        <p className="text-[17px] text-[#4A4A50] leading-[1.65] mb-8">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <AppleButton variant="secondary" onClick={() => setSubmitStatus('idle')}>
          Send Another Message
        </AppleButton>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Honeypot */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-[15px] font-medium text-[#0B0B0D] mb-3">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-5 py-4 text-[17px] text-[#0B0B0D] bg-white border border-[#E6E6EA] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B0B0D] focus:border-transparent transition-all placeholder:text-[#7A7A82]"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-[15px] font-medium text-[#0B0B0D] mb-3">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-5 py-4 text-[17px] text-[#0B0B0D] bg-white border border-[#E6E6EA] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B0B0D] focus:border-transparent transition-all placeholder:text-[#7A7A82]"
            placeholder="your@email.com"
          />
        </div>
      </div>

      {/* Company & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-[15px] font-medium text-[#0B0B0D] mb-3">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full px-5 py-4 text-[17px] text-[#0B0B0D] bg-white border border-[#E6E6EA] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B0B0D] focus:border-transparent transition-all placeholder:text-[#7A7A82]"
            placeholder="Company name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-[15px] font-medium text-[#0B0B0D] mb-3">
            Phone <span className="text-[#7A7A82] font-normal">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-5 py-4 text-[17px] text-[#0B0B0D] bg-white border border-[#E6E6EA] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B0B0D] focus:border-transparent transition-all placeholder:text-[#7A7A82]"
            placeholder="+591 000 0000"
          />
        </div>
      </div>

      {/* Use Case */}
      <div>
        <label htmlFor="useCase" className="block text-[15px] font-medium text-[#0B0B0D] mb-3">
          Primary Use Case
        </label>
        <select
          id="useCase"
          name="useCase"
          value={formData.useCase}
          onChange={handleChange}
          required
          className="w-full px-5 py-4 text-[17px] text-[#0B0B0D] bg-white border border-[#E6E6EA] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B0B0D] focus:border-transparent transition-all appearance-none cursor-pointer"
        >
          <option value="">Select a use case</option>
          <option value="trade-export">Trade & Export Operations</option>
          <option value="finance-revenue">Finance & Revenue Operations</option>
          <option value="compliance-risk">Compliance & Risk Management</option>
          <option value="customer-ops">Customer Operations</option>
          <option value="internal-productivity">Internal Productivity</option>
          <option value="government">Government & Public Services</option>
          <option value="other">Other / Exploratory</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-[15px] font-medium text-[#0B0B0D] mb-3">
          Tell us about your needs
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-5 py-4 text-[17px] text-[#0B0B0D] bg-white border border-[#E6E6EA] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B0B0D] focus:border-transparent transition-all resize-none placeholder:text-[#7A7A82]"
          placeholder="Describe your current challenges, goals, or specific questions..."
        />
      </div>

      {/* Submit */}
      <div className="pt-4">
        <AppleButton
          variant="primary"
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto min-w-[200px]"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </AppleButton>
        {submitStatus === 'error' && (
          <p className="mt-4 text-[15px] text-[#4A4A50]">
            Something went wrong. Please try again or email us directly.
          </p>
        )}
      </div>
    </form>
  );
};
