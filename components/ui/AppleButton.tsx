'use client';

import React, { useState } from 'react';

export interface AppleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'link';
  href?: string;
  children: React.ReactNode;
}

export const AppleButton = React.forwardRef<HTMLButtonElement, AppleButtonProps>(
  ({ variant = 'primary', href, children, className = '', ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);

    // Primary variant gets purple styling via inline styles
    const primaryStyles = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '50px',
      paddingLeft: '40px',
      paddingRight: '40px',
      fontSize: '15px',
      fontWeight: 600,
      color: '#FFFFFF',
      backgroundColor: isHovered ? '#4A2FD5' : '#5B3DF5',
      borderRadius: '6px',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s',
      border: 'none',
      whiteSpace: 'nowrap' as const,
      boxShadow: isHovered ? '0 4px 12px rgba(91, 61, 245, 0.3)' : 'none',
    };

    // Use CSS classes for other variants
    const variantClass = variant !== 'primary' ? `apple-btn-${variant}` : '';
    const classes = variant !== 'primary' ? `apple-btn ${variantClass} ${className}`.trim() : className;

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    if (href) {
      return (
        <a
          href={href}
          className={classes}
          style={variant === 'primary' ? primaryStyles : undefined}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        style={variant === 'primary' ? primaryStyles : undefined}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </button>
    );
  }
);

AppleButton.displayName = 'AppleButton';
