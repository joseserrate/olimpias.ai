import React from 'react';
import { AppleButton } from '@/components/ui';

interface UseCaseProps {
  lane: string;
  title: string;
  outcome: string;
}

const UseCaseCard: React.FC<UseCaseProps> = ({ lane, title, outcome }) => {
  return (
    <div className="group relative bg-white p-10 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)] shadow-[0_8px_24px_rgba(0,0,0,0.04)] border border-[#E6E6EA]">
      {/* Lane label */}
      <div className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#7A7A82] mb-6">
        {lane}
      </div>
      
      {/* Title */}
      <h3 className="text-[24px] font-semibold text-[#0B0B0D] mb-5 tracking-tight leading-[1.3]">
        {title}
      </h3>
      
      {/* Outcome */}
      <p className="text-[17px] text-[#4A4A50] leading-[1.7]">
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
    <section id="use-cases" className="relative bg-[#FAFAFA] py-32 md:py-40">
      {/* Breathing room container */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        {/* Header with generous spacing */}
        <div className="text-center mb-24 md:mb-32">
          <h2 className="text-[48px] md:text-[64px] font-semibold text-[#0B0B0D] mb-6 tracking-tight leading-[1.05]">
            Casos de Uso Empresariales
          </h2>
          <p className="text-[21px] md:text-[24px] text-[#4A4A50] max-w-3xl mx-auto leading-[1.5]">
            Flujos reales, resultados medibles, impacto operacional
          </p>
        </div>

        {/* Grid with HUGE gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16 mb-28">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} {...useCase} />
          ))}
        </div>

        {/* CTA with breathing room */}
        <div className="text-center pt-12 border-t border-[#E6E6EA]">
          <p className="text-[18px] text-[#4A4A50] mb-10 leading-[1.65]">
            ¿No ve su caso? Cada empresa tiene flujos únicos.
          </p>
          <AppleButton variant="primary" href="/contact">
            Agendar Consulta
          </AppleButton>
        </div>
      </div>
    </section>
  );
};
