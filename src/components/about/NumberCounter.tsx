import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface NumberCounterProps {
  number: number;
  label: string;
  suffix: string;
  delay?: number;
}

export default function NumberCounter({ number, label, suffix, delay = 0 }: NumberCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      let start = 0;
      const duration = 2000;
      const increment = number / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= number) {
          setCount(number);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, number, delay]);

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
        {count}
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
