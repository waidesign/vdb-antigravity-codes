"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface IntroCTA {
  text: string;
  href: string;
  variant?: "primary" | "outline" | "ghost";
  icon?: { src: string };
}

interface CTAButtonGroupProps {
  ctas: IntroCTA[];
  theme?: "dark" | "light";
  className?: string;
}

export function CTAButtonGroup({ ctas, theme = "dark", className }: CTAButtonGroupProps) {
  if (!ctas || ctas.length === 0) return null;
  const isDark = theme === "dark";

  return (
    <div className={cn("flex flex-wrap items-center gap-4", className)}>
      {ctas.map((cta, idx) => {
        const buttonVariant = cta.variant === "primary" ? "primary" : (cta.variant === "outline" ? "outline" : "ghost");
        const isPrimary = cta.variant === "primary";
        const isOutline = cta.variant === "outline";
        const isGhost = cta.variant === "ghost";

        return (
          <Link
            key={idx}
            href={cta.href}
            className={cn(
              buttonVariants({ variant: buttonVariant, size: "xl" }),
              "h-14 px-8 rounded-lg font-aileron font-bold transition-all duration-300",
              isPrimary && "shadow-lg shadow-orange-500/20 text-white bg-gradient-to-r from-[#F59120] to-[#9747FF]",
              isOutline && (isDark 
                ? "border-white/20 text-white hover:bg-white/5" 
                : "border-neutral-200 text-neutral-900 hover:bg-neutral-50"),
              isGhost && (isDark 
                ? "text-white/70 hover:text-white hover:bg-white/5" 
                : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50")
            )}
          >
            {cta.text}
          </Link>
        );
      })}
    </div>
  );
}
