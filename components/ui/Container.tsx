import React from 'react';

export interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ 
  className = '', 
  children
}) => {
  // Match Section container: max-w-5xl with generous gutters including xl breakpoint
  const classes = `max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full ${className}`.trim();

  return (
    <div className={classes}>
      {children}
    </div>
  );
};
