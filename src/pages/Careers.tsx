import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CareersHeader from '../components/careers/CareersHeader';
import JobCard from '../components/careers/JobCard';
import { JOBS } from '../data/jobs';
import { useInView } from 'framer-motion';

// Custom hook for fade-in effect
function useFadeIn<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
}


const AnimatedJobCard = ({ job, index }: { job: any; index: number }) => {
    const { ref, isVisible } = useFadeIn<HTMLDivElement>();
    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <JobCard job={job} />
        </div>
    );
};


export default function Careers() {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);
  const heroInView = useInView(heroRef, { margin: '-50% 0px -50% 0px' });


  return (
    <>
      <div className="grain-overlay" />
      <Header show={true} />
      <main>
        <CareersHeader />
        <section ref={heroRef} className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t('careers_open_positions')}
            </h2>
            <div className="space-y-6">
              {JOBS.map((job, index) => (
                <AnimatedJobCard key={job.id} job={job} index={index} />
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 text-center">
            <p className="text-gray-600">
                {t('careers_dont_see_role')}{' '}
                <a href="mailto:careers@skycourt.com" className="text-primary hover:underline">
                    {t('careers_send_resume')}
                </a>
            </p>
        </section>
      </main>
      <Footer />
    </>
  );
}