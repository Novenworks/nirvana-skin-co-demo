import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Check, Gift, ShieldAlert, Award, Star } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";

export default function StudioExperience() {
  return (
    <section className="py-16 sm:py-24 bg-sand-100/50 border-t border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Studio Quality & Membership */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-700 mb-2">
              Elevated Care & Membership
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-noir-950 font-normal tracking-tight mb-4">
              Professional Skincare, Tailored Aftercare
            </h2>
            <p className="text-sm sm:text-base text-noir-700 leading-relaxed mb-6">
              Great skin doesn't end when you leave the studio. Every facial concludes with personalized product guidance and complimentary take-home samples so your barrier stays nourished and glowing between visits.
            </p>

            {/* Membership Box */}
            <div className="p-6 rounded-3xl bg-white border border-sand-300/80 shadow-sm mb-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Gift className="w-5 h-5 text-sage-700" />
                  <h3 className="font-serif text-lg font-bold text-noir-950">
                    Nirvana Studio Membership
                  </h3>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-sand-200 text-noir-950">
                  $400 / Year
                </span>
              </div>
              <p className="text-xs text-noir-600 leading-relaxed mb-4">
                Maintain consistent, year-round skin health with exclusive savings across every appointment and clinical product.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-noir-800">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-sage-600 flex-shrink-0" />
                  <span>20% Off All Services</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-sage-600 flex-shrink-0" />
                  <span>15% Off All Products</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={BUSINESS_INFO.combBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-noir-950 hover:bg-noir-900 text-sand-50 text-xs sm:text-sm font-semibold transition"
              >
                Join Membership or Book
              </a>
              <a
                href={`sms:${BUSINESS_INFO.phoneNumeric}`}
                className="text-xs sm:text-sm font-semibold text-noir-800 hover:text-noir-950 hover:underline"
              >
                Ask Stephanie a Question →
              </a>
            </div>
          </div>

          {/* Right Column: Visual treatment room & products */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-sand-200">
              <Image
                src="/images/facial-treatment-2.png"
                alt="Professional facial therapy and active serums at Nirvana Skin Co."
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-sand-200 mt-6">
              <Image
                src="/images/facial-treatment-3.png"
                alt="Targeted modalities and soothing masks at Nirvana Skin Co."
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
