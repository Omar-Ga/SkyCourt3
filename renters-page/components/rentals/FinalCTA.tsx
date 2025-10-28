
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface FinalCTAProps {
    onPrimaryClick: () => void;
}

export default function FinalCTA({ onPrimaryClick }: FinalCTAProps) {
  const { t } = useTranslation();
  return (
    <section className="relative py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="absolute inset-0 opacity-10 bg-cover" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/subtle-prism.png')"}}></div>
        <div className="relative container mx-auto px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h2 className="text-4xl md:text-5xl font-black mb-4">
                    {t('rentals_page.final_cta_section.title')}
                </h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-200 mb-8">
                    {t('rentals_page.final_cta_section.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <button 
                        onClick={onPrimaryClick}
                        className="bg-highlight text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        {t('rentals_page.final_cta_section.primary_button')}
                    </button>
                    <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-white hover:text-primary transition-colors duration-300">
                        {t('rentals_page.final_cta_section.secondary_button')}
                    </button>
                </div>
            </motion.div>
        </div>
    </section>
  );
}
