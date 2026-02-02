import React from 'react';

interface UseCaseProps {
  lane: string;
  title: string;
  outcome: string;
}

const UseCaseCard: React.FC<UseCaseProps> = ({ lane, title, outcome }) => {
  return (
    <div className="group relative bg-white rounded-[18px] p-10 md:p-12 transition-all duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
      {/* Lane label */}
      <div className="text-[12px] font-medium tracking-[0.04em] text-[#86868B] mb-5">
        {lane}
      </div>
      
      {/* Title - Larger */}
      <h3 className="text-[24px] md:text-[28px] font-semibold text-[#1D1D1F] mb-4 tracking-[-0.015em] leading-[1.14]">
        {title}
      </h3>
      
      {/* Outcome - Larger */}
      <p className="text-[17px] text-[#86868B] leading-[1.47] font-normal">
        {outcome}
      </p>
    </div>
  );
};

export const UseCases: React.FC = () => {
  const useCases: UseCaseProps[] = [
    {
      lane: 'Comercio y Exportación',
      title: 'Documentación de Exportación',
      outcome: '80% más rápido, cero errores de cumplimiento',
    },
    {
      lane: 'Comercio y Exportación',
      title: 'Inteligencia de Cadena de Suministro',
      outcome: '30% mejora en entregas a tiempo',
    },
    {
      lane: 'Finanzas e Ingresos',
      title: 'Operaciones de Ingresos',
      outcome: '40% más rápida cobranza',
    },
    {
      lane: 'Finanzas e Ingresos',
      title: 'Inteligencia de Gastos',
      outcome: '70% reducción en tiempo de procesamiento',
    },
    {
      lane: 'Cumplimiento y Riesgo',
      title: 'Monitoreo Regulatorio',
      outcome: 'Cero plazos perdidos, siempre listo para auditoría',
    },
    {
      lane: 'Operaciones de Cliente',
      title: 'Inteligencia de Soporte',
      outcome: '3x capacidad manteniendo calidad',
    },
    {
      lane: 'Productividad Interna',
      title: 'Procesamiento de Documentos',
      outcome: '90% reducción en ingreso manual de datos',
    },
    {
      lane: 'Productividad Interna',
      title: 'Inteligencia de Reuniones',
      outcome: '100% tasa de cumplimiento de acciones',
    },
    {
      lane: 'Gobierno',
      title: 'Automatización de Servicio Público',
      outcome: '10x capacidad, 95% satisfacción',
    },
  ];

  return (
    <section id="use-cases" className="relative bg-white py-32 md:py-40 lg:py-48">
      {/* Container */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header - Match hero sizing */}
        <div className="text-center mb-24 md:mb-28 lg:mb-32">
          <h2 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-semibold text-[#1D1D1F] mb-6 tracking-[-0.02em] leading-[1.05]">
            Casos de Uso Empresariales
          </h2>
          <p className="text-[19px] md:text-[21px] lg:text-[24px] text-[#86868B] max-w-[680px] mx-auto leading-[1.35] font-normal">
            Flujos reales, resultados medibles, impacto operacional
          </p>
        </div>

        {/* Grid - More spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-24 md:mb-28 max-w-[1200px] mx-auto">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} {...useCase} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-16 border-t border-[#D2D2D7] max-w-[800px] mx-auto">
          <p className="text-[19px] text-[#86868B] mb-8 leading-[1.47] font-normal">
            ¿No ve su caso? Cada empresa tiene flujos únicos.
          </p>
          <a 
            href="/contact" 
            className="text-[15px] font-medium text-[#1D1D1F] hover:text-[#5B3DF5] transition-colors inline-flex items-center gap-2 group"
          >
            <span>Agendar Consulta</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
