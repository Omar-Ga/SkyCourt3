import { motion, useTransform, MotionValue } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Phone } from 'lucide-react';
import { Cafe } from '../data/cafes';

interface CafeCardProps {
  cafe: Cafe;
  index: number;
  scrollYProgress: MotionValue<number>;
  setSelectedCafe: (cafe: Cafe) => void;
}

export default function CafeCard({ cafe, index, scrollYProgress, setSelectedCafe }: CafeCardProps) {
  const { t } = useTranslation();
  const y = useTransform(scrollYProgress, [0, 1], [100 * (index * 0.1), -50 * (index * 0.1)]);

  return (
    <motion.div
      key={cafe.id}
      initial={{ opacity: 0, y: 50, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      style={{ y }}
      className="group cursor-pointer perspective-1000"
      onClick={() => setSelectedCafe(cafe)}
    >
      <motion.div
        whileHover={{ y: -10, rotateY: 5, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative bg-card rounded-3xl overflow-hidden shadow-luxury transform-gpu"
      >
        {/* Logo Section with Gradient Overlay */}
        <div className="relative h-80 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 flex items-center justify-center p-12">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="relative z-10 w-full h-full"
          >
            <img 
              src={cafe.logoUrl} 
              alt={t(cafe.nameKey)}
              loading="lazy"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </motion.div>
          
          {/* Animated gradient orb */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-4">
          <motion.h3 
            className="serif text-3xl font-medium text-foreground group-hover:text-primary transition-colors"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            {t(cafe.nameKey)}
          </motion.h3>
          
          <motion.p 
            className="text-muted-foreground text-sm leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            {t(cafe.taglineKey)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="flex items-center gap-2 text-primary"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm font-semibold">{cafe.phone}</span>
          </motion.div>

          {/* Hover indicator */}
          <motion.div 
            className="pt-4 flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity"
            initial={{ x: -10 }}
            whileInView={{ x: 0 }}
          >
            <span>Explore menu & ambiance</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.div>
        </div>

        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
      </motion.div>
    </motion.div>
  );
}
