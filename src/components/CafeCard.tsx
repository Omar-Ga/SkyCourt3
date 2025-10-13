import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { iconMap } from '../../src/lib/icons';
import { Cafe } from '../data/cafes';
import { useIsMobile } from '../hooks/use-mobile';

interface CafeCardProps {
  cafe: Cafe;
  index: number;
  onClick: () => void;
}

export const CafeCard = ({ cafe, index, onClick }: CafeCardProps) => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  const initialProps = isMobile ? { opacity: 0, y: 50 } : { opacity: 0, y: 50, rotateX: 15 };
  const whileInViewProps = isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0, rotateX: 0 };

  const PhoneIcon = iconMap.phone;

  return (
    <motion.div
      key={cafe.id}
      initial={initialProps}
      whileInView={whileInViewProps}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      className="group cursor-pointer perspective-1000"
      onClick={onClick}
    >
      <motion.div
        whileHover={isMobile ? {} : { y: -10, rotateY: 5, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative bg-card rounded-3xl overflow-hidden shadow-card transform-gpu"
      >
        <div className="relative h-80 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 flex items-center justify-center p-12">
          <motion.div
            whileHover={isMobile ? {} : { scale: 1.1, rotate: 5 }}
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
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="p-8 space-y-4">
          <motion.h3 
            className="serif text-3xl font-medium text-foreground group-hover:text-primary transition-colors"
            initial={isMobile ? { opacity: 0, y: 20 } : { opacity: 0, x: -20 }}
            whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            {t(cafe.nameKey)}
          </motion.h3>
          <motion.p 
            className="text-muted-foreground text-sm leading-relaxed"
            initial={isMobile ? { opacity: 0, y: 20 } : { opacity: 1, x: 0 }}
            whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            {t(cafe.taglineKey)}
          </motion.p>
          <motion.div
            initial={isMobile ? { opacity: 0, y: 10 } : { opacity: 0, y: 10 }}
            whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="flex items-center gap-2 text-primary"
          >
            <PhoneIcon className="w-4 h-4" />
            <span className="text-sm font-semibold">{cafe.phone}</span>
          </motion.div>
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
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
      </motion.div>
    </motion.div>
  );
}