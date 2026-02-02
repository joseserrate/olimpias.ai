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
    ? 'transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-[#D2D2D7]' 
    : '';
    
  const classes = `bg-white border border-[#E0E0E6] rounded-xl p-8 md:p-10 ${hoverClass} ${className}`.trim();

  return (
    <div className={classes}>
      {children}
    </div>
  );
};
