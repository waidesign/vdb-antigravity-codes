"use client";

import Image from "next/image";
import Link from "next/link";
import { DatabaseZap, LayoutGrid, TrendingUp, Database, Workflow, FileCode } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";
import { cn } from "@/lib/utils";

const features = [
    {
        icon: DatabaseZap,
        title: "Fast Response Times",
        description: "Easily manage your active plans and subscriptions through our intuitive interface. Upgrade, downgrade, or modify your plan with just a few clicks.",
    },
    {
        icon: LayoutGrid,
        title: "Scalability",
        description: "Our infrastructure adapts effortlessly to changing demands, maintaining top performance and reliability.",
    },
    {
        icon: TrendingUp,
        title: "99.99% Uptime",
        description: "Data is sourced from trusted manufacturer and industry datasets.",
    },
    {
        icon: Database,
        title: "Unmatched Data",
        description: "Optimized for quick lookups without unpredictable slowdowns or limits.",
    },
    {
        icon: Workflow,
        title: "Easy Integration",
        description: "Supports US, Canada, and Europe vehicles across multiple model years.",
    },
    {
        icon: FileCode,
        title: "Clear Documentation",
        description: "Actively maintained with updates, documentation, and technical support.",
    },
];

export function ProsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const shelfRef = useRef<HTMLDivElement>(null);
    
    // Motion value for the horizontal position
    const x = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 300, damping: 30 });
    
    const [constraints, setConstraints] = useState({ left: 0, right: 0 });
    const [progress, setProgress] = useState(0);

    // Update constraints and progress mapping
    useEffect(() => {
        const updateConstraints = () => {
            if (containerRef.current && shelfRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const shelfWidth = shelfRef.current.scrollWidth;
                const maxDrag = Math.min(0, containerWidth - shelfWidth);
                setConstraints({ left: maxDrag, right: 0 });
            }
        };

        updateConstraints();
        window.addEventListener("resize", updateConstraints);
        return () => window.removeEventListener("resize", updateConstraints);
    }, []);

    // Monitor x to update progress bar (0 to 1)
    useEffect(() => {
        return x.on("change", (latest) => {
            if (constraints.left !== 0) {
                const p = Math.abs(latest / constraints.left);
                setProgress(Math.min(1, Math.max(0, p)));
            }
        });
    }, [constraints.left, x]);

    const scrollToPage = (pageIndex: number) => {
        if (constraints.left !== 0) {
            // Simple page logic: index 0 = 0, index 1 = full width
            const target = pageIndex === 0 ? 0 : constraints.left;
            animate(x, target, { duration: 0.6, ease: "easeOut" });
        }
    };

    return (
        <section className="w-full relative overflow-hidden" style={{ padding: "80px 0", background: "#000000" }}>
            <div className="section-content flex flex-col gap-20">
                {/* Header - kept with padding to align with site content */}
                <div className="px-10 lg:px-20 flex flex-col gap-2 items-center text-center">
                    <div className="flex items-center gap-2 flex-wrap justify-center">
                        <span className="font-aileron font-semibold" style={{ fontSize: 40, lineHeight: "1.2em", color: "#A9ADB5" }}>
                            Vehicle Databases Provides{" "}
                        </span>
                    </div>
                    <span className="font-aileron font-semibold text-white" style={{ fontSize: 40, lineHeight: "1.2em" }}>
                        Fast, Reliable, and Easy Data Access
                    </span>
                </div>

                {/* Draggable Shelf */}
                <div ref={containerRef} className="w-full cursor-grab active:cursor-grabbing">
                    <motion.div
                        ref={shelfRef}
                        drag="x"
                        dragConstraints={constraints}
                        dragElastic={0.1}
                        style={{ x: springX }}
                        className="flex gap-10 px-10 lg:px-20"
                    >
                        {features.map((feature, idx) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={feature.title}
                                    className="flex flex-col gap-4 p-10 rounded-3xl shrink-0"
                                    style={{
                                        background: "#16181A",
                                        border: "1px solid #8C929D",
                                        width: "380px",
                                        height: "280px"
                                    }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="shrink-0" style={{ width: 32, height: 32 }}>
                                            <svg width="0" height="0" className="absolute">
                                                <defs>
                                                    <linearGradient id={`icon-gradient-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                                        <stop offset="0%" stopColor="#F59120" />
                                                        <stop offset="100%" stopColor="#9747FF" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <span style={{ color: "#F59120" }}>
                                                <Icon
                                                    size={32}
                                                    style={{ stroke: `url(#icon-gradient-${idx})` }}
                                                />
                                            </span>
                                        </div>
                                        <h4 className="font-aileron font-semibold text-white" style={{ fontSize: 24, lineHeight: "1.333em" }}>
                                            {feature.title}
                                        </h4>
                                    </div>
                                    <p className="font-geist" style={{ fontSize: 16, lineHeight: "1.5em", color: "#A9ADB5" }}>
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Progress Navigator - now controlled by drag position */}
                <div className="flex justify-center items-center gap-3">
                    {[0, 1].map((i) => {
                        // Logic for active dot: page 0 is roughly 0-0.5 progress, page 1 is 0.5-1.0
                        const isActive = i === 0 ? progress < 0.5 : progress >= 0.5;
                        return (
                            <button
                                key={i}
                                type="button"
                                onClick={() => scrollToPage(i)}
                                aria-label={`Go to page ${i + 1}`}
                                className="relative h-2 rounded-full overflow-hidden bg-neutral-800 transition-all duration-300"
                                style={{
                                    width: isActive ? 160 : 80,
                                }}
                            >
                                <div 
                                    className={cn(
                                        "absolute inset-0 transition-opacity duration-300",
                                        isActive ? "opacity-100" : "opacity-0"
                                    )}
                                    style={{
                                        background: "linear-gradient(90deg, #F59120 0%, #9747FF 100%)"
                                    }}
                                />
                            </button>
                        );
                    })}
                </div>

                {/* CTA Buttons */}
                <div className="flex items-center justify-center gap-4 px-10">
                    <Link
                        href="#"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-aileron font-semibold text-base text-white transition-opacity hover:opacity-80 shrink-0"
                        style={{ background: "linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)" }}
                    >
                        Start for FREE
                        <Image src="/images/arrow-white.svg" alt="" width={5} height={9} />
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-aileron font-semibold text-base text-white border border-white transition-opacity hover:opacity-80 shrink-0"
                    >
                        Schedule a Demo
                        <Image src="/images/calendar-icon.svg" alt="" width={13} height={13} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
