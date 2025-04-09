
import React from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-wedding-cream/30 to-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Create Beautiful 
              <span className="block text-wedding-gold font-great-vibes text-5xl md:text-6xl lg:text-7xl mt-1">
                Wedding Invitations
              </span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              Design stunning digital wedding invitations in minutes. 
              Personalize, preview and share with your loved ones instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-wedding-gold hover:bg-wedding-gold/90 text-white"
              >
                Create Your Invitation
                <Heart className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-wedding-gold text-wedding-gold hover:bg-wedding-gold/10"
              >
                Browse Templates
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-xl border border-wedding-cream rotate-3 transform transition-transform hover:rotate-0 duration-300">
                <div className="text-center p-6 border border-dashed border-wedding-gold/40 rounded-md">
                  <h3 className="font-great-vibes text-3xl text-wedding-gold mb-3">
                    Sarah & Michael
                  </h3>
                  <p className="text-gray-700 mb-2 font-playfair">
                    REQUEST THE HONOR OF YOUR PRESENCE
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Saturday, June 15th, 2025 at 3:00 PM
                  </p>
                  <div className="fancy-separator">
                    <span>♥</span>
                  </div>
                  <p className="text-gray-700 font-playfair">
                    The Grand Plaza
                    <br />
                    123 Wedding Lane
                    <br />
                    New York, NY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
