import React from 'react';
import { CaseStatus, statusLabels } from '@/lib/mock-data/casos';

export interface StatusBadgeProps {
  status: CaseStatus;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '' }) => {
  const getStatusStyles = (status: CaseStatus) => {
    switch (status) {
      case 'published':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'submitted':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'draft':
        return 'bg-slate-100 text-slate-600 border-slate-200';
      case 'archived':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      default:
        return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-medium border rounded-md ${getStatusStyles(
        status
      )} ${className}`}
    >
      {statusLabels[status]}
    </span>
  );
};
