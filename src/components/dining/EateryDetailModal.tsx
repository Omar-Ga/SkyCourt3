import { useRef, useLayoutEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Eatery } from '../../data/eateries';
import { useIsMobile } from '../../hooks/use-mobile';

interface Props { eatery: Eatery; onClose: () => void; }

const CARD_RADIUS = 220; // Radius for desktop "petal" animation

export const EateryDetailModal = ({ eatery, onClose }: Props) => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [measuredHeight, setMeasuredHeight] = useState<number | null>(null);

  const calculatePosition = (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    // Use larger radius for top (index 0) and bottom (index 2) images
    const isTopOrBottom = index === 0 || index === 2;
    const radius = isTopOrBottom ? CARD_RADIUS + 15 : CARD_RADIUS;
    return { x: Math.cos(angle) * radius, y: Math.sin(angle) * radius };
  };

  useLayoutEffect(() => {
    if (isDetailsVisible && contentRef.current && isMobile) {
      setMeasuredHeight(contentRef.current.offsetHeight);
    } else {
      setMeasuredHeight(null);
    }
  }, [isDetailsVisible, eatery, isMobile]);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 rounded-full bg-white/20 p-3 text-white transition-all hover:bg-white/30 hover:scale-110 touch-manipulation"
        aria-label="Close"
        onTouchStart={() => { }} // Ensure touch events work
      >
        <X className="h-6 w-6" />
      </button>

      <div className="relative flex items-center justify-center w-full h-full">
        <AnimatePresence>
          {isDetailsVisible && !isMobile && (
            <motion.div>
              {eatery.details.map((detail, index) => {
                const { x, y } = calculatePosition(index, eatery.details.length);
                return (
                  <motion.div
                    key={index} className="absolute top-1/2 left-1/2"
                    initial={{ opacity: 0, scale: 0.3, x: 0, y: 0 }}
                    animate={{ opacity: 1, scale: 1, x: x - 100, y: y - 100, transition: { type: 'spring', damping: 18, stiffness: 120, delay: 0.3 + index * 0.1 } }}
                    exit={{ opacity: 0, scale: 0.3, x: 0, y: 0, transition: { duration: 0.2 } }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="w-[200px] h-[200px] bg-white rounded-2xl overflow-hidden shadow-2xl">
                      <img src={detail.imageUrl} alt="" className="h-full w-full object-cover" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          layoutId={`eatery-container-${eatery.id}`}
          className="relative z-20 flex flex-col items-center"
          onLayoutAnimationComplete={() => setIsDetailsVisible(true)}
          onClick={(e) => e.stopPropagation()}
          style={{ width: isMobile ? 'calc(100vw - 32px)' : 200 }}
        >
          <div className="w-44 h-44 flex-shrink-0 flex items-center justify-center">
            <img
              src={eatery.logoUrl}
              alt={t(eatery.nameKey)}
              className="h-full w-full object-contain"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </div>

          <AnimatePresence>
            {isDetailsVisible && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isMobile ? measuredHeight ?? 'auto' : 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 150, damping: 20 }}
                className="w-full overflow-hidden"
              >
                <div ref={contentRef} className="w-full flex flex-col items-center">
                  <h2 className="text-2xl font-medium text-white mb-0.5 text-center">{t(eatery.nameKey)}</h2>
                  <a
                    href={`tel:${eatery.phone}`}
                    className="inline-flex items-center gap-1.5 rounded-full font-semibold text-sm px-3 py-2 touch-manipulation"
                    style={{ color: 'hsl(292.98deg 100% 50%)', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'}
                    onTouchStart={() => { }} // Ensure touch events work
                  >
                    <Phone className="h-3.5 w-3.5" /> {eatery.phone}
                  </a>


                  {isMobile && (
                    <div className="mt-6 w-full space-y-4 max-h-[calc(100dvh-450px)] overflow-y-auto p-1">
                      {eatery.details.map((detail, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0, transition: { delay: 0.3 + index * 0.1 } }}
                        >
                          <div className="w-full bg-neutral-100 rounded-xl overflow-hidden shadow">
                            <img src={detail.imageUrl} alt="" className="h-40 w-full object-cover" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};