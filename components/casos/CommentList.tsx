'use client';

import React from 'react';
import { Comment } from '@/lib/mock-data/casos';

export interface CommentListProps {
  comments: Comment[];
  className?: string;
}

export const CommentList: React.FC<CommentListProps> = ({ comments, className = '' }) => {
  if (comments.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <p className="text-slate-500 text-sm">
          No hay comentarios aún. Sé el primero en comentar.
        </p>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {comments.map((comment) => (
        <div key={comment.id} className="flex gap-4">
          {/* Avatar placeholder */}
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#5B3DF5]/10 flex items-center justify-center">
            <span className="text-[#5B3DF5] font-medium text-sm">
              {comment.user_name.charAt(0).toUpperCase()}
            </span>
          </div>

          {/* Comment content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-medium text-slate-900 text-sm">
                {comment.user_name}
              </span>
              <span className="text-xs text-slate-400">
                {new Date(comment.created_at).toLocaleDateString('es-BO', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </span>
            </div>
            <p className="text-[15px] text-slate-700 leading-[1.6]">
              {comment.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
