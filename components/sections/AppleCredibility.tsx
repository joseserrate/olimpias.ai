import React from 'react';
import { Section, SectionHeader, Card, BulletList } from '@/components/ui';

export const AppleCredibility: React.FC = () => {
  const keyPoints = [
    'Diseñado para rendimiento medible',
    'Gobernado para adopción responsable',
    'Optimizado para mejora continua'
  ];

  const experience = [
    'Sistemas de escala global en Apple Business Solutions',
    'Arquitectura empresarial y diseño de sistemas'
  ];

  const education = [
    'Maestría en Comercialización de Tecnología, UT Austin',
    'Programa Intensivo en IA Agéntica, Harvard',
    'Finanzas y Medios Digitales'
  ];

  const commitments = [
    'Resultados medibles',
    'Arquitectura disciplinada',
    'Gobernanza responsable'
  ];

  return (
    <Section background="white">
      <SectionHeader 
        headline="Fundamentos Institucionales"
        subheadline="Experiencia global aplicada a empresa boliviana."
      />

      {/* Two-column layout with DRAMATIC gap for breathing room */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Column - Narrative */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4 tracking-tight leading-tight">
            De Sistemas Globales a Empresa Boliviana
          </h3>
          <p className="text-slate-600 leading-relaxed mb-8 max-w-prose">
            Traemos arquitectura de sistemas de IA de nivel empresarial a Bolivia y la región.
          </p>
          
          {/* Key Points - Using unified BulletList */}
          <BulletList items={keyPoints} />
        </div>

        {/* Right Column - Credentials Card */}
        <Card hover={false}>
          {/* Experience */}
          <div className="mb-8">
            <h4 className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-4">
              Experiencia
            </h4>
            <BulletList items={experience} />
          </div>

          {/* Education */}
          <div className="mb-8 pt-8 border-t border-slate-200/60">
            <h4 className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-4">
              Formación
            </h4>
            <BulletList items={education} />
          </div>

          {/* Commitments */}
          <div className="pt-8 border-t border-slate-200/60">
            <h4 className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-4">
              Compromisos
            </h4>
            <BulletList items={commitments} />
          </div>
        </Card>
      </div>
    </Section>
  );
};
