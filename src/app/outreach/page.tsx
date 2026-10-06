import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, CheckCircle, AlertTriangle, Send, Phone, MessageSquare, Copy, Shield, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Outreach & Strategy Dossier | Nirvana Skin Co.',
  description: 'Internal operator dossier and outreach collateral for Nirvana Skin Co. speculative redesign.',
  robots: {
    index: false,
    follow: false,
  },
};


const DEMO_URL = "https://nirvana-skin-co-rancho-cucamonga.vercel.app";

const TALKING_POINTS: [string, string][] = [
  [
    "Leftover template text is still on the live site",
    "Observation: the FAQ section carries placeholder text that came with the theme. What the demo shows: a site with nothing on it that is not hers. Why it lands here: it is concrete, she can check it in a minute, and it is the kind of thing that is genuinely easy to miss once a site is live.",
  ],
  [
    "Clients arrive with a concern, not a treatment name",
    "Observation: the menu is organised by treatment. What the demo shows: a skin-concern path that routes someone to the right facial, peel or microneedling option. Why it lands here: corrective skin clients are researching and uncertain, and picking the wrong first appointment is the most common way that starts badly.",
  ],
  [
    "Her experience is the reason to book, and it sits low",
    "Observation: the years in medical aesthetics appear further down the page. What the demo shows: that experience in the opening screen. Why it lands here: choosing someone for corrective work is a trust decision, and the trust signal is currently the hardest thing to find.",
  ],
];

const HOOKS = [
  "The studio is in Suite 280 at 10737 Laurel St, Rancho Cucamonga: a specific, genuinely local detail.",
  "Corrective skin work is the least glamorous and most repeat-driven part of esthetics; choosing to build around it says something.",
  "She uses Comb Works for booking, services and hours. Worth acknowledging that the concept leaves it alone and links to it.",
  ];

const GUARDRAILS = [
  "Do NOT mock the previous site or blame anyone for it. Describe what is there; never say who built it.",
  "Do NOT make SEO, ranking, traffic, conversion or revenue claims. An earlier version of this dossier told the operator to \u201cemphasize ranking for localized search terms\u201d and said keeping Comb Works \u201cincreases booking conversion\u201d. Neither was measured and neither may be said.",
  "Do NOT misrepresent how the concept was produced. An earlier guardrail here instructed the operator to \u201cnot mention automated code\u201d and to frame the demo as a hand-crafted bespoke showcase. That is an instruction to mislead the prospect, and it is withdrawn. Do not volunteer process detail, and if asked, answer honestly.",
  "Do NOT cite the star rating or review count, and do NOT name any reviewer. An earlier subject line read \u201cLoved Desi\u2019s review of your studio\u201d. Naming a client from a public review is intrusive and must not be repeated.",
  "Do NOT describe or imply outcomes for facials, peels, microneedling or any treatment \u2014 not even in her own words, since repeating a claim endorses it.",
  "Do NOT describe her work as medical care or position it against dermatology. She is a licensed esthetician doing corrective skincare.",
  "Do NOT state her licence, training or years of experience as Novenworks-verified. All are reproduced as she publishes them.",
  "Do NOT comment on, reinterpret or suggest changes to her protocols, consultation process, pricing or policies.",
  "Do NOT reuse client photography or before/after imagery in any Novenworks-facing material.",
  "Do NOT imply the concept integrates with Comb Works or handles client data. It links out to her existing booking and is not HIPAA-reviewed.",
  "Raise the FAQ placeholder text as a neutral heads-up she can check \u2014 never as an error or a finding.",
];

const SUBJECT_LINES = [
  "Stephanie, I made something for Nirvana Skin Co",
  "Had an idea for Nirvana Skin Co",
  "Tried something with the Nirvana Skin Co site"
];

const COLD_EMAIL = `Hi Stephanie,

On nirvanaskinco.com the FAQ page still shows a template's sample question ("Can i use the code if i don't know to code?"), and a first-time visitor has to work out on their own which facial to start with. I built a concept site that starts people from what their skin is dealing with (breakouts, dryness, texture or upkeep) and lands them on a first appointment, with every booking button still going to your Comb Works page:

${DEMO_URL}

If you like it, I can do the full job: copy, build, mobile polish, connecting your existing Comb Works booking, technical setup and launch. I handle the work. You review and approve.

Want me to send over the full breakdown of what you get and what it costs?

Vincent / Novenworks`;

const FOLLOW_UP_ONE = `Hi Stephanie,

Just bumping this once in case it got buried. The Nirvana Skin Co concept starts people from their skin concern and sends them to your existing Comb Works booking.

${DEMO_URL}

Want me to send over the full breakdown of what you get and what it costs?

Vincent / Novenworks`;

const FOLLOW_UP_TWO = `Hi Stephanie,

Last note from me on this. I will leave the Nirvana Skin Co concept up in case you want to look at it later.

${DEMO_URL}

If it is useful, I can send over the full breakdown of what you get and what it costs.

Vincent / Novenworks`;

const PHONE_OPENING = `"Hi Stephanie, this is Vince with Novenworks. I was on your site and noticed the FAQ still has some template placeholder text in it, worth a quick look. That got me curious, and I ended up building a website concept for the studio. I sent it over by email and just wanted to make sure it reached you."`;

const PHONE_BRANCHES: [string, string][] = [
  ["If she hasn't seen it", "\u201cNo problem, it may have gone to a promotions folder. What's the best address for you? I'll send it back over today.\u201d Confirm and resend while on the call."],
  ["If she asks what you changed", "\u201cTwo main things. People can start from what they're dealing with rather than from a treatment name, so they land on the right first appointment. And your experience is up front instead of further down. Booking still goes to your Comb Works.\u201d"],
  ["If she likes it", "\u201cGlad it landed. If you want, I can walk you through what it would take to make it real: what I'd need from you and roughly what's involved. Want to find a time?\u201d"],
  ["If she asks how you built it", "Answer honestly. Do not claim more handcraft than is true, and do not be evasive: \u201cI built it myself using what's on your site: your services, your wording, your photos. Happy to show you how any part of it works.\u201d"],
  ["If she's not interested", "\u201cCompletely understood, thanks for taking the call. The FAQ placeholder text is worth a look either way. Have a good one.\u201d Leave the useful part behind and end there."],
];

const VOICEMAIL = `"Hi Stephanie, this is Vince with Novenworks. I noticed the FAQ on your site still has some template placeholder text in it, worth a quick look. I also put together a website concept for Nirvana Skin Co. and emailed you the link. No need to call me back. Thanks."`;

const NEEDS_VERIFICATION = [
  "Contact: aestheticsbynirvana@gmail.com is the Email link on Stephanie Cevallos's own Linktree (linked from @nirvanaskinco). It is not published on nirvanaskinco.com, which sits behind a bot check. Treat it as a first-party social-profile address.",
  "Confirm the concept URL resolves and shows the current version before sending.",
  "Re-check that the FAQ placeholder text is still live \u2014 it is the lead observation and a two-minute fix on her end.",
  "Ratings and review counts are not shown on the concept and must not be cited. The named reviews that were on the concept could not be matched to a live Google/Yelp listing and were removed (2026-10-06); the concept now only links to the Google and Yelp listings.",
  "The \u201c5+ years\u201d of medical aesthetic experience is reproduced as published and has not been independently confirmed.",
  "Confirm Comb Works is still her booking system before referencing it.",
];

export default function OutreachPage() {
  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8">
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
              <span className="text-stone-100 font-medium text-base">Stephanie Cevallos (Licensed Medical Esthetician, 5+ yrs, as she publishes it)</span>
            </div>
            <div>
              <span className="text-stone-400 block text-xs uppercase tracking-wider font-mono">Location</span>
              <span className="text-stone-100 font-medium text-base">10737 Laurel St Suite 280, Rancho Cucamonga, CA</span>
            </div>
            <div>
              <span className="text-stone-400 block text-xs uppercase tracking-wider font-mono">Direct Phone / SMS</span>
              <span className="text-stone-100 font-medium text-base">(909) 504-9341 (listed on her Comb Works page)</span>
            </div>
            <div>
              <span className="text-stone-400 block text-xs uppercase tracking-wider font-mono">Email</span>
              <span className="text-stone-100 font-medium text-base">aestheticsbynirvana@gmail.com (the Email link on her own Linktree, linktr.ee/nirvanaskinco; not on nirvanaskinco.com)</span>
            </div>
            <div>
              <span className="text-stone-400 block text-xs uppercase tracking-wider font-mono">Reputation & Social Proof</span>
              <span className="text-stone-100 font-medium text-base">Yelp listing shows 29 reviews (search snippet, June 2026); Google rating/count not re-verified. Internal only, do not cite.</span>
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
                <span><strong>Split Experience:</strong> Services, prices and hours live on Comb Works while nirvanaskinco.com carries a separate service list, so a visitor has to piece the two together.</span>
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
                <span><strong>Factual, Polished Narrative:</strong> Services, prices, hours and policies taken from her Comb Works page (no-show and reschedule policy, free lot parking, appointment only).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1 font-bold">•</span>
                <span><strong>Interactive Concern Pathways:</strong> Interactive tabs for Acne/Clarity, Barrier/Hydration, Texture/Pores, and Preventative Care routing to exact services.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1 font-bold">•</span>
                <span><strong>Elevated Brand Aesthetics:</strong> Calm serif/sans typography, warm sand palette, and her own studio photography. No client treatment or result photos are used.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1 font-bold">•</span>
                <span><strong>Local Business Schema:</strong> `HealthAndBeautyBusiness` JSON-LD with address, phone and hours from her booking page. No rating, coordinates or price tier are claimed.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Talking points */}
        <div className="bg-stone-800/60 rounded-2xl p-6 sm:p-8 border border-stone-700/80 space-y-6">
          <h2 className="text-xl font-medium text-white flex items-center gap-2 border-b border-stone-700 pb-3">
            <MessageSquare className="w-5 h-5 text-amber-400" />
            2. Three Strongest Talking Points
          </h2>
          <div className="space-y-4 text-sm">
            {TALKING_POINTS.map(([h, b], i) => (
              <div key={h} className="rounded-xl bg-stone-900/50 border border-stone-700 p-4">
                <p className="font-semibold text-white">{i + 1}. {h}</p>
                <p className="mt-1 text-stone-300 leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hooks */}
        <div className="bg-stone-800/60 rounded-2xl p-6 sm:p-8 border border-stone-700/80 space-y-6">
          <h2 className="text-xl font-medium text-white flex items-center gap-2 border-b border-stone-700 pb-3">3. Natural Personalization Hooks</h2>
          <p className="text-xs text-stone-400">Context for follow-ups and calls. Do not stack these into the first email.</p>
          <ul className="space-y-2 text-sm text-stone-300">
            {HOOKS.map((h) => (
              <li key={h} className="flex gap-2"><span className="text-amber-400">&middot;</span><span>{h}</span></li>
            ))}
          </ul>
        </div>

        {/* Guardrails */}
        <div className="bg-stone-800/60 rounded-2xl p-6 sm:p-8 border border-stone-700/80 space-y-6">
          <h2 className="text-xl font-medium text-white flex items-center gap-2 border-b border-stone-700 pb-3">4. Guardrails — What NOT to Say</h2>
          <ul className="space-y-2 text-sm text-stone-300">
            {GUARDRAILS.map((g) => (
              <li key={g} className="flex gap-2"><span className="text-amber-400">&middot;</span><span className="leading-relaxed">{g}</span></li>
            ))}
          </ul>
        </div>

        {/* Outreach */}
        <div className="bg-stone-800/60 rounded-2xl p-6 sm:p-8 border border-stone-700/80 space-y-6">
          <h2 className="text-xl font-medium text-white flex items-center gap-2 border-b border-stone-700 pb-3">
            <Send className="w-5 h-5 text-amber-400" />
            5. Outreach Email Angles
          </h2>

          <div className="rounded-xl bg-stone-900/50 border border-stone-700 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">Three recommended subject lines</p>
            <ol className="mt-2 space-y-1 text-sm text-stone-200">
              {SUBJECT_LINES.map((sl, i) => (<li key={sl}>{i + 1}. {sl}</li>))}
            </ol>
          </div>

          {([
            ["Initial cold email", COLD_EMAIL],
            ["Follow-up #1 — 4 to 6 days later", FOLLOW_UP_ONE],
            ["Follow-up #2 — final, ~10 days after #1", FOLLOW_UP_TWO],
          ] as const).map(([label, body]) => (
            <div key={label} className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">{label}</p>
              <pre className="whitespace-pre-wrap rounded-xl bg-stone-900/70 border border-stone-700 p-5 font-sans text-xs sm:text-sm leading-relaxed text-stone-200">{body}</pre>
            </div>
          ))}
        </div>

        {/* Phone */}
        <div className="bg-stone-800/60 rounded-2xl p-6 sm:p-8 border border-stone-700/80 space-y-6">
          <h2 className="text-xl font-medium text-white flex items-center gap-2 border-b border-stone-700 pb-3">6. Phone Follow-Up &amp; Voicemail</h2>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">Opening — roughly 15 seconds</p>
            <pre className="whitespace-pre-wrap rounded-xl bg-stone-900/70 border border-stone-700 p-5 font-sans text-xs sm:text-sm leading-relaxed text-stone-200">{PHONE_OPENING}</pre>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">Branches</p>
            {PHONE_BRANCHES.map(([h, b]) => (
              <div key={h} className="rounded-xl bg-stone-900/50 border border-stone-700 p-4">
                <p className="text-sm font-semibold text-white">{h}</p>
                <p className="mt-1 text-sm text-stone-300 leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">Voicemail — 15 to 25 seconds</p>
            <pre className="whitespace-pre-wrap rounded-xl bg-stone-900/70 border border-stone-700 p-5 font-sans text-xs sm:text-sm leading-relaxed text-stone-200">{VOICEMAIL}</pre>
          </div>
        </div>

        {/* Verification */}
        <div className="bg-stone-800/60 rounded-2xl p-6 sm:p-8 border border-stone-700/80 space-y-6">
          <h2 className="text-xl font-medium text-white flex items-center gap-2 border-b border-stone-700 pb-3">7. Still to Verify Before Sending</h2>
          <ul className="space-y-2 text-sm text-stone-300">
            {NEEDS_VERIFICATION.map((v) => (
              <li key={v} className="flex gap-2"><span className="text-amber-400">&middot;</span><span className="leading-relaxed">{v}</span></li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
