'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AppleButton } from '@/components/ui';

export const AppleHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#methodology', label: 'How We Work' },
    { href: '/#use-cases', label: 'Use Cases' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-[#E6E6EA]' : 'bg-transparent'
      }`}
    >
      <div className="apple-container">
        <nav className="flex items-center justify-between h-16">
          {/* Wordmark */}
          <Link
            href="/"
            className="text-[17px] font-semibold text-[#0B0B0D] tracking-tight hover:opacity-70 transition-opacity"
          >
            Olimpias AI
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] text-[#4A4A50] hover:text-[#0B0B0D] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <AppleButton variant="primary" href="/contact">
              Book a Call
            </AppleButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#0B0B0D] hover:opacity-70"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-[#E6E6EA]">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[17px] text-[#4A4A50] hover:text-[#0B0B0D] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <AppleButton
                variant="primary"
                href="/contact"
                className="w-full mt-2"
              >
                Book a Call
              </AppleButton>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
