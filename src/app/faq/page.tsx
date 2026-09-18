import Link from 'next/link';
import { HelpCircle, Phone, Calendar, ArrowRight, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { FAQ_ITEMS, BUSINESS_INFO } from '@/lib/data';
import FaqSection from '@/components/FaqSection';

export const metadata = {
  title: 'Frequently Asked Questions & Studio Policies | Nirvana Skin Co.',
  description: 'Everything you need to know about booking, cancellation policies, treatment preparation, parking, and aftercare at Nirvana Skin Co. in Rancho Cucamonga.',
};

export default function FaqPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Header */}
      <section className="bg-sand-100 py-16 md:py-24 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-50 border border-sand-300 text-stone-700 text-xs font-medium uppercase tracking-wider mb-6">
              <HelpCircle className="w-3.5 h-3.5 text-stone-500" />
              Client Resource & Studio Policies
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-900 font-light tracking-tight leading-tight">
              Clear answers before your visit.
            </h1>
            <p className="mt-6 text-lg text-stone-600 font-sans leading-relaxed">
              We believe in complete transparency. Review our arrival guidelines, cancellation policy, treatment prep, and what to expect during your customized appointment with Stephanie.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Policy Highlights */}
      <section className="py-12 bg-white border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-sand-50 border border-sand-200">
              <div className="w-10 h-10 rounded-xl bg-sand-200 flex items-center justify-center text-stone-900 mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-stone-900 mb-1">Cancellation Policy</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Please provide at least 24 hours notice if you need to reschedule or cancel to allow other clients the opportunity to book.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-sand-50 border border-sand-200">
              <div className="w-10 h-10 rounded-xl bg-sand-200 flex items-center justify-center text-stone-900 mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-stone-900 mb-1">Studio Location & Parking</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                10737 Laurel St Suite 280, Rancho Cucamonga. Plentiful free on-site plaza parking right outside the building.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-sand-50 border border-sand-200">
              <div className="w-10 h-10 rounded-xl bg-sand-200 flex items-center justify-center text-stone-900 mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-stone-900 mb-1">First-Timer Consultation</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Unsure what your skin needs? Book a 30-min Consultation ($50) or the Nirvana Glow 60. Stephanie customizes your treatment live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main FAQ Component */}
      <FaqSection />

      {/* Direct Contact Banner */}
      <section className="py-16 bg-sand-100 border-t border-sand-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl text-stone-900 font-light mb-4">
            Still have a question about your skin?
          </h2>
          <p className="text-stone-600 mb-8 max-w-xl mx-auto">
            Stephanie is always happy to answer pre-appointment questions directly via call or text.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-stone-900 text-cream-50 hover:bg-stone-800 transition text-sm font-medium shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call / Text (909) 504-9341</span>
            </a>
            <Link
              href={BUSINESS_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-stone-900 hover:bg-sand-200 border border-sand-300 transition text-sm font-medium"
            >
              <Calendar className="w-4 h-4" />
              <span>View Open Times</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
