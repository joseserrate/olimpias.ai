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
        {/* DEBUG: Red outline on container to see boundaries */}
        {/* Container with EXTREME gutters - should have obvious side padding */}
        <div className="max-w-[1040px] mx-auto px-6 sm:px-8 md:px-10 lg:px-14 xl:px-16 2xl:px-20 w-full outline outline-4 outline-red-500 bg-red-50/10">
          {/* DEBUG: Yellow banner showing breakpoint info */}
          <div className="bg-yellow-300 text-black text-xs font-mono p-2 mb-4 sticky top-0 z-50">
            Container Debug: max-w-[1040px] | 
            <span className="inline sm:hidden"> px-6 (24px)</span>
            <span className="hidden sm:inline md:hidden"> px-8 (32px)</span>
            <span className="hidden md:inline lg:hidden"> px-10 (40px)</span>
            <span className="hidden lg:inline xl:hidden"> px-14 (56px)</span>
            <span className="hidden xl:inline 2xl:hidden"> px-16 (64px)</span>
            <span className="hidden 2xl:inline"> px-20 (80px)</span>
          </div>
          {children}
        </div>
      </section>
    </>
  );
};
