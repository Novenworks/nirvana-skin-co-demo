import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, Heart, Sparkles, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";

export default function ProviderStory() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-t border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Authentic Portrait Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border border-sand-200 bg-sand-200">
                <Image
                  src="/images/stephanie-portrait.png"
                  alt="Stephanie, Licensed Medical Aesthetician and Founder of Nirvana Skin Co."
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              {/* Floating credential badge */}
              <div className="absolute -bottom-5 right-4 sm:right-6 p-4 rounded-2xl bg-sand-50 border border-sand-200 shadow-xl max-w-[240px]">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-sage-700 flex-shrink-0" />
                  <span className="text-xs font-bold text-noir-950 uppercase tracking-wide">
                    Licensed Specialist
                  </span>
                </div>
                <p className="text-xs text-noir-600 font-medium">
                  5+ years clinical esthetics and advanced facial protocols
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-700 mb-2">
              Meet Your Specialist
            </p>
            
            <h2 className="font-serif text-3xl sm:text-4xl text-noir-950 font-normal tracking-tight mb-4">
              "Skincare is a personal journey, not a standardized checklist."
            </h2>

            <p className="text-sm sm:text-base text-noir-700 leading-relaxed mb-4">
              Nirvana Skin Co. was founded by <strong>Stephanie</strong>, a Licensed Medical Aesthetician with over five years of dedicated experience in advanced clinical skincare. 
            </p>

            <p className="text-xs sm:text-sm text-noir-600 leading-relaxed mb-6">
              Having guided hundreds of clients through challenging skin concerns—including stubborn breakouts, sun damage, dryness, texture changes, and sensitive skin barriers—Stephanie’s mission is to make professional skincare accessible, easy to understand, and deeply relaxing. You will never feel judged for past skincare habits or sold unnecessary products.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-5 border-y border-sand-200 mb-8">
              <div className="flex items-start gap-2.5">
                <Heart className="w-4 h-4 text-clay-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-noir-950 uppercase tracking-wide">Empathetic Care</h4>
                  <p className="text-[11px] text-noir-600 mt-0.5 leading-snug">
                    Comfortable, supportive, and completely unhurried.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-sage-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-noir-950 uppercase tracking-wide">Clinical Precision</h4>
                  <p className="text-[11px] text-noir-600 mt-0.5 leading-snug">
                    Targeted enzymes, peels, and modalities matched to your skin.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-noir-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-noir-950 uppercase tracking-wide">Honest Advice</h4>
                  <p className="text-[11px] text-noir-600 mt-0.5 leading-snug">
                    Realistic steps and feasible routines you can maintain.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={BUSINESS_INFO.combBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-noir-950 hover:bg-noir-900 text-sand-50 text-xs sm:text-sm font-semibold transition flex items-center gap-2"
              >
                <span>Book With Stephanie</span>
                <ArrowRight className="w-4 h-4 text-sand-300" />
              </a>

              <Link
                href="/about"
                className="text-xs sm:text-sm font-semibold text-noir-800 hover:text-noir-950 hover:underline"
              >
                Read full bio & studio story →
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
