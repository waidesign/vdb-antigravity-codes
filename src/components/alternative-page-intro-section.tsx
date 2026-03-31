"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

/* ─────────────────────────────────────────────
 * 1. TypeScript Interfaces
 * ───────────────────────────────────────────── */

export interface AlternativeIntroCTA {
    text: string;
    href: string;
    variant?: "primary" | "outline" | "ghost";
}

export interface AlternativeIntroLogo {
    image: {
        url: string;
        alt?: string;
    };
    link?: string;
}

export interface AlternativeIntroListItem {
    text: string;
}

export interface AlternativeIntroSectionProps {
    variant?: "text-stack-left" | "mixed-content-long";
    theme?: "dark" | "light";
    spacingSize?: "standard" | "large" | "compact";
    
    // Core content
    subheading?: string;
    heading: string;
    headingHighlight?: string;
    richText: string;
    secondaryRichText?: string;

    // Mixed Content Long specific fields
    sectionTwoHeading?: string;
    tertiaryRichText?: string;
    logos?: AlternativeIntroLogo[];
    quaternaryRichText?: string;
    ctas?: AlternativeIntroCTA[];
    quinquenaryRichText?: string;
    listHeading?: string;
    listStyle?: "numbers" | "bullets";
    listItems?: AlternativeIntroListItem[];
}

/* ─────────────────────────────────────────────
 * 2. Internal Components
 * ───────────────────────────────────────────── */

function HeadingRenderer({
    text,
    highlight,
    className,
    theme = "dark",
    as: Component = "h2"
}: {
    text: string;
    highlight?: string;
    className?: string;
    theme?: "dark" | "light";
    as?: "h2" | "h3" | "h1";
}) {
    if (!text) return null;
    const isDark = theme === "dark";
    
    const colorClass = isDark ? "text-white" : "text-neutral-900";
    const finalClass = cn("font-aileron font-semibold", colorClass, className);

    if (!highlight || !text.includes(highlight)) {
        return <Component className={finalClass}>{text}</Component>;
    }

    const parts = text.split(highlight);
    return (
        <Component className={finalClass}>
            {parts[0]}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F59120] to-[#9747FF]">
                {highlight}
            </span>
            {parts[1]}
        </Component>
    );
}

function CTAButtonGroup({ ctas, theme }: { ctas: AlternativeIntroCTA[], theme: "dark" | "light" }) {
    if (!ctas || ctas.length === 0) return null;
    
    return (
        <div className="flex flex-wrap items-center gap-4 mt-4">
            {ctas.map((cta, i) => {
                const buttonVariant = cta.variant === "primary" ? "primary" : (cta.variant === "outline" ? "outline" : "ghost");
                
                return (
                    <Link 
                        key={i}
                        href={cta.href}
                        className={cn(
                            buttonVariants({ variant: buttonVariant, size: "xl" }),
                            "h-14 px-8 rounded-lg font-aileron font-bold transition-all duration-300",
                            cta.variant === "primary" && "shadow-lg shadow-orange-500/20",
                            cta.variant === "outline" && (theme === "dark" ? "border-white/20 text-white hover:bg-white/5" : "border-neutral-200 text-neutral-900 hover:bg-neutral-50"),
                            cta.variant === "ghost" && (theme === "dark" ? "text-white/70 hover:text-white hover:bg-white/5" : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50")
                        )}
                    >
                        {cta.text}
                    </Link>
                );
            })}
        </div>
    );
}

function LogoGrid({ logos, theme = "dark" }: { logos: AlternativeIntroLogo[], theme?: "dark" | "light" }) {
    if (!logos || logos.length === 0) return null;
    const isDark = theme === "dark";

    return (
        <div className="flex flex-wrap items-center justify-start gap-4 py-8">
            {logos.map((logo, i) => {
                const Content = (
                    <div className={cn(
                        "group relative flex items-center justify-center p-6 h-24 w-44 rounded-xl transition-all duration-300 border overflow-hidden",
                        isDark 
                            ? "bg-[#111111] border-white/5 shadow-none hover:bg-white/5 hover:border-white/10" 
                            : "bg-white border-neutral-100 shadow-sm hover:shadow-md hover:-translate-y-1"
                    )}>
                        <Image 
                            src={logo.image.url} 
                            alt={logo.image.alt || "Brand Logo"} 
                            width={140} 
                            height={60} 
                            className={cn(
                                "w-full h-full object-contain transition-all duration-500",
                                isDark && "filter brightness-150 grayscale group-hover:grayscale-0",
                                !isDark && "filter grayscale group-hover:grayscale-0"
                            )}
                        />
                    </div>
                );
// ...

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

function NumberedBulletList({ 
    items, 
    style = "numbers", 
    theme 
}: { 
    items: AlternativeIntroListItem[], 
    style?: "numbers" | "bullets",
    theme: "dark" | "light"
}) {
    if (!items || items.length === 0) return null;
    const isDark = theme === "dark";

    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mt-4">
            {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                    <span className={cn(
                        "flex-shrink-0 font-aileron font-bold text-sm",
                        style === "numbers" ? "min-w-[20px]" : "mt-1.5 w-1.5 h-1.5 rounded-full",
                        isDark ? "text-white/40" : "text-neutral-400",
                        style === "bullets" && (isDark ? "bg-[#F59120]" : "bg-neutral-300")
                    )}>
                        {style === "numbers" ? `${i + 1}.` : ""}
                    </span>
                    <span className={cn(
                        "font-geist text-[16px]",
                        isDark ? "text-white/80" : "text-neutral-700"
                    )}>
                        {item.text}
                    </span>
                </li>
            ))}
        </ul>
    );
}

/* ─────────────────────────────────────────────
 * 3. Main Component
 * ───────────────────────────────────────────── */

export function AlternativeIntroSection(props: AlternativeIntroSectionProps) {
    const { 
        variant = "text-stack-left",
        theme = "dark", 
        spacingSize = "standard", 
        subheading,
        heading, 
        headingHighlight, 
        richText, 
        secondaryRichText,
        
        // Mixed Content Long props
        sectionTwoHeading,
        tertiaryRichText,
        logos,
        quaternaryRichText,
        ctas,
        quinquenaryRichText,
        listHeading,
        listStyle = "numbers",
        listItems
    } = props;

    const isDark = theme === "dark";

    const spacingClasses = {
        standard: "py-24",
        large: "py-32",
        compact: "py-16"
    };

    const currentSpacing = spacingClasses[spacingSize as keyof typeof spacingClasses] || spacingClasses.standard;

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    // ── Layout A: Text Stack Left (Simple) ──
    if (variant === "text-stack-left") {
        return (
            <section className={cn(
                "relative w-full overflow-hidden",
                isDark ? "bg-[#0B0B0B]" : "bg-white",
                currentSpacing
            )}>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="w-full text-left"
                    >
                        {subheading && (
                            <motion.span variants={itemVariants} className={cn(
                                "inline-block font-aileron font-bold text-sm tracking-wider uppercase mb-6",
                                isDark ? "text-white/40" : "text-neutral-400"
                            )}>
                                {subheading}
                            </motion.span>
                        )}
                        
                        <motion.div variants={itemVariants}>
                            <HeadingRenderer 
                                text={heading} 
                                highlight={headingHighlight} 
                                theme={theme}
                                className="text-4xl lg:text-5xl leading-[1.1] mb-8"
                            />
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-col gap-6">
                            <div 
                                className={cn(
                                    "font-geist text-lg lg:text-xl leading-relaxed opacity-70 prose prose-invert max-w-none",
                                    !isDark && "prose-neutral text-neutral-600"
                                )}
                                dangerouslySetInnerHTML={{ __html: richText }}
                            />
                            {secondaryRichText && (
                                <div 
                                    className={cn(
                                        "font-geist text-lg lg:text-xl leading-relaxed opacity-70 prose prose-invert max-w-none",
                                        !isDark && "prose-neutral text-neutral-600"
                                    )}
                                    dangerouslySetInnerHTML={{ __html: secondaryRichText }}
                                />
                            )}
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        );
    }

    // ── Layout B: Mixed Content Long ──
    return (
        <section className={cn(
            "relative w-full overflow-hidden",
            isDark ? "bg-[#0B0B0B]" : "bg-white",
            currentSpacing
        )}>
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="w-full"
                >
                    {/* Header Group */}
                    <div className="flex flex-col gap-2 mb-10">
                        {subheading && (
                            <motion.h2 variants={itemVariants} className={cn(
                                "text-2xl lg:text-3xl font-aileron font-bold",
                                isDark ? "text-white" : "text-neutral-900"
                            )}>
                                {subheading}
                            </motion.h2>
                        )}
                        <motion.div variants={itemVariants}>
                            <HeadingRenderer 
                                text={heading} 
                                highlight={headingHighlight} 
                                theme={theme}
                                as="h2"
                                className="text-3xl lg:text-4xl"
                            />
                        </motion.div>
                    </div>

                    {/* Section 1 Rich Text */}
                    <motion.div 
                        variants={itemVariants}
                        className={cn(
                            "font-geist text-[16px] lg:text-[18px] leading-relaxed opacity-80 prose prose-invert max-w-none mb-12",
                            !isDark && "prose-neutral text-neutral-600"
                        )}
                        dangerouslySetInnerHTML={{ __html: richText }}
                    />

                    {/* Section 2 Heading & Text */}
                    {sectionTwoHeading && (
                        <div className="flex flex-col gap-6 mb-12">
                            <motion.h2 variants={itemVariants} className={cn(
                                "text-2xl lg:text-3xl font-aileron font-bold",
                                isDark ? "text-white" : "text-neutral-900"
                            )}>
                                {sectionTwoHeading}
                            </motion.h2>
                            {tertiaryRichText && (
                                <motion.div 
                                    variants={itemVariants}
                                    className={cn(
                                        "font-geist text-[16px] lg:text-[18px] leading-relaxed opacity-80 prose prose-invert max-w-none",
                                        !isDark && "prose-neutral text-neutral-600"
                                    )}
                                    dangerouslySetInnerHTML={{ __html: tertiaryRichText }}
                                />
                            )}
                        </div>
                    )}

                    {/* Logo Section */}
                    {logos && logos.length > 0 && (
                        <motion.div variants={itemVariants}>
                            <LogoGrid logos={logos} theme={theme} />
                        </motion.div>
                    )}

                    {/* Section 3 (Post Logos) */}
                    {quaternaryRichText && (
                        <motion.div 
                            variants={itemVariants}
                            className={cn(
                                "font-geist text-[16px] lg:text-[18px] leading-relaxed opacity-80 prose prose-invert max-w-none mb-8",
                                !isDark && "prose-neutral text-neutral-600"
                            )}
                            dangerouslySetInnerHTML={{ __html: quaternaryRichText }}
                        />
                    )}

                    {/* CTAs */}
                    {ctas && ctas.length > 0 && (
                        <motion.div variants={itemVariants} className="mb-10">
                            <CTAButtonGroup ctas={ctas} theme={theme} />
                        </motion.div>
                    )}

                    {/* Quinquenary Text (Post CTAs) */}
                    {quinquenaryRichText && (
                        <motion.div 
                            variants={itemVariants}
                            className={cn(
                                "font-geist text-[16px] lg:text-[18px] leading-relaxed opacity-80 prose prose-invert max-w-none mb-10",
                                !isDark && "prose-neutral text-neutral-600"
                            )}
                            dangerouslySetInnerHTML={{ __html: quinquenaryRichText }}
                        />
                    )}

                    {/* Footer List Section */}
                    {(listHeading || (listItems && listItems.length > 0)) && (
                        <motion.div variants={itemVariants} className="border-t border-neutral-100 pt-10 mt-12 dark:border-white/5">
                            {listHeading && (
                                <h3 className={cn(
                                    "text-lg lg:text-xl font-aileron font-bold mb-6",
                                    isDark ? "text-white" : "text-neutral-900"
                                )}>
                                    {listHeading}
                                </h3>
                            )}
                            <NumberedBulletList items={listItems || []} style={listStyle} theme={theme} />
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
