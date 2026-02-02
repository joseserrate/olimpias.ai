import React from 'react';

interface UseCaseProps {
  lane: string;
  title: string;
  outcome: string;
}

const UseCaseCard: React.FC<UseCaseProps> = ({ lane, title, outcome }) => {
  return (
    <div className="group relative bg-white rounded-[18px] p-10 md:p-12 transition-all duration-200 hover:shadow-md border border-[#E0E0E6]">
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
    <section id="use-cases" className="relative bg-white py-24 md:py-32">
      {/* Container */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Header - Match hero */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-[48px] sm:text-[56px] md:text-[72px] lg:text-[88px] font-semibold text-[#1D1D1F] tracking-[-0.025em] leading-[1.05]">
            Casos de Uso Empresariales
          </h2>
          <div className="h-3"></div>
          <p className="text-[21px] md:text-[24px] lg:text-[28px] text-[#86868B] max-w-[720px] mx-auto leading-[1.45] font-normal">
            Flujos reales, resultados medibles, impacto operacional
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1100px] mx-auto">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} {...useCase} />
          ))}
        </div>
      </div>
    </section>
  );
};
