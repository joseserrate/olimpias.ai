import { AppleHero } from '@/components/sections';
import { Container } from '@/components/ui';

export default function Home() {
  return (
    <>
      <AppleHero />
      <section className="bg-white py-20">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">
              Explora casos reales de IA empresarial
            </h2>
            <p className="text-slate-600 mb-8">
              Implementaciones documentadas con flujos y resultados medibles.
            </p>
            <a
              href="/casos"
              className="inline-block px-8 py-3 bg-[#5B3DF5] text-white rounded-md hover:bg-[#4A2FD5] transition-colors"
            >
              Explorar Casos
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
