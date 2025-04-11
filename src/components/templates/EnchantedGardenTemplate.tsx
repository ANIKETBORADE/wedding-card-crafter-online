
import React from "react";
import { WeddingDetails } from "../../types/invitation";
import { formatWeddingDate, formatWeddingTime } from "../../utils/templateUtils";

interface TemplateProps {
  weddingDetails: WeddingDetails;
}

const EnchantedGardenTemplate: React.FC<TemplateProps> = ({ weddingDetails }) => {
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
      className="bg-white rounded-lg overflow-hidden max-w-lg mx-auto"
      style={{
        background: "linear-gradient(to bottom, #f5faff, #ffffff)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        border: "10px solid white"
      }}
    >
      <div 
        className="p-10 text-center relative"
        style={{
          backgroundImage: "url('https://i.imgur.com/peVMgXg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay"
        }}
      >
        {/* Whimsical decorative elements */}
        <div 
          className="absolute top-0 right-0 w-full h-full opacity-30"
          style={{
            backgroundImage: "url('https://i.imgur.com/v2xCQro.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            pointerEvents: "none"
          }}
        />
        
        {photos && photos.length > 0 && (
          <div className="mb-8 flex justify-center">
            <div 
              className="w-40 h-40 rounded-full overflow-hidden border-4 border-white"
              style={{
                boxShadow: "0 0 20px rgba(114, 187, 255, 0.3)",
              }}
            >
              <img 
                src={photos[0]} 
                alt="Couple" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
        
        <div className="mb-6 relative z-10">
          <h3 className="font-great-vibes text-5xl text-[#6c8cbf] mb-3">
            {brideFirstName} & {groomFirstName}
          </h3>
          <p className="font-montserrat text-sm tracking-wide text-[#6c8cbf]/80">
            invite you to their enchanted garden wedding
          </p>
        </div>
        
        <div 
          className="my-8 py-4 relative z-10"
          style={{
            backgroundImage: "url('https://i.imgur.com/rcFwL3s.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <p className="text-xl font-playfair text-[#6c8cbf] mb-2">
            {formattedDate}
          </p>
          <p className="text-[#6c8cbf]/80">
            at {formattedTime}
          </p>
        </div>
        
        <div className="mb-6 relative z-10">
          <p className="font-playfair font-medium text-[#6c8cbf] mb-2">
            {venue}
          </p>
          <p className="text-[#6c8cbf]/80">
            {venueAddress}
          </p>
        </div>
        
        {receptionVenue && (
          <div className="mt-8 relative z-10">
            <p className="font-playfair text-[#6c8cbf] font-medium mb-1">Reception to follow</p>
            <p className="text-[#6c8cbf]/80">
              {receptionVenue}
              <br />
              {receptionAddress}
            </p>
          </div>
        )}
        
        {additionalInfo && (
          <p className="mt-8 text-[#6c8cbf]/80 italic text-sm relative z-10">{additionalInfo}</p>
        )}
      </div>
    </div>
  );
};

export default EnchantedGardenTemplate;
