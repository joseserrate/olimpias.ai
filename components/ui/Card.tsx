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
    
  // DRAMATIC padding: 32px mobile → 40px desktop
  const classes = `bg-white border border-slate-200/60 rounded-2xl p-8 sm:p-10 shadow-[0_1px_2px_rgba(16,24,40,0.06)] ${hoverClass} ${className}`.trim();

  return (
    <div className={classes}>
      {children}
    </div>
  );
};
