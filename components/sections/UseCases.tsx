'use client';

import React from 'react';
import Link from 'next/link';
import { ResponsiveSection as Section, SectionHeader } from '@/components/ui';
import { CaseCard } from '@/components/casos';
import { getFeaturedCases } from '@/lib/mock-data/casos';

export const UseCases: React.FC = () => {
  const featuredCases = getFeaturedCases().slice(0, 6); // Top 6 featured cases

  return (
    <Section id="use-cases" background="white" divider>
      <SectionHeader 
        headline="Casos Destacados"
        subheadline="Implementaciones reales de IA empresarial en Bolivia. Flujos documentados, resultados medibles, y lecciones aprendidas."
      />

      {/* Featured cases grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {featuredCases.map((caseData) => (
          <CaseCard key={caseData.id} case={caseData} />
        ))}
      </div>

      {/* CTA to full library */}
      <div className="text-center pt-4">
        <Link
          href="/casos"
          className="inline-flex items-center justify-center h-[50px] px-8 text-[15px] font-semibold text-white bg-[#5B3DF5] rounded-md hover:bg-[#4A2FD5] transition-colors"
        >
          Ver la biblioteca completa
        </Link>
      </div>
    </Section>
  );
};
