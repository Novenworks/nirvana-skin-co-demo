"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Calendar, Menu, X, Clock, MapPin, Sparkles } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      {/* Top micro bar for quick trust & hours */}
      <div className="bg-noir-900 text-sand-200 text-xs py-1.5 px-4 hidden sm:block border-b border-noir-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium text-sand-300">
              <MapPin className="w-3.5 h-3.5 text-sand-400" />
              Rancho Cucamonga, CA
            </span>
            <span className="flex items-center gap-1.5 font-medium text-sand-300">
              <Clock className="w-3.5 h-3.5 text-sand-400" />
              Tue–Fri 9am–7pm · Sat 9am–3pm
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneNumeric}`}
              className="flex items-center gap-1.5 hover:text-white transition font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              {BUSINESS_INFO.phone}
            </a>
            <span className="text-noir-600">•</span>
            <span className="text-sand-400 font-semibold tracking-wide">
              ★ 4.9 (31 Verified Reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-sand-50/95 backdrop-blur-md shadow-sm border-b border-sand-200 py-3"
            : "bg-sand-50/80 backdrop-blur-sm py-4 border-b border-sand-200/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-full overflow-hidden ring-1 ring-sand-300 bg-sand-100 flex-shrink-0">
              <Image
                src="/images/comb-profile.webp"
                alt="Nirvana Skin Co."
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl tracking-tight text-noir-950 font-medium group-hover:text-noir-800 transition">
                Nirvana Skin Co.
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-sans font-semibold text-noir-600 -mt-1">
                Rancho Cucamonga
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-noir-800">
            <Link
              href="/#concerns"
              className="hover:text-noir-950 transition hover:underline underline-offset-8"
            >
              Skin Concerns
            </Link>
            <Link
              href="/services"
              className="hover:text-noir-950 transition hover:underline underline-offset-8"
            >
              Treatments & Pricing
            </Link>
            <Link
              href="/about"
              className="hover:text-noir-950 transition hover:underline underline-offset-8"
            >
              About Stephanie
            </Link>
            <Link
              href="/#reviews"
              className="hover:text-noir-950 transition hover:underline underline-offset-8"
            >
              Reviews
            </Link>
            <Link
              href="/faq"
              className="hover:text-noir-950 transition hover:underline underline-offset-8"
            >
              FAQ
            </Link>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneNumeric}`}
              className="px-3.5 py-2 text-xs font-semibold text-noir-800 hover:text-noir-950 rounded-xl hover:bg-sand-200/60 transition flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-noir-600" />
              <span>Call / Text</span>
            </a>

            <a
              href={BUSINESS_INFO.combBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-sand-50 bg-noir-900 hover:bg-noir-950 rounded-xl shadow-sm hover:shadow transition-all flex items-center gap-2 group"
            >
              <Calendar className="w-4 h-4 text-sand-300 group-hover:scale-105 transition-transform" />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={BUSINESS_INFO.combBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-semibold text-sand-50 bg-noir-900 rounded-lg shadow-sm"
            >
              Book
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-noir-900 hover:bg-sand-200 rounded-lg transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-sand-50 border-b border-sand-200 shadow-xl px-4 pt-3 pb-6 space-y-4">
          <div className="flex flex-col space-y-3 text-base font-medium text-noir-800">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-sand-100"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-sand-100"
            >
              All Treatments & Pricing
            </Link>
            <Link
              href="/#concerns"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-sand-100"
            >
              Start by Skin Concern
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-sand-100"
            >
              About Stephanie (Licensed Esthetician)
            </Link>
            <Link
              href="/#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-sand-100"
            >
              Client Reviews
            </Link>
            <Link
              href="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-sand-100"
            >
              FAQ & Policies
            </Link>
          </div>

          <div className="pt-3 border-t border-sand-200 space-y-2.5">
            <a
              href={BUSINESS_INFO.combBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center text-sm font-semibold text-sand-50 bg-noir-900 rounded-xl shadow flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book on Nirvana Scheduling</span>
            </a>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneNumeric}`}
                className="py-2.5 text-center text-xs font-semibold text-noir-900 bg-sand-200/80 rounded-xl flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" /> Call ({BUSINESS_INFO.phone})
              </a>
              <a
                href={`sms:${BUSINESS_INFO.phoneNumeric}`}
                className="py-2.5 text-center text-xs font-semibold text-noir-900 bg-sand-200/80 rounded-xl flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" /> Text Stephanie
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
