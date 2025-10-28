

// TypeScript interfaces for rental data structures
export interface StatItem {
  value: number;
  label: string;
  suffix: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}





export interface FacilityItem {
  imageUrl: string;
  gridSpan: string;
}



// FAQ items for common rental questions
export const faqItems: FaqItem[] = [
  {
    question: 'ما هي مدة العقد الإيجاري؟',
    answer: 'يتم التأجير بعقود سنوية أو أكثر حسب المساحة والتميز والموقع داخل المول.',
  },
  {
    question: 'ما المساحات المتاحة حاليا؟',
    answer: 'تتوفر مساحات متباينة ومختلفة من المتوسطة والكبيرة حسب رغبة المستأجر وطبيعة النشاط التجاري.',
  },
  {
    question: 'كيف يتم التعامل مع الصيانة؟',
    answer: 'لدينا فريق صيانة من أمهر الفنيين يعمل على مدار الساعة لضمان حل أي مشكلة تتعلق بالسباكة، الكهرباء، أو الزراعة فوراً.',
  },
  {
    question: 'من هم المستأجرون الحاليون؟',
    answer: 'نفخر باستضافة كبرى الشركات والعلامات التجارية العالمية والمحلية الشهيرة، مما يخلق بيئة تجارية غنية ومتنوعة.',
  },
  {
    question: 'كيف يمكنني معاينة المساحات؟',
    answer: 'يمكنك التواصل معنا مباشرة عبر نموذج الاستفسار أو أرقام الهواتف الموضحة لترتيب جولة خاصة في المول.',
  },
];

// Statistics items (restored - may be used elsewhere)
export const statsItems: StatItem[] = [
  { value: 1000, label: "موقف سيارة", suffix: "+" },
  { value: 24, label: "أمن وصيانة", suffix: "/7" },
  { value: 50000, label: "مساحة خضراء", suffix: "م²" },
  { value: 95, label: "نسبة الإشغال", suffix: "%" }
];

// Facilities available at the mall
export const facilities: FacilityItem[] = [
  { imageUrl: "/rentals_images/facilities_images/placeholder_1.webp", gridSpan: "md:col-span-1" },
  { imageUrl: "/rentals_images/facilities_images/placeholder_2.webp", gridSpan: "md:col-span-1" },
  { imageUrl: "/rentals_images/facilities_images/placeholder_3.webp", gridSpan: "md:col-span-1" },
  { imageUrl: "/rentals_images/facilities_images/placeholder_4.webp", gridSpan: "md:col-span-1" },
  { imageUrl: "/rentals_images/facilities_images/placeholder_5.webp", gridSpan: "md:col-span-1" },
  { imageUrl: "/rentals_images/facilities_images/placeholder_6.webp", gridSpan: "md:col-span-1" },
];