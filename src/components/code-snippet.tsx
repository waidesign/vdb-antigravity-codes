"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Atom, FileCode, Terminal, Brackets, Code2, Check, ExternalLink } from "lucide-react";

interface CodeSnippetProps {
  code?: string;
  image?: string;
  alt?: string;
  variant?: "default" | "with-language-selector" | "with-image" | "WithCardAndLists" | string;
  minWidth?: string;
  maxWidth?: string;
  maxHeight?: string;
  className?: string;
  items?: { label: string; value: string }[];
  sideCard?: { 
    title: string; 
    description: string; 
    buttonText: string; 
    buttonHref: string;
  };
  toggleOptions?: { id: string; label: string; code: string }[];
}

const LANGUAGES = [
  { id: "json", label: "JSON", icon: Brackets },
  { id: "node", label: "Node", icon: Code2 },
  { id: "react", label: "React", icon: Atom },
  { id: "php", label: "PHP", icon: FileCode },
  { id: "python", label: "Python", icon: Terminal },
];

const MOCK_CODE: Record<string, string> = {
  node: `request = require('request');\nvar options = {\n'method': 'GET',\n'url': 'https://api.vehicledatabases.com/vehicle-maintenance/options/v3/year',\n'headers': {\n'x-AuthKey': '{X-Authkey}'\n}\n};\nrequest(options, function (error, response) {\nif (error) throw new Error(error);\nconsole.log(response.body);\n});`,
  react: `import { useVehicle } from '@vdb/react';\n\nconst VehicleDetails = ({ vin }) => {\n  const { data, loading } = useVehicle(vin);\n\n  if (loading) return <Loader />;\n  return (\n    <div>\n      <h1>{data.make} {data.model}</h1>\n      <p>VIN: {vin}</p>\n    </div>\n  );\n};`,
  php: `<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, array(\n  CURLOPT_URL => "https://api.vehicledatabases.com/vehicle-maintenance/options/v3/year",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_HTTPHEADER => array(\n    "x-AuthKey: {X-Authkey}"\n  ),\n));\n\n$response = curl_exec($curl);\ncurl_close($curl);\necho $response;`,
  python: `import requests\n\nurl = "https://api.vehicledatabases.com/vehicle-maintenance/options/v3/year"\nheaders = {"x-AuthKey": "{X-Authkey}"}\n\nresponse = requests.get(url, headers=headers)\nprint(response.json())`,
  json: `{\n  "status": "success",\n  "data": {\n    "vin": "5TQYK30D8FS503804",\n    "make": "Tesla",\n    "model": "Model Y",\n    "year": 2023,\n    "trim": "Long Range",\n    "battery": "75 kWh"\n  }\n}`
};

export function CodeSnippet({ 
  code, 
  image, 
  alt, 
  variant = "default", 
  minWidth = "640px",
  maxWidth = "640px",
  maxHeight = "720px",
  className,
  items,
  sideCard,
  toggleOptions
}: CodeSnippetProps) {
  const [activeLang, setActiveLang] = useState("node");
  const [activeToggleId, setActiveToggleId] = useState(toggleOptions?.[0]?.id || "");
  
  const isWithSelector = variant === "with-language-selector";
  const isAdvancedVsBasic = variant === "AdvancedVsBasic";
  const isWithImage = variant === "with-image" || !!image;
  const isWithCardAndLists = variant === "WithCardAndLists";
  const showImage = isWithImage && variant !== "default";
  
  const displayCode = isWithSelector 
    ? MOCK_CODE[activeLang] 
    : isAdvancedVsBasic 
      ? (toggleOptions?.find(t => t.id === activeToggleId)?.code || code || MOCK_CODE.json)
      : (code || MOCK_CODE.json);
      
  const isLeft = variant === "split-media-left" || variant === "heading-top-split";

  return (
    <div 
      className={cn(
        "relative w-full mx-auto lg:mx-0", 
        isWithCardAndLists ? "max-w-6xl" : "",
        className
      )}
      style={{ 
        minWidth: isWithCardAndLists ? "100%" : minWidth, 
        maxWidth: isWithCardAndLists ? "1200px" : maxWidth, 
        maxHeight: isWithCardAndLists ? "none" : maxHeight 
      }}
    >
      {/* Top Header Section for WithCardAndLists */}
      {isWithCardAndLists && items && items.length > 0 && (
        <div className="flex flex-wrap items-center gap-6 mb-8 px-2">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#F59120]/20 border border-[#F59120]/30 shadow-[0_0_15px_rgba(245,145,32,0.1)]">
                <Check className="w-3 h-3 text-[#F59120] stroke-[3]" />
              </div>
              <span className="text-sm font-aileron font-semibold text-white/90">
                <span className="text-white/40 font-normal mr-1">{item.label}:</span> {item.value}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className={cn(
        "grid gap-8 items-start",
        isWithCardAndLists ? "grid-cols-1 lg:grid-cols-3" : "grid-cols-1"
      )}>
        {/* Code Snippet Box */}
        <div className={cn(
          "w-full rounded-2xl overflow-hidden border shadow-2xl transition-all duration-300",
          "bg-[#141414] border-white/10",
          isWithCardAndLists ? "lg:col-span-2" : ""
        )}>
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
          </div>
          <div className="flex items-center gap-2 text-white/40 font-mono text-xs font-medium uppercase tracking-wider">
             <Brackets className="w-3.5 h-3.5" />
             <span>{isWithSelector ? activeLang : "JSON"}</span>
          </div>
        </div>

        {/* Language Selector (Interactive) */}
        {isWithSelector && (
          <div className="px-6 py-4 flex flex-wrap items-center gap-3 bg/black/20">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.id}
                onClick={() => setActiveLang(lang.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200",
                  activeLang === lang.id
                    ? "bg-[#F59120]/10 border-[#F59120] text-[#F59120]"
                    : "bg-white/5 border-white/10 text-white/50 hover:bg-white/10"
                )}
              >
                <lang.icon className="w-4 h-4" />
                {lang.label}
              </button>
            ))}
          </div>
        )}

        {/* Advanced vs Basic Toggle */}
        {isAdvancedVsBasic && toggleOptions && (
          <div className="px-6 pt-6 flex flex-wrap items-center gap-4">
            {toggleOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveToggleId(opt.id)}
                className={cn(
                  "px-4 py-2 rounded-lg border text-sm font-semibold transition-all duration-200 font-aileron",
                  activeToggleId === opt.id
                    ? "border-[#F59120] text-[#F59120] bg-[#F59120]/5 shadow-[0_0_15px_rgba(245,145,32,0.1)]"
                    : "border-white/10 text-white/50 hover:border-white/20 hover:text-white/70"
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}

        {/* Code Area */}
        <div 
          className="p-6 overflow-y-auto custom-scrollbar relative font-mono text-sm leading-relaxed"
          style={{ height: maxHeight ? `calc(${maxHeight} - 120px)` : "400px" }}
        >
          <AnimatePresence mode="wait">
            <motion.pre
              key={(isAdvancedVsBasic ? activeToggleId : activeLang) + (isWithSelector ? "sel" : "def")}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="text-white/70 whitespace-pre"
            >
               {displayCode}
            </motion.pre>
          </AnimatePresence>
          
          {/* Subtle bottom gradient inside code box */}
          {!isWithSelector && !isWithCardAndLists && (
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#141414] to-transparent pointer-events-none" />
          )}
        </div>
      </div>

      {/* Side Card for WithCardAndLists */}
      {isWithCardAndLists && sideCard && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="h-full lg:col-span-1"
        >
          <div className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-8 h-full shadow-xl flex flex-col justify-start">
            <h3 className="text-xl font-bold text-white mb-4 font-aileron">
              {sideCard.title}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-8 font-aileron">
              {sideCard.description}
            </p>
            <a
              href={sideCard.buttonHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-[#F59120] to-[#9747FF] text-white font-aileron font-bold text-sm transition-opacity duration-300 hover:opacity-80 active:opacity-70 shadow-lg shadow-orange-500/10"
            >
              {sideCard.buttonText}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      )}
      </div>

      {/* Overlaid Image */}
      {showImage && image && !isWithCardAndLists && (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className={cn(
            "absolute -right-8 lg:-right-16 top-1/2 -translate-y-1/2 w-4/5 lg:w-3/4 drop-shadow-2xl z-10 pointer-events-none",
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

      {/* Custom Scrollbar Styling */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
