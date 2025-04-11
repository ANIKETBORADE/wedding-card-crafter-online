
import React from "react";
import { WeddingDetails } from "../../types/invitation";
import { formatWeddingDate, formatWeddingTime } from "../../utils/templateUtils";

interface TemplateProps {
  weddingDetails: WeddingDetails;
}

const ArtDecoTemplate: React.FC<TemplateProps> = ({ weddingDetails }) => {
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
      className="rounded-lg overflow-hidden max-w-lg mx-auto"
      style={{
        background: "#0a0a0a",
        border: "5px solid #d4af37",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
      }}
    >
      <div 
        className="p-10 text-center art-deco-border"
        style={{
          background: "linear-gradient(135deg, #000000 25%, #111111 100%)",
          color: "#ffffff",
        }}
      >
        {/* Art Deco decorative elements */}
        <div className="relative mb-8">
          <div 
            className="w-full h-16 opacity-90"
            style={{
              background: "url('https://i.imgur.com/PcXNMGE.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              animation: "shimmer 3s ease-in-out infinite"
            }}
          />
        </div>
        
        {photos && photos.length > 0 && (
          <div className="mb-8 flex justify-center">
            <div 
              className="w-40 h-40 overflow-hidden"
              style={{
                boxShadow: "0 0 0 4px #d4af37, 0 0 0 8px rgba(212, 175, 55, 0.3)",
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
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
            className="uppercase tracking-[0.3em] text-sm mb-3"
            style={{ color: "#d4af37" }}
          >
            THE WEDDING OF
          </p>
          <h3 
            className="text-4xl mb-2 uppercase tracking-wide"
            style={{ color: "#d4af37", letterSpacing: "0.1em" }}
          >
            {brideFirstName} & {groomFirstName}
          </h3>
        </div>
        
        <div 
          className="my-8 py-4 relative"
          style={{
            borderTop: "1px solid rgba(212, 175, 55, 0.5)",
            borderBottom: "1px solid rgba(212, 175, 55, 0.5)"
          }}
        >
          <p className="text-xl uppercase tracking-widest mb-2" style={{ color: "#ffffff" }}>
            {formattedDate}
          </p>
          <p style={{ color: "#d4af37" }}>
            at {formattedTime}
          </p>
        </div>
        
        <div className="mb-6">
          <p className="font-medium uppercase tracking-wider mb-2" style={{ color: "#ffffff" }}>
            {venue}
          </p>
          <p style={{ color: "#d4af37" }}>
            {venueAddress}
          </p>
        </div>
        
        {receptionVenue && (
          <div className="mt-8">
            <p className="text-sm uppercase tracking-wider mb-1" style={{ color: "#ffffff" }}>
              Reception
            </p>
            <p style={{ color: "#d4af37" }}>
              {receptionVenue}
              <br />
              {receptionAddress}
            </p>
          </div>
        )}
        
        {additionalInfo && (
          <p className="mt-8 italic text-sm" style={{ color: "rgba(212, 175, 55, 0.8)" }}>{additionalInfo}</p>
        )}
        
        {/* Bottom decorative elements */}
        <div className="relative mt-8">
          <div 
            className="w-full h-16 opacity-90"
            style={{
              background: "url('https://i.imgur.com/PcXNMGE.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              transform: "rotate(180deg)",
              animation: "shimmer 3s ease-in-out infinite"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ArtDecoTemplate;
