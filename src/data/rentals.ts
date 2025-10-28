

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
  { value: 1000, label: "موقف سيارة", suffix: "+", imageUrl: "" },
  { value: 24, label: "أمن وصيانة", suffix: "/7", imageUrl: "" },
  { value: 50000, label: "مساحة خضراء", suffix: "م²", imageUrl: "" },
  { value: 95, label: "نسبة الإشغال", suffix: "%", imageUrl: "" }
];

// Facilities available at the mall
export const facilities: FacilityItem[] = [
  { title: "براندات عالمية", description: "مواقف سيارات تتسع لأكثر من 1000 سيارة وتدار بواسطة شركة متخصصة.", imageUrl: "" , gridSpan: "md:col-span-1" },
  { title: "مواقف سيارات", description: "وصف للمرفق الجديد", imageUrl: "" , gridSpan: "md:col-span-1" },
  { title: "امن على مدار الساعه", description: "مساحات خضراء كبيرة جداً للاسترخاء والاستمتاع.", imageUrl: "" , gridSpan: "md:col-span-1" },
  { title: "مساحات خضراء", description: "شلالات مياه رائعة تضيف لمسة جمالية للمكان.", imageUrl: "" , gridSpan: "md:col-span-1" },
  { title: "شلالات مياة", description: "صيانة على مدار الساعة (سباكة، كهرباء، زراعة).", imageUrl: "" , gridSpan: "md:col-span-1" },
  { title: "العاب اطفال", description: "شركة أمن محترفة ومتخصصة لضمان سلامة الجميع.", imageUrl: "" , gridSpan: "md:col-span-1" },
  { title: "فريق صيانه محترف على مدار الساعه", description: "طرق إدارة حديثة للتعامل مع المستأجرين.", imageUrl: "/rentals/professional_maintenance.png" , gridSpan: "md:col-span-2" }
];