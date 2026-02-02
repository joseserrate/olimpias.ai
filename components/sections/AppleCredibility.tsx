import React from 'react';
import { SectionHeader } from '@/components/ui';

export const AppleCredibility: React.FC = () => {
  return (
    <section className="relative bg-white py-24 md:py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="max-w-[1120px] mx-auto">
          <SectionHeader 
            headline="Fundamentos Institucionales"
            subheadline="Experiencia global aplicada a empresa boliviana."
          />

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Narrative */}
            <div className="flex flex-col justify-center">
              <h3 className="text-[28px] md:text-[32px] font-semibold text-[#1D1D1F] mb-6 tracking-[-0.015em] leading-[1.15]">
                De Sistemas Globales a Empresa Boliviana
              </h3>
              <p className="text-[17px] text-[#1D1D1F]/70 leading-[1.5] mb-6 font-normal">
                Traemos arquitectura de sistemas de IA de nivel empresarial a Bolivia y la región.
              </p>
              
              {/* Key Points */}
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5B3DF5] flex-shrink-0 mt-2"></span>
                  <span className="text-[15px] text-[#1D1D1F] leading-[1.5] font-normal flex-1">
                    Diseñado para rendimiento medible
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5B3DF5] flex-shrink-0 mt-2"></span>
                  <span className="text-[15px] text-[#1D1D1F] leading-[1.5] font-normal flex-1">
                    Gobernado para adopción responsable
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5B3DF5] flex-shrink-0 mt-2"></span>
                  <span className="text-[15px] text-[#1D1D1F] leading-[1.5] font-normal flex-1">
                    Optimizado para mejora continua
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Column - Info Panel */}
            <div className="bg-white border border-[#E0E0E6] rounded-xl p-10">
              {/* Experience */}
              <div className="mb-10">
                <h4 className="text-[11px] font-medium tracking-[0.08em] text-[#86868B] uppercase mb-5">
                  Experiencia
                </h4>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1D1D1F] flex-shrink-0 mt-2"></span>
                    <span className="text-[15px] text-[#1D1D1F] leading-[1.5] font-normal flex-1">
                      Sistemas de escala global en Apple Business Solutions
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1D1D1F] flex-shrink-0 mt-2"></span>
                    <span className="text-[15px] text-[#1D1D1F] leading-[1.5] font-normal flex-1">
                      Arquitectura empresarial y diseño de sistemas
                    </span>
                  </li>
                </ul>
              </div>

              {/* Education */}
              <div className="mb-10 pt-10 border-t border-[#E0E0E6]">
                <h4 className="text-[11px] font-medium tracking-[0.08em] text-[#86868B] uppercase mb-5">
                  Formación
                </h4>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1D1D1F] flex-shrink-0 mt-2"></span>
                    <span className="text-[15px] text-[#1D1D1F] leading-[1.5] font-normal flex-1">
                      Maestría en Comercialización de Tecnología, UT Austin
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1D1D1F] flex-shrink-0 mt-2"></span>
                    <span className="text-[15px] text-[#1D1D1F] leading-[1.5] font-normal flex-1">
                      Programa Intensivo en IA Agéntica, Harvard
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1D1D1F] flex-shrink-0 mt-2"></span>
                    <span className="text-[15px] text-[#1D1D1F] leading-[1.5] font-normal flex-1">
                      Finanzas y Medios Digitales
                    </span>
                  </li>
                </ul>
              </div>

              {/* Commitments */}
              <div className="pt-10 border-t border-[#E0E0E6]">
                <h4 className="text-[11px] font-medium tracking-[0.08em] text-[#86868B] uppercase mb-5">
                  Compromisos
                </h4>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5B3DF5] flex-shrink-0 mt-2"></span>
                    <span className="text-[15px] text-[#1D1D1F] leading-[1.5] font-normal flex-1">
                      Resultados medibles
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5B3DF5] flex-shrink-0 mt-2"></span>
                    <span className="text-[15px] text-[#1D1D1F] leading-[1.5] font-normal flex-1">
                      Arquitectura disciplinada
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5B3DF5] flex-shrink-0 mt-2"></span>
                    <span className="text-[15px] text-[#1D1D1F] leading-[1.5] font-normal flex-1">
                      Gobernanza responsable
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
