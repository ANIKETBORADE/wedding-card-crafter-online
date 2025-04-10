
import React from "react";
import { WeddingDetails } from "../../types/invitation";
import { formatWeddingDate, formatWeddingTime } from "../../utils/templateUtils";

interface TemplateProps {
  weddingDetails: WeddingDetails;
}

const CelestialRomanceTemplate: React.FC<TemplateProps> = ({ weddingDetails }) => {
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
      className="bg-[#0a1033] text-white rounded-lg overflow-hidden max-w-lg mx-auto"
      style={{
        background: "linear-gradient(145deg, #0a1033 0%, #1a1f50 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3), inset 0 0 100px rgba(111, 143, 255, 0.15)"
      }}
    >
      <div 
        className="p-10 text-center relative overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 80%, rgba(111, 143, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 10%, rgba(111, 143, 255, 0.1) 0%, transparent 50%)"
        }}
      >
        {/* Celestial decorative elements */}
        <div className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundBlendMode: "overlay",
            mixBlendMode: "overlay"
          }}
        />
        
        {/* Stars */}
        <div className="absolute inset-0">
          {Array.from({ length: 40 }).map((_, index) => (
            <div
              key={index}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
                animation: `twinkle ${Math.random() * 3 + 2}s infinite ease-in-out`
              }}
            />
          ))}
        </div>
        
        {photos && photos.length > 0 && (
          <div className="mb-8 flex justify-center relative z-10">
            <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-[#6f8fff]/30 shadow-lg"
                 style={{
                   boxShadow: "0 0 15px rgba(111, 143, 255, 0.3), 0 0 30px rgba(111, 143, 255, 0.2)"
                 }}>
              <img 
                src={photos[0]} 
                alt="Couple" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
        
        <div className="mb-8 relative z-10">
          <h3 className="font-great-vibes text-5xl text-white mb-3 glow-text">
            {brideFirstName} & {groomFirstName}
          </h3>
          <p className="font-playfair text-sm tracking-[0.2em] text-[#a0b4ff] uppercase">
            are getting married under the stars
          </p>
        </div>
        
        <div className="my-10 relative z-10">
          <div className="flex items-center justify-center mb-3">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#6f8fff]/50"></div>
            <div className="mx-3">
              <svg className="w-5 h-5 text-[#6f8fff]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
              </svg>
            </div>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#6f8fff]/50"></div>
          </div>
          
          <p className="text-xl font-medium text-white mb-2">
            {formattedDate}
          </p>
          <p className="text-[#a0b4ff]">
            at {formattedTime}
          </p>
        </div>
        
        <div className="mb-6 relative z-10">
          <p className="font-playfair font-medium text-white mb-2">
            {venue}
          </p>
          <p className="text-[#a0b4ff] mb-6">
            {venueAddress}
          </p>
        </div>
        
        {receptionVenue && (
          <div className="mt-8 relative z-10">
            <p className="font-playfair text-[#a0b4ff] font-medium mb-1">Reception to follow</p>
            <p className="text-[#8eaeff]">
              {receptionVenue}
              <br />
              {receptionAddress}
            </p>
          </div>
        )}
        
        {additionalInfo && (
          <p className="mt-8 text-[#a0b4ff] italic text-sm relative z-10">{additionalInfo}</p>
        )}
      </div>
    </div>
  );
};

export default CelestialRomanceTemplate;
