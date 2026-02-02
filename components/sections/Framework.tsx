import React from 'react';
import { SectionHeader, ValueCard } from '@/components/ui';

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
    <section id="methodology" className="relative bg-white py-24 md:py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="max-w-[1120px] mx-auto">
          <SectionHeader 
            headline="Valores Fundamentales"
            subheadline="Mandamientos, no eslóganes. Así diseñamos, gobernamos y elevamos sistemas de IA empresarial."
          />

          {/* 3-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {valores.map((valor, index) => (
              <ValueCard key={index} {...valor} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
