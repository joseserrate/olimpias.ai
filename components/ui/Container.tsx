import React from 'react';

export interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ 
  className = '', 
  children
}) => {
  // Match Section: 1040px max-width with generous gutters
  const classes = `max-w-[1040px] mx-auto px-6 sm:px-8 md:px-10 lg:px-14 xl:px-16 2xl:px-20 w-full ${className}`.trim();

  return (
    <div className={classes}>
      {children}
    </div>
  );
};
