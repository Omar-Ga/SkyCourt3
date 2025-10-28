
import React from 'react';
import { motion } from 'framer-motion';
import { facilities } from '../../constants';
import { useTranslation } from 'react-i18next';

export default function FacilitiesGrid() {
  const { t } = useTranslation();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section className="py-20 bg-neutral-light">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">{t('rentals_page.facilities_grid.title')}</h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className={`relative rounded-xl overflow-hidden h-64 md:h-auto group ${facility.gridSpan}`}
              variants={item}
            >
              <img src={facility.imageUrl} alt={t(facility.title)} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
                <h3 className="text-xl font-bold">{t(facility.title)}</h3>
                <p className="text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{t(facility.description)}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
