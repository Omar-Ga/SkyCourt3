import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

interface NumberCounterProps {
  number: number;
  label: string;
  suffix: string;
  delay?: number;
}

export default function NumberCounter({ number, label, suffix, delay = 0 }: NumberCounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, number, {
      duration: 2,
      delay: delay,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [isInView, number, delay, count]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
    >
      <motion.div
        className="serif text-6xl md:text-8xl font-light mb-4"
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: delay + 0.2, type: "spring" }}
      >
        <motion.span>{rounded}</motion.span>
        <span className="text-scm-green">{suffix}</span>
      </motion.div>
      <motion.p
        className="text-xl text-white/70 tracking-wider"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: delay + 0.4 }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
}
