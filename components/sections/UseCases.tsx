import React from 'react';
import { Container, Section } from '@/components/ui';

interface UseCaseProps {
  lane: string;
  title: string;
  targetFunction: string;
  inputs: string[];
  outputs: string[];
  success: string;
}

const UseCaseCard: React.FC<UseCaseProps> = ({
  lane,
  title,
  targetFunction,
  inputs,
  outputs,
  success,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg border-2 border-gray-100 hover:border-primary/50 transition-all duration-300">
      <div className="text-sm font-semibold text-primary mb-2">{lane}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700 mb-4">{targetFunction}</p>
      
      <div className="space-y-4 mb-4">
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Inputs:</h4>
          <div className="flex flex-wrap gap-2">
            {inputs.map((input, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
              >
                {input}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Outputs:</h4>
          <div className="flex flex-wrap gap-2">
            {outputs.map((output, index) => (
              <span
                key={index}
                className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
              >
                {output}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="pt-4 border-t border-gray-100">
        <h4 className="text-sm font-semibold text-gray-900 mb-1">Success Looks Like:</h4>
        <p className="text-sm text-gray-700">{success}</p>
      </div>
    </div>
  );
};

export const UseCases: React.FC = () => {
  const useCases: UseCaseProps[] = [
    {
      lane: 'Trade & Export',
      title: 'Export Documentation Automation',
      targetFunction: 'Streamline customs and export documentation workflows',
      inputs: ['Shipping docs', 'Invoices', 'Certificates', 'WhatsApp msgs'],
      outputs: ['Auto-filled forms', 'Compliance checks', 'Status dashboard'],
      success: '80% reduction in document preparation time, zero compliance errors',
    },
    {
      lane: 'Trade & Export',
      title: 'Supply Chain Intelligence',
      targetFunction: 'Monitor and optimize cross-border supply chain operations',
      inputs: ['Shipping data', 'Vendor emails', 'PDFs', 'Systems data'],
      outputs: ['Delay predictions', 'Risk alerts', 'Performance reports'],
      success: '30% improvement in on-time delivery, proactive issue resolution',
    },
    {
      lane: 'Finance & Revenue',
      title: 'Revenue Operations Hub',
      targetFunction: 'Automate invoicing, collections, and revenue forecasting',
      inputs: ['Sales data', 'Payment records', 'Customer comms', 'Spreadsheets'],
      outputs: ['Auto invoices', 'Collection alerts', 'Forecast dashboard'],
      success: '40% faster cash collection, accurate revenue predictions',
    },
    {
      lane: 'Finance & Revenue',
      title: 'Expense Intelligence',
      targetFunction: 'Automated expense categorization and approval workflows',
      inputs: ['Receipts', 'Credit card data', 'Employee submissions', 'PDFs'],
      outputs: ['Categorized expenses', 'Approval workflows', 'Budget alerts'],
      success: '70% reduction in processing time, real-time budget visibility',
    },
    {
      lane: 'Compliance & Risk',
      title: 'Regulatory Monitoring System',
      targetFunction: 'Track compliance requirements and automate reporting',
      inputs: ['Regulations', 'Internal docs', 'Audit trails', 'Systems logs'],
      outputs: ['Compliance alerts', 'Auto reports', 'Risk dashboard'],
      success: 'Zero missed deadlines, audit-ready documentation always available',
    },
    {
      lane: 'Customer Operations',
      title: 'Customer Support Intelligence',
      targetFunction: 'Scale support operations with AI-assisted workflows',
      inputs: ['WhatsApp', 'Emails', 'Chat logs', 'Knowledge base'],
      outputs: ['Response automation', 'Agent assist', 'Satisfaction tracking'],
      success: '3x support capacity with maintained quality scores',
    },
    {
      lane: 'Internal Productivity',
      title: 'Document Processing Pipeline',
      targetFunction: 'Extract, classify, and route documents automatically',
      inputs: ['Scanned docs', 'PDFs', 'Emails', 'Forms'],
      outputs: ['Extracted data', 'Auto-routing', 'Search interface'],
      success: '90% reduction in manual data entry, instant document retrieval',
    },
    {
      lane: 'Internal Productivity',
      title: 'Meeting Intelligence System',
      targetFunction: 'Capture decisions, track actions, and maintain institutional memory',
      inputs: ['Meeting recordings', 'Notes', 'Shared docs', 'Calendar data'],
      outputs: ['Action items', 'Decision log', 'Knowledge graph'],
      success: '100% action item completion rate, searchable decision history',
    },
    {
      lane: 'Government & Education',
      title: 'Public Service Automation',
      targetFunction: 'Scale government service delivery with digital AI assistants',
      inputs: ['Citizen requests', 'Forms', 'ID documents', 'Service records'],
      outputs: ['Status tracking', 'Auto-responses', 'Service analytics'],
      success: '10x service capacity, 95% citizen satisfaction scores',
    },
  ];

  return (
    <Section id="use-cases" className="bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Enterprise AI Use Cases
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            IA empresarial, not consumer AI. Real workflows, measurable outcomes, operational impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} {...useCase} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Don't see your use case? Every enterprise has unique workflows.
          </p>
          <a
            href="/contact"
            className="btn btn-primary btn-lg"
          >
            Discuss Your Needs
          </a>
        </div>
      </Container>
    </Section>
  );
};
