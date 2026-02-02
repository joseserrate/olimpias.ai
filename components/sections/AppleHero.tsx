import React from 'react';
import { AppleButton } from '@/components/ui';

export const AppleHero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center bg-white overflow-hidden">
      {/* Subtle background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] via-white to-white opacity-60"></div>
      
      <div className="relative apple-container w-full px-6 md:px-8 py-20 md:py-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline with generous spacing */}
          <h1 className="text-[48px] sm:text-[56px] md:text-[72px] lg:text-[80px] font-semibold text-[#0B0B0D] mb-8 leading-[1.05] tracking-tight">
            El Centro de IA Empresarial
            <br />
            de Bolivia
          </h1>
          
          {/* Subheadline with breathing room */}
          <p className="text-[21px] md:text-[26px] text-[#4A4A50] mb-14 max-w-3xl mx-auto leading-[1.4]">
            Diseñamos y gobernamos operaciones agénticas que entregan rendimiento empresarial medible
          </p>
          
          {/* CTA Buttons with generous spacing */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
            <AppleButton variant="primary" href="/contact">
              Agendar Consulta
            </AppleButton>
            <AppleButton variant="secondary" href="#methodology">
              Conocer Metodología
            </AppleButton>
          </div>
          
          {/* Supporting Line with breathing room */}
          <p className="text-[16px] md:text-[17px] text-[#7A7A82] max-w-2xl mx-auto leading-[1.65] mb-20">
            Donde Bolivia diseña y gobierna agentes de inteligencia artificial para rendimiento empresarial.
          </p>
          
          {/* Trust Line with enhanced spacing */}
          <div className="pt-16 border-t border-[#E6E6EA] max-w-3xl mx-auto">
            <p className="text-[13px] md:text-[14px] text-[#7A7A82] tracking-wide leading-[1.8]">
              Fundado en experiencia global · Apple Business Solutions · MSTC, UT Austin · Harvard Agentic AI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
