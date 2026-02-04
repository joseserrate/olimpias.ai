import { AppleHero } from '@/components/sections';
import { getFeaturedCases, categoryLabels } from '@/lib/mock-data/casos';
import Link from 'next/link';

export default function Home() {
  const featuredCases = getFeaturedCases().slice(0, 6);

  return (
    <>
      <AppleHero />
      
      {/* Casos Preview Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Casos Reales de IA Empresarial
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Implementaciones documentadas con flujos, resultados medibles y lecciones aprendidas.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/casos"
                className="px-8 py-3 bg-[#5B3DF5] text-white rounded-md hover:bg-[#4A2FD5] transition-colors font-medium"
              >
                Ver Biblioteca
              </Link>
              <Link
                href="/casos/nuevo"
                className="px-8 py-3 border border-slate-300 text-slate-700 rounded-md hover:bg-slate-50 transition-colors font-medium"
              >
                Crear Caso
              </Link>
            </div>
          </div>

          {/* Case Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredCases.map((caso) => (
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
                <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2">
                  {caso.title}
                </h3>
                <p className="text-sm text-slate-600 line-clamp-3">
                  {caso.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
