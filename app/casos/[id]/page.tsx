'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui';
import { CommentList, CommentForm } from '@/components/casos';
import { getCaseById, getCommentsByCase, categoryLabels } from '@/lib/mock-data/casos';

export default function CaseDetailPage() {
  const params = useParams();
  const caseId = params.id as string;
  const caseData = getCaseById(caseId);
  const [comments] = useState(() => getCommentsByCase(caseId));
  const [isAuthenticated] = useState(false); // Mock auth state

  if (!caseData) {
    return (
      <main className="min-h-screen bg-white pt-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center py-20">
            <h1 className="text-3xl font-semibold text-slate-900 mb-4">
              Caso no encontrado
            </h1>
            <p className="text-slate-600 mb-8">
              El caso que buscas no existe o ha sido removido.
            </p>
            <Link
              href="/casos"
              className="inline-flex items-center justify-center h-[50px] px-8 text-[15px] font-semibold text-white bg-[#5B3DF5] rounded-md hover:bg-[#4A2FD5] transition-colors"
            >
              Ver todos los casos
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header with back link */}
      <section className="bg-white pt-32 pb-8 border-b border-slate-200/40">
        <Container>
          <Link
            href="/casos"
            className="inline-flex items-center text-sm text-slate-500 hover:text-[#5B3DF5] transition-colors mb-8"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Volver a casos
          </Link>

          <div className="max-w-3xl">
            {/* Category */}
            <div className="text-[11px] font-medium tracking-[0.15em] text-slate-400 uppercase mb-4">
              {categoryLabels[caseData.category]}
            </div>

            {/* Title */}
            <h1 className="text-[40px] sm:text-[48px] font-semibold leading-[1.05] tracking-[-0.025em] text-slate-900 mb-6">
              {caseData.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span>Por {caseData.owner.display_name}</span>
              <span>·</span>
              <span>
                {new Date(caseData.created_at).toLocaleDateString('es-BO', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Summary */}
            <div>
              <p className="text-[21px] text-slate-700 leading-[1.6] font-medium">
                {caseData.summary}
              </p>
            </div>

            {/* Problem */}
            <div>
              <h2 className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-4">
                Problema
              </h2>
              <p className="text-[17px] text-slate-700 leading-[1.7]">
                {caseData.problem}
              </p>
            </div>

            {/* Current Flow */}
            <div>
              <h2 className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-4">
                Flujo Actual
              </h2>
              <p className="text-[17px] text-slate-700 leading-[1.7]">
                {caseData.current_flow}
              </p>
            </div>

            {/* Sources */}
            <div>
              <h2 className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-4">
                Fuentes de Datos
              </h2>
              <p className="text-[17px] text-slate-700 leading-[1.7]">
                {caseData.sources}
              </p>
            </div>

            {/* Desired Outcome */}
            <div>
              <h2 className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-4">
                Resultado Deseado
              </h2>
              <p className="text-[17px] text-slate-700 leading-[1.7]">
                {caseData.desired_outcome}
              </p>
            </div>

            {/* Constraints */}
            <div>
              <h2 className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-4">
                Restricciones y Consideraciones
              </h2>
              <p className="text-[17px] text-slate-700 leading-[1.7]">
                {caseData.constraints}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Comments section */}
      <section className="bg-slate-50/40 py-16 border-t border-slate-200/40">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-900 mb-8">
              Comentarios ({comments.length})
            </h2>

            {/* Comment form or login prompt */}
            {isAuthenticated ? (
              <div className="mb-12">
                <CommentForm caseId={caseId} />
              </div>
            ) : (
              <div className="mb-12 p-6 bg-white border border-slate-200 rounded-xl text-center">
                <p className="text-slate-600 mb-4">
                  Inicia sesión para comentar en este caso
                </p>
                <a
                  href="/login"
                  className="inline-flex items-center justify-center h-[44px] px-6 text-[14px] font-semibold text-white bg-[#5B3DF5] rounded-md hover:bg-[#4A2FD5] transition-colors"
                >
                  Iniciar sesión
                </a>
              </div>
            )}

            {/* Comments list */}
            <CommentList comments={comments} />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 border-t border-slate-200/40">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">
              ¿Listo para implementar?
            </h2>
            <p className="text-[17px] text-slate-600 leading-[1.6] mb-8">
              Agenda una consulta para discutir cómo podemos ayudarte a implementar 
              un sistema similar en tu organización.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-[50px] px-8 text-[15px] font-semibold text-white bg-[#5B3DF5] rounded-md hover:bg-[#4A2FD5] transition-colors"
            >
              Agendar consulta
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
