import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const AppleFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white border-t border-[#E0E0E6]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-[1120px] mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12">
            {/* Brand - Spans 5 columns */}
            <div className="md:col-span-5">
              <div className="mb-5">
                <Image
                  src="/olimpias-ai-logo.png"
                  alt="Olimpias AI"
                  width={200}
                  height={40}
                  className="h-[40px] w-auto"
                />
              </div>
              <p className="text-[15px] text-[#1D1D1F]/60 leading-[1.5] max-w-md font-normal">
                El Centro de IA Empresarial de Bolivia
              </p>
            </div>

            {/* Navigation - Spans 2 columns */}
            <div className="md:col-span-2">
              <h4 className="text-[11px] font-medium tracking-[0.08em] text-[#86868B] uppercase mb-5">
                Navegación
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/#methodology" className="text-[15px] text-[#1D1D1F] hover:text-[#5B3DF5] transition-colors">
                    Valores
                  </Link>
                </li>
                <li>
                  <Link href="/#use-cases" className="text-[15px] text-[#1D1D1F] hover:text-[#5B3DF5] transition-colors">
                    Casos de Uso
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-[15px] text-[#1D1D1F] hover:text-[#5B3DF5] transition-colors">
                    El Centro
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[15px] text-[#1D1D1F] hover:text-[#5B3DF5] transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact - Spans 2 columns */}
            <div className="md:col-span-2">
              <h4 className="text-[11px] font-medium tracking-[0.08em] text-[#86868B] uppercase mb-5">
                Contacto
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:contact@olimpiasai.com"
                    className="text-[15px] text-[#1D1D1F] hover:text-[#5B3DF5] transition-colors"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/59100000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] text-[#1D1D1F] hover:text-[#5B3DF5] transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal - Spans 3 columns */}
            <div className="md:col-span-3">
              <h4 className="text-[11px] font-medium tracking-[0.08em] text-[#86868B] uppercase mb-5">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className="text-[15px] text-[#1D1D1F] hover:text-[#5B3DF5] transition-colors">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-[15px] text-[#1D1D1F] hover:text-[#5B3DF5] transition-colors">
                    Términos de Uso
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[#E0E0E6]">
            <p className="text-[13px] text-[#86868B] tracking-[0.01em] text-center md:text-left">
              © {currentYear} Olimpias AI. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
