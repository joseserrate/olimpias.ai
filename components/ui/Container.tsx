import React from 'react';

export interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ className = '', children }) => {
  const classes = `container-max-width px-4 md:px-8 ${className}`.trim();

  return (
    <div className={classes}>
      {children}
    </div>
  );
};
