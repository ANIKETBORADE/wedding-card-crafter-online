
import React, { useState } from "react";
import { templates } from "../utils/templateUtils";
import { Button } from "@/components/ui/button";
// Removed { Card, CardContent } and individual icons, moved to subcomponents.
import TemplateCard from "./TemplateCard";
import TemplateCategoryTabs from "./TemplateCategoryTabs";
import TemplateToolbar from "./TemplateToolbar";
import { TabsContent } from "@/components/ui/tabs";

interface TemplateSelectorProps {
  selectedTemplate: string;
  onSelectTemplate: (templateId: string) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  selectedTemplate,
  onSelectTemplate,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [gridSize, setGridSize] = useState<"small" | "medium" | "large">("medium");
  const [activeCategory, setActiveCategory] = useState("all");

  // Define template categories
  const categories = [
    { id: "all", name: "All Templates" },
    { id: "elegant", name: "Elegant" },
    { id: "modern", name: "Modern" },
    { id: "rustic", name: "Rustic" },
    { id: "minimalist", name: "Minimalist" },
    { id: "floral", name: "Floral" },
    { id: "themed", name: "Themed" },
  ];

  // Template category mapping
  const templateCategories = {
    "elegant-floral": ["elegant", "floral"],
    "botanical-dream": ["floral", "elegant"],
    "celestial-romance": ["themed", "elegant"],
    "minimal-chic": ["minimalist", "modern"],
    "rustic-charm": ["rustic"],
    "geometric-luxury": ["modern", "elegant"],
    "minimalist-pastel": ["minimalist", "modern"],
    "classic-romance": ["elegant"],
    "garden-watercolor": ["floral", "elegant"],
    "modern-geometric": ["modern"],
    "vintage-lace": ["elegant"],
    "royal-elegance": ["elegant"],
    "bohemian-dreams": ["themed", "rustic"],
    "tropical-paradise": ["themed", "floral"],
    "art-deco": ["themed", "elegant"],
    "watercolor-sunset": ["floral", "elegant"],
    "enchanted-garden": ["floral", "themed"],
    "marble-luxury": ["elegant", "modern"],
    "lavender-dreams": ["floral", "elegant"],
    "minimalist-gold": ["minimalist", "elegant"],
    "vintage-botanical": ["floral", "elegant"],
    "daisy-elegance": ["floral", "elegant"],
  };

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

  // Filter templates based on search query and selected category
  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" ||
      (templateCategories[template.id as keyof typeof templateCategories]?.includes(activeCategory));
    return matchesSearch && matchesCategory;
  });

  // Grid size styling
  const getGridStyles = () => {
    switch (gridSize) {
      case "small":
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4";
      case "large":
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";
      case "medium":
      default:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6";
    }
  };

  return (
    <div id="templates" className="py-16 bg-wedding-cream/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Perfect Template</h2>
          <div className="fancy-separator">
            <span>❖</span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select from our carefully crafted designs to find the perfect match for your special day.
            Each template can be fully personalized with your details and photos.
          </p>
        </div>

        <TemplateToolbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          gridSize={gridSize}
          setGridSize={setGridSize}
        />

        <TemplateCategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        >
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className={`grid ${getGridStyles()}`}>
                {filteredTemplates.map((template, index) => (
                  <TemplateCard
                    key={template.id}
                    template={template}
                    selected={selectedTemplate === template.id}
                    onSelect={(id) => {
                      onSelectTemplate(id);
                      scrollToCreateForm();
                    }}
                    index={index}
                  />
                ))}
              </div>
              {filteredTemplates.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-500">No templates found matching your criteria</p>
                  <Button
                    variant="link"
                    className="text-wedding-gold mt-2"
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("all");
                    }}
                  >
                    Clear filters
                  </Button>
                </div>
              )}
            </TabsContent>
          ))}
        </TemplateCategoryTabs>

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
