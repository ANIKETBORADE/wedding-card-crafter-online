
import React, { useRef, useEffect, useState } from "react";
import { TemplateItem, WeddingDetails } from "../types/invitation";
import TemplateGalleryCard from "./TemplateGalleryCard";

interface TemplateGalleryGridProps {
  templates: TemplateItem[];
  details: WeddingDetails;
  selectedTemplate: string;
  onSelect: (templateId: string) => void;
}

const LAZY_CHUNK_SIZE = 8;

const TemplateGalleryGrid: React.FC<TemplateGalleryGridProps> = ({
  templates,
  details,
  selectedTemplate,
  onSelect,
}) => {
  const [visibleCount, setVisibleCount] = useState(LAZY_CHUNK_SIZE);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  // Lazy-load more templates as user scrolls
  useEffect(() => {
    if (visibleCount >= templates.length) return;

    const observer = new window.IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setVisibleCount(v => Math.min(v + LAZY_CHUNK_SIZE, templates.length));
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [visibleCount, templates.length]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {templates.slice(0, visibleCount).map((template, index) => (
          <TemplateGalleryCard
            key={template.id}
            template={template}
            details={details}
            selected={selectedTemplate === template.id}
            onSelect={onSelect}
            index={index}
          />
        ))}
      </div>
      <div ref={loadMoreRef} />
      {visibleCount < templates.length && (
        <div className="text-center py-4">
          <span className="text-sm text-gray-400">Loading more templates...</span>
        </div>
      )}
    </div>
  );
};

export default TemplateGalleryGrid;
