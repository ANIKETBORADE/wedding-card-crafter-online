
import React from "react";
import { WeddingDetails } from "../../types/invitation";
import { formatWeddingDate, formatWeddingTime } from "../../utils/templateUtils";

interface TemplateProps {
  weddingDetails: WeddingDetails;
}

const BohemianDreamsTemplate: React.FC<TemplateProps> = ({ weddingDetails }) => {
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
        background: "linear-gradient(135deg, #fcf8f3 0%, #faebd7 100%)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        border: "1px solid #e2d2ba"
      }}
    >
      <div className="p-10 text-center relative">
        {/* Bohemian decorative elements */}
        <div 
          className="absolute top-0 right-0 w-32 h-32 opacity-30"
          style={{
            background: "url('https://i.imgur.com/Xbwdt1F.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right top",
            animation: "float 6s ease-in-out infinite"
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-32 h-32 opacity-30"
          style={{
            background: "url('https://i.imgur.com/YHfOqXZ.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left bottom",
            animation: "float 8s ease-in-out infinite reverse"
          }}
        />
        
        {photos && photos.length > 0 && (
          <div className="mb-8 flex justify-center">
            <div 
              className="w-40 h-40 rounded-full overflow-hidden"
              style={{
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                border: "6px solid rgba(255, 255, 255, 0.8)"
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
        
        <div className="mb-6">
          <h3 className="font-dancing-script text-5xl text-[#997b66] mb-3">
            {brideFirstName} & {groomFirstName}
          </h3>
          <p className="text-[#997b66] text-sm tracking-wide">
            are getting married in a free-spirited celebration of love
          </p>
        </div>
        
        <div 
          className="my-8 py-4 relative"
          style={{
            background: "url('https://i.imgur.com/muFlFOW.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <p className="text-xl font-lora text-[#997b66] mb-2">
            {formattedDate}
          </p>
          <p className="text-[#997b66]">
            at {formattedTime}
          </p>
        </div>
        
        <div className="mb-6">
          <p className="font-lora font-medium text-[#997b66] mb-2">
            {venue}
          </p>
          <p className="text-[#997b66]/80">
            {venueAddress}
          </p>
        </div>
        
        {receptionVenue && (
          <div className="mt-8">
            <p className="text-[#997b66]/90 font-medium font-lora mb-1">Celebration continues at</p>
            <p className="text-[#997b66]/80">
              {receptionVenue}
              <br />
              {receptionAddress}
            </p>
          </div>
        )}
        
        {additionalInfo && (
          <p className="mt-8 text-[#997b66]/80 italic text-sm">{additionalInfo}</p>
        )}
      </div>
    </div>
  );
};

export default BohemianDreamsTemplate;
