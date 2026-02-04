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

          {/* Spacer */}
          <div className="flex-1" />

          {/* Right side: Auth buttons */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href="#auth-signin"
              className="h-10 px-5 text-sm font-medium rounded-lg border border-slate-200 text-[#5B3DF5] bg-transparent hover:bg-slate-50 transition flex items-center justify-center"
            >
              Iniciar sesión
            </a>
            <a
              href="#auth-signup"
              className="h-10 px-5 text-sm font-semibold rounded-lg bg-[#5B3DF5] text-white hover:bg-[#4A2FD5] transition flex items-center justify-center"
            >
              Crear cuenta
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
              <AppleButton
                variant="secondary"
                href="#auth-signin"
                className="w-full"
              >
                Iniciar sesión
              </AppleButton>
              <AppleButton
                variant="primary"
                href="#auth-signup"
                className="w-full"
              >
                Crear cuenta
              </AppleButton>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
