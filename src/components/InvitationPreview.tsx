
import React, { useRef } from "react";
import { WeddingDetails } from "../types/invitation";
import { downloadInvitation } from "../utils/templateUtils";
import { useToast } from "@/hooks/use-toast";
import TemplateChangeDropdown from "./TemplateChangeDropdown";
import PhotosGallery from "./PhotosGallery";
import InvitationActions from "./InvitationActions";

// Import all template components
import ElegantFloralTemplate from "./templates/ElegantFloralTemplate";
import MinimalChicTemplate from "./templates/MinimalChicTemplate";
import RusticCharmTemplate from "./templates/RusticCharmTemplate";
import DefaultTemplate from "./templates/DefaultTemplate";
import ClassicRomanceTemplate from "./templates/ClassicRomanceTemplate";
import GardenWatercolorTemplate from "./templates/GardenWatercolorTemplate";
import ModernGeometricTemplate from "./templates/ModernGeometricTemplate";
import VintageLaceTemplate from "./templates/VintageLaceTemplate";

interface InvitationPreviewProps {
  weddingDetails: WeddingDetails;
  templateId: string;
  onEdit: () => void;
  onTemplateChange: (templateId: string) => void;
}

const InvitationPreview: React.FC<InvitationPreviewProps> = ({
  weddingDetails,
  templateId,
  onEdit,
  onTemplateChange,
}) => {
  const { toast } = useToast();
  const invitationRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    try {
      const success = await downloadInvitation("invitation-card", weddingDetails);
      if (success) {
        toast({
          title: "Success!",
          description: "Your invitation has been downloaded.",
        });
      } else {
        toast({
          title: "Download failed",
          description: "There was an issue downloading your invitation.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Download error:", error);
      toast({
        title: "Download failed",
        description: "There was an error creating your invitation image.",
        variant: "destructive",
      });
    }
  };

  const handleShare = async () => {
    toast({
      title: "Share feature",
      description: "The share feature will be available soon!",
    });
  };

  const renderTemplate = () => {
    switch (templateId) {
      case "elegant-floral":
        return <ElegantFloralTemplate weddingDetails={weddingDetails} />;
      case "minimal-chic":
        return <MinimalChicTemplate weddingDetails={weddingDetails} />;
      case "rustic-charm":
        return <RusticCharmTemplate weddingDetails={weddingDetails} />;
      case "classic-romance":
        return <ClassicRomanceTemplate weddingDetails={weddingDetails} />;
      case "garden-watercolor":
        return <GardenWatercolorTemplate weddingDetails={weddingDetails} />;
      case "modern-geometric":
        return <ModernGeometricTemplate weddingDetails={weddingDetails} />;
      case "vintage-lace":
        return <VintageLaceTemplate weddingDetails={weddingDetails} />;
      default:
        return <DefaultTemplate weddingDetails={weddingDetails} />;
    }
  };

  return (
    <div className="py-16 bg-wedding-cream/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Wedding Invitation Preview</h2>
          <div className="fancy-separator">
            <span>❖</span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here's a preview of your beautiful wedding invitation. You can download it, share it, or go back to edit.
          </p>
        </div>

        <div className="mb-6 flex justify-center">
          <TemplateChangeDropdown 
            templateId={templateId} 
            onTemplateChange={onTemplateChange} 
          />
        </div>

        <div className="mb-12" ref={invitationRef}>
          {renderTemplate()}
        </div>

        <PhotosGallery photos={weddingDetails.photos || []} />

        <InvitationActions 
          onEdit={onEdit} 
          onDownload={handleDownload}
          onShare={handleShare}
        />
      </div>
    </div>
  );
};

export default InvitationPreview;
