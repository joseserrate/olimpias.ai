import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const AppleFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white border-t border-slate-200/60">
      {/* Match Section spacing: py-16→20→28 */}
      <div className="py-16 sm:py-20 lg:py-28">
        {/* Match Section container: max-w-6xl with consistent padding */}
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* 3-column grid on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12">
            {/* Brand - 6 columns */}
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
              <p className="text-slate-600 leading-relaxed max-w-md">
                El Centro de IA Empresarial de Bolivia
              </p>
            </div>

            {/* Navigation - 3 columns */}
            <div className="md:col-span-3">
              <h4 className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-4">
                Navegación
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/#methodology" className="text-slate-700 hover:text-[#5B3DF5] transition-colors inline-block">
                    Valores
                  </Link>
                </li>
                <li>
                  <Link href="/#use-cases" className="text-slate-700 hover:text-[#5B3DF5] transition-colors inline-block">
                    Casos de Uso
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-slate-700 hover:text-[#5B3DF5] transition-colors inline-block">
                    El Centro
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-700 hover:text-[#5B3DF5] transition-colors inline-block">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact + Legal - 3 columns */}
            <div className="md:col-span-3">
              <h4 className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-4">
                Contacto
              </h4>
              <ul className="space-y-2 mb-8">
                <li>
                  <a
                    href="mailto:contact@olimpiasai.com"
                    className="text-slate-700 hover:text-[#5B3DF5] transition-colors inline-block"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/59100000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-[#5B3DF5] transition-colors inline-block"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>

              <h4 className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-4">
                Legal
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-slate-700 hover:text-[#5B3DF5] transition-colors inline-block">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-slate-700 hover:text-[#5B3DF5] transition-colors inline-block">
                    Términos
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-200/60">
            <p className="text-sm text-slate-500 text-center md:text-left">
              © {currentYear} Olimpias AI. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
