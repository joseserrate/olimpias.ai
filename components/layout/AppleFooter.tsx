import React from 'react';
import Link from 'next/link';

export const AppleFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white border-t border-[#D2D2D7]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-[21px] font-semibold text-[#0B0B0D] mb-4 tracking-tight">
              Olimpias AI
            </h3>
            <p className="text-[14px] text-[#86868B] leading-[1.57] max-w-md font-normal">
              El Centro de IA Empresarial de Bolivia. Diseñamos y gobernamos operaciones agénticas que entregan rendimiento empresarial medible.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-[12px] font-medium tracking-[0.04em] text-[#86868B] mb-4">
              NAVEGACIÓN
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/#methodology" className="text-[14px] text-[#1D1D1F] hover:opacity-70 transition-opacity">
                  Valores
                </Link>
              </li>
              <li>
                <Link href="/#use-cases" className="text-[14px] text-[#1D1D1F] hover:opacity-70 transition-opacity">
                  Casos de Uso
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[14px] text-[#1D1D1F] hover:opacity-70 transition-opacity">
                  El Centro
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[14px] text-[#1D1D1F] hover:opacity-70 transition-opacity">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-[12px] font-medium tracking-[0.04em] text-[#86868B] mb-4">
              CONTACTO
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@olimpiasai.com"
                  className="text-[14px] text-[#1D1D1F] hover:opacity-70 transition-opacity"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/59100000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-[#1D1D1F] hover:opacity-70 transition-opacity"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#D2D2D7] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-[#86868B] tracking-[0.02em]">
            © {currentYear} Olimpias AI. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-[13px] text-[#86868B] hover:opacity-70 transition-opacity">
              Privacidad
            </Link>
            <Link href="/terms" className="text-[13px] text-[#86868B] hover:opacity-70 transition-opacity">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
