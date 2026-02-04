'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui';
import { getPublishedCases, categoryLabels } from '@/lib/mock-data/casos';

export default function CasosPage() {
  // TODO: Replace with Supabase query
  // const { data: cases } = await supabase.from('cases').select('*').eq('status', 'published')
  const cases = getPublishedCases();

  return (
    <main className="min-h-screen bg-white pt-32">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">
              Biblioteca de Casos
            </h1>
            <p className="text-slate-600">
              Casos reales de implementación de IA empresarial en Bolivia.
            </p>
          </div>

          <div className="mb-8">
            <Link
              href="/casos/nuevo"
              className="inline-block px-6 py-3 bg-[#5B3DF5] text-white rounded-md hover:bg-[#4A2FD5] transition-colors"
            >
              Crear caso
            </Link>
          </div>

          <div className="space-y-4">
            {cases.map((caso) => (
              <Link
                key={caso.id}
                href={`/casos/${caso.id}`}
                className="block border border-slate-200 rounded-lg p-6 hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      {caso.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-2">
                      {caso.summary}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span>{categoryLabels[caso.category]}</span>
                      <span>•</span>
                      <span>{new Date(caso.created_at).toLocaleDateString('es-BO')}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
