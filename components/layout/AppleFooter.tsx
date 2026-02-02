'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const AppleFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [horizontalPadding, setHorizontalPadding] = useState('24px');
  const [verticalPadding, setVerticalPadding] = useState('48px');
  
  useEffect(() => {
    const updatePadding = () => {
      const width = window.innerWidth;
      
      // Horizontal padding - match section
      if (width >= 1536) setHorizontalPadding('80px');
      else if (width >= 1280) setHorizontalPadding('64px');
      else if (width >= 1024) setHorizontalPadding('56px');
      else if (width >= 768) setHorizontalPadding('40px');
      else if (width >= 640) setHorizontalPadding('32px');
      else setHorizontalPadding('24px');
      
      // Vertical padding - more subtle for footer
      if (width >= 1024) setVerticalPadding('72px');
      else if (width >= 640) setVerticalPadding('56px');
      else setVerticalPadding('48px');
    };
    
    updatePadding();
    window.addEventListener('resize', updatePadding);
    return () => window.removeEventListener('resize', updatePadding);
  }, []);

  return (
    <footer className="relative bg-white border-t border-slate-200/40">
      <div 
        className="max-w-[1040px] mx-auto w-full"
        style={{
          paddingTop: verticalPadding,
          paddingBottom: verticalPadding,
          paddingLeft: horizontalPadding,
          paddingRight: horizontalPadding
        }}
      >
        {/* Main Grid - cleaner, more spacious */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
          {/* Brand - 5 columns */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="mb-2" style={{ marginLeft: '-14px', paddingLeft: 0 }}>
              <Image
                src="/olimpias-ai-logo.png"
                alt="Olimpias AI"
                width={280}
                height={56}
                className="h-[52px] w-auto block"
                style={{ margin: 0, padding: 0, display: 'block' }}
              />
            </div>
            <p className="text-[14px] text-slate-500 leading-[1.6] max-w-xs" style={{ margin: 0, padding: 0, textAlign: 'left' }}>
              El Centro de IA Empresarial de Bolivia
            </p>
          </div>

          {/* Navigation - 3 columns */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-medium tracking-[0.1em] text-slate-400 uppercase mb-4">
              Navegación
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/#methodology" 
                  className="text-[14px] text-slate-600 hover:text-slate-900 transition-colors inline-block"
                >
                  Valores
                </Link>
              </li>
              <li>
                <Link 
                  href="/#use-cases" 
                  className="text-[14px] text-slate-600 hover:text-slate-900 transition-colors inline-block"
                >
                  Casos de Uso
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-[14px] text-slate-600 hover:text-slate-900 transition-colors inline-block"
                >
                  El Centro
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-[14px] text-slate-600 hover:text-slate-900 transition-colors inline-block"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact - 2 columns */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-medium tracking-[0.1em] text-slate-400 uppercase mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@olimpiasai.com"
                  className="text-[14px] text-slate-600 hover:text-slate-900 transition-colors inline-block"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/59100000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-slate-600 hover:text-slate-900 transition-colors inline-block"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Legal - 3 columns */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-medium tracking-[0.1em] text-slate-400 uppercase mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/privacy" 
                  className="text-[14px] text-slate-600 hover:text-slate-900 transition-colors inline-block"
                >
                  Privacidad
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-[14px] text-slate-600 hover:text-slate-900 transition-colors inline-block"
                >
                  Términos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - more subtle */}
        <div className="pt-8 border-t border-slate-200/40">
          <p className="text-[13px] text-slate-400 text-center lg:text-left">
            © {currentYear} Olimpias AI. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
