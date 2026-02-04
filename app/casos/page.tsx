'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { getPublishedCases, categoryLabels } from '@/lib/mock-data/casos';

export default function CasosPage() {
  // TODO: Replace with Supabase query
  // const { data: cases } = await supabase.from('cases').select('*').eq('status', 'published')
  const allCases = getPublishedCases();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCases = useMemo(() => {
    if (!searchQuery.trim()) return allCases;
    const query = searchQuery.toLowerCase();
    return allCases.filter(
      (c) =>
        c.title.toLowerCase().includes(query) ||
        c.summary.toLowerCase().includes(query)
    );
  }, [allCases, searchQuery]);

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Biblioteca de Casos
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Casos reales de implementación de IA empresarial en Bolivia.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto mb-6">
            <input
              type="text"
              placeholder="Buscar casos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B3DF5] focus:border-transparent"
            />
          </div>

          {/* Action Button */}
          <Link
            href="/casos/nuevo"
            className="inline-block px-8 py-3 bg-[#5B3DF5] text-white rounded-md hover:bg-[#4A2FD5] transition-colors font-medium"
          >
            Crear caso
          </Link>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((caso) => (
            <Link
              key={caso.id}
              href={`/casos/${caso.id}`}
              className="block rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
            >
              <div className="mb-3">
                <span className="text-xs font-medium text-[#5B3DF5] uppercase tracking-wide">
                  {categoryLabels[caso.category]}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {caso.title}
              </h3>
              <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                {caso.summary}
              </p>
              <div className="text-xs text-slate-500">
                {new Date(caso.created_at).toLocaleDateString('es-BO')}
              </div>
            </Link>
          ))}
        </div>

        {filteredCases.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">No se encontraron casos.</p>
          </div>
        )}
      </div>
    </main>
  );
}
