import { motion } from 'framer-motion';
import { facilities } from '../../data/rentals';
import { useTranslation } from 'react-i18next';
import { useIsMobile } from '../../hooks/use-mobile';

export default function FacilitiesGrid() {
  const { t, i18n } = useTranslation();
  const isMobile = useIsMobile();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`${i18n.dir() === 'rtl' ? 'text-center' : 'text-center'} mb-12 sm:mb-16 px-4`}
        >
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('rentals_page.facilities_grid.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('rentals_page.facilities_grid.subtitle')}
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className={`relative rounded-xl overflow-hidden h-48 sm:h-56 md:h-64 lg:h-auto group cursor-pointer touch-manipulation ${facility.gridSpan}`}
              variants={item}
              whileHover={isMobile ? {} : { y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <motion.img 
                  src={facility.imageUrl} 
                  alt={facility.title} 
                  className="w-full h-full object-cover"
                  whileHover={isMobile ? {} : { scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
                <motion.h3 
                  className="text-xl md:text-2xl font-bold mb-2"
                  initial={{ opacity: 1 }}
                  whileHover={isMobile ? {} : { opacity: 1 }}
                >
                  {t(`rentals_page.facilities.items.${index}.title`)}
                </motion.h3>
                <motion.p 
                  className={`text-sm md:text-base text-gray-200 opacity-0 ${isMobile ? '' : 'group-hover:opacity-100'} transition-opacity duration-300`}
                  initial={{ y: 10 }}
                  whileHover={isMobile ? {} : { y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {t(`rentals_page.facilities.items.${index}.description`)}
                </motion.p>
              </div>
              
              {/* Hover overlay effect */}
              <div className={`absolute inset-0 bg-primary/20 opacity-0 ${isMobile ? '' : 'group-hover:opacity-100'} transition-opacity duration-300`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}