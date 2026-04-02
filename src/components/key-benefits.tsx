"use client";

import React from "react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

export interface BenefitItem {
  iconName: keyof typeof LucideIcons;
  title: string;
  description: string;
}

export interface KeyBenefitsProps {
  benefits: BenefitItem[];
  className?: string;
}

export function KeyBenefits({ benefits, className }: KeyBenefitsProps) {
  return (
    <div className={cn("w-full flex flex-col", className)}>
      {/* 
         Grouping benefits into pairs to create the 2-column grid rows with borders.
         We use chunks of 2 for the row structure.
      */}
      {Array.from({ length: Math.ceil(benefits.length / 2) }).map((_, rowIndex) => {
        const rowItems = benefits.slice(rowIndex * 2, rowIndex * 2 + 2);
        const isNotLastRow = rowIndex < Math.ceil(benefits.length / 2) - 1;

        return (
          <div 
            key={rowIndex}
            className={cn(
              "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 py-10",
              isNotLastRow && "border-b border-[#6F6F6F]"
            )}
          >
            {rowItems.map((benefit, itemIndex) => {
              const Icon = LucideIcons[benefit.iconName] as React.ElementType;
              
              return (
                <div 
                  key={itemIndex} 
                  className="flex flex-[1_0_0] gap-20 items-start min-h-px min-w-px relative group"
                >
                  {/* Feature Icon & Title: Inline Group */}
                  <div className="flex flex-1 gap-2 items-start">
                    <div className="shrink-0 w-8 h-8 group-hover:scale-110 transition-transform duration-300 relative">
                      {Icon && (
                        <>
                          <svg width="0" height="0" className="absolute">
                            <linearGradient id={`icon-gradient-${rowIndex}-${itemIndex}`} x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#F59120" />
                              <stop offset="100%" stopColor="#9747FF" />
                            </linearGradient>
                          </svg>
                          <Icon className="w-full h-full" style={{ stroke: `url(#icon-gradient-${rowIndex}-${itemIndex})` }} strokeWidth={1.5} />
                        </>
                      )}
                    </div>
                    <p className="font-aileron font-semibold leading-[32px] text-2xl text-white">
                      {benefit.title}
                    </p>
                  </div>

                  {/* Description: Inline next to the group */}
                  <p className="flex-1 font-geist font-normal leading-[24px] text-base text-white/60">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
