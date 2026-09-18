"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Phone, MessageSquare } from "lucide-react";
import { FAQS, BUSINESS_INFO } from "@/lib/data";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-t border-sand-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-700 mb-2">
            Questions & Answers
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-noir-950 font-normal tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-noir-600">
            Clear information about appointments, treatments, studio policies, and first-time visits.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl border border-sand-200 overflow-hidden bg-sand-50/50 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-medium text-noir-950 hover:bg-sand-100/60 transition"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-noir-500 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-noir-900" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-noir-700 leading-relaxed border-t border-sand-200/60 pt-3 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-12 p-6 rounded-3xl bg-sand-100/70 border border-sand-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-lg font-medium text-noir-950">
              Have a question about your skin?
            </h4>
            <p className="text-xs text-noir-600">
              Stephanie is happy to help you decide which appointment or consultation to select.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`sms:${BUSINESS_INFO.phoneNumeric}`}
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-sand-200 border border-sand-300 text-xs font-semibold text-noir-950 transition flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-noir-700" />
              <span>Text Question</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phoneNumeric}`}
              className="px-4 py-2.5 rounded-xl bg-noir-950 hover:bg-noir-900 text-sand-50 text-xs font-semibold transition flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-sand-300" />
              <span>Call ({BUSINESS_INFO.phone})</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
