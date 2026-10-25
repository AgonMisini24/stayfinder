import type { Property } from "@/types/property";

// Fictional properties used for development.
// Locations, prices, and ratings are demonstration data.

export const properties: Property[] = [
  {
    id: 1,
    name: "Modern city apartment",
    location: "Barcelona, Spain",
    price: 120,
    rating: 4.8,
    image: "/images/apartment.jpg",
    category: "Apartments",
  },
  {
    id: 2,
    name: "Cozy mountain cabin",
    location: "Aspen, USA",
    price: 95,
    rating: 4.9,
    image: "/images/cabin.jpg",
    category: "Cabins",
  },
  {
    id: 3,
    name: "Luxury beach villa",
    location: "Malibu, USA",
    price: 250,
    rating: 4.7,
    image: "/images/villa.jpg",
    category: "Beachfront",
  },
  {
    id: 4,
    name: "Charming countryside home",
    location: "Tuscany, Italy",
    price: 85,
    rating: 4.6,
    image: "/images/cottage.jpg",
    category: "Countryside",
  },
];

export const categories = [
  "All",
  "Apartments",
  "Cabins",
  "Beachfront",
  "Countryside",
];
