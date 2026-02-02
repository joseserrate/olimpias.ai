import React from 'react';
import { AppleButton, NeuralNetworkBackground } from '@/components/ui';

export const AppleHero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-white">
      {/* Neural Network Animation */}
      <NeuralNetworkBackground />
      
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 pt-28 pb-24 md:pt-36 md:pb-32 lg:pt-40 lg:pb-36 z-10">
        <div className="max-w-[980px] mx-auto text-center">
          {/* Main Headline - glass effect on IA Empresarial only */}
          <h1 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[72px] font-semibold mb-5 leading-[1.05] tracking-[-0.02em]">
            <span className="block">
              <span className="text-[#0B0B0D]">El Centro de </span>
              <span className="relative inline-block opacity-75 backdrop-blur-sm">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700">
                  IA Empresarial
                </span>
                {/* Subtle glow effect */}
                <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700 blur-sm opacity-30">
                  IA Empresarial
                </span>
              </span>
            </span>
            <span className="block mt-1">
              <span className="text-[#0B0B0D]">de </span>
              <span className="text-[#0B0B0D]">Bolivia</span>
            </span>
          </h1>
          
          {/* Subheadline with transparency overlay effect */}
          <p className="text-[19px] md:text-[21px] lg:text-[26px] mb-8 max-w-[820px] mx-auto leading-[1.35] font-normal">
            <span className="text-[#1D1D1F]/70">Diseñamos y gobernamos </span>
            <span className="text-[#1D1D1F] font-medium">operaciones agénticas</span>
            <span className="text-[#1D1D1F]/70"> que entregan </span>
            <span className="text-[#1D1D1F] font-medium">rendimiento empresarial medible</span>
          </p>
          
          {/* CTA Buttons - Enhanced Stripe style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group relative px-6 py-3 text-[15px] font-medium text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 transition-transform duration-300 group-hover:scale-105"></div>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative flex items-center gap-2">
                Agendar Consulta
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <a 
              href="#methodology" 
              className="text-[15px] font-medium text-[#1D1D1F] hover:text-purple-700 transition-colors flex items-center gap-2 group"
            >
              <span>Conocer Metodología</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          
          {/* Supporting Line */}
          <div className="relative inline-block mb-16">
            <p className="text-[17px] md:text-[19px] max-w-[680px] mx-auto leading-[1.45] font-normal">
              <span className="text-[#1D1D1F]/60">Donde Bolivia </span>
              <span className="text-[#1D1D1F]">diseña y gobierna agentes</span>
              <span className="text-[#1D1D1F]/60"> de inteligencia artificial para </span>
              <span className="text-[#1D1D1F] font-medium">rendimiento empresarial</span>
              <span className="text-[#1D1D1F]/60">.</span>
            </p>
          </div>
          
          {/* Trust Line with modern styling */}
          <div className="pt-8 border-t border-[#1D1D1F]/10 max-w-[740px] mx-auto">
            <p className="text-[13px] text-[#1D1D1F]/50 tracking-[0.02em] leading-[1.6]">
              Fundado en experiencia global · Apple Business Solutions · MSTC, UT Austin · Harvard Agentic AI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
