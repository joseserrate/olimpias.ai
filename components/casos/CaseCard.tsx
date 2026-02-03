import React from 'react';
import Link from 'next/link';
import { Case, categoryLabels } from '@/lib/mock-data/casos';

export interface CaseCardProps {
  case: Case;
  showOwner?: boolean;
  className?: string;
}

export const CaseCard: React.FC<CaseCardProps> = ({ 
  case: caseData, 
  showOwner = false,
  className = '' 
}) => {
  return (
    <Link href={`/casos/${caseData.id}`} className="block group">
      <article
        className={`bg-white border border-slate-200/60 rounded-2xl p-8 transition-all duration-200 hover:border-slate-300 hover:shadow-lg h-full flex flex-col ${className}`}
      >
        {/* Category eyebrow */}
        <div className="text-[11px] font-medium tracking-[0.15em] text-slate-400 uppercase mb-3">
          {categoryLabels[caseData.category]}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-slate-900 tracking-tight leading-tight mb-3 group-hover:text-[#5B3DF5] transition-colors">
          {caseData.title}
        </h3>

        {/* Summary */}
        <p className="text-[15px] text-slate-600 leading-[1.6] mb-4 flex-grow">
          {caseData.summary}
        </p>

        {/* Metadata footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200/40">
          {showOwner && (
            <span className="text-xs text-slate-500">
              {caseData.owner.display_name}
            </span>
          )}
          <span className="text-xs text-slate-400 ml-auto">
            {new Date(caseData.created_at).toLocaleDateString('es-BO', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </span>
        </div>
      </article>
    </Link>
  );
};
