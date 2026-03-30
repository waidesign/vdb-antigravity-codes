"use client";

import React from "react";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* ──────────────────────────────────────────────────────────────────────────
 * 0. Base Card Primitives (Migrated from card.tsx)
 * ────────────────────────────────────────────────────────────────────────── */

const cardVariants = cva(
    "rounded-xl border transition-all duration-200",
    {
        variants: {
            variant: {
                default:
                    "bg-neutral-800/40 border-[#6F6F6F] light:border-neutral-700",
                elevated:
                    "bg-neutral-800/60 border-[#6F6F6F] light:border-neutral-700 shadow-card",
                glass:
                    "glass",
                bordered:
                    "bg-transparent border-[#6F6F6F] light:border-neutral-700",
                brand:
                    "bg-neutral-800/40 border-brand-primary/30 shadow-[0_0_20px_rgba(245,145,32,0.08)]",
                dark:
                    "bg-neutral-900 border-[#6F6F6F]",
            },
            hoverable: {
                true: "hover:border-neutral-600 hover:shadow-card-hover cursor-pointer hover-lift",
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
        <h3 className={cn("text-lg font-semibold text-neutral-100 leading-tight", className)} {...props} />
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
            className={cn("flex items-center gap-3 px-5 sm:px-6 py-4 border-t border-[#6F6F6F] light:border-neutral-700", className)}
            {...props}
        />
    );
}

import { Button } from "./button";
import { Progress } from "./progress";
import { Divider } from "./divider";
import { CodeBlock } from "./code-block";
import { Table } from "./table";

/* ──────────────────────────────────────────────────────────────────────────
 * 1. Types & Interfaces (Discriminated Unions)
 * ────────────────────────────────────────────────────────────────────────── */

export type CardVariant =
  | "h3Body"
  | "iconBodyInline"
  | "iconBodyNormal"
  | "h3ImageBodyBorderless"
  | "h3BodyRedirect"
  | "iconH3BodyCTA"
  | "iconBodyProgressBody"
  | "logoBodyDividerBody"
  | "bodyOnly"
  | "h3BodyListsBodyCTA"
  | "twoColumnH3BodyListsBodyImage"
  | "technical";

interface BaseCardProps {
  className?: string;
  variant: CardVariant;
  hoverable?: boolean;
}

export type CardsProps = BaseCardProps & (
  | { variant: "h3Body"; heading: string; richText: string }
  | { variant: "iconBodyInline"; icon: string; richText: string }
  | { variant: "iconBodyNormal"; icon: string; richText: string }
  | { variant: "h3ImageBodyBorderless"; heading: string; image: string; richText: string }
  | { variant: "h3BodyRedirect"; heading: string; richText: string; link: string }
  | { variant: "iconH3BodyCTA"; icon: string; heading: string; richText: string; cta: { label: string; href: string; variant?: "primary" | "secondary" } }
  | { variant: "iconBodyProgressBody"; icon: string; richText: string; progress: number; bottomText?: string }
  | { variant: "logoBodyDividerBody"; logo: string; richText: string; bottomText: string }
  | { variant: "bodyOnly"; richText: string }
  | { variant: "h3BodyListsBodyCTA"; heading: string; richText: string; listItems: { text: string }[]; cta?: { label: string; href: string } }
  | { variant: "twoColumnH3BodyListsBodyImage"; heading: string; richText: string; listItems: { text: string }[]; image: string }
  | { variant: "technical"; icon: string; heading: string; subheading?: string; codeSnippet?: string; subheading2?: string; tableData?: any; richText?: string }
);

/* ──────────────────────────────────────────────────────────────────────────
 * 2. Helper Components
 * ────────────────────────────────────────────────────────────────────────── */

const IconWrapper = ({ name, className }: { name: string; className?: string }) => {
  const Icon = (LucideIcons as any)[name];
  if (!Icon) return null;
  return (
    <div className={cn("relative flex items-center justify-center w-12 h-12 rounded-full border border-white/10 overflow-hidden", className)}>
        {/* Visual Glow from reference */}
        <div 
            className="absolute inset-0 opacity-20"
            style={{ background: "linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)" }}
        />
        <Icon className="relative z-10 w-6 h-6 text-white" />
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
 * 3. Main Component Dispatcher
 * ────────────────────────────────────────────────────────────────────────── */

export function Cards(props: CardsProps) {
  const { variant, className, hoverable = true } = props;

  const cardClasses = cn(
    "relative overflow-hidden group",
    variant === "h3BodyRedirect" && "cursor-pointer transition-transform duration-300 hover:-translate-y-1",
    className
  );

  const renderContent = () => {
    switch (props.variant) {
      case "h3Body":
        return (
          <div className="p-8 flex flex-col gap-4">
            <CardTitle className="text-2xl font-bold">{props.heading}</CardTitle>
            <RichText content={props.richText} />
          </div>
        );

      case "iconBodyInline":
        return (
          <div className="p-8 flex items-start gap-5">
            <IconWrapper name={props.icon} className="shrink-0" />
            <div className="flex flex-col gap-1 pt-1">
              <RichText content={props.richText} />
            </div>
          </div>
        );

      case "iconBodyNormal":
        return (
          <div className="p-8 flex flex-col gap-6">
            <IconWrapper name={props.icon} />
            <RichText content={props.richText} />
          </div>
        );

      case "h3ImageBodyBorderless":
        return (
          <div className="flex flex-col h-full">
            <div className="relative w-full aspect-video bg-neutral-800 overflow-hidden">
                <img src={props.image} alt={props.heading} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 flex flex-col gap-4">
              <CardTitle className="text-xl font-bold">{props.heading}</CardTitle>
              <RichText content={props.richText} />
            </div>
          </div>
        );

      case "h3BodyRedirect":
        return (
          <Link href={props.link} className="block h-full">
            <div className="p-8 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold">{props.heading}</CardTitle>
                <LucideIcons.ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-brand-primary transition-colors" />
              </div>
              <RichText content={props.richText} />
            </div>
          </Link>
        );

      case "iconH3BodyCTA":
        return (
          <div className="p-8 flex flex-col gap-6 items-start h-full">
            <IconWrapper name={props.icon} />
            <div className="flex flex-col gap-3">
              <CardTitle className="text-xl font-bold">{props.heading}</CardTitle>
              <RichText content={props.richText} />
            </div>
            <div className="mt-auto">
              <Link href={props.cta.href}>
                <Button variant={props.cta.variant || "secondary"} size="sm">
                  {props.cta.label}
                </Button>
              </Link>
            </div>
          </div>
        );

      case "iconBodyProgressBody":
        return (
          <div className="p-8 flex flex-col gap-6">
            <IconWrapper name={props.icon} />
            <RichText content={props.richText} />
            <div className="space-y-4">
                <Progress value={props.progress} variant="brand" size="md" />
                {props.bottomText && <RichText content={props.bottomText} />}
            </div>
          </div>
        );

      case "logoBodyDividerBody":
        return (
          <div className="p-8 flex flex-col gap-6">
            <div className="h-10 w-auto flex items-center">
                <img src={props.logo} alt="Logo" className="h-full object-contain filter brightness-0 invert opacity-80" />
            </div>
            <RichText content={props.richText} />
            <Divider className="opacity-20" />
            <RichText content={props.bottomText} />
          </div>
        );

      case "bodyOnly":
        return (
          <div className="p-8">
            <RichText content={props.richText} />
          </div>
        );

      case "h3BodyListsBodyCTA":
        return (
          <div className="p-8 flex flex-col gap-6 h-full">
            <div className="flex flex-col gap-4">
              <CardTitle className="text-2xl font-bold">{props.heading}</CardTitle>
              <RichText content={props.richText} />
            </div>
            <ul className="flex flex-col gap-3">
              {props.listItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <LucideIcons.Check className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-300">{item.text}</span>
                </li>
              ))}
            </ul>
            {props.cta && (
              <div className="mt-auto pt-4">
                <Link href={props.cta.href}>
                  <Button variant="primary">
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
            <div className="flex-1 p-8 lg:p-12 flex flex-col gap-8">
               <div className="flex flex-col gap-4">
                 <CardTitle className="text-3xl font-bold">{props.heading}</CardTitle>
                 <RichText content={props.richText} />
               </div>
               <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {props.listItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <LucideIcons.Check className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-300">{item.text}</span>
                    </li>
                  ))}
               </ul>
            </div>
            <div className="w-full lg:w-2/5 min-h-[300px] relative bg-neutral-800 border-l border-white/5">
                <img src={props.image} alt={props.heading} className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        );

      case "technical":
        return (
          <div className="p-8 lg:p-10 flex flex-col gap-8">
             <div className="flex items-center gap-4">
                <IconWrapper name={props.icon} />
                <CardTitle className="text-2xl font-bold">{props.heading}</CardTitle>
             </div>
             
             {props.subheading && (
                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500">{props.subheading}</h4>
             )}

             {props.codeSnippet && (
                <div className="w-full">
                   <CodeBlock code={props.codeSnippet} language="json" />
                </div>
             )}

             {props.subheading2 && (
                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500">{props.subheading2}</h4>
             )}

             {props.tableData && props.tableData.length > 0 && (
                <div className="overflow-hidden rounded-xl border border-white/5">
                   <Table 
                    data={props.tableData} 
                    columns={Object.keys(props.tableData[0]).map(key => ({
                        key,
                        label: key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' '),
                    }))}
                   />
                </div>
             )}

             {props.richText && <RichText content={props.richText} />}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card variant="dark" hoverable={hoverable && variant !== "h3BodyRedirect"} className={cardClasses}>
      {renderContent()}
    </Card>
  );
}
