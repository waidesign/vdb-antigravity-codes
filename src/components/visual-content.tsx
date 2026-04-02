"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CodeDashboard } from "./code-dashboard";
import { CodeSnippet } from "./code-snippet";
import { FeatureGridCard } from "./feature-grid-card";

export interface IntroMedia {
  type: "image" | "video" | "code-snippet" | "code-dashboard" | "feature-grid-card";
  image?: string;
  videoUrl?: string;
  code?: string;
  title?: string;
  items?: { text: string }[];
  alt?: string;
  variant?: string;
  minWidth?: string;
  maxWidth?: string;
  maxHeight?: string;
}

interface VisualContentProps {
  media: IntroMedia;
  variant?: string;
  theme?: "dark" | "light";
  className?: string;
}

export function VisualContent({ media, variant, theme = "dark", className }: VisualContentProps) {
  if (!media) return null;

  // Prioritize media-specific variant over section-level variant
  const componentVariant = media.variant || variant;

  if (media.type === "feature-grid-card") {
    return <FeatureGridCard title={media.title} items={media.items || []} theme={theme} className={className} />;
  }

  if (media.type === "code-dashboard") {
    return <CodeDashboard code={media.code} theme={theme} className={className} />;
  }

  if (media.type === "video") {
    return (
      <div className={cn("relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/5", className)}>
        <video
          src={media.videoUrl}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto object-cover"
        />
      </div>
    );
  }

  if (media.type === "code-snippet") {
    return (
      <CodeSnippet 
        code={media.code} 
        image={media.image} 
        alt={media.alt} 
        variant={componentVariant}
        minWidth={media.minWidth}
        maxWidth={media.maxWidth}
        maxHeight={media.maxHeight} 
        className={className} 
      />
    );
  }

  // Default: Image
  return (
    <div className={cn("relative w-full rounded-2xl overflow-hidden shadow-xl", className)}>
      <Image 
        src={media.image || ""} 
        alt={media.alt || "Intro Media"} 
        width={800} 
        height={500} 
        className="w-full h-auto object-cover"
        priority
      />
    </div>
  );
}
