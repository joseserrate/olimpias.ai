import React from 'react';
import { AppleButton } from '@/components/ui';

interface UseCaseProps {
  lane: string;
  title: string;
  outcome: string;
}

const UseCaseCard: React.FC<UseCaseProps> = ({ lane, title, outcome }) => {
  return (
    <div className="group relative bg-white/80 backdrop-blur-xl p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-[#E6E6EA]/50">
      {/* Lane label */}
      <div className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#7A7A82] mb-4">
        {lane}
      </div>
      
      {/* Title */}
      <h3 className="text-[22px] font-semibold text-[#0B0B0D] mb-3 tracking-tight leading-[1.3]">
        {title}
      </h3>
      
      {/* Outcome */}
      <p className="text-[15px] text-[#4A4A50] leading-[1.6]">
        {outcome}
      </p>
    </div>
  );
};

export const UseCases: React.FC = () => {
  const useCases: UseCaseProps[] = [
    {
      lane: 'Trade & Export',
      title: 'Export Documentation',
      outcome: '80% faster processing, zero compliance errors',
    },
    {
      lane: 'Trade & Export',
      title: 'Supply Chain Intelligence',
      outcome: '30% improvement in on-time delivery',
    },
    {
      lane: 'Finance & Revenue',
      title: 'Revenue Operations',
      outcome: '40% faster cash collection',
    },
    {
      lane: 'Finance & Revenue',
      title: 'Expense Intelligence',
      outcome: '70% reduction in processing time',
    },
    {
      lane: 'Compliance & Risk',
      title: 'Regulatory Monitoring',
      outcome: 'Zero missed deadlines, always audit-ready',
    },
    {
      lane: 'Customer Operations',
      title: 'Support Intelligence',
      outcome: '3x capacity with maintained quality',
    },
    {
      lane: 'Internal Productivity',
      title: 'Document Processing',
      outcome: '90% reduction in manual data entry',
    },
    {
      lane: 'Internal Productivity',
      title: 'Meeting Intelligence',
      outcome: '100% action item completion rate',
    },
    {
      lane: 'Government',
      title: 'Public Service Automation',
      outcome: '10x service capacity, 95% satisfaction',
    },
  ];

  return (
    <section id="use-cases" className="relative bg-white py-28 md:py-36">
      {/* Breathing room container */}
      <div className="apple-container">
        {/* Header with generous spacing */}
        <div className="text-center mb-20 md:mb-28">
          <h2 className="text-[44px] md:text-[56px] font-semibold text-[#0B0B0D] mb-5 tracking-tight leading-[1.05]">
            Enterprise Use Cases
          </h2>
          <p className="text-[20px] md:text-[22px] text-[#4A4A50] max-w-3xl mx-auto leading-[1.5]">
            Real workflows, measurable outcomes, operational impact
          </p>
        </div>

        {/* Grid with generous gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 max-w-[1280px] mx-auto px-4 md:px-6 mb-20">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} {...useCase} />
          ))}
        </div>

        {/* CTA with breathing room */}
        <div className="text-center mt-16 md:mt-20">
          <p className="text-[17px] text-[#4A4A50] mb-8 leading-[1.6]">
            Don't see your use case? Every enterprise has unique workflows.
          </p>
          <AppleButton variant="primary" href="/contact">
            Discuss Your Needs
          </AppleButton>
        </div>
      </div>
    </section>
  );
};
