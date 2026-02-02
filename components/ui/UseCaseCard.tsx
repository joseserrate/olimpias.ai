import React from 'react';
import { Card } from './Card';

interface UseCaseCardProps {
  category: string;
  title: string;
  outcome: string;
  description?: string;
}

export const UseCaseCard: React.FC<UseCaseCardProps> = ({ 
  category, 
  title, 
  outcome,
  description 
}) => {
  return (
    <Card className="h-full flex flex-col">
      {/* Category label */}
      <div className="text-[11px] font-medium tracking-[0.08em] text-[#86868B] uppercase mb-4">
        {category}
      </div>
      
      {/* Title */}
      <h3 className="text-[19px] md:text-[21px] font-semibold text-[#1D1D1F] mb-3 tracking-[-0.01em] leading-[1.25]">
        {title}
      </h3>
      
      {/* Outcome - highlighted */}
      <p className="text-[15px] text-[#5B3DF5] font-medium mb-3 leading-[1.4]">
        {outcome}
      </p>
      
      {/* Description if provided */}
      {description && (
        <p className="text-[14px] text-[#86868B] leading-[1.5] font-normal">
          {description}
        </p>
      )}
    </Card>
  );
};
