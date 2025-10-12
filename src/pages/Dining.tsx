import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { EateryLogoGrid } from '../components/dining/EateryGrid';
import { EateryDetailModal } from '../components/dining/EateryDetailModal';
import { eateries, Eatery } from '../data/eateries';

export default function Dining() {
  const { t } = useTranslation();
  const [selectedEatery, setSelectedEatery] = useState<Eatery | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedEatery ? 'hidden' : 'auto';
  }, [selectedEatery]);

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <Header show={true} />
      <main className="mx-auto max-w-7xl px-6 pt-36 pb-20 sm:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="serif mb-4 text-5xl font-medium tracking-tight text-black md:text-7xl">
            {t('dining_headline')}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-black/60">
            {t('dining_subheadline')}
          </p>
        </motion.div>

        <EateryLogoGrid eateries={eateries} onEateryClick={setSelectedEatery} />
      </main>
      <Footer />

      <AnimatePresence>
        {selectedEatery && (
          <EateryDetailModal eatery={selectedEatery} onClose={() => setSelectedEatery(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}