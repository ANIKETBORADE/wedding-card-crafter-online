
import React from "react";
import { WeddingDetails } from "../../types/invitation";
import { formatWeddingDate, formatWeddingTime } from "../../utils/templateUtils";

interface TemplateProps {
  weddingDetails: WeddingDetails;
}

const DefaultTemplate: React.FC<TemplateProps> = ({ weddingDetails }) => {
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
    <div id="invitation-card" className="bg-white rounded-lg border border-wedding-cream shadow-lg p-8 max-w-lg mx-auto">
      <div className="text-center">
        {/* Add photo if available */}
        {photos && photos.length > 0 && (
          <div className="mb-6 flex justify-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-wedding-gold/30">
              <img 
                src={photos[0]} 
                alt="Couple" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
        
        <h3 className="font-great-vibes text-3xl text-wedding-gold mb-4">
          {brideFirstName} & {groomFirstName}
        </h3>
        <p className="text-gray-700 mb-2">
          are getting married
        </p>
        <p className="text-xl font-medium text-gray-800 mb-4">
          {formattedDate} at {formattedTime}
        </p>
        <div className="fancy-separator">
          <span>♥</span>
        </div>
        <p className="text-gray-700">
          {venue}
          <br />
          {venueAddress}
        </p>
        
        {receptionVenue && (
          <div className="mt-6">
            <p className="text-gray-700">Reception to follow</p>
            <p className="text-gray-700">
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

export default DefaultTemplate;
