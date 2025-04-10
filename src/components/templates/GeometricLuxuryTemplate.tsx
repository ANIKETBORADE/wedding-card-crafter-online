
import React from "react";
import { WeddingDetails } from "../../types/invitation";
import { formatWeddingDate, formatWeddingTime } from "../../utils/templateUtils";

interface TemplateProps {
  weddingDetails: WeddingDetails;
}

const GeometricLuxuryTemplate: React.FC<TemplateProps> = ({ weddingDetails }) => {
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
      className="bg-white rounded-md overflow-hidden max-w-lg mx-auto"
      style={{
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        backgroundImage: "linear-gradient(135deg, #ffffff 25%, #f9f9f9 25%, #f9f9f9 50%, #ffffff 50%, #ffffff 75%, #f9f9f9 75%, #f9f9f9 100%)",
        backgroundSize: "40px 40px",
        border: "1px solid #f0f0f0"
      }}
    >
      <div className="p-1">
        <div className="bg-white p-8 relative">
          {/* Geometric decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 opacity-10" 
            style={{
              backgroundImage: "linear-gradient(45deg, #D4AF37 25%, transparent 25%), linear-gradient(-45deg, #D4AF37 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #D4AF37 75%), linear-gradient(-45deg, transparent 75%, #D4AF37 75%)",
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
              clipPath: "polygon(0 0, 100% 0, 0 100%)"
            }}
          />
          <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10" 
            style={{
              backgroundImage: "linear-gradient(45deg, #D4AF37 25%, transparent 25%), linear-gradient(-45deg, #D4AF37 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #D4AF37 75%), linear-gradient(-45deg, transparent 75%, #D4AF37 75%)",
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
              clipPath: "polygon(100% 100%, 0 100%, 100% 0)"
            }}
          />
          
          <div className="border-2 border-[#D4AF37]/20 p-8 relative">
            <div className="absolute inset-0 border-[10px] border-[#D4AF37]/5 m-2"></div>
            <div className="text-center py-6">
              {photos && photos.length > 0 && (
                <div className="mb-8 flex justify-center">
                  <div className="w-32 h-32 overflow-hidden border-4 border-[#f0f0f0]"
                      style={{
                        clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                        boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                      }}>
                    <img 
                      src={photos[0]} 
                      alt="Couple" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
              
              <div 
                className="mb-6 relative"
                style={{
                  paddingBottom: "20px"
                }}
              >
                <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
                <h3 className="font-playfair text-3xl text-[#333333] mb-1 tracking-wide">
                  {brideFirstName} <span className="font-great-vibes text-[#D4AF37]">&</span> {groomFirstName}
                </h3>
                <p className="text-sm tracking-[0.2em] text-[#777777] uppercase font-medium">
                  REQUEST THE HONOR OF YOUR PRESENCE
                </p>
              </div>
              
              <div className="my-8">
                <p className="text-xl font-playfair text-[#333333] mb-2">
                  {formattedDate}
                </p>
                <p className="text-[#777777]">
                  at {formattedTime}
                </p>
              </div>
              
              <div className="mb-8">
                <p className="font-medium text-[#333333] mb-2">
                  {venue}
                </p>
                <p className="text-[#777777]">
                  {venueAddress}
                </p>
              </div>
              
              {receptionVenue && (
                <div 
                  className="mt-8 relative pt-8"
                  style={{
                    paddingTop: "20px"
                  }}
                >
                  <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
                  <p className="text-[#777777] font-medium">Reception to follow</p>
                  <p className="text-[#777777]">
                    {receptionVenue}
                    <br />
                    {receptionAddress}
                  </p>
                </div>
              )}
              
              {additionalInfo && (
                <p className="mt-8 text-[#777777] italic text-sm">{additionalInfo}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeometricLuxuryTemplate;
