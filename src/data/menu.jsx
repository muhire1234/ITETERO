import fastfood from "../assets/images/fastfood.jpeg";
import hero from "../assets/images/hero.png";
import tea from "../assets/images/tea.jpeg";
import juice from "../assets/images/juice.jpeg";
import lique from "../assets/images/lique.jpeg";

export const menuCategories = [
  {
    id: "coffee",
    label: "Coffee",
    icon: "☕",
    bannerImg: hero,
    items: [
      {
        name: "Espresso",
        ing: "The foundational concentrated shot used in most coffee drinks.",
        ingLabel: "About",
      },
      {
        name: "Americano",
        ing: "Espresso diluted with hot water; similar strength to regular brewed coffee.",
        ingLabel: "About",
      },
      {
        name: "Caffe Latte",
        ing: "Espresso with lots of steamed milk; mild and creamy.",
        ingLabel: "About",
      },
      {
        name: "Cappuccino",
        ing: "Espresso with equal parts steamed milk and foam.",
        ingLabel: "About",
      },
      {
        name: "Flat White",
        ing: "Espresso with finely textured milk (less foam than cappuccino).",
        ingLabel: "About",
      },
      {
        name: "Macchiato",
        ing: "Espresso with just a small amount of milk added.",
        ingLabel: "About",
      },
      {
        name: "Mocha",
        ing: "Espresso combined with chocolate and milk.",
        ingLabel: "About",
      },
      {
        name: "Drip Coffee (Filter Coffee)",
        ing: "Brewed by slowly passing hot water through ground coffee.",
        ingLabel: "About",
      },
      {
        name: "Cold Brew",
        ing: "Coffee steeped in cold water for hours; smooth and less acidic.",
        ingLabel: "About",
      },
      {
        name: "Iced Coffee",
        ing: "Regular brewed coffee served over ice (different from cold brew).",
        ingLabel: "About",
      },
    ],
  },
  {
    id: "tea",
    label: "Tea",
    icon: "🍵",
    bannerImg: tea,
    items: [
      {
        name: "Matcha Latte",
        price: 5.5,
        ing: "Matcha, oat milk",
        
      },
      {
        name: "Masala Chai",
        price: 4.1,
        ing: "Black tea, spices, milk",
        
      },
      {
        name: "Ginger Lemon Tea",
        price: 3.8,
        ing: "Green tea, ginger, lemon",
        
      },
    ],
  },
  {
    id: "juice",
    label: "Juice",
    icon: "🍹",
    bannerImg: juice,
    items: [
      {
        name: "Mango Fresh",
        price: 4.6,
        ing: "Mango, ice",
        
      },
      {
        name: "Tropical Mix",
        price: 4.9,
        ing: "Pineapple, orange, mint",
        
      },
      {
        name: "Berry Blast",
        price: 5.2,
        ing: "Strawberry, blueberry, yogurt",
        
      },
    ],
  },
  {
    id: "bar",
    label: "Bar",
    icon: "🍸",
    bannerImg: lique,
    items: [
      {
        name: "Classic Mojito",
        price: 7.8,
        ing: "Mint, lime, soda",
        
      },
      {
        name: "Old Fashioned",
        price: 8.9,
        ing: "Bourbon, bitters, sugar",
        
      },
      {
        name: "Sunset Cooler",
        price: 7.2,
        ing: "Citrus, ginger ale",
        
      },
    ],
  },
  {
    id: "fast-food",
    label: "Fast Food",
    icon: "🍔",
    bannerImg: fastfood,
    items: [
      {
        name: "Crispy Chicken Burger",
        price: 6.7,
        ing: "Chicken, lettuce, sauce",
        
      },
      {
        name: "Loaded Fries",
        price: 4.4,
        ing: "Potato, cheese, herbs",
        
      },
      {
        name: "Mini Pizza Slice",
        price: 5.3,
        ing: "Tomato, mozzarella, basil",
        
      },
    ],
  },
];
