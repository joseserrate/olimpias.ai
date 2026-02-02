'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    { href: '/#methodology', label: 'Valores' },
    { href: '/#use-cases', label: 'Casos de Uso' },
    { href: '/about', label: 'El Centro' },
    { href: '/contact', label: 'Contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-2xl border-b border-[#E6E6EA]' 
          : 'bg-white/95 backdrop-blur-2xl'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-[68px] md:h-[76px]">
          {/* Logo */}
          <Link
            href="/"
            className="hover:opacity-70 transition-opacity flex-shrink-0"
          >
            <Image
              src="/olimpias-ai-logo.png"
              alt="Olimpias AI"
              width={280}
              height={56}
              priority
              className="h-[48px] md:h-[56px] w-auto"
            />
          </Link>

          {/* Desktop Navigation - Apple spacing */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] text-[#0B0B0D] hover:opacity-70 transition-opacity whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Always visible on desktop */}
          <div className="hidden lg:block flex-shrink-0">
            <AppleButton variant="primary" href="/contact" className="text-[14px] px-4 py-2">
              Agendar Consulta
            </AppleButton>
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
                href="/contact"
                className="w-full mt-2"
              >
                Agendar Consulta
              </AppleButton>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
