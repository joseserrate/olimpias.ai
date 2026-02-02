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
    <div className={`${alignClass} mb-12 sm:mb-16`}>
      {eyebrow && (
        <div className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-4">
          {eyebrow}
        </div>
      )}
      
      {/* H2: text-4xl→5xl→6xl, tracking-tight, font-semibold, slate-900 */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-tight">
        {headline}
      </h2>
      
      {subheadline && (
        <p className={`text-lg md:text-xl text-slate-600 leading-relaxed mt-4 max-w-2xl ${marginClass}`}>
          {subheadline}
        </p>
      )}
    </div>
  );
};
