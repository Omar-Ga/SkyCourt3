import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin, Map, Building2 } from 'lucide-react';

export default function LocationSection() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section id="location-section" ref={ref} className="relative min-h-[60vh] sm:min-h-[70vh] md:h-[80vh] w-full overflow-hidden py-12 sm:py-16 md:py-0" dir={i18n.dir()}>
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://picsum.photos/seed/mallexterior/1920/1080')", 
          y 
        }}
      />
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <motion.div 
          className={`container mx-auto px-4 sm:px-6 max-w-4xl ${isRtl ? 'text-center' : 'text-center'}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-['Alan_Sans'] text-center`}>
            {t('rentals_page.location.title')}
          </h2>
          <p className={`text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 font-['Alan_Sans'] text-center max-w-3xl mx-auto`}>
            {t('rentals_page.location.description')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <motion.div 
              className="flex flex-col items-center frosted-glass border border-white/10 rounded-xl p-4 sm:p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <MapPin className="text-scm-green mb-2 sm:mb-3" size={32} />
              <p className="font-semibold font-['Alan_Sans'] text-center text-sm sm:text-base">
                {t('rentals_page.location.features.0')}
              </p>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center frosted-glass border border-white/10 rounded-xl p-4 sm:p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Map className="text-scm-green mb-2 sm:mb-3" size={32} />
              <p className="font-semibold font-['Alan_Sans'] text-center text-sm sm:text-base">
                {t('rentals_page.location.features.1')}
              </p>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center frosted-glass border border-white/10 rounded-xl p-4 sm:p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Building2 className="text-scm-green mb-2 sm:mb-3" size={32} />
              <p className="font-semibold font-['Alan_Sans'] text-center text-sm sm:text-base">
                {t('rentals_page.location.features.2')}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}