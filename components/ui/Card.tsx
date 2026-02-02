'use client';

import React, { useEffect, useState } from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hover = true
}) => {
  const [padding, setPadding] = useState('32px');
  
  useEffect(() => {
    const updatePadding = () => {
      const width = window.innerWidth;
      if (width >= 1024) setPadding('48px');  // lg: desktop
      else if (width >= 640) setPadding('40px'); // sm: tablet
      else setPadding('32px');                  // mobile
    };
    
    updatePadding();
    window.addEventListener('resize', updatePadding);
    return () => window.removeEventListener('resize', updatePadding);
  }, []);

  const hoverClass = hover 
    ? 'transition-all duration-200 hover:border-slate-300/70 hover:-translate-y-[1px]' 
    : '';
    
  const classes = `bg-white border border-slate-200/50 rounded-2xl shadow-[0_1px_3px_rgba(16,24,40,0.05)] ${hoverClass} ${className}`.trim();

  return (
    <div 
      className={classes}
      style={{ padding }}
    >
      {children}
    </div>
  );
};
