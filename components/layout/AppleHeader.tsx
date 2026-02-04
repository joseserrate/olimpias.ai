'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AppleButton } from '@/components/ui';

export const AppleHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [isAuthenticated] = useState(false); // Mock auth state - will be real later

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
    { href: '/casos', label: 'Biblioteca' },
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

          {/* Right side: Auth + CTA (flipped order) */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            {/* Auth UI - COMES FIRST */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-[#5B3DF5] text-white font-medium text-sm hover:bg-[#4A2FD5] transition-colors"
                  aria-label="Account menu"
                >
                  M
                </button>

                {/* Account menu dropdown */}
                {isAccountMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-50">
                    <Link
                      href="/panel"
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                      onClick={() => setIsAccountMenuOpen(false)}
                    >
                      Panel
                    </Link>
                    <Link
                      href="/casos/nuevo"
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                      onClick={() => setIsAccountMenuOpen(false)}
                    >
                      Nuevo caso
                    </Link>
                    <div className="border-t border-slate-200 my-2" />
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      onClick={() => {
                        setIsAccountMenuOpen(false);
                        alert('Cerrar sesión (mock)');
                      }}
                    >
                      Cerrar sesión
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <a
                href="/login"
                className="h-[42px] px-6 text-[13px] font-semibold text-[#5B3DF5] bg-white border-2 border-[#E0E0E6] rounded-md hover:border-[#5B3DF5] transition-all duration-200 hover:shadow-sm min-w-[140px] text-center flex items-center justify-center"
              >
                Iniciar sesión
              </a>
            )}

            {/* Primary CTA - matches hero exactly */}
            <a
              href="/contact"
              className="cursor-pointer h-[50px] px-10 text-[15px] font-semibold text-white bg-[#5B3DF5] rounded-md hover:bg-[#4A2FD5] transition-all duration-200 hover:shadow-md flex items-center gap-2 min-w-[180px] justify-center"
            >
              Agendar Consulta
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
                href="/contact"
                className="w-full mt-2"
              >
                Agendar Consulta
              </AppleButton>

              {/* Mobile auth */}
              {isAuthenticated ? (
                <>
                  <div className="border-t border-[#E6E6EA] my-2" />
                  <Link
                    href="/panel"
                    className="text-[17px] text-[#0B0B0D] hover:opacity-70 transition-opacity py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Panel
                  </Link>
                  <Link
                    href="/casos/nuevo"
                    className="text-[17px] text-[#0B0B0D] hover:opacity-70 transition-opacity py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Nuevo caso
                  </Link>
                  <button
                    className="text-[17px] text-red-600 hover:opacity-70 transition-opacity py-2 text-left"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      alert('Cerrar sesión (mock)');
                    }}
                  >
                    Cerrar sesión
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  className="text-[17px] text-[#5B3DF5] hover:opacity-70 transition-opacity py-2 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Iniciar sesión
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
