'use client';

import Link from 'next/link';
import { getPublishedCases, categoryLabels } from '@/lib/mock-data/casos';

export default function CasosPage() {
  // TODO: Replace with Supabase query
  // const { data: cases } = await supabase.from('cases').select('*').eq('status', 'published')
  const cases = getPublishedCases();

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            Biblioteca de Casos
          </h1>
          <p className="text-slate-600 mb-6">
            Casos reales de implementación de IA empresarial en Bolivia.
          </p>
          
          <div className="flex gap-3">
            <Link
              href="/casos/nuevo"
              className="px-6 py-2 bg-[#5B3DF5] text-white rounded-md hover:bg-[#4A2FD5] transition-colors font-medium"
            >
              Crear caso
            </Link>
            <Link
              href="/login"
              className="px-6 py-2 border border-slate-300 rounded-md hover:bg-slate-50 transition-colors font-medium"
            >
              Iniciar sesión
            </Link>
          </div>
        </div>

        {/* Cases list */}
        <div className="space-y-4">
          {cases.map((caso) => (
            <Link
              key={caso.id}
              href={`/casos/${caso.id}`}
              className="block border border-slate-200 rounded-lg p-6 hover:border-slate-300 hover:shadow-sm transition-all"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {caso.title}
              </h3>
              <p className="text-sm text-slate-600 mb-3">
                {caso.summary}
              </p>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span>{categoryLabels[caso.category]}</span>
                <span>•</span>
                <span>{new Date(caso.created_at).toLocaleDateString('es-BO')}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
