import React from 'react';
import { useTranslation } from 'react-i18next';
import { Job } from '../../data/jobs';
import { MapPin, DollarSign, Calendar } from 'lucide-react';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'ar';

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-6">
      <div className="flex-grow">
        {/* Tags */}
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
            {job.department[lang]}
          </span>
          <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
            {job.type[lang]}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title[lang]}</h3>

        {/* Description */}
        <p className="text-gray-600 font-alan-sans text-sm leading-relaxed mb-4">
          {job.description[lang]}
        </p>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            <span>{job.location[lang]}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <DollarSign className="w-4 h-4" />
            <span>{job.salaryRange}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>{job.postedDate[lang]}</span>
          </div>
        </div>
      </div>

      {/* Apply Button */}
      <div className="w-full md:w-auto mt-4 md:mt-0 flex items-start">
        <button className="w-36 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold hover:bg-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary h-12 whitespace-nowrap">
          {t('careers_apply_now')}
        </button>
      </div>
    </div>
  );
}