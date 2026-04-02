"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface FeatureItem {
  text: string;
}

interface FeatureGridCardProps {
  title?: string;
  items: FeatureItem[];
  theme?: "dark" | "light";
  className?: string;
}

export function FeatureGridCard({ title, items, theme = "dark", className }: FeatureGridCardProps) {
  if (!items || items.length === 0) return null;
  const isDark = theme === "dark";

  return (
    <div className={cn(
      "w-full rounded-2xl border p-8 shadow-2xl transition-all duration-300",
      isDark ? "bg-[#141414] border-white/10 backdrop-blur-sm" : "bg-white border-neutral-200",
      className
    )}>
      {title && (
        <h3 className={cn(
          "text-lg font-aileron font-bold mb-8",
          isDark ? "text-white/90" : "text-neutral-900"
        )}>
          {title}
        </h3>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="mt-1 flex-shrink-0">
              <svg className="w-5 h-5 text-[#F59120]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className={cn(
              "text-sm font-geist leading-snug",
              isDark ? "text-neutral-400 group-hover:text-white/60 transition-colors" : "text-neutral-600"
            )}>
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
