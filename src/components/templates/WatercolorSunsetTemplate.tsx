
import React, { useState } from "react";
import { WeddingDetails } from "../../types/invitation";
import { formatWeddingDate, formatWeddingTime } from "../../utils/templateUtils";

interface TemplateProps {
  weddingDetails: WeddingDetails;
}

const WatercolorSunsetTemplate: React.FC<TemplateProps> = ({ weddingDetails }) => {
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

  const [imageError, setImageError] = useState(false);
  const formattedDate = formatWeddingDate(weddingDate);
  const formattedTime = formatWeddingTime(weddingTime);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div 
      id="invitation-card" 
      className="rounded-lg overflow-hidden max-w-lg mx-auto"
      style={{
        background: "linear-gradient(to bottom, #f9e2e6, #fdf6f0)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        border: "10px solid white"
      }}
    >
      <div 
        className="p-10 text-center"
        style={{
          background: "url('https://i.imgur.com/OMMtbBl.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "soft-light"
        }}
      >
        {photos && photos.length > 0 && !imageError && (
          <div className="mb-8 flex justify-center">
            <div 
              className="w-40 h-40 rounded-full overflow-hidden border-4 border-white"
              style={{
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              }}
            >
              <img 
                src={photos[0]} 
                alt="Couple" 
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            </div>
          </div>
        )}
        
        <div className="mb-6">
          <h3 className="font-great-vibes text-5xl text-[#d16b86] mb-3">
            {brideFirstName} & {groomFirstName}
          </h3>
          <p className="font-montserrat text-sm tracking-wide text-[#d16b86]/80">
            Joyfully invite you to celebrate their wedding day
          </p>
        </div>
        
        <div className="my-8 py-4 relative">
          <div className="absolute left-1/4 right-1/4 top-0 h-px bg-[#d16b86]/30"></div>
          <div className="absolute left-1/4 right-1/4 bottom-0 h-px bg-[#d16b86]/30"></div>
          
          <p className="text-xl font-playfair text-[#d16b86] mb-2">
            {formattedDate}
          </p>
          <p className="text-[#d16b86]/80">
            at {formattedTime}
          </p>
        </div>
        
        <div className="mb-6">
          <p className="font-playfair font-medium text-[#d16b86] mb-2">
            {venue}
          </p>
          <p className="text-[#d16b86]/80">
            {venueAddress}
          </p>
        </div>
        
        {receptionVenue && (
          <div className="mt-8">
            <p className="font-playfair text-[#d16b86] font-medium mb-1">Reception to follow</p>
            <p className="text-[#d16b86]/80">
              {receptionVenue}
              <br />
              {receptionAddress}
            </p>
          </div>
        )}
        
        {additionalInfo && (
          <p className="mt-8 text-[#d16b86]/80 italic text-sm">{additionalInfo}</p>
        )}
      </div>
    </div>
  );
};

export default WatercolorSunsetTemplate;
