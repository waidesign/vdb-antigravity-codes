"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useSpring, animate } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Image from "next/image";

/* ──────────────────────────────────────────────────────────────────────────
 * 0. Base Card Primitives (Migrated from card.tsx)
 * ────────────────────────────────────────────────────────────────────────── */

const cardVariants = cva(
    "rounded-[32px] border transition-all duration-300",
    {
        variants: {
            variant: {
                default:
                    "bg-[#16181A] border-[#8C929D] light:border-neutral-700",
                elevated:
                    "bg-[#16181A] border-[#8C929D] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]",
                glass:
                    "glass border-[#8C929D]",
                bordered:
                    "bg-transparent border-[#8C929D]",
                brand:
                    "bg-[#16181A] border-[#8C929D] shadow-[0_0_20px_rgba(245,145,32,0.08)]",
                dark:
                    "bg-[#16181A] border-[#8C929D]",
                ghost:
                    "bg-transparent border-transparent shadow-none rounded-none p-0",
            },
            hoverable: {
                true: "hover:border-white/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,1)] cursor-pointer hover:-translate-y-1",
                false: "",
            },
        },
        defaultVariants: {
            variant: "default",
            hoverable: false,
        },
    }
);

export interface CardProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
}

export function Card({ className, variant, hoverable, children, ...props }: CardProps) {
    return (
        <div
            className={cn(cardVariants({ variant, hoverable }), className)}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("flex flex-col space-y-1.5 p-5 sm:p-6", className)} {...props} />
    );
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3 className={cn("text-xl md:text-2xl font-aileron font-bold text-white leading-tight", className)} {...props} />
    );
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p className={cn("text-sm text-neutral-400 leading-relaxed", className)} {...props} />
    );
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("p-5 sm:p-6 pt-0", className)} {...props} />
    );
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("flex items-center gap-3 px-6 sm:px-8 py-5 border-t border-white/[0.08]", className)}
            {...props}
        />
    );
}

import { Button } from "./button";
import { Progress } from "./progress";
import { Divider } from "./divider";
import { CodeBlock } from "./code-block";
import { CodeSnippet } from "../code-snippet";
import { FlexibleTable } from "./flexible-table";
import { Input } from "./input";
import { Textarea } from "./textarea";

/* ──────────────────────────────────────────────────────────────────────────
 * 1. Types & Interfaces (Discriminated Unions)
 * ────────────────────────────────────────────────────────────────────────── */

export type CardVariant =
  | "h3Body"
  | "iconBodyInline"
  | "iconBodyNormal"
  | "WithFeaturedImage"
  | "h3BodyRedirect"
  | "iconH3BodyCTA"
  | "iconBodyProgressBody"
  | "logoBodyDividerBody"
  | "bodyOnly"
  | "h3BodyListsBodyCTA"
  | "twoColumnH3BodyListsBodyImage"
  | "iconHeadingInline"
  | "headingAndImageStack"
  | "testimonial"
  | "testimonialSpecial"
  | "apiTestCard"
  | "technical"
  | "queryForm"
  | "borderlessCardWithIcon"
  | "IconH3InlineAndBody"
  | "SlidingCards"
  | "H3BodyLinkText"
  | "RelatedAPI"
  | "TwoColumnsLists"
  | "HeadingAndBodyUnderLists"
  | "VideoCard"
  | "HowItWorkMain"
  | "HeadingBodyImageCTAStack"
  | "CardGrid"
  | "HeadingCTALists";

interface BaseCardProps {
  className?: string;
  variant: CardVariant;
  hoverable?: boolean;
}

export type CardsProps = BaseCardProps & (
  | { variant: "h3Body"; heading: string; richText: string }
  | { variant: "iconBodyInline"; icon: string; richText: string }
  | { variant: "iconBodyNormal"; icon: string; richText: string }
  | { variant: "WithFeaturedImage"; heading: string; image: string; richText: string }
  | { variant: "h3BodyRedirect"; heading: string; richText: string; link: string }
  | { variant: "iconH3BodyCTA"; icon: string; heading: string; richText: string; cta: { label: string; href: string; variant?: "primary" | "secondary" } }
  | { variant: "iconBodyProgressBody"; icon: string; richText: string; progress: number; bottomText?: string }
  | { variant: "logoBodyDividerBody"; logo: string; richText: string; bottomText: string }
  | { variant: "bodyOnly"; richText: string }
  | { variant: "h3BodyListsBodyCTA"; heading: string; richText: string; listItems: { text: string }[]; cta?: { label: string; href: string } }
  | { variant: "twoColumnH3BodyListsBodyImage"; heading: string; richText: string; listItems: { text: string }[]; image: string }
  | { variant: "iconHeadingInline"; icon: string; heading: string; richText: string }
  | { variant: "headingAndImageStack"; heading: string; image: string }
  | { variant: "testimonial"; title: string; richText: string; author: string; role: string; accentColor?: string; avatar?: string }
  | { variant: "testimonialSpecial"; richText: string; author: string; role: string; avatar: string }
  | { variant: "apiTestCard" }
  | { variant: "technical"; icon: string; heading: string; subheading?: string; codeSnippet?: string; subheading2?: string; tableData?: any; richText?: string }
  | { 
      variant: "queryForm"; 
      heading: string; 
      subheading?: string; 
      formLabel: string;
      formFields: { name: string; label?: string; placeholder: string; type: "text" | "email" | "tel" | "textarea" | "select"; required?: boolean; fullWidth?: boolean }[];
      submitLabel: string;
      description?: string;
      media?: {
        type: "image" | "video";
        url: string;
        alt?: string;
        posterUrl?: string;
      };
      sidebarCtas?: { label: string; href: string; variant?: "primary" | "secondary" | "whatsapp" | "orange"; icon?: string }[];
    }
  | { 
      variant: "borderlessCardWithIcon"; 
      icon: string; 
      heading: string; 
      richText: string;
    }
  | {
      variant: "IconH3InlineAndBody";
      icon: string;
      heading: string;
      richText: string;
    }
  | {
      variant: "SlidingCards";
      items: { icon: string; title: string; description: string }[];
    }
  | {
      variant: "H3BodyLinkText";
      heading: string;
      richText: string;
      linkText?: string;
      linkHref: string;
    }
  | {
      variant: "RelatedAPI";
      heading: string;
      apis: { label: string; href: string }[];
    }
  | {
      variant: "TwoColumnsLists";
      heading: string;
      listLeft: { icon?: string; text: string }[];
      listRight: { icon?: string; text: string }[];
    }
  | {
      variant: "HeadingAndBodyUnderLists";
      heading: string;
      lists: { text: string }[][];
      footerHeading: string;
      footerRichText: string;
    }
  | {
      variant: "VideoCard";
      thumbnail: string;
      heading: string;
      subheading: string;
      videoHref: string;
      description: string;
    }
  | {
      variant: "HowItWorkMain";
      heading: string;
      subheading: string;
      description: string;
      ctas: { label: string; href: string; variant: "primary-gradient" | "secondary-border" }[];
      steps: { 
        title: string; 
        description: string; 
        icon?: string;
      }[];
    }
  | {
      variant: "HeadingBodyImageCTAStack";
      heading: string;
      body: string;
      image: string;
      cta: {
        label: string;
        href: string;
      };
    }
  | {
      variant: "HeadingCTALists";
      heading: string;
      cta: {
        label: string;
        href: string;
      };
      features: {
        label: string;
        icon?: React.ReactNode;
      }[];
    }
  | {
      variant: "CardGrid";
      gridCards: {
        title: string;
        description: string;
        href: string;
      }[];
      columns?: number;
    }
);

/* ──────────────────────────────────────────────────────────────────────────
 * 2. Helper Components
 * ────────────────────────────────────────────────────────────────────────── */

const BareGradientIcon = ({ name, size = 28, className }: { name: string; size?: number; className?: string }) => {
  const Icon = (LucideIcons as any)[name];
  if (!Icon) return null;
  return (
    <div className={cn("inline-flex items-center justify-center shrink-0", className)}>
        <Icon 
          size={size}
          style={{ 
            stroke: "url(#brand-gradient)",
            strokeWidth: 2.5
          }} 
        />
        <svg width="0" height="0" className="absolute">
            <defs>
                <linearGradient id="brand-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F59120" />
                    <stop offset="100%" stopColor="#9747FF" />
                </linearGradient>
            </defs>
        </svg>
    </div>
  );
};

const CorrectMarkIcon = ({ size = 22, className }: { size?: number; className?: string }) => (
  <LucideIcons.BadgeCheck 
    size={size} 
    className={cn("text-[#27AE60] shrink-0 fill-[#27AE60]/10", className)} 
  />
);

const IconWrapper = ({ name, className }: { name: string; className?: string }) => {
  const Icon = (LucideIcons as any)[name];
  if (!Icon) return null;
  return (
    <div className={cn("relative flex items-center justify-center w-14 h-14 rounded-2xl border border-white/5 bg-white/[0.03] overflow-hidden", className)}>
        {/* Visual Glow */}
        <div 
            className="absolute inset-0 opacity-10 blur-xl"
            style={{ background: "linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)" }}
        />
        
        {/* Gradient Icon using mask-image for better support with SVGs */}
        <div 
            className="relative z-10 w-7 h-7"
            style={{ 
                background: "linear-gradient(90deg, #F59120 0%, #9747FF 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Icon 
              className="w-full h-full" 
              style={{ 
                stroke: "url(#brand-gradient)", // Reference to a global SVG gradient if defined, or we fall back to the text-clip logic
                strokeWidth: 2.5
              }} 
            />
        </div>

        {/* Fallback SVG with gradient definition in case the CSS clip is finicky */}
        <svg width="0" height="0" className="absolute">
            <defs>
                <linearGradient id="brand-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F59120" />
                    <stop offset="100%" stopColor="#9747FF" />
                </linearGradient>
            </defs>
        </svg>
    </div>
  );
};

const RichText = ({ content, className }: { content: string; className?: string }) => (
  <div
    className={cn("font-geist text-sm text-neutral-400 leading-relaxed prose prose-invert prose-p:my-1", className)}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

/* ──────────────────────────────────────────────────────────────────────────
 * 2.5 API Test Widget Logic
 * ────────────────────────────────────────────────────────────────────────── */

const API_OPTIONS = [
  "Basic VIN Decode",
  "Auction History API",
  "Classic VIN Decoder",
  "Electric Vehicle Specifications",
  "Europe VIN Decode",
  "License Plate OCR",
  "Market Value by VIN",
  "Premium VIN Decode",
  "Sales History",
  "Title Check",
  "UK Registration Decode",
  "US Plate Decode",
  "US Truck Plate Decode",
  "Vehicle Maintenance by VIN",
  "Vehicle Recalls",
  "Vehicle Repair by VIN",
  "Vehicle Warranty",
  "VIN OCR",
  "VIN Suggestion",
  "YMM Specifications",
];

const API_PLACEHOLDERS: Record<string, { input: string; label: string; exampleValue: string; endpoint: string }> = {
  "Basic VIN Decode": { input: "vin", label: "VIN Number", exampleValue: "1HGBH41JXMN109186", endpoint: "/vin-decoder/v3/{vin}" },
  "Auction History API": { input: "vin", label: "VIN Number", exampleValue: "1G1ZT51806F209019", endpoint: "/auction-history/v2/{vin}" },
  "Classic VIN Decoder": { input: "vin", label: "VIN Number", exampleValue: "1G1ZT51806F209019", endpoint: "/classic-vin-decoder/v1/{vin}" },
  "Electric Vehicle Specifications": { input: "vin", label: "VIN Number", exampleValue: "5YJ3E1EA7KF328931", endpoint: "/ev-specs/v1/{vin}" },
  "Europe VIN Decode": { input: "vin", label: "VIN Number", exampleValue: "WBAFR7C57BC603689", endpoint: "/europe-vin-decoder/v1/{vin}" },
  "License Plate OCR": { input: "plate", label: "License Plate", exampleValue: "ABC1234", endpoint: "/ocr/license-plate/{plate}" },
  "Market Value by VIN": { input: "vin", label: "VIN Number", exampleValue: "1HGBH41JXMN109186", endpoint: "/market-value/v2/{vin}" },
  "Premium VIN Decode": { input: "vin", label: "VIN Number", exampleValue: "1HGBH41JXMN109186", endpoint: "/vin-decoder/premium/v1/{vin}" },
  "Sales History": { input: "vin", label: "VIN Number", exampleValue: "1G1ZT51806F209019", endpoint: "/sales-history/v1/{vin}" },
  "Title Check": { input: "vin", label: "VIN Number", exampleValue: "1HGBH41JXMN109186", endpoint: "/title-check/v1/{vin}" },
  "UK Registration Decode": { input: "plate", label: "UK Registration", exampleValue: "AB12CDE", endpoint: "/uk-registration/v1/{plate}" },
  "US Plate Decode": { input: "plate", label: "License Plate", exampleValue: "ABC-1234", endpoint: "/us-plate/v2/{plate}" },
  "US Truck Plate Decode": { input: "plate", label: "Truck Plate", exampleValue: "TK12345", endpoint: "/us-truck-plate/v1/{plate}" },
  "Vehicle Maintenance by VIN": { input: "vin", label: "VIN Number", exampleValue: "1HGBH41JXMN109186", endpoint: "/maintenance/v3/{vin}" },
  "Vehicle Recalls": { input: "vin", label: "VIN Number", exampleValue: "1HGBH41JXMN109186", endpoint: "/recalls/v1/{vin}" },
  "Vehicle Repair by VIN": { input: "vin", label: "VIN Number", exampleValue: "1HGBH41JXMN109186", endpoint: "/repair/v1/{vin}" },
  "Vehicle Warranty": { input: "vin", label: "VIN Number", exampleValue: "1HGBH41JXMN109186", endpoint: "/warranty/v1/{vin}" },
  "VIN OCR": { input: "vin", label: "VIN (from image)", exampleValue: "1HGBH41JXMN109186", endpoint: "/ocr/vin/{vin}" },
  "VIN Suggestion": { input: "vin", label: "Partial VIN", exampleValue: "1HGBH4", endpoint: "/vin-suggestion/v1/{vin}" },
  "YMM Specifications": { input: "ymm", label: "Year / Make / Model", exampleValue: "2021/Honda/Civic", endpoint: "/ymm-specs/v1/{year}/{make}/{model}" },
};

const MOCK_RESPONSES: Record<string, object> = {
  "Basic VIN Decode": {
    status: "success",
    data: {
      vin: "1HGBH41JXMN109186",
      year: 2021,
      make: "Honda",
      model: "Civic",
      trim: "EX",
      engine: "1.5L Turbocharged I4",
      transmission: "CVT",
      drivetrain: "FWD",
      fuel_type: "Gasoline",
      body_style: "Sedan",
      doors: 4,
      country: "United States",
    },
  },
  default: {
    status: "success",
    data: {
      result: "Sample response data returned",
      api: "Vehicle Databases API",
      message: "Sign up to get real API responses with your free 15 credits.",
    },
  },
};

const ApiTestWidget = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedApi, setSelectedApi] = useState("Basic VIN Decode");
  const [inputValue, setInputValue] = useState("1HGBH41JXMN109186");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<object | null>(MOCK_RESPONSES["Basic VIN Decode"]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleApiSelect = (api: string) => {
    setSelectedApi(api);
    setDropdownOpen(false);
    setInputValue(API_PLACEHOLDERS[api]?.exampleValue ?? "");
    setResponse(null);
  };

  const handleTest = async () => {
    setLoading(true);
    setResponse(null);
    await new Promise((r) => setTimeout(r, 900));
    setResponse(MOCK_RESPONSES[selectedApi] ?? MOCK_RESPONSES.default);
    setLoading(false);
  };

  const placeholder = API_PLACEHOLDERS[selectedApi];

  return (
    <div className="flex flex-col gap-10">
      {/* API Selector Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <p className="font-aileron font-semibold text-lg text-white/70 max-w-sm">
          Select an API from the dropdown menu to begin testing:
        </p>

        {/* Dropdown */}
        <div className="relative" ref={dropdownRef} style={{ minWidth: 280 }}>
          <button
            type="button"
            onClick={() => setDropdownOpen((v) => !v)}
            className="flex items-center gap-3 px-6 py-3 rounded-2xl w-full text-left transition-all border border-white/[0.08] bg-white/[0.03] hover:border-brand-primary/50 group shadow-lg"
          >
            <span className="font-aileron font-bold text-base text-white flex-1 truncate">
              {selectedApi}
            </span>
            <div className={cn("transition-transform duration-300", dropdownOpen ? "rotate-180" : "")}>
                <LucideIcons.ChevronDown size={20} className="text-neutral-500 group-hover:text-white" />
            </div>
          </button>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-full left-0 right-0 mt-3 rounded-2xl overflow-hidden z-50 shadow-2xl bg-[#121212] border border-white/[0.12] backdrop-blur-xl"
              >
                <div className="max-h-72 overflow-y-auto scrollbar-thin p-1">
                  {API_OPTIONS.map((api) => (
                    <button
                      key={api}
                      type="button"
                      onClick={() => handleApiSelect(api)}
                      className={cn(
                        "w-full text-left px-5 py-3 font-aileron font-semibold text-sm transition-all rounded-xl",
                        api === selectedApi ? "bg-brand-primary/10 text-brand-primary" : "text-neutral-400 hover:bg-white/[0.05] hover:text-white"
                      )}
                    >
                      {api}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <Divider className="opacity-10" />

      {/* API Tester UI */}
      <div className="flex flex-col gap-8">
        {/* Endpoint */}
        <div className="flex flex-col gap-3">
          <span className="font-aileron text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
            Endpoint
          </span>
          <div
            className="flex items-center gap-3 px-5 py-3 rounded-2xl font-geist text-sm border border-white/[0.08] bg-white/[0.03]"
          >
            <span className="text-brand-primary font-bold">GET</span>
            <span className="text-white/70">https://api.vehicledatabases.com</span>
            <span className="text-white">{placeholder?.endpoint}</span>
          </div>
        </div>

        {/* Input */}
        <div className="flex flex-col gap-3">
          <label className="font-aileron text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
            {placeholder?.label ?? "Input"}
          </label>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={placeholder?.exampleValue}
              className="flex-1 px-5 py-3 rounded-2xl font-geist text-sm text-white outline-none transition-all placeholder:text-neutral-600 border border-white/[0.08] bg-white/[0.03] focus:border-brand-primary/40 focus:bg-white/[0.05]"
            />
            <button
              type="button"
              onClick={handleTest}
              disabled={loading || !inputValue.trim()}
              className="flex items-center justify-center gap-3 px-8 py-3 rounded-2xl font-aileron font-bold text-sm text-white transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed group"
              style={{ background: "linear-gradient(90deg, #F59120 0%, #9747FF 100%)" }}
            >
              {loading ? (
                <LucideIcons.Loader2 size={18} className="animate-spin" />
              ) : (
                <LucideIcons.Play size={18} className="fill-current transition-transform group-hover:scale-110" />
              )}
              {loading ? "Testing..." : "Test API"}
            </button>
          </div>
        </div>

        {/* Response */}
        <div className="flex flex-col gap-3">
          <span className="font-aileron text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
            Response
          </span>
          <div
            className="rounded-[24px] min-h-[200px] overflow-hidden"
          >
            {loading ? (
              <div className="flex flex-col items-center justify-center min-h-[200px] gap-4 rounded-3xl border border-white/[0.08] bg-white/[0.03]">
                 <LucideIcons.Loader2 size={32} className="animate-spin text-brand-primary" />
                 <span className="text-neutral-500 font-aileron font-semibold">Fetching response…</span>
              </div>
            ) : response ? (
              <CodeSnippet 
                code={JSON.stringify(response, null, 2)} 
                variant="default" 
                minWidth="100%" 
                maxWidth="100%"
                maxHeight="400px"
              />
            ) : (
              <div className="flex items-center justify-center min-h-[200px] rounded-3xl border border-dashed border-white/[0.1] bg-white/[0.01]">
                 <p className="text-neutral-500 font-aileron font-semibold text-center px-10 leading-relaxed">
                   Hit <span className="text-brand-primary px-1">Test API</span> to see the live integration result.
                 </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
 * 3. Main Component Dispatcher
 * ────────────────────────────────────────────────────────────────────────── */

export function Cards(props: CardsProps) {
  const { variant, className, hoverable = true } = props;

  const cardClasses = cn(
    "relative overflow-hidden group h-full",
    variant === "h3BodyRedirect" && "cursor-pointer transition-transform duration-300 hover:-translate-y-1",
    className
  );

  const renderContent = () => {
    switch (props.variant) {
      case "h3Body":
        return (
          <div className="p-8 lg:p-10 flex flex-col gap-4">
            <CardTitle className="text-2xl font-bold">{props.heading}</CardTitle>
            <RichText content={props.richText} />
          </div>
        );

      case "iconBodyInline":
        return (
          <div className="p-8 lg:p-10 flex items-start gap-6">
            <IconWrapper name={props.icon} className="shrink-0" />
            <div className="flex flex-col gap-1 pt-1.5">
              <RichText content={props.richText} />
            </div>
          </div>
        );

      case "iconBodyNormal":
        return (
          <div className="p-8 lg:p-10 flex flex-col gap-6">
            <IconWrapper name={props.icon} />
            <div className="flex flex-col gap-4">
              <RichText content={props.richText} />
            </div>
          </div>
        );

      case "WithFeaturedImage":
        return (
          <div className="flex flex-col h-full">
            <div className="relative w-full aspect-video bg-neutral-900 overflow-hidden rounded-t-[32px]">
                <img src={props.image} alt={props.heading} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 lg:p-10 flex flex-col gap-4">
              <CardTitle className="text-xl font-bold">{props.heading}</CardTitle>
              <RichText content={props.richText} />
            </div>
          </div>
        );

      case "h3BodyRedirect":
        return (
          <Link href={props.link} className="block h-full">
            <div className="p-8 lg:p-10 flex flex-col gap-4">
              <div className="flex items-center justify-between gap-4">
                <CardTitle className="text-2xl font-bold">{props.heading}</CardTitle>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] group-hover:border-brand-primary/30 transition-colors">
                  <LucideIcons.ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-brand-primary transition-colors" />
                </div>
              </div>
              <RichText content={props.richText} />
            </div>
          </Link>
        );

      case "iconH3BodyCTA":
        return (
          <div className="p-8 lg:p-10 flex flex-col gap-8 items-start h-full">
            <IconWrapper name={props.icon} />
            <div className="flex flex-col gap-4">
              <CardTitle className="text-2xl font-bold">{props.heading}</CardTitle>
              <RichText content={props.richText} />
            </div>
            <div className="mt-auto">
              <Link href={props.cta.href}>
                <Button variant={props.cta.variant || "secondary"} size="sm" className="rounded-xl px-6">
                  {props.cta.label}
                </Button>
              </Link>
            </div>
          </div>
        );

      case "iconBodyProgressBody":
        return (
          <div className="p-8 lg:p-10 flex flex-col gap-8">
            <IconWrapper name={props.icon} />
            <div className="flex flex-col gap-6">
              <RichText content={props.richText} />
              <div className="space-y-4">
                  <Progress value={props.progress} variant="brand" size="md" />
                  {props.bottomText && <RichText content={props.bottomText} />}
              </div>
            </div>
          </div>
        );

      case "logoBodyDividerBody":
        return (
          <div className="p-8 lg:p-10 flex flex-col gap-8">
            <div className="h-10 w-auto flex items-center">
                <img src={props.logo} alt="Logo" className="h-full object-contain filter brightness-0 invert opacity-60" />
            </div>
            <div className="flex flex-col gap-6">
              <RichText content={props.richText} />
              <Divider className="opacity-10" />
              <RichText content={props.bottomText} />
            </div>
          </div>
        );

      case "bodyOnly":
        return (
          <div className="p-8 lg:p-10">
            <RichText content={props.richText} />
          </div>
        );

      case "h3BodyListsBodyCTA":
        return (
          <div className="p-8 lg:p-10 flex flex-col gap-8 h-full">
            <div className="flex flex-col gap-4">
              <CardTitle className="text-2xl font-bold">{props.heading}</CardTitle>
              <RichText content={props.richText} />
            </div>
            <ul className="flex flex-col gap-4">
              {props.listItems.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CorrectMarkIcon size={20} className="mt-0.5" />
                  <span className="text-base text-neutral-400 leading-snug">{item.text}</span>
                </li>
              ))}
            </ul>
            {props.cta && (
              <div className="mt-auto pt-4">
                <Link href={props.cta.href}>
                  <Button variant="primary" className="rounded-xl px-8">
                    {props.cta.label}
                  </Button>
                </Link>
              </div>
            )}
          </div>
        );

      case "twoColumnH3BodyListsBodyImage":
        return (
          <div className="flex flex-col lg:flex-row h-full">
            <div className="flex-1 p-8 lg:p-12 xl:p-16 flex flex-col gap-10">
               <div className="flex flex-col gap-5">
                 <CardTitle className="text-3xl lg:text-4xl font-bold">{props.heading}</CardTitle>
                 <RichText content={props.richText} className="text-base" />
               </div>
               <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {props.listItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-primary/10 mt-0.5 shrink-0">
                        <LucideIcons.Check className="w-3 h-3 text-brand-primary" />
                      </div>
                      <span className="text-sm text-neutral-400 leading-snug">{item.text}</span>
                    </li>
                  ))}
               </ul>
            </div>
            <div className="w-full lg:w-2/5 min-h-[400px] relative bg-neutral-900 border-l border-white/[0.05]">
                <img src={props.image} alt={props.heading} className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        );

      case "iconHeadingInline":
        return (
          <div className="p-8 lg:p-10 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <IconWrapper name={props.icon} className="w-12 h-12" />
              <CardTitle className="text-2xl font-bold">{props.heading}</CardTitle>
            </div>
            <RichText content={props.richText} />
          </div>
        );

      case "headingAndImageStack":
        return (
          <div className="flex flex-col h-full">
            <div className="p-8 lg:p-10 flex flex-col items-center">
              <CardTitle className="text-2xl font-bold text-center">{props.heading}</CardTitle>
            </div>
            <div className="px-8 lg:px-10 pb-8 lg:pb-10 mt-auto">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.05] bg-neutral-900 shadow-inner">
                  <img src={props.image} alt={props.heading} className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </div>
        );

      case "testimonial":
        return (
          <div className="p-8 lg:p-10 flex flex-col gap-8 h-full">
            <div className="flex flex-col gap-4 flex-1">
              <h4 className="text-xl font-bold leading-snug text-white">{props.title}</h4>
              <RichText content={props.richText} />
            </div>
            
            <div className="flex items-center gap-4 pt-4 border-t border-white/[0.05]">
              {props.avatar ? (
                <img 
                  src={props.avatar} 
                  alt={props.author} 
                  className="w-12 h-12 rounded-full object-cover grayscale opacity-80" 
                />
              ) : (
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-black"
                  style={{ 
                    background: props.accentColor || "#F59120",
                  }}
                >
                  {props.author.charAt(0)}
                </div>
              )}
              <div className="flex flex-col">
                <span className="font-aileron font-bold text-lg text-white leading-none mb-1">
                  {props.author}
                </span>
                <span className="text-sm text-neutral-500 font-medium">
                  {props.role}
                </span>
              </div>
            </div>
          </div>
        );

      case "testimonialSpecial":
        return (
          <div className="p-8 lg:p-12 flex flex-col gap-8 h-full">
            <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="text-white/20">
              <path d="M0 24V14.4C0 10.64 1.2 7.44 3.6 4.8C6.08 2.08 9.28 0.48 13.2 0V4.8C11.04 5.2 9.24 6.2 7.8 7.8C6.44 9.32 5.72 11.12 5.6 13.2H10.4V24H0ZM18.4 24V14.4C18.4 10.56 19.64 7.32 22.12 4.68C24.68 2.04 27.92 0.48 31.84 0V4.8C29.6 5.2 27.76 6.2 26.32 7.8C24.96 9.32 24.24 11.12 24.16 13.2H28.96V24H18.4Z" fill="currentColor" />
            </svg>
            
            <div className="flex-1">
               <p className="font-aileron font-bold text-white text-xl leading-relaxed">
                 {props.richText}
               </p>
            </div>
            
            <div className="flex items-center gap-4 pt-6 border-t border-white/[0.05]">
              {props.avatar && (
                <img 
                  src={props.avatar} 
                  alt={props.author} 
                  className="w-14 h-14 rounded-full object-contain bg-white/[0.03] p-2"
                />
              )}
              <div className="flex flex-col">
                <span className="font-aileron font-bold text-white text-lg">{props.author}</span>
                <span className="font-aileron font-semibold text-neutral-500 text-sm">{props.role}</span>
              </div>
            </div>
          </div>
        );

      case "apiTestCard":
        return (
          <div className="p-8 lg:p-12 h-full">
            <ApiTestWidget />
          </div>
        );

      case "technical":
        return (
          <div className="p-8 lg:p-12 flex flex-col gap-10">
             <div className="flex items-center gap-5">
                <IconWrapper name={props.icon} />
                <CardTitle className="text-2xl lg:text-3xl font-bold">{props.heading}</CardTitle>
             </div>
             
             {props.subheading && (
                <div className="space-y-6">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">{props.subheading}</h4>
                  {props.codeSnippet && (
                    <CodeSnippet 
                      code={props.codeSnippet} 
                      variant="default" 
                      minWidth="100%" 
                      maxWidth="100%"
                      maxHeight="400px"
                    />
                  )}
                </div>
             )}

             {props.subheading2 && (
                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500">{props.subheading2}</h4>
             )}

             {props.tableData && props.tableData.length > 0 && (
                <div className="mt-6 font-geist">
                   <FlexibleTable 
                    data={props.tableData} 
                    labelColumnWidth={140}
                    showFirstColumnHeader={true}
                    columns={Object.keys(props.tableData[0]).map(key => ({
                        key,
                        label: key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' '),
                    }))}
                   />
                </div>
             )}

             {props.richText && <RichText content={props.richText} className="mt-8" />}
          </div>
        );

      case "SlidingCards": {
        const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
        const [progress, setProgress] = useState(0);
        const [isDragging, setIsDragging] = useState(false);
        const containerRef = useRef<HTMLDivElement>(null);
        const shelfRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
          const updateConstraints = () => {
            if (containerRef.current && shelfRef.current) {
              const containerWidth = containerRef.current.offsetWidth;
              const shelfWidth = shelfRef.current.scrollWidth;
              setDragConstraints({
                left: -(shelfWidth - containerWidth + 80), // 80 is for the right bleeding edge spacing
                right: 0,
              });
            }
          };

          updateConstraints();
          window.addEventListener("resize", updateConstraints);
          return () => window.removeEventListener("resize", updateConstraints);
        }, [props.items]);

        const x = useMotionValue(0);
        const springX = useSpring(x, { stiffness: 300, damping: 30 });

        useEffect(() => {
          return x.on("change", (latest: number) => {
            if (dragConstraints.left !== 0) {
              const p = Math.abs(latest) / Math.abs(dragConstraints.left);
              setProgress(Number.isNaN(p) ? 0 : Math.min(Math.max(p, 0), 1));
            }
          });
        }, [dragConstraints.left, x]);

        const totalPages = 2; // Simple 2-page mapping for progress segments
        const activePage = progress > 0.5 ? 1 : 0;

        const scrollToPage = (pageIndex: number) => {
          const target = pageIndex === 0 ? 0 : dragConstraints.left;
          animate(x, target, {
            type: "spring",
            stiffness: 300,
            damping: 30,
          });
        };

        return (
          <div className="w-full flex flex-col gap-12" ref={containerRef}>
            {/* Draggable Shelf */}
            <div className="w-full overflow-hidden cursor-grab active:cursor-grabbing px-4 sm:px-0">
               <motion.div
                ref={shelfRef}
                drag="x"
                dragConstraints={dragConstraints}
                style={{ x: springX }}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(false)}
                className="flex items-center gap-6 py-4 pl-10 lg:pl-20"
               >
                {props.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col gap-4 p-8 sm:p-10 rounded-[32px] shrink-0 transition-all duration-300"
                    style={{
                      background: "#16181A",
                      border: "1px solid #8C929D",
                      width: "min(380px, 85vw)",
                      height: "280px"
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <BareGradientIcon name={item.icon} size={24} />
                      <h4 className="font-aileron font-semibold text-white text-lg">
                        {item.title}
                      </h4>
                    </div>
                    <p className="font-geist text-neutral-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
               </motion.div>
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center justify-center gap-3">
                {[0, 1].map((idx) => (
                    <button
                        key={idx}
                        onClick={() => scrollToPage(idx)}
                        className="relative h-1.5 rounded-full overflow-hidden bg-[#26282B] transition-all duration-300"
                        style={{ width: "80px" }}
                    >
                        <motion.div
                            className="absolute inset-0 origin-left"
                            style={{ 
                                background: "linear-gradient(90deg, #F59120 0%, #9747FF 100%)",
                                scaleX: idx === 0 
                                    ? Math.max(0, 1 - progress * 2) 
                                    : Math.max(0, (progress - 0.5) * 2)
                            }}
                        />
                    </button>
                ))}
            </div>
          </div>
        );
      }

      case "H3BodyLinkText": {
        const formatHeading = (text: string) => {
          // Look for {orange:text} pattern
          const parts = text.split(/(\{orange:.*?\})/g);
          return parts.map((part, i) => {
            if (part.startsWith("{orange:") && part.endsWith("}")) {
              const content = part.slice(8, -1);
              return <span key={i} className="text-[#F59120]">{content}</span>;
            }
            return part;
          });
        };

        return (
          <div className="p-8 lg:p-10 flex flex-col gap-6 h-full border-0">
            <div className="flex flex-col gap-4">
              <CardTitle className="text-2xl font-bold leading-tight">
                {formatHeading(props.heading)}
              </CardTitle>
              <RichText content={props.richText} className="text-neutral-400" />
            </div>
            <div className="mt-auto pt-2">
              <Link 
                href={props.linkHref} 
                className="inline-flex items-center gap-2 text-sm font-aileron font-bold text-white hover:text-brand-primary transition-colors group/link"
              >
                {props.linkText || "Learn more"}
                <LucideIcons.ArrowUpRight size={16} className="text-neutral-500 group-hover/link:text-brand-primary transition-colors" />
              </Link>
            </div>
          </div>
        );
      }

      case "RelatedAPI": {
        return (
          <div className="p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full h-full">
            <div className="flex-1 flex flex-col gap-10">
              <CardTitle className="text-2xl lg:text-3xl font-bold leading-tight max-w-md">
                {props.heading}
              </CardTitle>
              <div className="flex flex-wrap gap-4">
                {props.apis.map((api, i) => (
                  <Link key={i} href={api.href}>
                    <Button 
                      variant="secondary" 
                      size="md"
                      className="rounded-xl border-white font-aileron font-bold transition-opacity hover:opacity-80 active:opacity-70"
                      rightIcon={<LucideIcons.ArrowUpRight size={16} className="text-white/50" />}
                    >
                      {api.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[45%] aspect-square relative flex items-center justify-center">
              <div className="absolute inset-0 bg-brand-primary/10 blur-[100px] rounded-full opacity-30" />
              <img 
                src="/assets/related_api_illustration.png" 
                alt="Process Illustration" 
                className="relative z-10 w-full h-full object-contain"
              />
            </div>
          </div>
        );
      }

      case "queryForm":
        return (
          <div className="p-10 lg:p-16 flex flex-col gap-12 lg:gap-16">
            {/* Header */}
            <div className="flex flex-col items-center text-center gap-3">
              {props.subheading && (
                <span className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary">
                  {props.subheading}
                </span>
              )}
              <h3 className="text-3xl lg:text-[42px] leading-tight font-aileron font-bold text-white">
                {props.heading}
              </h3>
            </div>

            {/* Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative">
              {/* Vertical Divider (Desktop only) */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

              {/* Left Column: Form */}
              <div className="flex flex-col gap-8">
                <h4 className="text-lg font-bold text-white/90">{props.formLabel}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {props.formFields.map((field) => (
                    <div
                      key={field.name}
                      className={cn(field.fullWidth || field.type === "textarea" ? "sm:col-span-2" : "")}
                    >
                      {field.type === "textarea" ? (
                        <Textarea
                          label={field.label}
                          placeholder={field.placeholder}
                          required={field.required}
                          rows={4}
                          className="bg-transparent border-neutral-700"
                        />
                      ) : (
                        <Input
                          label={field.label}
                          type={field.type}
                          placeholder={field.placeholder}
                          required={field.required}
                          className="bg-transparent border-neutral-700"
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                    <Button 
                        variant="primary" 
                        size="lg" 
                        className="rounded-xl px-8 py-7 gap-3 font-aileron font-bold text-base"
                        rightIcon={<LucideIcons.Send size={18} />}
                    >
                        {props.submitLabel}
                    </Button>
                </div>
              </div>

              {/* Right Column: Sidebar */}
              <div className="flex flex-col gap-10 lg:pt-2">
                <div className="flex flex-col gap-6">
                  {props.description && (
                    <p className="text-neutral-300 text-lg leading-relaxed font-geist">
                      {props.description}
                    </p>
                  )}

                  {/* Media Placeholder */}
                  {props.media && (
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/50">
                      {props.media.type === "video" ? (
                        <video
                          src={props.media.url}
                          poster={props.media.posterUrl}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Image
                          src={props.media.url}
                          alt={props.media.alt || ""}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-4 mt-auto">
                  {props.sidebarCtas?.map((cta, i) => {
                    const Icon = cta.icon ? (LucideIcons as any)[cta.icon] : null;
                    return (
                      <Link key={i} href={cta.href} className="w-full">
                        <Button
                          variant={cta.variant || "secondary"}
                          size="lg"
                          className="w-full justify-center gap-3 rounded-xl font-aileron font-bold py-7 text-base transition-all hover:scale-[1.01]"
                          leftIcon={Icon ? <Icon size={20} /> : null}
                        >
                          {cta.label}
                        </Button>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      
      case "borderlessCardWithIcon":
        return (
          <div className="flex flex-col gap-10 items-start">
            <IconWrapper name={props.icon} />
            <div className="flex flex-col gap-6">
              <CardTitle className="text-3xl lg:text-[40px] font-aileron font-bold">{props.heading}</CardTitle>
              <RichText content={props.richText} className="text-lg lg:text-xl text-neutral-400" />
            </div>
          </div>
        );
      
      case "IconH3InlineAndBody":
        return (
          <div className="p-8 lg:p-10 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <BareGradientIcon name={props.icon} size={32} />
              <CardTitle className="text-2xl font-bold">{props.heading}</CardTitle>
            </div>
            <RichText content={props.richText} className="text-base text-neutral-400" />
          </div>
        );
      
      case "TwoColumnsLists":
        return (
          <div className="p-8 lg:p-12 flex flex-col gap-10 w-full h-full">
            <h3 className="font-aileron font-semibold text-xl text-white/95 leading-tight">
              {props.heading}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {/* Left Column */}
              <div className="flex flex-col gap-10">
                {props.listLeft.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group/item">
                    <CorrectMarkIcon size={24} className="mt-1" />
                    <span className="font-aileron font-semibold text-lg lg:text-xl text-white/90 leading-tight">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
              {/* Right Column */}
              <div className="flex flex-col gap-10">
                {props.listRight.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group/item">
                    <CorrectMarkIcon size={24} className="mt-1" />
                    <span className="font-aileron font-semibold text-lg lg:text-xl text-white/90 leading-tight">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "HeadingAndBodyUnderLists":
        return (
          <div className="flex flex-col w-full h-full divide-y divide-white/10">
            {/* Top Section */}
            <div className="p-8 lg:p-16 xl:p-20 relative overflow-hidden flex flex-col gap-12">
              {/* Background Blobs */}
              <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-brand-primary/20 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute bottom-[-20%] right-[-5%] w-[250px] h-[250px] bg-brand-secondary/20 blur-[80px] rounded-full pointer-events-none" />

              <h3 className="font-aileron font-semibold text-xl text-white/95 leading-tight relative z-10">
                {props.heading}
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                {props.lists.map((column, colIdx) => (
                  <div key={colIdx} className="flex flex-col gap-8">
                    {column.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-3">
                        <CorrectMarkIcon size={20} className="mt-0.5" />
                        <span className="font-aileron font-semibold text-lg lg:text-xl text-white/90 leading-tight">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="p-8 lg:p-12 flex flex-col gap-4 bg-white/[0.01] relative z-10">
              <h4 className="font-aileron font-semibold text-2xl text-white/95 leading-tight">
                {props.footerHeading}
              </h4>
              <RichText content={props.footerRichText} className="text-base text-white/60 leading-relaxed font-geist" />
            </div>
          </div>
        );

      case "VideoCard":
        return (
          <div className="relative w-full h-full min-h-[600px] flex flex-col justify-between p-8 lg:p-16 xl:p-20 overflow-hidden group">
            {/* Background Thumbnail */}
            <div className="absolute inset-0 z-0">
              <img 
                src={props.thumbnail} 
                alt={props.heading} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            </div>

            {/* Main Content (Top) */}
            <div className="relative z-10 flex flex-col gap-6 max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
               <div className="flex flex-col gap-2">
                 <h2 className="font-aileron font-semibold text-3xl md:text-4xl lg:text-5xl text-white/95 leading-tight">
                   {props.heading}
                 </h2>
                 <p className="font-aileron font-semibold text-2xl md:text-3xl lg:text-4xl text-white/60 leading-tight">
                   {props.subheading}
                 </p>
               </div>

               <Link 
                 href={props.videoHref}
                 className="inline-flex items-center gap-3 transition-colors hover:text-brand-primary"
               >
                 <span className="font-aileron font-semibold text-lg text-white/90 underline decoration-white/20 hover:decoration-brand-primary/50 transition-colors">
                   View Video
                 </span>
                 <LucideIcons.CirclePlay className="w-6 h-6 text-white/90" />
               </Link>
            </div>

            {/* Description (Bottom) */}
            <div className="relative z-10 max-w-2xl mt-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
               <p className="font-geist text-base lg:text-lg text-white/60 leading-relaxed">
                 {props.description}
               </p>
            </div>
          </div>
        );

      case "HowItWorkMain": {
        const renderDescription = (text: string) => {
          const parts = text.split(/(US|Canada|Europe)/g);
          return parts.map((part, i) => (
            <span key={i} className={["US", "Canada", "Europe"].includes(part) ? "text-white font-semibold" : ""}>
              {part}
            </span>
          ));
        };

        return (
          <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-20 xl:gap-24 p-8 lg:p-16 xl:p-20 items-start">
            {/* Left Content */}
            <div className="flex-1 flex flex-col gap-10 max-w-2xl">
              <div className="flex flex-col gap-4">
                <h2 className="font-aileron font-semibold text-4xl md:text-5xl lg:text-6xl leading-tight">
                  <span className="text-white block">{props.heading}</span>
                  <span className="text-white/40 block mt-1">{props.subheading}</span>
                </h2>
                <p className="font-geist text-lg text-white/50 leading-relaxed max-w-xl">
                  {renderDescription(props.description)}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {props.ctas.map((cta, i) => (
                  <Link
                    key={i}
                    href={cta.href}
                    className={cn(
                      "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-aileron font-semibold text-base transition-all active:scale-95",
                      cta.variant === "primary-gradient"
                        ? "bg-gradient-to-r from-[#f59120] to-[#9747ff] text-white shadow-lg shadow-orange-500/10 hover:opacity-90"
                        : "border border-white/90 text-white hover:bg-white/5"
                    )}
                  >
                    {cta.label}
                    {cta.variant === "primary-gradient" ? (
                      <LucideIcons.ChevronRight className="w-4 h-4" />
                    ) : (
                      <LucideIcons.ExternalLink className="w-4 h-4" />
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Steps Grid */}
            <div className="w-full lg:w-[520px] flex flex-col rounded-[1.5rem] relative">
              {/* Top Row: 2 Column Container */}
              <div className="grid grid-cols-2">
                {/* Step 1 */}
                <div 
                  className="p-[24px] flex flex-col gap-6 relative group h-[200px] border-r border-[#000000]/90 rounded-[1.5rem_0_0_0]"
                  style={{
                    background: "linear-gradient(294deg, #6F6F6F 0%, #171717 100%)"
                  }}
                >
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-20"
                    style={{
                      backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 10px)`
                    }}
                  />
                  <div className="relative z-10 flex flex-col gap-8 h-full">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center font-aileron font-bold text-base text-white"
                      style={{ background: "linear-gradient(90deg, #F59120 0%, #9747FF 100%)" }}
                    >
                      1
                    </div>
                    <div className="flex flex-col gap-2 mt-auto">
                      <h4 className="font-aileron font-semibold text-xl text-white">{props.steps[0]?.title}</h4>
                      <p className="font-geist text-sm text-white/50 leading-relaxed">{props.steps[0]?.description}</p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div 
                  className="p-[24px] flex flex-col gap-6 relative group h-[200px] rounded-[0_1.5rem_0_0]"
                  style={{
                    background: "linear-gradient(65deg, #6F6F6F 0%, #171717 100%)"
                  }}
                >
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-20"
                    style={{
                      backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 10px)`
                    }}
                  />
                  <div className="relative z-10 flex flex-col gap-8 h-full">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center font-aileron font-bold text-base text-white"
                      style={{ background: "linear-gradient(90deg, #F59120 0%, #9747FF 100%)" }}
                    >
                      2
                    </div>
                    <div className="flex flex-col gap-2 mt-auto">
                      <h4 className="font-aileron font-semibold text-xl text-white">{props.steps[1]?.title}</h4>
                      <p className="font-geist text-sm text-white/50 leading-relaxed">{props.steps[1]?.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Bottom Row */}
              <div 
                className="p-[24px] relative group h-[180px] border-t border-[#171717] rounded-[0_0_1.5rem_1.5rem]"
                style={{
                  background: "linear-gradient(181deg, #6F6F6F 0.75%, #171717 99.25%)"
                }}
              >
                <div 
                  className="absolute inset-0 pointer-events-none opacity-20"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 10px)`
                  }}
                />
                <div className="relative z-10 flex flex-col gap-8 h-full">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center font-aileron font-bold text-base text-white"
                    style={{ background: "linear-gradient(90deg, #F59120 0%, #9747FF 100%)" }}
                  >
                    3
                  </div>
                  <div className="flex flex-col gap-2 mt-auto">
                    <h4 className="font-aileron font-semibold text-xl text-white">{props.steps[2]?.title}</h4>
                    <p className="font-geist text-sm text-white/50 leading-relaxed">{props.steps[2]?.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }

      case "HeadingBodyImageCTAStack": {
        return (
          <div 
            className="w-full flex flex-col items-center text-center p-8 lg:p-12 gap-8 rounded-[32px]"
            style={{ 
              background: "#16181A", 
              border: "1px solid #8C929D" 
            }}
          >
            <div className="flex flex-col gap-4 max-w-2xl">
              <h2 className="font-aileron font-semibold text-3xl lg:text-4xl text-white">
                {props.heading}
              </h2>
              <p className="font-geist text-lg text-white/70 leading-relaxed">
                {props.body}
              </p>
            </div>

            {/* Overlapping/Stacked Image Representation */}
            <div className="relative w-full aspect-[4/3] max-w-md mx-auto group">
              {/* Background Card Image */}
              <div className="absolute top-0 left-0 w-[85%] h-[85%] rounded-2xl overflow-hidden border border-white/5 shadow-2xl opacity-40 group-hover:opacity-60 transition-opacity">
                <Image
                  src={props.image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              {/* Foreground Card Image (Offset) */}
              <div className="absolute bottom-0 right-0 w-[85%] h-[85%] rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
                <Image
                  src={props.image}
                  alt={props.heading}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <Link 
              href={props.cta.href}
              className="inline-flex items-center px-8 py-3 rounded-xl border border-[#8C929D] text-white font-aileron font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              {props.cta.label}
            </Link>
          </div>
        );
      }

      case "CardGrid": {
        return (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {props.gridCards.map((card, i) => (
              <Link
                key={i}
                href={card.href}
                className="flex flex-col gap-6 p-8 lg:p-10 rounded-3xl h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,1)] group"
                style={{
                  background: "#16181A",
                  border: "1px solid #8C929D",
                }}
              >
                <div className="flex flex-col gap-3 flex-1">
                  <h3
                    className="font-aileron font-semibold text-2xl lg:text-3xl leading-tight"
                    style={{
                      background: "linear-gradient(90deg, #F59120 0%, #9747FF 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p className="font-geist text-base lg:text-lg text-[#A9ADB5] leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 font-aileron font-semibold text-base text-white group-hover:opacity-80 transition-opacity mt-auto">
                  Learn more
                  <LucideIcons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        );
      }

      case "HeadingCTALists": {
        return (
          <div 
            className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between p-10 gap-16 lg:gap-20 rounded-[24px]"
            style={{ 
              background: "#171717", 
              border: "1px solid #6F6F6F" 
            }}
          >
            {/* Left Section: Content & CTA */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8 flex-1">
              <h2 className="font-aileron font-semibold text-xl leading-relaxed text-white/90 max-w-md">
                {props.heading}
              </h2>
              <Link 
                href={props.cta.href}
                className="flex items-center gap-2 px-6 py-2 rounded-lg font-aileron font-semibold text-base text-white transition-opacity hover:opacity-80 active:opacity-70 shadow-lg group"
                style={{ background: "linear-gradient(90deg, #F59120 0%, #9747FF 100%)" }}
              >
                {props.cta.label}
                <LucideIcons.ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Right Section: Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 flex-[1.5]">
              {props.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="flex-shrink-0">
                    {feature.icon || (
                      <div className="w-7 h-7 rounded-full bg-[#27AE60]/20 flex items-center justify-center border border-[#27AE60]/30 shadow-[0_0_15px_rgba(39,174,96,0.1)] group-hover:scale-110 transition-transform">
                        <LucideIcons.Check className="w-4 h-4 text-[#27AE60]" />
                      </div>
                    )}
                  </div>
                  <span className="font-aileron font-semibold text-lg lg:text-xl text-white/90 whitespace-nowrap">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      }

      default:
        return null;
    }
  };

  const cardVariant = variant === "borderlessCardWithIcon" ? "ghost" : "dark";

  return (
    <Card variant={cardVariant} hoverable={hoverable && variant !== "h3BodyRedirect" && variant !== "borderlessCardWithIcon"} className={cardClasses}>
      {renderContent()}
    </Card>
  );
}
