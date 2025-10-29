import { useState, useEffect, forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mouse } from 'lucide-react';
import { RotatingText } from './ui/shadcn-io/rotating-text';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_ITEMS, type NavItem } from '../data/navigation';

const images = [
  '/hero section/Glowing_skycourt.webp',
  '/hero section/entrance darker.webp',
  '/hero section/wideview.webp',
  '/hero section/skycourt-shopping-bag.webp',
];



const Hero = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useTranslation();
  const [textVisible, setTextVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  const headline = t('hero_headline');

  const handleSectionScroll = (sectionId: string) => {
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollToSection: sectionId } });
    }
  };

  const NavLink = ({ item }: { item: NavItem }) => {
    const commonProps = {
      className: "text-white hover:text-white text-sm font-medium tracking-wide transition-colors",
    };

    if (item.isRoute) {
      return (
        <Link to={item.href} {...commonProps}>
          {t(item.key)}
        </Link>
      );
    }

    return (
      <button onClick={() => handleSectionScroll(item.sectionId!)} {...commonProps}>
        {t(item.key)}
      </button>
    );
  };

  return (
    <section ref={ref} id="hero" className="relative w-full h-dvh overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-30 flex justify-center pt-8">
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.key} item={item} />
          ))}
        </nav>
      </div>

      <div className="absolute inset-0 bg-black/50 z-10" />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          boxShadow: 'inset 0 0 10em 3em rgba(0,0,0,0.9)',
          zIndex: 10,
        }}
      />

      <AnimatePresence>
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt="SkyCourt Mall"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </AnimatePresence>



      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-6">
        <motion.h1
          className="text-7xl md:text-9xl font-normal tracking-wider mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: textVisible ? 1 : 0 }}
        >
          {headline.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{
                opacity: textVisible ? 1 : 0,
                filter: textVisible ? 'blur(0px)' : 'blur(10px)'
              }}
              transition={{
                duration: 1,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: textVisible ? 1 : 0, y: textVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: headline.length * 0.05 + 0.3 }}
        >
          <RotatingText
            text={t('rotating_texts', { returnObjects: true }) as string[]}
            duration={3000}
            className="text-2xl md:text-3xl font-light tracking-wide text-center max-w-2xl"
          />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex flex-col items-center"
        >
          <Mouse className="w-8 h-8 text-white/70" />
          <ChevronDown className="w-6 h-6 text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
});

export default Hero;
