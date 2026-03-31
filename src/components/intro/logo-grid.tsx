"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Logo {
  image: {
    url: string;
    alt?: string;
  };
  link?: string;
}

interface LogoGridProps {
  logos: Logo[];
  className?: string;
}

export function LogoGrid({ logos, className }: LogoGridProps) {
  if (!logos || logos.length === 0) return null;

  return (
    <div className={cn("flex flex-wrap items-center justify-start gap-4 py-8", className)}>
      {logos.map((logo, i) => {
        const Content = (
          <div className={cn(
            "group relative flex items-center justify-center p-6 h-24 w-44 rounded-xl transition-all duration-300 border shadow-sm hover:shadow-md hover:-translate-y-1 bg-white border-neutral-100 overflow-hidden",
          )}>
            <Image 
              src={logo.image.url} 
              alt={logo.image.alt || "Brand Logo"} 
              width={140} 
              height={60} 
              className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        );

        if (logo.link) {
          return (
            <Link key={i} href={logo.link} target="_blank" rel="noopener noreferrer">
              {Content}
            </Link>
          );
        }

        return <div key={i}>{Content}</div>;
      })}
    </div>
  );
}
