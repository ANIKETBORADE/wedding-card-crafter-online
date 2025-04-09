
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
    id: "classic-romance",
    name: "Classic Romance",
    description: "Timeless design with ornate calligraphy",
    previewImage: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&q=80&w=400&h=500",
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
