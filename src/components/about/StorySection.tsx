import { useRef } from 'react';
import { motion, useTransform, useInView, MotionValue } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// The actual heavy component that renders the content
const StoryContent = ({ title, content, image, index, totalStories, scrollYProgress: parentScrollYProgress, isRtl, isInView }) => {
  const start = index / totalStories;
  const end = (index + 1) / totalStories;
  const localScrollYProgress = useTransform(parentScrollYProgress, [start, end], [0, 1]);

  const imageY = useTransform(localScrollYProgress, [0, 1], [100, -100]);
  const imageScale = useTransform(localScrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const textY = useTransform(localScrollYProgress, [0, 1], [50, -50]);

  const isEven = index % 2 === 0;
  const shouldFlipOrder = isRtl ? isEven : !isEven;

  return (
    <div className="max-w-7xl mx-auto px-6 w-full flex items-center h-full">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
          <motion.div
            className={`relative ${shouldFlipOrder ? 'lg:col-start-2' : ''}`}
            style={{ y: textY }}
          >
            <motion.div
              className={isRtl ? 'md:text-right' : ''}
              initial={{ opacity: 0, x: shouldFlipOrder ? 50 : -50 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : (shouldFlipOrder ? 50 : -50) }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2
                className="serif text-4xl md:text-6xl lg:text-7xl font-light text-black mb-8 leading-tight"
              >
                {title.split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    className={`inline-block ${isRtl ? 'ml-4' : 'mr-4'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h2>

              <motion.div
                className={`h-px w-16 bg-black/20 mb-8 ${isRtl ? 'ml-auto' : ''}`}
                initial={{ width: 0 }}
                animate={{ width: isInView ? 64 : 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />

              <motion.p
                className="text-lg md:text-xl text-neutral-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {content}
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            className={`relative ${shouldFlipOrder ? 'lg:col-start-1 lg:row-start-1' : ''}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <motion.div
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
              style={{ y: imageY, scale: imageScale }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
              <img
                src={image}
                alt={title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="absolute -z-10 inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-2xl"
              style={{
                x: shouldFlipOrder ? 20 : -20,
                y: -20,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 0.5 : 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
  );
};

interface StorySectionProps {
  title: string;
  content: string;
  image: string;
  index: number;
  totalStories: number;
  scrollYProgress: MotionValue<number>;
}

export default function StorySection(props: StorySectionProps) {
  const { i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';
  
  const sectionRef = useRef<HTMLDivElement>(null);
  // This is the key for virtualization.
  // It will be true if the section is anywhere from 50% above the viewport to 50% below.
  // This ensures it's rendered before it comes into view and un-rendered after it's gone.
  const isInView = useInView(sectionRef, { margin: "50%" });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-20 overflow-hidden"
      dir={i18n.dir()}
    >
      {isInView && <StoryContent {...props} isRtl={isRtl} isInView={isInView} />}
    </section>
  );
}
