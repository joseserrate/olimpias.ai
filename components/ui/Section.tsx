import React from 'react';

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  spacing?: 'normal' | 'large' | 'none';
  background?: 'white' | 'gray';
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children, 
  spacing = 'normal',
  background = 'white'
}) => {
  // Vertical rhythm: py-20 mobile, py-28 or py-32 desktop
  const spacingClass = spacing === 'large' 
    ? 'py-24 md:py-32 lg:py-40' 
    : spacing === 'normal'
    ? 'py-20 md:py-28'
    : '';
    
  const bgClass = background === 'gray' ? 'bg-gray-50' : 'bg-white';
  
  const classes = `relative ${bgClass} ${spacingClass} ${className}`.trim();

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
};
