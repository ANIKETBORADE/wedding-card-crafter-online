
import React, { useState } from "react";
import { templates } from "../utils/templateUtils";
import { useLocation, useNavigate } from "react-router-dom";
import TemplateGalleryGrid from "../components/TemplateGalleryGrid";
import TemplateGalleryToolbar from "../components/TemplateGalleryToolbar";
import TemplateCategoryTabs from "../components/TemplateCategoryTabs";
import { TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { WeddingDetails, TemplateItem } from "../types/invitation";

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

const getCategoryTemplates = (category: string): TemplateItem[] => {
  if (category === "all") return templates;
  return templates.filter(t => t.category === category);
};

function useFormDetails(): { details: WeddingDetails | null } {
  // Details come from location.state (forwarded from previous form), cannot be undefined
  const location = useLocation();
  const details = (location.state && (location.state as any).details) || null;
  return { details };
}

const TemplateGalleryPage: React.FC = () => {
  const { details } = useFormDetails();
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const navigate = useNavigate();

  if (!details) {
    // If no details in history, redirect home
    navigate("/");
    return null;
  }

  // Filtered, Searched templates in current category
  const filteredTemplates = getCategoryTemplates(activeCategory).filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (id: string) => setSelectedTemplate(id);

  const handleContinue = () => {
    if (selectedTemplate) {
      // Go to the preview page with all info
      navigate("/preview", {
        state: { details, templateId: selectedTemplate },
      });
    }
  };

  return (
    <main className="min-h-screen py-10 px-4 container mx-auto">
      <section className="mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">Preview Your Invitation in Every Style</h1>
        <p className="text-center text-gray-500 mb-4">
          Scroll through all styles and select your favorite. Your details are shown in every preview!
        </p>
      </section>
      <TemplateGalleryToolbar search={search} setSearch={setSearch} />
      <TemplateCategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      >
        {categories.map(category => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <TemplateGalleryGrid
              templates={
                (category.id === activeCategory
                  ? filteredTemplates
                  : getCategoryTemplates(category.id)
                )
              }
              details={details}
              selectedTemplate={selectedTemplate!}
              onSelect={handleSelect}
            />
          </TabsContent>
        ))}
      </TemplateCategoryTabs>
      <div className="flex justify-center mt-10">
        <Button
          className="bg-wedding-gold px-8 text-white"
          disabled={!selectedTemplate}
          onClick={handleContinue}
        >
          Continue With Selected Template
        </Button>
      </div>
    </main>
  );
};

export default TemplateGalleryPage;
