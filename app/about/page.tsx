import type { Metadata } from 'next';
import { AppleButton } from '@/components/ui';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Olimpias AI, our methodology, and our commitment to responsible AI systems architecture.',
};

export default function AppleAboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="apple-container px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-[48px] md:text-[64px] font-semibold text-[#0B0B0D] mb-8 leading-[1.05] tracking-tight">
              About Olimpias AI
            </h1>
            <p className="text-[21px] md:text-[24px] text-[#4A4A50] leading-[1.4] max-w-3xl mx-auto">
              Enterprise AI architecture for Bolivia and the region
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative bg-[#FAFAFA] py-28 md:py-36">
        <div className="apple-container px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
              {/* Left: Mission */}
              <div>
                <h2 className="text-[36px] md:text-[44px] font-semibold text-[#0B0B0D] mb-8 tracking-tight leading-[1.1]">
                  Our Mission
                </h2>
                <p className="text-[19px] text-[#4A4A50] leading-[1.7] mb-6">
                  We design and govern AI systems that turn complexity into capability.
                </p>
                <p className="text-[17px] text-[#7A7A82] leading-[1.7]">
                  Our focus is on delivering measurable performance through disciplined 
                  architecture and responsible governance. Every system we build is designed 
                  to integrate seamlessly into existing operations while maintaining the 
                  highest standards of reliability and control.
                </p>
              </div>

              {/* Right: Visual Element */}
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  {/* Subtle Grid Pattern */}
                  <svg className="w-full h-full opacity-20" viewBox="0 0 400 400">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0B0B0D" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="400" height="400" fill="url(#grid)" />
                    <circle cx="200" cy="200" r="120" fill="none" stroke="#0B0B0D" strokeWidth="1" opacity="0.3"/>
                    <circle cx="200" cy="200" r="80" fill="none" stroke="#0B0B0D" strokeWidth="1" opacity="0.5"/>
                    <circle cx="200" cy="200" r="40" fill="none" stroke="#0B0B0D" strokeWidth="1.5" opacity="0.7"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative bg-white py-28 md:py-36">
        <div className="apple-container px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[36px] md:text-[44px] font-semibold text-[#0B0B0D] mb-16 text-center tracking-tight leading-[1.1]">
              Built on Rigorous Foundations
            </h2>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
              {/* Experience */}
              <div className="space-y-12">
                <div>
                  <h3 className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#7A7A82] mb-6">
                    Experience
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[20px] font-semibold text-[#0B0B0D] mb-3 tracking-tight">
                        Global-Scale Systems
                      </h4>
                      <p className="text-[17px] text-[#4A4A50] leading-[1.65]">
                        Enterprise systems experience at Apple Business Solutions, 
                        working with Fortune 500 companies on large-scale deployments.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[20px] font-semibold text-[#0B0B0D] mb-3 tracking-tight">
                        Architecture & Design
                      </h4>
                      <p className="text-[17px] text-[#4A4A50] leading-[1.65]">
                        Deep expertise in system architecture, workflow automation, 
                        and performance optimization at scale.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h3 className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#7A7A82] mb-6">
                    Education
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="mr-4 mt-2 w-1.5 h-1.5 rounded-full bg-[#0B0B0D] flex-shrink-0 opacity-40"></span>
                      <span className="text-[17px] text-[#4A4A50] leading-[1.65]">
                        Master of Science in Technology Commercialization, UT Austin
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-4 mt-2 w-1.5 h-1.5 rounded-full bg-[#0B0B0D] flex-shrink-0 opacity-40"></span>
                      <span className="text-[17px] text-[#4A4A50] leading-[1.65]">
                        Harvard Agentic AI Intensive Program
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-4 mt-2 w-1.5 h-1.5 rounded-full bg-[#0B0B0D] flex-shrink-0 opacity-40"></span>
                      <span className="text-[17px] text-[#4A4A50] leading-[1.65]">
                        Finance and Digital Media
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Commitments */}
              <div>
                <h3 className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#7A7A82] mb-6">
                  Our Commitments
                </h3>
                <div className="space-y-8">
                  <div className="p-8 bg-white/80 backdrop-blur-xl rounded-2xl border border-[#E6E6EA]/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
                    <h4 className="text-[20px] font-semibold text-[#0B0B0D] mb-3 tracking-tight">
                      Measured Outcomes
                    </h4>
                    <p className="text-[17px] text-[#4A4A50] leading-[1.65]">
                      Every system is designed with clear success metrics and 
                      continuous performance monitoring.
                    </p>
                  </div>
                  <div className="p-8 bg-white/80 backdrop-blur-xl rounded-2xl border border-[#E6E6EA]/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
                    <h4 className="text-[20px] font-semibold text-[#0B0B0D] mb-3 tracking-tight">
                      Disciplined Architecture
                    </h4>
                    <p className="text-[17px] text-[#4A4A50] leading-[1.65]">
                      Rigorous system design principles ensuring scalability, 
                      maintainability, and operational excellence.
                    </p>
                  </div>
                  <div className="p-8 bg-white/80 backdrop-blur-xl rounded-2xl border border-[#E6E6EA]/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
                    <h4 className="text-[20px] font-semibold text-[#0B0B0D] mb-3 tracking-tight">
                      Responsible Governance
                    </h4>
                    <p className="text-[17px] text-[#4A4A50] leading-[1.65]">
                      Safety, boundaries, and responsible AI adoption built into 
                      every system from day one.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-[#FAFAFA] py-24 md:py-32">
        <div className="apple-container px-6 md:px-8 text-center">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-[#0B0B0D] mb-6 tracking-tight">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-[17px] text-[#4A4A50] mb-10 max-w-2xl mx-auto leading-[1.65]">
            Let's discuss how enterprise AI architecture can deliver measurable 
            performance for your organization.
          </p>
          <AppleButton variant="primary" href="/contact">
            Book a Call
          </AppleButton>
        </div>
      </section>
    </>
  );
}
