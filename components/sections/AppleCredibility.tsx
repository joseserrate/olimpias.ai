import React from 'react';
import { AppleButton } from '@/components/ui';

export const AppleCredibility: React.FC = () => {
  return (
    <section className="relative bg-[#FAFAFA] py-28 md:py-36">
      <div className="apple-container">
        {/* Header */}
        <div className="text-center mb-20 md:mb-28">
          <h2 className="text-[44px] md:text-[56px] font-semibold text-[#0B0B0D] mb-5 tracking-tight leading-[1.05]">
            Built on Rigorous Foundations
          </h2>
          <p className="text-[20px] md:text-[22px] text-[#4A4A50] max-w-2xl mx-auto leading-[1.5]">
            Experience and education that ensure serious results
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 max-w-[1100px] mx-auto px-4 md:px-6">
          {/* Left Column - Summary */}
          <div>
            <h3 className="text-[28px] font-semibold text-[#0B0B0D] mb-6 tracking-tight">
              From Global Systems to
              <br />
              Bolivian Enterprise
            </h3>
            <p className="text-[17px] text-[#4A4A50] leading-[1.7] mb-8">
              We bring enterprise-grade AI system architecture to Bolivia and the region. 
              Our approach combines global-scale systems experience with deep understanding 
              of local operational realities.
            </p>
            <p className="text-[17px] text-[#4A4A50] leading-[1.7]">
              Every system is designed for measurable performance, governed for responsible 
              adoption, and optimized for continuous improvement.
            </p>
          </div>

          {/* Right Column - Focus Areas */}
          <div>
            <div className="mb-12">
              <h4 className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#7A7A82] mb-6">
                Experience
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-4 mt-2 w-1.5 h-1.5 rounded-full bg-[#0B0B0D] flex-shrink-0 opacity-40"></span>
                  <span className="text-[17px] text-[#4A4A50] leading-[1.65]">
                    Global-scale systems at Apple Business Solutions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 mt-2 w-1.5 h-1.5 rounded-full bg-[#0B0B0D] flex-shrink-0 opacity-40"></span>
                  <span className="text-[17px] text-[#4A4A50] leading-[1.65]">
                    Enterprise architecture and system design
                  </span>
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h4 className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#7A7A82] mb-6">
                Education
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-4 mt-2 w-1.5 h-1.5 rounded-full bg-[#0B0B0D] flex-shrink-0 opacity-40"></span>
                  <span className="text-[17px] text-[#4A4A50] leading-[1.65]">
                    Master of Science in Technology Commercialization (MSTC), UT Austin
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

            <div>
              <h4 className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#7A7A82] mb-6">
                Commitments
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-4 mt-2 w-1.5 h-1.5 rounded-full bg-[#0B0B0D] flex-shrink-0 opacity-40"></span>
                  <span className="text-[17px] text-[#4A4A50] leading-[1.65]">
                    Measured outcomes
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 mt-2 w-1.5 h-1.5 rounded-full bg-[#0B0B0D] flex-shrink-0 opacity-40"></span>
                  <span className="text-[17px] text-[#4A4A50] leading-[1.65]">
                    Disciplined architecture
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 mt-2 w-1.5 h-1.5 rounded-full bg-[#0B0B0D] flex-shrink-0 opacity-40"></span>
                  <span className="text-[17px] text-[#4A4A50] leading-[1.65]">
                    Responsible governance
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20 md:mt-28">
          <AppleButton variant="primary" href="/about">
            Learn More About Us
          </AppleButton>
        </div>
      </div>
    </section>
  );
};
