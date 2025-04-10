
import React from "react";
import { templates } from "../utils/templateUtils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface TemplateSelectorProps {
  selectedTemplate: string;
  onSelectTemplate: (templateId: string) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  selectedTemplate,
  onSelectTemplate,
}) => {
  const handleViewAllTemplates = () => {
    // Scroll to this section to make sure all templates are visible
    const element = document.getElementById("templates");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCreateForm = () => {
    const element = document.getElementById("create");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="templates" className="py-16 bg-wedding-cream/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Perfect Template</h2>
          <div className="fancy-separator">
            <span>❖</span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select from our carefully crafted designs to find the perfect match for your special day.
            Each template can be fully personalized with your details and photos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {templates.map((template) => (
            <Card 
              key={template.id}
              className={`overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer transform hover:-translate-y-1 ${
                selectedTemplate === template.id 
                  ? "ring-2 ring-wedding-gold shadow-lg" 
                  : "hover:border-wedding-gold"
              }`}
              onClick={() => {
                onSelectTemplate(template.id);
                scrollToCreateForm(); // Scroll to the creation form after selection
              }}
            >
              <div className="relative aspect-[4/5] bg-gray-100">
                <img 
                  src={template.previewImage} 
                  alt={template.name}
                  className="w-full h-full object-cover"
                />
                {selectedTemplate === template.id && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="bg-wedding-gold rounded-full p-2">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium text-lg mb-1">{template.name}</h3>
                <p className="text-gray-500 text-sm">{template.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="outline" 
            className="border-wedding-gold text-wedding-gold hover:bg-wedding-gold hover:text-white"
            onClick={handleViewAllTemplates}
          >
            View All Templates
          </Button>
          
          <Button 
            className="bg-wedding-gold text-white hover:bg-wedding-gold/90"
            onClick={scrollToCreateForm}
          >
            Customize Selected Template
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;
