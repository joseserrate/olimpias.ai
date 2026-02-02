'use client';

import React, { useEffect, useState } from 'react';

export interface ResponsiveSectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: 'white' | 'subtle';
  divider?: boolean;
}

export const ResponsiveSection: React.FC<ResponsiveSectionProps> = ({ 
  id, 
  className = '', 
  children, 
  background = 'white',
  divider = false
}) => {
  const [padding, setPadding] = useState('24px');
  
  useEffect(() => {
    const updatePadding = () => {
      const width = window.innerWidth;
      if (width >= 1536) setPadding('80px');      // 2xl
      else if (width >= 1280) setPadding('64px'); // xl
      else if (width >= 1024) setPadding('56px'); // lg
      else if (width >= 768) setPadding('40px');  // md
      else if (width >= 640) setPadding('32px');  // sm
      else setPadding('24px');                     // default
    };
    
    updatePadding();
    window.addEventListener('resize', updatePadding);
    return () => window.removeEventListener('resize', updatePadding);
  }, []);

  const bgClass = background === 'subtle' ? 'bg-slate-50/40' : 'bg-white';
  const classes = `relative ${bgClass} py-28 sm:py-32 lg:py-36 ${className}`.trim();

  return (
    <>
      {divider && (
        <div className="border-t border-slate-200/40" />
      )}
      <section id={id} className={classes}>
        <div 
          className="max-w-[1040px] mx-auto w-full"
          style={{
            paddingLeft: padding,
            paddingRight: padding
          }}
        >
          {children}
        </div>
      </section>
    </>
  );
};
