import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const CafeHero = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useTranslation();

  return (
    <section ref={ref} id="cafe-hero" className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          boxShadow: 'inset 0 0 10em 3em rgba(0,0,0,0.9)',
          zIndex: 10,
        }}
      />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-6">
        <motion.h1
          className="text-7xl md:text-9xl font-normal tracking-wider mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {t('cafes_page.hero_headline')}
        </motion.h1>
      </div>
    </section>
  );
});

export default CafeHero;
