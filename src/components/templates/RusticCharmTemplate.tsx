
import React from "react";
import { WeddingDetails } from "../../types/invitation";
import { formatWeddingDate, formatWeddingTime } from "../../utils/templateUtils";

interface TemplateProps {
  weddingDetails: WeddingDetails;
}

const RusticCharmTemplate: React.FC<TemplateProps> = ({ weddingDetails }) => {
  const {
    brideFirstName,
    groomFirstName,
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
      className="bg-white rounded-lg border border-amber-200 shadow-lg p-8 max-w-lg mx-auto" 
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1446869412983-a4a9b3001dd3?q=80&w=2070')", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundBlendMode: "soft-light"
      }}
    >
      <div className="text-center bg-white/90 p-8 border border-amber-100 rounded-md">
        {/* Photo display */}
        {photos && photos.length > 0 && (
          <div className="mb-6 mx-auto">
            <div className="w-full max-w-xs mx-auto overflow-hidden border-4 border-amber-50 rotate-1">
              <img 
                src={photos[0]} 
                alt="Couple" 
                className="w-full h-auto"
              />
            </div>
          </div>
        )}
        
        <h3 className="font-great-vibes text-3xl text-amber-700 mb-4">
          {brideFirstName} & {groomFirstName}
        </h3>
        <p className="text-amber-900 mb-2 font-serif">
          INVITE YOU TO CELEBRATE THEIR MARRIAGE
        </p>
        <p className="text-xl font-medium text-amber-800 mb-4">
          {formattedDate} at {formattedTime}
        </p>
        <div className="fancy-separator">
          <span>✿</span>
        </div>
        <p className="text-amber-900">
          {venue}
          <br />
          {venueAddress}
        </p>
        
        {receptionVenue && (
          <div className="mt-6">
            <p className="text-amber-800">Reception to follow</p>
            <p className="text-amber-900">
              {receptionVenue}
              <br />
              {receptionAddress}
            </p>
          </div>
        )}
        
        {additionalInfo && (
          <p className="mt-6 text-amber-800 italic text-sm">{additionalInfo}</p>
        )}
      </div>
    </div>
  );
};

export default RusticCharmTemplate;
