
import React, { useState } from "react";
import { WeddingDetails } from "../../types/invitation";
import { formatWeddingDate, formatWeddingTime } from "../../utils/templateUtils";

interface TemplateProps {
  weddingDetails: WeddingDetails;
}

const DaisyEleganceTemplate: React.FC<TemplateProps> = ({ weddingDetails }) => {
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
        background: "#F8F6F0",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        position: "relative",
        border: "10px solid white"
      }}
    >
      {/* Top left daisies */}
      <div 
        className="absolute top-0 left-0 w-40 h-40"
        style={{
          background: "url('/lovable-uploads/676acfa4-4552-4355-9dc8-d428e6987730.png')",
          backgroundSize: "cover",
          backgroundPosition: "top left",
          opacity: 0.9,
          transform: "rotate(0deg)",
          zIndex: 10,
          pointerEvents: "none"
        }}
      ></div>
      
      {/* Bottom right daisies */}
      <div 
        className="absolute bottom-0 right-0 w-40 h-40"
        style={{
          background: "url('/lovable-uploads/676acfa4-4552-4355-9dc8-d428e6987730.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom right",
          opacity: 0.9,
          transform: "scaleX(-1)",
          zIndex: 10,
          pointerEvents: "none"
        }}
      ></div>
      
      {/* Bottom left daisies */}
      <div 
        className="absolute bottom-0 left-0 w-28 h-28"
        style={{
          background: "url('/lovable-uploads/676acfa4-4552-4355-9dc8-d428e6987730.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom left",
          opacity: 0.9,
          transform: "rotate(270deg) scaleX(-1)",
          zIndex: 10,
          pointerEvents: "none"
        }}
      ></div>
      
      <div className="p-10 text-center relative z-5">
        <p className="font-cormorant text-[#D4AF37] italic mb-2">
          together with their families
        </p>
        <p className="font-cormorant text-[#D4AF37] mb-8">
          you're joyfully invited<br />to attend the
        </p>
        
        <h3 
          className="font-dancing-script text-5xl text-[#D4AF37] mb-2"
          style={{
            textShadow: "1px 1px 2px rgba(212, 175, 55, 0.2)"
          }}
        >
          Wedding
        </h3>
        <p className="font-cormorant text-[#D4AF37] mb-4">of</p>
        
        <div className="mb-8">
          <h2 
            className="font-cinzel text-3xl tracking-wide text-[#D4AF37] mb-2"
            style={{
              letterSpacing: "0.05em",
              fontWeight: 600
            }}
          >
            {brideFirstName.toUpperCase()} {brideLastName.toUpperCase()} &<br />
            {groomFirstName.toUpperCase()} {groomLastName.toUpperCase()}
          </h2>
        </div>
        
        <div className="mb-6">
          <p 
            className="text-[#D4AF37] font-cinzel tracking-widest"
            style={{
              letterSpacing: "0.2em"
            }}
          >
            {weddingDate ? new Date(weddingDate).toLocaleDateString('en-US', {
              month: '2-digit',
              day: '2-digit',
              year: 'numeric'
            }).replace(/\//g, '.') : ''}
          </p>
        </div>
        
        <div className="my-8">
          <p className="font-cormorant text-[#D4AF37] mb-1">
            at {formattedTime} in the evening
          </p>
          <p className="font-cormorant text-[#D4AF37] font-semibold mb-1">
            {venue}
          </p>
          <p className="font-cormorant text-[#D4AF37]">
            {venueAddress}
          </p>
        </div>
        
        {receptionVenue && (
          <p 
            className="mt-8 font-dancing-script text-[#D4AF37] text-xl italic"
            style={{
              transform: "rotate(-3deg)"
            }}
          >
            reception to follow ceremony
          </p>
        )}
        
        {additionalInfo && (
          <p className="mt-8 font-cormorant italic text-[#D4AF37]/80 text-sm">
            {additionalInfo}
          </p>
        )}
      </div>
    </div>
  );
};

export default DaisyEleganceTemplate;
