
import React from "react";
import { WeddingDetails } from "../../types/invitation";
import { formatWeddingDate, formatWeddingTime } from "../../utils/templateUtils";

interface TemplateProps {
  weddingDetails: WeddingDetails;
}

const ClassicRomanceTemplate: React.FC<TemplateProps> = ({ weddingDetails }) => {
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
      className="bg-white rounded-lg shadow-lg p-10 max-w-lg mx-auto overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.95), rgba(255,255,255,0.95)), url('https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderWidth: "10px",
        borderStyle: "solid",
        borderImage: "linear-gradient(45deg, #d1a080, #f8e9e0) 1"
      }}
    >      
      <div className="text-center relative z-10">
        {/* Ornate header decoration */}
        <div className="mb-6 text-center text-[#d1a080] text-3xl">❧</div>
        
        {/* Display photo in an elegant frame if available */}
        {photos && photos.length > 0 && (
          <div className="mb-8 flex justify-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#f8e9e0] shadow-md"
                 style={{
                   boxShadow: "0 0 0 2px #d1a080"
                 }}>
              <img 
                src={photos[0]} 
                alt="Couple" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
        
        <h3 className="font-great-vibes text-4xl text-[#a06b4e] mb-4">
          {brideFirstName} & {groomFirstName}
        </h3>
        
        <div className="relative my-6 py-6">
          <div className="absolute left-1/4 right-1/4 top-0 h-px bg-[#d1a08080]"></div>
          <div className="absolute left-1/4 right-1/4 bottom-0 h-px bg-[#d1a08080]"></div>
          
          <p className="font-playfair text-[#a06b4e] tracking-wider mb-3">
            TOGETHER WITH THEIR FAMILIES
          </p>
          <p className="text-xl font-medium text-[#7d5540] mb-2">
            {formattedDate}
          </p>
          <p className="text-[#a06b4e]">
            at {formattedTime}
          </p>
        </div>
        
        <p className="font-playfair font-medium text-[#7d5540] mb-2">
          {venue}
        </p>
        <p className="text-[#a06b4e] mb-6">
          {venueAddress}
        </p>
        
        {receptionVenue && (
          <div className="mt-8 pt-4 relative">
            <div className="absolute left-1/3 right-1/3 top-0 h-px bg-[#d1a08080]"></div>
            <p className="font-playfair text-[#7d5540] font-medium mb-2">Reception to follow</p>
            <p className="text-[#a06b4e]">
              {receptionVenue}
              <br />
              {receptionAddress}
            </p>
          </div>
        )}
        
        {additionalInfo && (
          <p className="mt-6 text-[#a06b4e] italic text-sm">{additionalInfo}</p>
        )}
        
        {/* Ornate footer decoration */}
        <div className="mt-6 text-center text-[#d1a080] text-3xl">❧</div>
      </div>
    </div>
  );
};

export default ClassicRomanceTemplate;
