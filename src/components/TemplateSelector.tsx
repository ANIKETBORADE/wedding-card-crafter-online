
import React, { useState } from "react";
import TemplateGalleryToolbar from "./TemplateGalleryToolbar";
import TemplateGalleryGrid from "./TemplateGalleryGrid";
import TemplateCategoryTabs from "./TemplateCategoryTabs";
import { templates } from "../utils/templateUtils";
import { WeddingDetails, TemplateItem } from "../types/invitation";
import { TabsContent } from "@/components/ui/tabs";

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

  // Filter and search templates for the active category
  const filteredTemplates = getCategoryTemplates(activeCategory).filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (id: string) => {
    setSelectedTemplate(id);
    onSelectTemplate(id);
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

