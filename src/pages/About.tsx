import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutHero from '../components/about/AboutHero';
import StorySection from '../components/about/StorySection';
import ParallaxImage from '../components/about/ParallaxImage';
import NumberCounter from '../components/about/NumberCounter';

export default function About() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const stories = t('about.stories', { returnObjects: true }) as Array<{
    title: string;
    content: string;
    image: string;
  }>;

  const stats = t('about.stats', { returnObjects: true }) as Array<{
    number: number;
    label: string;
    suffix: string;
  }>;

  return (
    <>
      <div className="grain-overlay" />
      <Header show={true} />

      <div ref={containerRef} className="relative bg-white">
        <AboutHero />

        {stories.map((story, index) => (
          <StorySection
            key={index}
            title={story.title}
            content={story.content}
            image={story.image}
            index={index}
            scrollYProgress={scrollYProgress}
          />
        ))}

        <section className="relative py-32 bg-black text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              className="serif text-4xl md:text-6xl font-light text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {t('about.stats_title')}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {stats.map((stat, index) => (
                <NumberCounter
                  key={index}
                  number={stat.number}
                  label={stat.label}
                  suffix={stat.suffix}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </div>
        </section>

        <ParallaxImage />
      </div>

      <Footer />
    </>
  );
}
