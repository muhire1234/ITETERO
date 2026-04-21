import fastfood from "../assets/images/fastfood.jpeg";
import hero from "../assets/images/hero.png";
import tea from "../assets/images/tea.jpeg";
import juice from "../assets/images/juice.jpeg";
import lique from "../assets/images/lique.jpeg";
import smoothies from "../assets/images/smoothies.jpeg";
import milk from "../assets/images/milk.jpeg";
import ice from "../assets/images/ice.jpeg";
export const menuCategories = [
  {
    id: "coffee",
    label: "Coffee",
    icon: "☕",
    bannerImg: hero,
    items: [
      {
        name: "Espresso",
        ing: "2000",
        ingLabel: "RWF",
      },
      {
        name: "Americano",
        ing: "2000",
        ingLabel: "RWF  ",
      },
      {
        name: "Caffe Latte",
        ing: "2500",
        ingLabel: "RWF  ",
      },
      {
        name: "Cappuccino",
        ing: "3000",
        ingLabel: "RWF  ",
      },
      {
        name: "Flat White",
        ing: "2500",
        ingLabel: "RWF    ",
      },
      {
        name: "Macchiato",
        ing: "2500",
        ingLabel: "RWF  ",
      },
      {
        name: "Mocha",
        ing: "3000",
        ingLabel: "RWF ",
      },
      {
        name: "Drip Coffee (Filter Coffee)",
        ing: "3000",
        ingLabel: "RWF  ",
      },
      {
        name: "Cold Brew",
        ing: "3000",
        ingLabel: "RWF  ",
      },
      {
        name: "Iced Coffee",
        ing: "3000",
        ingLabel: "RWF ",
      },
    ],
  },
  {
    id: "tea ",
    label: "Tea & chocolate",
    icon: "🍵",
    bannerImg: tea,
    items: [
      {
        name: "African tea",
        ing: "2000",
        ingLabel: "RWF  ",
      },
      {
        name: "Spice tea",
        ing: "2500",
        ingLabel: "RWF  ",  
      },
      {
        name: "Ginger Tea",
        ing: "2000",
        ingLabel: "RWF  ",
      },
      {
        name: "Black Tea",
        ing: "2500",
        ingLabel: "RWF  ",
      },
      {
        name: "Lemon Tea",
        ing: "2500",
        ingLabel: "RWF  ",
      },
      {
        name: "Tumeric Tea",
        ing: "2500",
        ingLabel: "RWF  ",
      },
      {
        name: "Hot Chocolate ",
        ing: "3000",
        ingLabel: "RWF  ",
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
        name: "Mango juice",
        ing: "3000",
        ingLabel: "RWF  ",
      },
      {
        name: "passion juice",
        ing: "3000",
        ingLabel: "RWF  " ,
       
        
      },
      {
        name: " Pineapple juice",
        ing: "3000",
        ingLabel: "RWF  ",
      },
      {
        name: "Tree Tomato juice",
        ing: "3000",
        ingLabel: "RWF  ",
      },
      {
        name: " Tropical Mixed juice",
        ing: "3000",
        ingLabel: "RWF  ",
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
    id: "smoothies",
    label: "Smoothies",
    icon: "🥤",
    bannerImg: smoothies,
    items: [
      {
        name: "Mango Smoothie",
        ing: "4000",
        ingLabel: "RWF",
      },
      {
        name: "Strawberry Smoothie",
        ing: "4000",
        ingLabel: "RWF",
      },
      {
        name: "Pineapple Smoothie",
        ing: "4000",
        ingLabel: "RWF",
      },
    ],
  },
  {
    id: "ice-cream",
    label: "Ice Cream",
    icon: "🍦",
    bannerImg: ice,
    items: [
      {
        name: "Vanilla Ice Cream",
        ing: "2000",
        ingLabel: "RWF",
      },
      {
        name: "Chocolate Ice Cream",
        ing: "2000",
        ingLabel: "RWF",
      },
      {
        name: "Strawberry Ice Cream",
        ing: "2000",
        ingLabel: "RWF",
      },
    ],
  },
  {
    id: "milkshakes",
    label: "Milkshakes",
    icon: "🥛",
    bannerImg: milk,
    items: [
      {
        name: "Vanilla Milkshake",
        ing: "4000",
        ingLabel: "RWF",
      },
      {
        name: "Chocolate Milkshake",
        ing: "4000",
        ingLabel: "RWF",
      },
      {
        name: "Strawberry Milkshake",
        ing: "4000",
        ingLabel: "RWF",
      },
        {
        name: "Banana Milkshake",
        ing: "4000",
        ingLabel: "RWF",
        }
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
