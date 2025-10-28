import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, MessageSquare, Phone, MapPin, Send } from 'lucide-react';

const InquiryForm = forwardRef<HTMLDivElement>((_props, ref) => {
  const { t } = useTranslation();

  return (
    <section 
      ref={ref}
      className="relative py-20 bg-cover bg-center" 
      style={{ backgroundImage: "url('/public/hero section/hero-bg-2.jpg')" }}
    >
      <div className="absolute inset-0 bg-primary/80"></div>
      <div className="relative container mx-auto px-6">
        <div className="text-center text-white mb-8 sm:mb-12 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-3xl md:text-4xl font-bold"
          >
            {t('rentals_page.inquiry_form.title')}
          </motion.h2>
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center px-4">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="dark-frosted-glass p-6 sm:p-8 rounded-2xl border border-white/20 text-center"
          >
            <div className="space-y-4 sm:space-y-6">
              <div className="flex justify-center">
                <div className="bg-scm-green/20 p-3 sm:p-4 rounded-full">
                  <MessageSquare className="w-10 h-10 sm:w-12 sm:h-12 text-scm-green" />
                </div>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {t('rentals_page.inquiry_form.interested_title')}
              </h3>
              
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                {t('rentals_page.inquiry_form.interested_description')}
              </p>

              <div className="space-y-4">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center gap-3 w-full bg-scm-green text-white font-bold py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[44px] touch-manipulation"
                >
                  <Send className="w-5 h-5" />
                  {t('rentals_page.inquiry_form.send_detailed_inquiry')}
                </Link>
                
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-white space-y-4 sm:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold">{t('rentals_page.inquiry_form.direct_contact_methods')}</h3>
            
            <div className="space-y-3 sm:space-y-4">
              <a 
                href="https://wa.me/201234567890?text=مرحبا، أرغب في الاستفسار عن التأجير في مول سكاي كورت" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 sm:gap-4 bg-green-500 p-3 sm:p-4 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[44px] touch-manipulation"
              >
                <div className="bg-white/20 p-2 rounded-full flex-shrink-0">
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <span className="font-semibold text-base sm:text-lg block">{t('rentals_page.inquiry_form.whatsapp')}</span>
                  <span className="text-sm opacity-90">{t('rentals_page.inquiry_form.chat_directly')}</span>
                </div>
              </a>
              
              <a 
                href="tel:+201234567890" 
                className="flex items-center gap-3 sm:gap-4 bg-white/10 p-3 sm:p-4 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 min-h-[44px] touch-manipulation"
              >
                <div className="bg-white/20 p-2 rounded-full flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <span className="font-semibold text-base sm:text-lg block">{t('rentals_page.inquiry_form.phone')}</span>
                  <span className="text-sm opacity-90">+20 123 456 7890</span>
                </div>
              </a>
              
              <a 
                href="mailto:sales@skycourtmall.com" 
                className="flex items-center gap-3 sm:gap-4 bg-white/10 p-3 sm:p-4 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 min-h-[44px] touch-manipulation"
              >
                <div className="bg-white/20 p-2 rounded-full flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <span className="font-semibold text-base sm:text-lg block">{t('rentals_page.inquiry_form.email')}</span>
                  <span className="text-sm opacity-90 break-all">sales@skycourtmall.com</span>
                </div>
              </a>
              
              <a 
                href="https://www.google.com/maps/search/SkyCourt+Mall+-+North+Coast" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 sm:gap-4 bg-white/10 p-3 sm:p-4 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 min-h-[44px] touch-manipulation"
              >
                <div className="bg-white/20 p-2 rounded-full flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <span className="font-semibold text-base sm:text-lg block">{t('rentals_page.inquiry_form.location')}</span>
                  <span className="text-sm opacity-90">{t('rentals_page.inquiry_form.location_address')}</span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

InquiryForm.displayName = 'InquiryForm';

export default InquiryForm;