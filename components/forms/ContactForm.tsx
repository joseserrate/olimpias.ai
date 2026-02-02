'use client';

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  organization: string;
  role: string;
  problemCategory: string;
  improvementGoals: string;
  timeframe: string;
  message: string;
  honeypot: string; // Spam protection
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organization: '',
    role: '',
    problemCategory: '',
    improvementGoals: '',
    timeframe: '',
    message: '',
    honeypot: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const roles = [
    'CEO / COO',
    'Director of Operations',
    'Finance Lead',
    'Compliance Officer',
    'IT / Technology Lead',
    'Government Official',
    'Other',
  ];

  const problemCategories = [
    'Trade & Export Operations',
    'Finance & Revenue Operations',
    'Compliance & Risk Management',
    'Customer Operations',
    'Internal Productivity',
    'Government Services',
    'Other',
  ];

  const timeframes = [
    'Immediate (within 1 month)',
    'Short-term (1-3 months)',
    'Medium-term (3-6 months)',
    'Long-term (6+ months)',
    'Exploring options',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) {
      console.log('Spam detected');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          organization: '',
          role: '',
          problemCategory: '',
          improvementGoals: '',
          timeframe: '',
          message: '',
          honeypot: '',
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try WhatsApp or email instead.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-primary/10 border-2 border-primary rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-700 mb-6">
          Thank you for reaching out. We'll respond within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn btn-secondary"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Organization */}
        <div>
          <label htmlFor="organization" className="block text-sm font-semibold text-gray-900 mb-2">
            Organization *
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Role */}
        <div>
          <label htmlFor="role" className="block text-sm font-semibold text-gray-900 mb-2">
            Role *
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Select your role</option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Problem Category */}
      <div>
        <label htmlFor="problemCategory" className="block text-sm font-semibold text-gray-900 mb-2">
          Problem Category *
        </label>
        <select
          id="problemCategory"
          name="problemCategory"
          value={formData.problemCategory}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="">Select a category</option>
          {problemCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Improvement Goals */}
      <div>
        <label htmlFor="improvementGoals" className="block text-sm font-semibold text-gray-900 mb-2">
          What do you want to improve? *
        </label>
        <textarea
          id="improvementGoals"
          name="improvementGoals"
          value={formData.improvementGoals}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Describe the challenges or improvements you're looking for..."
        />
      </div>

      {/* Timeframe */}
      <div>
        <label htmlFor="timeframe" className="block text-sm font-semibold text-gray-900 mb-2">
          Timeframe (optional)
        </label>
        <select
          id="timeframe"
          name="timeframe"
          value={formData.timeframe}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="">Select a timeframe</option>
          {timeframes.map((timeframe) => (
            <option key={timeframe} value={timeframe}>
              {timeframe}
            </option>
          ))}
        </select>
      </div>

      {/* Additional Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
          Additional Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Any additional information you'd like to share..."
        />
      </div>

      {/* Error Message */}
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          {errorMessage}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn btn-primary btn-lg w-full"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>

      <p className="text-sm text-gray-600 text-center">
        * Required fields
      </p>
    </form>
  );
};
