import React from 'react';
import { AppleButton, NeuralNetworkBackground } from '@/components/ui';

export const AppleHero: React.FC = () => {
  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-white">
      {/* Neural Network Animation */}
      <NeuralNetworkBackground />
      
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 z-10 py-20">
        <div className="max-w-[1120px] mx-auto text-center flex flex-col justify-center min-h-[80vh]">
          {/* Main Headline - Equal spacing */}
          <h1 className="text-[48px] sm:text-[56px] md:text-[72px] lg:text-[88px] font-semibold mb-10 md:mb-12 lg:mb-14 leading-[1.05] tracking-[-0.025em]">
            <span className="block">
              <span className="text-[#0B0B0D]">Centro de </span>
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
          </h1>
          
          {/* Subheadline - Equal spacing below */}
          <p className="text-[21px] md:text-[24px] lg:text-[28px] max-w-[940px] mx-auto leading-[1.45] font-normal text-[#1D1D1F]/80">
            Olimpias AI es el centro donde Bolivia diseña y gobierna agentes de inteligencia artificial para rendimiento empresarial.
          </p>
          
          {/* SPACER - Equal spacing to above */}
          <div className="h-10 md:h-12 lg:h-14 bg-red-500"></div>
          
          {/* CTA Buttons - EXPLICIT STRIPE HEIGHT */}
          <div className="flex flex-col sm:flex-row gap-5 md:gap-6 justify-center items-center">
            <button className="h-[72px] px-16 text-[19px] font-bold text-white bg-[#5B3DF5] rounded-md hover:bg-[#4A2FD5] transition-colors shadow-md hover:shadow-lg flex items-center gap-3 min-w-[240px] justify-center">
              Agendar Consulta
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <a 
              href="#methodology" 
              className="h-[72px] px-16 text-[19px] font-bold text-[#5B3DF5] bg-white border-2 border-[#E0E0E6] rounded-md hover:border-[#5B3DF5] transition-colors min-w-[280px] text-center flex items-center justify-center"
            >
              Conocer Metodología
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
