import React from 'react';
import { Section, Container, SectionHeader, Card, BulletList } from '@/components/ui';

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
    <Section spacing="large">
      <Container size="narrow">
        <SectionHeader 
          headline="Fundamentos Institucionales"
          subheadline="Experiencia global aplicada a empresa boliviana."
        />

        {/* Two-Column Layout - Mobile: 1col, Desktop: 2col */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Narrative */}
          <div className="flex flex-col justify-center">
            <h3 className="text-[24px] md:text-[28px] font-semibold text-[#1D1D1F] mb-4 tracking-[-0.015em] leading-[1.2]">
              De Sistemas Globales a Empresa Boliviana
            </h3>
            <p className="text-[16px] text-[#1D1D1F]/70 leading-[1.6] mb-8 font-normal max-w-prose">
              Traemos arquitectura de sistemas de IA de nivel empresarial a Bolivia y la región.
            </p>
            
            {/* Key Points - Using BulletList */}
            <BulletList items={keyPoints} variant="primary" />
          </div>

          {/* Right Column - Credentials Card */}
          <Card hover={false}>
            {/* Experience */}
            <div className="mb-8">
              <h4 className="text-[11px] font-medium tracking-[0.08em] text-[#86868B] uppercase mb-5">
                Experiencia
              </h4>
              <BulletList items={experience} size="sm" />
            </div>

            {/* Education */}
            <div className="mb-8 pt-8 border-t border-[#E0E0E6]">
              <h4 className="text-[11px] font-medium tracking-[0.08em] text-[#86868B] uppercase mb-5">
                Formación
              </h4>
              <BulletList items={education} size="sm" />
            </div>

            {/* Commitments */}
            <div className="pt-8 border-t border-[#E0E0E6]">
              <h4 className="text-[11px] font-medium tracking-[0.08em] text-[#86868B] uppercase mb-5">
                Compromisos
              </h4>
              <BulletList items={commitments} variant="primary" size="sm" />
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
};
