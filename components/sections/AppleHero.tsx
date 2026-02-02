import React from 'react';
import { AppleButton } from '@/components/ui';

export const AppleHero: React.FC = () => {
  return (
    <section className="min-h-[90vh] flex items-center bg-white">
      <div className="apple-container w-full">
        <div className="max-w-4xl mx-auto text-center pt-8">
          {/* Main Headline */}
          <h1 className="text-[44px] md:text-[64px] font-semibold text-[#0B0B0D] mb-6 leading-[1.05] tracking-tight">
            Enterprise AI Architecture
            <br />
            for measurable performance
          </h1>
          
          {/* Subheadline */}
          <p className="text-[20px] md:text-[24px] text-[#4A4A50] mb-10 max-w-3xl mx-auto leading-[1.4]">
            We design and govern AI systems that turn complexity into capability
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <AppleButton variant="primary" href="/contact">
              Book a Call
            </AppleButton>
            <AppleButton variant="secondary" href="#methodology">
              See How It Works
            </AppleButton>
          </div>
          
          {/* Supporting Line */}
          <p className="text-[15px] text-[#7A7A82] max-w-2xl mx-auto leading-[1.6] mb-16">
            Enterprise AI as infrastructure: architecture, governance, measurable performance.
          </p>
          
          {/* Trust Line */}
          <div className="pt-12 border-t border-[#E6E6EA] max-w-3xl mx-auto">
            <p className="text-[13px] text-[#7A7A82] tracking-wide">
              Built on Apple Business Solutions experience · MSTC at UT Austin · Harvard Agentic AI Intensive
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
