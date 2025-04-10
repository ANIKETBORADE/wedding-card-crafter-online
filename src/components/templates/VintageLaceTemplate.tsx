
import React from "react";
import { WeddingDetails } from "../../types/invitation";
import { formatWeddingDate, formatWeddingTime } from "../../utils/templateUtils";

interface TemplateProps {
  weddingDetails: WeddingDetails;
}

const VintageLaceTemplate: React.FC<TemplateProps> = ({ weddingDetails }) => {
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
  
  // Lace pattern SVG for background
  const lacePattern = "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23e0cdbb' fill-opacity='0.25' fill-rule='evenodd'/%3E%3C/svg%3E";

  return (
    <div 
      id="invitation-card" 
      className="bg-[#f9f5f0] rounded-lg shadow-lg p-10 max-w-lg mx-auto relative overflow-hidden"
      style={{
        backgroundImage: `url("${lacePattern}")`,
        border: "12px solid #f9f5f0",
        boxShadow: "0 0 0 2px #e0cdbb, 0 5px 15px rgba(0,0,0,0.1)"
      }}
    >
      {/* Ornate corner decorations */}
      <div className="absolute top-0 left-0 w-24 h-24 text-[#e0cdbb] opacity-70">
        ❦
      </div>
      <div className="absolute top-0 right-0 w-24 h-24 text-[#e0cdbb] opacity-70 rotate-90">
        ❦
      </div>
      <div className="absolute bottom-0 left-0 w-24 h-24 text-[#e0cdbb] opacity-70 -rotate-90">
        ❦
      </div>
      <div className="absolute bottom-0 right-0 w-24 h-24 text-[#e0cdbb] opacity-70 rotate-180">
        ❦
      </div>
      
      <div className="text-center relative z-10 border-4 border-[#e0cdbb60] p-8 bg-[#f9f5f0]/80 rounded">
        {/* Display photo in an ornate vintage frame */}
        {photos && photos.length > 0 && (
          <div className="mb-8 flex justify-center">
            <div className="relative w-40 h-40">
              <div className="absolute inset-0 border-8 border-[#e0cdbb] rounded-full overflow-hidden"
                   style={{
                     boxShadow: "inset 0 0 10px rgba(0,0,0,0.2)"
                   }}>
                <img 
                  src={photos[0]} 
                  alt="Couple" 
                  className="w-full h-full object-cover sepia-[0.2]"
                />
              </div>
            </div>
          </div>
        )}
        
        <h3 className="font-great-vibes text-4xl text-[#876f58] mb-3">
          {brideFirstName} & {groomFirstName}
        </h3>
        
        <div className="relative my-6 py-4">
          <div className="absolute left-0 right-0 top-0 h-px bg-[#e0cdbb]"></div>
          <div className="absolute left-0 right-0 bottom-0 h-px bg-[#e0cdbb]"></div>
          
          <p className="font-playfair text-[#876f58] tracking-wider mb-3">
            REQUEST THE PLEASURE OF YOUR COMPANY
          </p>
          <p className="text-xl font-medium text-[#5d4a3a] mb-2">
            {formattedDate}
          </p>
          <p className="text-[#876f58]">
            at {formattedTime}
          </p>
        </div>
        
        <p className="font-playfair font-medium text-[#5d4a3a] mb-2">
          {venue}
        </p>
        <p className="text-[#876f58] mb-6">
          {venueAddress}
        </p>
        
        {receptionVenue && (
          <div className="mt-8 pt-4">
            <div className="text-center flex items-center justify-center mb-2">
              <span className="inline-block h-px w-12 bg-[#e0cdbb]"></span>
              <span className="mx-4 text-[#876f58] font-great-vibes text-xl">Reception</span>
              <span className="inline-block h-px w-12 bg-[#e0cdbb]"></span>
            </div>
            <p className="text-[#5d4a3a] font-medium">
              {receptionVenue}
            </p>
            <p className="text-[#876f58]">
              {receptionAddress}
            </p>
          </div>
        )}
        
        {additionalInfo && (
          <p className="mt-8 text-[#876f58] italic text-sm">{additionalInfo}</p>
        )}
      </div>
    </div>
  );
};

export default VintageLaceTemplate;
