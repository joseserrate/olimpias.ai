import React from 'react';

export interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ 
  className = '', 
  children
}) => {
  // Match Section: 960px max-width with EXTREME gutters
  const classes = `max-w-[960px] mx-auto px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24 w-full ${className}`.trim();

  return (
    <div className={classes}>
      {children}
    </div>
  );
};
