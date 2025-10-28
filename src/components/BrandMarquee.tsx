import { useTranslation } from "react-i18next";

/**
 * Pure CSS infinite marquee - actually works
 */
function InfiniteMarquee({
  items,
  direction = "left",
  speed = 20, // seconds for full cycle
}: {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
}) {
  const { i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';
  
  // Determine animation based on direction and RTL
  const getAnimation = () => {
    if (isRtl) {
      return direction === "left" 
        ? `marquee-left-rtl ${speed}s linear infinite`
        : `marquee-right-rtl ${speed}s linear infinite`;
    } else {
      return direction === "left"
        ? `marquee-left ${speed}s linear infinite`
        : `marquee-right ${speed}s linear infinite`;
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex gap-16 py-6"
        style={{
          animation: getAnimation(),
          width: 'max-content'
        }}
      >
        {/* First set */}
        {items.map((item, i) => (
          <div
            key={`first-${i}`}
            className="flex-shrink-0 bg-gradient-to-br from-slate-300 via-slate-200 to-slate-400 backdrop-blur-sm border border-slate-400/30 rounded-2xl px-12 py-8 shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 25%, #b8b8b8 50%, #d0d0d0 75%, #a8a8a8 100%)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
            }}
          >
            <span className="text-2xl font-medium text-slate-800 whitespace-nowrap">
              {item}
            </span>
          </div>
        ))}

        {/* Second set for seamless loop */}
        {items.map((item, i) => (
          <div
            key={`second-${i}`}
            className="flex-shrink-0 bg-gradient-to-br from-slate-300 via-slate-200 to-slate-400 backdrop-blur-sm border border-slate-400/30 rounded-2xl px-12 py-8 shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 25%, #b8b8b8 50%, #d0d0d0 75%, #a8a8a8 100%)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
            }}
          >
            <span className="text-2xl font-medium text-slate-800 whitespace-nowrap">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Main section with two marquees moving in opposite directions.
 */
export default function BrandMarquee() {
  const { t, i18n } = useTranslation();
  const brands = (t("brands", { returnObjects: true }) as { name: string }[]).map(
    (b) => b.name
  );

  // Split brands between the two marquees
  const midpoint = Math.ceil(brands.length / 2);
  const firstRowBrands = brands.slice(0, midpoint);
  const secondRowBrands = brands.slice(midpoint);

  return (
    <section
      id="brands"
      className="relative py-20 bg-[#fafaf8] overflow-hidden"
      dir={i18n.dir()}
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
          {t("iconic_brands")}
        </h2>
      </div>

      <div className="space-y-10">
        <InfiniteMarquee items={firstRowBrands} direction="left" speed={35} />
        <InfiniteMarquee items={secondRowBrands} direction="right" speed={40} />
      </div>

      {/* Subtle fade edges for polish */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#fafaf8] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#fafaf8] to-transparent z-10" />
    </section>
  );
}