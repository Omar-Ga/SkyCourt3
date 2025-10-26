
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MdLocationOn, MdMap, MdBusiness } from 'react-icons/md';

export default function LocationSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section ref={ref} className="relative h-[80vh] w-full overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/mallexterior/1920/1080')", y }}
      />
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <motion.div 
          className="container mx-auto px-6 text-center max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">الموقع الاستراتيجي</h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            يقع مول سكاي كورت في قلب الساحل الشمالي في مدينة سيدي عبدالرحمن عند الكيلو 136، مباشرة على طريق الاسكندرية – مرسى مطروح وفي مقابل القرى السياحية الكبرى، مما يجعله نقطة جذب رئيسية للسكان والزوار على حد سواء.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <MdLocationOn className="text-highlight" size={40} />
              <p className="mt-2 font-semibold">الكيلو 136 طريق الإسكندرية-مرسى مطروح</p>
            </div>
            <div className="flex flex-col items-center">
              <MdMap className="text-highlight" size={40} />
              <p className="mt-2 font-semibold">مقابل القرى السياحية مباشرة</p>
            </div>
            <div className="flex flex-col items-center">
              <MdBusiness className="text-highlight" size={40} />
              <p className="mt-2 font-semibold">أكبر مول على الساحل الشمالي</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
