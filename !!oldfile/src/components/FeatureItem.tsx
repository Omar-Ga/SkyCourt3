// src/components/FeatureItem.tsx
import { motion, Variants } from 'framer-motion';
import { Sparkles } from 'lucide-react';

// Assuming iconMap is defined and exported from Features.tsx
import { iconMap } from '../lib/icons';

interface FeatureItemProps {
  feature: { key: string; title: string; description: string };
  isActive: boolean;
}

export function FeatureItem({ feature, isActive }: FeatureItemProps) {
  const Icon = iconMap[feature.key] || Sparkles;

  const itemVariants: Variants = {
    hidden: { opacity: 0.5, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.8 }}>
      <div className="flex items-start gap-6">
        <motion.div
          className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
                      animate={{
                        backgroundColor: isActive ? 'hsl(279, 65%, 32%)' : '#000000',
                        color: isActive ? 'hsl(210, 40%, 98%)' : '#FFFFFF',
                        scale: isActive ? 1.1 : 1,
                      }}        >
          <Icon className="w-6 h-6" strokeWidth={1.5} />
        </motion.div>
        <div className="relative pt-1 pl-4 bg-[rgb(150,215,163,0.32)] rounded-lg w-[340px] h-32 flex-shrink-0">
          <h3 className="serif text-2xl md:text-3xl font-medium text-black mb-3">
            {feature.title}
          </h3>
          <p className="text-base text-black/70 leading-relaxed">
            {feature.description}
          </p>
          <motion.div
            className="absolute -bottom-2 left-0 h-0.5 bg-primary"
            animate={{ width: isActive ? '100%' : '0%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
}
