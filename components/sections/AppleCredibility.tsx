import React from 'react';
import { AppleButton } from '@/components/ui';

export const AppleCredibility: React.FC = () => {
  return (
    <section className="relative bg-[#F5F5F7] py-24 md:py-28 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-[40px] md:text-[48px] lg:text-[56px] font-semibold text-[#1D1D1F] mb-4 tracking-[-0.015em] leading-[1.07]">
            Fundamentos Institucionales
          </h2>
          <p className="text-[19px] md:text-[21px] text-[#86868B] max-w-[600px] mx-auto leading-[1.38] font-normal">
            Experiencia y formación que aseguran resultados serios
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-[1100px] mx-auto">
          {/* Left Column - Summary */}
          <div>
            <h3 className="text-[24px] md:text-[28px] font-semibold text-[#1D1D1F] mb-5 tracking-[-0.01em] leading-[1.14]">
              De Sistemas Globales a
              <br />
              Empresa Boliviana
            </h3>
            <p className="text-[17px] text-[#86868B] leading-[1.47] mb-5 font-normal">
              Traemos arquitectura de sistemas de IA de nivel empresarial a Bolivia y la región.
            </p>
            <p className="text-[17px] text-[#86868B] leading-[1.47] font-normal">
              Cada sistema se diseña para rendimiento medible, se gobierna para adopción 
              responsable, y se optimiza para mejora continua.
            </p>
          </div>

          {/* Right Column - Credentials */}
          <div className="space-y-10">
            <div>
              <h4 className="text-[12px] font-semibold tracking-[0.04em] text-[#86868B] mb-4">
                EXPERIENCIA
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D1D1F] flex-shrink-0"></span>
                  <span className="text-[14px] text-[#1D1D1F] leading-[1.57] font-normal">
                    Sistemas de escala global en Apple Business Solutions
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D1D1F] flex-shrink-0"></span>
                  <span className="text-[14px] text-[#1D1D1F] leading-[1.57] font-normal">
                    Arquitectura empresarial y diseño de sistemas
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[12px] font-semibold tracking-[0.04em] text-[#86868B] mb-4">
                FORMACIÓN
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D1D1F] flex-shrink-0"></span>
                  <span className="text-[14px] text-[#1D1D1F] leading-[1.57] font-normal">
                    Maestría en Comercialización de Tecnología (MSTC), UT Austin
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D1D1F] flex-shrink-0"></span>
                  <span className="text-[14px] text-[#1D1D1F] leading-[1.57] font-normal">
                    Programa Intensivo en IA Agéntica, Harvard
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D1D1F] flex-shrink-0"></span>
                  <span className="text-[14px] text-[#1D1D1F] leading-[1.57] font-normal">
                    Finanzas y Medios Digitales
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[12px] font-semibold tracking-[0.04em] text-[#86868B] mb-4">
                COMPROMISOS
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D1D1F] flex-shrink-0"></span>
                  <span className="text-[14px] text-[#1D1D1F] leading-[1.57] font-normal">
                    Resultados medibles
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D1D1F] flex-shrink-0"></span>
                  <span className="text-[14px] text-[#1D1D1F] leading-[1.57] font-normal">
                    Arquitectura disciplinada
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D1D1F] flex-shrink-0"></span>
                  <span className="text-[14px] text-[#1D1D1F] leading-[1.57] font-normal">
                    Gobernanza responsable
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20 md:mt-24">
          <AppleButton variant="link" href="/about" className="text-[14px]">
            Conocer Más →
          </AppleButton>
        </div>
      </div>
    </section>
  );
};
