import React from 'react';
import { Section, SectionHeader, ValueCard } from '@/components/ui';

export const Framework: React.FC = () => {
  const valores = [
    {
      number: '01',
      title: 'Diseñar',
      keywords: ['Precisión', 'Arquitectura', 'Métrica'],
      bullets: [
        'Diseñamos sistemas intencionalmente antes de construir',
        'Cada capacidad tiene límites, interfaces y criterios de éxito definidos'
      ],
      deliverable: 'Arquitectura de Sistema y Mapas de Flujo',
    },
    {
      number: '02',
      title: 'Gobernar',
      keywords: ['Seguridad', 'Responsabilidad', 'Ética'],
      bullets: [
        'No desplegamos poder sin control',
        'Cada sistema tiene propiedad, trazabilidad y límites éticos integrados'
      ],
      deliverable: 'Marco de Gobernanza y Protocolos de Control',
    },
    {
      number: '03',
      title: 'Elevar',
      keywords: ['Rendimiento', 'Colaboración', 'Aprendizaje'],
      bullets: [
        'Elevamos el rendimiento mejorando cómo humanos y agentes trabajan juntos',
        'Aprendemos y mejoramos en cada ciclo'
      ],
      deliverable: 'Panel de Rendimiento y Reportes de Optimización',
    },
  ];

  return (
    <Section id="methodology" background="white" divider>
      <SectionHeader 
        headline="Valores Fundamentales"
        subheadline="Mandamientos, no eslóganes. Así diseñamos, gobernamos y elevamos sistemas de IA empresarial."
      />

      {/* 3-up grid with generous gaps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {valores.map((valor, index) => (
          <ValueCard key={index} {...valor} />
        ))}
      </div>
    </Section>
  );
};
