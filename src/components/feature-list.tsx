"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Feature {
  text: string;
  icon?: string;
}

interface FeatureListProps {
  features: Feature[];
  theme?: "dark" | "light";
  className?: string;
}

export function FeatureList({ features, theme = "dark", className }: FeatureListProps) {
  if (!features || features.length === 0) return null;
  const isDark = theme === "dark";

  return (
    <ul className={cn("flex flex-col gap-4 my-6", className)}>
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <div className="mt-1 flex-shrink-0">
            {feature.icon ? (
              <Image 
                src={feature.icon} 
                alt="" 
                width={20} 
                height={20} 
                className="w-5 h-5 object-contain"
              />
            ) : (
              <svg 
                className="w-5 h-5 text-[#F59120]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={3} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            )}
          </div>
          <span className={cn(
            "font-geist leading-snug",
            isDark ? "text-neutral-300" : "text-neutral-700"
          )}>
            {feature.text}
          </span>
        </li>
      ))}
    </ul>
  );
}
