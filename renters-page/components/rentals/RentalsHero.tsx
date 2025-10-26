
import React from 'react';
import { motion } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';
import { FiChevronDown } from 'react-icons/fi';

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
}

const Stat: React.FC<StatProps> = ({ value, label, suffix }) => {
  const countUpRef = useCountUp(value);
  return (
    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center border border-white/20">
      <h3 className="text-4xl lg:text-5xl font-bold">
        <span ref={countUpRef}>0</span>{suffix}
      </h3>
      <p className="text-lg mt-1">{label}</p>
    </div>
  );
};


interface RentalsHeroProps {
    onInquireClick: () => void;
}

export default function RentalsHero({ onInquireClick }: RentalsHeroProps) {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };
  
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/mallhero/1920/1080')" }}></div>
      <div className="absolute inset-0 bg-black/60"></div>

      <motion.div 
        className="relative z-10 text-center container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
          شريك في نجاحك
        </motion.h1>
        <motion.p variants={itemVariants} className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
          انضم إلى أكبر وجهة تجارية على الساحل الشمالي
        </motion.p>
        
        <motion.div variants={itemVariants} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <Stat value={1000} suffix="+" label="موقف سيارة" />
          <Stat value={1} label="أكبر مول بالساحل" />
          <Stat value={24} suffix="/7" label="أمن وصيانة" />
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <button 
            onClick={onInquireClick}
            className="bg-highlight text-white font-bold py-4 px-12 rounded-full text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            استفسر الآن
          </button>
        </motion.div>
      </motion.div>
      <motion.div 
        className="absolute bottom-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FiChevronDown size={36} />
      </motion.div>
    </section>
  );
}
