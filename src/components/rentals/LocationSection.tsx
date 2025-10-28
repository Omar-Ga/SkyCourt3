import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useIsMobile } from "../../hooks/use-mobile";

export default function LocationSection() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yTransform = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const isMobile = useIsMobile();
  const y = isMobile ? 0 : yTransform;

  return (
    <section
      id="location-section"
      ref={ref}
      className="relative min-h-[40vh] sm:min-h-[40vh] md:h-[40vh] w-full overflow-hidden py-12 sm:py-16 md:py-0"
      dir={i18n.dir()}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/public/rentals_images/mallexterior.webp')",
          y,
        }}
      />
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <motion.div
          className={`container mx-auto px-4 sm:px-6 max-w-4xl ${isRtl ? "text-center" : "text-center"}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p
            className={`text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 font-['Alan_Sans'] text-center max-w-3xl mx-auto`}
          >
            {t("rentals_page.location.description")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
