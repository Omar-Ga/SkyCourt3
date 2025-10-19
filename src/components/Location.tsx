import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Clock, Mail } from 'lucide-react';
import LightRays from './LightRays';

export default function Location() {
  const { t } = useTranslation();

  const infoItems = [
    {
      icon: MapPin,
      label: t('address'),
      value: t('address_details'),
    },
    {
      icon: Clock,
      label: t('opening_hours'),
      value: t('opening_hours_details'),
    },
    {
      icon: Mail,
      label: t('email'),
      value: t('email_details'),
    },
  ];

  return (
    <section className="relative py-32 px-6 bg-neutral-900 text-white overflow-hidden" id="location">
      <div className="absolute top-0 left-0 w-1/2 h-full opacity-50 pointer-events-none">
        <LightRays />
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="md:pr-12">
          <motion.h2
            className="text-5xl md:text-7xl font-light mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{}}
            transition={{ duration: 0.8 }}
          >
            {t('visit_us_today')}
          </motion.h2>
          <motion.p
            className="text-lg text-white/70 max-w-xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('find_us_in_the_heart')}
          </motion.p>

          <div className="space-y-8">
            {infoItems.map((item, index) => (
              <motion.div
                key={item.label}
                className="flex items-start gap-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{}}
                transition={{ duration: 0.7, delay: 0.4 + index * 0.15 }}
              >
                <item.icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <p className="text-sm text-white/50 tracking-wider uppercase mb-2">
                    {item.label}
                  </p>
                  {item.label === t('email') ? (
                    <p className="text-lg md:text-xl">
                      <span dir="ltr">{item.value}</span>
                    </p>
                  ) : (
                    <p className="text-lg md:text-xl" dangerouslySetInnerHTML={{ __html: item.value }} />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="relative h-[500px] bg-neutral-800/50 rounded-2xl flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-white/40 text-2xl relative">
            {t('interactive_map_coming_soon')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}