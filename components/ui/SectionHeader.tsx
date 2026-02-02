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
    <div className={`${alignClass} mb-14`}>
      {eyebrow && (
        <div className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-4">
          {eyebrow}
        </div>
      )}
      
      {/* H2: Balanced size, tight tracking, max-w-3xl for line length control */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15] max-w-3xl mx-auto">
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
