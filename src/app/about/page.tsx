import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Award, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export const metadata = {
  title: 'About Stephanie & Nirvana Skin Co. | Rancho Cucamonga Aesthetician',
  description: 'Meet Stephanie, Licensed Medical Aesthetician with 5+ years of experience specializing in custom corrective facials, chemical peels, and microneedling in Rancho Cucamonga.',
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Header */}
      <section className="bg-sand-100 py-16 md:py-24 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-50 border border-sand-300 text-stone-700 text-xs font-medium uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-stone-500" />
              Meet Your Aesthetician
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-900 font-light tracking-tight leading-tight">
              Clinical expertise meets a calm, restorative environment.
            </h1>
            <p className="mt-6 text-lg text-stone-600 font-sans leading-relaxed">
              Founded by Stephanie in Rancho Cucamonga, Nirvana Skin Co. was created to move away from assembly-line facials and toward high-touch, customized clinical skincare that adapts to your life.
            </p>
          </div>
        </div>
      </section>

      {/* Stephanie Bio & Journey */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/stephanie-portrait.png"
                  alt="Stephanie - Licensed Medical Aesthetician at Nirvana Skin Co."
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-sand-200 hidden sm:block max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-sand-200 flex items-center justify-center text-stone-800">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-stone-900">5+ Years Experience</div>
                    <div className="text-xs text-stone-500">Medical Esthetics & Peels</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4">
                <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-light">
                  Hi, I’m Stephanie.
                </h2>
                <p className="text-stone-700 leading-relaxed text-base sm:text-lg">
                  As a Licensed Medical Aesthetician with over five years of hands-on experience, I’ve worked with skin at every stage—from stubborn hormonal breakouts and barrier fatigue to post-inflammatory hyperpigmentation and early signs of aging.
                </p>
                <p className="text-stone-700 leading-relaxed text-base sm:text-lg">
                  I believe that glowing, healthy skin shouldn’t require harsh, aggressive over-treatment or complicated 12-step routines that you dread doing. Instead, every appointment in my Rancho Cucamonga studio is a collaborative partnership.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-sand-200">
                <div className="p-5 rounded-2xl bg-sand-100/60 border border-sand-200">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-stone-800 mb-3 shadow-sm">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-stone-900 mb-1">Barrier-First Care</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    We never compromise your skin barrier for short-term quick fixes. Long-term cellular health comes first.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-sand-100/60 border border-sand-200">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-stone-800 mb-3 shadow-sm">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-stone-900 mb-1">Private 1-on-1 Studio</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    A peaceful, serene suite where you have Stephanie’s undivided attention for the entirety of your treatment.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  href={BUSINESS_INFO.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-stone-900 text-cream-50 hover:bg-stone-800 transition font-medium text-sm shadow-md"
                >
                  <span>Book with Stephanie</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white text-stone-900 hover:bg-sand-100 border border-sand-300 transition font-medium text-sm"
                >
                  Call {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Space & Atmosphere */}
      <section className="py-16 md:py-24 bg-sand-100/50 border-y border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-light">
              Inside the Rancho Cucamonga Studio
            </h2>
            <p className="mt-4 text-stone-600">
              Located conveniently in Rancho Cucamonga at 10737 Laurel St (Suite 280), designed with tranquil warmth, medical sanitation, and plush comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md group">
              <Image
                src="/images/studio-room-1.jpg"
                alt="Nirvana Skin Co studio room interior"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent flex items-end p-6">
                <span className="text-white text-sm font-medium font-serif">Treatment Suite & Heated Bed</span>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md group">
              <Image
                src="/images/studio-room-2.jpg"
                alt="Nirvana Skin Co consultation and treatment station"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent flex items-end p-6">
                <span className="text-white text-sm font-medium font-serif">Clinical Formulations & Modalities</span>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md group">
              <Image
                src="/images/facial-treatment-2.png"
                alt="Hands-on facial treatment with Stephanie"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent flex items-end p-6">
                <span className="text-white text-sm font-medium font-serif">High-Touch Aesthetic Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Principles */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-light">
              Our Core Standards
            </h2>
            <p className="mt-3 text-stone-600">
              What sets appointments at Nirvana Skin Co. apart from conventional day spas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 p-6 rounded-2xl bg-white border border-sand-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-sand-200 flex items-center justify-center shrink-0 text-stone-900 font-serif font-semibold text-sm">
                1
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium text-stone-900 mb-1">Custom In-Session Analysis</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  We don’t execute a rigid script. We look closely at hydration, congestion, inflammation, and seasonal shifts during your double cleanse before selecting active treatments.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-2xl bg-white border border-sand-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-sand-200 flex items-center justify-center shrink-0 text-stone-900 font-serif font-semibold text-sm">
                2
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium text-stone-900 mb-1">Clear Pricing & No Hidden Upsells</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Modalities such as LED therapy, high frequency, enzyme exfoliation, and custom serums are thoughtfully included in your facial duration, not tacked on as surprise add-ons.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-2xl bg-white border border-sand-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-sand-200 flex items-center justify-center shrink-0 text-stone-900 font-serif font-semibold text-sm">
                3
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium text-stone-900 mb-1">Medical-Grade Hygiene</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Hospital-grade disinfection protocols, disposable single-use micro-needling tips, and sanitary studio practices ensure your safety at every touchpoint.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-2xl bg-white border border-sand-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-sand-200 flex items-center justify-center shrink-0 text-stone-900 font-serif font-semibold text-sm">
                4
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium text-stone-900 mb-1">Sustainable Home Routines</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  You’ll receive practical, low-fuss home care advice that fits your budget and lifestyle, maintaining your post-facial glow between visits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
