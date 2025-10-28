
import React from 'react';
import { motion } from 'framer-motion';
import { timelineItems } from '../../constants';
import { useTranslation } from 'react-i18next';

export default function BenefitsTimeline() {
  const { t } = useTranslation();
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">{t('rentals_page.benefits_timeline.title')}</h2>
        <motion.div
          className="relative max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="absolute top-0 h-full w-1 bg-gray-200 right-1/2 transform translate-x-1/2"></div>
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              className="mb-8 flex justify-between items-center w-full"
              variants={itemVariants}
            >
              <div className={`order-1 w-5/12 ${index % 2 === 0 ? 'text-right' : 'md:hidden'}`}></div>
              <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-12 h-12 rounded-full">
                <item.icon className="mx-auto text-white" size={24} />
              </div>
              <div className={`order-1 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-highlight/10'} rounded-lg shadow-xl w-5/12 px-6 py-4`}>
                <h3 className="font-bold text-lg mb-1">{t(item.title)}</h3>
                <p className="text-sm text-gray-600 leading-snug">{t(item.description)}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
