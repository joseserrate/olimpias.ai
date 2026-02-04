'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getCaseById, categoryLabels } from '@/lib/mock-data/casos';

export default function CaseDetailPage() {
  const params = useParams();
  const caseId = params.id as string;
  
  // TODO: Replace with Supabase query
  // const { data: caseData } = await supabase.from('cases').select('*').eq('id', caseId).single()
  const caseData = getCaseById(caseId);

  if (!caseData) {
    return (
      <main className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-2xl font-semibold text-slate-900 mb-4">
            Caso no encontrado
          </h1>
          <Link href="/casos" className="text-[#5B3DF5] hover:underline">
            ← Volver a casos
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/casos" className="text-sm text-slate-500 hover:text-[#5B3DF5] mb-6 inline-block">
          ← Volver
        </Link>

        {/* Header */}
        <div className="mb-10">
          <span className="text-xs text-slate-500 uppercase tracking-wide">
            {categoryLabels[caseData.category]}
          </span>
          <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-3">
            {caseData.title}
          </h1>
          <p className="text-sm text-slate-500 mb-6">
            {new Date(caseData.created_at).toLocaleDateString('es-BO')} • {caseData.owner.display_name}
          </p>
          
          {/* Action buttons */}
          <div className="flex gap-3">
            <button 
              onClick={() => alert('TODO: Edit with Supabase')}
              className="px-4 py-2 text-sm border border-slate-300 rounded-md hover:bg-slate-50 transition-colors"
            >
              Editar
            </button>
            <button 
              onClick={() => alert('TODO: Delete with Supabase')}
              className="px-4 py-2 text-sm text-red-600 border border-red-200 rounded-md hover:bg-red-50 transition-colors"
            >
              Eliminar
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Resumen</h2>
            <p className="text-slate-700 leading-relaxed">{caseData.summary}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Problema</h2>
            <p className="text-slate-700 leading-relaxed">{caseData.problem}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Enfoque</h2>
            <p className="text-slate-700 leading-relaxed">{caseData.current_flow}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Resultado</h2>
            <p className="text-slate-700 leading-relaxed">{caseData.desired_outcome}</p>
          </div>
        </div>

        {/* Comments section */}
        <div className="mt-16 pt-8 border-t">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Comentarios</h2>
          
          {/* TODO: Replace with Supabase comments query */}
          {/* const { data: comments } = await supabase.from('comments').select('*').eq('case_id', caseId) */}
          
          <div className="mb-6">
            <textarea
              placeholder="Escribe un comentario..."
              rows={4}
              className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B3DF5] focus:border-transparent"
            />
            <button 
              onClick={() => alert('TODO: Submit comment with Supabase')}
              className="mt-3 px-6 py-2 bg-[#5B3DF5] text-white rounded-md hover:bg-[#4A2FD5] transition-colors font-medium"
            >
              Comentar
            </button>
          </div>

          <p className="text-sm text-slate-500 italic">
            Sistema de comentarios se integrará con Supabase próximamente.
          </p>
        </div>
      </div>
    </main>
  );
}
