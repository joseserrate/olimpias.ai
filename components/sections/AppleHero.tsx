import React from 'react';
import { AppleButton, NeuralNetworkBackground } from '@/components/ui';

export const AppleHero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-white">
      {/* Neural Network Animation */}
      <NeuralNetworkBackground />
      
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 pt-[200px] pb-[160px] md:pt-[240px] md:pb-[200px] lg:pt-[280px] lg:pb-[240px] z-10">
        <div className="max-w-[1120px] mx-auto text-center">
          {/* Main Headline - EXTREME breathing room */}
          <h1 className="text-[48px] sm:text-[56px] md:text-[72px] lg:text-[88px] font-semibold mb-[80px] md:mb-[100px] lg:mb-[120px] leading-[1.05] tracking-[-0.025em]">
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
          
          {/* Subheadline - MASSIVE spacing before CTA */}
          <p className="text-[21px] md:text-[24px] lg:text-[28px] mb-[100px] md:mb-[140px] lg:mb-[160px] max-w-[940px] mx-auto leading-[1.45] font-normal text-[#1D1D1F]/80">
            Olimpias AI es el centro donde Bolivia diseña y gobierna agentes de inteligencia artificial para rendimiento empresarial.
          </p>
          
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
