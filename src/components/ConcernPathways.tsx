"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Droplets, Layers, Smile, ArrowRight, Check } from "lucide-react";
import { CONCERN_PATHWAYS, SERVICES, BUSINESS_INFO } from "@/lib/data";

const ICON_MAP = {
  Sparkles: Sparkles,
  Droplets: Droplets,
  Layers: Layers,
  Smile: Smile,
};

export default function ConcernPathways() {
  const [activeConcernId, setActiveConcernId] = useState<string>("clarity");

  const activePathway =
    CONCERN_PATHWAYS.find((p) => p.id === activeConcernId) || CONCERN_PATHWAYS[0];

  const matchedServices = SERVICES.filter((s) =>
    activePathway.suggestedServices.includes(s.id)
  );

  return (
    <section id="concerns" className="py-16 sm:py-24 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-700 mb-2">
            Targeted Skin Guidance
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-noir-950 font-normal tracking-tight">
            Start by what your skin needs today.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-noir-600 leading-relaxed">
            Professional skincare shouldn't feel confusing or overwhelming. Choose your primary focus below to explore the recommended facial pathways and clinical modalities.
          </p>
        </div>

        {/* Concern Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {CONCERN_PATHWAYS.map((pathway) => {
            const IconComponent = ICON_MAP[pathway.icon as keyof typeof ICON_MAP] || Sparkles;
            const isActive = pathway.id === activeConcernId;

            return (
              <button
                key={pathway.id}
                onClick={() => setActiveConcernId(pathway.id)}
                className={`p-5 rounded-2xl text-left transition-all duration-200 flex flex-col justify-between border ${
                  isActive
                    ? "bg-noir-950 text-sand-50 border-noir-950 shadow-md scale-[1.02]"
                    : "bg-white hover:bg-sand-100/80 text-noir-900 border-sand-200"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isActive ? "bg-noir-800 text-sand-200" : "bg-sand-100 text-sage-700"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  {isActive && (
                    <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-sage-600 text-white">
                      Selected
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-serif text-base sm:text-lg font-medium leading-snug">
                    {pathway.name}
                  </h3>
                  <p
                    className={`mt-1 text-xs leading-relaxed ${
                      isActive ? "text-sand-300" : "text-noir-600"
                    }`}
                  >
                    {pathway.summary}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pathway Detail Box */}
        <div className="bg-white rounded-3xl border border-sand-200 p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Pathway Info */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-semibold tracking-widest text-sage-700">
                  Pathway Focus
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-noir-950 mt-1 mb-3">
                  {activePathway.name}
                </h3>
                <p className="text-sm text-noir-700 leading-relaxed mb-6">
                  {activePathway.description}
                </p>

                <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-noir-800">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-sage-600 flex-shrink-0" />
                    <span>In-depth assessment before any treatment starts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-sage-600 flex-shrink-0" />
                    <span>Modalities matched to skin tolerance & sensitivity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-sage-600 flex-shrink-0" />
                    <span>Personalized routine tips & sample aftercare provided</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-sand-100 flex items-center gap-4">
                <a
                  href={BUSINESS_INFO.combBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-noir-900 hover:bg-noir-950 text-sand-50 text-xs sm:text-sm font-semibold transition flex items-center gap-2"
                >
                  <span>Book This Pathway</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <Link
                  href="/services"
                  className="text-xs sm:text-sm font-semibold text-noir-800 hover:text-noir-950 hover:underline"
                >
                  View full menu →
                </Link>
              </div>
            </div>

            {/* Matched Services Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {matchedServices.map((service) => (
                <div
                  key={service.id}
                  className="p-5 rounded-2xl border border-sand-200 bg-sand-50/70 hover:bg-sand-100/80 transition-colors flex flex-col justify-between"
                >
                  <div>
                    {service.badge && (
                      <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-sand-200 text-noir-800 mb-2">
                        {service.badge}
                      </span>
                    )}
                    <h4 className="font-serif text-lg font-medium text-noir-950">
                      {service.name}
                    </h4>
                    <div className="flex items-center gap-2 text-xs font-semibold text-noir-600 mt-1 mb-2">
                      <span>{service.duration}</span>
                      <span>•</span>
                      <span className="text-noir-900 font-bold">{service.price}</span>
                    </div>
                    <p className="text-xs text-noir-700 line-clamp-3 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-sand-200/80 flex items-center justify-between">
                    <a
                      href={service.combBookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-noir-950 hover:text-sage-700 flex items-center gap-1"
                    >
                      <span>Reserve service</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
