"use client";

import Image from "next/image";
import Link from "next/link";
import { DatabaseZap, LayoutGrid, TrendingUp, Database, Workflow, FileCode } from "lucide-react";
import { useState } from "react";

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

// How many cards fit in view at once
const CARDS_PER_VIEW = 3;
const totalPages = Math.ceil(features.length / CARDS_PER_VIEW);

export function ProsSection() {
    const [activePage, setActivePage] = useState(0);

    const visibleFeatures = features.slice(
        activePage * CARDS_PER_VIEW,
        activePage * CARDS_PER_VIEW + CARDS_PER_VIEW
    );

    return (
        <section className="w-full" style={{ padding: "80px 0", background: "#000000" }}>
            <div className="section-content px-10 lg:px-20 flex flex-col gap-20">
                {/* Header */}
                <div className="flex flex-col gap-2 items-center text-center">
                    <div className="flex items-center gap-2 flex-wrap justify-center">
                        <span className="font-aileron font-semibold" style={{ fontSize: 40, lineHeight: "1.2em", color: "#A9ADB5" }}>
                            Vehicle Databases Provides{" "}
                        </span>
                    </div>
                    <span className="font-aileron font-semibold text-white" style={{ fontSize: 40, lineHeight: "1.2em" }}>
                        Fast, Reliable, and Easy Data Access
                    </span>
                </div>

                {/* Feature Cards — paginated, 3 per view, max-width 400px each */}
                <div className="flex gap-10 justify-center">
                    {visibleFeatures.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={feature.title}
                                className="flex flex-col gap-4 p-10 rounded-3xl transition-transform duration-200 hover:-translate-y-1"
                                style={{
                                    background: "#16181A",
                                    border: "1px solid #8C929D",
                                    maxWidth: 400,
                                    flex: "1 1 0",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    {/* Gradient icon using SVG trick */}
                                    <div className="shrink-0" style={{ width: 32, height: 32 }}>
                                        <svg width="0" height="0" className="absolute">
                                            <defs>
                                                <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#F59120" />
                                                    <stop offset="100%" stopColor="#9747FF" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <span style={{ color: "#F59120" }}>
                                            <Icon
                                                size={32}
                                                style={{ stroke: "url(#icon-gradient)" }}
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
                </div>

                {/* Progress Navigator */}
                <div className="flex justify-center items-center gap-3">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            onClick={() => setActivePage(i)}
                            aria-label={`Go to page ${i + 1}`}
                            className="transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400/60"
                            style={{
                                width: activePage === i ? 160 : 80,
                                height: 8,
                                background: activePage === i
                                    ? "linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)"
                                    : "rgba(140,146,157,0.4)",
                            }}
                        />
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex items-center justify-center gap-4">
                    <Link
                        href="#"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-aileron font-semibold text-base text-white transition-opacity hover:opacity-80"
                        style={{ background: "linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)" }}
                    >
                        Start for FREE
                        <Image src="/images/arrow-white.svg" alt="" width={5} height={9} />
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-aileron font-semibold text-base text-white border border-white transition-opacity hover:opacity-80"
                    >
                        Schedule a Demo
                        <Image src="/images/calendar-icon.svg" alt="" width={13} height={13} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
