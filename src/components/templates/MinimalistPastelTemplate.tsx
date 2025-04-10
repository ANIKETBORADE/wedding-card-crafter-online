
import React from "react";
import { WeddingDetails } from "../../types/invitation";
import { formatWeddingDate, formatWeddingTime } from "../../utils/templateUtils";

interface TemplateProps {
  weddingDetails: WeddingDetails;
}

const MinimalistPastelTemplate: React.FC<TemplateProps> = ({ weddingDetails }) => {
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

  // Pastel colors in an elegant gradient
  const gradientStyle = {
    background: "linear-gradient(135deg, #f6e6ff 0%, #ffedf2 100%)"
  };

  return (
    <div 
      id="invitation-card" 
      className="rounded-lg overflow-hidden max-w-lg mx-auto"
      style={{
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        border: "15px solid white"
      }}
    >
      <div style={gradientStyle} className="p-10 relative overflow-hidden">
        {/* Soft watercolor-like background shapes */}
        <div 
          className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full opacity-30" 
          style={{background: "radial-gradient(circle, #ffccd5 0%, transparent 70%)"}}
        />
        <div 
          className="absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] rounded-full opacity-20" 
          style={{background: "radial-gradient(circle, #c7ceea 0%, transparent 70%)"}}
        />
        
        <div className="text-center relative z-10">
          {photos && photos.length > 0 && (
            <div className="mb-8 flex justify-center">
              <div className="w-40 h-40 rounded-full overflow-hidden border-[10px] border-white shadow-sm">
                <img 
                  src={photos[0]} 
                  alt="Couple" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
          
          <div className="mb-8">
            <p className="font-montserrat text-sm tracking-[0.15em] text-[#9c89b8] uppercase mb-2">
              WE'RE GETTING MARRIED
            </p>
            <h3 className="font-playfair text-4xl text-[#5e548e] mb-1">
              {brideFirstName} & {groomFirstName}
            </h3>
          </div>
          
          <div className="my-10 relative">
            <div className="absolute left-1/4 right-1/4 top-0 h-[1px] bg-[#b8bedd]/50"></div>
            <div className="absolute left-1/4 right-1/4 bottom-0 h-[1px] bg-[#b8bedd]/50"></div>
            
            <div className="py-8">
              <p className="text-xl font-medium text-[#5e548e] mb-2">
                {formattedDate}
              </p>
              <p className="text-[#9c89b8]">
                {formattedTime}
              </p>
            </div>
          </div>
          
          <div className="mb-8">
            <p className="font-medium text-[#5e548e] mb-1">
              {venue}
            </p>
            <p className="text-[#9c89b8]">
              {venueAddress}
            </p>
          </div>
          
          {receptionVenue && (
            <div className="mt-10 pt-8 relative">
              <div className="absolute left-1/3 right-1/3 top-0 h-[1px] bg-[#b8bedd]/50"></div>
              
              <p className="font-medium text-[#5e548e] mb-1">Reception</p>
              <p className="text-[#9c89b8]">
                {receptionVenue}
                <br />
                {receptionAddress}
              </p>
            </div>
          )}
          
          {additionalInfo && (
            <p className="mt-8 text-[#9c89b8] italic text-sm">{additionalInfo}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MinimalistPastelTemplate;
