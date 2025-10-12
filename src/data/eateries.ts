export interface EateryDetail {
      imageUrl: string;
      descriptionKey: string;
    }

    export interface Eatery {
      id: string;
      nameKey: string;
      logoUrl: string;
      phone: string;
      details: EateryDetail[];
    }

    export const eateries: Eatery[] = [
      {
        id: "kfc", nameKey: "eateries.kfc.name", logoUrl: "/dining/kfc/logo.png", phone: "+20-123-456-7890",
        details: [
          { imageUrl: "/dining/kfc/1.webp", descriptionKey: "eateries.kfc.detail1" },
          { imageUrl: "/dining/kfc/2.webp", descriptionKey: "eateries.kfc.detail2" },
          { imageUrl: "/dining/kfc/3.webp", descriptionKey: "eateries.kfc.detail3" },
          { imageUrl: "/dining/kfc/4.webp", descriptionKey: "eateries.kfc.detail4" }
        ]
      },
      {
        id: "hardees", nameKey: "eateries.hardees.name", logoUrl: "/dining/hardees/logo.jpg", phone: "+20-123-456-7892",
        details: [
          { imageUrl: "/dining/hardees/1.webp", descriptionKey: "eateries.hardees.detail1" },
          { imageUrl: "/dining/hardees/2.webp", descriptionKey: "eateries.hardees.detail2" },
          { imageUrl: "/dining/hardees/3.webp", descriptionKey: "eateries.hardees.detail3" },
          { imageUrl: "/dining/hardees/4.webp", descriptionKey: "eateries.hardees.detail4" }
        ]
      },
      {
        id: "balbaa-village", nameKey: "eateries.balbaa-village.name", logoUrl: "/dining/balbaa/logo.png", phone: "+20-123-456-7898",
        details: [
          { imageUrl: "/dining/balbaa/1.webp", descriptionKey: "eateries.balbaa-village.detail1" },
          { imageUrl: "/dining/balbaa/2.webp", descriptionKey: "eateries.balbaa-village.detail2" },
          { imageUrl: "/dining/balbaa/3.webp", descriptionKey: "eateries.balbaa-village.detail3" },
          { imageUrl: "/dining/balbaa/4.webp", descriptionKey: "eateries.balbaa-village.detail4" }
        ]
      },
      {
        id: "blaban", nameKey: "eateries.blaban.name", logoUrl: "/dining/blaban/logo.jpg", phone: "+20-123-456-7895",
        details: [
          { imageUrl: "/dining/blaban/2 (3).webp", descriptionKey: "eateries.blaban.detail1" },
          { imageUrl: "/dining/blaban/3 (3).webp", descriptionKey: "eateries.blaban.detail2" },
          { imageUrl: "/dining/blaban/4 (1).webp", descriptionKey: "eateries.blaban.detail3" },
          { imageUrl: "/dining/blaban/images (3).webp", descriptionKey: "eateries.blaban.detail4" }
        ]
      },
      {
        id: "khatab", nameKey: "eateries.khatab.name", logoUrl: "/dining/khatab/logo.jpg", phone: "+20-123-456-7904",
        details: [
          { imageUrl: "/dining/khatab/1.webp", descriptionKey: "eateries.khatab.detail1" },
          { imageUrl: "/dining/khatab/2.webp", descriptionKey: "eateries.khatab.detail2" },
          { imageUrl: "/dining/khatab/3.webp", descriptionKey: "eateries.khatab.detail3" },
          { imageUrl: "/dining/khatab/4.webp", descriptionKey: "eateries.khatab.detail4" }
        ]
      },
      {
        id: "donia-al-gambary", nameKey: "eateries.donia-al-gambary.name", logoUrl: "/dining/donia al gambary/logo.png", phone: "+20-123-456-7910",
        details: [
          { imageUrl: "/dining/donia al gambary/1.webp", descriptionKey: "eateries.donia-al-gambary.detail1" },
          { imageUrl: "/dining/donia al gambary/2.webp", descriptionKey: "eateries.donia-al-gambary.detail2" },
          { imageUrl: "/dining/donia al gambary/3.webp", descriptionKey: "eateries.donia-al-gambary.detail3" },
          { imageUrl: "/dining/donia al gambary/4.webp", descriptionKey: "eateries.donia-al-gambary.detail4" }
        ]
      },
      {
        id: "koshary-al-tahrir", nameKey: "eateries.koshary-al-tahrir.name", logoUrl: "/dining/koshary el tahrir/logo.jpg", phone: "+20-123-456-7911",
        details: [
          { imageUrl: "/dining/koshary el tahrir/1.webp", descriptionKey: "eateries.koshary-al-tahrir.detail1" },
          { imageUrl: "/dining/koshary el tahrir/2.webp", descriptionKey: "eateries.koshary-al-tahrir.detail2" },
          { imageUrl: "/dining/koshary el tahrir/3.webp", descriptionKey: "eateries.koshary-al-tahrir.detail3" },
          { imageUrl: "/dining/koshary el tahrir/4.webp", descriptionKey: "eateries.koshary-al-tahrir.detail4" }
        ]
      },
      {
        id: "primos-pizza", nameKey: "eateries.primos-pizza.name", logoUrl: "/dining/primos pizza/logo.jpg", phone: "+20-123-456-7912",
        details: [
          { imageUrl: "/dining/primos pizza/1.jpeg", descriptionKey: "eateries.primos-pizza.detail1" },
          { imageUrl: "/dining/primos pizza/2.jpeg", descriptionKey: "eateries.primos-pizza.detail2" },
          { imageUrl: "/dining/primos pizza/3.jpeg", descriptionKey: "eateries.primos-pizza.detail3" },
          { imageUrl: "/dining/primos pizza/4.jpeg", descriptionKey: "eateries.primos-pizza.detail4" }
        ]
      },
      {
        id: "pizza-hut", nameKey: "eateries.pizza-hut.name", logoUrl: "/dining/pizza hut/logo.jpg", phone: "+20-123-456-7891",
        details: [
          { imageUrl: "/dining/pizza hut/1.jpg", descriptionKey: "eateries.pizza-hut.detail1" },
          { imageUrl: "/dining/pizza hut/2.jpg", descriptionKey: "eateries.pizza-hut.detail2" },
          { imageUrl: "/dining/pizza hut/3.jpg", descriptionKey: "eateries.pizza-hut.detail3" },
          { imageUrl: "/dining/pizza hut/4.jpg", descriptionKey: "eateries.pizza-hut.detail4" }
        ]
      }
    ];