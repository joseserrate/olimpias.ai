import React from 'react';
import { Card } from './Card';

interface UseCaseCardProps {
  category: string;
  title: string;
  outcome: string;
}

export const UseCaseCard: React.FC<UseCaseCardProps> = ({ 
  category, 
  title, 
  outcome
}) => {
  return (
    <Card className="h-full flex flex-col">
      {/* Category label - micro typography */}
      <div className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-4">
        {category}
      </div>
      
      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3 tracking-tight leading-tight">
        {title}
      </h3>
      
      {/* Outcome - brand accent */}
      <p className="text-sm font-medium text-[#5B3DF5] leading-relaxed">
        {outcome}
      </p>
    </Card>
  );
};
