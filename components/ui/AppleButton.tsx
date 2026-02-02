import React from 'react';

export interface AppleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'link';
  href?: string;
  children: React.ReactNode;
}

export const AppleButton = React.forwardRef<HTMLButtonElement, AppleButtonProps>(
  ({ variant = 'primary', href, children, className = '', ...props }, ref) => {
    const variantClass = `apple-btn-${variant}`;
    const classes = `apple-btn ${variantClass} ${className}`.trim();

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

AppleButton.displayName = 'AppleButton';
