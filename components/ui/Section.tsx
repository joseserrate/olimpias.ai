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
  // Generous vertical rhythm with visible separation
  const bgClass = background === 'subtle' ? 'bg-slate-50/50' : 'bg-white';
  const classes = `relative ${bgClass} py-24 sm:py-28 lg:py-32 ${className}`.trim();

  return (
    <section id={id} className={classes}>
      {/* Container: max-w-[1040px] (tight, centered) with extreme gutters at wide screens */}
      <div className="max-w-[1040px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 w-full">
        {children}
      </div>
    </section>
  );
};
