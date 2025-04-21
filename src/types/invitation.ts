export interface WeddingDetails {
  brideFirstName: string;
  brideLastName: string;
  groomFirstName: string;
  groomLastName: string;
  weddingDate: string;
  weddingTime: string;
  venue: string;
  venueAddress: string;
  receptionVenue?: string;
  receptionAddress?: string;
  additionalInfo?: string;
  photos?: string[]; // Add this line for photo URLs
}

export interface TemplateItem {
  id: string;
  name: string;
  description: string;
  previewImage: string;
  category?: string; 
  trending?: boolean;
  animationStyle?: string;
}

export interface GuestInfo {
  name: string;
  email: string;
}
