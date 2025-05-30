import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TemplateSelector from "../components/TemplateSelector";
import InvitationForm from "../components/InvitationForm";
import InvitationPreview from "../components/InvitationPreview";
import Footer from "../components/Footer";
import { WeddingDetails } from "../types/invitation";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("elegant-floral");
  const [weddingDetails, setWeddingDetails] = useState<WeddingDetails | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const navigate = useNavigate();

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
  };

  const handleFormSubmit = (data: WeddingDetails) => {
    setWeddingDetails(data);
    navigate("/gallery", {
      state: { details: data },
    });
  };

  const handleEditDetails = () => {
    setShowPreview(false);
    setTimeout(() => {
      const formElement = document.getElementById("create");
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleTemplateChange = (templateId: string) => {
    setSelectedTemplate(templateId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div id="home" className="min-h-screen flex flex-col">
      <Header />
      
      {!showPreview ? (
        <>
          <Hero />
          
          <div id="how-it-works" className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                <div className="fancy-separator">
                  <span>❖</span>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Create your beautiful wedding invitation in just three easy steps
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="elegant-card text-center">
                  <div className="w-16 h-16 bg-wedding-rose/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-wedding-gold">1</span>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Choose a Template</h3>
                  <p className="text-gray-600">
                    Browse our collection of beautiful templates and select your favorite design
                  </p>
                </div>
                
                <div className="elegant-card text-center">
                  <div className="w-16 h-16 bg-wedding-rose/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-wedding-gold">2</span>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Add Your Details</h3>
                  <p className="text-gray-600">
                    Enter your wedding information and upload photos to personalize your invitation
                  </p>
                </div>
                
                <div className="elegant-card text-center">
                  <div className="w-16 h-16 bg-wedding-rose/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-wedding-gold">3</span>
                  </div>
                  <h3 className="text-xl font-medium mb-3">Share & Celebrate</h3>
                  <p className="text-gray-600">
                    Download your invitation or share it directly with your family and friends
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div id="create">
            <InvitationForm onSubmit={handleFormSubmit} />
          </div>
        </>
      ) : (
        weddingDetails && (
          <InvitationPreview 
            weddingDetails={weddingDetails}
            templateId={selectedTemplate}
            onEdit={handleEditDetails}
            onTemplateChange={handleTemplateChange}
          />
        )
      )}
      
      <Footer />
    </div>
  );
};

export default Index;
