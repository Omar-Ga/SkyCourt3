import React from 'react';
import { useTranslation } from 'react-i18next';

export default function CareersHeader() {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 px-6 text-center bg-white">
      {/* Background gradient - subtle, similar to original image */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary to-accent rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-accent to-primary rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          {t('careers_join_our_team')}
        </h1>
        {/* Subtitle */}
        <p className="font-alan-sans text-lg md:text-xl text-gray-600 mb-12">
          {t('careers_subtitle')}
        </p>


      </div>
    </section>
  );
}