import type { Metadata } from 'next';
import { AppleButton } from '@/components/ui';

export const metadata: Metadata = {
  title: 'El Centro | Olimpias AI',
  description: 'Conoce a Olimpias AI, nuestra metodología y nuestro compromiso con la arquitectura responsable de sistemas de IA.',
};

export default function AppleAboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-[980px] mx-auto text-center">
            <h1 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-semibold text-[#0B0B0D] mb-5 leading-[1.05] tracking-[-0.02em]">
              El Centro
            </h1>
            <p className="text-[19px] md:text-[21px] lg:text-[26px] text-[#1D1D1F]/70 leading-[1.35] max-w-[820px] mx-auto font-normal">
              Arquitectura de IA empresarial para Bolivia y la región
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative bg-[#F5F5F7] py-24 md:py-28 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left: Mission */}
              <div>
                <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1D1D1F] mb-6 tracking-[-0.015em] leading-[1.1]">
                  Nuestra Misión
                </h2>
                <p className="text-[17px] text-[#1D1D1F] leading-[1.47] mb-5 font-normal">
                  Diseñamos y gobernamos sistemas de IA que transforman complejidad en capacidad.
                </p>
                <p className="text-[17px] text-[#86868B] leading-[1.47] font-normal">
                  Nuestro enfoque está en entregar rendimiento medible a través de arquitectura disciplinada y gobernanza responsable. Cada sistema que construimos está diseñado para integrarse sin problemas en las operaciones existentes, manteniendo los más altos estándares de confiabilidad y control.
                </p>
              </div>

              {/* Right: Values */}
              <div className="bg-white rounded-[18px] p-10">
                <h3 className="text-[12px] font-medium tracking-[0.04em] text-[#86868B] mb-6">
                  NUESTROS VALORES
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[21px] font-semibold text-[#1D1D1F] mb-2 tracking-[-0.01em]">
                      Diseñar
                    </h4>
                    <p className="text-[14px] text-[#86868B] leading-[1.57] font-normal">
                      Precisión · Arquitectura · Métrica
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[21px] font-semibold text-[#1D1D1F] mb-2 tracking-[-0.01em]">
                      Gobernar
                    </h4>
                    <p className="text-[14px] text-[#86868B] leading-[1.57] font-normal">
                      Seguridad · Responsabilidad · Ética
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[21px] font-semibold text-[#1D1D1F] mb-2 tracking-[-0.01em]">
                      Elevar
                    </h4>
                    <p className="text-[14px] text-[#86868B] leading-[1.57] font-normal">
                      Rendimiento · Colaboración · Aprendizaje
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="relative bg-white py-24 md:py-28 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1D1D1F] mb-16 text-center tracking-[-0.015em] leading-[1.1]">
              Fundado en Bases Rigurosas
            </h2>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Experience & Education */}
              <div className="space-y-10">
                <div>
                  <h3 className="text-[12px] font-medium tracking-[0.04em] text-[#86868B] mb-4">
                    EXPERIENCIA
                  </h3>
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-[19px] font-semibold text-[#1D1D1F] mb-2 tracking-[-0.01em]">
                        Sistemas de Escala Global
                      </h4>
                      <p className="text-[14px] text-[#86868B] leading-[1.57] font-normal">
                        Experiencia en sistemas empresariales en Apple Business Solutions, trabajando con compañías Fortune 500 en implementaciones a gran escala.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[19px] font-semibold text-[#1D1D1F] mb-2 tracking-[-0.01em]">
                        Arquitectura y Diseño
                      </h4>
                      <p className="text-[14px] text-[#86868B] leading-[1.57] font-normal">
                        Experiencia profunda en arquitectura de sistemas, automatización de flujos de trabajo y optimización de rendimiento a escala.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-[12px] font-medium tracking-[0.04em] text-[#86868B] mb-4">
                    FORMACIÓN
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1D1D1F] flex-shrink-0 translate-y-[0.5em]"></span>
                      <span className="text-[14px] text-[#1D1D1F] leading-[1.57] font-normal flex-1">
                        Maestría en Comercialización de Tecnología, UT Austin
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1D1D1F] flex-shrink-0 translate-y-[0.5em]"></span>
                      <span className="text-[14px] text-[#1D1D1F] leading-[1.57] font-normal flex-1">
                        Programa Intensivo en IA Agéntica, Harvard
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1D1D1F] flex-shrink-0 translate-y-[0.5em]"></span>
                      <span className="text-[14px] text-[#1D1D1F] leading-[1.57] font-normal flex-1">
                        Finanzas y Medios Digitales
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Commitments */}
              <div>
                <h3 className="text-[12px] font-medium tracking-[0.04em] text-[#86868B] mb-6">
                  NUESTROS COMPROMISOS
                </h3>
                <div className="space-y-6">
                  <div className="p-8 bg-[#F5F5F7] rounded-[18px]">
                    <h4 className="text-[19px] font-semibold text-[#1D1D1F] mb-3 tracking-[-0.01em]">
                      Resultados Medibles
                    </h4>
                    <p className="text-[14px] text-[#86868B] leading-[1.57] font-normal">
                      Cada sistema se diseña con métricas de éxito claras y monitoreo continuo de rendimiento.
                    </p>
                  </div>
                  <div className="p-8 bg-[#F5F5F7] rounded-[18px]">
                    <h4 className="text-[19px] font-semibold text-[#1D1D1F] mb-3 tracking-[-0.01em]">
                      Arquitectura Disciplinada
                    </h4>
                    <p className="text-[14px] text-[#86868B] leading-[1.57] font-normal">
                      Principios rigurosos de diseño de sistemas que aseguran escalabilidad, mantenibilidad y excelencia operacional.
                    </p>
                  </div>
                  <div className="p-8 bg-[#F5F5F7] rounded-[18px]">
                    <h4 className="text-[19px] font-semibold text-[#1D1D1F] mb-3 tracking-[-0.01em]">
                      Gobernanza Responsable
                    </h4>
                    <p className="text-[14px] text-[#86868B] leading-[1.57] font-normal">
                      Seguridad, límites y adopción responsable de IA integrados en cada sistema desde el primer día.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-[#F5F5F7] py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[28px] md:text-[32px] font-semibold text-[#1D1D1F] mb-5 tracking-[-0.01em]">
            ¿Listo para Transformar sus Operaciones?
          </h2>
          <p className="text-[17px] text-[#86868B] mb-8 max-w-[640px] mx-auto leading-[1.47] font-normal">
            Conversemos sobre cómo la arquitectura de IA empresarial puede entregar rendimiento medible para su organización.
          </p>
          <button className="group relative px-6 py-3 text-[15px] font-medium text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 transition-transform duration-300 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <a href="/contact" className="relative flex items-center gap-2">
              Agendar Consulta
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </button>
        </div>
      </section>
    </>
  );
}
