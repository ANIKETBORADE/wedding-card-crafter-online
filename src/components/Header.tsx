
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-wedding-cream shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-great-vibes text-wedding-gold">
            WeddingCard
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => handleScroll("home")} 
            className="text-sm font-medium hover:text-wedding-gold transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => handleScroll("templates")} 
            className="text-sm font-medium hover:text-wedding-gold transition-colors"
          >
            Templates
          </button>
          <button 
            onClick={() => handleScroll("how-it-works")} 
            className="text-sm font-medium hover:text-wedding-gold transition-colors"
          >
            How It Works
          </button>
          <Button 
            onClick={() => handleScroll("create")}
            variant="outline" 
            className="border-wedding-gold text-wedding-gold hover:bg-wedding-gold hover:text-white"
          >
            Get Started
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 hover:text-wedding-gold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white pt-20 px-6 pb-8 transition-transform duration-300 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6">
          <button 
            onClick={() => handleScroll("home")} 
            className="text-lg font-medium hover:text-wedding-gold text-left"
          >
            Home
          </button>
          <button 
            onClick={() => handleScroll("templates")} 
            className="text-lg font-medium hover:text-wedding-gold text-left"
          >
            Templates
          </button>
          <button 
            onClick={() => handleScroll("how-it-works")} 
            className="text-lg font-medium hover:text-wedding-gold text-left"
          >
            How It Works
          </button>
          <Button 
            className="bg-wedding-gold hover:bg-wedding-gold/90 text-white w-full mt-4"
            onClick={() => handleScroll("create")}
          >
            Create Your Invitation
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
