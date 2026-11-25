/*
  FOOD HUB CLIENT SETTINGS
  Replace demo restaurant/menu information with verified, authorized details.
  Set WhatsApp as country code + number, digits only (example: 9665XXXXXXXX).
*/
window.PLATFORM_CONFIG = {
  brandName: "Food Hub",
  whatsapp: "966562007930",
  currency: "SAR",
  location: "Makkah, Saudi Arabia",
  announcement: "Multiple restaurants. One easy order. • Delivered to your hotel.",
  /*
    Distance-based service charge is configured by delivery zone.
    The customer chooses their hotel/zone at checkout; final fee is confirmed
    manually on WhatsApp before you purchase food. These are DEMO values.
  */
  deliveryZones: [
    { id: "near", name: "Near / central zone", nameAr: "النطاق القريب / المركزي", fee: 10 },
    { id: "middle", name: "Middle distance zone", nameAr: "النطاق متوسط المسافة", fee: 15 },
    { id: "far", name: "Farther hotel zone", nameAr: "النطاق البعيد", fee: 25 }
  ],
  restaurants: [
    { id: "r1", name: "Al Baik", category: "Chicken & fast food", short: "A", description: "Chicken, seafood and favourites", logo: "" },
    { id: "r2", name: "McDonald's", category: "Burgers & meals", short: "M", description: "Burgers, fries and meals", logo: "" },
    { id: "r3", name: "Al Tazaj", category: "Grilled chicken", short: "T", description: "Grilled chicken and rice", logo: "" },
    { id: "r4", name: "Al Romansiah", category: "Saudi cuisine", short: "R", description: "Kabsa, mandi and rice dishes", logo: "" }
  ],
  menu: [
    { id: 101, restaurantId: "r1", category: "Chicken", name: "Crispy Chicken Meal", nameAr: "وجبة دجاج مقرمش", description: "Crispy chicken served with fries and sauce.", descriptionAr: "دجاج مقرمش يقدم مع البطاطس والصوص.", price: 25, image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=85", tag: "POPULAR" },
    { id: 102, restaurantId: "r1", category: "Chicken", name: "Chicken Nuggets", nameAr: "ناجتس الدجاج", description: "Golden chicken bites with dipping sauce.", descriptionAr: "قطع دجاج ذهبية مع صوص.", price: 18, image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=85", tag: "" },
    { id: 201, restaurantId: "r2", category: "Burgers", name: "Classic Beef Burger", nameAr: "برجر لحم كلاسيك", description: "Beef patty, cheese, lettuce and house sauce.", descriptionAr: "قطعة لحم وجبنة وخس وصوص خاص.", price: 22, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=85", tag: "FAVOURITE" },
    { id: 202, restaurantId: "r2", category: "Sides", name: "French Fries", nameAr: "بطاطس مقلية", description: "Classic golden and crispy fries.", descriptionAr: "بطاطس ذهبية ومقرمشة.", price: 10, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=85", tag: "" },
    { id: 301, restaurantId: "r3", category: "Grills", name: "Half Grilled Chicken", nameAr: "نصف دجاج مشوي", description: "Charcoal-style grilled chicken with sides.", descriptionAr: "نصف دجاج مشوي يقدم مع الأطباق الجانبية.", price: 29, image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=85", tag: "POPULAR" },
    { id: 302, restaurantId: "r3", category: "Rice", name: "Chicken Rice Meal", nameAr: "وجبة أرز بالدجاج", description: "Seasoned rice with tender chicken.", descriptionAr: "أرز متبل مع دجاج طري.", price: 26, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=85", tag: "" },
    { id: 401, restaurantId: "r4", category: "Rice", name: "Chicken Kabsa", nameAr: "كبسة دجاج", description: "Saudi spiced rice served with chicken.", descriptionAr: "أرز سعودي متبل يقدم مع الدجاج.", price: 32, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=85", tag: "TRADITIONAL" },
    { id: 402, restaurantId: "r4", category: "Rice", name: "Meat Mandi", nameAr: "مندي لحم", description: "Fragrant mandi rice with tender meat.", descriptionAr: "أرز مندي عطري مع لحم طري.", price: 48, image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=85", tag: "" }
  ]
};
