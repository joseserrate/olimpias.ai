'use client';

import React, { useState, useMemo } from 'react';
import { Container, SectionHeader } from '@/components/ui';
import { CaseCard, CategoryFilter } from '@/components/casos';
import { getPublishedCases, CaseCategory } from '@/lib/mock-data/casos';

export default function CasosPage() {
  const [selectedCategory, setSelectedCategory] = useState<CaseCategory | 'all'>('all');
  const publishedCases = getPublishedCases();

  const filteredCases = useMemo(() => {
    if (selectedCategory === 'all') {
      return publishedCases;
    }
    return publishedCases.filter(c => c.category === selectedCategory);
  }, [selectedCategory, publishedCases]);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero section */}
      <section className="relative bg-white pt-32 pb-16 border-b border-slate-200/40">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[48px] sm:text-[56px] md:text-[64px] font-semibold leading-[1.05] tracking-[-0.025em] text-slate-900 mb-6">
              Biblioteca de Casos
            </h1>
            <p className="text-[18px] sm:text-[21px] text-slate-600 leading-[1.5] max-w-2xl mx-auto">
              Casos reales de implementación de inteligencia artificial empresarial en Bolivia. 
              Flujos, resultados medibles, y lecciones aprendidas.
            </p>
          </div>
        </Container>
      </section>

      {/* Filter section */}
      <section className="bg-white py-8 border-b border-slate-200/40">
        <Container>
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </Container>
      </section>

      {/* Cases grid */}
      <section className="bg-white py-16">
        <Container>
          {filteredCases.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">
                No se encontraron casos en esta categoría.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-sm text-slate-500">
                  {filteredCases.length} {filteredCases.length === 1 ? 'caso' : 'casos'} 
                  {selectedCategory !== 'all' && ' en esta categoría'}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCases.map((caseData) => (
                  <CaseCard key={caseData.id} case={caseData} />
                ))}
              </div>
            </>
          )}
        </Container>
      </section>

      {/* CTA section */}
      <section className="bg-slate-50/40 py-20 border-t border-slate-200/40">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">
              ¿Tienes un caso para compartir?
            </h2>
            <p className="text-[17px] text-slate-600 leading-[1.6] mb-8">
              Comparte tu experiencia y ayuda a otras organizaciones bolivianas a entender 
              cómo aplicar IA empresarial con resultados medibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/casos/nuevo"
                className="inline-flex items-center justify-center h-[50px] px-8 text-[15px] font-semibold text-white bg-[#5B3DF5] rounded-md hover:bg-[#4A2FD5] transition-colors"
              >
                Enviar caso
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center h-[50px] px-8 text-[15px] font-semibold text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-50 transition-colors"
              >
                Agendar consulta
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
