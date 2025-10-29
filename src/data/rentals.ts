

// TypeScript interfaces for rental data structures
export interface StatItem {
  value: number;
  label: string;
  suffix: string;
}

export interface FacilityItem {
  imageUrl: string;
  gridSpan: string;
}



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