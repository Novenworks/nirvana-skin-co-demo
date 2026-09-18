import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Instagram, Calendar, Star, Clock } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-noir-950 text-sand-300 border-t border-noir-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-noir-800">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-9 h-9 rounded-full overflow-hidden ring-1 ring-sand-400 bg-sand-100 flex-shrink-0">
                <Image
                  src="/images/comb-profile.webp"
                  alt="Nirvana Skin Co."
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-xl text-white font-medium">
                  Nirvana Skin Co.
                </span>
                <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-sand-400">
                  Rancho Cucamonga, CA
                </p>
              </div>
            </div>

            <p className="text-xs text-sand-400 leading-relaxed mb-5">
              Personalized facials and advanced clinical skincare founded by Stephanie, Licensed Medical Aesthetician. Creating calm, tailored pathways for radiant skin.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-noir-800 hover:bg-noir-700 text-sand-300 hover:text-white flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.yelpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-noir-800 hover:bg-noir-700 text-sand-300 hover:text-white text-xs font-semibold transition"
                aria-label="Yelp Reviews"
              >
                Yelp (4.9 ★)
              </a>
              <a
                href={BUSINESS_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-noir-800 hover:bg-noir-700 text-sand-300 hover:text-white text-xs font-semibold transition"
                aria-label="TikTok"
              >
                TikTok
              </a>
            </div>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-sand-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Stephanie
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition">
                  FAQ & Policies
                </Link>
              </li>
              <li>
                <Link href="/#concerns" className="hover:text-white transition">
                  Skin Concerns
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-white transition">
                  Client Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Treatments (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Featured Services
            </h4>
            <ul className="space-y-2 text-xs text-sand-400">
              <li>
                <a href={BUSINESS_INFO.combBookingUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  New Client Consultation ($50)
                </a>
              </li>
              <li>
                <a href={BUSINESS_INFO.combBookingUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Nirvana Glow 60 ($200)
                </a>
              </li>
              <li>
                <a href={BUSINESS_INFO.combBookingUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Nirvana Glow 90 ($250)
                </a>
              </li>
              <li>
                <a href={BUSINESS_INFO.combBookingUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Custom Chemical Peel
                </a>
              </li>
              <li>
                <a href={BUSINESS_INFO.combBookingUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  The Perfect Derma Peel ($350)
                </a>
              </li>
              <li>
                <a href={BUSINESS_INFO.combBookingUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Microneedling Facial ($250)
                </a>
              </li>
              <li>
                <a href={BUSINESS_INFO.combBookingUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Teeth Whitening ($200)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio Contact & Booking (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Studio Location
            </h4>
            <div className="space-y-3 text-xs text-sand-400">
              <p className="text-sand-200 font-medium">
                {BUSINESS_INFO.fullAddress}
              </p>
              <p>
                Direct Phone:{" "}
                <a href={`tel:${BUSINESS_INFO.phoneNumeric}`} className="text-sand-100 hover:underline">
                  {BUSINESS_INFO.phone}
                </a>
              </p>
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.combBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-sand-200 hover:bg-sand-100 text-noir-950 font-bold text-xs transition flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book on Comb Scheduling</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Disclaimers */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-sand-500">
          <p>
            © {new Date().getFullYear()} Nirvana Skin Co. All rights reserved. Rancho Cucamonga, CA.
          </p>
          <div className="flex items-center gap-4 text-sand-500">
            <span>By Appointment Only</span>
            <span>•</span>
            <span>Free On-Site Parking</span>
            <span>•</span>
            <span>Private Treatment Suite</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
