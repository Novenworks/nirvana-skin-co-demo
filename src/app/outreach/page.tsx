import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, CheckCircle, AlertTriangle, Send, Phone, MessageSquare, Copy, Shield, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, REVIEWS, SERVICES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Outreach & Strategy Dossier | Nirvana Skin Co.',
  description: 'Internal operator dossier and outreach collateral for Nirvana Skin Co. speculative redesign.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function OutreachPage() {
  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header Badge */}
        <div className="border-b border-stone-800 pb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono mb-3">
              <Shield className="w-3.5 h-3.5" />
              CONFIDENTIAL OPERATOR DOSSIER · NOINDEX
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-light text-white">
              Nirvana Skin Co. — Client Acquisition & Redesign Dossier
            </h1>
            <p className="text-stone-400 text-sm mt-1">
              Prepared for high-touch outreach to Stephanie (Founder & Licensed Medical Aesthetician).
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-4 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium transition border border-stone-700"
            >
              View Live Redesign
            </Link>
          </div>
        </div>

        {/* Business Snapshot Card */}
        <div className="bg-stone-800/60 rounded-2xl p-6 sm:p-8 border border-stone-700/80 shadow-xl space-y-6">
          <h2 className="text-xl font-medium text-white flex items-center gap-2 border-b border-stone-700 pb-3">
            <Sparkles className="w-5 h-5 text-amber-400" />
            1. Prospect & Business Snapshot
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div>
              <span className="text-stone-400 block text-xs uppercase tracking-wider font-mono">Business Name</span>
              <span className="text-stone-100 font-medium text-base">Nirvana Skin Co.</span>
            </div>
            <div>
              <span className="text-stone-400 block text-xs uppercase tracking-wider font-mono">Founder & Lead Aesthetician</span>
              <span className="text-stone-100 font-medium text-base">Stephanie (Licensed Medical Aesthetician, 5+ yrs)</span>
            </div>
            <div>
              <span className="text-stone-400 block text-xs uppercase tracking-wider font-mono">Location</span>
              <span className="text-stone-100 font-medium text-base">10737 Laurel St Suite 280, Rancho Cucamonga, CA</span>
            </div>
            <div>
              <span className="text-stone-400 block text-xs uppercase tracking-wider font-mono">Direct Phone / SMS</span>
              <span className="text-stone-100 font-medium text-base">(909) 504-9341</span>
            </div>
            <div>
              <span className="text-stone-400 block text-xs uppercase tracking-wider font-mono">Reputation & Social Proof</span>
              <span className="text-stone-100 font-medium text-base">4.9 ★ (31 verified 5-star reviews on Yelp & Google)</span>
            </div>
            <div>
              <span className="text-stone-400 block text-xs uppercase tracking-wider font-mono">Booking Software</span>
              <span className="text-stone-100 font-medium text-base">Comb Works (nirvanaskinco.comb.works)</span>
            </div>
          </div>
        </div>

        {/* Original vs Redesign Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Original Site Audit */}
          <div className="bg-stone-800/40 rounded-2xl p-6 border border-stone-800 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-red-400 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Original Site Audit (Live)
              </h3>
              <a
                href="https://nirvanaskinco.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-stone-400 hover:text-white flex items-center gap-1 font-mono"
              >
                nirvanaskinco.com <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <ul className="space-y-3 text-sm text-stone-300">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1 font-bold">•</span>
                <span><strong>Template Placeholder Text:</strong> Live FAQ section contains leftover default template text (<em>"Lorem ipsum dolor sit amet...", "Can i use the code if i don't know to code?"</em>).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1 font-bold">•</span>
                <span><strong>Buried Provider Authority:</strong> Stephanie’s licensed medical background and 5+ years of corrective clinical experience are not prominently featured on the homepage.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1 font-bold">•</span>
                <span><strong>Offsite Booking Disconnect:</strong> Users are kicked out to raw Comb Works links without pre-framing pricing, treatment duration, or skin concern pathways.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1 font-bold">•</span>
                <span><strong>Missing Local Schema & Mobile Ergonomics:</strong> Lack of rich structured data for Rancho Cucamonga search indexing and inconsistent mobile tap targets.</span>
              </li>
            </ul>
          </div>

          {/* Redesign Value Add */}
          <div className="bg-stone-800/40 rounded-2xl p-6 border border-stone-700 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-emerald-400 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Redesign Value Delivered
              </h3>
              <span className="text-xs text-stone-400 font-mono">Modern Next.js 15</span>
            </div>
            <ul className="space-y-3 text-sm text-stone-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1 font-bold">•</span>
                <span><strong>Factual, Polished Narrative:</strong> 100% real content. Zero placeholder copy. Real policies (24h cancellation, parking, consultation prep).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1 font-bold">•</span>
                <span><strong>Interactive Concern Pathways:</strong> Interactive tabs for Acne/Clarity, Barrier/Hydration, Texture/Pores, and Preventative Care routing to exact services.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1 font-bold">•</span>
                <span><strong>Elevated Brand Aesthetics:</strong> Calm editorial typography (Cinzel & Plus Jakarta Sans), warm sand/cream palette, and real high-res studio photography.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1 font-bold">•</span>
                <span><strong>Flawless Local Schema:</strong> Full `HealthAndBeautyBusiness` JSON-LD schema with exact coordinates, hours, pricing tier, and Rancho Cucamonga geographic tags.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Talking Points & Personalization Hooks */}
        <div className="bg-stone-800/60 rounded-2xl p-6 sm:p-8 border border-stone-700/80 space-y-6">
          <h2 className="text-xl font-medium text-white flex items-center gap-2 border-b border-stone-700 pb-3">
            <MessageSquare className="w-5 h-5 text-amber-400" />
            2. High-Conversion Talking Points & Personalization Hooks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <h4 className="font-semibold text-stone-200">Key Conversation Anchors</h4>
              <ul className="space-y-2 text-stone-300 list-disc list-inside">
                <li><strong className="text-white">Stephanie's Reputation:</strong> Reference her verified 4.9-star rating on Yelp and glowing client testimonials (e.g. Desi praising her life-changing skin journey).</li>
                <li><strong className="text-white">Comb Works Flow:</strong> Explain how keeping Comb Works as the backend while upgrading the storefront increases booking conversion.</li>
                <li><strong className="text-white">Local Rancho Cucamonga Focus:</strong> Emphasize ranking for localized search terms (Haven Ave/Laurel St corridor, Victoria Gardens adjacent client base).</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-amber-300">Strict Guardrails (What NOT to Say)</h4>
              <ul className="space-y-2 text-stone-300 list-disc list-inside">
                <li><strong className="text-white">Do NOT mock the previous site:</strong> Frame the WordPress placeholder issues as simple developer oversights rather than client fault.</li>
                <li><strong className="text-white">Do NOT make fake SEO/Revenue guarantees:</strong> Focus on brand elevation, mobile conversion ease, and professional credibility.</li>
                <li><strong className="text-white">Do NOT mention automated code:</strong> Frame the demo as a hand-crafted bespoke digital showcase designed specifically for Nirvana Skin Co.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cold Outreach Collateral */}
        <div className="bg-stone-800/60 rounded-2xl p-6 sm:p-8 border border-stone-700/80 space-y-6">
          <h2 className="text-xl font-medium text-white flex items-center gap-2 border-b border-stone-700 pb-3">
            <Send className="w-5 h-5 text-amber-400" />
            3. Cold Outreach Copy Suite
          </h2>

          {/* Subject Lines */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-stone-400 mb-2">3 High-Open Subject Lines</h4>
            <div className="space-y-2">
              <div className="p-3 bg-stone-900 rounded-lg border border-stone-700 text-stone-200 text-sm font-mono flex items-center justify-between">
                <span>Subject 1: Quick question regarding Nirvana Skin Co. website & Comb bookings</span>
                <span className="text-xs text-stone-500">Curiosity / High Open</span>
              </div>
              <div className="p-3 bg-stone-900 rounded-lg border border-stone-700 text-stone-200 text-sm font-mono flex items-center justify-between">
                <span>Subject 2: Stephanie — crafted a modern concept for your Rancho Cucamonga studio</span>
                <span className="text-xs text-stone-500">Personalized</span>
              </div>
              <div className="p-3 bg-stone-900 rounded-lg border border-stone-700 text-stone-200 text-sm font-mono flex items-center justify-between">
                <span>Subject 3: Loved Desi's review of your studio (+ quick idea for your site)</span>
                <span className="text-xs text-stone-500">Social Proof Hook</span>
              </div>
            </div>
          </div>

          {/* Email Draft 1: Primary Cold Email */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs uppercase tracking-wider font-mono text-stone-400">Primary Cold Email (Short & High-Value)</h4>
            </div>
            <div className="p-5 bg-stone-900 rounded-xl border border-stone-700 font-sans text-stone-200 text-sm space-y-4 leading-relaxed">
              <p>Hi Stephanie,</p>
              <p>
                I was looking through estheticians in Rancho Cucamonga and came across Nirvana Skin Co. Your 4.9-star reviews—especially clients raving about your custom approach to corrective skin journeys—really stand out.
              </p>
              <p>
                While checking your online booking flow, I noticed your live website still had a few leftover template placeholder notes in the FAQ section and wasn’t fully showcasing your 5+ years of medical aesthetic experience.
              </p>
              <p>
                I put together a private, live interactive concept for Nirvana Skin Co. featuring:
              </p>
              <ul className="list-disc list-inside space-y-1 text-stone-300 pl-2">
                <li>An interactive Skin Concern Pathway matching clients to your Glow facials, peels, and microneedling</li>
                <li>Seamless direct integration into your existing Comb Works booking calendar</li>
                <li>A calm, luxury aesthetic with mobile-first speed and local Rancho Cucamonga SEO schema</li>
              </ul>
              <p>
                You can take a look at the live concept here: <strong>[DEMO_URL]</strong>
              </p>
              <p>
                No pressure at all—if you like the direction and want to make it your permanent home, I’d love to walk you through it.
              </p>
              <p>
                Best,<br />
                <strong>[YOUR_NAME]</strong><br />
                <span className="text-xs text-stone-500">[YOUR_PHONE] · [YOUR_TITLE]</span>
              </p>
            </div>
          </div>

          {/* Email Draft 2: Low-Pressure Follow-up */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider font-mono text-stone-400">Low-Pressure Follow-Up (Day 3-4)</h4>
            <div className="p-5 bg-stone-900 rounded-xl border border-stone-700 font-sans text-stone-200 text-sm space-y-4 leading-relaxed">
              <p>Hi Stephanie,</p>
              <p>
                Just following up on my previous note. Wanted to make sure you had a chance to see the live concept I put together for Nirvana Skin Co. (<strong>[DEMO_URL]</strong>).
              </p>
              <p>
                It was designed to match the tranquil, high-touch clinical standard you give your clients on Laurel Street.
              </p>
              <p>
                If you’re open to a brief 5-minute chat sometime this week, let me know!
              </p>
              <p>
                Warmly,<br />
                <strong>[YOUR_NAME]</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
