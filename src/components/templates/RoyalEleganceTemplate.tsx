
import React from "react";
import { WeddingDetails } from "../../types/invitation";
import { formatWeddingDate, formatWeddingTime } from "../../utils/templateUtils";

interface TemplateProps {
  weddingDetails: WeddingDetails;
}

const RoyalEleganceTemplate: React.FC<TemplateProps> = ({ weddingDetails }) => {
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
      className="max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg"
      style={{
        background: "linear-gradient(to bottom, #1a0f22, #3a1e44)",
        border: "8px double #bd9a5f",
        boxShadow: "0 10px 25px rgba(26, 15, 34, 0.5)"
      }}
    >
      <div 
        className="p-10 text-center"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 10%, rgba(189, 154, 95, 0.3) 0%, transparent 60%)"
        }}
      >
        {/* Ornate decorative elements */}
        <div className="relative">
          <div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-10 opacity-60"
            style={{
              backgroundImage: "url('https://i.imgur.com/Xw9mWfJ.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"
            }}
          />
        </div>
        
        {photos && photos.length > 0 && (
          <div className="mb-8 flex justify-center">
            <div 
              className="w-40 h-40 rounded-full overflow-hidden border-4"
              style={{
                borderColor: "#bd9a5f",
                boxShadow: "0 0 0 4px rgba(189, 154, 95, 0.3), 0 0 20px rgba(26, 15, 34, 0.5)"
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
        
        <div className="mb-6">
          <h3 
            className="text-4xl mb-2 font-cinzel"
            style={{ 
              color: "#bd9a5f",
              textShadow: "0 2px 4px rgba(0,0,0,0.3)"
            }}
          >
            {brideFirstName} & {groomFirstName}
          </h3>
          <p className="font-cinzel tracking-widest text-sm" style={{ color: "#e5d0ab" }}>
            REQUEST THE HONOUR OF YOUR PRESENCE
          </p>
        </div>
        
        <div className="my-8 relative">
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#bd9a5f] to-transparent"></div>
          <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#bd9a5f] to-transparent"></div>
          
          <div className="py-6">
            <p className="text-xl font-cinzel mb-1" style={{ color: "#e5d0ab" }}>
              {formattedDate}
            </p>
            <p className="text-sm" style={{ color: "#bd9a5f" }}>
              AT {formattedTime}
            </p>
          </div>
        </div>
        
        <div className="mb-6">
          <p className="font-cinzel text-lg mb-1" style={{ color: "#e5d0ab" }}>
            {venue}
          </p>
          <p style={{ color: "#bd9a5f" }}>
            {venueAddress}
          </p>
        </div>
        
        {receptionVenue && (
          <div className="mt-8">
            <p className="font-cinzel text-sm mb-1" style={{ color: "#e5d0ab" }}>
              RECEPTION TO FOLLOW
            </p>
            <p className="text-sm" style={{ color: "#bd9a5f" }}>
              {receptionVenue}
              <br />
              {receptionAddress}
            </p>
          </div>
        )}
        
        {additionalInfo && (
          <p className="mt-8 italic text-sm" style={{ color: "#bd9a5f" }}>{additionalInfo}</p>
        )}
        
        {/* Bottom decorative element */}
        <div className="relative mt-8">
          <div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-40 h-10 opacity-60 rotate-180"
            style={{
              backgroundImage: "url('https://i.imgur.com/Xw9mWfJ.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RoyalEleganceTemplate;
