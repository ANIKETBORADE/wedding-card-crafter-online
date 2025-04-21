import { TemplateItem } from "../types/invitation";
import html2canvas from "html2canvas";

export const templates: TemplateItem[] = [
  {
    id: "elegant-floral",
    name: "Elegant Floral",
    description: "Beautiful roses and peonies with gold accents",
    previewImage: "https://images.unsplash.com/photo-1537089190225-eb4c70558ba8?auto=format&fit=crop&q=80&w=400&h=500",
    category: "floral",
    trending: true,
    animationStyle: "fade",
  },
  {
    id: "botanical-dream",
    name: "Botanical Dream",
    description: "Lush greenery with elegant typography",
    previewImage: "https://images.unsplash.com/photo-1470756544705-1848092fbe5f?auto=format&fit=crop&q=80&w=400&h=500",
    category: "floral",
    animationStyle: "fade",
  },
  {
    id: "celestial-romance",
    name: "Celestial Romance",
    description: "Starry night theme with deep blues",
    previewImage: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&q=80&w=400&h=500",
    category: "themed",
    animationStyle: "twinkle",
    trending: true,
  },
  {
    id: "minimal-chic",
    name: "Minimal Chic",
    description: "Clean, modern design with stylish typography",
    previewImage: "https://images.unsplash.com/photo-1509719662284-8e6055be2320?auto=format&fit=crop&q=80&w=400&h=500",
    category: "minimalist",
    animationStyle: "slide",
  },
  {
    id: "rustic-charm",
    name: "Rustic Charm",
    description: "Warm wooden textures with delicate wildflowers",
    previewImage: "https://images.unsplash.com/photo-1623000050730-b936b5a3c0c7?auto=format&fit=crop&q=80&w=400&h=500",
    category: "rustic",
    animationStyle: "fade",
  },
  {
    id: "geometric-luxury",
    name: "Geometric Luxury",
    description: "Sophisticated patterns with gold accents",
    previewImage: "https://images.unsplash.com/photo-1532983330958-4b32bbe9bb0e?auto=format&fit=crop&q=80&w=400&h=500",
    category: "modern",
    animationStyle: "fade",
  },
  {
    id: "minimalist-pastel",
    name: "Minimalist Pastel",
    description: "Soft pastel colors with clean layout",
    previewImage: "https://images.unsplash.com/photo-1550784685-71afe6148a25?auto=format&fit=crop&q=80&w=400&h=500",
    category: "minimalist",
    animationStyle: "fade",
  },
  {
    id: "classic-romance",
    name: "Classic Romance",
    description: "Timeless design with ornate calligraphy",
    previewImage: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&q=80&w=400&h=500",
    category: "elegant",
    animationStyle: "fade",
  },
  {
    id: "garden-watercolor",
    name: "Garden Watercolor",
    description: "Elegant watercolor florals with soft greenery",
    previewImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=400&h=500",
    category: "floral",
    animationStyle: "fade",
  },
  {
    id: "modern-geometric",
    name: "Modern Geometric",
    description: "Sleek design with bold geometric patterns",
    previewImage: "https://images.unsplash.com/photo-1532983330958-4b32bbe9bb0e?auto=format&fit=crop&q=80&w=400&h=500",
    category: "modern",
    animationStyle: "slide",
    trending: true,
  },
  {
    id: "vintage-lace",
    name: "Vintage Lace",
    description: "Romantic lace patterns with nostalgic charm",
    previewImage: "https://images.unsplash.com/photo-1550784685-71afe6148a25?auto=format&fit=crop&q=80&w=400&h=500",
    category: "elegant",
    animationStyle: "fade",
  },
  {
    id: "royal-elegance",
    name: "Royal Elegance",
    description: "Luxurious gold foil with deep burgundy accents",
    previewImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=400&h=500",
    category: "elegant",
    animationStyle: "fade",
  },
  {
    id: "bohemian-dreams",
    name: "Bohemian Dreams",
    description: "Free-spirited design with earthy tones and textures",
    previewImage: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=400&h=500",
    category: "themed",
    animationStyle: "float",
  },
  {
    id: "tropical-paradise",
    name: "Tropical Paradise",
    description: "Vibrant tropical leaves and exotic flowers",
    previewImage: "https://images.unsplash.com/photo-1536166008484-c896c5f01c9d?auto=format&fit=crop&q=80&w=400&h=500",
    category: "themed",
    animationStyle: "slide",
  },
  {
    id: "art-deco",
    name: "Art Deco",
    description: "Glamorous 1920s inspired geometric patterns",
    previewImage: "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?auto=format&fit=crop&q=80&w=400&h=500",
    category: "themed",
    animationStyle: "shimmer",
    trending: true,
  },
  {
    id: "watercolor-sunset",
    name: "Watercolor Sunset",
    description: "Dreamy sunset hues in watercolor wash",
    previewImage: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=400&h=500",
    category: "floral",
    animationStyle: "fade",
  },
  {
    id: "enchanted-garden",
    name: "Enchanted Garden",
    description: "Whimsical florals with fairy tale elements",
    previewImage: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=400&h=500",
    category: "floral",
    animationStyle: "fade",
  },
  {
    id: "marble-luxury",
    name: "Marble Luxury",
    description: "Sophisticated marble textures with gold details",
    previewImage: "https://images.unsplash.com/photo-1563293756-517113726ab0?auto=format&fit=crop&q=80&w=400&h=500",
    category: "elegant",
    animationStyle: "colorShift",
  },
  {
    id: "lavender-dreams",
    name: "Lavender Dreams",
    description: "Serene lavender fields with delicate illustrations",
    previewImage: "https://images.unsplash.com/photo-1468581264429-2548ef9eb732?auto=format&fit=crop&q=80&w=400&h=500",
    category: "floral",
    animationStyle: "fade",
  },
  {
    id: "minimalist-gold",
    name: "Minimalist Gold",
    description: "Clean design with elegant gold foil accents",
    previewImage: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&q=80&w=400&h=500",
    category: "minimalist",
    animationStyle: "fade",
    trending: true,
  },
  {
    id: "vintage-botanical",
    name: "Vintage Botanical",
    description: "Classic botanical illustrations with vintage charm",
    previewImage: "https://images.unsplash.com/photo-1445510491599-c391e8046a68?auto=format&fit=crop&q=80&w=400&h=500",
    category: "floral",
    animationStyle: "fade",
  },
  {
    id: "daisy-elegance",
    name: "Daisy Elegance",
    description: "Charming daisy flowers with gold lettering on cream",
    previewImage: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=400&h=500",
    category: "floral",
    animationStyle: "fade",
    trending: true,
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

export const getFileExtension = (fileName: string): string => {
  return fileName.slice(((fileName.lastIndexOf(".") - 1) >>> 0) + 2);
};

export const validateFileType = (file: File): boolean => {
  const acceptedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
  return acceptedTypes.includes(file.type);
};

export const validateFileSize = (file: File, maxSizeMB = 5): boolean => {
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  return file.size <= maxSizeBytes;
};

export const convertFileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};

export const downloadInvitation = async (elementId: string, weddingDetails: any) => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error("Invitation element not found");
    }
    
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
    });
    
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    
    const brideFirstName = weddingDetails.brideFirstName || "";
    const groomFirstName = weddingDetails.groomFirstName || "";
    const fileName = `${brideFirstName}_and_${groomFirstName}_wedding_invitation.png`;
    
    link.download = fileName;
    link.href = image;
    link.click();
    
    return true;
  } catch (error) {
    console.error("Error downloading invitation:", error);
    return false;
  }
};

export const getAnimationStyle = (templateId: string): string => {
  const template = templates.find(t => t.id === templateId);
  return template?.animationStyle || "fade";
};

export const getTemplatesByCategory = (category: string) => {
  if (category === "all") {
    return templates;
  }
  return templates.filter(template => template.category === category);
};

export const getTrendingTemplates = () => {
  return templates.filter(template => template.trending);
};
