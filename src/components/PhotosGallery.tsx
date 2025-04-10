
import React from "react";

interface PhotosGalleryProps {
  photos: string[];
}

const PhotosGallery: React.FC<PhotosGalleryProps> = ({ photos }) => {
  if (!photos || photos.length <= 1) {
    return null;
  }

  return (
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
  );
};

export default PhotosGallery;
