
import React from "react";
import { WeddingDetails } from "../../types/invitation";
import { formatWeddingDate, formatWeddingTime } from "../../utils/templateUtils";

interface TemplateProps {
  weddingDetails: WeddingDetails;
}

const MarbleLuxuryTemplate: React.FC<TemplateProps> = ({ weddingDetails }) => {
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
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        border: "1px solid rgba(0,0,0,0.1)"
      }}
    >
      <div 
        className="p-10 text-center marble-effect"
        style={{
          animation: "colorShift 10s infinite ease-in-out",
        }}
      >
        {/* Marble luxury decorative elements */}
        <div 
          className="absolute top-0 left-0 w-full h-20 opacity-20"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.1), transparent)"
          }}
        />
        
        {photos && photos.length > 0 && (
          <div className="mb-8 flex justify-center">
            <div 
              className="w-40 h-40 rounded-full overflow-hidden"
              style={{
                boxShadow: "0 5px 15px rgba(0,0,0,0.1), 0 0 0 5px white, 0 0 0 6px rgba(0,0,0,0.1)",
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
          <h3 className="gold-foil text-4xl mb-3 font-cinzel">
            {brideFirstName} & {groomFirstName}
          </h3>
          <p className="text-gray-600 text-sm tracking-widest uppercase">
            Request the pleasure of your company
          </p>
        </div>
        
        <div className="my-8 py-4 relative">
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>
          <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>
          
          <p className="text-xl font-cinzel text-gray-800 mb-2">
            {formattedDate}
          </p>
          <p className="text-gray-600">
            at {formattedTime}
          </p>
        </div>
        
        <div className="mb-6">
          <p className="font-cinzel font-medium text-gray-800 mb-2">
            {venue}
          </p>
          <p className="text-gray-600">
            {venueAddress}
          </p>
        </div>
        
        {receptionVenue && (
          <div className="mt-8">
            <p className="font-cinzel text-gray-700 font-medium mb-1">Reception to follow</p>
            <p className="text-gray-600">
              {receptionVenue}
              <br />
              {receptionAddress}
            </p>
          </div>
        )}
        
        {additionalInfo && (
          <p className="mt-8 text-gray-600 italic text-sm">{additionalInfo}</p>
        )}
        
        <div 
          className="absolute bottom-0 left-0 w-full h-20 opacity-20"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.1), transparent)"
          }}
        />
      </div>
    </div>
  );
};

export default MarbleLuxuryTemplate;
