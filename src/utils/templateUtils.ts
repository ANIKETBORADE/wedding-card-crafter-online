
import { TemplateItem } from "../types/invitation";

export const templates: TemplateItem[] = [
  {
    id: "elegant-floral",
    name: "Elegant Floral",
    description: "Beautiful roses and peonies with gold accents",
    previewImage: "/placeholder.svg",
  },
  {
    id: "minimal-chic",
    name: "Minimal Chic",
    description: "Clean, modern design with stylish typography",
    previewImage: "/placeholder.svg",
  },
  {
    id: "rustic-charm",
    name: "Rustic Charm",
    description: "Warm wooden textures with delicate wildflowers",
    previewImage: "/placeholder.svg",
  },
  {
    id: "classic-romance",
    name: "Classic Romance",
    description: "Timeless design with ornate calligraphy",
    previewImage: "/placeholder.svg",
  },
];

export const formatWeddingDate = (dateString: string): string => {
  if (!dateString) return "";
  
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const formatWeddingTime = (timeString: string): string => {
  if (!timeString) return "";
  
  const [hours, minutes] = timeString.split(":");
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  const formattedHour = hour % 12 || 12;
  
  return `${formattedHour}:${minutes} ${ampm}`;
};
