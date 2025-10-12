import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function AboutHero() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  const title = t('about.hero_title');
  const subtitle = t('about.hero_subtitle');

  return (
    <div ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.img
        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
        alt="About Us Hero"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)',
          opacity
        }}
      />

      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl"
        style={{ opacity, scale, y }}
      >
        <motion.h1
          className="serif text-6xl md:text-8xl lg:text-9xl font-light text-white mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {title.split(' ').map((word, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
            >
              {word}{' '}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          className="h-px w-24 bg-white/30 mx-auto mb-8"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 96, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />

        <motion.p
          className="text-xl md:text-2xl text-white/80 font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {subtitle}
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          ↓
        </motion.div>
      </motion.div>
    </div>
  );
}
