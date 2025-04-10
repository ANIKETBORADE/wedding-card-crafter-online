
import { TemplateItem } from "../types/invitation";
import html2canvas from "html2canvas";

export const templates: TemplateItem[] = [
  {
    id: "elegant-floral",
    name: "Elegant Floral",
    description: "Beautiful roses and peonies with gold accents",
    previewImage: "https://images.unsplash.com/photo-1537089190225-eb4c70558ba8?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    id: "botanical-dream",
    name: "Botanical Dream",
    description: "Lush greenery with elegant typography",
    previewImage: "https://images.unsplash.com/photo-1470756544705-1848092fbe5f?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    id: "celestial-romance",
    name: "Celestial Romance",
    description: "Starry night theme with deep blues",
    previewImage: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    id: "minimal-chic",
    name: "Minimal Chic",
    description: "Clean, modern design with stylish typography",
    previewImage: "https://images.unsplash.com/photo-1509719662284-8e6055be2320?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    id: "rustic-charm",
    name: "Rustic Charm",
    description: "Warm wooden textures with delicate wildflowers",
    previewImage: "https://images.unsplash.com/photo-1623000050730-b936b5a3c0c7?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    id: "geometric-luxury",
    name: "Geometric Luxury",
    description: "Sophisticated patterns with gold accents",
    previewImage: "https://images.unsplash.com/photo-1532983330958-4b32bbe9bb0e?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    id: "minimalist-pastel",
    name: "Minimalist Pastel",
    description: "Soft pastel colors with clean layout",
    previewImage: "https://images.unsplash.com/photo-1550784685-71afe6148a25?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    id: "classic-romance",
    name: "Classic Romance",
    description: "Timeless design with ornate calligraphy",
    previewImage: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    id: "garden-watercolor",
    name: "Garden Watercolor",
    description: "Elegant watercolor florals with soft greenery",
    previewImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    id: "modern-geometric",
    name: "Modern Geometric",
    description: "Sleek design with bold geometric patterns",
    previewImage: "https://images.unsplash.com/photo-1532983330958-4b32bbe9bb0e?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    id: "vintage-lace",
    name: "Vintage Lace",
    description: "Romantic lace patterns with nostalgic charm",
    previewImage: "https://images.unsplash.com/photo-1550784685-71afe6148a25?auto=format&fit=crop&q=80&w=400&h=500",
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
