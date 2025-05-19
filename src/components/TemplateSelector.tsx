
import React, { useState } from "react";
import TemplateGalleryToolbar from "./TemplateGalleryToolbar";
import TemplateGalleryGrid from "./TemplateGalleryGrid";
import TemplateCategoryTabs from "./TemplateCategoryTabs";
import { templates } from "../utils/templateUtils";
import { WeddingDetails, TemplateItem } from "../types/invitation";
import { TabsContent } from "@/components/ui/tabs";
import { useIsMobile } from "../hooks/use-mobile";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", name: "All Templates" },
  { id: "wedding", name: "Wedding" },
  { id: "birthday", name: "Birthday" },
  { id: "corporate", name: "Corporate" },
  { id: "baby-shower", name: "Baby Shower" },
  { id: "rustic", name: "Rustic" },
  { id: "minimalist", name: "Minimalist" },
  { id: "floral", name: "Floral" },
  { id: "themed", name: "Themed" },
  { id: "modern", name: "Modern" },
];

interface TemplateSelectorProps {
  weddingDetails: WeddingDetails;
  onSelectTemplate: (templateId: string) => void;
}

const getCategoryTemplates = (category: string): TemplateItem[] => {
  if (category === "all") return templates;
  return templates.filter(t => t.category === category);
};

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ weddingDetails, onSelectTemplate }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const isMobile = useIsMobile();

  // Filter and search templates for the active category
  const filteredTemplates = getCategoryTemplates(activeCategory).filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (id: string) => {
    setSelectedTemplate(id);
    onSelectTemplate(id);
    
    // Track template selection
    const userEmail = localStorage.getItem("userEmail") || "anonymous";
    const selectedTemplateName = templates.find(t => t.id === id)?.name || "unknown";
    
    // In a real app, you would send this to your analytics service
    console.log(`Template selected: ${selectedTemplateName} by ${userEmail}`);
    
    // Store in localStorage for simple tracking
    const selections = JSON.parse(localStorage.getItem("templateSelections") || "[]");
    selections.push({
      email: userEmail,
      templateId: id,
      templateName: selectedTemplateName,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem("templateSelections", JSON.stringify(selections));
  };

  return (
    <div>
      <TemplateGalleryToolbar search={search} setSearch={setSearch} showFilters={false} />
      <TemplateCategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      >
        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <TemplateGalleryGrid
              templates={
                category.id === activeCategory
                  ? filteredTemplates
                  : getCategoryTemplates(category.id)
              }
              details={weddingDetails}
              selectedTemplate={selectedTemplate ?? ""}
              onSelect={handleSelect}
            />
            {isMobile && selectedTemplate && (
              <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50">
                <Button
                  className="bg-wedding-gold px-8 text-white shadow-lg"
                  onClick={() => onSelectTemplate(selectedTemplate)}
                >
                  Use Selected Template
                </Button>
              </div>
            )}
          </TabsContent>
        ))}
      </TemplateCategoryTabs>
    </div>
  );
};

export default TemplateSelector;
