import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DiningTeaser() {
  const { t, i18n } = useTranslation();

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <img src="https://images.unsplash.com/photo-1728287506854-e3de67cbac24" alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl md:text-6xl font-light text-white mb-4"
        >
          {t('dining_headline')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-xl max-w-3xl mx-auto text-white/80 mb-10"
        >
          {t('dining_subheadline')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Link
            to="/dining"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground shadow-lg"
          >
            {t('discover_restaurants')}
            {i18n.language === 'ar' ? (
              <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
            ) : (
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            )}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}