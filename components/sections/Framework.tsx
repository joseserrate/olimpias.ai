import React from 'react';

interface FrameworkCardProps {
  number: string;
  title: string;
  definition: string;
  examples: string[];
  deliverable: string;
}

const FrameworkCard: React.FC<FrameworkCardProps> = ({ 
  number,
  title, 
  definition, 
  examples, 
  deliverable,
}) => {
  return (
    <div className="group relative bg-white p-12 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] shadow-[0_8px_24px_rgba(0,0,0,0.04)] border border-[#E6E6EA]">
      {/* Eyebrow number */}
      <div className="text-[11px] font-mono tracking-[0.2em] text-[#7A7A82] mb-8">
        {number}
      </div>
      
      {/* Title */}
      <h3 className="text-[32px] font-semibold text-[#0B0B0D] mb-5 tracking-tight leading-[1.1]">
        {title}
      </h3>
      
      {/* Definition */}
      <p className="text-[18px] text-[#4A4A50] leading-[1.65] mb-10">
        {definition}
      </p>
      
      {/* Examples */}
      <div className="mb-10 pt-8 border-t border-[#E6E6EA]">
        <div className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#7A7A82] mb-6">
          Examples
        </div>
        <ul className="space-y-4">
          {examples.map((example, index) => (
            <li key={index} className="flex items-start text-[16px] text-[#4A4A50] leading-[1.7]">
              <span className="mr-4 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0B0B0D] flex-shrink-0"></span>
              <span>{example}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Deliverable */}
      <div className="pt-8 border-t border-[#E6E6EA]">
        <div className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#7A7A82] mb-4">
          Deliverable
        </div>
        <p className="text-[16px] text-[#0B0B0D] font-medium leading-[1.6]">
          {deliverable}
        </p>
      </div>
    </div>
  );
};

export const Framework: React.FC = () => {
  const frameworks: FrameworkCardProps[] = [
    {
      number: '01',
      title: 'Design',
      definition: 'Map workflows, define roles, and shape the system.',
      examples: [
        'Decompose tasks into agent-ready steps',
        'Define human oversight points'
      ],
      deliverable: 'System Architecture & Workflow Maps',
    },
    {
      number: '02',
      title: 'Govern',
      definition: 'Set boundaries, approvals, and escalation.',
      examples: [
        'Define when AI decides vs. human approval',
        'Automate alerts for edge cases'
      ],
      deliverable: 'Governance Framework & Control Playbooks',
    },
    {
      number: '03',
      title: 'Elevate',
      definition: 'Measure performance and improve continuously.',
      examples: [
        'Real-time dashboards track accuracy',
        'Monthly reviews identify optimizations'
      ],
      deliverable: 'Performance Dashboard & Reports',
    },
  ];

  return (
    <section id="methodology" className="relative bg-white py-32 md:py-40">
      {/* Breathing room container */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        {/* Header with generous spacing */}
        <div className="text-center mb-24 md:mb-32">
          <h2 className="text-[48px] md:text-[64px] font-semibold text-[#0B0B0D] mb-6 tracking-tight leading-[1.05]">
            How We Work
          </h2>
          <p className="text-[21px] md:text-[24px] text-[#4A4A50] max-w-2xl mx-auto leading-[1.5]">
            A systematic approach that delivers capability, not just tools
          </p>
        </div>

        {/* Cards Grid with HUGE gaps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16 mb-28">
          {frameworks.map((framework, index) => (
            <FrameworkCard key={index} {...framework} />
          ))}
        </div>

        {/* Doctrine Footer with breathing room */}
        <div className="text-center pt-12 border-t border-[#E6E6EA]">
          <p className="text-[15px] text-[#7A7A82] tracking-wide leading-[1.8] max-w-3xl mx-auto">
            From tools to systems that run. Architecture first. Governance always. Performance measured.
          </p>
        </div>
      </div>
    </section>
  );
};
