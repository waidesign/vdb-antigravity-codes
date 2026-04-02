"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface StatCard {
  stat?: string;
  text: string;
  description?: string;
}

interface StatCardsGridProps {
  features: StatCard[];
  theme?: "dark" | "light";
  className?: string;
}

export function StatCardsGrid({ features, theme = "dark", className }: StatCardsGridProps) {
  if (!features || features.length === 0) return null;
  const isDark = theme === "dark";

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full", className)}>
      {features.map((feature, idx) => (
        <div 
          key={idx} 
          className={cn(
            "p-10 rounded-3xl border flex flex-col items-center text-center gap-4 transition-all duration-300",
            isDark 
              ? "bg-[#141414] border-white/5 hover:border-white/10" 
              : "bg-white border-neutral-100 shadow-sm hover:shadow-md"
          )}
        >
          {feature.stat && (
            <span className="text-5xl lg:text-6xl font-aileron font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F59120] to-[#9747FF]">
              {feature.stat}
            </span>
          )}
          <div className="flex flex-col gap-2">
            <h4 className={cn(
              "font-aileron font-bold text-lg",
              isDark ? "text-white" : "text-neutral-900"
            )}>
              {feature.text}
            </h4>
            {feature.description && (
              <p className={cn(
                "text-sm font-geist leading-relaxed opacity-60",
                isDark ? "text-white/80" : "text-neutral-600"
              )}>
                {feature.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
