
import React, { useRef } from 'react';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import RentalsHero from './components/rentals/RentalsHero';
import LocationSection from './components/rentals/LocationSection';
import VisualStatsGrid from './components/rentals/VisualStatsGrid';
import TenantTestimonials from './components/rentals/TenantTestimonials';
import BenefitsTimeline from './components/rentals/BenefitsTimeline';
import FacilitiesGrid from './components/rentals/FacilitiesGrid';
import RentalsFAQ from './components/rentals/RentalsFAQ';
import InquiryForm from './components/rentals/InquiryForm';
import FinalCTA from './components/rentals/FinalCTA';

import { FaWhatsapp } from 'react-icons/fa';

export default function App() {
  const inquiryFormRef = useRef<HTMLDivElement>(null);

  const scrollToInquiry = () => {
    inquiryFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-neutral-light text-neutral-dark font-sans grain-overlay">
      <Header />
      <main>
        <RentalsHero onInquireClick={scrollToInquiry} />
        <LocationSection />
        <VisualStatsGrid />
        <TenantTestimonials />
        <BenefitsTimeline />
        <FacilitiesGrid />
        <RentalsFAQ />
        <InquiryForm ref={inquiryFormRef} />
        <FinalCTA onPrimaryClick={scrollToInquiry} />
      </main>
      <Footer />
      <button 
        onClick={scrollToInquiry}
        className="fixed bottom-6 left-6 z-50 bg-highlight text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors flex items-center gap-2"
        aria-label="استفسر الآن عبر واتساب"
      >
        <FaWhatsapp size={24} />
        <span className="hidden md:inline">استفسر الآن</span>
      </button>
    </div>
  );
}
