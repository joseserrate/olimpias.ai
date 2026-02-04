'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui';
import { CaseCategory, categoryLabels } from '@/lib/mock-data/casos';

export default function NewCasePage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'exportacion' as CaseCategory,
    summary: '',
    body: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with Supabase insert
    // const { data, error } = await supabase.from('cases').insert([{
    //   title: formData.title,
    //   category: formData.category,
    //   summary: formData.summary,
    //   body: formData.body,
    //   owner_id: user.id,
    //   status: 'draft'
    // }])
    
    console.log('Submitting case:', formData);

    setTimeout(() => {
      alert('Caso guardado (mock)');
      router.push('/casos');
    }, 500);
  };

  return (
    <main className="min-h-screen bg-white pt-32">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Link
              href="/casos"
              className="text-sm text-slate-500 hover:text-[#5B3DF5] mb-4 inline-block"
            >
              ← Volver
            </Link>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Crear nuevo caso
            </h1>
            <p className="text-slate-600">
              Comparte tu experiencia con IA empresarial.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-2">
                Título *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B3DF5] focus:border-transparent"
              />
            </div>

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
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B3DF5] focus:border-transparent"
              >
                {Object.entries(categoryLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="summary" className="block text-sm font-medium text-slate-700 mb-2">
                Resumen *
              </label>
              <textarea
                id="summary"
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B3DF5] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="body" className="block text-sm font-medium text-slate-700 mb-2">
                Descripción completa *
              </label>
              <textarea
                id="body"
                name="body"
                value={formData.body}
                onChange={handleChange}
                required
                rows={8}
                placeholder="Describe el problema, enfoque, y resultados..."
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B3DF5] focus:border-transparent"
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-[#5B3DF5] text-white rounded-md hover:bg-[#4A2FD5] transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Guardando...' : 'Crear caso'}
              </button>
              <Link
                href="/casos"
                className="px-6 py-3 border border-slate-300 rounded-md hover:bg-slate-50 transition-colors"
              >
                Cancelar
              </Link>
            </div>
          </form>
        </div>
      </Container>
    </main>
  );
}
