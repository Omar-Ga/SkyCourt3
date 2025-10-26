import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Building2, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile';

export default function Footer() {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
  ];

  const motionProps = (delay = 0) => ({
    initial: isMobile ? false : { opacity: 0, y: 20 },
    whileInView: isMobile ? false : { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, delay },
  });

  const linkClasses = "text-white/60 hover:text-primary transition-colors";

  return (
    <footer className="relative py-20 px-6 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <motion.div {...motionProps()}>
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-10 h-10" strokeWidth={1.5} />
              <span className="text-3xl font-semibold tracking-wide">{t('skycourt')}</span>
            </div>
            <p className="text-white/60 leading-relaxed max-w-md mb-8">
              {t('experience_shopping')}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    whileHover={isMobile ? {} : { scale: 1.1, rotate: 5 }}
                    whileTap={isMobile ? {} : { scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-8"
            {...motionProps(0.2)}
          >
            <div>
              <h3 className="text-sm uppercase tracking-wider font-medium mb-4">{t('explore')}</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#brands" className={linkClasses}>
                    {t('nav_brands')}
                  </a>
                </li>
                <li>
                  <a href="#services" className={linkClasses}>
                    {t('nav_services')}
                  </a>
                </li>
                <li>
                  <a href="#location" className={linkClasses}>
                    {t('location')}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider font-medium mb-4">{t('connect')}</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/contact-us"
                    className={linkClasses}
                  >
                    {t('email_link')}
                  </Link>
                </li>
                <li>
                  <a href="tel:+1234567890" className={linkClasses}>
                    {t('call_link')}
                  </a>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className={linkClasses}
                  >
                    {t('careers_link')}
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
          {...motionProps(0.4)}
        >
          <p className="text-white/40 text-sm">
            {t('copyright')}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-primary text-sm transition-colors">
            </a>
            <a href="#" className="text-white/40 hover:text-primary text-sm transition-colors">
              {t('terms_of_service')}
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}