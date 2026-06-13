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

The repository is organized like this:

```text
├── astro.config.mjs
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
├── public/
│   └── robots.txt
└── src/
	├── assets/
	│   ├── fonts/
	│   ├── favicon.jpg
	│   ├── logo.jpg
	│   └── ...
	├── components/
	│   ├── AdSense.astro
	│   ├── BaseHead.astro
	│   ├── CVPageLayout.astro
	│   ├── Footer.astro
	│   ├── FormattedDate.astro
	│   ├── Header.astro
	│   ├── HeaderLink.astro
	│   ├── ImageGrid.astro
	│   ├── Pagination.astro
	│   ├── PostList.astro
	│   └── SearchForm.astro
	├── content/
	│   ├── articles/
	│   ├── cases/
	│   ├── cvs/
	│   └── equipment/
	├── images/
	├── layouts/
	│   ├── ArticlesPost.astro
	│   ├── CasesPost.astro
	│   └── PostPage.astro
	├── pages/
	│   ├── 404.astro
	│   ├── about.astro
	│   ├── articles/
	│   ├── cases/
	│   ├── contact.astro
	│   ├── cvs/
	│   ├── equipment/
	│   ├── index.astro
	│   ├── privacy-policy.astro
	│   ├── rss.xml.js
	│   └── search.astro
	├── scripts/
	├── styles/
	│   └── global.css
	├── utils/
	│   └── equipment.ts
	├── consts.ts
	└── content.config.ts
```