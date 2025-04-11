
import React from "react";
import { WeddingDetails } from "../../types/invitation";
import { formatWeddingDate, formatWeddingTime } from "../../utils/templateUtils";

interface TemplateProps {
  weddingDetails: WeddingDetails;
}

const TropicalParadiseTemplate: React.FC<TemplateProps> = ({ weddingDetails }) => {
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
        background: "linear-gradient(to bottom, #e4f7f7, #ffffff)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        border: "1px solid #abded8"
      }}
    >
      <div className="p-10 text-center relative">
        {/* Tropical decorative elements */}
        <div 
          className="absolute top-0 right-0 w-40 h-40 opacity-70 tropical-leaf"
          style={{
            background: "url('https://i.imgur.com/uJEXOxD.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right top"
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-40 h-40 opacity-70 tropical-leaf"
          style={{
            background: "url('https://i.imgur.com/1V6KAkO.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left bottom"
          }}
        />
        
        {photos && photos.length > 0 && (
          <div className="mb-8 flex justify-center">
            <div 
              className="w-40 h-40 rounded-full overflow-hidden border-4 border-white"
              style={{
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
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
          <h3 className="font-dancing-script text-5xl text-[#2a8d8d] mb-3">
            {brideFirstName} & {groomFirstName}
          </h3>
          <p className="font-montserrat text-sm tracking-wide text-[#2a8d8d]/80">
            INVITE YOU TO THEIR TROPICAL WEDDING PARADISE
          </p>
        </div>
        
        <div className="my-8 py-4 relative z-10">
          <div className="absolute left-1/4 right-1/4 top-0 h-px bg-[#2a8d8d]/30"></div>
          <div className="absolute left-1/4 right-1/4 bottom-0 h-px bg-[#2a8d8d]/30"></div>
          
          <p className="text-xl font-montserrat text-[#2a8d8d] mb-2">
            {formattedDate}
          </p>
          <p className="text-[#2a8d8d]/80">
            at {formattedTime}
          </p>
        </div>
        
        <div className="mb-6 relative z-10">
          <p className="font-montserrat font-medium text-[#2a8d8d] mb-2">
            {venue}
          </p>
          <p className="text-[#2a8d8d]/80">
            {venueAddress}
          </p>
        </div>
        
        {receptionVenue && (
          <div className="mt-8 relative z-10">
            <p className="font-montserrat text-[#2a8d8d] font-medium mb-1">Celebration continues at</p>
            <p className="text-[#2a8d8d]/80">
              {receptionVenue}
              <br />
              {receptionAddress}
            </p>
          </div>
        )}
        
        {additionalInfo && (
          <p className="mt-8 text-[#2a8d8d]/80 italic text-sm relative z-10">{additionalInfo}</p>
        )}
      </div>
    </div>
  );
};

export default TropicalParadiseTemplate;
