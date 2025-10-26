import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Phone, Star, Clock, MapPin } from 'lucide-react';
import { Cafe } from '../data/cafes';

interface CafeCardProps {
  cafe: Cafe;
  index: number;
  setSelectedCafe: (cafe: Cafe) => void;
  isHovered?: boolean;
  onHover?: (id: string | null) => void;
}

export default function CafeCard({ cafe, index, setSelectedCafe, isHovered, onHover }: CafeCardProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      onHoverStart={() => onHover?.(cafe.id)}
      onHoverEnd={() => onHover?.(null)}
      className="group cursor-pointer"
      onClick={() => setSelectedCafe(cafe)}
    >
      <div className="relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        {/* Logo Section */}
        <div className="relative h-64 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 flex items-center justify-center p-8">
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative z-10 w-32 h-32"
          >
            <img
              src={cafe.logoUrl}
              alt={t(cafe.nameKey)}
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </motion.div>
          
          {/* Animated background pattern */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              backgroundPosition: isHovered ? "100% 100%" : "0% 0%",
            }}
            transition={{ duration: 2 }}
            style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(249, 115, 22, 0.3) 0%, transparent 50%)",
              backgroundSize: "100% 100%",
            }}
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                {t(cafe.nameKey)}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {t(cafe.taglineKey)}
              </p>
            </div>
            <motion.div
              animate={{
                rotate: isHovered ? 360 : 0,
              }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-1 text-amber-500"
            >
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </motion.div>
          </div>

          <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>{cafe.phone}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>8AM - 10PM</span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">SkyCourt Mall, Level 2</span>
          </div>

          {/* Hover indicator */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              x: isHovered ? 0 : -10,
            }}
            className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-medium text-sm pt-2"
          >
            <span>Explore menu & gallery</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-amber-200/30 to-orange-300/30 rounded-full blur-xl" />
        <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tr from-blue-200/20 to-purple-300/20 rounded-full blur-lg" />
      </div>
    </motion.div>
  );
}
