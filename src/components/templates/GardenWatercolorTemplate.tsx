
import React from "react";
import { WeddingDetails } from "../../types/invitation";
import { formatWeddingDate, formatWeddingTime } from "../../utils/templateUtils";

interface TemplateProps {
  weddingDetails: WeddingDetails;
}

const GardenWatercolorTemplate: React.FC<TemplateProps> = ({ weddingDetails }) => {
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

  return (
    <div 
      id="invitation-card" 
      className="relative bg-white rounded-lg shadow-lg p-8 max-w-lg mx-auto overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.9)), url('https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderWidth: "10px",
        borderStyle: "solid",
        borderImage: "linear-gradient(45deg, #a2d9a9, #e6f8e6) 1"
      }}
    >
      {/* Watercolor corner accents */}
      <div className="absolute top-0 left-0 w-24 h-24 opacity-60"
        style={{
          background: "url('https://images.unsplash.com/photo-1566898573242-d67bd0e09a5a?auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "radial-gradient(circle at top left, black 30%, transparent 70%)"
        }}
      />
      <div className="absolute bottom-0 right-0 w-24 h-24 opacity-60"
        style={{
          background: "url('https://images.unsplash.com/photo-1566898573242-d67bd0e09a5a?auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "radial-gradient(circle at bottom right, black 30%, transparent 70%)"
        }}
      />
      
      <div className="text-center relative z-10">
        {/* Display photo in an elegant frame if available */}
        {photos && photos.length > 0 && (
          <div className="mb-8 flex justify-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-green-100 shadow-md"
                 style={{
                   boxShadow: "0 0 0 4px rgba(162, 217, 169, 0.4), 0 0 0 8px rgba(162, 217, 169, 0.1)"
                 }}>
              <img 
                src={photos[0]} 
                alt="Couple" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
        
        <h3 className="font-great-vibes text-4xl text-green-800 mb-4">
          {brideFirstName} & {groomFirstName}
        </h3>
        
        <div className="border-t border-b border-green-200 py-4 px-8 mb-6">
          <p className="font-playfair text-green-700 tracking-wide mb-2">
            REQUEST THE HONOR OF YOUR PRESENCE
          </p>
          <p className="text-xl font-medium text-green-900 mb-2">
            {formattedDate}
          </p>
          <p className="text-green-700">
            at {formattedTime}
          </p>
        </div>
        
        <p className="font-medium text-green-800 mb-2">
          {venue}
        </p>
        <p className="text-green-600 mb-6">
          {venueAddress}
        </p>
        
        {receptionVenue && (
          <div className="mt-6 border-t border-green-200 pt-4">
            <p className="font-playfair text-green-700 font-medium">Reception to follow</p>
            <p className="text-green-600">
              {receptionVenue}
              <br />
              {receptionAddress}
            </p>
          </div>
        )}
        
        {additionalInfo && (
          <p className="mt-6 text-green-600 italic text-sm">{additionalInfo}</p>
        )}
      </div>
    </div>
  );
};

export default GardenWatercolorTemplate;
