"use client";

import { Badge } from "@/components/ui/badge";

export function BlogHero() {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container max-w-[1280px] px-6 mx-auto text-center relative z-10">
        <Badge variant="brand" className="mb-6 px-4 py-1.5 uppercase tracking-widest text-[10px] font-black">
          VDB PERSPECTIVES
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-[1.05]">
          Decoding the <br />
          <span className="bg-gradient-to-r from-brand-primary to-purple-500 bg-clip-text text-transparent">
            Automotive Future
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-400 font-medium leading-relaxed">
          Expert insights, technical deep-dives, and industry trends from the engineers building the world's most advanced vehicle data platform.
        </p>

        {/* Decorative divider */}
        <div className="mt-16 w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      </div>
    </div>
  );
}
