import React from 'react';
import { AppleButton, NeuralNetworkBackground } from '@/components/ui';

export const AppleHero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-white">
      {/* Neural Network Animation */}
      <NeuralNetworkBackground />
      
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 pt-32 pb-28 md:pt-44 md:pb-40 lg:pt-48 lg:pb-44 z-10">
        <div className="max-w-[1120px] mx-auto text-center">
          {/* Main Headline - Premium spacing */}
          <h1 className="text-[48px] sm:text-[56px] md:text-[72px] lg:text-[88px] font-semibold mb-10 md:mb-14 lg:mb-16 leading-[1.05] tracking-[-0.025em]">
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
          
          {/* Subheadline - Premium spacing and breathing room */}
          <p className="text-[21px] md:text-[24px] lg:text-[28px] mb-14 md:mb-16 lg:mb-20 max-w-[940px] mx-auto leading-[1.45] font-normal text-[#1D1D1F]/80">
            Olimpias AI es el centro donde Bolivia diseña y gobierna agentes de inteligencia artificial para rendimiento empresarial.
          </p>
          
          {/* CTA Buttons - Premium spacing */}
          <div className="flex flex-col sm:flex-row gap-5 md:gap-6 justify-center items-center">
            <button className="px-10 py-5 text-[17px] font-semibold text-white bg-[#5B3DF5] rounded-lg hover:bg-[#4A2FD5] transition-colors shadow-sm hover:shadow-md flex items-center gap-2 min-w-[200px] justify-center">
              Agendar Consulta
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <a 
              href="#methodology" 
              className="px-10 py-5 text-[17px] font-semibold text-[#5B3DF5] bg-white border-2 border-[#E0E0E6] rounded-lg hover:border-[#5B3DF5] transition-colors min-w-[240px] text-center flex items-center justify-center"
            >
              Conocer Metodología
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
