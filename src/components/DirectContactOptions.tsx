import React from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function DirectContactOptions() {
  const { t } = useTranslation();

  const phoneNumber = '+201234567890'; // Placeholder
  const emailAddress = 'info@skycourt.com'; // Placeholder
  const whatsappNumber = '201234567890'; // Placeholder, without '+'

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <div className="mt-12 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-light text-black mb-6">
        {t('or_talk_to_us_directly')}
      </h2>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center gap-3 py-3 px-6 border border-gray-300 rounded-lg shadow-sm text-base font-medium text-black bg-white hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
        >
          <Phone className="w-5 h-5" />
          {t('call_us')}
        </a>
        <button
          onClick={handleWhatsAppClick}
          className="flex items-center justify-center gap-3 py-3 px-6 border border-gray-300 rounded-lg shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
        >
          <MessageCircle className="w-5 h-5" />
          {t('whatsapp_us')}
        </button>
        <a
          href={`mailto:${emailAddress}`}
          className="flex items-center justify-center gap-3 py-3 px-6 border border-gray-300 rounded-lg shadow-sm text-base font-medium text-black bg-white hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
        >
          <Mail className="w-5 h-5" />
          {t('email_us')}
        </a>
      </div>
      <p className="mt-4 text-gray-600 text-sm">
        {t('or_email_us_directly_at')}: <a href="mailto:skycourtinfo@gmail.com" className="text-blue-600 hover:underline">skycourtinfo@gmail.com</a>
      </p>
    </div>
  );
}
