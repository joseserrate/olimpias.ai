'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AppleButton, Container } from '@/components/ui';

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
    { href: '/#casos', label: 'Casos' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-2xl border-b border-[#E6E6EA]' 
          : 'bg-white/95 backdrop-blur-2xl'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-[68px] md:h-[76px]">
          {/* Logo */}
          <Link
            href="/"
            className="hover:opacity-70 transition-opacity flex-shrink-0"
          >
            <Image
              src="/olimpias-ai-logo.png"
              alt="Olimpias AI"
              width={370}
              height={74}
              priority
              className="h-[64px] md:h-[74px] w-auto"
            />
          </Link>

          {/* Desktop Navigation - Apple spacing */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] text-[#0B0B0D] hover:opacity-70 transition-opacity whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side: CTA */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            {/* Primary CTA - matches hero exactly */}
            <a
              href="/#casos"
              className="cursor-pointer h-[50px] px-10 text-[15px] font-semibold text-white bg-[#5B3DF5] rounded-md hover:bg-[#4A2FD5] transition-all duration-200 hover:shadow-md flex items-center gap-2 min-w-[180px] justify-center"
            >
              Ver Casos
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#0B0B0D] hover:opacity-70 transition-opacity"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
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
          <div className="lg:hidden py-6 border-t border-[#E6E6EA]">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[17px] text-[#0B0B0D] hover:opacity-70 transition-opacity py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <AppleButton
                variant="primary"
                href="/#casos"
                className="w-full mt-2"
              >
                Ver Casos
              </AppleButton>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
