"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CodeDashboardProps {
  code?: string;
  theme?: "dark" | "light";
  className?: string;
}

export function CodeDashboard({ code, theme = "dark", className }: CodeDashboardProps) {
  const isDark = theme === "dark";
  
  return (
    <div className={cn(
      "w-full rounded-2xl border shadow-2xl overflow-hidden font-geist transition-colors duration-300",
      isDark ? "bg-[#141414] border-white/5" : "bg-white border-neutral-200",
      className
    )}>
      {/* Top Bar - Search Mockup */}
      <div className={cn(
        "px-6 py-4 border-b flex items-center gap-4",
        isDark ? "border-white/5" : "border-neutral-100"
      )}>
        <div className={cn(
          "flex-grow rounded-lg px-4 py-2 text-sm transition-colors",
          isDark ? "bg-white/5 border border-white/10 text-white/40" : "bg-neutral-50 border border-neutral-200 text-neutral-400"
        )}>
          5TQYK30D8FS503804
        </div>
        <button className="bg-[#F59120] text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-[#e08110] transition-colors shadow-lg shadow-orange-500/20">
          Search
        </button>
      </div>

      {/* Tab Bar Mockup */}
      <div className={cn(
        "flex border-b",
        isDark ? "border-white/5" : "border-neutral-100"
      )}>
        <div className={cn(
          "flex-1 text-center py-3 text-sm font-medium border-r transition-colors",
          isDark ? "border-white/5 text-white/30" : "border-neutral-100 text-neutral-400"
        )}>
          Output
        </div>
        <div className={cn(
          "flex-1 text-center py-3 text-sm font-medium transition-colors",
          isDark ? "bg-white/2 text-[#F59120]" : "bg-orange-50/30 text-[#F59120]"
        )}>
          JSON
        </div>
      </div>

      {/* Content Area - JSON Viewer */}
      <div className={cn(
        "p-6 min-h-[300px] h-[400px] overflow-y-auto custom-scrollbar transition-colors",
        isDark ? "bg-black/20" : "bg-neutral-50/30"
      )}>
        <pre className={cn(
          "text-xs lg:text-sm font-mono leading-relaxed transition-colors",
          isDark ? "text-neutral-400" : "text-neutral-600"
        )}>
          {code || JSON.stringify({
            status: "success",
            data: {
              owner_history: [
                {
                  status: "Clean",
                  purchased: "05/2018",
                  state: "CA",
                  owned: "05/2018 - 03/2021",
                  duration: "2 year(s) 1 month"
                }
              ]
            }
          }, null, 2)}
        </pre>
      </div>
    </div>
  );
}
