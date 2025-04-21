
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Category {
  id: string;
  name: string;
}

interface TemplateCategoryTabsProps {
  categories: Category[];
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  children: React.ReactNode;
}

const TemplateCategoryTabs: React.FC<TemplateCategoryTabsProps> = ({
  categories,
  activeCategory,
  setActiveCategory,
  children,
}) => {
  return (
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
      {children}
    </Tabs>
  );
};

export default TemplateCategoryTabs;
