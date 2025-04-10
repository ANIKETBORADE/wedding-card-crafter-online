
import React from "react";
import { WeddingDetails } from "../../types/invitation";
import { formatWeddingDate, formatWeddingTime } from "../../utils/templateUtils";

interface TemplateProps {
  weddingDetails: WeddingDetails;
}

const ElegantFloralTemplate: React.FC<TemplateProps> = ({ weddingDetails }) => {
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
    <div id="invitation-card" className="bg-white rounded-lg border border-wedding-rose/40 shadow-lg p-8 max-w-lg mx-auto">
      <div className="text-center p-8 border border-wedding-gold/30 rounded-md">
        {/* Display couple photo if available */}
        {photos && photos.length > 0 && (
          <div className="mb-6 flex justify-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-wedding-gold/20">
              <img 
                src={photos[0]} 
                alt="Couple" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
        
        <h3 className="font-great-vibes text-4xl text-wedding-gold mb-4">
          {brideFirstName} & {groomFirstName}
        </h3>
        <p className="text-gray-700 mb-2 font-playfair tracking-wider">
          REQUEST THE PLEASURE OF YOUR COMPANY
        </p>
        <p className="text-gray-500 mb-4">
          {formattedDate} at {formattedTime}
        </p>
        <div className="fancy-separator">
          <span>♥</span>
        </div>
        <p className="font-playfair text-gray-700 mb-6">
          {venue}
          <br />
          {venueAddress}
        </p>
        
        {receptionVenue && (
          <div className="mt-6">
            <p className="text-gray-700 font-medium">Reception to follow at</p>
            <p className="text-gray-600">
              {receptionVenue}
              <br />
              {receptionAddress}
            </p>
          </div>
        )}
        
        {additionalInfo && (
          <p className="mt-6 text-gray-600 italic text-sm">{additionalInfo}</p>
        )}
      </div>
    </div>
  );
};

export default ElegantFloralTemplate;
