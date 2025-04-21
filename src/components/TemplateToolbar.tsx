
import React from "react";
import { Button } from "@/components/ui/button";
import { Filter, Search, Grid2x2, Grid3x3 } from "lucide-react";
import { Input } from "@/components/ui/input";

interface TemplateToolbarProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  gridSize: "small" | "medium" | "large";
  setGridSize: (size: "small" | "medium" | "large") => void;
}

const TemplateToolbar: React.FC<TemplateToolbarProps> = ({
  searchQuery,
  setSearchQuery,
  gridSize,
  setGridSize,
}) => (
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
          <Grid3x3 className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={gridSize === "medium" ? "bg-wedding-gold/10" : ""}
          onClick={() => setGridSize("medium")}
          title="Medium view"
        >
          <Grid2x2 className="h-4 w-4" />
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
      <Button variant="outline" size="sm" className="flex items-center gap-2">
        <Filter className="h-4 w-4" />
        <span>Filter</span>
      </Button>
    </div>
  </div>
);

export default TemplateToolbar;
