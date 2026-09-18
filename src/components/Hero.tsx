import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, ShieldCheck, Star, MapPin, Sparkles } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 lg:pb-20 overflow-hidden bg-gradient-to-b from-sand-100/70 via-sand-50 to-sand-50">
      {/* Subtle organic background aura */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-sand-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Column: Value proposition, headline, CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-sand-200/70 border border-sand-300 text-noir-800 text-xs font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-sage-500 animate-pulse" />
              <span>Rancho Cucamonga's Private Skincare Studio</span>
              <span className="text-sand-400">•</span>
              <span className="flex items-center gap-1 font-semibold text-noir-950">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                4.9 Rating
              </span>
            </div>

            {/* Approved Hero Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-noir-950 font-normal editorial-title tracking-tight text-balance">
              Skincare, customized to where you are now.
            </h1>

            {/* Supporting Copy */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-noir-700 leading-relaxed max-w-2xl font-sans text-balance">
              {BUSINESS_INFO.supportingCopy}
            </p>

            {/* Primary & Secondary Conversion CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href={BUSINESS_INFO.combBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl bg-noir-950 hover:bg-noir-900 text-sand-50 font-medium text-sm sm:text-base shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2.5 group"
              >
                <Calendar className="w-4 h-4 text-sand-300 group-hover:scale-110 transition-transform" />
                <span>Book a Facial or Consultation</span>
                <ArrowRight className="w-4 h-4 text-sand-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                href="/#concerns"
                className="px-6 py-3.5 rounded-xl bg-sand-100 hover:bg-sand-200/80 border border-sand-300 text-noir-900 font-medium text-sm sm:text-base transition-colors flex items-center justify-center gap-2"
              >
                <span>Find Your Pathway</span>
              </Link>
            </div>

            {/* Micro Highlights */}
            <div className="mt-6 sm:mt-8 pt-5 border-t border-sand-200/80 grid grid-cols-3 gap-2 sm:gap-4 text-noir-700 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sage-600 flex-shrink-0" />
                <span>Licensed Medical Aesthetician</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sage-600 flex-shrink-0" />
                <span>Zero Judgment Consultations</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sage-600 flex-shrink-0" />
                <span>Suite 280 · Free Parking</span>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Curated high-res imagery showcase */}
          <div className="lg:col-span-5 relative mt-2 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Frame */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-sand-200 bg-sand-200">
                <Image
                  src="/images/facial-treatment-1.png"
                  alt="Nirvana Skin Co. customized facial treatment in Rancho Cucamonga"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
                
                {/* Visual badge card */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-sand-50/95 backdrop-blur-md border border-sand-200/90 shadow-lg text-noir-900">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold text-noir-600">
                        Lead Specialist & Founder
                      </p>
                      <p className="font-serif text-base sm:text-lg font-medium text-noir-950">
                        Stephanie · 5+ Yrs Advanced Experience
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-sage-100 text-sage-700 text-xs font-semibold">
                      Private Suite
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating review trust card */}
              <div className="hidden sm:block absolute -top-4 -left-6 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-sand-200 shadow-xl max-w-[210px]">
                <div className="flex items-center gap-1 text-amber-500 mb-1">
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i} className="text-xs">★</span>
                  ))}
                </div>
                <p className="text-xs text-noir-700 italic leading-snug">
                  "My skin is glowing and I feel so confident bare-faced!"
                </p>
                <p className="text-[10px] font-semibold text-noir-900 mt-1">
                  — Desi A. · Verified Client
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
