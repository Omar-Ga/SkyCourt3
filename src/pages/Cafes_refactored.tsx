import { useState, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { cafes, Cafe } from '../data/cafes';
import CafeCard from '../components/CafeCard';
import { EateryDetailModal } from '../components/dining/EateryDetailModal';

export default function Cafes() {
  const { t } = useTranslation();
  const [selectedCafe, setSelectedCafe] = useState<Cafe | null>(null);
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"],
  });

  return (
    <div className="bg-neutral-50 text-neutral-800">
      <Header show={true} />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center bg-[url('/cafes/cafe_hero_1920.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
        <div className="relative z-10 text-white px-4 animate-fade-up">
          <h1 className="text-6xl md:text-8xl font-serif font-light tracking-tight mb-6">Discover Our Cafés</h1>
          <p className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto">
            From a quick coffee to a relaxing lunch, explore our handpicked selection of cafés.
          </p>
        </div>
        <div className="absolute bottom-12 animate-bounce text-white/70 text-sm tracking-widest">↓</div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white text-center animate-fade-in">
        <h2 className="text-4xl md:text-6xl font-serif mb-6">Moments Made Over Coffee</h2>
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
          Each café offers a unique blend of atmosphere and flavor — a perfect escape for any time of day.
        </p>
      </section>

      {/* Cafe Grid */}
      <section ref={gridRef} className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {cafes.map((cafe, index) => (
              <div key={cafe.id} onClick={() => setSelectedCafe(cafe)} className="cursor-pointer">
                <CafeCard 
                  cafe={cafe} 
                  index={index} 
                  scrollYProgress={scrollYProgress}
                  setSelectedCafe={setSelectedCafe} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {selectedCafe && (
        <EateryDetailModal eatery={selectedCafe} onClose={() => setSelectedCafe(null)} />
      )}
    </div>
  );
}
