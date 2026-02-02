import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'lg';
  href?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'default', href, children, className = '', ...props }, ref) => {
    const baseClasses = 'btn';
    const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
    const sizeClass = size === 'lg' ? 'btn-lg' : '';
    const classes = `${baseClasses} ${variantClass} ${sizeClass} ${className}`.trim();

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

Button.displayName = 'Button';
