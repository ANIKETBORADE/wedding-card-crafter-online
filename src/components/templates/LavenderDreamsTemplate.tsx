
import React from "react";
import { WeddingDetails } from "../../types/invitation";
import { formatWeddingDate, formatWeddingTime } from "../../utils/templateUtils";

interface TemplateProps {
  weddingDetails: WeddingDetails;
}

const LavenderDreamsTemplate: React.FC<TemplateProps> = ({ weddingDetails }) => {
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
      className="bg-white rounded-lg overflow-hidden max-w-lg mx-auto"
      style={{
        background: "linear-gradient(135deg, #f6f2ff 0%, #ffffff 100%)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        border: "1px solid #e2d9f3"
      }}
    >
      <div 
        className="p-10 text-center relative"
        style={{
          backgroundImage: "url('https://i.imgur.com/eyI2rPK.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay"
        }}
      >
        {/* Lavender decorative elements */}
        <div 
          className="absolute top-0 right-0 w-32 h-32 opacity-60"
          style={{
            background: "url('https://i.imgur.com/nmoOVSk.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right top"
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-32 h-32 opacity-60"
          style={{
            background: "url('https://i.imgur.com/nmoOVSk.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left bottom",
            transform: "rotate(180deg)"
          }}
        />
        
        {photos && photos.length > 0 && (
          <div className="mb-8 flex justify-center">
            <div 
              className="w-40 h-40 rounded-full overflow-hidden border-4 border-white"
              style={{
                boxShadow: "0 0 0 4px rgba(150, 123, 182, 0.2)",
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
        
        <div className="mb-6 relative z-10">
          <h3 className="font-great-vibes text-5xl text-[#8a6bb2] mb-3">
            {brideFirstName} & {groomFirstName}
          </h3>
          <p className="font-montserrat text-sm tracking-wide text-[#8a6bb2]/80">
            request the pleasure of your company at their wedding
          </p>
        </div>
        
        <div className="my-8 py-4 relative z-10">
          <div className="absolute left-1/4 right-1/4 top-0 h-px bg-[#8a6bb2]/30"></div>
          <div className="absolute left-1/4 right-1/4 bottom-0 h-px bg-[#8a6bb2]/30"></div>
          
          <p className="text-xl font-playfair text-[#8a6bb2] mb-2">
            {formattedDate}
          </p>
          <p className="text-[#8a6bb2]/80">
            at {formattedTime}
          </p>
        </div>
        
        <div className="mb-6 relative z-10">
          <p className="font-playfair font-medium text-[#8a6bb2] mb-2">
            {venue}
          </p>
          <p className="text-[#8a6bb2]/80">
            {venueAddress}
          </p>
        </div>
        
        {receptionVenue && (
          <div className="mt-8 relative z-10">
            <p className="font-playfair text-[#8a6bb2] font-medium mb-1">Reception follows</p>
            <p className="text-[#8a6bb2]/80">
              {receptionVenue}
              <br />
              {receptionAddress}
            </p>
          </div>
        )}
        
        {additionalInfo && (
          <p className="mt-8 text-[#8a6bb2]/80 italic text-sm relative z-10">{additionalInfo}</p>
        )}
      </div>
    </div>
  );
};

export default LavenderDreamsTemplate;
