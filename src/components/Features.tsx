import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';
import { FeatureItem } from './FeatureItem';
export default function Features() {
  const { t } = useTranslation();
  const features = t('features', { returnObjects: true }) as { key: string; title: string; description: string }[];
  
  const targetRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start center", "end center"]
  });

  const activeIndexValue = useTransform(scrollYProgress, (progress) => {
      return Math.min(features.length - 1, Math.floor(progress * features.length));
  });

  useMotionValueEvent(activeIndexValue, "change", (latest) => {
      setActiveIndex(latest);
  });

  return (
    <section className="relative py-32 px-6 bg-[#c4d9c8] overflow-clip" id="features">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{}} 
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
            {t('why_choose_skycourt')}
          </h2>

          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            {t('experience_shopping')}
          </p>
        </motion.div>
        <div className="relative grid md:grid-cols-2 gap-12 items-start">
          <div className="md:sticky top-32">
            <div className="h-[300px] md:h-[600px] overflow-hidden rounded-2xl">
              <video
                src="/herosection_viddd.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div ref={targetRef} className="relative space-y-24 md:pt-20">
            {features.map((feature, index) => (
              <FeatureItem
                  key={feature.title}
                  feature={feature}
                  isActive={activeIndex === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}