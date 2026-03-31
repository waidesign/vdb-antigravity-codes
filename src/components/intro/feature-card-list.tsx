"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Feature {
  text: string;
  description?: string;
  icon?: string;
}

interface FeatureCardListProps {
  features: Feature[];
  theme?: "dark" | "light";
  className?: string;
}

export function FeatureCardList({ features, theme = "dark", className }: FeatureCardListProps) {
  if (!features || features.length === 0) return null;
  const isDark = theme === "dark";

  return (
    <ul className={cn("flex flex-col gap-6 my-8", className)}>
      {features.map((feature, idx) => (
        <li 
          key={idx} 
          className="flex items-start gap-5 group"
        >
          <div className={cn(
            "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 border",
            isDark 
              ? "bg-white/5 border-white/5 group-hover:bg-white/10 group-hover:border-white/10" 
              : "bg-white border-neutral-200 group-hover:bg-neutral-50"
          )}>
            {feature.icon ? (
              <Image 
                src={feature.icon} 
                alt="" 
                width={20} 
                height={20} 
                className="w-5 h-5 object-contain"
              />
            ) : (
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#F59120] to-[#9747FF] p-[1px]">
                <div className={cn(
                  "w-full h-full rounded-full flex items-center justify-center",
                  isDark ? "bg-[#141414]" : "bg-white"
                )}>
                  <svg className="w-2.5 h-2.5 text-[#F59120]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex flex-col gap-0.5">
            <h4 className={cn(
              "font-aileron font-bold transition-colors text-[17px]",
              isDark ? "text-white/90" : "text-neutral-900"
            )}>
              {feature.text}
            </h4>
            {feature.description && (
              <p className={cn(
                "text-sm font-geist leading-relaxed opacity-60",
                isDark ? "text-white/60" : "text-neutral-600"
              )}>
                {feature.description}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
