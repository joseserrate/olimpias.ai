import type { Metadata } from 'next';
import { Container, Section } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Olimpias AI',
};

export default function PrivacyPage() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-4">Last updated: February 2026</p>
            <p className="text-gray-700">
              Privacy policy content will be added here. This page outlines how Olimpias AI 
              collects, uses, and protects your personal information.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
