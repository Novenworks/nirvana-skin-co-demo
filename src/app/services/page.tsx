import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Clock, Calendar, Check, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { SERVICES, BUSINESS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Treatments & Pricing | Nirvana Skin Co. Rancho Cucamonga",
  description:
    "Explore our complete menu of personalized facials, clinical chemical peels, microneedling, and teeth whitening in Rancho Cucamonga, CA.",
};

export default function ServicesPage() {
  const facials = SERVICES.filter((s) => s.category === "facials" || s.category === "consultation");
  const corrective = SERVICES.filter((s) => s.category === "corrective");
  const specialty = SERVICES.filter((s) => s.category === "body" || s.category === "teeth");

  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-700 mb-2 block">
            Complete Treatment Menu
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-noir-950 font-normal tracking-tight">
            Personalized Facials & Advanced Esthetics
          </h1>
          <p className="mt-4 text-sm sm:text-base text-noir-700 leading-relaxed">
            Every session at Nirvana Skin Co. is customized to your skin's immediate condition. Below is our transparent service list, duration, and pricing.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sand-200/70 border border-sand-300 text-xs font-medium text-noir-900">
            <Sparkles className="w-3.5 h-3.5 text-sage-700" />
            <span>First time? We recommend the <strong>New Client Consultation ($50)</strong> or <strong>Nirvana Glow 60 ($200)</strong></span>
          </div>
        </div>

        {/* Section 1: Facials & Consultations */}
        <div className="mb-20">
          <div className="border-b border-sand-200 pb-4 mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl text-noir-950">
              Personalized Facial Treatments
            </h2>
            <p className="text-xs sm:text-sm text-noir-600 mt-1">
              Custom skin therapy designed to restore balance, deep hydration, and clean radiance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {facials.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl border border-sand-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      {service.badge && (
                        <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-sand-200 text-noir-900 mb-2">
                          {service.badge}
                        </span>
                      )}
                      <h3 className="font-serif text-xl sm:text-2xl font-medium text-noir-950">
                        {service.name}
                      </h3>
                      <p className="text-xs text-sage-800 font-medium mt-0.5">
                        {service.tagline}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg sm:text-xl font-bold font-sans text-noir-950 block">
                        {service.price}
                      </span>
                      <span className="text-xs text-noir-500 flex items-center justify-end gap-1 mt-0.5">
                        <Clock className="w-3 h-3" />
                        {service.duration}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-noir-700 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="pt-4 border-t border-sand-100">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-noir-500 mb-2">
                      Included Modalities & Steps:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.modalitiesIncluded.map((mod, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2.5 py-1 rounded-lg bg-sand-100 text-noir-800 font-medium"
                        >
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-sand-100 flex items-center justify-between">
                  <a
                    href={service.combBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-xl bg-noir-950 hover:bg-noir-900 text-sand-50 text-xs sm:text-sm font-semibold transition flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-sand-300" />
                    <span>Book on Comb</span>
                  </a>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneNumeric}`}
                    className="text-xs font-semibold text-noir-700 hover:text-noir-950"
                  >
                    Questions? Call
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Clinical Chemical Peels & Collagen Induction */}
        <div className="mb-20">
          <div className="border-b border-sand-200 pb-4 mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl text-noir-950">
              Clinical Corrective Skincare
            </h2>
            <p className="text-xs sm:text-sm text-noir-600 mt-1">
              Targeting hyperpigmentation, uneven texture, acne scarring, and deep rejuvenation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {corrective.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl border border-sand-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      {service.badge && (
                        <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-sand-200 text-noir-900 mb-2">
                          {service.badge}
                        </span>
                      )}
                      <h3 className="font-serif text-xl sm:text-2xl font-medium text-noir-950">
                        {service.name}
                      </h3>
                      <p className="text-xs text-sage-800 font-medium mt-0.5">
                        {service.tagline}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg sm:text-xl font-bold font-sans text-noir-950 block">
                        {service.price}
                      </span>
                      <span className="text-xs text-noir-500 flex items-center justify-end gap-1 mt-0.5">
                        <Clock className="w-3 h-3" />
                        {service.duration}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-noir-700 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="pt-4 border-t border-sand-100">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-noir-500 mb-2">
                      Treatment Highlights:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.modalitiesIncluded.map((mod, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2.5 py-1 rounded-lg bg-sand-100 text-noir-800 font-medium"
                        >
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-sand-100 flex items-center justify-between">
                  <a
                    href={service.combBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-xl bg-noir-950 hover:bg-noir-900 text-sand-50 text-xs sm:text-sm font-semibold transition flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-sand-300" />
                    <span>Book Corrective Service</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Body & Specialty */}
        <div className="mb-20">
          <div className="border-b border-sand-200 pb-4 mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl text-noir-950">
              Body Skincare & Teeth Whitening
            </h2>
            <p className="text-xs sm:text-sm text-noir-600 mt-1">
              Comprehensive aesthetic care for body clarity and confident smiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {specialty.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl border border-sand-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-medium text-noir-950">
                        {service.name}
                      </h3>
                      <p className="text-xs text-sage-800 font-medium mt-0.5">
                        {service.tagline}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg sm:text-xl font-bold font-sans text-noir-950 block">
                        {service.price}
                      </span>
                      <span className="text-xs text-noir-500 flex items-center justify-end gap-1 mt-0.5">
                        <Clock className="w-3 h-3" />
                        {service.duration}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-noir-700 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="pt-4 border-t border-sand-100">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-noir-500 mb-2">
                      Key Highlights:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.modalitiesIncluded.map((mod, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2.5 py-1 rounded-lg bg-sand-100 text-noir-800 font-medium"
                        >
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-sand-100 flex items-center justify-between">
                  <a
                    href={service.combBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-xl bg-noir-950 hover:bg-noir-900 text-sand-50 text-xs sm:text-sm font-semibold transition flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-sand-300" />
                    <span>Reserve Session</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Membership Banner */}
        <div className="rounded-3xl bg-noir-950 text-sand-50 p-8 sm:p-12 border border-noir-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-sand-400">
              Save on Every Visit
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white mt-1 mb-2">
              Join the Nirvana Studio Membership
            </h3>
            <p className="text-xs sm:text-sm text-sand-300 max-w-xl leading-relaxed">
              $400 one-time annual membership provides 20% off all treatment services and 15% off professional retail skincare products throughout the year.
            </p>
          </div>
          <a
            href={BUSINESS_INFO.combBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-2xl bg-sand-200 hover:bg-sand-100 text-noir-950 font-bold text-sm whitespace-nowrap transition"
          >
            Enroll or Inquire
          </a>
        </div>

      </div>
    </div>
  );
}
