# Deployment Guide - Olimpias AI Landing Page

## 🚀 Quick Deploy to Vercel

### Option 1: Vercel CLI (Fastest)

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy from project root
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - Project name? olimpias-ai
# - Directory? ./
# - Override settings? No

# For production deployment
vercel --prod
```

### Option 2: GitHub + Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "feat: Olimpias AI MVP landing page"
   git branch -M main
   git remote add origin https://github.com/yourusername/olimpias-ai.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure settings (default settings are fine)
   - Click "Deploy"

## ⚙️ Environment Variables

### Production Environment (.env.production)

```bash
# Analytics (Optional - uncomment when ready)
# NEXT_PUBLIC_PLAUSIBLE_DOMAIN=olimpiasai.com

# Or for Google Analytics
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email Service (for contact form)
# SENDGRID_API_KEY=your-key-here
# RESEND_API_KEY=your-key-here
```

Add these in Vercel Dashboard:
- Go to Project Settings > Environment Variables
- Add each variable for Production environment

## 🌐 Domain Configuration

### Step 1: Purchase Domain
- Recommended: [Namecheap](https://namecheap.com), [GoDaddy](https://godaddy.com), or [Google Domains](https://domains.google)
- Suggested: `olimpiasai.com` or `olimpias.ai`

### Step 2: Configure in Vercel
1. Go to Project Settings > Domains
2. Add your custom domain
3. Follow Vercel's DNS configuration instructions

### Step 3: DNS Records (Example)
If using Vercel's nameservers:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 4: Wait for Propagation
- DNS changes can take 24-48 hours
- Check status: `dig olimpiasai.com`

## 📧 Email Service Setup (Choose One)

### Option A: SendGrid

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get API key from Settings > API Keys
3. Add to Vercel environment variables
4. Update `/app/api/contact/route.ts`:

```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

await sgMail.send({
  to: 'contact@olimpiasai.com',
  from: 'noreply@olimpiasai.com', // Must be verified in SendGrid
  subject: `New Contact: ${body.name}`,
  text: `Name: ${body.name}\nEmail: ${body.email}\n...`,
  html: `<h2>New Contact Form Submission</h2>...`
});
```

### Option B: Resend

1. Sign up at [resend.com](https://resend.com)
2. Get API key
3. Update API route similarly

## 📊 Analytics Setup

### Option A: Plausible (Recommended)

1. Sign up at [plausible.io](https://plausible.io)
2. Add site: `olimpiasai.com`
3. Update `/app/layout.tsx`:

```typescript
<head>
  <script defer data-domain="olimpiasai.com" src="https://plausible.io/js/script.js"></script>
</head>
```

### Option B: Google Analytics 4

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID (G-XXXXXXXXXX)
3. Update layout with GA4 script

## ✅ Pre-Launch Checklist

### Content Review
- [ ] Update WhatsApp number in Footer and Contact page
- [ ] Update email address to actual domain email
- [ ] Review all copy for accuracy
- [ ] Add actual credentials/experience details
- [ ] Upload logo and OG image to `/public`

### Technical Checks
- [ ] Test all forms work in production
- [ ] Verify WhatsApp links work on mobile
- [ ] Check all CTAs navigate correctly
- [ ] Test on iPhone and Android
- [ ] Verify SSL certificate is active
- [ ] Check sitemap.xml is accessible
- [ ] Validate OpenGraph tags (use [metatags.io](https://metatags.io))

### Performance
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Test mobile page speed (use [PageSpeed Insights](https://pagespeed.web.dev))
- [ ] Verify images are optimized
- [ ] Check Time to First Byte (TTFB)

### SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Verify structured data with Google Rich Results Test
- [ ] Set up Google Business Profile
- [ ] Create social media profiles

## 🔧 Post-Launch Configuration

### 1. Google Search Console
```bash
# Add your domain
https://search.google.com/search-console

# Submit sitemap
https://olimpiasai.com/sitemap.xml
```

### 2. Form Monitoring
Set up notifications for form submissions:
- Email alerts when form is submitted
- Slack webhook (optional)
- Response time tracking

### 3. Error Monitoring
Integrate Sentry for error tracking:
```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

### 4. Performance Monitoring
Use Vercel Analytics (included) or:
- [SpeedCurve](https://speedcurve.com)
- [Calibre](https://calibreapp.com)

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild locally
npm run build

# Check for TypeScript errors
npx tsc --noEmit
```

### Form Not Working
- Verify API route is deployed
- Check environment variables in Vercel
- Test with curl:
```bash
curl -X POST https://olimpiasai.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com",...}'
```

### DNS Issues
```bash
# Check DNS propagation
dig olimpiasai.com

# Check from multiple locations
https://www.whatsmydns.net
```

## 📱 Mobile Testing

### iOS
- Safari on iPhone 12+
- Test WhatsApp link
- Check form usability
- Verify touch targets

### Android
- Chrome on Samsung/Pixel
- Test form inputs
- Check WhatsApp integration
- Verify smooth scrolling

## 🎯 Success Metrics to Track

### Week 1
- Page views
- Form submissions
- WhatsApp clicks
- Bounce rate

### Week 2-4
- Conversion rate (visitor → lead)
- Time on site
- Most viewed sections
- Device breakdown (mobile vs desktop)

## 🔄 Continuous Improvement

### A/B Testing Ideas
1. Hero CTA button text variations
2. Form length (long vs short)
3. Use case presentation format
4. Framework section order

### Content Updates
- Add case studies as they come in
- Update use cases based on actual clients
- Refine copy based on user feedback
- Add testimonials when available

## 🆘 Support

### Vercel Support
- Documentation: [vercel.com/docs](https://vercel.com/docs)
- Community: [github.com/vercel/next.js/discussions](https://github.com/vercel/next.js/discussions)

### Next.js Help
- Docs: [nextjs.org/docs](https://nextjs.org/docs)
- Learn: [nextjs.org/learn](https://nextjs.org/learn)

---

**Ready to Deploy?** Run `vercel` from your project root!
