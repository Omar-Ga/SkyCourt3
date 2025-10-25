import { useTranslation } from 'react-i18next';

export default function BrandMarquee() {
  const { t } = useTranslation();
  const brands = (t('brands', { returnObjects: true }) || []) as { name: string }[];

  const MarqueeContent = () => (
    <div className="flex-shrink-0 flex items-center gap-x-8">
      {brands.map((brand, index) => (
        <div key={index} className="flex-shrink-0">
          <div className="bg-white/80 backdrop-blur-sm border border-black/10 rounded-2xl px-12 py-8 shadow-lg">
            <span className="text-2xl font-medium text-black tracking-wider whitespace-nowrap">
              {brand.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-16" id="brands">
      <div className="mb-12 text-center px-6">
        <h2 className="text-5xl md:text-7xl font-light text-black mb-6">
          {t('iconic_brands')}
        </h2>
      </div>
      <div className="relative w-full overflow-hidden">
        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#fafaf8] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#fafaf8] to-transparent z-10" />

        <div className="w-full flex">
          <div className="flex-shrink-0 flex animate-marquee">
            <MarqueeContent />
            <MarqueeContent />
          </div>
        </div>
      </div>
    </section>
  );
}