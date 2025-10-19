// src/pages/Home.tsx

import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import BrandMarquee from '../components/BrandMarquee';
import Stories from '../components/Stories';
import Location from '../components/Location';
import Footer from '../components/Footer';
import DiningTeaser from '../components/DiningTeaser';

export default function Home() {
  const { i18n, t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);
  const heroInView = useInView(heroRef, { margin: '-50% 0px -50% 0px' });
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    document.documentElement.dir = i18n.dir();
  }, [i18n, i18n.language]);

  useEffect(() => {
    if (location.state?.scrollToSection) {
      const sectionElement = document.getElementById(location.state.scrollToSection);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
        // Optional: clear the state to prevent re-scrolling on refresh
        window.history.replaceState({}, document.title)
      }
    }
  }, [location]);

  return (
    <>
      <div className="grain-overlay" />

      <Header show={isMobile || !heroInView} />
      <main>
        <Hero ref={heroRef} />
        <Features />
        <BrandMarquee />
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-black"
              style={{ lineHeight: 1.2 }}>
              {t('experience_shopping')}
            </h2>
          </div>
        </section>
        <DiningTeaser />
        <Stories />
        <Location />
      </main>
      <Footer />
    </>
  );
}