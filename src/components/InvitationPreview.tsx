
import React, { useRef, useState, useEffect } from "react";
import { WeddingDetails } from "../types/invitation";
import { downloadInvitation, templates } from "../utils/templateUtils";
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
import BotanicalDreamTemplate from "./templates/BotanicalDreamTemplate";
import CelestialRomanceTemplate from "./templates/CelestialRomanceTemplate";
import GeometricLuxuryTemplate from "./templates/GeometricLuxuryTemplate";
import MinimalistPastelTemplate from "./templates/MinimalistPastelTemplate";
import RoyalEleganceTemplate from "./templates/RoyalEleganceTemplate";
import BohemianDreamsTemplate from "./templates/BohemianDreamsTemplate";
import TropicalParadiseTemplate from "./templates/TropicalParadiseTemplate";
import ArtDecoTemplate from "./templates/ArtDecoTemplate";
import WatercolorSunsetTemplate from "./templates/WatercolorSunsetTemplate";
import EnchantedGardenTemplate from "./templates/EnchantedGardenTemplate";
import MarbleLuxuryTemplate from "./templates/MarbleLuxuryTemplate";
import LavenderDreamsTemplate from "./templates/LavenderDreamsTemplate";
import MinimalistGoldTemplate from "./templates/MinimalistGoldTemplate";
import VintageBotanicalTemplate from "./templates/VintageBotanicalTemplate";
import DaisyEleganceTemplate from "./templates/DaisyEleganceTemplate";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  const [isPreviewMode, setIsPreviewMode] = useState(true);
  const [previewingAll, setPreviewingAll] = useState(false);
  const [activeTemplateIndex, setActiveTemplateIndex] = useState(0);
  const [previewCategory, setPreviewCategory] = useState("all");

  // Group templates by category for the preview mode
  const templateCategories = {
    all: templates,
    elegant: templates.filter(t => t.category === "elegant"),
    modern: templates.filter(t => t.category === "modern"),
    rustic: templates.filter(t => t.category === "rustic"),
    minimalist: templates.filter(t => t.category === "minimalist"),
    floral: templates.filter(t => t.category === "floral"),
    themed: templates.filter(t => t.category === "themed"),
  };

  useEffect(() => {
    // Reset animations when template changes
    if (!previewingAll) {
      const template = templates.find(t => t.id === templateId);
      if (template) {
        const index = templates.indexOf(template);
        setActiveTemplateIndex(index);
      }
    }
  }, [templateId, previewingAll]);

  // Auto rotate templates when in preview all mode
  useEffect(() => {
    if (previewingAll) {
      const interval = setInterval(() => {
        setActiveTemplateIndex(prev => {
          const categoryTemplates = templateCategories[previewCategory as keyof typeof templateCategories];
          const nextIndex = (prev + 1) % categoryTemplates.length;
          
          // Update the selected template
          const nextTemplate = categoryTemplates[nextIndex];
          if (nextTemplate) {
            onTemplateChange(nextTemplate.id);
          }
          
          return nextIndex;
        });
      }, 5000); // Change template every 5 seconds
      
      return () => clearInterval(interval);
    }
  }, [previewingAll, previewCategory, onTemplateChange]);

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

  const togglePreviewMode = () => {
    setIsPreviewMode(!isPreviewMode);
    setPreviewingAll(false);
  };

  const startPreviewingAll = () => {
    setPreviewingAll(true);
    setIsPreviewMode(true);
    // Start with the first template in the category
    const categoryTemplates = templateCategories[previewCategory as keyof typeof templateCategories];
    if (categoryTemplates && categoryTemplates.length > 0) {
      setActiveTemplateIndex(0);
      onTemplateChange(categoryTemplates[0].id);
    }
  };

  const stopPreviewingAll = () => {
    setPreviewingAll(false);
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
      case "botanical-dream":
        return <BotanicalDreamTemplate weddingDetails={weddingDetails} />;
      case "celestial-romance":
        return <CelestialRomanceTemplate weddingDetails={weddingDetails} />;
      case "geometric-luxury":
        return <GeometricLuxuryTemplate weddingDetails={weddingDetails} />;
      case "minimalist-pastel":
        return <MinimalistPastelTemplate weddingDetails={weddingDetails} />;
      case "royal-elegance":
        return <RoyalEleganceTemplate weddingDetails={weddingDetails} />;
      case "bohemian-dreams":
        return <BohemianDreamsTemplate weddingDetails={weddingDetails} />;
      case "tropical-paradise":
        return <TropicalParadiseTemplate weddingDetails={weddingDetails} />;
      case "art-deco":
        return <ArtDecoTemplate weddingDetails={weddingDetails} />;
      case "watercolor-sunset":
        return <WatercolorSunsetTemplate weddingDetails={weddingDetails} />;
      case "enchanted-garden":
        return <EnchantedGardenTemplate weddingDetails={weddingDetails} />;
      case "marble-luxury":
        return <MarbleLuxuryTemplate weddingDetails={weddingDetails} />;
      case "lavender-dreams":
        return <LavenderDreamsTemplate weddingDetails={weddingDetails} />;
      case "minimalist-gold":
        return <MinimalistGoldTemplate weddingDetails={weddingDetails} />;
      case "vintage-botanical":
        return <VintageBotanicalTemplate weddingDetails={weddingDetails} />;
      case "daisy-elegance":
        return <DaisyEleganceTemplate weddingDetails={weddingDetails} />;
      default:
        return <DefaultTemplate weddingDetails={weddingDetails} />;
    }
  };

  return (
    <div className="py-16 bg-wedding-cream/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Wedding Invitation Preview</h2>
          <div className="fancy-separator">
            <span>❖</span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here's a preview of your beautiful wedding invitation. You can download it, share it, or go back to edit.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap justify-center gap-4">
          {!previewingAll ? (
            <>
              <TemplateChangeDropdown 
                templateId={templateId} 
                onTemplateChange={onTemplateChange} 
              />
              <button 
                onClick={togglePreviewMode} 
                className="flex items-center gap-2 border border-wedding-gold rounded-md px-4 py-2 text-wedding-gold hover:bg-wedding-gold/10 transition-colors"
              >
                {isPreviewMode ? "Simple View" : "Animation Preview"}
              </button>
              <button 
                onClick={startPreviewingAll}
                className="flex items-center gap-2 border border-wedding-rose rounded-md px-4 py-2 text-wedding-rose hover:bg-wedding-rose/10 transition-colors"
              >
                Preview All Templates
              </button>
            </>
          ) : (
            <div className="w-full max-w-3xl">
              <div className="mb-4 text-center">
                <h3 className="text-xl font-medium mb-2">Previewing All Templates</h3>
                <p className="text-gray-600">See how your invitation looks in different styles</p>
              </div>
              
              <Tabs value={previewCategory} onValueChange={setPreviewCategory} className="w-full">
                <TabsList className="w-full justify-center bg-transparent h-auto p-0 mb-4 border-b space-x-4">
                  <TabsTrigger value="all" className="data-[state=active]:bg-transparent data-[state=active]:text-wedding-gold data-[state=active]:border-b-2 data-[state=active]:border-wedding-gold rounded-none pb-2">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="elegant" className="data-[state=active]:bg-transparent data-[state=active]:text-wedding-gold data-[state=active]:border-b-2 data-[state=active]:border-wedding-gold rounded-none pb-2">
                    Elegant
                  </TabsTrigger>
                  <TabsTrigger value="modern" className="data-[state=active]:bg-transparent data-[state=active]:text-wedding-gold data-[state=active]:border-b-2 data-[state=active]:border-wedding-gold rounded-none pb-2">
                    Modern
                  </TabsTrigger>
                  <TabsTrigger value="floral" className="data-[state=active]:bg-transparent data-[state=active]:text-wedding-gold data-[state=active]:border-b-2 data-[state=active]:border-wedding-gold rounded-none pb-2">
                    Floral
                  </TabsTrigger>
                  <TabsTrigger value="themed" className="data-[state=active]:bg-transparent data-[state=active]:text-wedding-gold data-[state=active]:border-b-2 data-[state=active]:border-wedding-gold rounded-none pb-2">
                    Themed
                  </TabsTrigger>
                </TabsList>
              </Tabs>
              
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm text-gray-500">
                  Template {activeTemplateIndex + 1} of {templateCategories[previewCategory as keyof typeof templateCategories].length}
                </p>
                <button 
                  onClick={stopPreviewingAll}
                  className="text-wedding-gold text-sm underline hover:no-underline"
                >
                  Stop Preview
                </button>
              </div>
            </div>
          )}
        </div>

        <div className={`mb-12 transition-all duration-500 ${isPreviewMode ? "animate-fade-in" : ""}`} ref={invitationRef}>
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
