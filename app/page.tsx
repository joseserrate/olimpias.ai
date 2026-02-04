import { AppleHero } from '@/components/sections';

export default function Home() {
  return (
    <>
      <AppleHero />
      
      {/* Simple section pointing to biblioteca */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">
            Explora casos reales de IA empresarial
          </h2>
          <p className="text-slate-600 mb-8">
            Implementaciones documentadas con flujos y resultados medibles.
          </p>
          <a
            href="/casos"
            className="inline-block px-8 py-3 bg-[#5B3DF5] text-white rounded-md hover:bg-[#4A2FD5] transition-colors font-medium"
          >
            Ver casos
          </a>
        </div>
      </section>
    </>
  );
}
