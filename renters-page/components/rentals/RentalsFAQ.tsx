
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqItems } from '../../constants';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const AccordionItem: React.FC<{ item: { question: string, answer: string }; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  const { t } = useTranslation();
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-right"
      >
        <h3 className="text-lg font-semibold">{t(item.question)}</h3>
        <div className="text-primary text-2xl">
          {isOpen ? <FiMinus /> : <FiPlus />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: '16px' }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <p className="text-gray-600">{t(item.answer)}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


export default function RentalsFAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('rentals_page.faq_section.title')}</h2>
            <p className="text-gray-600">
              {t('rentals_page.faq_section.subtitle')}
            </p>
          </div>
          <div className="lg:col-span-2">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
