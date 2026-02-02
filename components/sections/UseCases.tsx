import React from 'react';
import { ResponsiveSection as Section, SectionHeader, UseCaseCard } from '@/components/ui';

export const UseCases: React.FC = () => {
  const useCases = [
    {
      category: 'Comercio y Exportación',
      title: 'Documentación de Exportación',
      outcome: '80% más rápido, cero errores de cumplimiento',
    },
    {
      category: 'Comercio y Exportación',
      title: 'Inteligencia de Cadena de Suministro',
      outcome: '30% mejora en entregas a tiempo',
    },
    {
      category: 'Finanzas e Ingresos',
      title: 'Operaciones de Ingresos',
      outcome: '40% más rápida cobranza',
    },
    {
      category: 'Finanzas e Ingresos',
      title: 'Inteligencia de Gastos',
      outcome: '70% reducción en tiempo de procesamiento',
    },
    {
      category: 'Cumplimiento y Riesgo',
      title: 'Monitoreo Regulatorio',
      outcome: 'Cero plazos perdidos, siempre listo para auditoría',
    },
    {
      category: 'Operaciones de Cliente',
      title: 'Inteligencia de Soporte',
      outcome: '3x capacidad manteniendo calidad',
    },
    {
      category: 'Productividad Interna',
      title: 'Procesamiento de Documentos',
      outcome: '90% reducción en ingreso manual de datos',
    },
    {
      category: 'Productividad Interna',
      title: 'Inteligencia de Reuniones',
      outcome: '100% tasa de cumplimiento de acciones',
    },
  ];

  return (
    <Section id="use-cases" background="subtle" divider>
      <SectionHeader 
        headline="Casos de Uso Empresariales"
        subheadline="Flujos reales. Resultados medibles. Impacto operacional verificable."
      />

      {/* 2-up grid with generous gaps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {useCases.map((useCase, index) => (
          <UseCaseCard key={index} {...useCase} />
        ))}
      </div>
    </Section>
  );
};
