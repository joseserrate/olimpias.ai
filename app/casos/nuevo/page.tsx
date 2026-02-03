'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui';
import { CaseCategory, CaseSensitivity, categoryLabels } from '@/lib/mock-data/casos';

export default function NewCasePage() {
  const router = useRouter();
  const [isAuthenticated] = useState(false); // Mock auth state - will be real later
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'exportacion' as CaseCategory,
    summary: '',
    problem: '',
    current_flow: '',
    sources: '',
    desired_outcome: '',
    constraints: '',
    sensitivity: 'publicable' as CaseSensitivity
  });

  // Mock auth check - redirect to login if not authenticated
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-white pt-32">
        <Container>
          <div className="max-w-2xl mx-auto text-center py-20">
            <h1 className="text-3xl font-semibold text-slate-900 mb-4">
              Acceso restringido
            </h1>
            <p className="text-slate-600 mb-8">
              Debes iniciar sesión para enviar un caso.
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission - replace with real Supabase call later
    console.log('Submitting case:', formData);

    // Simulate API delay
    setTimeout(() => {
      alert('Caso guardado como borrador (mock)');
      router.push('/panel');
    }, 500);
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-white pt-32 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <Link
                href="/panel"
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
                Volver al panel
              </Link>

              <h1 className="text-[40px] sm:text-[48px] font-semibold leading-[1.05] tracking-[-0.025em] text-slate-900 mb-4">
                Enviar nuevo caso
              </h1>
              <p className="text-[17px] text-slate-600 leading-[1.6]">
                Comparte tu experiencia con IA empresarial. Tu caso será revisado antes de publicarse.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-2">
                  Título del caso *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="Ej: Asistente RAG de Normativa de Exportación"
                  className="w-full px-4 py-3 text-[15px] text-slate-900 placeholder-slate-400 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B3DF5]/20 focus:border-[#5B3DF5] transition-colors"
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-2">
                  Categoría *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-[15px] text-slate-900 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B3DF5]/20 focus:border-[#5B3DF5] transition-colors"
                >
                  {Object.entries(categoryLabels).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Summary */}
              <div>
                <label htmlFor="summary" className="block text-sm font-medium text-slate-700 mb-2">
                  Resumen (1-2 líneas) *
                </label>
                <textarea
                  id="summary"
                  name="summary"
                  value={formData.summary}
                  onChange={handleChange}
                  required
                  rows={2}
                  placeholder="Descripción breve del caso y su resultado"
                  className="w-full px-4 py-3 text-[15px] text-slate-900 placeholder-slate-400 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B3DF5]/20 focus:border-[#5B3DF5] transition-colors resize-none"
                />
              </div>

              {/* Problem */}
              <div>
                <label htmlFor="problem" className="block text-sm font-medium text-slate-700 mb-2">
                  Problema *
                </label>
                <textarea
                  id="problem"
                  name="problem"
                  value={formData.problem}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="¿Qué problema específico enfrentaban? Incluye métricas si es posible (tiempo, costo, errores)"
                  className="w-full px-4 py-3 text-[15px] text-slate-900 placeholder-slate-400 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B3DF5]/20 focus:border-[#5B3DF5] transition-colors resize-none"
                />
              </div>

              {/* Current Flow */}
              <div>
                <label htmlFor="current_flow" className="block text-sm font-medium text-slate-700 mb-2">
                  Flujo actual *
                </label>
                <textarea
                  id="current_flow"
                  name="current_flow"
                  value={formData.current_flow}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="¿Cómo se maneja actualmente el proceso? Describe los pasos y herramientas"
                  className="w-full px-4 py-3 text-[15px] text-slate-900 placeholder-slate-400 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B3DF5]/20 focus:border-[#5B3DF5] transition-colors resize-none"
                />
              </div>

              {/* Sources */}
              <div>
                <label htmlFor="sources" className="block text-sm font-medium text-slate-700 mb-2">
                  Fuentes de datos *
                </label>
                <textarea
                  id="sources"
                  name="sources"
                  value={formData.sources}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="¿Qué fuentes de información se utilizarían? (PDFs, emails, sistemas, etc.)"
                  className="w-full px-4 py-3 text-[15px] text-slate-900 placeholder-slate-400 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B3DF5]/20 focus:border-[#5B3DF5] transition-colors resize-none"
                />
              </div>

              {/* Desired Outcome */}
              <div>
                <label htmlFor="desired_outcome" className="block text-sm font-medium text-slate-700 mb-2">
                  Resultado deseado *
                </label>
                <textarea
                  id="desired_outcome"
                  name="desired_outcome"
                  value={formData.desired_outcome}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="¿Qué resultado esperas? Incluye métricas de éxito (tiempo, precisión, etc.)"
                  className="w-full px-4 py-3 text-[15px] text-slate-900 placeholder-slate-400 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B3DF5]/20 focus:border-[#5B3DF5] transition-colors resize-none"
                />
              </div>

              {/* Constraints */}
              <div>
                <label htmlFor="constraints" className="block text-sm font-medium text-slate-700 mb-2">
                  Restricciones y consideraciones *
                </label>
                <textarea
                  id="constraints"
                  name="constraints"
                  value={formData.constraints}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Limitaciones técnicas, requisitos de seguridad, cumplimiento, etc."
                  className="w-full px-4 py-3 text-[15px] text-slate-900 placeholder-slate-400 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B3DF5]/20 focus:border-[#5B3DF5] transition-colors resize-none"
                />
              </div>

              {/* Sensitivity */}
              <div>
                <label htmlFor="sensitivity" className="block text-sm font-medium text-slate-700 mb-2">
                  Sensibilidad *
                </label>
                <select
                  id="sensitivity"
                  name="sensitivity"
                  value={formData.sensitivity}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-[15px] text-slate-900 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B3DF5]/20 focus:border-[#5B3DF5] transition-colors"
                >
                  <option value="publicable">Publicable (sin modificaciones)</option>
                  <option value="anonimizado">Anonimizado (sin nombres/datos sensibles)</option>
                  <option value="privado">Privado (solo interno)</option>
                </select>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 h-[50px] px-8 text-[15px] font-semibold text-white bg-[#5B3DF5] rounded-md hover:bg-[#4A2FD5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Guardando...' : 'Guardar borrador'}
                </button>
                <Link
                  href="/panel"
                  className="flex-1 h-[50px] px-8 text-[15px] font-semibold text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-50 transition-colors flex items-center justify-center"
                >
                  Cancelar
                </Link>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </main>
  );
}
