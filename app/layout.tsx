import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { OrganizationSchema, ServiceSchema } from '@/components/seo';

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Olimpias AI - Enterprise AI Architecture for Bolivia",
    template: "%s | Olimpias AI"
  },
  description: "We design and govern AI systems that turn complexity into capability. Enterprise AI architecture, governance, and performance for Bolivian and regional companies.",
  keywords: ["Enterprise AI", "AI Architecture", "Bolivia", "AI Governance", "AI Systems", "Business Intelligence", "Digital Transformation"],
  authors: [{ name: "Olimpias AI" }],
  creator: "Olimpias AI",
  openGraph: {
    type: "website",
    locale: "es_BO",
    alternateLocale: ["en_US"],
    url: "https://olimpiasai.com",
    siteName: "Olimpias AI",
    title: "Olimpias AI - Enterprise AI Architecture for Bolivia",
    description: "We design and govern AI systems that turn complexity into capability.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Olimpias AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olimpias AI - Enterprise AI Architecture",
    description: "We design and govern AI systems that turn complexity into capability.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

import { Header, Footer } from '@/components/layout';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <OrganizationSchema />
        <ServiceSchema />
        {/* Analytics - Add Plausible or GA4 script here */}
        {/* Example Plausible: */}
        {/* <script defer data-domain="olimpiasai.com" src="https://plausible.io/js/script.js"></script> */}
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
