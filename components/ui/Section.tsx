import React from 'react';
import { Container } from './Container';

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: 'white' | 'subtle';
  divider?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children, 
  background = 'white',
  divider = false
}) => {
  const bgClass = background === 'subtle' ? 'bg-slate-50/40' : 'bg-white';
  const classes = `relative ${bgClass} py-28 sm:py-32 lg:py-36 ${className}`.trim();

  return (
    <>
      {divider && (
        <div className="border-t border-slate-200/40" />
      )}
      <section id={id} className={classes}>
        <Container>
          {children}
        </Container>
      </section>
    </>
  );
};
