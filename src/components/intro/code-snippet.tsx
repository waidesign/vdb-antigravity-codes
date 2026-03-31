"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CodeSnippetProps {
  code?: string;
  image?: string;
  alt?: string;
  variant?: string;
  className?: string;
}

export function CodeSnippet({ code, image, alt, variant, className }: CodeSnippetProps) {
  const isLeft = variant === "split-media-left" || variant === "heading-top-split";

  return (
    <div className={cn("relative w-full aspect-video lg:aspect-auto", className)}>
      {/* Code Snippet Box */}
      <div className="w-full h-full min-h-[300px] bg-[#1A1A1A] rounded-2xl p-6 font-mono text-sm overflow-hidden border border-white/5 shadow-2xl relative">
        <div className="flex items-center gap-2 mb-4 opacity-50">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <pre className="text-neutral-400 whitespace-pre-wrap">
          {code || "{\n  \"status\": \"success\",\n  \"data\": {\n    \"make\": \"Tesla\",\n    \"model\": \"Model Y\"\n  }\n}"}
        </pre>
        
        {/* Subtle bottom gradient inside code box */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1A1A1A] to-transparent pointer-events-none" />
      </div>

      {/* Overlaid Image (e.g. the Car) */}
      {image && (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className={cn(
            "absolute -right-8 lg:-right-16 top-1/2 -translate-y-1/2 w-4/5 lg:w-3/4 drop-shadow-2xl z-10",
            isLeft && "-left-8 lg:-left-16 right-auto"
          )}
        >
          <Image 
            src={image} 
            alt={alt || "Visual"} 
            width={1000} 
            height={600} 
            className="object-contain"
          />
        </motion.div>
      )}
    </div>
  );
}
