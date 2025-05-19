
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TemplateGalleryToolbar from "./TemplateGalleryToolbar";
import TemplateGalleryGrid from "./TemplateGalleryGrid";
import TemplateCategoryTabs from "./TemplateCategoryTabs";
import { templates } from "../utils/templateUtils";
import { WeddingDetails, TemplateItem } from "../types/invitation";
import { TabsContent } from "@/components/ui/tabs";
import { useIsMobile } from "../hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

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
  const navigate = useNavigate();

  // Filter and search templates for the active category
  const filteredTemplates = getCategoryTemplates(activeCategory).filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (id: string) => {
    setSelectedTemplate(id);
    
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
    
    // Auto-navigate to preview page after selecting a template
    toast({
      title: "Template Selected",
      description: `Template "${selectedTemplateName}" selected. Proceeding to preview.`,
    });
    
    // Navigate after a brief delay to show the toast
    setTimeout(() => {
      onSelectTemplate(id);
      // Navigate to preview page with the required state
      navigate("/preview", {
        state: { 
          details: weddingDetails, 
          templateId: id 
        }
      });
    }, 800);
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
          </TabsContent>
        ))}
      </TemplateCategoryTabs>
    </div>
  );
};

export default TemplateSelector;
