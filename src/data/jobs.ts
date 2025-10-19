export interface Job {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  department: {
    en: string;
    ar: string;
  };
  type: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  location: {
    en: string;
    ar: string;
  };
  salaryRange: string;
  postedDate: {
    en: string;
    ar: string;
  };
}

export const JOBS: Job[] = [
  {
    id: '1',
    title: {
      en: 'Senior Frontend Engineer',
      ar: 'مهندس واجهة أمامية أول',
    },
    department: {
      en: 'Engineering',
      ar: 'الهندسة',
    },
    type: {
      en: 'Full-time',
      ar: 'دوام كامل',
    },
    description: {
      en: 'We\'re looking for an experienced frontend engineer to help build our next-generation web platform. You\'ll work closely with React, TypeScript, and modern tooling to create exceptional user experiences.',
      ar: 'نحن نبحث عن مهندس واجهة أمامية من ذوي الخبرة للمساعدة في بناء منصة الويب من الجيل التالي. ستعمل عن كثب مع React و TypeScript والأدوات الحديثة لإنشاء تجارب مستخدم استثنائية.',
    },
    location: {
      en: 'Remote (US)',
      ar: 'عن بعد (الولايات المتحدة)',
    },
    salaryRange: '$140k - $180k',
    postedDate: {
      en: '2 days ago',
      ar: 'منذ يومين',
    },
  },
  {
    id: '2',
    title: {
      en: 'Product Designer',
      ar: 'مصمم منتجات',
    },
    department: {
      en: 'Design',
      ar: 'التصميم',
    },
    type: {
      en: 'Full-time',
      ar: 'دوام كامل',
    },
    description: {
      en: 'Join our design team to craft intuitive and beautiful products. You\'ll collaborate closely with engineers and product managers to define and deliver exceptional user experiences.',
      ar: 'انضم إلى فريق التصميم لدينا لصياغة منتجات بديهية وجميلة. ستتعاون بشكل وثيق مع المهندسين ومديري المنتجات لتحديد وتقديم تجارب مستخدم استثنائائية.',
    },
    location: {
      en: 'San Francisco, CA',
      ar: 'سان فرانسيسكو، كاليفورنيا',
    },
    salaryRange: '$130k - $160k',
    postedDate: {
      en: '5 days ago',
      ar: 'منذ 5 أيام',
    },
  },
  {
    id: '3',
    title: {
      en: 'Senior Backend Engineer',
      ar: 'مهندس خلفية أول',
    },
    department: {
      en: 'Engineering',
      ar: 'الهندسة',
    },
    type: {
      en: 'Full-time',
      ar: 'دوام كامل',
    },
    description: {
      en: 'Help us scale our infrastructure to millions of users. You\'ll design and implement robust backend systems using Node.js, PostgreSQL, and cloud-native technologies.',
      ar: 'ساعدنا في توسيع نطاق بنيتنا التحتية لملايين المستخدمين. ستقوم بتصميم وتنفيذ أنظمة خلفية قوية باستخدام Node.js و PostgreSQL والتقنيات السحابية الأصلية.',
    },
    location: {
      en: 'Remote (Global)',
      ar: 'عن بعد (عالمي)',
    },
    salaryRange: '$150k - $190k',
    postedDate: {
      en: '1 week ago',
      ar: 'منذ أسبوع',
    },
  },
  {
    id: '4',
    title: {
      en: 'DevOps Engineer',
      ar: 'مهندس DevOps',
    },
    department: {
      en: 'Infrastructure',
      ar: 'البنية التحتية',
    },
    type: {
      en: 'Full-time',
      ar: 'دوام كامل',
    },
    description: {
      en: 'Build and maintain our cloud infrastructure and CI/CD pipelines. You\'ll work with Kubernetes, AWS, and modern DevOps tools to ensure our platform is reliable and scalable.',
      ar: 'بناء وصيانة البنية التحتية السحابية وخطوط CI/CD. ستعمل مع Kubernetes و AWS وأدوات DevOps الحديثة لضمان موثوقية منصتنا وقابليتها للتوسع.',
    },
    location: {
      en: 'New York, NY',
      ar: 'نيويورك، نيويورك',
    },
    salaryRange: '$140k - $170k',
    postedDate: {
      en: '1 week ago',
      ar: 'منذ أسبوع',
    },
  },
  {
    id: '5',
    title: {
      en: 'Marketing Manager',
      ar: 'مدير تسويق',
    },
    department: {
      en: 'Marketing',
      ar: 'التسويق',
    },
    type: {
      en: 'Full-time',
      ar: 'دوام كامل',
    },
    description: {
      en: 'Lead our marketing initiatives and grow our brand presence. You\'ll develop and execute strategies across content, social media, and digital channels to reach our target audience.',
      ar: 'قيادة مبادراتنا التسويقية وتنمية حضور علامتنا التجارية. ستقوم بتطوير وتنفيذ استراتيجيات عبر المحتوى ووسائل التواصل الاجتماعي والقنوات الرقمية للوصول إلى جمهورنا المستهدف.',
    },
    location: {
      en: 'Remote (US)',
      ar: 'عن بعد (الولايات المتحدة)',
    },
    salaryRange: '$110k - $140k',
    postedDate: {
      en: '2 weeks ago',
      ar: 'منذ أسبوعين',
    },
  },
  {
    id: '6',
    title: {
      en: 'Customer Success Lead',
      ar: 'قائد نجاح العملاء',
    },
    department: {
      en: 'Customer Success',
      ar: 'نجاح العملاء',
    },
    type: {
      en: 'Full-time',
      ar: 'دوام كامل',
    },
    description: {
      en: 'Be the voice of our customers and help them succeed with our platform. You\'ll build relationships, gather feedback, and work cross-functionally to drive product improvements.',
      ar: 'كن صوت عملائنا وساعدهم على النجاح من خلال منصتنا. ستقوم ببناء العلاقات وجمع التعليقات والعمل بشكل متعدد الوظائف لدفع تحسينات المنتج.',
    },
    location: {
      en: 'Austin, TX',
      ar: 'أوستن، تكساس',
    },
    salaryRange: '$90k - $120k',
    postedDate: {
      en: '2 weeks ago',
      ar: 'منذ أسبوعين',
    },
  },
];