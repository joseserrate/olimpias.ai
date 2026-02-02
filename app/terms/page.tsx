import type { Metadata } from 'next';
import { Container, Section } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Olimpias AI',
};

export default function TermsPage() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-4">Last updated: February 2026</p>
            <p className="text-gray-700">
              Terms of service content will be added here. This page outlines the terms 
              and conditions for using Olimpias AI services.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
