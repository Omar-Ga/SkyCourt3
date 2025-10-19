import { useRef, useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function BrandMarquee() {
  const { t } = useTranslation();
  const brands = t('brands', { returnObjects: true }) as { name: string }[];
  const duplicatedBrands = [...brands, ...brands];
  
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [marqueeWidth, setMarqueeWidth] = useState(0);

  useLayoutEffect(() => {
    if (marqueeRef.current) {
      // Measure the width of the first half of the items.
      const halfWidth = marqueeRef.current.scrollWidth / 2;
      setMarqueeWidth(halfWidth);
    }
  }, [brands, t]); // Re-measure if brands or language change

  return (
    <section className="relative py-16 overflow-hidden" id="brands">
      <div className="mb-16 text-center px-6">
        <motion.h2
          className="text-5xl md:text-7xl font-light text-black mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{}}
          transition={{ duration: 0.8 }}
        >
          {t('iconic_brands')}
        </motion.h2>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#fafaf8] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#fafaf8] to-transparent z-10" />

        {marqueeWidth > 0 && ( // Only render when measured to prevent animation jump
          <motion.div
            ref={marqueeRef}
            className="flex gap-16 py-8"
            animate={{ x: [0, -marqueeWidth] }}
            transition={{ 
              duration: marqueeWidth / 50, // Dynamic duration based on content width
              ease: 'linear', 
              repeat: Infinity 
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="bg-white/80 backdrop-blur-sm border border-black/10 rounded-2xl px-12 py-8 shadow-lg">
                  <span className="text-2xl font-medium text-black tracking-wider whitespace-nowrap">
                    {brand.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
