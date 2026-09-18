import React from "react";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ConcernPathways from "@/components/ConcernPathways";
import FeaturedTreatments from "@/components/FeaturedTreatments";
import HowCustomizationWorks from "@/components/HowCustomizationWorks";
import ProviderStory from "@/components/ProviderStory";
import StudioExperience from "@/components/StudioExperience";
import ReviewsSection from "@/components/ReviewsSection";
import FaqSection from "@/components/FaqSection";
import LocationBookingCTA from "@/components/LocationBookingCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ConcernPathways />
      <FeaturedTreatments />
      <HowCustomizationWorks />
      <ProviderStory />
      <StudioExperience />
      <ReviewsSection />
      <FaqSection />
      <LocationBookingCTA />
    </>
  );
}
