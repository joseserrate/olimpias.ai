import React from 'react';

export const AppleCredibility: React.FC = () => {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Header - Match hero */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-[48px] sm:text-[56px] md:text-[72px] lg:text-[88px] font-semibold text-[#1D1D1F] tracking-[-0.025em] leading-[1.05]">
            Fundamentos Institucionales
          </h2>
          <div className="h-3"></div>
          <p className="text-[21px] md:text-[24px] lg:text-[28px] text-[#86868B] max-w-[720px] mx-auto leading-[1.45] font-normal">
            Experiencia y formación que aseguran resultados serios
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-[1100px] mx-auto">
          {/* Left Column - Summary */}
          <div>
            <h3 className="text-[28px] md:text-[32px] font-semibold text-[#1D1D1F] mb-6 tracking-[-0.015em] leading-[1.12]">
              De Sistemas Globales a
              <br />
              Empresa Boliviana
            </h3>
            <p className="text-[19px] text-[#86868B] leading-[1.47] mb-6 font-normal">
              Traemos arquitectura de sistemas de IA de nivel empresarial a Bolivia y la región.
            </p>
            <p className="text-[19px] text-[#86868B] leading-[1.47] font-normal">
              Cada sistema se diseña para rendimiento medible, se gobierna para adopción 
              responsable, y se optimiza para mejora continua.
            </p>
          </div>

          {/* Right Column - Credentials */}
          <div className="space-y-12">
            <div>
              <h4 className="text-[12px] font-medium tracking-[0.04em] text-[#86868B] mb-5">
                EXPERIENCIA
              </h4>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1D1D1F] flex-shrink-0 translate-y-[0.5em]"></span>
                  <span className="text-[17px] text-[#1D1D1F] leading-[1.47] font-normal flex-1">
                    Sistemas de escala global en Apple Business Solutions
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1D1D1F] flex-shrink-0 translate-y-[0.5em]"></span>
                  <span className="text-[17px] text-[#1D1D1F] leading-[1.47] font-normal flex-1">
                    Arquitectura empresarial y diseño de sistemas
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[12px] font-medium tracking-[0.04em] text-[#86868B] mb-5">
                FORMACIÓN
              </h4>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1D1D1F] flex-shrink-0 translate-y-[0.5em]"></span>
                  <span className="text-[17px] text-[#1D1D1F] leading-[1.47] font-normal flex-1">
                    Maestría en Comercialización de Tecnología (MSTC), UT Austin
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1D1D1F] flex-shrink-0 translate-y-[0.5em]"></span>
                  <span className="text-[17px] text-[#1D1D1F] leading-[1.47] font-normal flex-1">
                    Programa Intensivo en IA Agéntica, Harvard
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1D1D1F] flex-shrink-0 translate-y-[0.5em]"></span>
                  <span className="text-[17px] text-[#1D1D1F] leading-[1.47] font-normal flex-1">
                    Finanzas y Medios Digitales
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[12px] font-medium tracking-[0.04em] text-[#86868B] mb-5">
                COMPROMISOS
              </h4>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1D1D1F] flex-shrink-0 translate-y-[0.5em]"></span>
                  <span className="text-[17px] text-[#1D1D1F] leading-[1.47] font-normal flex-1">
                    Resultados medibles
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1D1D1F] flex-shrink-0 translate-y-[0.5em]"></span>
                  <span className="text-[17px] text-[#1D1D1F] leading-[1.47] font-normal flex-1">
                    Arquitectura disciplinada
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1D1D1F] flex-shrink-0 translate-y-[0.5em]"></span>
                  <span className="text-[17px] text-[#1D1D1F] leading-[1.47] font-normal flex-1">
                    Gobernanza responsable
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
