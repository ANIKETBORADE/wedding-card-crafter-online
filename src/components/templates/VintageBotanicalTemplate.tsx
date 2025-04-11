
import React from "react";
import { WeddingDetails } from "../../types/invitation";
import { formatWeddingDate, formatWeddingTime } from "../../utils/templateUtils";

interface TemplateProps {
  weddingDetails: WeddingDetails;
}

const VintageBotanicalTemplate: React.FC<TemplateProps> = ({ weddingDetails }) => {
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
        background: "#f9f6f0",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        border: "10px solid white"
      }}
    >
      <div 
        className="p-10 text-center relative"
        style={{
          backgroundImage: "url('https://i.imgur.com/OfuJoZs.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(249, 246, 240, 0.9)"
        }}
      >
        {/* Vintage botanical decorative elements */}
        <div 
          className="absolute top-0 right-0 w-28 h-28 opacity-60"
          style={{
            background: "url('https://i.imgur.com/7fEuRj7.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right top"
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-28 h-28 opacity-60"
          style={{
            background: "url('https://i.imgur.com/XjO5UUN.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left bottom"
          }}
        />
        
        {photos && photos.length > 0 && (
          <div className="mb-8 flex justify-center">
            <div className="w-40 h-40 rounded-full overflow-hidden" style={{
              border: "5px solid white",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
            }}>
              <img 
                src={photos[0]} 
                alt="Couple" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
        
        <div className="mb-6 relative z-10">
          <h3 className="font-playfair text-4xl italic text-[#4e6a51] mb-3">
            {brideFirstName} & {groomFirstName}
          </h3>
          <p className="font-lora text-sm tracking-wide text-[#4e6a51]/80">
            Request the honor of your presence on their wedding day
          </p>
        </div>
        
        <div className="my-8 py-4 relative z-10">
          <div className="absolute left-1/4 right-1/4 top-0 h-px bg-[#4e6a51]/30"></div>
          <div className="absolute left-1/4 right-1/4 bottom-0 h-px bg-[#4e6a51]/30"></div>
          
          <p className="text-xl font-lora text-[#4e6a51] mb-2">
            {formattedDate}
          </p>
          <p className="text-[#4e6a51]/80">
            at {formattedTime}
          </p>
        </div>
        
        <div className="mb-6 relative z-10">
          <p className="font-lora italic font-medium text-[#4e6a51] mb-2">
            {venue}
          </p>
          <p className="text-[#4e6a51]/80">
            {venueAddress}
          </p>
        </div>
        
        {receptionVenue && (
          <div className="mt-8 relative z-10">
            <p className="font-lora italic text-[#4e6a51] font-medium mb-1">
              Reception to follow
            </p>
            <p className="text-[#4e6a51]/80">
              {receptionVenue}
              <br />
              {receptionAddress}
            </p>
          </div>
        )}
        
        {additionalInfo && (
          <p className="mt-8 text-[#4e6a51]/80 italic text-sm relative z-10">{additionalInfo}</p>
        )}
      </div>
    </div>
  );
};

export default VintageBotanicalTemplate;
