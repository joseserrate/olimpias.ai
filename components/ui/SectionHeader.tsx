import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  alignment?: 'center' | 'left';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  eyebrow, 
  headline, 
  subheadline,
  alignment = 'center' 
}) => {
  const alignClass = alignment === 'center' ? 'text-center' : 'text-left';
  const marginClass = alignment === 'center' ? 'mx-auto' : '';

  return (
    <div className={`${alignClass} mb-16 md:mb-20`}>
      {eyebrow && (
        <div className="text-[12px] font-medium tracking-[0.08em] text-[#86868B] uppercase mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-semibold text-[#1D1D1F] tracking-[-0.02em] leading-[1.05]">
        {headline}
      </h2>
      {subheadline && (
        <>
          <div className="h-3"></div>
          <p className={`text-[19px] md:text-[21px] text-[#1D1D1F]/70 leading-[1.45] font-normal max-w-[680px] ${marginClass}`}>
            {subheadline}
          </p>
        </>
      )}
    </div>
  );
};
