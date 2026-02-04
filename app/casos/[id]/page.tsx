'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui';
import { getCaseById, categoryLabels } from '@/lib/mock-data/casos';

export default function CaseDetailPage() {
  const params = useParams();
  const caseId = params.id as string;
  
  // TODO: Replace with Supabase query
  // const { data: caseData } = await supabase.from('cases').select('*').eq('id', caseId).single()
  const caseData = getCaseById(caseId);

  if (!caseData) {
    return (
      <main className="min-h-screen bg-white pt-32">
        <Container>
          <div className="max-w-2xl mx-auto text-center py-20">
            <h1 className="text-2xl font-semibold text-slate-900 mb-4">
              Caso no encontrado
            </h1>
            <Link href="/casos" className="text-[#5B3DF5] hover:underline">
              ← Volver a casos
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white pt-32">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Link
            href="/casos"
            className="text-sm text-slate-500 hover:text-[#5B3DF5] mb-4 inline-block"
          >
            ← Volver
          </Link>

          <div className="mb-8">
            <span className="text-xs text-slate-500 uppercase tracking-wide">
              {categoryLabels[caseData.category]}
            </span>
            <h1 className="text-3xl font-bold text-slate-900 mt-2 mb-2">
              {caseData.title}
            </h1>
            <p className="text-sm text-slate-500">
              {new Date(caseData.created_at).toLocaleDateString('es-BO')} • {caseData.owner.display_name}
            </p>
          </div>

          <div className="prose prose-slate max-w-none mb-12">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Resumen</h2>
            <p className="text-slate-700 leading-relaxed mb-6">{caseData.summary}</p>

            <h2 className="text-xl font-semibold text-slate-900 mb-3">Problema</h2>
            <p className="text-slate-700 leading-relaxed mb-6">{caseData.problem}</p>

            <h2 className="text-xl font-semibold text-slate-900 mb-3">Enfoque</h2>
            <p className="text-slate-700 leading-relaxed mb-6">{caseData.current_flow}</p>

            <h2 className="text-xl font-semibold text-slate-900 mb-3">Resultado</h2>
            <p className="text-slate-700 leading-relaxed">{caseData.desired_outcome}</p>
          </div>

          {/* Comments section */}
          <div className="border-t pt-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Comentarios</h2>
            
            {/* TODO: Replace with Supabase comments query */}
            {/* const { data: comments } = await supabase.from('comments').select('*').eq('case_id', caseId) */}
            
            <div className="mb-6 p-6 bg-slate-50 border border-slate-200 rounded-md text-center">
              <p className="text-slate-600 text-sm">
                Inicia sesión para comentar. Los comentarios se integrarán con Supabase próximamente.
              </p>
              <Link
                href="/login"
                className="inline-block mt-3 px-4 py-2 bg-[#5B3DF5] text-white text-sm rounded-md hover:bg-[#4A2FD5]"
              >
                Iniciar sesión
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
