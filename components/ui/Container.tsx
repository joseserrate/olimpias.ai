import React from 'react';

export interface ContainerProps {
  className?: string;
  children: React.ReactNode;
  size?: 'normal' | 'narrow';
}

export const Container: React.FC<ContainerProps> = ({ 
  className = '', 
  children,
  size = 'normal'
}) => {
  // Stripe/Apple standard: 1200px max with consistent padding
  const widthClass = size === 'narrow' ? 'max-w-[1120px]' : 'max-w-[1200px]';
  const classes = `${widthClass} mx-auto px-6 md:px-8 ${className}`.trim();

  return (
    <div className={classes}>
      {children}
    </div>
  );
};
