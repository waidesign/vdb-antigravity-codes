"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface HeadingRendererProps {
  text: string;
  highlight?: string;
  className?: string;
  theme?: "dark" | "light";
  as?: "h1" | "h2" | "h3";
}

export function HeadingRenderer({
  text,
  highlight,
  className,
  theme = "dark",
  as: Component = "h2",
}: HeadingRendererProps) {
  if (!text) return null;
  const isDark = theme === "dark";

  const colorClass = isDark ? "text-white" : "text-neutral-900";
  const finalClass = cn("font-aileron font-semibold", colorClass, className);

  if (!highlight) {
    return <Component className={finalClass}>{text}</Component>;
  }

  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  
  return (
    <Component className={finalClass}>
      {parts.map((part, i) => 
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span
            key={i}
            className="bg-clip-text text-transparent bg-gradient-to-r from-[#F59120] to-[#9747FF]"
          >
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </Component>
  );
}
