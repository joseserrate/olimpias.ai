import React from 'react';
import { Container, Section } from '@/components/ui';

interface FrameworkCardProps {
  title: string;
  definition: string;
  examples: string[];
  artifact: string;
  icon: React.ReactNode;
}

const FrameworkCard: React.FC<FrameworkCardProps> = ({ 
  title, 
  definition, 
  examples, 
  artifact,
  icon 
}) => {
  return (
    <div className="bg-white p-8 rounded-lg border-2 border-gray-100 hover:border-primary transition-all duration-300">
      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-700 mb-6 leading-relaxed">{definition}</p>
      
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Examples:</h4>
        <ul className="space-y-2">
          {examples.map((example, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span className="text-gray-700">{example}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="pt-6 border-t border-gray-100">
        <h4 className="font-semibold text-gray-900 mb-2">You Get:</h4>
        <p className="text-primary font-medium">{artifact}</p>
      </div>
    </div>
  );
};

export const Framework: React.FC = () => {
  const frameworks = [
    {
      title: 'Design',
      definition: 'We map your workflows, define roles, decompose complex tasks, and architect the system shape that fits your operations.',
      examples: [
        'Task decomposition: Breaking down customer service into agent-ready steps',
        'Role mapping: Defining human oversight points in automated workflows'
      ],
      artifact: 'System Architecture Document & Workflow Maps',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      title: 'Govern',
      definition: 'We establish clear boundaries, appropriate autonomy levels, escalation protocols, and responsible adoption frameworks.',
      examples: [
        'Boundary setting: Defining when AI decides vs. when humans must approve',
        'Escalation protocols: Automated alerts for edge cases requiring human review'
      ],
      artifact: 'Governance Framework & Control Playbooks',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Elevate',
      definition: 'We implement measurable performance tracking, continuous improvement loops, and operational excellence metrics.',
      examples: [
        'Performance metrics: Real-time dashboards tracking task completion and accuracy',
        'Improvement loops: Monthly reviews identifying optimization opportunities'
      ],
      artifact: 'Performance Dashboard & Optimization Reports',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  return (
    <Section id="methodology" className="bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach to Enterprise AI that delivers capability, not just tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {frameworks.map((framework, index) => (
            <FrameworkCard key={index} {...framework} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            From tool use to systems that run. Architecture first, governance always, performance measured.
          </p>
        </div>
      </Container>
    </Section>
  );
};
