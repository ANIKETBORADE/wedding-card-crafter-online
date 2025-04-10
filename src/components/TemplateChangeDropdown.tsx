
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

interface TemplateChangeDropdownProps {
  templateId: string;
  onTemplateChange: (templateId: string) => void;
}

const TemplateChangeDropdown: React.FC<TemplateChangeDropdownProps> = ({
  templateId,
  onTemplateChange
}) => {
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
