
import React from "react";
import { WeddingDetails } from "../../types/invitation";
import { formatWeddingDate, formatWeddingTime } from "../../utils/templateUtils";

interface TemplateProps {
  weddingDetails: WeddingDetails;
}

const MinimalChicTemplate: React.FC<TemplateProps> = ({ weddingDetails }) => {
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
    <div id="invitation-card" className="bg-white rounded-lg shadow-lg p-8 max-w-lg mx-auto">
      <div className="text-center">
        {/* Photo gallery if available */}
        {photos && photos.length > 0 && (
          <div className="mb-6 flex justify-center">
            <div className="w-full max-w-xs overflow-hidden">
              <img 
                src={photos[0]} 
                alt="Couple" 
                className="w-full h-auto object-cover rounded-sm"
              />
            </div>
          </div>
        )}
        
        <div className="border-t border-b border-wedding-gold/30 py-6 px-4">
          <h3 className="font-montserrat text-xl uppercase tracking-widest text-gray-800 mb-4">
            {brideFirstName} {brideLastName} & {groomFirstName} {groomLastName}
          </h3>
          <p className="text-gray-600 mb-4">
            WE ARE GETTING MARRIED
          </p>
          <p className="text-2xl font-playfair text-wedding-gold mb-4">
            {formattedDate}
          </p>
          <p className="text-gray-600 mb-8">
            {formattedTime}
          </p>
          <p className="font-medium text-gray-800">
            {venue}
          </p>
          <p className="text-gray-600">
            {venueAddress}
          </p>
          
          {receptionVenue && (
            <div className="mt-6">
              <p className="text-gray-700 font-medium">Reception</p>
              <p className="text-gray-600">
                {receptionVenue}, {receptionAddress}
              </p>
            </div>
          )}
        </div>
        
        {additionalInfo && (
          <p className="mt-6 text-gray-600 text-sm">{additionalInfo}</p>
        )}
      </div>
    </div>
  );
};

export default MinimalChicTemplate;
