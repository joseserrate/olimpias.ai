import React from 'react';

export const AppleCredibility: React.FC = () => {
  return (
    <section className="relative bg-white py-32 md:py-40 lg:py-48">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header - Match hero sizing */}
        <div className="text-center mb-24 md:mb-28 lg:mb-32">
          <h2 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-semibold text-[#1D1D1F] mb-6 tracking-[-0.02em] leading-[1.05]">
            Fundamentos Institucionales
          </h2>
          <p className="text-[19px] md:text-[21px] lg:text-[24px] text-[#86868B] max-w-[680px] mx-auto leading-[1.35] font-normal">
            Experiencia y formación que aseguran resultados serios
          </p>
        </div>

        {/* 2-Column Layout - More spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-[1100px] mx-auto">
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

        {/* CTA */}
        <div className="text-center mt-24 md:mt-28">
          <a 
            href="/about" 
            className="text-[15px] font-medium text-[#1D1D1F] hover:text-[#5B3DF5] transition-colors inline-flex items-center gap-2 group"
          >
            <span>Conocer Más</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
