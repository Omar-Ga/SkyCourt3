
import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

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
