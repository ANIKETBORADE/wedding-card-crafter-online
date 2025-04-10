
import React from "react";
import { WeddingDetails } from "../../types/invitation";
import { formatWeddingDate, formatWeddingTime } from "../../utils/templateUtils";

interface TemplateProps {
  weddingDetails: WeddingDetails;
}

const ModernGeometricTemplate: React.FC<TemplateProps> = ({ weddingDetails }) => {
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
      className="bg-white rounded-lg shadow-lg p-0 max-w-lg mx-auto overflow-hidden"
    >
      {/* Geometric header */}
      <div className="h-20 bg-gradient-to-r from-blue-500 to-purple-600 relative">
        <div className="absolute inset-0" 
             style={{
               background: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 25%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.2) 0%, transparent 20%)",
               backgroundSize: "cover"
             }}>
        </div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
          <div className="text-2xl text-purple-600 font-bold">&</div>
        </div>
      </div>
      
      <div className="text-center pt-12 px-8 pb-8">
        {/* Photo display with geometric framing */}
        {photos && photos.length > 0 && (
          <div className="mb-8 flex justify-center">
            <div className="relative w-40 h-40 overflow-hidden">
              <div className="absolute inset-0 border-[10px] border-blue-100 rotate-45"></div>
              <div className="absolute inset-0 p-2">
                <img 
                  src={photos[0]} 
                  alt="Couple" 
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>
            </div>
          </div>
        )}
        
        <h3 className="font-montserrat text-3xl font-bold text-purple-600 tracking-tight mb-4">
          {brideFirstName.toUpperCase()} & {groomFirstName.toUpperCase()}
        </h3>
        
        <div className="py-4 mb-6 relative">
          <div className="absolute left-0 w-12 h-1 bg-blue-400 top-0"></div>
          <div className="absolute right-0 w-12 h-1 bg-purple-400 top-0"></div>
          <p className="uppercase text-gray-500 tracking-widest text-sm font-medium mb-2">
            WE ARE GETTING MARRIED
          </p>
          <p className="text-2xl font-bold text-gray-800 mb-2">
            {formattedDate}
          </p>
          <p className="text-gray-600">
            {formattedTime}
          </p>
          <div className="absolute left-0 w-12 h-1 bg-blue-400 bottom-0"></div>
          <div className="absolute right-0 w-12 h-1 bg-purple-400 bottom-0"></div>
        </div>
        
        <div className="bg-gray-50 py-4 px-6 rounded-md mb-6">
          <p className="font-semibold text-gray-800 mb-1">
            {venue}
          </p>
          <p className="text-gray-600">
            {venueAddress}
          </p>
        </div>
        
        {receptionVenue && (
          <div className="mt-6">
            <p className="uppercase tracking-wider text-sm font-medium text-blue-500">Reception</p>
            <p className="text-gray-700 font-medium">
              {receptionVenue}
            </p>
            <p className="text-gray-600">
              {receptionAddress}
            </p>
          </div>
        )}
        
        {additionalInfo && (
          <p className="mt-6 text-gray-500 text-sm px-6">{additionalInfo}</p>
        )}
      </div>
    </div>
  );
};

export default ModernGeometricTemplate;
