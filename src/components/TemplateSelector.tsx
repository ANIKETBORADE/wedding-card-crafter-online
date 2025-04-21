
import React, { useState } from "react";
import { templates } from "../utils/templateUtils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Grid2x2, Grid3x3, Grid4x4, Filter, Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

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

        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-auto md:min-w-[300px]">
            <Input
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">View:</span>
            <div className="flex border rounded-md">
              <Button
                variant="ghost"
                size="sm"
                className={`rounded-l-md ${gridSize === "small" ? "bg-wedding-gold/10" : ""}`}
                onClick={() => setGridSize("small")}
                title="Compact view"
              >
                <Grid4x4 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={gridSize === "medium" ? "bg-wedding-gold/10" : ""}
                onClick={() => setGridSize("medium")}
                title="Medium view"
              >
                <Grid3x3 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={`rounded-r-md ${gridSize === "large" ? "bg-wedding-gold/10" : ""}`}
                onClick={() => setGridSize("large")}
                title="Large view"
              >
                <Grid2x2 className="h-4 w-4" />
              </Button>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mb-10">
          <div className="overflow-x-auto pb-2">
            <TabsList className="mb-6 bg-transparent h-auto p-0 border-b space-x-4 w-fit min-w-full flex flex-nowrap">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-transparent data-[state=active]:text-wedding-gold data-[state=active]:border-b-2 data-[state=active]:border-wedding-gold rounded-none pb-2 whitespace-nowrap"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className={`grid ${getGridStyles()}`}>
                {filteredTemplates.map((template, index) => (
                  <Card 
                    key={template.id}
                    className={`overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer transform hover:-translate-y-1 animate-fade-in ${
                      selectedTemplate === template.id 
                        ? "ring-2 ring-wedding-gold shadow-lg" 
                        : "hover:border-wedding-gold"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => {
                      onSelectTemplate(template.id);
                      scrollToCreateForm(); // Scroll to the creation form after selection
                    }}
                  >
                    <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden group">
                      <img 
                        src={template.previewImage} 
                        alt={template.name}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      {selectedTemplate === template.id && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className="bg-wedding-gold rounded-full p-2">
                            <Check className="h-6 w-6 text-white" />
                          </div>
                        </div>
                      )}
                      <div className="absolute top-2 right-2 z-10">
                        {template.trending && (
                          <span className="bg-wedding-gold/90 text-white text-xs py-1 px-2 rounded-full">
                            Trending
                          </span>
                        )}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-lg mb-1">{template.name}</h3>
                      <p className="text-gray-500 text-sm">{template.description}</p>
                    </CardContent>
                  </Card>
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
        </Tabs>
        
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
