import React from 'react';

interface FrameworkCardProps {
  number: string;
  title: string;
  definition: string;
  examples: string[];
  deliverable: string;
}

const FrameworkCard: React.FC<FrameworkCardProps> = ({ 
  number,
  title, 
  definition, 
  examples, 
  deliverable,
}) => {
  return (
    <div className="group relative bg-white rounded-[18px] p-12 md:p-14 transition-all duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
      {/* Eyebrow number */}
      <div className="text-[13px] font-medium tracking-[0.02em] text-[#86868B] mb-8">
        {number}
      </div>
      
      {/* Title - Larger */}
      <h3 className="text-[32px] md:text-[40px] font-semibold text-[#1D1D1F] mb-4 tracking-[-0.015em] leading-[1.1]">
        {title}
      </h3>
      
      {/* Definition - Larger */}
      <p className="text-[17px] text-[#86868B] leading-[1.47] mb-10 font-normal">
        {definition}
      </p>
      
      {/* Examples */}
      <div className="mb-10 pt-8 border-t border-[#D2D2D7]">
        <div className="text-[12px] font-medium tracking-[0.04em] text-[#86868B] mb-5">
          EJEMPLOS
        </div>
        <ul className="space-y-3">
          {examples.map((example, index) => (
            <li key={index} className="flex gap-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1D1D1F] flex-shrink-0 translate-y-[0.5em]"></span>
              <span className="text-[17px] text-[#1D1D1F] leading-[1.47] font-normal flex-1">{example}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Deliverable */}
      <div className="pt-8 border-t border-[#D2D2D7]">
        <div className="text-[12px] font-medium tracking-[0.04em] text-[#86868B] mb-4">
          ENTREGABLE
        </div>
        <p className="text-[17px] text-[#1D1D1F] font-medium leading-[1.47]">
          {deliverable}
        </p>
      </div>
    </div>
  );
};

export const Framework: React.FC = () => {
  const frameworks: FrameworkCardProps[] = [
    {
      number: '01',
      title: 'Diseñar',
      definition: 'Precisión · Arquitectura · Métrica',
      examples: [
        'Diseñamos sistemas intencionalmente antes de construir',
        'Cada capacidad tiene límites, interfaces y criterios de éxito definidos'
      ],
      deliverable: 'Arquitectura de Sistema y Mapas de Flujo',
    },
    {
      number: '02',
      title: 'Gobernar',
      definition: 'Seguridad · Responsabilidad · Ética',
      examples: [
        'No desplegamos poder sin control',
        'Cada sistema tiene propiedad, trazabilidad y límites éticos integrados'
      ],
      deliverable: 'Marco de Gobernanza y Protocolos de Control',
    },
    {
      number: '03',
      title: 'Elevar',
      definition: 'Rendimiento · Colaboración · Aprendizaje',
      examples: [
        'Elevamos el rendimiento mejorando cómo humanos y agentes trabajan juntos',
        'Aprendemos y mejoramos en cada ciclo'
      ],
      deliverable: 'Panel de Rendimiento y Reportes de Optimización',
    },
  ];

  return (
    <section id="methodology" className="relative bg-[#F5F5F7] py-32 md:py-40 lg:py-48">
      {/* Container */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header - Match hero sizing */}
        <div className="text-center mb-24 md:mb-28 lg:mb-32">
          <h2 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-semibold text-[#1D1D1F] mb-6 tracking-[-0.02em] leading-[1.05]">
            Valores Fundamentales
          </h2>
          <p className="text-[19px] md:text-[21px] lg:text-[24px] text-[#86868B] max-w-[640px] mx-auto leading-[1.35] font-normal">
            Mandamientos, no eslóganes
          </p>
        </div>

        {/* Cards Grid - More spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-24 md:mb-28 max-w-[1200px] mx-auto">
          {frameworks.map((framework, index) => (
            <FrameworkCard key={index} {...framework} />
          ))}
        </div>

        {/* Doctrine Footer */}
        <div className="text-center pt-16 border-t border-[#D2D2D7] max-w-[800px] mx-auto">
          <p className="text-[17px] text-[#86868B] leading-[1.47] font-normal">
            Diseñar con precisión. Gobernar con responsabilidad. Elevar el rendimiento.
          </p>
        </div>
      </div>
    </section>
  );
};
