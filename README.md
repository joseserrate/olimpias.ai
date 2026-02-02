# Olimpias AI - Enterprise AI Architecture Landing Page

A high-credibility, conversion-oriented website positioning Olimpias AI as the center for Enterprise AI and AI system architecture in Bolivia and the region.

## 🎯 Overview

This landing page serves as the front door for enterprise and government leaders interested in serious AI implementation. Built with Next.js 16, TypeScript, and Tailwind CSS v4, it emphasizes:

- **Credibility**: Institutional aesthetic with rigorous foundations
- **Clarity**: Operational language explaining Enterprise AI as infrastructure
- **Conversion**: Lead capture optimized for pilots and advisory engagements

## 🚀 Features Implemented

### ✅ Core Sections
- **Hero Section**: Positioning statement with primary/secondary CTAs
- **Framework Section**: Design/Govern/Elevate operating model
- **Use Cases**: 9 enterprise use cases across 6 operational lanes
- **Credibility Section**: Experience, credentials, and commitments
- **Contact Form**: Full lead capture with validation and spam protection

### ✅ Technical Foundation
- Next.js 16 with App Router
- TypeScript for type safety
- Tailwind CSS v4 with custom design system
- Mobile-first responsive design
- SEO optimized with metadata, sitemap, and schema markup
- Security headers configured
- Contact form API with validation

### ✅ Design System
- **Colors**: Dark teal primary (#0f766e), neutral grays
- **Typography**: Inter font with balanced scale
- **Components**: Reusable Button, Section, Container components
- **Spacing**: 4px base system for consistency
- **Mobile-first**: Optimized for Bolivian mobile users

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.6
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel (recommended)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at `http://localhost:3000`

## 📁 Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page with form
│   ├── api/contact/    # Form submission API
│   ├── layout.tsx      # Root layout with SEO
│   ├── page.tsx        # Home page
│   ├── sitemap.ts      # Dynamic sitemap
│   └── robots.ts       # Robots.txt
├── components/
│   ├── forms/          # Contact form
│   ├── layout/         # Header & Footer
│   ├── sections/       # Hero, Framework, Use Cases, Credibility
│   ├── seo/            # Schema markup
│   └── ui/             # Button, Section, Container
├── public/             # Static assets
└── .taskmaster/        # Project management (Taskmaster AI)
```

## 🎨 Design Principles

1. **Minimal & Institutional**: No hype visuals, geometric icons, strong whitespace
2. **Mobile-First**: Optimized for phone viewing (Bolivian market reality)
3. **Authoritative**: Feels official in both English and Spanish contexts
4. **Performance**: Static generation, optimized images, fast load times

## 📊 SEO & Analytics

- **Metadata**: Complete OpenGraph and Twitter cards
- **Schema.org**: Organization and Service structured data
- **Sitemap**: Auto-generated for all routes
- **Analytics**: Ready for Plausible or GA4 (placeholder in layout)

## 🔒 Security

- Strict Transport Security headers
- X-Frame-Options protection
- Content Security Policy
- XSS Protection
- Honeypot spam protection in forms

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Configure domain
4. Deploy

```bash
# One-line deployment
npx vercel
```

### Environment Variables

For production, configure in Vercel dashboard:
- Add analytics IDs (Plausible/GA4)
- Configure email service for form submissions

## 📝 Content Management

Current content is hardcoded for MVP. For Phase 2, consider:
- Sanity CMS for content management
- MDX for blog posts
- Contentful for multi-language support

## 🚦 Next Steps (Post-MVP)

1. **Spanish/English Toggle**: Language switcher
2. **Analytics Integration**: Set up Plausible or GA4
3. **Form Backend**: Connect to email service (SendGrid/Resend)
4. **Case Studies**: Add 2-3 pilot narratives
5. **Capability Brief**: Downloadable PDF
6. **Performance**: Lighthouse audit and optimization

## 📞 Contact Integration

### WhatsApp Deep Link
Replace `59100000000` in footer and contact page with actual number.

### Email
Update `contact@olimpiasai.com` to actual email in:
- Footer component
- Contact page
- API route (for notifications)

## 🎯 Target Personas

1. **Bolivian CEO**: Wants ROI, certainty, confidence
2. **Ops/Finance Leader**: Wants workflow impact, first pilot
3. **Government Director**: Wants safety, governance, legitimacy
4. **Partner/Engineer**: Assessing sophistication and seriousness

## 📖 Copy Pillars (Doctrine)

- Enterprise AI is infrastructure
- Architecture first, governance always, performance measured
- From tool use to systems that run

## 🤝 Contributing

This is a private project for Olimpias AI. For internal updates:

1. Create feature branch
2. Make changes
3. Test locally
4. Create pull request
5. Deploy to staging
6. Review and merge

## 📄 License

Private and proprietary. All rights reserved by Olimpias AI.

## 🙏 Credits

Built with:
- Next.js by Vercel
- Tailwind CSS
- Taskmaster AI (project management)
- Cursor IDE

---

**Olimpias AI** - Enterprise AI Architecture for measurable performance
