import React from 'react';
import Link from 'next/link';

export const AppleFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white/80 backdrop-blur-xl border-t border-[#E6E6EA]">
      <div className="apple-container py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-[20px] font-semibold text-[#0B0B0D] mb-4 tracking-tight">
              Olimpias AI
            </h3>
            <p className="text-[15px] text-[#4A4A50] leading-[1.65] max-w-md">
              Enterprise AI Architecture for measurable performance. 
              We design and govern AI systems that turn complexity into capability.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#7A7A82] mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/#methodology" className="text-[15px] text-[#4A4A50] hover:text-[#0B0B0D] transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/#use-cases" className="text-[15px] text-[#4A4A50] hover:text-[#0B0B0D] transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[15px] text-[#4A4A50] hover:text-[#0B0B0D] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[15px] text-[#4A4A50] hover:text-[#0B0B0D] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#7A7A82] mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@olimpiasai.com"
                  className="text-[15px] text-[#4A4A50] hover:text-[#0B0B0D] transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/59100000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-[#4A4A50] hover:text-[#0B0B0D] transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E6E6EA] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-[#7A7A82]">
            © {currentYear} Olimpias AI. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-[13px] text-[#7A7A82] hover:text-[#0B0B0D] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-[13px] text-[#7A7A82] hover:text-[#0B0B0D] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
