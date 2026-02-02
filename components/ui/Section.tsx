import React from 'react';

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
  // Strong vertical padding for clear section separation
  const bgClass = background === 'subtle' ? 'bg-slate-50/40' : 'bg-white';
  const classes = `relative ${bgClass} py-28 sm:py-32 lg:py-36 ${className}`.trim();

  return (
    <>
      {divider && (
        <div className="border-t border-slate-200/40" />
      )}
      <section id={id} className={classes}>
        {/* Container: 1040px max-width with generous gutters at all breakpoints */}
        <div className="max-w-[1040px] mx-auto px-6 sm:px-8 md:px-10 lg:px-14 xl:px-16 2xl:px-20 w-full">
          {children}
        </div>
      </section>
    </>
  );
};
