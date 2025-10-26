
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface FinalCTAProps {
  onPrimaryClick: () => void;
}

export default function FinalCTA({ onPrimaryClick }: FinalCTAProps) {
  const { t, i18n } = useTranslation();
  return (
    <section className="relative py-20 bg-gradient-to-r from-primary to-accent text-white overflow-hidden" dir={i18n.dir()}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-white/20 to-transparent rounded-full blur-3xl" />
      </div>
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-cover bg-center" style={{
        backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E')"
      }}></div>
      
      <div className={`relative container mx-auto px-6 ${i18n.dir() === 'rtl' ? 'text-center' : 'text-center'}`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 font-['Alan_Sans'] px-4 text-center">
            {t('rentals_page.final_cta_section.title')}
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/90 mb-8 font-['Alan_Sans'] px-4 text-center">
            {t('rentals_page.final_cta_section.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
            <motion.button 
              onClick={onPrimaryClick}
              className="bg-scm-green text-white font-semibold py-4 px-6 sm:px-10 rounded-full text-base sm:text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-scm-green min-h-[44px] w-full sm:w-auto touch-manipulation text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('rentals_page.final_cta_section.primary_button')}
            </motion.button>
            
            <motion.button 
              className="bg-transparent border-2 border-white text-white font-semibold py-4 px-6 sm:px-10 rounded-full text-base sm:text-lg hover:bg-white hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white min-h-[44px] w-full sm:w-auto touch-manipulation text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('rentals_page.final_cta_section.secondary_button')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}