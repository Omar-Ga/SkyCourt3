import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqItems } from '../../data/rentals';
import { Plus, Minus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface AccordionItemProps {
  item: typeof faqItems[0];
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onClick }) => {
  return (
    <motion.div 
      className="border-b border-gray-200 py-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center group min-h-[44px] touch-manipulation py-2"
        aria-expanded={isOpen}
        dir="rtl"
      >
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-200 text-right flex-1 pl-4">
          {item.question}
        </h3>
        <motion.div 
          className="text-primary text-xl sm:text-2xl flex-shrink-0"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <Minus size={20} className="sm:w-6 sm:h-6" /> : <Plus size={20} className="sm:w-6 sm:h-6" />}
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.04, 0.62, 0.23, 0.98] // Custom easing for smooth animation
            }}
            style={{ overflow: 'hidden' }}
          >
            <motion.p 
              className="text-gray-600 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {item.answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function RentalsFAQ() {
  const { t, i18n } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section className="py-16 md:py-24 bg-white" dir={i18n.dir()}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          <motion.div 
            className={`lg:col-span-1 ${i18n.dir() === 'rtl' ? 'text-center' : 'text-center'}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 text-center">
              {t('rentals_page.faq_section.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed text-center">
              {t('rentals_page.faq_section.subtitle')}
            </p>
            
            <motion.div 
              className="mt-6 sm:mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button className="bg-scm-green text-white font-semibold py-3 px-6 sm:px-8 rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[44px] touch-manipulation w-full sm:w-auto text-center">
                {t('rentals_page.faq_section.contact_us_button')}
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-2">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  item={item}
                  isOpen={openIndex === index}
                  onClick={() => handleClick(index)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}