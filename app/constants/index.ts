import { Product } from "../types";

export const products: Product[] = [
  {
    category: { parent: "Avatars", child: "Human-like" },
    name: "Product name",
    creator: "Creator name",
    rating: 3,
    price: 10.50,
    image: "/placeholder.svg",
    id: 1
  },
  {
    category: { parent: "Avatars", child: 'Anthro & Furry' },
    name: "Product name",
    creator: "Creator name",
    rating: 5,
    price: 10.50,
    image: "/placeholder.svg",
    id: 2
  },
  {
    category: { parent: "Avatars", child: "Robot & Cyborgs" },
    name: "Product name",
    creator: "Creator name",
    rating: 4,
    price: 10.50,
    image: "/placeholder.svg",
    id: 3
  },
  {
    category: { parent: "Fashion", child: "Clothes" },
    name: "Product name",
    creator: "Creator name",
    rating: 5,
    price: 10.50,
    image: "/placeholder.svg",
    id: 4
  },
  {
    category: { parent: "Fashion", child: "Accessories" },
    name: "Product name",
    creator: "Creator name",
    rating: 2,
    price: 10.50,
    image: "/placeholder.svg",
    id: 5
  },
  {
    "category": { "parent": "Avatars", "child": "Human-like" },
    "name": "Realistic Hero",
    "creator": "John Doe",
    "rating": 5,
    "price": 20.99,
    "image": "/placeholder.svg",
    "id": 5
  },
  {
    "category": { "parent": "Avatars", "child": "Anthro & Furry" },
    "name": "Fox Guardian",
    "creator": "Jane Smith",
    "rating": 4,
    "price": 15.75,
    "image": "/placeholder.svg",
    "id": 6
  },
  {
    "category": { "parent": "Avatars", "child": "Robot & Cyborgs" },
    "name": "Cyber Sentinel",
    "creator": "RoboWorks",
    "rating": 3,
    "price": 30.50,
    "image": "/placeholder.svg",
    "id": 7
  },
  {
    "category": { "parent": "Fashion", "child": "Clothes" },
    "name": "Casual Jacket",
    "creator": "Trendwear",
    "rating": 5,
    "price": 45.00,
    "image": "/placeholder.svg",
    "id": 8
  },
  {
    "category": { "parent": "Fashion", "child": "Accessories" },
    "name": "Gold Bracelet",
    "creator": "GoldenStyle",
    "rating": 4,
    "price": 120.25,
    "image": "/placeholder.svg",
    "id": 9
  },
  {
    "category": { "parent": "Avatars", "child": "Human-like" },
    "name": "Virtual Persona",
    "creator": "DigitalLife",
    "rating": 2,
    "price": 10.00,
    "image": "/placeholder.svg",
    "id": 10
  },
  {
    "category": { "parent": "Fashion", "child": "Accessories" },
    "name": "Leather Belt",
    "creator": "Craftsman",
    "rating": 3,
    "price": 35.99,
    "image": "/placeholder.svg",
    "id": 11
  },
  {
    "category": { "parent": "Fashion", "child": "Others" },
    "name": "Vintage Hat",
    "creator": "RetroStyles",
    "rating": 4,
    "price": 25.50,
    "image": "/placeholder.svg",
    "id": 12
  },
  {
    "category": { "parent": "Fashion", "child": "Others" },
    "name": "Handcrafted Scarf",
    "creator": "ArtisanCraft",
    "rating": 5,
    "price": 18.00,
    "image": "/placeholder.svg",
    "id": 13
  },
  {
    "category": { "parent": "Avatars", "child": "Others" },
    "name": "Mystic Shadow",
    "creator": "AvatarForge",
    "rating": 3,
    "price": 12.75,
    "image": "/placeholder.svg",
    "id": 14
  },
  {
    "category": { "parent": "Avatars", "child": "Others" },
    "name": "Neon Specter",
    "creator": "VirtualVisions",
    "rating": 4,
    "price": 22.99,
    "image": "/placeholder.svg",
    "id": 15
  }
]

export const parentCategories = [
  'Fashion',
  'Avatars',
]

export const avatarSubcategories = [
  'Human-like',
  'Anthro & Furry',
  'Robot & Cyborgs',
  'All in Avatars',
];

export const fashionSubcategories = [
  'Clothes',
  'Accessories',
  'All in Fashion',
];

export const constantSubcategories = [
  'Others',
]