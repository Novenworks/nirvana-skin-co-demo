# Asset Plan: Nirvana Skin Co.

## Strategy & Optimization Architecture

### 1. Visual Identity Principles
- **Atmosphere**: Warm Sand, Calming Cream, and Deep Charcoal/Noir palette reflective of a tranquil medical esthetics studio.
- **Typography**: Classic serif headings (`Cinzel` / `Playfair Display`) paired with clean, accessible sans-serif body copy (`Plus Jakarta Sans`).
- **Asset Hierarchy**:
  1. *Hero & Above-the-Fold*: High-definition facial treatment and Stephanie’s portrait to immediately establish human connection and clinical credibility.
  2. *Interactive Pathways*: Visual concern icons and service previews.
  3. *Studio Validation*: Real interior photos of Suite 280 showing the heated treatment bed and sanitized prep counters.

### 2. Performance & Compression
- All images delivered via Next.js `next/image` with optimized responsive `sizes` attributes and `priority` flags on above-the-fold elements.
- WebP and PNG formats with proper aspect ratios to prevent Cumulative Layout Shift (CLS).

### 3. Future Asset Roadmap
- **Client Before & After Case Studies**: Add high-resolution clinical documentation of multi-session peel/acne journeys with explicit client consent.
- **Short-Form Video Reels**: Embed background ambient video of facial massage or enzyme foaming in the Studio Experience section.
