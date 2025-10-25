import { useRef, useLayoutEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Eatery } from '../../data/eateries';
import { useIsMobile } from '../../hooks/use-mobile';

interface Props { eatery: Eatery; onClose: () => void; }

const CARD_RADIUS = 320; // Radius for desktop "petal" animation

export const EateryDetailModal = ({ eatery, onClose }: Props) => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [measuredHeight, setMeasuredHeight] = useState<number | null>(null);

  const calculatePosition = (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    return { x: Math.cos(angle) * CARD_RADIUS, y: Math.sin(angle) * CARD_RADIUS };
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
      <button onClick={onClose} className="absolute top-6 right-6 z-50 rounded-full bg-white/20 p-2 text-white transition-all hover:bg-white/30 hover:scale-110" aria-label="Close">
        <X className="h-6 w-6" />
      </button>

      <div className="relative flex items-center justify-center w-full h-full" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence>
          {isDetailsVisible && !isMobile && (
            <motion.div>
              {eatery.details.map((detail, index) => {
                const { x, y } = calculatePosition(index, eatery.details.length);
                return (
                  <motion.div
                    key={index} className="absolute top-1/2 left-1/2"
                    initial={{ opacity: 0, scale: 0.3, x: 0, y: 0 }}
                    animate={{ opacity: 1, scale: 1, x: x - 140, y: y - 160, transition: { type: 'spring', damping: 18, stiffness: 120, delay: 0.3 + index * 0.1 } }}
                    exit={{ opacity: 0, scale: 0.3, x: 0, y: 0, transition: { duration: 0.2 } }}
                  >
                    <div className="w-[280px] h-[320px] bg-white rounded-2xl overflow-hidden shadow-2xl">
                      <img src={detail.imageUrl} alt="" className="h-3/5 w-full object-cover" />
                      <p className="p-4 text-sm">{t(detail.descriptionKey)}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          layoutId={`eatery-container-${eatery.id}`}
          className="relative z-20 flex flex-col items-center overflow-hidden rounded-2xl bg-white shadow-2xl"
          onLayoutAnimationComplete={() => setIsDetailsVisible(true)}
          style={{ width: isMobile ? 'calc(100vw - 32px)' : 250 }}
        >
          <div className="w-48 h-48 flex-shrink-0 flex items-center justify-center p-6">
            <img src={eatery.logoUrl} alt={eatery.name} className="h-full w-full object-contain" />
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
                <div ref={contentRef} className="w-full flex flex-col items-center px-4 pb-4">
                  <h2 className="text-3xl font-medium text-black mb-1 text-center">{t(eatery.nameKey)}</h2>
                  <a href={`tel:${eatery.phone}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold hover:bg-primary/20">
                    <Phone className="h-4 w-4" /> {eatery.phone}
                  </a>
                  

                  {isMobile && (
                    <div className="mt-6 w-full space-y-4 max-h-[calc(100vh-450px)] overflow-y-auto p-1">
                      {eatery.details.map((detail, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0, transition: { delay: 0.3 + index * 0.1 } }}
                        >
                           <div className="w-full bg-neutral-100 rounded-xl overflow-hidden shadow">
                            <img src={detail.imageUrl} alt="" className="h-40 w-full object-cover" />
                            <p className="p-3 text-sm">{t(detail.descriptionKey)}</p>
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