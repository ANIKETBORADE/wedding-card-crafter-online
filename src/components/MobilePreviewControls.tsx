
import React from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Settings, Download, Share2, Smartphone } from "lucide-react";

interface MobilePreviewControlsProps {
  templateName: string;
  onEdit: () => void;
  onDownload: () => void;
  onShare: () => void;
  onChangeTemplate: () => void;
}

const MobilePreviewControls: React.FC<MobilePreviewControlsProps> = ({
  templateName,
  onEdit,
  onDownload,
  onShare,
  onChangeTemplate
}) => {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="h-14 w-14 rounded-full bg-wedding-gold hover:bg-wedding-gold/90 shadow-lg">
            <Settings className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-auto rounded-t-xl">
          <SheetHeader>
            <SheetTitle>Invitation Options</SheetTitle>
            <SheetDescription>
              Currently viewing: {templateName}
            </SheetDescription>
          </SheetHeader>
          <div className="grid grid-cols-2 gap-4 py-6">
            <Button 
              onClick={onEdit}
              variant="outline" 
              className="flex flex-col items-center justify-center h-20 border-wedding-gold/30"
            >
              <Smartphone className="mb-2 h-5 w-5" />
              <span>Edit Details</span>
            </Button>
            <Button 
              onClick={onChangeTemplate}
              variant="outline" 
              className="flex flex-col items-center justify-center h-20 border-wedding-gold/30"
            >
              <Settings className="mb-2 h-5 w-5" />
              <span>Change Template</span>
            </Button>
            <Button 
              onClick={onDownload}
              variant="outline" 
              className="flex flex-col items-center justify-center h-20 border-wedding-gold/30"
            >
              <Download className="mb-2 h-5 w-5" />
              <span>Download</span>
            </Button>
            <Button 
              onClick={onShare}
              variant="outline" 
              className="flex flex-col items-center justify-center h-20 border-wedding-gold/30"
            >
              <Share2 className="mb-2 h-5 w-5" />
              <span>Share</span>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobilePreviewControls;
