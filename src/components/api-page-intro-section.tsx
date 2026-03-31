"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
 * 1. TypeScript Interfaces (Discriminated Unions)
 * ───────────────────────────────────────────── */

export type ApiPageIntroVariant = 
    | "api-split-media-right" 
    | "api-split-media-left" 
    | "api-centered-minimal" 
    | "api-simple-text"
    | "api-feature-list-split"
    | "api-heading-top-split"
    | "api-code-split"
    | "api-feature-grid-split"
    | "api-cards-grid";

export interface ApiPageFeature {
    stat?: string;
    text: string;
    description?: string;
    icon?: string;
}

export interface IntroCTA {
    text: string;
    href: string;
    variant: "primary" | "outline" | "ghost";
}

export interface IntroMedia {
    type: "image" | "video" | "featureCode" | "dashboard" | "featureGrid";
    image?: string;
    videoUrl?: string;
    codeText?: string;
    gridTitle?: string;
    gridItems?: { text: string }[];
    alt?: string;
}

export interface ApiPageIntroSectionBaseProps {
    variant: ApiPageIntroVariant;
    theme?: "dark" | "light";
    spacingSize?: "standard" | "large" | "compact";
    heading: string;
    headingHighlight?: string;
    subheading?: string;
    richText: string;
    secondaryRichText?: string;
    features?: ApiPageFeature[];
    ctas?: IntroCTA[];
    media?: IntroMedia;
}

/** 
 * Discriminated Union for strict type safety.
 * This ensures that if a variant is selected, TypeScript can enforce specific props 
 * (though currently they share most fields, this architecture is ready for divergence).
 */
export type ApiPageIntroSectionProps = 
    | (ApiPageIntroSectionBaseProps & { variant: "api-split-media-right" })
    | (ApiPageIntroSectionBaseProps & { variant: "api-split-media-left" })
    | (ApiPageIntroSectionBaseProps & { variant: "api-centered-minimal" })
    | (ApiPageIntroSectionBaseProps & { variant: "api-simple-text" })
    | (ApiPageIntroSectionBaseProps & { variant: "api-feature-list-split" })
    | (ApiPageIntroSectionBaseProps & { variant: "api-heading-top-split" })
    | (ApiPageIntroSectionBaseProps & { variant: "api-code-split" })
    | (ApiPageIntroSectionBaseProps & { variant: "api-feature-grid-split" })
    | (ApiPageIntroSectionBaseProps & { variant: "api-cards-grid" });


/* ─────────────────────────────────────────────
 * 2. Shared Utilities & Internal Components
 * ───────────────────────────────────────────── */

function HeadingRenderer({
    text,
    highlight,
    className,
    theme = "dark"
}: {
    text: string;
    highlight?: string;
    className?: string;
    theme?: "dark" | "light"
}) {
    if (!text) return null;
    const isDark = theme === "dark";
    
    // Explicit color and weight forced for hero-parity
    const colorClass = isDark ? "text-white" : "text-neutral-900";
    const finalClass = cn("font-aileron font-semibold", colorClass, className);

    if (!highlight) return <h2 className={finalClass}>{text}</h2>;

    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
        <h2 className={finalClass}>
            {parts.map((p, i) => {
                const part = p as string;
                return part.toLowerCase() === highlight.toLowerCase() ? (
                    <span
                        key={i}
                        className="bg-clip-text text-transparent bg-gradient-to-r from-[#F59120] to-[#9747FF]"
                    >
                        {part}
                    </span>
                ) : (
                    <span key={i}>{part}</span>
                )
            })}
        </h2>
    );
}

function CTAButtonGroup({ ctas, theme }: { ctas: IntroCTA[]; theme: "dark" | "light" }) {
    return (
        <div className="flex flex-wrap items-center gap-4">
            {ctas.map((cta, idx) => {
                const isPrimary = cta.variant === "primary";
                const isOutline = cta.variant === "outline";
                
                return (
                    <Link
                        key={idx}
                        href={cta.href}
                        className={cn(
                            "px-6 py-3 rounded-lg font-aileron font-semibold transition-all duration-200 hover:opacity-90 active:scale-95",
                            isPrimary && "text-white bg-gradient-to-r from-[#F59120] to-[#9747FF]",
                            isOutline && (theme === "dark" 
                                ? "text-white border border-white/20 hover:bg-white/5" 
                                : "text-neutral-900 border border-neutral-200 hover:bg-neutral-50"),
                            cta.variant === "ghost" && (theme === "dark" ? "text-white/80 hover:text-white" : "text-neutral-600 hover:text-neutral-900")
                        )}
                    >
                        {cta.text}
                    </Link>
                );
            })}
        </div>
    );
}

function DashboardRenderer({ code, theme = "dark" }: { code?: string; theme?: "dark" | "light" }) {
    const isDark = theme === "dark";
    
    return (
        <div className={cn(
            "w-full rounded-2xl border shadow-2xl overflow-hidden font-geist transition-colors duration-300",
            isDark ? "bg-[#141414] border-white/5" : "bg-white border-neutral-200"
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

function FeatureGridCard({ title, items, theme = "dark" }: { title?: string; items?: { text: string }[]; theme?: "dark" | "light" }) {
    const isDark = theme === "dark";
    if (!items || items.length === 0) return null;

    return (
        <div className={cn(
            "w-full rounded-2xl border p-8 shadow-2xl transition-all duration-300",
            isDark ? "bg-[#141414] border-white/10 backdrop-blur-sm" : "bg-white border-neutral-200"
        )}>
            {title && (
                <h3 className={cn(
                    "text-lg font-aileron font-bold mb-8",
                    isDark ? "text-white/90" : "text-neutral-900"
                )}>
                    {title}
                </h3>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {items.map((p, idx) => {
                    const item = p as { text: string };
                    return (
                        <div key={idx} className="flex items-start gap-3">
                            <div className="mt-1 flex-shrink-0">
                                <svg className="w-5 h-5 text-[#F59120]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className={cn(
                                "text-sm font-geist leading-snug",
                                isDark ? "text-neutral-400 group-hover:text-white/60 transition-colors" : "text-neutral-600"
                            )}>
                                {item.text}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function StatCardsGrid({ features, theme = "dark" }: { features: ApiPageFeature[]; theme?: "dark" | "light" }) {
    const isDark = theme === "dark";
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full">
            {features.map((feature, idx) => (
                <div 
                    key={idx} 
                    className={cn(
                        "p-10 rounded-3xl border flex flex-col items-center text-center gap-4 transition-all duration-300",
                        isDark 
                            ? "bg-[#141414] border-white/5 hover:border-white/10" 
                            : "bg-white border-neutral-100 shadow-sm hover:shadow-md"
                    )}
                >
                    {feature.stat && (
                        <span className="text-5xl lg:text-6xl font-aileron font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F59120] to-[#9747FF]">
                            {feature.stat}
                        </span>
                    )}
                    <div className="flex flex-col gap-2">
                        <h4 className={cn(
                            "font-aileron font-bold text-lg",
                            isDark ? "text-white" : "text-neutral-900"
                        )}>
                            {feature.text}
                        </h4>
                        {feature.description && (
                            <p className={cn(
                                "text-sm font-geist leading-relaxed opacity-60",
                                isDark ? "text-white/80" : "text-neutral-600"
                            )}>
                                {feature.description}
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

function VisualContent({ media, variant, theme = "dark" }: { media: IntroMedia; variant: ApiPageIntroVariant; theme?: "dark" | "light" }) {
    if (!media) return null;

    if (media.type === "featureGrid") {
        return <FeatureGridCard title={media.gridTitle} items={media.gridItems} theme={theme} />;
    }

    if (media.type === "dashboard") {
        return <DashboardRenderer code={media.codeText} theme={theme} />;
    }

    if (media.type === "video") {
        return (
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/5">
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

    if (media.type === "featureCode") {
        return (
            <div className="relative w-full aspect-video lg:aspect-auto">
                {/* Code Snippet Box */}
                <div className="w-full h-full min-h-[300px] bg-[#1A1A1A] rounded-2xl p-6 font-mono text-sm overflow-hidden border border-white/5 shadow-2xl relative">
                    <div className="flex items-center gap-2 mb-4 opacity-50">
                       <div className="w-3 h-3 rounded-full bg-red-500/50" />
                       <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                       <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <pre className="text-neutral-400 whitespace-pre-wrap">
                        {media.codeText || "{\n  \"status\": \"success\",\n  \"data\": {\n    \"make\": \"Tesla\",\n    \"model\": \"Model Y\"\n  }\n}"}
                    </pre>
                    
                    {/* Subtle bottom gradient inside code box */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1A1A1A] to-transparent pointer-events-none" />
                </div>

                {/* Overlaid Image (e.g. the Car) */}
                {media.image && (
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className={cn(
                            "absolute -right-8 lg:-right-16 top-1/2 -translate-y-1/2 w-4/5 lg:w-3/4 drop-shadow-2xl z-10",
                            (variant === "api-split-media-left" || variant === "api-heading-top-split") && "-left-8 lg:-left-16 right-auto"
                        )}
                    >
                        <Image 
                            src={media.image} 
                            alt={media.alt || "Visual"} 
                            width={1000} 
                            height={600} 
                            className="object-contain"
                        />
                    </motion.div>
                )}
            </div>
        );
    }

    return (
        <div className="relative w-full rounded-2xl overflow-hidden shadow-xl">
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


/* ─────────────────────────────────────────────
 * 3. Main Component
 * ───────────────────────────────────────────── */

function FeatureList({ features }: { features: ApiPageFeature[] }) {
    return (
        <ul className="flex flex-col gap-4 my-6">
            {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                        {feature.icon ? (
                             <Image 
                                src={feature.icon} 
                                alt="" 
                                width={20} 
                                height={20} 
                                className="w-5 h-5 object-contain"
                            />
                        ) : (
                            <svg 
                                className="w-5 h-5 text-[#F59120]" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={3} 
                                    d="M5 13l4 4L19 7" 
                                />
                            </svg>
                        )}
                    </div>
                    <span className="text-neutral-300 font-geist leading-snug">
                        {feature.text}
                    </span>
                </li>
            ))}
        </ul>
    );
}

function FeatureCardList({ features, theme = "dark" }: { features: ApiPageFeature[]; theme?: "dark" | "light" }) {
    const isDark = theme === "dark";
    
    return (
        <ul className="flex flex-col gap-6 my-8">
            {features.map((feature, idx) => (
                <li 
                    key={idx} 
                    className="flex items-start gap-5 group"
                >
                    <div className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 border",
                        isDark 
                            ? "bg-white/5 border-white/5 group-hover:bg-white/10 group-hover:border-white/10" 
                            : "bg-white border-neutral-200 group-hover:bg-neutral-50"
                    )}>
                        {feature.icon ? (
                            <Image 
                                src={feature.icon} 
                                alt="" 
                                width={20} 
                                height={20} 
                                className="w-5 h-5 object-contain"
                            />
                        ) : (
                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#F59120] to-[#9747FF] p-[1px]">
                                <div className={cn(
                                    "w-full h-full rounded-full flex items-center justify-center",
                                    isDark ? "bg-[#141414]" : "bg-white"
                                )}>
                                    <svg className="w-2.5 h-2.5 text-[#F59120]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <div className="flex flex-col gap-0.5">
                        <h4 className={cn(
                            "font-aileron font-bold transition-colors text-[17px]",
                            isDark ? "text-white/90" : "text-neutral-900"
                        )}>
                            {feature.text}
                        </h4>
                        {feature.description && (
                            <p className={cn(
                                "text-sm font-geist leading-relaxed opacity-60",
                                isDark ? "text-white/60" : "text-neutral-600"
                            )}>
                                {feature.description}
                            </p>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );
}

export function ApiPageIntroSection(props: ApiPageIntroSectionProps) {
    const { 
        variant, 
        theme = "dark", 
        spacingSize = "standard", 
        heading, 
        headingHighlight, 
        subheading, 
        richText, 
        secondaryRichText,
        features,
        ctas, 
        media 
    } = props;

    const isDark = theme === "dark";
    const py = spacingSize === "large" ? "py-32" : spacingSize === "compact" ? "py-16" : "py-24";

    return (
        <section 
            className={cn(
                "relative w-full overflow-hidden",
                isDark ? "bg-[#0B0B0B] text-white" : "bg-white text-neutral-900",
                py
            )}
        >
            {/* Background Ambient Glow */}
            {isDark && (
                <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-[#F59120]/5 blur-[120px] pointer-events-none z-0" 
                />
            )}

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className={cn(
                    "flex flex-col gap-16 items-center",
                    variant === "api-split-media-right" && "lg:flex-row text-left",
                    variant === "api-split-media-left" && "lg:flex-row-reverse text-left",
                    variant === "api-centered-minimal" && "text-center",
                    variant === "api-simple-text" && "text-left",
                    variant === "api-feature-list-split" && "lg:flex-row text-left",
                    variant === "api-heading-top-split" && "flex-col text-left",
                    variant === "api-code-split" && "lg:flex-row text-left",
                    variant === "api-feature-grid-split" && "lg:flex-row text-left",
                    variant === "api-cards-grid" && "flex-col text-left"
                )}>
                    
                    {variant === "api-heading-top-split" ? (
                        <div className="flex flex-col gap-12 w-full">
                            {/* Header Section */}
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="flex flex-col gap-6 max-w-4xl"
                            >
                                {subheading && (
                                    <span className="uppercase tracking-widest text-sm font-semibold text-[#F59120]">
                                        {subheading}
                                    </span>
                                )}
                                
                                <HeadingRenderer 
                                    text={heading} 
                                    highlight={headingHighlight}
                                    theme={theme}
                                    className="text-4xl lg:text-5xl"
                                />

                                <div 
                                    className={cn(
                                        "font-geist text-lg leading-relaxed opacity-70 prose prose-invert max-w-none",
                                        !isDark && "prose-neutral"
                                    )}
                                    dangerouslySetInnerHTML={{ __html: richText }}
                                />
                            </motion.div>

                            {/* Two Column Section */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                {/* Left Column: Media */}
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="w-full"
                                >
                                    <VisualContent media={media!} variant={variant} />
                                </motion.div>

                                {/* Right Column: Secondary Text & CTAs */}
                                <motion.div 
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="flex flex-col gap-8"
                                >
                                    {secondaryRichText && (
                                        <div 
                                            className={cn(
                                                "font-geist text-lg leading-relaxed opacity-70 prose prose-invert max-w-none",
                                                !isDark && "prose-neutral"
                                            )}
                                            dangerouslySetInnerHTML={{ __html: secondaryRichText }}
                                        />
                                    )}

                                    {ctas && ctas.length > 0 && (
                                        <CTAButtonGroup ctas={ctas} theme={theme} />
                                    )}
                                </motion.div>
                            </div>
                        </div>
                    ) : (
                        <>
                            {/* Content Column */}
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={cn(
                                    "flex flex-col gap-6",
                                    (variant === "api-split-media-right" || variant === "api-split-media-left" || variant === "api-feature-list-split" || variant === "api-code-split") ? "lg:w-1/2" : "w-full"
                                )}
                            >
                                {subheading && (
                                    <span className="uppercase tracking-widest text-sm font-semibold text-[#F59120]">
                                        {subheading}
                                    </span>
                                )}
                                
                                <HeadingRenderer 
                                    text={heading} 
                                    highlight={headingHighlight}
                                    theme={theme}
                                    className={cn(
                                        "leading-tight",
                                        (variant === "api-split-media-right" || variant === "api-split-media-left" || variant === "api-feature-list-split" || variant === "api-code-split" || variant === "api-feature-grid-split") ? "text-3xl lg:text-[42px]" : "text-4xl lg:text-5xl"
                                    )}
                                />

                                <div 
                                    className={cn(
                                        "font-geist text-lg leading-relaxed opacity-70 prose prose-invert max-w-none",
                                        variant === "api-simple-text" && "text-xl",
                                        !isDark && "prose-neutral"
                                    )}
                                    dangerouslySetInnerHTML={{ __html: richText }}
                                />

                                {variant === "api-feature-grid-split" && features && features.length > 0 ? (
                                    <FeatureCardList features={features} theme={theme} />
                                ) : variant === "api-cards-grid" && features && features.length > 0 ? (
                                    <StatCardsGrid features={features} theme={theme} />
                                ) : (
                                    features && features.length > 0 && (
                                        <FeatureList features={features} />
                                    )
                                )}

                                {secondaryRichText && (
                                    <div 
                                        className={cn(
                                            "font-geist text-lg leading-relaxed opacity-70 prose prose-invert max-w-none",
                                            !isDark && "prose-neutral"
                                        )}
                                        dangerouslySetInnerHTML={{ __html: secondaryRichText }}
                                    />
                                )}

                                {ctas && ctas.length > 0 && (
                                    <CTAButtonGroup ctas={ctas} theme={theme} />
                                )}
                            </motion.div>

                            {/* Media Column */}
                            {media && (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className={cn(
                                        "w-full",
                                        (variant === "api-split-media-right" || variant === "api-split-media-left" || variant === "api-feature-list-split" || variant === "api-code-split" || variant === "api-feature-grid-split") ? "lg:w-1/2" : "mt-8"
                                    )}
                                >
                                    <VisualContent media={media} variant={variant} theme={theme} />
                                </motion.div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
