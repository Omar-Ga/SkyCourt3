
import { Testimonial, FaqItem, StatItem, FacilityItem } from './types';
import { MdOutlineHandshake, MdTrendingUp, MdOutlineSecurity, MdManageAccounts, MdGroups } from 'react-icons/md';

export const testimonials: Testimonial[] = [
  {
    logoUrl: 'https://logo.clearbit.com/kfc.com',
    quote: 'rentals_page.tenant_testimonials.items.0.quote',
    author: 'rentals_page.tenant_testimonials.items.0.author',
    storeImageUrl: 'https://picsum.photos/seed/kfcstore/800/600',
    result: 'rentals_page.tenant_testimonials.items.0.result',
  },
  {
    logoUrl: 'https://logo.clearbit.com/hardees.com',
    quote: 'rentals_page.tenant_testimonials.items.1.quote',
    author: 'rentals_page.tenant_testimonials.items.1.author',
    storeImageUrl: 'https://picsum.photos/seed/hardeesstore/800/600',
    result: 'rentals_page.tenant_testimonials.items.1.result',
  },
  {
    logoUrl: 'https://logo.clearbit.com/pizzahut.com',
    quote: 'rentals_page.tenant_testimonials.items.2.quote',
    author: 'rentals_page.tenant_testimonials.items.2.author',
    storeImageUrl: 'https://picsum.photos/seed/pizzahutstore/800/600',
    result: 'rentals_page.tenant_testimonials.items.2.result',
  },
];

export const faqItems: FaqItem[] = [
  {
    question: 'rentals_page.faq.items.0.question',
    answer: 'rentals_page.faq.items.0.answer',
  },
  {
    question: 'rentals_page.faq.items.1.question',
    answer: 'rentals_page.faq.items.1.answer',
  },
  {
    question: 'rentals_page.faq.items.2.question',
    answer: 'rentals_page.faq.items.2.answer',
  },
  {
    question: 'rentals_page.faq.items.3.question',
    answer: 'rentals_page.faq.items.3.answer',
  },
  {
    question: 'rentals_page.faq.items.4.question',
    answer: 'rentals_page.faq.items.4.answer',
  },
  {
    question: 'rentals_page.faq.items.5.question',
    answer: 'rentals_page.faq.items.5.answer',
  },
];

export const timelineItems = [
  {
    title: 'rentals_page.benefits_timeline.items.0.title',
    description: 'rentals_page.benefits_timeline.items.0.description',
    icon: MdOutlineHandshake,
  },
  {
    title: 'rentals_page.benefits_timeline.items.1.title',
    description: 'rentals_page.benefits_timeline.items.1.description',
    icon: MdTrendingUp,
  },
  {
    title: 'rentals_page.benefits_timeline.items.2.title',
    description: 'rentals_page.benefits_timeline.items.2.description',
    icon: MdOutlineSecurity,
  },
  {
    title: 'rentals_page.benefits_timeline.items.3.title',
    description: 'rentals_page.benefits_timeline.items.3.description',
    icon: MdManageAccounts,
  },
  {
    title: 'rentals_page.benefits_timeline.items.4.title',
    description: 'rentals_page.benefits_timeline.items.4.description',
    icon: MdGroups,
  },
];

export const statsItems: StatItem[] = [
    { value: 1000, label: "about.stats.0.label", suffix: "+", imageUrl: "https://picsum.photos/seed/parking/600/800" },
    { value: 24, label: "rentals_page.hero.stats.2.label", suffix: "/7", imageUrl: "https://picsum.photos/seed/security/600/800" },
    { value: 50000, label: "rentals_page.visual_stats_grid.stats.2.label", suffix: "م²", imageUrl: "https://picsum.photos/seed/greenery/600/800" },
    { value: 95, label: "rentals_page.visual_stats_grid.stats.3.label", suffix: "%", imageUrl: "https://picsum.photos/seed/occupancy/600/800" }
];

export const facilities: FacilityItem[] = [
    { title: "rentals_page.facilities.items.0.title", description: "rentals_page.facilities.items.0.description", imageUrl: "https://picsum.photos/seed/parkinglot/800/600", gridSpan: "md:col-span-2 md:row-span-2" },
    { title: "rentals_page.facilities.items.1.title", description: "rentals_page.facilities.items.1.description", imageUrl: "https://picsum.photos/seed/gardens/600/400", gridSpan: "md:col-span-1" },
    { title: "rentals_page.facilities.items.2.title", description: "rentals_page.facilities.items.2.description", imageUrl: "https://picsum.photos/seed/waterfall/600/400", gridSpan: "md:col-span-1" },
    { title: "rentals_page.facilities.items.3.title", description: "rentals_page.facilities.items.3.description", imageUrl: "https://picsum.photos/seed/maintenance_team/600/400", gridSpan: "md:col-span-1" },
    { title: "rentals_page.facilities.items.4.title", description: "rentals_page.facilities.items.4.description", imageUrl: "https://picsum.photos/seed/pro_security/600/400", gridSpan: "md:col-span-1" },
    { title: "rentals_page.facilities.items.5.title", description: "rentals_page.facilities.items.5.description", imageUrl: "https://picsum.photos/seed/management/600/400", gridSpan: "md:col-span-2" },
    { title: "rentals_page.facilities.items.6.title", description: "rentals_page.facilities.items.6.description", imageUrl: "/rentals/professional_maintenance.png", gridSpan: "md:col-span-1" }
];
