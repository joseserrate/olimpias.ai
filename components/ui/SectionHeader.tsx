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
    <div className={`${alignClass} mb-16 sm:mb-20`}>
      {eyebrow && (
        <div className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-4">
          {eyebrow}
        </div>
      )}
      
      {/* H2: Reduced from text-4xl→5xl→6xl to text-3xl→4xl→5xl for better balance */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15]">
        {headline}
      </h2>
      
      {subheadline && (
        <p className={`text-lg sm:text-xl text-slate-600 leading-[1.6] mt-6 max-w-2xl ${marginClass}`}>
          {subheadline}
        </p>
      )}
    </div>
  );
};
