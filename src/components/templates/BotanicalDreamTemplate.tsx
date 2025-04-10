
import React from "react";
import { WeddingDetails } from "../../types/invitation";
import { formatWeddingDate, formatWeddingTime } from "../../utils/templateUtils";

interface TemplateProps {
  weddingDetails: WeddingDetails;
}

const BotanicalDreamTemplate: React.FC<TemplateProps> = ({ weddingDetails }) => {
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
      className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg mx-auto"
      style={{
        background: "linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.9)), url('https://images.unsplash.com/photo-1470756544705-1848092fbe5f?auto=format&fit=crop&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "10px solid white",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1), 0 1px 8px rgba(0,0,0,0.07)"
      }}
    >
      <div className="relative p-10 text-center">
        {/* Botanical decorative corners */}
        <div className="absolute top-0 left-0 w-28 h-28 opacity-70"
          style={{
            background: "url('https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "bottom right",
            maskImage: "radial-gradient(circle at top left, black 20%, transparent 70%)"
          }}
        />
        <div className="absolute bottom-0 right-0 w-28 h-28 opacity-70 transform rotate-180"
          style={{
            background: "url('https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "bottom right",
            maskImage: "radial-gradient(circle at top left, black 20%, transparent 70%)"
          }}
        />
        
        {photos && photos.length > 0 && (
          <div className="mb-8 flex justify-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg"
                 style={{
                   boxShadow: "0 0 0 6px rgba(144, 194, 108, 0.2), 0 0 0 12px rgba(144, 194, 108, 0.1)"
                 }}>
              <img 
                src={photos[0]} 
                alt="Couple" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
        
        <div className="mb-6">
          <h3 className="font-great-vibes text-5xl text-green-800 mb-3">
            {brideFirstName} & {groomFirstName}
          </h3>
          <p className="font-playfair text-sm tracking-widest text-green-700 uppercase">
            invite you to celebrate their wedding
          </p>
        </div>
        
        <div className="my-6 relative py-6">
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-green-600/30 to-transparent"></div>
          <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green-600/30 to-transparent"></div>
          
          <p className="text-xl font-medium text-green-900 mb-2">
            {formattedDate}
          </p>
          <p className="text-green-700">
            at {formattedTime}
          </p>
        </div>
        
        <div className="mb-6">
          <p className="font-playfair font-medium text-green-800 mb-2">
            {venue}
          </p>
          <p className="text-green-700 mb-6">
            {venueAddress}
          </p>
        </div>
        
        {receptionVenue && (
          <div className="mt-6">
            <p className="font-playfair text-green-700 font-medium mb-1">Reception to follow</p>
            <p className="text-green-600">
              {receptionVenue}
              <br />
              {receptionAddress}
            </p>
          </div>
        )}
        
        {additionalInfo && (
          <p className="mt-8 text-green-600 italic text-sm">{additionalInfo}</p>
        )}
      </div>
    </div>
  );
};

export default BotanicalDreamTemplate;
