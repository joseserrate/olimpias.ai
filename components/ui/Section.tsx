import React from 'react';

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: 'white' | 'subtle';
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children, 
  background = 'white'
}) => {
  // Generous vertical rhythm: py-20→24→28
  const bgClass = background === 'subtle' ? 'bg-slate-50/50' : 'bg-white';
  const classes = `relative ${bgClass} py-20 sm:py-24 lg:py-28 ${className}`.trim();

  return (
    <section id={id} className={classes}>
      {/* Container: max-w-5xl (tighter for premium feel) with generous gutters including xl breakpoint */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full">
        {children}
      </div>
    </section>
  );
};
