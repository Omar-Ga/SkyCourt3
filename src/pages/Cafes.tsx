import { useState, useRef } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Coffee, Phone, X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { cafes, Cafe } from '../data/cafes';
import { VirtuosoGrid } from 'react-virtuoso';
import { useIsMobile } from '../hooks/use-mobile';
import { RotatingText } from '../components/ui/shadcn-io/rotating-text';
import CafeCard from '../components/CafeCard';

export default function Cafes() {
  const { t } = useTranslation();
  const [selectedCafe, setSelectedCafe] = useState<Cafe | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const isMobile = useIsMobile();
  const virtuosoHeight = isMobile ? cafes.length * 450 : Math.ceil(cafes.length / 3) * 450;

  const cafeNames = cafes.map(cafe => t(cafe.nameKey));

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/10 to-background">
      <Header show={true} />
      
      {/* Hero Section with Rotating Names */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.div 
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-primary/10 backdrop-blur-sm"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Coffee className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">{t('cafes_section_badge')}</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-foreground mb-6">
            {t('cafes_headline_prefix')}
            <br />
            <RotatingText 
              text={cafeNames}
              duration={3000}
              className="text-primary inline-block"
              containerClassName="inline-block"
            />
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('cafes_subheadline')}
          </p>
        </motion.div>

        {/* Decorative floating elements */}
        <motion.div
          className="absolute top-40 left-10 w-20 h-20 rounded-full bg-primary/5 blur-3xl"
          animate={{ 
            y: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-60 right-20 w-32 h-32 rounded-full bg-secondary/10 blur-3xl"
          animate={{ 
            y: [0, -40, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </section>

      {/* Cafes Grid with Premium Animations */}
      <section ref={containerRef} className="max-w-7xl mx-auto px-6 py-20">
        <VirtuosoGrid
          data={cafes}
          style={{ height: virtuosoHeight }}
          listClassName="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          itemContent={(index, cafe) => (
            <CafeCard 
              cafe={cafe} 
              index={index} 
              scrollYProgress={scrollYProgress} 
              setSelectedCafe={setSelectedCafe} 
            />
          )}
        />
      </section>

      <Footer />

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedCafe && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xl p-4"
            onClick={() => setSelectedCafe(null)}
          >
            <motion.button
              onClick={() => setSelectedCafe(null)}
              className="absolute top-6 right-6 z-50 rounded-full bg-white/20 p-3 text-white transition-all hover:bg-white/30 hover:scale-110"
              whileHover={{ rotate: 90 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <X className="h-6 w-6" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-6xl w-full bg-card rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Logo */}
              <div className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 p-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-40 h-40 mx-auto mb-6 bg-card rounded-2xl p-6 shadow-lg"
                >
                  <img 
                    src={selectedCafe.logoUrl} 
                    alt={t(selectedCafe.nameKey)}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl font-medium text-foreground mb-3"
                >
                  {t(selectedCafe.nameKey)}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-muted-foreground mb-4"
                >
                  {t(selectedCafe.taglineKey)}
                </motion.p>
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  href={`tel:${selectedCafe.phone}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {selectedCafe.phone}
                </motion.a>
              </div>

              {/* Image Gallery */}
              <div className="p-8 md:p-12">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-2xl font-medium mb-8 text-foreground"
                >
                  Experience {t(selectedCafe.nameKey)}
                </motion.h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {selectedCafe.details.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="group rounded-2xl overflow-hidden shadow-lg bg-card"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <motion.img
                          src={detail.imageUrl}
                          alt=""
                          loading="lazy"
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="p-4 bg-white">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {t(detail.descriptionKey)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}