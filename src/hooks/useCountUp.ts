import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

/**
 * Custom hook for animating number count-up effects
 * Triggers animation when element comes into view
 * 
 * @param to - The target number to count up to
 * @returns ref - React ref to attach to the element that will display the animated number
 */
export function useCountUp(to: number) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, to, {
        duration: 2,
        ease: 'easeOut',
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value).toLocaleString('ar-EG');
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to]);

  return ref;
}