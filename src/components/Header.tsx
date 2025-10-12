import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Building2, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_ITEMS, type NavItem } from '../data/navigation';

export default function Header({ show }: { show: boolean }) {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  const handleSectionScroll = (sectionId: string) => {
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollToSection: sectionId } });
    }
  };

  const NavLink = ({ item, index }: { item: NavItem, index: number }) => {
    const commonProps = {
      className: "text-black/80 hover:text-black text-sm font-medium tracking-wide relative group transition-colors",
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.1 },
    };

    if (item.isRoute) {
      return (
        <motion.div {...commonProps}>
          <Link to={item.href}>
            {t(item.key)}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
        </motion.div>
      );
    }

    return (
      <motion.button
        onClick={() => handleSectionScroll(item.sectionId!)}
        {...commonProps}
      >
        {t(item.key)}
        <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
      </motion.button>
    );
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 py-4`}
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: show ? 0 : -100,
          opacity: show ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className={`absolute inset-0`}
        >
          <div className="frosted-glass h-full border-b border-black/5" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <Building2 className="w-8 h-8 text-black" strokeWidth={1.5} />
            <span className="serif text-2xl font-semibold text-black tracking-wide">
              {t('skycourt')}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item, index) => (
              <NavLink key={item.key} item={item} index={index} />
            ))}
            <button
              onClick={toggleLanguage}
              className="text-black/80 hover:text-black text-sm font-medium tracking-wide relative group transition-colors"
            >
              {i18n.language === 'en' ? 'AR' : 'EN'}
            </button>
          </nav>

          <button
            className="md:hidden text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 frosted-glass flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <nav className="flex flex-col items-center gap-8">
            {NAV_ITEMS.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.key}
                  to={item.href}
                  className="serif text-3xl text-black/80 hover:text-black transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ) : (
                <button
                  key={item.key}
                  onClick={() => {
                    handleSectionScroll(item.sectionId!);
                    setIsMobileMenuOpen(false);
                  }}
                  className="serif text-3xl text-black/80 hover:text-black transition-colors"
                >
                  {t(item.key)}
                </button>
              )
            ))}
            <button
              onClick={() => { toggleLanguage(); setIsMobileMenuOpen(false); }}
              className="serif text-3xl text-black/80 hover:text-black transition-colors"
            >
              {i18n.language === 'en' ? 'AR' : 'EN'}
            </button>
          </nav>
        </motion.div>
      )}
    </>
  );
}