import React from 'react';

export interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ 
  className = '', 
  children
}) => {
  // Stripe-grade standard: max-w-6xl with consistent padding
  const classes = `max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 ${className}`.trim();

  return (
    <div className={classes}>
      {children}
    </div>
  );
};
