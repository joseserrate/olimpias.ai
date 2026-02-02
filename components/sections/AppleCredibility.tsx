import React from 'react';
import { AppleButton } from '@/components/ui';

export const AppleCredibility: React.FC = () => {
  return (
    <section className="relative bg-[#FAFAFA] py-28 md:py-36">
      <div className="apple-container">
        {/* Header */}
        <div className="text-center mb-20 md:mb-28">
          <h2 className="text-[44px] md:text-[56px] font-semibold text-[#0B0B0D] mb-5 tracking-tight leading-[1.05]">
            Fundamentos Institucionales
          </h2>
          <p className="text-[20px] md:text-[22px] text-[#4A4A50] max-w-2xl mx-auto leading-[1.5]">
            Experiencia y formación que aseguran resultados serios
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 max-w-[1100px] mx-auto px-4 md:px-6">
          {/* Left Column - Summary */}
          <div>
            <h3 className="text-[28px] font-semibold text-[#0B0B0D] mb-6 tracking-tight">
              De Sistemas Globales a
              <br />
              Empresa Boliviana
            </h3>
            <p className="text-[17px] text-[#4A4A50] leading-[1.7] mb-8">
              Traemos arquitectura de sistemas de IA de nivel empresarial a Bolivia y la región. 
              Nuestro enfoque combina experiencia en sistemas de escala global con comprensión 
              profunda de realidades operativas locales.
            </p>
            <p className="text-[17px] text-[#4A4A50] leading-[1.7]">
              Cada sistema se diseña para rendimiento medible, se gobierna para adopción 
              responsable, y se optimiza para mejora continua.
            </p>
          </div>

          {/* Right Column - Focus Areas */}
          <div>
            <div className="mb-12">
              <h4 className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#7A7A82] mb-6">
                Experiencia
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-4 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0B0B0D] flex-shrink-0"></span>
                  <span className="text-[17px] text-[#4A4A50] leading-[1.65]">
                    Sistemas de escala global en Apple Business Solutions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0B0B0D] flex-shrink-0"></span>
                  <span className="text-[17px] text-[#4A4A50] leading-[1.65]">
                    Arquitectura empresarial y diseño de sistemas
                  </span>
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h4 className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#7A7A82] mb-6">
                Formación
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-4 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0B0B0D] flex-shrink-0"></span>
                  <span className="text-[17px] text-[#4A4A50] leading-[1.65]">
                    Maestría en Comercialización de Tecnología (MSTC), UT Austin
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0B0B0D] flex-shrink-0"></span>
                  <span className="text-[17px] text-[#4A4A50] leading-[1.65]">
                    Programa Intensivo en IA Agéntica, Harvard
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0B0B0D] flex-shrink-0"></span>
                  <span className="text-[17px] text-[#4A4A50] leading-[1.65]">
                    Finanzas y Medios Digitales
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#7A7A82] mb-6">
                Compromisos
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-4 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0B0B0D] flex-shrink-0"></span>
                  <span className="text-[17px] text-[#4A4A50] leading-[1.65]">
                    Resultados medibles
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0B0B0D] flex-shrink-0"></span>
                  <span className="text-[17px] text-[#4A4A50] leading-[1.65]">
                    Arquitectura disciplinada
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0B0B0D] flex-shrink-0"></span>
                  <span className="text-[17px] text-[#4A4A50] leading-[1.65]">
                    Gobernanza responsable
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20 md:mt-28">
          <AppleButton variant="primary" href="/about">
            Conocer Más
          </AppleButton>
        </div>
      </div>
    </section>
  );
};
