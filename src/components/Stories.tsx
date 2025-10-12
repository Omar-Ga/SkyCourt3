import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useDrag } from '@use-gesture/react';

type Service = {
  type: 'service';
  title: string;
  description: string;
  image: string;
  objectPosition?: string;
};

type Testimonial = {
  type: 'testimonial';
  quote: string;
  author: string;
  location: string;
};

type Story = Service | Testimonial;

export default function Stories() {
  const { t, i18n } = useTranslation();
  const services = t('services', { returnObjects: true }) as { title: string; description: string; image: string; objectPosition?: string }[];
  const testimonials = t('testimonials', { returnObjects: true }) as { name: string; rating: number; comment: string; location: string }[];

  const stories: Story[] = [
    ...services.map(s => ({ ...s, type: 'service' as const })),
    ...testimonials.map(tm => ({ type: 'testimonial' as const, quote: tm.comment, author: tm.name, location: tm.location }))
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
  };

  useEffect(() => {
    services.forEach(service => {
      if (service.image) {
        const img = new Image();
        img.src = service.image;
      }
    });
  }, [services]);

  const currentStory = stories[currentSlide];

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
          className="serif text-5xl md:text-7xl font-light text-black mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{}}
          transition={{ duration: 0.8 }}
        >
          {t('stories_title')}
        </motion.h2>
      </div>

      <div className="relative h-[70vh] min-h-[600px]" style={{ touchAction: 'pan-y' }} {...bind()}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {currentStory.type === 'service' ? (
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                <img
                  src={currentStory.image}
                  alt={currentStory.title}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: currentStory.objectPosition || 'center' }}
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-12 md:p-20">
                  <motion.h3
                    className="serif text-5xl md:text-7xl font-light text-white mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {currentStory.title}
                  </motion.h3>
                  <motion.p
                    className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {currentStory.description}
                  </motion.p>
                </div>
              </div>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-black flex items-center justify-center p-12">
                <div className="max-w-4xl text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Quote className="w-16 h-16 text-primary/20 mx-auto mb-8" />
                  </motion.div>
                  <motion.p
                    className="serif text-3xl md:text-5xl font-light text-white mb-12"
                    style={{ lineHeight: 1.8 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    "{currentStory.quote}"
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <p className="text-xl text-white font-medium mb-2">
                      {currentStory.author}
                    </p>
                    <p className="text-sm text-white/60 tracking-wider uppercase">
                      {currentStory.location}
                    </p>
                  </motion.div>
                </div>
              </div>
            )}
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
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-scm-green' : 'w-1 bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}