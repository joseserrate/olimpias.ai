import React from 'react';

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
    <div className="group relative bg-white border border-[#E0E0E6] rounded-xl p-8 transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-[#D2D2D7] h-full flex flex-col">
      {/* Category label */}
      <div className="text-[11px] font-medium tracking-[0.08em] text-[#86868B] uppercase mb-4">
        {category}
      </div>
      
      {/* Title */}
      <h3 className="text-[20px] md:text-[22px] font-semibold text-[#1D1D1F] mb-3 tracking-[-0.01em] leading-[1.2]">
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
    </div>
  );
};
