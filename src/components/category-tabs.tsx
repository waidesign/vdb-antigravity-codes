"use client";

import { categories } from "@/lib/blog";
import { cn } from "@/lib/utils";

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border",
            activeCategory === category
              ? "bg-brand-primary text-neutral-900 border-brand-primary shadow-[0_0_20px_rgba(245,145,32,0.2)]"
              : "bg-neutral-900/50 border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-neutral-200"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
