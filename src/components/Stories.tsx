import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useDrag } from '@use-gesture/react';

type Service = {
  title: string;
  description: string;
  image: string;
  objectPosition?: string;
};

export default function Stories() {
  const { t, i18n } = useTranslation();
  const services = t('services', { returnObjects: true }) as Service[];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  useEffect(() => {
    services.forEach(service => {
      if (service.image) {
        const img = new Image();
        img.src = service.image;
      }
    });
  }, [services]);

  const currentService = services[currentSlide];

  const bind = useDrag(({ swipe: [swipeX] }) => {
    if (i18n.language === 'ar') {
      if (swipeX === 1) {
        nextSlide();
      } else if (swipeX === -1) {
        prevSlide();
      }
    } else {
      if (swipeX === 1) {
        prevSlide();
      } else if (swipeX === -1) {
        nextSlide();
      }
    }
  }, {
    axis: 'x',
    filterTaps: true,
  });

  return (
    <section className="relative py-24 overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-light text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{}}
          transition={{ duration: 0.8 }}
        >
          Services
        </motion.h2>
      </div>

      <div className="relative h-[70dvh] min-h-[600px]" style={{ touchAction: 'pan-y' }} {...bind()}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
              <img
                src={currentService.image}
                alt={currentService.title}
                className="w-full h-full object-cover"
                style={{ objectPosition: currentService.objectPosition || 'center' }}
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-12 md:p-20">
                <motion.h3
                  className="text-4xl md:text-5xl font-light text-white mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {currentService.title}
                </motion.h3>
                <motion.p
                  className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {currentService.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 z-30 flex items-center justify-between px-6 md:px-12 pointer-events-none">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary/20 transition-all duration-300 hover:scale-110 active:scale-95 pointer-events-auto"
            aria-label="Previous slide"
          >
            {i18n.language === 'ar' ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
          </button>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary/20 transition-all duration-300 hover:scale-110 active:scale-95 pointer-events-auto"
            aria-label="Next slide"
          >
            {i18n.language === 'ar' ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`pagination-dot h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-scm-green' : 'w-4 bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}