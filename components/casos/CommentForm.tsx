'use client';

import React, { useState } from 'react';
import { AppleButton } from '@/components/ui';

export interface CommentFormProps {
  caseId: string;
  onSubmit?: (body: string) => void;
  className?: string;
}

export const CommentForm: React.FC<CommentFormProps> = ({ 
  caseId, 
  onSubmit,
  className = '' 
}) => {
  const [body, setBody] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!body.trim()) return;

    setIsSubmitting(true);
    
    // Mock submission - replace with real Supabase call later
    console.log('Submitting comment:', { caseId, body });
    
    if (onSubmit) {
      onSubmit(body);
    }

    // Simulate API delay
    setTimeout(() => {
      setBody('');
      setIsSubmitting(false);
      alert('Comentario enviado (mock)');
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="mb-4">
        <label htmlFor="comment-body" className="sr-only">
          Tu comentario
        </label>
        <textarea
          id="comment-body"
          name="body"
          rows={4}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Escribe tu comentario..."
          className="w-full px-4 py-3 text-[15px] text-slate-900 placeholder-slate-400 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B3DF5]/20 focus:border-[#5B3DF5] transition-colors resize-none"
          disabled={isSubmitting}
        />
      </div>
      <div className="flex justify-end">
        <AppleButton
          type="submit"
          variant="primary"
          disabled={isSubmitting || !body.trim()}
        >
          {isSubmitting ? 'Enviando...' : 'Publicar comentario'}
        </AppleButton>
      </div>
    </form>
  );
};
