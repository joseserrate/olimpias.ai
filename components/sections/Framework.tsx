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
    <div className="group relative bg-white rounded-[24px] p-14 md:p-16 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
      {/* Eyebrow number */}
      <div className="text-[14px] font-semibold tracking-[0.02em] text-[#86868B] mb-10">
        {number}
      </div>
      
      {/* Title - Much larger, Stripe-style */}
      <h3 className="text-[36px] md:text-[48px] font-semibold text-[#1D1D1F] mb-5 tracking-[-0.02em] leading-[1.08]">
        {title}
      </h3>
      
      {/* Definition - Larger */}
      <p className="text-[19px] text-[#86868B] leading-[1.4] mb-12 font-normal">
        {definition}
      </p>
      
      {/* Examples */}
      <div className="mb-12 pt-10 border-t border-[#D2D2D7]">
        <div className="text-[13px] font-semibold tracking-[0.04em] text-[#86868B] mb-6">
          EJEMPLOS
        </div>
        <ul className="space-y-4">
          {examples.map((example, index) => (
            <li key={index} className="flex gap-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1D1D1F] flex-shrink-0 translate-y-[0.5em]"></span>
              <span className="text-[19px] text-[#1D1D1F] leading-[1.4] font-normal flex-1">{example}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Deliverable */}
      <div className="pt-10 border-t border-[#D2D2D7]">
        <div className="text-[13px] font-semibold tracking-[0.04em] text-[#86868B] mb-5">
          ENTREGABLE
        </div>
        <p className="text-[19px] text-[#1D1D1F] font-semibold leading-[1.4]">
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
    <section id="methodology" className="relative bg-white py-40 md:py-48 lg:py-56">
      {/* Container */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header - Stripe-style: massive and bold */}
        <div className="text-center mb-32 md:mb-40">
          <h2 className="text-[48px] sm:text-[56px] md:text-[72px] lg:text-[80px] font-semibold text-[#1D1D1F] mb-8 tracking-[-0.025em] leading-[1.05]">
            Valores Fundamentales
          </h2>
          <p className="text-[21px] md:text-[24px] lg:text-[28px] text-[#86868B] max-w-[720px] mx-auto leading-[1.3] font-normal">
            Mandamientos, no eslóganes
          </p>
        </div>

        {/* Cards Grid - More spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16 mb-32 max-w-[1300px] mx-auto">
          {frameworks.map((framework, index) => (
            <FrameworkCard key={index} {...framework} />
          ))}
        </div>

        {/* Doctrine Footer */}
        <div className="text-center pt-20 border-t border-[#D2D2D7] max-w-[900px] mx-auto">
          <p className="text-[19px] text-[#86868B] leading-[1.4] font-normal">
            Diseñar con precisión. Gobernar con responsabilidad. Elevar el rendimiento.
          </p>
        </div>
      </div>
    </section>
  );
};
