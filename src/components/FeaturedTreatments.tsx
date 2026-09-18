import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Sparkles, CheckCircle2 } from "lucide-react";
import { SERVICES, BUSINESS_INFO } from "@/lib/data";

export default function FeaturedTreatments() {
  // Pick core featured treatments for homepage showcase
  const featured = SERVICES.filter((s) =>
    ["new-client-consultation", "nirvana-glow-60", "nirvana-glow-90", "perfect-derma-peel", "microneedling-facial", "teeth-whitening-60"].includes(s.id)
  );

  return (
    <section className="py-16 sm:py-24 bg-sand-100/40 border-t border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-700 mb-2">
              Signature Treatments
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-noir-950 font-normal tracking-tight">
              Featured Facials & Advanced Services
            </h2>
            <p className="mt-2 text-sm sm:text-base text-noir-600 max-w-2xl">
              Each treatment blends clinical esthetic techniques with calm, restorative relaxation in our Rancho Cucamonga private studio.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-noir-900 hover:text-noir-950 underline underline-offset-4"
            >
              <span>View full service menu & pricing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featured.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl border border-sand-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Real Image container */}
                <div className="relative aspect-[16/10] bg-sand-200 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {service.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-sand-50/95 backdrop-blur-sm text-noir-950 border border-sand-300/80 shadow-sm">
                        {service.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-2 mb-1.5">
                    <h3 className="font-serif text-xl font-medium text-noir-950 group-hover:text-noir-800 transition">
                      {service.name}
                    </h3>
                    <span className="font-sans text-base font-bold text-noir-950 whitespace-nowrap">
                      {service.price}
                    </span>
                  </div>

                  <p className="text-xs text-sage-800 font-medium mb-3">
                    {service.tagline}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-semibold text-noir-500 mb-4">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Duration: {service.duration}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-noir-700 leading-relaxed line-clamp-3 mb-5">
                    {service.description}
                  </p>

                  {/* Included modalities chips */}
                  <div className="pt-4 border-t border-sand-100">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-noir-500 mb-2">
                      Key Highlights:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.modalitiesIncluded.slice(0, 3).map((modality, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2.5 py-1 rounded-lg bg-sand-100/80 text-noir-800 font-medium"
                        >
                          {modality}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom booking CTA button */}
              <div className="p-6 pt-0">
                <a
                  href={service.combBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-noir-900 hover:bg-noir-950 text-sand-50 font-medium text-xs sm:text-sm transition flex items-center justify-center gap-2 group-hover:shadow"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5 text-sand-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
