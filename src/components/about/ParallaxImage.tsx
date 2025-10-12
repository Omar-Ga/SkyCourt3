import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function ParallaxImage() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ y, scale }}
      >
        <img
          src="https://images.unsplash.com/photo-1605170439002-90845e8c0137"
          alt="SkyCourt Mall"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        {/* Vignette and darken overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
            boxShadow: 'inset 0 0 120px 20px rgba(0,0,0,0.9)'
          }} 
        />
      </motion.div>

      <motion.div
        className="relative z-10 h-full flex items-center justify-center px-6"
        style={{ opacity }}
      >
        <div className="text-center max-w-4xl">
          <motion.h2
            className="serif text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t('about.closing_title')}
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-white/90 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('about.closing_text')}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
