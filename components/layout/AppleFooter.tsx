import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui';

export const AppleFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white border-t border-[#E0E0E6]">
      <div className="py-16 md:py-20">
        <Container size="narrow">
          {/* Main Footer Content - 3 Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12">
            {/* Brand - Spans 6 columns */}
            <div className="md:col-span-6">
              <div className="mb-4">
                <Image
                  src="/olimpias-ai-logo.png"
                  alt="Olimpias AI"
                  width={200}
                  height={40}
                  className="h-[36px] w-auto"
                />
              </div>
              <p className="text-[15px] text-[#86868B] leading-[1.6] max-w-md font-normal">
                El Centro de IA Empresarial de Bolivia
              </p>
            </div>

            {/* Navigation - Spans 3 columns */}
            <div className="md:col-span-3">
              <h4 className="text-[11px] font-medium tracking-[0.08em] text-[#86868B] uppercase mb-4">
                Navegación
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/#methodology" className="text-[15px] text-[#1D1D1F] hover:text-[#5B3DF5] transition-colors inline-block">
                    Valores
                  </Link>
                </li>
                <li>
                  <Link href="/#use-cases" className="text-[15px] text-[#1D1D1F] hover:text-[#5B3DF5] transition-colors inline-block">
                    Casos de Uso
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-[15px] text-[#1D1D1F] hover:text-[#5B3DF5] transition-colors inline-block">
                    El Centro
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[15px] text-[#1D1D1F] hover:text-[#5B3DF5] transition-colors inline-block">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact + Legal - Spans 3 columns */}
            <div className="md:col-span-3">
              <h4 className="text-[11px] font-medium tracking-[0.08em] text-[#86868B] uppercase mb-4">
                Contacto
              </h4>
              <ul className="space-y-2 mb-6">
                <li>
                  <a
                    href="mailto:contact@olimpiasai.com"
                    className="text-[15px] text-[#1D1D1F] hover:text-[#5B3DF5] transition-colors inline-block"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/59100000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] text-[#1D1D1F] hover:text-[#5B3DF5] transition-colors inline-block"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>

              <h4 className="text-[11px] font-medium tracking-[0.08em] text-[#86868B] uppercase mb-4 mt-8">
                Legal
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-[15px] text-[#1D1D1F] hover:text-[#5B3DF5] transition-colors inline-block">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-[15px] text-[#1D1D1F] hover:text-[#5B3DF5] transition-colors inline-block">
                    Términos
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
        </Container>
      </div>
    </footer>
  );
};
