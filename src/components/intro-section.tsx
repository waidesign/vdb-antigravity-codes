"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Sub-components
import { HeadingRenderer } from "./intro/heading-renderer";
import { CTAButtonGroup } from "./intro/cta-button-group";
import { StatCardsGrid } from "./intro/stat-cards-grid";
import { FeatureList } from "./intro/feature-list";
import { FeatureCardList } from "./intro/feature-card-list";
import { LogoGrid } from "./intro/logo-grid";
import { NumberedBulletList } from "./intro/numbered-bullet-list";
import { VisualContent, type IntroMedia } from "./intro/visual-content";

export interface IntroSectionProps {
  variant:
    | "split-media-right"
    | "split-media-left"
    | "centered"
    | "text-only"
    | "feature-split"
    | "heading-top-split"
    | "code-split"
    | "feature-grid-split"
    | "stat-cards"
    | "text-stack"
    | "mixed-content";

  theme?: "dark" | "light";
  spacingSize?: "standard" | "large" | "compact";

  heading: string;
  headingHighlight?: string;
  subheading?: string;
  richText: string;
  secondaryRichText?: string;

  // Features
  features?: {
    stat?: string;
    text: string;
    description?: string;
    icon?: string;
  }[];

  // CTAs
  ctas?: {
    text: string;
    href: string;
    variant?: "primary" | "outline" | "ghost";
  }[];

  // Media
  media?: IntroMedia;

  // Mixed Content specifics (from alternative-page-intro-section)
  sectionTwoHeading?: string;
  tertiaryRichText?: string;
  logos?: {
    image: { url: string; alt?: string };
    link?: string;
  }[];
  quaternaryRichText?: string;
  quinquenaryRichText?: string;
  listHeading?: string;
  listStyle?: "numbers" | "bullets";
  listItems?: { text: string }[];
}

export function IntroSection(props: IntroSectionProps) {
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
    media,
    
    // Mixed Content props
    sectionTwoHeading,
    tertiaryRichText,
    logos,
    quaternaryRichText,
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
  const currentSpacing = spacingClasses[spacingSize] || spacingClasses.standard;

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

  // ── Layout Router ──

  // Case A: Heading Top Split (Media & Content below Heading)
  if (variant === "heading-top-split") {
    return (
      <section className={cn("relative w-full overflow-hidden", isDark ? "bg-[#0B0B0B]" : "bg-white", currentSpacing)}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="flex flex-col gap-12 w-full">
            <div className="flex flex-col gap-6 max-w-4xl">
              {subheading && (
                <motion.span variants={itemVariants} className="uppercase tracking-widest text-sm font-semibold text-[#F59120]">
                  {subheading}
                </motion.span>
              )}
              <motion.div variants={itemVariants}>
                <HeadingRenderer text={heading} highlight={headingHighlight} theme={theme} className="text-4xl lg:text-5xl" />
              </motion.div>
              <motion.div variants={itemVariants} className={cn("font-geist text-lg leading-relaxed opacity-70 prose prose-invert max-w-none", !isDark && "prose-neutral text-neutral-600")} dangerouslySetInnerHTML={{ __html: richText }} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={itemVariants} className="w-full">
                <VisualContent media={media!} variant={variant} theme={theme} />
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col gap-8">
                {secondaryRichText && (
                  <div className={cn("font-geist text-lg leading-relaxed opacity-70 prose prose-invert max-w-none", !isDark && "prose-neutral text-neutral-600")} dangerouslySetInnerHTML={{ __html: secondaryRichText }} />
                )}
                {ctas && <CTAButtonGroup ctas={ctas} theme={theme} />}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Case B: Mixed Content (Long format)
  if (variant === "mixed-content") {
    return (
      <section className={cn("relative w-full overflow-hidden", isDark ? "bg-[#0B0B0B]" : "bg-white", currentSpacing)}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="w-full">
            <div className="flex flex-col gap-2 mb-10">
              {subheading && (
                <motion.h2 variants={itemVariants} className={cn("text-2xl lg:text-3xl font-aileron font-bold", isDark ? "text-white" : "text-neutral-900")}>
                  {subheading}
                </motion.h2>
              )}
              <motion.div variants={itemVariants}>
                <HeadingRenderer text={heading} highlight={headingHighlight} theme={theme} as="h2" className="text-3xl lg:text-4xl" />
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className={cn("font-geist text-[16px] lg:text-[18px] leading-relaxed opacity-80 prose prose-invert max-w-none mb-12", !isDark && "prose-neutral text-neutral-600")} dangerouslySetInnerHTML={{ __html: richText }} />

            {sectionTwoHeading && (
              <div className="flex flex-col gap-6 mb-12">
                <motion.h2 variants={itemVariants} className={cn("text-2xl lg:text-3xl font-aileron font-bold", isDark ? "text-white" : "text-neutral-900")}>
                  {sectionTwoHeading}
                </motion.h2>
                {tertiaryRichText && (
                  <motion.div variants={itemVariants} className={cn("font-geist text-[16px] lg:text-[18px] leading-relaxed opacity-80 prose prose-invert max-w-none", !isDark && "prose-neutral text-neutral-600")} dangerouslySetInnerHTML={{ __html: tertiaryRichText }} />
                )}
              </div>
            )}

            {logos && <motion.div variants={itemVariants}><LogoGrid logos={logos} /></motion.div>}

            {quaternaryRichText && (
              <motion.div variants={itemVariants} className={cn("font-geist text-[16px] lg:text-[18px] leading-relaxed opacity-80 prose prose-invert max-w-none mb-8", !isDark && "prose-neutral text-neutral-600")} dangerouslySetInnerHTML={{ __html: quaternaryRichText }} />
            )}

            {ctas && <motion.div variants={itemVariants} className="mb-10"><CTAButtonGroup ctas={ctas} theme={theme} /></motion.div>}

            {quinquenaryRichText && (
              <motion.div variants={itemVariants} className={cn("font-geist text-[16px] lg:text-[18px] leading-relaxed opacity-80 prose prose-invert max-w-none mb-10", !isDark && "prose-neutral text-neutral-600")} dangerouslySetInnerHTML={{ __html: quinquenaryRichText }} />
            )}

            {(listHeading || listItems) && (
              <motion.div variants={itemVariants} className="border-t border-neutral-100 pt-10 mt-12 dark:border-white/5">
                {listHeading && <h3 className={cn("text-lg lg:text-xl font-aileron font-bold mb-6", isDark ? "text-white" : "text-neutral-900")}>{listHeading}</h3>}
                <NumberedBulletList items={listItems || []} style={listStyle} theme={theme} />
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    );
  }

  // Case C: Standard Split / Centered / Text Only
  const isCentered = variant === "centered";
  const isSplit = variant.includes("split");
  const isMediaLeft = variant === "split-media-left";
  
  return (
    <section className={cn("relative w-full overflow-hidden", isDark ? "bg-[#0B0B0B] text-white" : "bg-white text-neutral-900", currentSpacing)}>
       {isDark && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-[#F59120]/5 blur-[120px] pointer-events-none z-0" />
      )}
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className={cn(
          "flex flex-col gap-16 items-center",
          isCentered ? "text-center" : "text-left",
          isSplit && "lg:flex-row",
          isMediaLeft && "lg:flex-row-reverse"
        )}>
          {/* Content Column */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={containerVariants}
            className={cn("flex flex-col gap-6", isSplit ? "lg:w-1/2" : "w-full", isCentered && "items-center")}
          >
            {subheading && (
              <motion.span variants={itemVariants} className="uppercase tracking-widest text-sm font-semibold text-[#F59120]">
                {subheading}
              </motion.span>
            )}
            
            <motion.div variants={itemVariants}>
              <HeadingRenderer 
                text={heading} 
                highlight={headingHighlight} 
                theme={theme} 
                className={cn("leading-tight", (isSplit || variant === "feature-grid-split") ? "text-3xl lg:text-[42px]" : "text-4xl lg:text-5xl")} 
              />
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className={cn(
                "font-geist text-lg leading-relaxed opacity-70 prose prose-invert max-w-none", 
                variant === "text-only" && "text-xl",
                !isDark && "prose-neutral text-neutral-600"
              )} 
              dangerouslySetInnerHTML={{ __html: richText }} 
            />

            <motion.div variants={itemVariants}>
              {variant === "feature-grid-split" && features ? (
                <FeatureCardList features={features} theme={theme} />
              ) : variant === "stat-cards" && features ? (
                <StatCardsGrid features={features} theme={theme} />
              ) : (
                features && features.length > 0 && <FeatureList features={features} theme={theme} />
              )}
            </motion.div>

            {secondaryRichText && (
              <motion.div variants={itemVariants} className={cn("font-geist text-lg leading-relaxed opacity-70 prose prose-invert max-w-none", !isDark && "prose-neutral text-neutral-600")} dangerouslySetInnerHTML={{ __html: secondaryRichText }} />
            )}

            {ctas && <motion.div variants={itemVariants}><CTAButtonGroup ctas={ctas} theme={theme} /></motion.div>}
          </motion.div>

          {/* Media Column (if any) */}
          {media && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className={cn("w-full", isSplit ? "lg:w-1/2" : "mt-8")}
            >
              <VisualContent media={media} variant={variant} theme={theme} />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
