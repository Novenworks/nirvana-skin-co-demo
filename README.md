# Nirvana Skin Co. — Speculative Brand Redesign & Web Platform

> **Disclaimer**: This project is a speculative redesign concept crafted to showcase modern web architecture, localized SEO, and high-conversion client pathways for Nirvana Skin Co. in Rancho Cucamonga, CA. It is not an officially commissioned site unless adopted by the business owner.

## Overview
A bespoke Next.js 15 web platform built for **Nirvana Skin Co.**, a premier facial and clinical esthetics studio located in Rancho Cucamonga, CA, founded by Stephanie (Licensed Medical Aesthetician).

### Key Features
- **Skin Concern Pathways**: Interactive diagnostic pathways matching clients to targeted corrective treatments (Acne, Barrier Repair, Texture/Anti-Aging, Maintenance).
- **First-Party Visual Asset Integration**: High-resolution studio photography, provider portraits, and hands-on treatment imagery.
- **Transparent Menu & Pricing**: Complete duration and pricing breakdown ($50–$400) directly linked to Stephanie's official Comb Works booking calendar.
- **Local SEO & Schema**: Native `HealthAndBeautyBusiness` JSON-LD schema with exact latitude/longitude coordinates, business hours, and contact details.
- **Operator Dossier**: Unlinked, `noindex` `/outreach` route containing audit insights, talking points, and outreach sequences.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Hosting / Deployment**: Vercel

## Local Development
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure
```
src/
├── app/
│   ├── layout.tsx         # Root layout with JSON-LD schema
│   ├── page.tsx           # High-conversion homepage
│   ├── services/page.tsx  # Categorized service menu
│   ├── about/page.tsx     # Stephanie bio & studio tour
│   ├── faq/page.tsx       # Policies, prep, and FAQ
│   └── outreach/page.tsx  # Internal operator dossier (noindex)
├── components/            # Modular UI components
└── lib/
    └── data.ts            # Central factual business database
```
