import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RentalsHero from '../components/rentals/RentalsHero';
import LocationSection from '../components/rentals/LocationSection';
import FacilitiesGrid from '../components/rentals/FacilitiesGrid';
import RentalsFAQ from '../components/rentals/RentalsFAQ';
import InquiryForm from '../components/rentals/InquiryForm';
import FinalCTA from '../components/rentals/FinalCTA';
import FloatingWhatsAppButton from '../components/rentals/FloatingWhatsAppButton';

export default function Rentals() {
  const { i18n } = useTranslation();
  const inquiryFormRef = useRef<HTMLDivElement>(null);

  const scrollToInquiry = () => {
    inquiryFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/201234567890`, '_blank');
  };

  return (
    <>
      <div className="grain-overlay" />
      <Header show={true} />

      <main className="relative bg-white" dir={i18n.dir()}>
        <RentalsHero onInquireClick={scrollToInquiry} />
        <LocationSection />
        <FacilitiesGrid />

        <RentalsFAQ onContactUsClick={scrollToInquiry} />
        <InquiryForm ref={inquiryFormRef} />
        <FinalCTA onPrimaryClick={scrollToInquiry} />
      </main>

      <Footer />
      <FloatingWhatsAppButton onClick={handleWhatsAppClick} />
    </>
  );
}