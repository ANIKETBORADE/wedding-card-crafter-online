
import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-wedding-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-great-vibes text-3xl text-wedding-gold mb-4">
              WeddingCard
            </h3>
            <p className="text-white/80 mb-4 max-w-xs">
              Create beautiful wedding invitations that perfectly capture your special day.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-wedding-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-wedding-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-wedding-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-wedding-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#templates" className="text-white/80 hover:text-wedding-gold transition-colors">
                  Templates
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-white/80 hover:text-wedding-gold transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-wedding-gold transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-wedding-gold transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-white/80">
              <li>Email: info@weddingcard.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Hours: Mon-Fri, 9am-5pm</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} WeddingCard. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-wedding-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-wedding-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
