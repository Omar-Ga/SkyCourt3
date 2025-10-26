
export interface Testimonial {
  logoUrl: string;
  quote: string;
  author: string;
  storeImageUrl: string;
  result: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TimelineItem {
  title: string;
  description: string;
}

export interface StatItem {
    value: number;
    label: string;
    suffix: string;
    imageUrl: string;
}

export interface FacilityItem {
    title: string;
    description: string;
    imageUrl: string;
    gridSpan: string;
}
