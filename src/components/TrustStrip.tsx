import React from "react";
import { Star, MapPin, Award, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";

export default function TrustStrip() {
  return (
    <section className="border-y border-sand-200 bg-sand-100/60 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center text-center sm:text-left">
          
          {/* Trust Stat 1: Reviews */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-sand-200 flex items-center justify-center flex-shrink-0 text-amber-600">
              <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1 font-serif text-lg font-bold text-noir-950">
                <span>{BUSINESS_INFO.rating}</span>
                <span className="text-xs text-amber-500 font-sans">★★★★★</span>
              </div>
              <p className="text-xs text-noir-600 font-medium">
                {BUSINESS_INFO.reviewCount} Verified Client Reviews
              </p>
            </div>
          </div>

          {/* Trust Stat 2: Credentials */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-sand-200 flex items-center justify-center flex-shrink-0 text-sage-700">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif text-base font-bold text-noir-950">
                Medical Aesthetician
              </p>
              <p className="text-xs text-noir-600 font-medium">
                5+ Years Advanced Skin Experience
              </p>
            </div>
          </div>

          {/* Trust Stat 3: Location */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-sand-200 flex items-center justify-center flex-shrink-0 text-noir-700">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif text-base font-bold text-noir-950">
                Rancho Cucamonga
              </p>
              <p className="text-xs text-noir-600 font-medium">
                10737 Laurel St · Suite 280
              </p>
            </div>
          </div>

          {/* Trust Stat 4: Tailored Care */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-sand-200 flex items-center justify-center flex-shrink-0 text-noir-700">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif text-base font-bold text-noir-950">
                100% Customized
              </p>
              <p className="text-xs text-noir-600 font-medium">
                No Generic Rushed Treatments
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
