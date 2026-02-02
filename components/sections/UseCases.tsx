import React from 'react';
import { AppleButton } from '@/components/ui';

interface UseCaseProps {
  lane: string;
  title: string;
  outcome: string;
}

const UseCaseCard: React.FC<UseCaseProps> = ({ lane, title, outcome }) => {
  return (
    <div className="group relative bg-white rounded-[18px] p-8 transition-all duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
      {/* Lane label */}
      <div className="text-[12px] font-medium tracking-[0.04em] text-[#86868B] mb-4">
        {lane}
      </div>
      
      {/* Title */}
      <h3 className="text-[21px] md:text-[24px] font-semibold text-[#1D1D1F] mb-3 tracking-[-0.01em] leading-[1.19]">
        {title}
      </h3>
      
      {/* Outcome */}
      <p className="text-[14px] text-[#86868B] leading-[1.57] font-normal">
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
    <section id="use-cases" className="relative bg-white py-20 md:py-24 lg:py-28">
      {/* Container */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-[40px] md:text-[48px] lg:text-[56px] font-semibold text-[#0B0B0D] mb-4 tracking-[-0.015em] leading-[1.07]">
            Casos de Uso Empresariales
          </h2>
          <p className="text-[19px] md:text-[21px] text-[#4A4A50] max-w-[600px] mx-auto leading-[1.38] font-normal">
            Flujos reales, resultados medibles, impacto operacional
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 max-w-[1200px] mx-auto">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} {...useCase} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-12 border-t border-[#D2D2D7] max-w-[800px] mx-auto">
          <p className="text-[17px] text-[#86868B] mb-6 leading-[1.47] font-normal">
            ¿No ve su caso? Cada empresa tiene flujos únicos.
          </p>
          <AppleButton variant="link" href="/contact" className="text-[14px]">
            Agendar Consulta →
          </AppleButton>
        </div>
      </div>
    </section>
  );
};
