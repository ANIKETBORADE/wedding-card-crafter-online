
import { TemplateItem } from "../types/invitation";
import html2canvas from "html2canvas";

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
