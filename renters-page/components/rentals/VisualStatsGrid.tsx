
import React from 'react';
import { motion } from 'framer-motion';
import { statsItems } from '../../constants';
import { useCountUp } from '../../hooks/useCountUp';

const StatCard: React.FC<{ item: typeof statsItems[0]; index: number }> = ({ item, index }) => {
  const countUpRef = useCountUp(item.value);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, delay: index * 0.1 } 
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="relative rounded-xl overflow-hidden h-96 group"
    >
      <img src={item.imageUrl} alt={item.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="relative z-10 flex flex-col justify-end h-full p-8 text-white">
        <h3 className="text-5xl font-black">
          <span ref={countUpRef}>0</span>{item.suffix}
        </h3>
        <p className="text-xl mt-2">{item.label}</p>
      </div>
    </motion.div>
  );
};


export default function VisualStatsGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {statsItems.map((item, index) => (
            <StatCard key={index} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
