import React from 'react';
import { AppleButton, NeuralNetworkBackground } from '@/components/ui';

export const AppleHero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center bg-white overflow-hidden">
      {/* Subtle background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] via-white to-white opacity-60"></div>
      
      {/* Neural Network Animation */}
      <NeuralNetworkBackground />
      
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 pt-28 pb-24 md:pt-36 md:pb-32 lg:pt-40 lg:pb-36 z-10">
        <div className="max-w-[980px] mx-auto text-center">
          {/* Main Headline - Apple refined size */}
          <h1 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-semibold text-[#0B0B0D] mb-5 leading-[1.07] tracking-[-0.015em]">
            El Centro de IA Empresarial
            <br className="hidden sm:block" />
            de Bolivia
          </h1>
          
          {/* Subheadline - Apple size */}
          <p className="text-[19px] md:text-[21px] lg:text-[24px] text-[#86868B] mb-8 max-w-[800px] mx-auto leading-[1.38] font-normal">
            Diseñamos y gobernamos operaciones agénticas que entregan rendimiento empresarial medible
          </p>
          
          {/* CTA Buttons - Apple style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
            <AppleButton variant="primary" href="/contact" className="text-[14px] px-5 py-2.5">
              Agendar Consulta
            </AppleButton>
            <AppleButton variant="link" href="#methodology" className="text-[14px]">
              Conocer Metodología →
            </AppleButton>
          </div>
          
          {/* Supporting Line */}
          <p className="text-[17px] text-[#86868B] max-w-[640px] mx-auto leading-[1.47] mb-16 font-normal">
            Donde Bolivia diseña y gobierna agentes de inteligencia artificial para rendimiento empresarial.
          </p>
          
          {/* Trust Line */}
          <div className="pt-10 border-t border-[#D2D2D7] max-w-[740px] mx-auto">
            <p className="text-[12px] text-[#86868B] tracking-[0.04em] leading-[1.67]">
              Fundado en experiencia global · Apple Business Solutions · MSTC, UT Austin · Harvard Agentic AI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
