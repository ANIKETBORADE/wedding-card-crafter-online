
import React from "react";
import { WeddingDetails } from "../../types/invitation";
import { formatWeddingDate, formatWeddingTime } from "../../utils/templateUtils";

interface TemplateProps {
  weddingDetails: WeddingDetails;
}

const MinimalistGoldTemplate: React.FC<TemplateProps> = ({ weddingDetails }) => {
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
        background: "#ffffff",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        border: "1px solid #f0f0f0"
      }}
    >
      <div className="p-10 text-center relative">
        {/* Minimalist gold accents */}
        <div 
          className="absolute top-6 left-6 w-16 h-16 opacity-30"
          style={{
            border: "1px solid #d4af37",
            transform: "rotate(45deg)"
          }}
        />
        <div 
          className="absolute bottom-6 right-6 w-16 h-16 opacity-30"
          style={{
            border: "1px solid #d4af37",
            transform: "rotate(45deg)"
          }}
        />
        
        {photos && photos.length > 0 && (
          <div className="mb-8 flex justify-center">
            <div 
              className="w-40 h-40 overflow-hidden"
              style={{
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                border: "1px solid rgba(212, 175, 55, 0.3)",
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
          <p 
            className="uppercase text-xs tracking-[0.3em] mb-3"
            style={{ color: "#d4af37" }}
          >
            WE ARE GETTING MARRIED
          </p>
          <h3 
            className="text-3xl mb-2 uppercase tracking-wide font-montserrat"
            style={{ color: "#333333", letterSpacing: "0.05em" }}
          >
            {brideFirstName} & {groomFirstName}
          </h3>
        </div>
        
        <div 
          className="my-8 py-4 relative"
          style={{
            borderTop: "1px solid rgba(212, 175, 55, 0.3)",
            borderBottom: "1px solid rgba(212, 175, 55, 0.3)"
          }}
        >
          <p className="text-xl mb-2" style={{ color: "#333333" }}>
            {formattedDate}
          </p>
          <p style={{ color: "#888888" }}>
            at {formattedTime}
          </p>
        </div>
        
        <div className="mb-6">
          <p className="font-medium mb-2" style={{ color: "#333333" }}>
            {venue}
          </p>
          <p style={{ color: "#888888" }}>
            {venueAddress}
          </p>
        </div>
        
        {receptionVenue && (
          <div className="mt-8">
            <p 
              className="text-sm uppercase tracking-wide mb-1"
              style={{ color: "#d4af37" }}
            >
              Reception
            </p>
            <p style={{ color: "#888888" }}>
              {receptionVenue}
              <br />
              {receptionAddress}
            </p>
          </div>
        )}
        
        {additionalInfo && (
          <p className="mt-8 italic text-sm" style={{ color: "#888888" }}>{additionalInfo}</p>
        )}
      </div>
    </div>
  );
};

export default MinimalistGoldTemplate;
