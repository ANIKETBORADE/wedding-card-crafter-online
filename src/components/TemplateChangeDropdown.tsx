
import React from "react";
import { Button } from "@/components/ui/button";
import { Layout, Check } from "lucide-react";
import { templates } from "../utils/templateUtils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

interface TemplateChangeDropdownProps {
  templateId: string;
  onTemplateChange: (templateId: string) => void;
  variant?: "desktop" | "mobile";
}

const TemplateChangeDropdown: React.FC<TemplateChangeDropdownProps> = ({
  templateId,
  onTemplateChange,
  variant = "desktop"
}) => {
  // Get the current template name
  const currentTemplateName = templates.find(t => t.id === templateId)?.name || "Select Template";

  // For mobile, use a Select component which is more touch-friendly
  if (variant === "mobile") {
    return (
      <Select value={templateId} onValueChange={onTemplateChange}>
        <SelectTrigger className="w-full bg-white">
          <SelectValue placeholder={currentTemplateName} />
        </SelectTrigger>
        <SelectContent className="max-h-[50vh]">
          {templates.map((template) => (
            <SelectItem 
              key={template.id} 
              value={template.id}
              className={templateId === template.id ? 'font-medium' : ''}
            >
              {template.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }
  
  // For desktop, use the dropdown menu
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="border-wedding-gold text-wedding-gold hover:bg-wedding-gold/10"
        >
          <Layout className="mr-2 h-4 w-4" />
          Change Template
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Available Templates</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {templates.map((template) => (
          <DropdownMenuItem 
            key={template.id}
            className={`cursor-pointer ${templateId === template.id ? 'bg-wedding-gold/10 font-medium' : ''}`}
            onClick={() => onTemplateChange(template.id)}
          >
            {template.name}
            {templateId === template.id && (
              <Check className="ml-auto h-4 w-4 text-wedding-gold" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TemplateChangeDropdown;
