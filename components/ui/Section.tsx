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
  // Extreme vertical padding for clear section separation
  const bgClass = background === 'subtle' ? 'bg-slate-50/40' : 'bg-white';
  const classes = `relative ${bgClass} py-32 sm:py-36 lg:py-40 ${className}`.trim();

  return (
    <section id={id} className={classes}>
      {/* Container: 960px max-width with EXTREME gutters at all breakpoints */}
      <div className="max-w-[960px] mx-auto px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24 w-full">
        {children}
      </div>
    </section>
  );
};
