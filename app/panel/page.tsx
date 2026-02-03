'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui';
import { StatusBadge } from '@/components/casos';
import { getUserCases, categoryLabels } from '@/lib/mock-data/casos';

export default function PanelPage() {
  const [isAuthenticated] = useState(false); // Mock auth state
  const mockUserId = 'user-1';
  const userCases = getUserCases(mockUserId);

  // Mock auth check
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-white pt-32">
        <Container>
          <div className="max-w-2xl mx-auto text-center py-20">
            <h1 className="text-3xl font-semibold text-slate-900 mb-4">
              Acceso restringido
            </h1>
            <p className="text-slate-600 mb-8">
              Debes iniciar sesión para acceder a tu panel.
            </p>
            <a
              href="/login"
              className="inline-flex items-center justify-center h-[50px] px-8 text-[15px] font-semibold text-white bg-[#5B3DF5] rounded-md hover:bg-[#4A2FD5] transition-colors"
            >
              Iniciar sesión
            </a>
          </div>
        </Container>
      </main>
    );
  }

  const handleDelete = (id: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar este caso?')) {
      console.log('Deleting case:', id);
      alert('Caso eliminado (mock)');
    }
  };

  const handleSubmit = (id: string) => {
    if (confirm('¿Enviar este caso para revisión?')) {
      console.log('Submitting case:', id);
      alert('Caso enviado para revisión (mock)');
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-white pt-32 pb-16">
        <Container>
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-[40px] sm:text-[48px] font-semibold leading-[1.05] tracking-[-0.025em] text-slate-900 mb-4">
                Mi panel
              </h1>
              <p className="text-[17px] text-slate-600 leading-[1.6]">
                Administra tus casos enviados. Los borradores solo son visibles para ti.
              </p>
            </div>

            {/* Actions */}
            <div className="mb-8">
              <Link
                href="/casos/nuevo"
                className="inline-flex items-center justify-center h-[50px] px-8 text-[15px] font-semibold text-white bg-[#5B3DF5] rounded-md hover:bg-[#4A2FD5] transition-colors"
              >
                + Nuevo caso
              </Link>
            </div>

            {/* Cases list */}
            {userCases.length === 0 ? (
              <div className="text-center py-20 border border-slate-200 rounded-xl">
                <p className="text-slate-500 text-lg mb-6">
                  No tienes casos aún
                </p>
                <Link
                  href="/casos/nuevo"
                  className="inline-flex items-center justify-center h-[44px] px-6 text-[14px] font-semibold text-white bg-[#5B3DF5] rounded-md hover:bg-[#4A2FD5] transition-colors"
                >
                  Crear tu primer caso
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {userCases.map((caseData) => (
                  <div
                    key={caseData.id}
                    className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1 min-w-0">
                        {/* Category & Status */}
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-[11px] font-medium tracking-[0.15em] text-slate-400 uppercase">
                            {categoryLabels[caseData.category]}
                          </span>
                          <StatusBadge status={caseData.status} />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                          {caseData.title}
                        </h3>

                        {/* Summary */}
                        <p className="text-[15px] text-slate-600 leading-[1.6] mb-3">
                          {caseData.summary}
                        </p>

                        {/* Meta */}
                        <p className="text-xs text-slate-400">
                          Creado{' '}
                          {new Date(caseData.created_at).toLocaleDateString('es-BO', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col gap-2 flex-shrink-0">
                        {caseData.status === 'published' ? (
                          <Link
                            href={`/casos/${caseData.id}`}
                            className="px-4 py-2 text-sm font-medium text-[#5B3DF5] hover:bg-[#5B3DF5]/5 rounded-lg transition-colors"
                          >
                            Ver
                          </Link>
                        ) : (
                          <>
                            <Link
                              href={`/casos/${caseData.id}/editar`}
                              className="px-4 py-2 text-sm font-medium text-[#5B3DF5] hover:bg-[#5B3DF5]/5 rounded-lg transition-colors"
                            >
                              Editar
                            </Link>
                            {caseData.status === 'draft' && (
                              <button
                                onClick={() => handleSubmit(caseData.id)}
                                className="px-4 py-2 text-sm font-medium text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                              >
                                Enviar
                              </button>
                            )}
                            <button
                              onClick={() => handleDelete(caseData.id)}
                              className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              Eliminar
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </section>
    </main>
  );
}
