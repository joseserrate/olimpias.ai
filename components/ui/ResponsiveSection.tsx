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
  const [horizontalPadding, setHorizontalPadding] = useState('24px');
  const [verticalPadding, setVerticalPadding] = useState('64px');
  
  useEffect(() => {
    const updatePadding = () => {
      const width = window.innerWidth;
      
      // Horizontal padding
      if (width >= 1536) setHorizontalPadding('80px');
      else if (width >= 1280) setHorizontalPadding('64px');
      else if (width >= 1024) setHorizontalPadding('56px');
      else if (width >= 768) setHorizontalPadding('40px');
      else if (width >= 640) setHorizontalPadding('32px');
      else setHorizontalPadding('24px');
      
      // Vertical padding - balanced for premium feel
      if (width >= 1024) setVerticalPadding('96px');      // lg: desktop
      else if (width >= 640) setVerticalPadding('80px');  // sm: tablet
      else setVerticalPadding('64px');                     // mobile
    };
    
    updatePadding();
    window.addEventListener('resize', updatePadding);
    return () => window.removeEventListener('resize', updatePadding);
  }, []);

  const bgClass = background === 'subtle' ? 'bg-slate-50/40' : 'bg-white';
  const classes = `relative ${bgClass} ${className}`.trim();

  return (
    <>
      {divider && (
        <div className="border-t border-slate-200/40" />
      )}
      <section 
        id={id} 
        className={classes}
        style={{
          paddingTop: verticalPadding,
          paddingBottom: verticalPadding,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <div 
          className="max-w-[1040px] w-full"
          style={{
            paddingLeft: horizontalPadding,
            paddingRight: horizontalPadding
          }}
        >
          {children}
        </div>
      </section>
    </>
  );
};
