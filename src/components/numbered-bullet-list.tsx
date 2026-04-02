"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ListItem {
  text: string;
}

interface NumberedBulletListProps {
  items: ListItem[];
  style?: "numbers" | "bullets";
  theme?: "dark" | "light";
  className?: string;
}

export function NumberedBulletList({ 
  items, 
  style = "numbers", 
  theme = "dark",
  className
}: NumberedBulletListProps) {
  if (!items || items.length === 0) return null;
  const isDark = theme === "dark";

  return (
    <ul className={cn("grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mt-4", className)}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className={cn(
            "flex-shrink-0 font-aileron font-bold text-sm",
            style === "numbers" ? "min-w-[20px]" : "mt-1.5 w-1.5 h-1.5 rounded-full",
            isDark ? "text-white/40" : "text-neutral-400",
            style === "bullets" && (isDark ? "bg-[#F59120]" : "bg-neutral-300")
          )}>
            {style === "numbers" ? `${i + 1}.` : ""}
          </span>
          <span className={cn(
            "font-geist text-[16px]",
            isDark ? "text-white/80" : "text-neutral-700"
          )}>
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
}
