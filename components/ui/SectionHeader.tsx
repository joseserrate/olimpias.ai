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
  const [marginBottom, setMarginBottom] = useState('32px');
  
  useEffect(() => {
    const updateMargin = () => {
      const width = window.innerWidth;
      if (width >= 640) setMarginBottom('40px');  // sm: 40px
      else setMarginBottom('32px');                // mobile: 32px
    };
    
    updateMargin();
    window.addEventListener('resize', updateMargin);
    return () => window.removeEventListener('resize', updateMargin);
  }, []);

  const alignClass = alignment === 'center' ? 'text-center' : 'text-left';

  return (
    <div 
      className={`${alignClass}`}
      style={{ 
        marginBottom,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {eyebrow && (
        <div className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-4" style={{ textAlign: 'center' }}>
          {eyebrow}
        </div>
      )}
      
      {/* H2: Controlled line length for readability, centered */}
      <h2 
        className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-slate-900 tracking-tight leading-[1.15] max-w-2xl"
        style={{ textAlign: 'center', margin: '0 auto', width: '100%' }}
      >
        {headline}
      </h2>
      
      {subheadline && (
        <p 
          className="text-base sm:text-lg text-slate-600 leading-[1.7] max-w-xl"
          style={{ textAlign: 'center', margin: '10px auto 0', width: '100%' }}
        >
          {subheadline}
        </p>
      )}
    </div>
  );
};
