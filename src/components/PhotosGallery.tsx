
import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface PhotosGalleryProps {
  photos: string[];
}

const PhotosGallery: React.FC<PhotosGalleryProps> = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  if (!photos || photos.length <= 1) {
    return null;
  }

  const openPhotoModal = (photo: string) => {
    setSelectedPhoto(photo);
  };

  const closePhotoModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="mb-12">
      <h3 className="text-xl text-center font-medium mb-6">Your Wedding Photos</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className="aspect-square rounded-md overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer transform hover:-translate-y-1 hover:scale-[1.02]"
            onClick={() => openPhotoModal(photo)}
          >
            <img 
              src={photo} 
              alt={`Wedding photo ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={closePhotoModal}>
        <DialogContent className="sm:max-w-[80%] max-h-[80vh] p-0 overflow-hidden bg-black border-none">
          {selectedPhoto && (
            <img 
              src={selectedPhoto} 
              alt="Wedding photo" 
              className="w-full h-full object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PhotosGallery;
