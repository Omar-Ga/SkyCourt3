
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { ChevronDown } from 'lucide-react';



interface RentalsHeroProps {
  onInquireClick: () => void;
}

// Utility function for smooth scrolling to sections
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function RentalsHero({ onInquireClick }: RentalsHeroProps) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';
  
  return (
    <section className="relative w-full flex items-center justify-center text-white mobile-hero-height" dir={i18n.dir()}>
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/mallhero/1920/1080')" }}></div>
      <div className="absolute inset-0 bg-black/60"></div>

      <motion.div 
        className={`relative z-10 container mx-auto px-6 py-8 sm:py-0 ${isRtl ? 'text-center' : 'text-center'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1 
          className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight px-4 text-center`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t('rentals_page.hero.title')}
        </motion.h1>
        <motion.p 
          className={`mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-200 px-4 text-center`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {t('rentals_page.hero.subtitle')}
        </motion.p>

        <motion.div 
          className="mt-6 sm:mt-8 md:mt-12 px-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <button 
            onClick={onInquireClick}
            className="bg-scm-green text-white font-bold py-4 px-8 sm:px-12 rounded-full text-base sm:text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[44px] touch-manipulation w-full sm:w-auto text-center"
          >
            {t('rentals_page.hero.cta_primary')}
          </button>
        </motion.div>
      </motion.div>
      <motion.div 
        className="absolute bottom-4 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        onClick={() => scrollToSection('location-section')}
      >
        <ChevronDown size={36} />
      </motion.div>
    </section>
  );
}