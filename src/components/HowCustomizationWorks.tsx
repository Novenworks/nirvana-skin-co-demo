import React from "react";
import Image from "next/image";
import { Search, Sparkles, Layers, HeartHandshake, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";

const STEPS = [
  {
    number: "01",
    title: "Detailed Consultation & Skin Analysis",
    description:
      "We begin with an unhurried discussion of your lifestyle, current products, and skin concerns. Stephanie analyzes your skin barrier under magnification to identify what your complexion needs that exact day.",
    icon: Search,
  },
  {
    number: "02",
    title: "Dynamic Treatment & Modality Selection",
    description:
      "No preset templates. Your cleansers, enzymes, peeling strength, and professional modalities (such as LED light, ultrasonic infusion, microdermabrasion, or high frequency) are formulated specifically for your tolerance.",
    icon: Layers,
  },
  {
    number: "03",
    title: "Restorative Ritual & Active Therapy",
    description:
      "Enjoy deep relaxation in a private, cozy suite with custom music and refreshments. Extractions and corrective active serums are applied with a gentle, skilled touch.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Take-Home Routine & Feasible Guidance",
    description:
      "Leave with immediate glow, zero judgment, and realistic next steps. Stephanie provides sample products and feasible routine advice to protect and maintain your results between visits.",
    icon: HeartHandshake,
  },
];

export default function HowCustomizationWorks() {
  return (
    <section className="py-16 sm:py-24 bg-sand-50 border-t border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-700 mb-2">
            The Nirvana Philosophy
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-noir-950 font-normal tracking-tight">
            How Custom Skincare Actually Works
          </h2>
          <p className="mt-3 text-sm sm:text-base text-noir-600 leading-relaxed">
            Every face is different, and skin condition changes with seasons, stress, and routine. Here is our step-by-step approach to tailored results.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STEPS.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-sand-200 shadow-sm flex flex-col justify-between relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl font-bold text-sand-400">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-sand-100 flex items-center justify-center text-sage-700">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-medium text-noir-950 mb-2.5 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-noir-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real studio photo showcase strip */}
        <div className="rounded-3xl bg-sand-100/80 border border-sand-200 p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-sage-700">
                Inside The Studio
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-noir-950 mt-1 mb-3">
                A private sanctuary built for your comfort.
              </h3>
              <p className="text-xs sm:text-sm text-noir-700 leading-relaxed mb-6">
                From personalized playlists to soothing heated beds and complimentary beverages, every detail at Nirvana Skin Co. is designed to make advanced skincare feel peaceful, restorative, and completely comfortable.
              </p>

              <div className="space-y-2 text-xs sm:text-sm text-noir-800 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sage-600 flex-shrink-0" />
                  <span>Private 1-on-1 sessions with Stephanie</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sage-600 flex-shrink-0" />
                  <span>Custom aroma, lighting & music settings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sage-600 flex-shrink-0" />
                  <span>Complimentary refreshments & skincare samples</span>
                </div>
              </div>

              <a
                href={BUSINESS_INFO.combBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-6 py-3 rounded-xl bg-noir-900 hover:bg-noir-950 text-sand-50 text-xs sm:text-sm font-semibold transition"
              >
                Schedule Your Treatment
              </a>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-md border border-sand-200">
                <Image
                  src="/images/studio-room-1.jpg"
                  alt="Nirvana Skin Co. treatment suite in Rancho Cucamonga"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-md border border-sand-200">
                <Image
                  src="/images/studio-room-2.jpg"
                  alt="Nirvana Skin Co. cozy treatment room setup"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
