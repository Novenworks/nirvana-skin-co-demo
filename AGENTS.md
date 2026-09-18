# Nirvana Skin Co. — Agent & Architecture Guidelines

## 1. Project Mission & Identity
- **Business**: Nirvana Skin Co.
- **Category**: Facial Spa & Medical Esthetics Studio
- **Location**: 10737 Laurel St Suite 280, Rancho Cucamonga, CA 91730
- **Phone**: (909) 504-9341
- **Lead Practitioner**: Stephanie, Licensed Medical Aesthetician (5+ years experience)
- **Booking Engine**: Comb Works (`https://nirvanaskinco.comb.works/services`)

## 2. Technical Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (Strict Mode)
- **UI & Styling**: Tailwind CSS (Tailwind typography, custom calm sand/stone palette)
- **Icons**: Lucide React
- **Structured Data**: JSON-LD `HealthAndBeautyBusiness` schema with geo-coordinates and weekly operating hours

## 3. Core Architectural Rules
1. **Factual Integrity**: Never invent treatments, medical outcomes, team members, or certifications.
2. **Booking Flow**: All booking links point to Stephanie's official Comb Works portal (`https://nirvanaskinco.comb.works/services`).
3. **Mobile & Viewport Responsiveness**: Design must look immaculate on 1440×900, 1366×768, 390px, and 375px viewports with zero horizontal overflow.
4. **Internal Dossier Isolation**: `/outreach` route must have `noindex, follow: false` robots directives and remain unlinked from public navigation.
