import React from "react";
import { BUSINESS_INFO } from "@/lib/data";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-sand-50 border-t border-sand-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-700 mb-2">
          Client Experiences
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-noir-950 font-normal tracking-tight">
          Read what clients say
        </h2>
        <p className="mt-4 text-sm sm:text-base text-noir-700 leading-relaxed">
          Client reviews live on Google and Yelp. Read them there, in full, before you book.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={BUSINESS_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-noir-950 px-5 py-2.5 text-sm font-semibold text-noir-950 hover:bg-noir-950 hover:text-white transition"
          >
            Google reviews
          </a>
          <a
            href={BUSINESS_INFO.yelpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-noir-950 px-5 py-2.5 text-sm font-semibold text-noir-950 hover:bg-noir-950 hover:text-white transition"
          >
            Yelp reviews
          </a>
          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-noir-950 px-5 py-2.5 text-sm font-semibold text-noir-950 hover:bg-noir-950 hover:text-white transition"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
