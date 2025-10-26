import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FloatingWhatsAppButtonProps {
  onClick: () => void;
}

export default function FloatingWhatsAppButton({ onClick }: FloatingWhatsAppButtonProps) {
  const { t } = useTranslation();
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 bg-scm-green text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-scm-green min-h-[44px] min-w-[44px] touch-manipulation"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 1 
      }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      whileTap={{ scale: 0.95 }}
      aria-label="استفسر الآن عبر واتساب"
      dir="rtl"
    >
      {/* WhatsApp-style icon using MessageCircle */}
      <MessageCircle size={20} className="flex-shrink-0 sm:w-6 sm:h-6" />
      
      {/* Text that appears on hover/larger screens */}
      <motion.span 
        className="hidden lg:inline-block whitespace-nowrap font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ width: 0, opacity: 0 }}
        whileHover={{ width: "auto", opacity: 1 }}
      >
        {t('rentals_page.floating_whatsapp_button.inquire_now')}
      </motion.span>
      
      {/* Pulse animation for attention */}
      <motion.div
        className="absolute inset-0 rounded-full bg-scm-green"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.button>
  );
}