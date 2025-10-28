
import React, { useRef } from 'react';
import Header from './components/shared/Header';
import RentalsHero from './components/rentals/RentalsHero';
import LocationSection from './components/rentals/LocationSection';
import VisualStatsGrid from './components/rentals/VisualStatsGrid';
import TenantTestimonials from './components/rentals/TenantTestimonials';
import BenefitsTimeline from './components/rentals/BenefitsTimeline';
import FacilitiesGrid from './components/rentals/FacilitiesGrid';
import RentalsFAQ from './components/rentals/RentalsFAQ';
import InquiryForm from './components/rentals/InquiryForm';
import FinalCTA from './components/rentals/FinalCTA';
import Footer from '../src/components/Footer';

import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t } = useTranslation();
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
        aria-label={t('rentals_page.floating_whatsapp_button.aria_label')}
      >
        <FaWhatsapp size={24} />
        <span className="hidden md:inline">{t('rentals_page.floating_whatsapp_button.inquire_now')}</span>
      </button>
    </div>
  );
}
