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
  const bgClass = background === 'subtle' ? 'bg-slate-50/40' : 'bg-white';
  const classes = `relative ${bgClass} py-28 sm:py-32 lg:py-36 ${className}`.trim();

  return (
    <>
      {divider && (
        <div className="border-t border-slate-200/40" />
      )}
      <section id={id} className={classes}>
        {/* FORCE padding with inline styles - Tailwind utilities not working */}
        <div 
          className="max-w-[1040px] mx-auto w-full outline outline-4 outline-red-500 bg-red-50/10"
          style={{
            paddingLeft: '24px',
            paddingRight: '24px'
          }}
        >
          {/* DEBUG: Show applied padding */}
          <div className="bg-yellow-300 text-black text-xs font-mono p-2 mb-4 sticky top-0 z-50">
            FORCED INLINE PADDING: 24px mobile (will increase with JS for larger screens)
          </div>
          {children}
        </div>
      </section>
    </>
  );
};
