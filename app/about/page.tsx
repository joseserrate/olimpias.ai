import type { Metadata } from 'next';
import { Container, Section } from '@/components/ui';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Olimpias AI, our methodology, and our commitment to responsible AI systems architecture.',
};

export default function AboutPage() {
  return (
    <>
      <Section className="bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Olimpias AI
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              The center for Enterprise AI and AI system architecture in Bolivia and the region.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We design and govern AI systems that turn complexity into capability. 
                Our focus is on delivering measurable performance through disciplined 
                architecture and responsible governance.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience & Credentials</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Built on Global-Scale Systems Experience
                  </h3>
                  <p className="text-gray-700">
                    Our foundation includes experience with enterprise systems at scale, 
                    including work with global technology leaders in business solutions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Academic & Professional Training
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Finance and Digital Media background</li>
                    <li>Master of Science in Technology Commercialization (MSTC)</li>
                    <li>Harvard Agentic AI Intensive</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Work</h2>
              <div className="space-y-4">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Measured Outcomes
                  </h3>
                  <p className="text-gray-700">
                    Every system we build is designed with clear success metrics and 
                    continuous performance monitoring.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Disciplined Architecture
                  </h3>
                  <p className="text-gray-700">
                    We follow rigorous system design principles, ensuring scalability, 
                    maintainability, and operational excellence.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Responsible Governance
                  </h3>
                  <p className="text-gray-700">
                    Safety, boundaries, and responsible AI adoption are built into every 
                    system from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
