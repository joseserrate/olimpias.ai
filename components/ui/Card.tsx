import React from 'react';

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
  const hoverClass = hover 
    ? 'transition-all duration-200 hover:border-slate-300/70 hover:-translate-y-[1px]' 
    : '';
    
  // Premium padding: generous on all screens
  // Subtle border and shadow for premium feel
  const classes = `bg-white border border-slate-200/50 rounded-2xl p-8 sm:p-10 lg:p-12 shadow-[0_1px_3px_rgba(16,24,40,0.05)] ${hoverClass} ${className}`.trim();

  return (
    <div className={classes}>
      {children}
    </div>
  );
};
