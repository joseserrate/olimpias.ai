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
    <div className="group relative bg-white/80 backdrop-blur-xl p-10 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] shadow-[0_12px_40px_rgba(0,0,0,0.04)] border border-[#E6E6EA]/50">
      {/* Eyebrow number */}
      <div className="text-[11px] font-mono tracking-[0.2em] text-[#7A7A82] mb-6">
        {number}
      </div>
      
      {/* Title */}
      <h3 className="text-[28px] font-semibold text-[#0B0B0D] mb-4 tracking-tight">
        {title}
      </h3>
      
      {/* Definition */}
      <p className="text-[17px] text-[#4A4A50] leading-[1.6] mb-8">
        {definition}
      </p>
      
      {/* Examples */}
      <div className="mb-8 pt-6 border-t border-[#E6E6EA]">
        <div className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#7A7A82] mb-4">
          Examples
        </div>
        <ul className="space-y-3">
          {examples.map((example, index) => (
            <li key={index} className="flex items-start text-[15px] text-[#4A4A50] leading-[1.65]">
              <span className="mr-3 mt-2 w-1.5 h-1.5 rounded-full bg-[#0B0B0D] flex-shrink-0 opacity-40"></span>
              <span>{example}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Deliverable */}
      <div className="pt-6 border-t border-[#E6E6EA]">
        <div className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#7A7A82] mb-3">
          Deliverable
        </div>
        <p className="text-[15px] text-[#0B0B0D] font-medium leading-[1.5]">
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
    <section id="methodology" className="relative bg-[#FAFAFA] py-28 md:py-36">
      {/* Breathing room container */}
      <div className="apple-container">
        {/* Header with generous spacing */}
        <div className="text-center mb-20 md:mb-28">
          <h2 className="text-[44px] md:text-[56px] font-semibold text-[#0B0B0D] mb-5 tracking-tight leading-[1.05]">
            How We Work
          </h2>
          <p className="text-[20px] md:text-[22px] text-[#4A4A50] max-w-2xl mx-auto leading-[1.5]">
            A systematic approach that delivers capability, not just tools
          </p>
        </div>

        {/* Cards Grid with generous gaps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-[1280px] mx-auto px-4 md:px-6">
          {frameworks.map((framework, index) => (
            <FrameworkCard key={index} {...framework} />
          ))}
        </div>

        {/* Doctrine Footer with breathing room */}
        <div className="mt-24 md:mt-32 text-center">
          <p className="text-[14px] text-[#7A7A82] tracking-wide leading-[1.7] max-w-3xl mx-auto">
            From tools to systems that run. Architecture first. Governance always. Performance measured.
          </p>
        </div>
      </div>
    </section>
  );
};
