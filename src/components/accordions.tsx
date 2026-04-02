"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/* ──────────────────────────────────────────────────────────────────────────
 * 1. Types & Interfaces
 * ────────────────────────────────────────────────────────────────────────── */

export type AccordionItem = {
    id: string;
    title: string;
    description: string;
    link?: { label: string; href: string };
    snippets?: Record<string, string>; // language -> code snippet
};

export type GridContentBlock = 
    | { type: "text"; content: string; isBold?: boolean; isHighlight?: boolean }
    | { type: "list"; title?: string; items: string[] };

export type WithChangingImageItem = {
    id: string;
    title: string;
    description?: string;
    image: string; // URL to the image shown when this item is active
    imageAlt?: string;
    link?: { label: string; href: string };
    result?: string; // e.g., "Result: VIN processing time reduced to under 1 second."
};

export type GridAccordionItemData = {
    id: string;
    title: string;
    subtitle: string;
    content: GridContentBlock[];
};

export type AccordionsProps = 
    | {
        variant: "docAccordion";
        subheading?: string;
        heading: string;
        description?: string;
        items: AccordionItem[];
        languages?: string[];
        ctas?: { 
            label: string; 
            href: string; 
            icon?: { src: string; width: number; height: number }; 
            variant?: "primary" | "secondary" | "whatsapp" | "orange" 
        }[];
    }
    | {
        variant: "accordionGrid";
        subheading?: string;
        heading: string;
        description?: string;
        columns: {
            items: GridAccordionItemData[];
        }[];
    }
    | {
        variant: "FAQAccordion";
        items: {
            id: string;
            question: string;
            answer?: string;
        }[];
    }
    | {
        variant: "WithChangingImage";
        subheading?: string;
        heading?: string;
        description?: string;
        items: WithChangingImageItem[];
        defaultOpenIndex?: number;
    };

/* ──────────────────────────────────────────────────────────────────────────
 * 2. Main Component
 * ────────────────────────────────────────────────────────────────────────── */

export function Accordions(props: AccordionsProps) {
    const { variant } = props;
    
    // States for docAccordion variant
    const [openIndex, setOpenIndex] = useState(
        variant === "WithChangingImage" ? (props.defaultOpenIndex ?? 0) : 0
    );
    const languages = variant === "docAccordion" ? (props.languages || ["Node", "React", "PHP", "Python"]) : [];
    const [activeTab, setActiveTab] = useState(languages?.[0] || "");

    const renderContent = () => {
        switch (variant) {
            case "docAccordion": {
                const { items, heading, subheading, description, languages: propLanguages, ctas } = props;
                const languages = propLanguages || ["Node", "React", "PHP", "Python"];
                // Note: these states are defined at the top level of the component
                const selectedItem = items[openIndex];
                const snippet = selectedItem?.snippets?.[activeTab] || selectedItem?.snippets?.["default"] || "";

                return (
                    <div className="section-content px-10 lg:px-20 flex flex-col gap-20">
                        {/* Header: Centered on top */}
                        <div className="flex flex-col gap-4 text-center items-center">
                            <div className="flex flex-col gap-2 max-w-4xl">
                                {subheading && (
                                    <span className="font-aileron font-semibold text-neutral-400 text-3xl lg:text-[40px] leading-tight text-center">
                                        {subheading}
                                    </span>
                                )}
                                <h2 className="font-aileron font-semibold text-white text-3xl lg:text-[40px] leading-tight text-center">
                                    {heading}
                                </h2>
                            </div>
                            {description && (
                                <p className="font-geist max-w-2xl text-neutral-400 text-base lg:text-lg leading-relaxed">
                                    {description}
                                </p>
                            )}
                        </div>

                        {/* Interactive Board Panel */}
                        <div className="w-full flex flex-col lg:flex-row rounded-[32px] overflow-hidden border border-[#8C929D] bg-[#16181A]">
                            {/* Left Side: Category Selection Accordions (50%) */}
                            <div className="flex flex-col w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-[#8C929D]">
                                {items.map((item, i) => (
                                    <div 
                                        key={item.id} 
                                        className={cn(
                                            "transition-colors",
                                            i < items.length - 1 && "border-b border-[#8C929D]",
                                            openIndex === i ? "bg-white/5" : "bg-transparent hover:bg-white/5"
                                        )}
                                    >
                                        <button
                                            type="button"
                                            onClick={() => setOpenIndex(i)}
                                            className="flex items-center justify-between gap-4 p-8 w-full text-left group"
                                        >
                                            <span className={cn(
                                                "font-aileron font-semibold text-xl transition-colors",
                                                openIndex === i ? "text-white" : "text-neutral-400 group-hover:text-white"
                                            )}>
                                                {item.title}
                                            </span>
                                            <AccordionIcon isOpen={openIndex === i} />
                                        </button>

                                        {openIndex === i && (
                                            <div className="flex flex-col gap-8 px-8 pb-8">
                                                <p className="font-geist text-neutral-400 text-base leading-relaxed">
                                                    {item.description}
                                                </p>
                                                {item.link && (
                                                    <Link href={item.link.href} className="w-fit">
                                                        <Button 
                                                            variant="secondary" 
                                                            className="rounded-lg h-auto py-2.5 px-6 font-aileron font-semibold text-base transition-all group border-white/20 hover:border-white/90"
                                                            rightIcon={<ExternalLink size={16} className="text-white/70 group-hover:text-white transition-colors" />}
                                                        >
                                                            {item.link.label}
                                                        </Button>
                                                    </Link>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Right Side: Visual/Code Viewer (50%) */}
                            <div className="flex flex-col w-full lg:w-1/2 bg-[#16181A]">
                                {/* Viewer Header: Bar style */}
                                <div className="flex items-center gap-4 px-8 py-6 border-b border-[#8C929D]">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                                        <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                                    </div>
                                    <span className="font-aileron font-semibold text-base text-white">{"</>"} Code</span>
                                </div>

                                {/* Viewer Subheader: Language selector */}
                                <div className="flex items-center flex-wrap gap-2 px-8 py-5 border-b border-[#8C929D] bg-neutral-900/10">
                                    {languages.map((tab) => (
                                        <button
                                            key={tab}
                                            type="button"
                                            onClick={() => setActiveTab(tab)}
                                            className={cn(
                                                "px-5 py-2.5 rounded-lg font-aileron font-semibold text-sm transition-all focus:outline-none",
                                                activeTab === tab
                                                    ? "bg-brand-primary/10 border border-brand-primary text-brand-primary shadow-[0_0_15px_rgba(245,145,32,0.1)]"
                                                    : "bg-transparent border border-neutral-700 text-neutral-400 hover:border-neutral-500 hover:text-white"
                                            )}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>

                                {/* Viewer Body: Code scroll area */}
                                <div className="flex flex-1 p-8">
                                    <div className="bg-[#0D0E10] border border-white/5 rounded-2xl p-8 flex-1 overflow-x-auto min-h-[350px] shadow-inner">
                                        <pre className="font-geist text-white text-[13px] leading-[1.7em] whitespace-pre-wrap break-words">
                                            {snippet}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Visual CTAs footer */}
                        {ctas && (
                            <div className="flex items-center justify-center gap-6 flex-wrap">
                                {ctas.map((cta, i) => (
                                    <Link key={i} href={cta.href} className="w-full sm:w-auto">
                                        <Button
                                            variant={cta.variant || "primary"}
                                            size="lg"
                                            className="w-full sm:w-auto px-10 rounded-xl font-aileron font-bold shadow-lg"
                                            rightIcon={cta.icon ? (
                                                <Image 
                                                    src={cta.icon.src} 
                                                    alt="" 
                                                    width={cta.icon.width} 
                                                    height={cta.icon.height} 
                                                />
                                            ) : null}
                                        >
                                            {cta.label}
                                        </Button>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                );
            }

            case "accordionGrid": {
                return (
                    <div className="section-content px-10 lg:px-20 flex flex-col gap-20">
                        {/* Header */}
                        <div className="flex flex-col gap-4 text-center items-center">
                            <div className="flex flex-col gap-2 max-w-4xl">
                                {props.subheading && (
                                    <span className="font-aileron font-semibold text-neutral-400 text-3xl lg:text-[40px] leading-tight">
                                        {props.subheading}
                                    </span>
                                )}
                                <h2 className="font-aileron font-semibold text-white text-3xl lg:text-[40px] leading-tight">
                                    {props.heading}
                                </h2>
                            </div>
                            {props.description && (
                                <p className="font-geist max-w-2xl text-neutral-400 text-base lg:text-lg leading-relaxed">
                                    {props.description}
                                </p>
                            )}
                        </div>

                        {/* Grid */}
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
                            {props.columns.map((col, cIdx) => (
                                <div key={cIdx} className="flex flex-col gap-8">
                                    {col.items.map((item) => (
                                        <GridAccordion key={item.id} item={item} />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                );
            }

            case "WithChangingImage": {
                const { items, heading, subheading, description } = props;
                const activeItem = items[openIndex];

                return (
                    <div className="section-content px-8 md:px-12 lg:px-20 flex flex-col gap-16 lg:gap-20">
                        {/* Optional Header */}
                        {(heading || subheading || description) && (
                            <div className="flex flex-col gap-4 text-center items-center">
                                {subheading && (
                                    <span className="font-aileron font-semibold text-neutral-400 text-3xl lg:text-[40px] leading-tight">
                                        {subheading}
                                    </span>
                                )}
                                {heading && (
                                    <h2 className="font-aileron font-semibold text-white text-3xl lg:text-[40px] leading-tight text-center">
                                        {heading}
                                    </h2>
                                )}
                                {description && (
                                    <p className="font-geist max-w-2xl text-neutral-400 text-base lg:text-lg leading-relaxed">
                                        {description}
                                    </p>
                                )}
                            </div>
                        )}

                        {/* Main Two-Column Layout */}
                        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-20 items-start">
                            {/* Left Column: Accordion list */}
                            <div className="flex flex-col w-full lg:w-1/2 divide-y divide-[#8C929D]/20">
                                {items.map((item, i) => {
                                    const isOpen = openIndex === i;
                                    return (
                                        <div key={item.id}>
                                            <button
                                                type="button"
                                                onClick={() => setOpenIndex(i)}
                                                className="flex items-center justify-between gap-6 py-7 w-full text-left group"
                                            >
                                                <span className={cn(
                                                    "font-aileron font-semibold text-xl transition-colors leading-snug",
                                                    isOpen ? "text-white" : "text-neutral-400 group-hover:text-white"
                                                )}>
                                                    <span className={cn(
                                                        "inline-block mr-3 transition-colors",
                                                        isOpen ? "text-white" : "text-neutral-600"
                                                    )}>
                                                        {i + 1}.
                                                    </span>
                                                    {item.title}
                                                </span>
                                                <AccordionIcon isOpen={isOpen} />
                                            </button>

                                            {/* Expanded content */}
                                            {isOpen && (
                                                <div className="pb-7 flex flex-col gap-5 animate-in fade-in slide-in-from-top-2 duration-300">
                                                    {item.description && (
                                                        <p className="font-geist text-base text-neutral-400 leading-relaxed">
                                                            {item.description}
                                                        </p>
                                                    )}
                                                    {item.result && (
                                                        <div className="flex items-start gap-2">
                                                            <span
                                                                className="inline-flex items-center gap-1.5 font-geist font-semibold text-sm px-3 py-1.5 rounded-full"
                                                                style={{
                                                                    background: "linear-gradient(90deg, rgba(245,145,32,0.12) 0%, rgba(151,71,255,0.12) 100%)",
                                                                    border: "1px solid rgba(245,145,32,0.25)",
                                                                    color: "#F59120",
                                                                }}
                                                            >
                                                                <svg width="10" height="10" viewBox="0 0 10 10" className="shrink-0">
                                                                    <circle cx="5" cy="5" r="4" fill="#27C93F" />
                                                                </svg>
                                                                {item.result}
                                                            </span>
                                                        </div>
                                                    )}
                                                    {item.link && (
                                                        <Link href={item.link.href} className="w-fit">
                                                            <Button
                                                                variant="secondary"
                                                                className="rounded-lg h-auto py-2.5 px-6 font-aileron font-semibold text-base transition-all group border-white/20 hover:border-white/90"
                                                                rightIcon={<ExternalLink size={16} className="text-white/70 group-hover:text-white transition-colors" />}
                                                            >
                                                                {item.link.label}
                                                            </Button>
                                                        </Link>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Right Column: Changing Image */}
                            <div className="sticky top-24 w-full lg:w-1/2 rounded-[28px] overflow-hidden border border-[#8C929D]/30 bg-[#16181A] shadow-2xl aspect-[4/3] flex items-center justify-center">
                                {activeItem?.image ? (
                                    <Image
                                        key={activeItem.id}
                                        src={activeItem.image}
                                        alt={activeItem.imageAlt || activeItem.title}
                                        fill
                                        className="object-cover animate-in fade-in duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <span className="font-aileron text-neutral-600 text-lg">No image</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                );
            }

            case "FAQAccordion": {
                return (
                    <div className="section-content px-10 lg:px-20 flex flex-col">
                        {props.items.map((item, i) => (
                            <FAQItem 
                                key={item.id} 
                                item={item} 
                                isLast={i === props.items.length - 1}
                            />
                        ))}
                    </div>
                );
            }

            default:
                return null;
        }
    };

    return (
        <section className="w-full py-24 lg:py-36 bg-black overflow-hidden">
            <div className="mx-auto max-w-7xl">
                {renderContent()}
            </div>
        </section>
    );
}

function FAQItem({ item, isLast }: { item: { id: string; question: string; answer?: string }; isLast: boolean }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={cn(
            "flex flex-col transition-colors group",
            !isLast && "border-b border-[#8C929D]/20",
            "bg-transparent"
        )}>
            <button
                type="button"
                className="flex items-center justify-between gap-8 py-8 px-4 text-left w-full focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={cn(
                    "font-geist font-semibold text-xl lg:text-2xl transition-colors",
                    isOpen ? "text-white" : "text-neutral-300 group-hover:text-white"
                )}>
                    {item.question}
                </span>
                {isOpen ? (
                    <ChevronUp size={24} className="text-white shrink-0" />
                ) : (
                    <ChevronDown size={24} className="text-neutral-500 group-hover:text-white/70 shrink-0" />
                )}
            </button>
            {isOpen && (
                <div className="px-4 pb-8 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="font-geist text-lg lg:text-xl text-neutral-400 leading-relaxed max-w-4xl">
                        {item.answer || "Contact our support team for detailed information about this topic."}
                    </p>
                </div>
            )}
        </div>
    );
}

/* ──────────────────────────────────────────────────────────────────────────
 * 3. Sub-Components
 * ────────────────────────────────────────────────────────────────────────── */

function GridAccordion({ item }: { item: GridAccordionItemData }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={cn(
            "rounded-[20px] border transition-all duration-300",
            isOpen 
                ? "bg-neutral-900 border-[#8C929D] shadow-[0_0_20px_rgba(255,255,255,0.02)]" 
                : "bg-[#16181A] border-[#8C929D]/30 hover:border-[#8C929D]/60"
        )}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-8 text-left group"
            >
                <div className="flex flex-col gap-2">
                    <h3 className="font-aileron font-semibold text-xl text-white leading-tight">
                        {item.title}
                    </h3>
                    <span className="font-geist text-sm text-neutral-500 font-medium">
                        {item.subtitle}
                    </span>
                </div>
                <AccordionIcon isOpen={isOpen} />
            </button>

            {isOpen && (
                <div className="px-8 pb-8 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="border border-[#8C929D]/30 rounded-[24px] p-8 lg:p-10 flex flex-col gap-8 lg:gap-10 bg-black/10">
                        {item.content.map((block, idx) => (
                            <div key={idx} className="flex flex-col gap-4">
                                {block.type === "text" && (
                                    <p className={cn(
                                        "font-geist text-base leading-[1.6em]",
                                        block.isBold ? "font-bold text-white" : "text-neutral-400",
                                        block.isHighlight && "text-[#9747FF] font-semibold"
                                    )}>
                                        {block.content}
                                    </p>
                                )}
                                {block.type === "list" && (
                                    <div className="flex flex-col gap-3">
                                        {block.title && (
                                            <span className="font-geist font-bold text-sm text-white uppercase tracking-wider">
                                                {block.title}
                                            </span>
                                        )}
                                        <ul className="flex flex-col gap-3">
                                            {block.items.map((li, i) => (
                                                <li key={i} className="flex gap-4 text-[15px] text-neutral-400 font-geist leading-[1.6em]">
                                                    <span className="text-brand-primary text-xl translate-y-[-2px]">•</span>
                                                    {li}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

function AccordionIcon({ isOpen, className }: { isOpen: boolean; className?: string }) {
    return (
        <div className={cn(
            "w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0",
            isOpen 
                ? "border-[#8C929D] bg-white/10 rotate-180 shadow-[0_0_15px_rgba(255,255,255,0.05)]" 
                : "border-[#8C929D]/30 bg-black/40 group-hover:border-[#8C929D]/60 group-hover:bg-white/5",
            className
        )}>
            <ChevronDown 
                size={22} 
                className={cn(
                    "transition-colors duration-300",
                    isOpen ? "text-white" : "text-neutral-500 group-hover:text-white/70"
                )} 
            />
        </div>
    );
}
