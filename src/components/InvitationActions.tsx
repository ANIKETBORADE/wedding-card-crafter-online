
import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Share2, Edit } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface InvitationActionsProps {
  onEdit: () => void;
  onDownload: () => void;
  onShare: () => void;
  templateId: string;
  templateName?: string;
}

const InvitationActions: React.FC<InvitationActionsProps> = ({
  onEdit,
  onDownload,
  onShare,
  templateId,
  templateName = "Unknown Template"
}) => {
  const { toast } = useToast();

  const handleDownload = () => {
    // Track template download
    const userEmail = localStorage.getItem("userEmail") || "anonymous";
    
    // In a real app, you would send this to your analytics service
    console.log(`Template downloaded: ${templateName} (ID: ${templateId}) by ${userEmail}`);
    
    // Store in localStorage for simple tracking
    const downloads = JSON.parse(localStorage.getItem("templateDownloads") || "[]");
    downloads.push({
      email: userEmail,
      templateId,
      templateName,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem("templateDownloads", JSON.stringify(downloads));
    
    // Show success toast
    toast({
      title: "Download started",
      description: "Your invitation is being prepared for download"
    });
    
    // Call the original download function
    onDownload();
  };

  return (
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
        onClick={onShare}
        variant="outline"
        className="border-wedding-gold text-wedding-gold hover:bg-wedding-gold/10"
      >
        <Share2 className="mr-2 h-4 w-4" />
        Share Invitation
      </Button>
    </div>
  );
};

export default InvitationActions;
