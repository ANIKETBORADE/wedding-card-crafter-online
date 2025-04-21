
import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

interface TemplateGalleryToolbarProps {
  search: string;
  setSearch: (search: string) => void;
  showFilters?: boolean;
  onFilterClick?: () => void;
}

const TemplateGalleryToolbar: React.FC<TemplateGalleryToolbarProps> = ({
  search,
  setSearch,
  showFilters,
  onFilterClick,
}) => (
  <div className="mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
    <div className="relative w-full md:w-[340px]">
      <Input
        placeholder="Search templates..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="pl-10"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
    </div>
    {showFilters && (
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
        onClick={onFilterClick}
      >
        <Filter className="h-5 w-5" />
        <span>Filter</span>
      </Button>
    )}
  </div>
);

export default TemplateGalleryToolbar;
