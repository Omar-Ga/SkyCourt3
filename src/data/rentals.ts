

// TypeScript interfaces for rental data structures
export interface StatItem {
  value: number;
  label: string;
  suffix: string;
  imageUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}





export interface FacilityItem {
  title: string;
  description: string;
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
    question: 'هل يوجد دعم تسويقي للمستأجرين؟',
    answer: 'نعم، نوفر كافة الخدمات والتسهيلات للمستأجرين، بما في ذلك الدعم التسويقي عبر الحملات الإعلانية للمول والفعاليات المستمرة.',
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
  { value: 1000, label: "موقف سيارة", suffix: "+", imageUrl: "https://picsum.photos/seed/parking/600/800" },
  { value: 24, label: "أمن وصيانة", suffix: "/7", imageUrl: "https://picsum.photos/seed/security/600/800" },
  { value: 50000, label: "مساحة خضراء", suffix: "م²", imageUrl: "https://picsum.photos/seed/greenery/600/800" },
  { value: 95, label: "نسبة الإشغال", suffix: "%", imageUrl: "https://picsum.photos/seed/occupancy/600/800" }
];

// Facilities available at the mall
export const facilities: FacilityItem[] = [
  { title: "مواقف سيارات", description: "مواقف سيارات تتسع لأكثر من 1000 سيارة وتدار بواسطة شركة متخصصة.", imageUrl: "https://picsum.photos/seed/parkinglot/800/600", gridSpan: "md:col-span-2 md:row-span-2" },
  { title: "المساحات الخضراء", description: "مساحات خضراء كبيرة جداً للاسترخاء والاستمتاع.", imageUrl: "https://picsum.photos/seed/gardens/600/400", gridSpan: "md:col-span-1" },
  { title: "شلالات المياه", description: "شلالات مياه رائعة تضيف لمسة جمالية للمكان.", imageUrl: "https://picsum.photos/seed/waterfall/600/400", gridSpan: "md:col-span-1" },
  { title: "فريق الصيانة", description: "صيانة على مدار الساعة (سباكة، كهرباء، زراعة).", imageUrl: "https://picsum.photos/seed/maintenance_team/600/400", gridSpan: "md:col-span-1" },
  { title: "الأمن المحترف", description: "شركة أمن محترفة ومتخصصة لضمان سلامة الجميع.", imageUrl: "https://picsum.photos/seed/pro_security/600/400", gridSpan: "md:col-span-1" },
  { title: "الإدارة الحديثة", description: "طرق إدارة حديثة للتعامل مع المستأجرين.", imageUrl: "https://picsum.photos/seed/management/600/400", gridSpan: "md:col-span-2" }
];