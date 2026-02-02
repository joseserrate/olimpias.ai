import React from 'react';
import { Container, Section, Button } from '@/components/ui';

export const Hero: React.FC = () => {
  return (
    <Section className="min-h-[90vh] flex items-center bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Enterprise AI Architecture for measurable performance
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We design and govern AI systems that turn complexity into capability
          </p>
          
          {/* Supporting Line */}
          <p className="text-lg text-primary font-semibold mb-12">
            Architecture + Governance + Performance
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="primary" 
              size="lg"
              href="/contact"
            >
              Book a Call
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              href="#methodology"
            >
              See How It Works
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
