# Imaging Uganda/Africa - Radiology & Medical Equipment Platform

A comprehensive healthcare platform combining radiology education with a medical equipment marketplace for the African healthcare community.

## 🏥 About This Project

Imaging Uganda/Africa is a dual-purpose platform that serves:
- **Radiology Education**: Curated articles and case studies for radiologists, radiographers, and medical imaging professionals
- **Medical Equipment Marketplace**: A curated marketplace connecting healthcare facilities with quality medical equipment suppliers

Built with Astro for blazing-fast performance and optimal SEO.

## ✨ Features

### Radiology Section
- ✅ Educational articles on radiology topics
- ✅ Clinical case studies with imaging findings
- ✅ CME (Continuing Medical Education) ready content
- ✅ SEO-friendly with canonical URLs and Open Graph data
- ✅ Markdown & MDX support for rich medical content

### Equipment Marketplace
- ✅ Product catalog with Ugandan Shilling (UGX) pricing
- ✅ WhatsApp integration for direct inquiries
- ✅ Real-time search and filtering
- ✅ Category-based organization
- ✅ Mobile-responsive product grids

### Technical Features
- ✅ 100/100 Lighthouse performance
- ✅ Sitemap generation
- ✅ RSS Feed support for articles
- ✅ Type-safe content with Zod schemas
- ✅ Image optimization with Astro Assets

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/                 # Static assets (images, fonts, etc.)
├── src/
│   ├── assets/            # Project assets (optimized images)
│   ├── components/        # Reusable UI components
│   │   ├── BaseHead.astro
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── content/           # Content collections
│   │   ├── articles/      # Radiology articles (MDX)
│   │   ├── cases/         # Clinical case studies (MDX)
│   │   └── equipment/      # Medical equipment listings (MDX)
│   ├── layouts/           # Page layouts
│   │   └── Layout.astro
│   ├── pages/             # Route pages
│   │   ├── articles/      # Article listing & detail pages
│   │   ├── cases/         # Case study pages
│   │   ├── equipment/     # Equipment marketplace pages
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── index.astro
│   ├── styles/            # Global styles
│   └── utils/             # Utility functions
│       └── currency.ts    # UGX currency formatting
├── astro.config.mjs       # Astro configuration
├── README.md
├── package.json
└── tsconfig.json