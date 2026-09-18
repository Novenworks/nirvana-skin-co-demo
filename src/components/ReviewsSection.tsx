import React from "react";
import { Star, Quote, CheckCircle } from "lucide-react";
import { REVIEWS, BUSINESS_INFO } from "@/lib/data";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-sand-50 border-t border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-700 mb-2">
            Client Experiences
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-noir-950 font-normal tracking-tight">
            Verified Reviews from Real Clients
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2">
            <div className="flex text-amber-500">
              {"★★★★★".split("").map((s, i) => (
                <span key={i} className="text-sm">★</span>
              ))}
            </div>
            <span className="text-xs sm:text-sm font-semibold text-noir-900">
              {BUSINESS_INFO.rating} Rating · Google & Yelp Reviews
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-sand-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-500 text-xs">
                    {"★★★★★".split("").map((s, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  {review.treatmentMentioned && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-sand-100 text-noir-700">
                      {review.treatmentMentioned}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-noir-700 leading-relaxed italic mb-5">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-sand-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-bold text-noir-950">
                    {review.author}
                  </h4>
                  <p className="text-[11px] text-noir-500 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-sage-600 inline" />
                    <span>Verified Review</span>
                  </p>
                </div>
                <span className="text-[11px] font-medium text-noir-400">
                  {review.published}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Yelp & Social Link Out */}
        <div className="mt-12 text-center">
          <p className="text-xs text-noir-600">
            Read all client testimonials directly on{" "}
            <a
              href={BUSINESS_INFO.yelpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-noir-950 underline hover:text-sage-700"
            >
              Yelp
            </a>{" "}
            and{" "}
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-noir-950 underline hover:text-sage-700"
            >
              Instagram (@nirvanaskinco)
            </a>.
          </p>
        </div>

      </div>
    </section>
  );
}
