import React from "react";
import { MapPin, Clock, Phone, MessageSquare, Calendar, Navigation, ShieldCheck, Check } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";

export default function LocationBookingCTA() {
  return (
    <section id="location" className="py-16 sm:py-24 bg-gradient-to-b from-sand-100/50 to-sand-200/50 border-t border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Location Box */}
        <div className="bg-noir-950 text-sand-50 rounded-3xl overflow-hidden shadow-2xl border border-noir-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-14">
            
            {/* Left 7 cols: Final CTA & Booking Paths */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-[0.2em] text-sand-400">
                  Ready For Restorative Skincare?
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white mt-2 mb-4 leading-tight">
                  Book your appointment at Nirvana Skin Co.
                </h2>
                <p className="text-sm sm:text-base text-sand-300 leading-relaxed max-w-xl mb-8">
                  Whether you are starting fresh with a new client consultation, refreshing with a signature 60-minute facial, or targeting stubborn concerns with chemical peels or microneedling, Stephanie is ready to guide you.
                </p>

                {/* Primary Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
                  <a
                    href={BUSINESS_INFO.combBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-2xl bg-sand-200 hover:bg-sand-100 text-noir-950 font-bold text-sm sm:text-base shadow transition-all flex items-center justify-center gap-2 group"
                  >
                    <Calendar className="w-5 h-5 text-noir-900 group-hover:scale-110 transition-transform" />
                    <span>Open Online Booking</span>
                  </a>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${BUSINESS_INFO.phoneNumeric}`}
                      className="px-4 py-3.5 rounded-2xl bg-noir-800 hover:bg-noir-700 text-sand-100 text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-4 h-4 text-sand-400" />
                      <span>Call</span>
                    </a>
                    <a
                      href={`sms:${BUSINESS_INFO.phoneNumeric}`}
                      className="px-4 py-3.5 rounded-2xl bg-noir-800 hover:bg-noir-700 text-sand-100 text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-1.5"
                    >
                      <MessageSquare className="w-4 h-4 text-sand-400" />
                      <span>Text</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Policy & Reassurance Notes */}
              <div className="pt-6 border-t border-noir-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-sand-400">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sage-400 flex-shrink-0" />
                  <span>Free on-site parking lot</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sage-400 flex-shrink-0" />
                  <span>Private suite with custom playlist</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sage-400 flex-shrink-0" />
                  <span>Wheelchair accessible & kid friendly</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sage-400 flex-shrink-0" />
                  <span>Affirm & Klarna payment options</span>
                </div>
              </div>
            </div>

            {/* Right 5 cols: Address & Hours Card */}
            <div className="lg:col-span-5 bg-noir-900/90 rounded-2xl p-6 sm:p-7 border border-noir-800 flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-noir-800 flex items-center justify-center flex-shrink-0 text-sand-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                      Studio Address
                    </h3>
                    <p className="text-sm text-sand-200 mt-0.5">
                      {BUSINESS_INFO.address}
                    </p>
                    <p className="text-xs text-sand-400">
                      {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
                    </p>
                    <a
                      href={BUSINESS_INFO.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-sand-300 hover:text-white underline mt-2 font-medium"
                    >
                      <Navigation className="w-3 h-3" />
                      <span>Get Driving Directions</span>
                    </a>
                  </div>
                </div>

                <div className="border-t border-noir-800 pt-5 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-sand-400" />
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      Hours of Operation
                    </h4>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    {BUSINESS_INFO.hours.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between text-sand-300 py-0.5 border-b border-noir-800/50"
                      >
                        <span className="font-medium">{item.day}</span>
                        <span
                          className={
                            item.status === "closed"
                              ? "text-sand-500 italic"
                              : "text-sand-100"
                          }
                        >
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-noir-800 text-[11px] text-sand-500">
                <span>By appointment only · Rancho Cucamonga, California</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
