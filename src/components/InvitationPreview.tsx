
import React, { useRef } from "react";
import { WeddingDetails } from "../types/invitation";
import { formatWeddingDate, formatWeddingTime, downloadInvitation, templates } from "../utils/templateUtils";
import { Button } from "@/components/ui/button";
import { Download, Share2, Edit, Layout } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  const {
    brideFirstName,
    brideLastName,
    groomFirstName,
    groomLastName,
    weddingDate,
    weddingTime,
    venue,
    venueAddress,
    receptionVenue,
    receptionAddress,
    additionalInfo,
    photos = [],
  } = weddingDetails;

  const formattedDate = formatWeddingDate(weddingDate);
  const formattedTime = formatWeddingTime(weddingTime);

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

  const renderInvitationByTemplate = () => {
    switch (templateId) {
      case "elegant-floral":
        return (
          <div id="invitation-card" className="bg-white rounded-lg border border-wedding-rose/40 shadow-lg p-8 max-w-lg mx-auto">
            <div className="text-center p-8 border border-wedding-gold/30 rounded-md">
              {/* Display couple photo if available */}
              {photos && photos.length > 0 && (
                <div className="mb-6 flex justify-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-wedding-gold/20">
                    <img 
                      src={photos[0]} 
                      alt="Couple" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
              
              <h3 className="font-great-vibes text-4xl text-wedding-gold mb-4">
                {brideFirstName} & {groomFirstName}
              </h3>
              <p className="text-gray-700 mb-2 font-playfair tracking-wider">
                REQUEST THE PLEASURE OF YOUR COMPANY
              </p>
              <p className="text-gray-500 mb-4">
                {formattedDate} at {formattedTime}
              </p>
              <div className="fancy-separator">
                <span>♥</span>
              </div>
              <p className="font-playfair text-gray-700 mb-6">
                {venue}
                <br />
                {venueAddress}
              </p>
              
              {receptionVenue && (
                <div className="mt-6">
                  <p className="text-gray-700 font-medium">Reception to follow at</p>
                  <p className="text-gray-600">
                    {receptionVenue}
                    <br />
                    {receptionAddress}
                  </p>
                </div>
              )}
              
              {additionalInfo && (
                <p className="mt-6 text-gray-600 italic text-sm">{additionalInfo}</p>
              )}
            </div>
          </div>
        );
        
      case "minimal-chic":
        return (
          <div id="invitation-card" className="bg-white rounded-lg shadow-lg p-8 max-w-lg mx-auto">
            <div className="text-center">
              {/* Photo gallery if available */}
              {photos && photos.length > 0 && (
                <div className="mb-6 flex justify-center">
                  <div className="w-full max-w-xs overflow-hidden">
                    <img 
                      src={photos[0]} 
                      alt="Couple" 
                      className="w-full h-auto object-cover rounded-sm"
                    />
                  </div>
                </div>
              )}
              
              <div className="border-t border-b border-wedding-gold/30 py-6 px-4">
                <h3 className="font-montserrat text-xl uppercase tracking-widest text-gray-800 mb-4">
                  {brideFirstName} {brideLastName} & {groomFirstName} {groomLastName}
                </h3>
                <p className="text-gray-600 mb-4">
                  WE ARE GETTING MARRIED
                </p>
                <p className="text-2xl font-playfair text-wedding-gold mb-4">
                  {formattedDate}
                </p>
                <p className="text-gray-600 mb-8">
                  {formattedTime}
                </p>
                <p className="font-medium text-gray-800">
                  {venue}
                </p>
                <p className="text-gray-600">
                  {venueAddress}
                </p>
                
                {receptionVenue && (
                  <div className="mt-6">
                    <p className="text-gray-700 font-medium">Reception</p>
                    <p className="text-gray-600">
                      {receptionVenue}, {receptionAddress}
                    </p>
                  </div>
                )}
              </div>
              
              {additionalInfo && (
                <p className="mt-6 text-gray-600 text-sm">{additionalInfo}</p>
              )}
            </div>
          </div>
        );
        
      case "rustic-charm":
        return (
          <div id="invitation-card" className="bg-white rounded-lg border border-amber-200 shadow-lg p-8 max-w-lg mx-auto" style={{backgroundImage: "url('https://images.unsplash.com/photo-1446869412983-a4a9b3001dd3?q=80&w=2070')", backgroundSize: "cover", backgroundPosition: "center", backgroundBlendMode: "soft-light"}}>
            <div className="text-center bg-white/90 p-8 border border-amber-100 rounded-md">
              {/* Photo display */}
              {photos && photos.length > 0 && (
                <div className="mb-6 mx-auto">
                  <div className="w-full max-w-xs mx-auto overflow-hidden border-4 border-amber-50 rotate-1">
                    <img 
                      src={photos[0]} 
                      alt="Couple" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              )}
              
              <h3 className="font-great-vibes text-3xl text-amber-700 mb-4">
                {brideFirstName} & {groomFirstName}
              </h3>
              <p className="text-amber-900 mb-2 font-serif">
                INVITE YOU TO CELEBRATE THEIR MARRIAGE
              </p>
              <p className="text-xl font-medium text-amber-800 mb-4">
                {formattedDate} at {formattedTime}
              </p>
              <div className="fancy-separator">
                <span>✿</span>
              </div>
              <p className="text-amber-900">
                {venue}
                <br />
                {venueAddress}
              </p>
              
              {receptionVenue && (
                <div className="mt-6">
                  <p className="text-amber-800">Reception to follow</p>
                  <p className="text-amber-900">
                    {receptionVenue}
                    <br />
                    {receptionAddress}
                  </p>
                </div>
              )}
              
              {additionalInfo && (
                <p className="mt-6 text-amber-800 italic text-sm">{additionalInfo}</p>
              )}
            </div>
          </div>
        );
        
      default:
        return (
          <div id="invitation-card" className="bg-white rounded-lg border border-wedding-cream shadow-lg p-8 max-w-lg mx-auto">
            <div className="text-center">
              {/* Add photo if available */}
              {photos && photos.length > 0 && (
                <div className="mb-6 flex justify-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-wedding-gold/30">
                    <img 
                      src={photos[0]} 
                      alt="Couple" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
              
              <h3 className="font-great-vibes text-3xl text-wedding-gold mb-4">
                {brideFirstName} & {groomFirstName}
              </h3>
              <p className="text-gray-700 mb-2">
                are getting married
              </p>
              <p className="text-xl font-medium text-gray-800 mb-4">
                {formattedDate} at {formattedTime}
              </p>
              <div className="fancy-separator">
                <span>♥</span>
              </div>
              <p className="text-gray-700">
                {venue}
                <br />
                {venueAddress}
              </p>
              
              {receptionVenue && (
                <div className="mt-6">
                  <p className="text-gray-700">Reception to follow</p>
                  <p className="text-gray-700">
                    {receptionVenue}
                    <br />
                    {receptionAddress}
                  </p>
                </div>
              )}
              
              {additionalInfo && (
                <p className="mt-6 text-gray-600 italic text-sm">{additionalInfo}</p>
              )}
            </div>
          </div>
        );
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="border-wedding-gold text-wedding-gold hover:bg-wedding-gold/10"
              >
                <Layout className="mr-2 h-4 w-4" />
                Change Template
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Available Templates</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {templates.map((template) => (
                <DropdownMenuItem 
                  key={template.id}
                  className={`cursor-pointer ${templateId === template.id ? 'bg-wedding-gold/10 font-medium' : ''}`}
                  onClick={() => onTemplateChange(template.id)}
                >
                  {template.name}
                  {templateId === template.id && (
                    <Check className="ml-auto h-4 w-4 text-wedding-gold" />
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="mb-12" ref={invitationRef}>
          {renderInvitationByTemplate()}
        </div>

        {/* Additional photos gallery if more than one uploaded */}
        {photos && photos.length > 1 && (
          <div className="mb-12">
            <h3 className="text-xl text-center font-medium mb-4">Your Photos</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {photos.map((photo, index) => (
                <div key={index} className="aspect-square rounded-md overflow-hidden border border-gray-200">
                  <img 
                    src={photo} 
                    alt={`Wedding photo ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onEdit}
            variant="outline"
            className="border-wedding-gold text-wedding-gold hover:bg-wedding-gold/10"
          >
            <Edit className="mr-2 h-4 w-4" />
            Edit Details
          </Button>
          <Button
            onClick={handleDownload}
            className="bg-wedding-gold hover:bg-wedding-gold/90 text-white"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Invitation
          </Button>
          <Button
            onClick={handleShare}
            variant="outline"
            className="border-wedding-gold text-wedding-gold hover:bg-wedding-gold/10"
          >
            <Share2 className="mr-2 h-4 w-4" />
            Share Invitation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InvitationPreview;
