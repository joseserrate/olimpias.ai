'use client';

import React, { useEffect, useState } from 'react';

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
  const [marginBottom, setMarginBottom] = useState('64px');
  
  useEffect(() => {
    const updateMargin = () => {
      const width = window.innerWidth;
      if (width >= 640) setMarginBottom('80px');  // sm: 80px
      else setMarginBottom('64px');                // mobile: 64px
    };
    
    updateMargin();
    window.addEventListener('resize', updateMargin);
    return () => window.removeEventListener('resize', updateMargin);
  }, []);

  const alignClass = alignment === 'center' ? 'text-center' : 'text-left';

  return (
    <div 
      className={`${alignClass} w-full`}
      style={{ marginBottom }}
    >
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
