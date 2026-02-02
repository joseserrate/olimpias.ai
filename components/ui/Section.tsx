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
  // Stripe-grade vertical rhythm: py-16→20→28
  const bgClass = background === 'subtle' ? 'bg-slate-50/50' : 'bg-white';
  const classes = `relative ${bgClass} py-16 sm:py-20 lg:py-28 ${className}`.trim();

  return (
    <section 
      id={id} 
      className={classes}
      data-debug="SECTION_WRAPPER"
      style={{ outline: '3px solid red' }}
    >
      {/* DEBUG MARKER */}
      <div className="text-xs font-bold text-red-600 bg-red-100 p-2 mb-4">
        🔴 DEBUG: SECTION WRAPPER IS RENDERING
      </div>
      
      {/* Container: max-w-6xl centered with consistent horizontal padding */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {children}
      </div>
    </section>
  );
};
