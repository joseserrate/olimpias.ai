import React from 'react';

export const OrganizationSchema: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Olimpias AI',
    description: 'Enterprise AI Architecture for measurable performance in Bolivia and Latin America',
    url: 'https://olimpiasai.com',
    logo: 'https://olimpiasai.com/logo.png',
    foundingDate: '2026',
    areaServed: {
      '@type': 'Country',
      name: 'Bolivia',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BO',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'contact@olimpiasai.com',
      availableLanguage: ['Spanish', 'English'],
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const ServiceSchema: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Enterprise AI Architecture',
    provider: {
      '@type': 'Organization',
      name: 'Olimpias AI',
      url: 'https://olimpiasai.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Bolivia',
    },
    description: 'We design and govern AI systems that turn complexity into capability',
    offers: {
      '@type': 'Offer',
      category: ['AI System Design', 'AI Governance', 'AI Performance Optimization'],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
