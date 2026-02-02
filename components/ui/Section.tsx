import React from 'react';

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  noPadding?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children, 
  noPadding = false 
}) => {
  const paddingClass = noPadding ? '' : 'section-padding';
  const classes = `${paddingClass} ${className}`.trim();

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
};
