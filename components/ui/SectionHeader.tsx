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

  return (
    <div className={`${alignClass} mb-14 w-full`}>
      {eyebrow && (
        <div className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-4">
          {eyebrow}
        </div>
      )}
      
      {/* H2: Controlled line length for readability, centered */}
      <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-slate-900 tracking-tight leading-[1.15] max-w-2xl mx-auto">
        {headline}
      </h2>
      
      {subheadline && (
        <p className="text-base sm:text-lg text-slate-600 leading-[1.7] mt-5 max-w-xl mx-auto">
          {subheadline}
        </p>
      )}
    </div>
  );
};
