
import React, { useState, useEffect } from "react";
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
  const [animated, setAnimated] = useState(false);
  const formattedDate = formatWeddingDate(weddingDate);
  const formattedTime = formatWeddingTime(weddingTime);

  // Trigger animations after component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

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
        border: "10px solid white",
        transition: "all 0.5s ease-in-out"
      }}
    >
      {/* Top left daisies */}
      <div 
        className={`absolute top-0 left-0 w-40 h-40 ${animated ? 'animate-fade-in' : 'opacity-0'}`}
        style={{
          background: "url('/lovable-uploads/676acfa4-4552-4355-9dc8-d428e6987730.png')",
          backgroundSize: "cover",
          backgroundPosition: "top left",
          opacity: animated ? 0.9 : 0,
          transform: "rotate(0deg)",
          zIndex: 10,
          pointerEvents: "none",
          transition: "opacity 1.5s ease-in-out 0.3s"
        }}
      ></div>
      
      {/* Bottom right daisies */}
      <div 
        className={`absolute bottom-0 right-0 w-40 h-40 ${animated ? 'animate-fade-in' : 'opacity-0'}`}
        style={{
          background: "url('/lovable-uploads/676acfa4-4552-4355-9dc8-d428e6987730.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom right",
          opacity: animated ? 0.9 : 0,
          transform: "scaleX(-1)",
          zIndex: 10,
          pointerEvents: "none",
          transition: "opacity 1.5s ease-in-out 0.6s"
        }}
      ></div>
      
      {/* Bottom left daisies */}
      <div 
        className={`absolute bottom-0 left-0 w-28 h-28 ${animated ? 'animate-fade-in' : 'opacity-0'}`}
        style={{
          background: "url('/lovable-uploads/676acfa4-4552-4355-9dc8-d428e6987730.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom left",
          opacity: animated ? 0.9 : 0,
          transform: "rotate(270deg) scaleX(-1)",
          zIndex: 10,
          pointerEvents: "none",
          transition: "opacity 1.5s ease-in-out 0.9s"
        }}
      ></div>
      
      <div className="p-10 text-center relative z-5">
        <p 
          className={`font-cormorant text-[#D4AF37] italic mb-2 ${animated ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ transitionDelay: "0.3s" }}
        >
          together with their families
        </p>
        <p 
          className={`font-cormorant text-[#D4AF37] mb-8 ${animated ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ transitionDelay: "0.5s" }}
        >
          you're joyfully invited<br />to attend the
        </p>
        
        <h3 
          className={`font-dancing-script text-5xl text-[#D4AF37] mb-2 ${animated ? 'animate-fade-in' : 'opacity-0'}`}
          style={{
            textShadow: "1px 1px 2px rgba(212, 175, 55, 0.2)",
            transitionDelay: "0.7s",
            animation: animated ? "float 4s ease-in-out infinite" : "none"
          }}
        >
          Wedding
        </h3>
        <p 
          className={`font-cormorant text-[#D4AF37] mb-4 ${animated ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ transitionDelay: "0.9s" }}
        >
          of
        </p>
        
        <div className={`mb-8 ${animated ? 'animate-fade-in' : 'opacity-0'}`} style={{ transitionDelay: "1.1s" }}>
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
        
        <div className={`mb-6 ${animated ? 'animate-fade-in' : 'opacity-0'}`} style={{ transitionDelay: "1.3s" }}>
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
        
        <div className={`my-8 ${animated ? 'animate-fade-in' : 'opacity-0'}`} style={{ transitionDelay: "1.5s" }}>
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
            className={`mt-8 font-dancing-script text-[#D4AF37] text-xl italic ${animated ? 'animate-fade-in' : 'opacity-0'}`}
            style={{
              transform: animated ? "rotate(-3deg)" : "rotate(0deg)",
              transitionDelay: "1.7s",
              transition: "all 0.8s ease-in-out"
            }}
          >
            reception to follow ceremony
          </p>
        )}
        
        {additionalInfo && (
          <p className={`mt-8 font-cormorant italic text-[#D4AF37]/80 text-sm ${animated ? 'animate-fade-in' : 'opacity-0'}`} style={{ transitionDelay: "1.9s" }}>
            {additionalInfo}
          </p>
        )}
      </div>
    </div>
  );
};

export default DaisyEleganceTemplate;
