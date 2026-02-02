import React from 'react';
import { AppleButton, NeuralNetworkBackground } from '@/components/ui';

export const AppleHero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-white">
      {/* Neural Network Animation */}
      <NeuralNetworkBackground />
      
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 pt-28 pb-24 md:pt-36 md:pb-32 lg:pt-40 lg:pb-36 z-10">
        <div className="max-w-[1080px] mx-auto text-center">
          {/* Main Headline - Stripe-style: larger, bolder */}
          <h1 className="text-[48px] sm:text-[56px] md:text-[72px] lg:text-[88px] font-semibold mb-8 leading-[1.05] tracking-[-0.025em]">
            <span className="block">
              <span className="text-[#0B0B0D]">El Centro de </span>
              <span className="relative inline-block opacity-75 backdrop-blur-sm">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B3DF5] to-[#5B3DF5]">
                  IA Empresarial
                </span>
                {/* Subtle glow effect */}
                <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-[#5B3DF5] to-[#5B3DF5] blur-sm opacity-30">
                  IA Empresarial
                </span>
              </span>
            </span>
            <span className="block mt-2">
              <span className="text-[#0B0B0D]">de Bolivia</span>
            </span>
          </h1>
          
          {/* Subheadline - Larger, more confident */}
          <p className="text-[21px] md:text-[24px] lg:text-[28px] mb-12 max-w-[900px] mx-auto leading-[1.3] font-normal text-[#1D1D1F]">
            <span className="text-[#1D1D1F]/70">Olimpias AI es el centro donde Bolivia </span>
            <span className="font-medium text-[#1D1D1F]">diseña y gobierna agentes</span>
            <span className="text-[#1D1D1F]/70"> de inteligencia artificial para </span>
            <span className="font-medium text-[#1D1D1F]">rendimiento empresarial</span>
            <span className="text-[#1D1D1F]/70">.</span>
          </p>
          
          {/* CTA Buttons - Stripe-style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <button className="px-7 py-3.5 text-[16px] font-semibold text-white bg-[#5B3DF5] rounded-full hover:bg-[#4A2FD5] transition-colors shadow-sm hover:shadow-md">
              Agendar Consulta
            </button>
            <a 
              href="#methodology" 
              className="px-7 py-3.5 text-[16px] font-semibold text-[#5B3DF5] bg-white border-2 border-[#E0E0E6] rounded-full hover:border-[#5B3DF5] transition-colors"
            >
              Conocer Metodología
            </a>
          </div>
          
          {/* Trust Line - More prominent */}
          <div className="pt-10 border-t border-[#1D1D1F]/10 max-w-[800px] mx-auto">
            <p className="text-[14px] text-[#1D1D1F]/50 tracking-[0.02em] leading-[1.6]">
              Fundado en experiencia global · Apple Business Solutions · MSTC, UT Austin · Harvard Agentic AI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
