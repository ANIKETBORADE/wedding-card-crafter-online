
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { TemplateItem } from "../types/invitation";

interface TemplateCardProps {
  template: TemplateItem;
  selected: boolean;
  onSelect: (templateId: string) => void;
  index: number;
}

const TemplateCard: React.FC<TemplateCardProps> = ({
  template,
  selected,
  onSelect,
  index,
}) => {
  return (
    <Card
      key={template.id}
      className={`overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer transform hover:-translate-y-1 animate-fade-in ${
        selected ? "ring-2 ring-wedding-gold shadow-lg" : "hover:border-wedding-gold"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={() => onSelect(template.id)}
    >
      <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden group">
        <img
          src={template.previewImage}
          alt={template.name}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {selected && (
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
  );
};

export default TemplateCard;
