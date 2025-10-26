import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Coffee, Phone, X, Clock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CafeCard from '../components/CafeCard';
import { cafes, Cafe } from '../data/cafes';

export default function Cafes() {
  const { t } = useTranslation();
  const [selectedCafe, setSelectedCafe] = useState<Cafe | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Header show={true} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-orange-300/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-purple-300/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100/80 dark:bg-amber-900/30 backdrop-blur-sm border border-amber-200/50 dark:border-amber-700/50 mb-8"
          >
            <Coffee className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span className="text-amber-700 dark:text-amber-300 font-medium text-sm">
              {t('cafes_section_badge')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent mb-6 leading-tight"
          >
            {t('cafes_headline_prefix')}
            <br />
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Cafés
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            {t('cafes_subheadline')}
          </motion.p>
        </div>
      </section>

      {/* Cafes Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cafes.map((cafe, index) => (
            <CafeCard 
              key={cafe.id}
              cafe={cafe} 
              index={index} 
              setSelectedCafe={setSelectedCafe} 
            />
          ))}
        </div>
      </section>

      <Footer />

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedCafe && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl p-4"
            onClick={() => setSelectedCafe(null)}
          >
            <motion.button
              onClick={() => setSelectedCafe(null)}
              className="absolute top-6 right-6 z-50 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white transition-all duration-300 touch-manipulation"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onTouchStart={() => {}} // Ensure touch events work
            >
              <X className="h-6 w-6" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-6xl w-full bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-900/20 dark:via-orange-900/20 dark:to-yellow-900/20 p-12 text-center">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-32 h-32 mx-auto mb-6 bg-white dark:bg-slate-700 rounded-2xl p-6 shadow-xl"
                >
                  <img
                    src={selectedCafe.logoUrl}
                    alt={t(selectedCafe.nameKey)}
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3"
                >
                  {t(selectedCafe.nameKey)}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-slate-600 dark:text-slate-300 text-lg mb-6"
                >
                  {t(selectedCafe.taglineKey)}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  <a
                    href={`tel:${selectedCafe.phone}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-semibold transition-all duration-300 transform hover:scale-105 touch-manipulation"
                    onTouchStart={() => {}} // Ensure touch events work
                  >
                    <Phone className="h-4 w-4" />
                    {selectedCafe.phone}
                  </a>
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold">
                    <Clock className="h-4 w-4" />
                    8AM - 10PM
                  </div>
                </motion.div>
              </div>

              {/* Gallery */}
              <div className="p-8 md:p-12">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center"
                >
                  Experience {t(selectedCafe.nameKey)}
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {selectedCafe.details.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 100 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-slate-700"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <motion.img
                          src={detail.imageUrl}
                          alt=""
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          className="absolute bottom-4 left-4 right-4 text-white"
                        >
                          <p className="text-sm font-medium">
                            {t(detail.descriptionKey)}
                          </p>
                        </motion.div>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {t(detail.descriptionKey)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}