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
    { href: '/#methodology', label: 'Valores' },
    { href: '/#use-cases', label: 'Casos de Uso' },
    { href: '/about', label: 'El Centro' },
    { href: '/contact', label: 'Contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-[#E6E6EA] shadow-[0_1px_8px_rgba(0,0,0,0.04)]' 
          : 'bg-transparent'
      }`}
    >
      <div className="apple-container px-6 md:px-8">
        <nav className="flex items-center justify-between h-18 md:h-20">
          {/* Wordmark with breathing room */}
          <Link
            href="/"
            className="text-[17px] md:text-[18px] font-semibold text-[#0B0B0D] tracking-tight hover:opacity-70 transition-opacity duration-200"
          >
            Olimpias AI
          </Link>

          {/* Desktop Navigation with generous spacing */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] text-[#4A4A50] hover:text-[#0B0B0D] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <AppleButton variant="primary" href="/contact">
              Agendar Consulta
            </AppleButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2.5 text-[#0B0B0D] hover:opacity-70 transition-opacity duration-200"
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

        {/* Mobile Menu with enhanced spacing */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-8 border-t border-[#E6E6EA] animate-in fade-in duration-200">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[17px] text-[#4A4A50] hover:text-[#0B0B0D] transition-colors duration-200 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <AppleButton
                variant="primary"
                href="/contact"
                className="w-full mt-4"
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
