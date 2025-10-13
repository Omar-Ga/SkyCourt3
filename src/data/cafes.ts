export interface CafeDetail {
  imageUrl: string;
  descriptionKey: string;
}

export interface Cafe {
  id: string;
  nameKey: string;
  logoUrl: string;
  phone: string;
  details: CafeDetail[];
  taglineKey: string;
}

export const cafes: Cafe[] = [
  {
    id: "cafe-1",
    nameKey: "cafes.cafe1.name",
    logoUrl: "/cafes/cafe1/logo.webp",
    phone: "+20-123-456-7920",
    taglineKey: "cafes.cafe1.tagline",
    details: [
      { imageUrl: "/cafes/cafe1/1.webp", descriptionKey: "cafes.cafe1.detail1" },
      { imageUrl: "/cafes/cafe1/2.webp", descriptionKey: "cafes.cafe1.detail2" },
      { imageUrl: "/cafes/cafe1/3.webp", descriptionKey: "cafes.cafe1.detail3" },
    ]
  },
  {
    id: "cafe-2",
    nameKey: "cafes.cafe2.name",
    logoUrl: "/cafes/cafe2/logo.webp",
    phone: "+20-123-456-7921",
    taglineKey: "cafes.cafe2.tagline",
    details: [
      { imageUrl: "/cafes/cafe2/1.webp", descriptionKey: "cafes.cafe2.detail1" },
      { imageUrl: "/cafes/cafe2/2.webp", descriptionKey: "cafes.cafe2.detail2" },
      { imageUrl: "/cafes/cafe2/3.webp", descriptionKey: "cafes.cafe2.detail3" },
    ]
  },
  {
    id: "cafe-3",
    nameKey: "cafes.cafe3.name",
    logoUrl: "/cafes/cafe3/logo.webp",
    phone: "+20-123-456-7922",
    taglineKey: "cafes.cafe3.tagline",
    details: [
      { imageUrl: "/cafes/cafe3/1.webp", descriptionKey: "cafes.cafe3.detail1" },
      { imageUrl: "/cafes/cafe3/2.webp", descriptionKey: "cafes.cafe3.detail2" },
      { imageUrl: "/cafes/cafe3/3.webp", descriptionKey: "cafes.cafe3.detail3" },
    ]
  },
];
