import React from 'react';
import { cn } from '@/lib/utils';
import { BlockRenderer } from './block-renderer';
import { Button } from '@/components/ui/button';

interface BrochurePageSectionProps {
    leftPanel: {
        title: string;
        blocks: any[];
    };
    rightPanel: {
        title: string;
        description: string;
        blocks: any[];
        submitLabel?: string;
    };
    className?: string;
    theme?: 'light' | 'dark';
    isDark?: boolean;
}

export function BrochurePageSection({ 
    leftPanel,
    rightPanel,
    className,
    theme,
    isDark
}: BrochurePageSectionProps) {
    const effectiveIsDark = isDark || theme === 'dark';

    return (
        <section
            className={cn("relative w-full overflow-hidden", className)}
            style={{ padding: "100px 0", background: effectiveIsDark ? "#000000" : "#F9FAFB" }}
        >
            {/* Ambient gradient orbs */}
            {effectiveIsDark && (
                <>
                    <div
                        className="absolute pointer-events-none"
                        style={{
                            right: "-5%",
                            top: "15%",
                            width: 600,
                            height: 600,
                            background: "radial-gradient(circle, rgba(151,71,255,0.35) 0%, transparent 70%)",
                            filter: "blur(120px)",
                            zIndex: 0,
                        }}
                    />
                    <div
                        className="absolute pointer-events-none"
                        style={{
                            left: "-10%",
                            bottom: "0%",
                            width: 500,
                            height: 500,
                            background: "radial-gradient(circle, rgba(245,145,32,0.2) 0%, transparent 70%)",
                            filter: "blur(120px)",
                            zIndex: 0,
                        }}
                    />
                </>
            )}

            <div className="relative z-10 section-content px-10 lg:px-20">
                {/* Main layout: two columns, asymmetric */}
                <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-20">

                    {/* Left Column — Narrative & Social Proof */}
                    <div className="flex flex-col gap-10 w-full lg:w-[50%] lg:pt-8">
                        {/* Badge */}
                        <span
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full self-start font-aileron font-semibold text-xs tracking-wider text-white/90 uppercase"
                            style={{
                                background: "linear-gradient(90deg, rgba(245,145,32,0.15) 0%, rgba(151,71,255,0.15) 100%)",
                                border: "1px solid rgba(151,71,255,0.3)",
                            }}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="url(#badge-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <defs>
                                    <linearGradient id="badge-grad" x1="0" y1="0" x2="24" y2="0">
                                        <stop offset="0%" stopColor="#F59120" />
                                        <stop offset="100%" stopColor="#9747FF" />
                                    </linearGradient>
                                </defs>
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="16" y1="13" x2="8" y2="13" />
                                <line x1="16" y1="17" x2="8" y2="17" />
                            </svg>
                            API Brochure
                        </span>

                        {/* Heading */}
                        <h2
                            className="font-aileron font-semibold"
                            style={{
                                fontSize: 48,
                                lineHeight: "1.1em",
                                letterSpacing: "-0.02em",
                                ...(effectiveIsDark ? {
                                    background: "linear-gradient(135deg, #FFFFFF 0%, #A9ADB5 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                } : { color: "#111" }),
                            }}
                        >
                            {leftPanel.title}
                        </h2>

                        {/* Description */}
                        <p
                            className="font-geist max-w-lg"
                            style={{ fontSize: 17, lineHeight: "1.65em", color: effectiveIsDark ? "#A9ADB5" : "#6B7280" }}
                        >
                            {rightPanel.description}
                        </p>

                        {/* Benefits from BlockRenderer */}
                        <div className="flex flex-col gap-1">
                            <BlockRenderer blocks={leftPanel.blocks} theme="dark" isDark={true} />
                        </div>
                    </div>

                    {/* Right Column — Form Card */}
                    <div className="w-full lg:w-[50%] lg:sticky lg:top-8">
                        <div
                            className="relative rounded-2xl p-8 lg:p-10"
                            style={{
                                background: effectiveIsDark
                                    ? "linear-gradient(145deg, rgba(22,24,26,0.95) 0%, rgba(10,10,12,0.98) 100%)"
                                    : "#FFFFFF",
                                border: effectiveIsDark
                                    ? "1px solid rgba(140,146,157,0.25)"
                                    : "1px solid #E5E7EB",
                                boxShadow: effectiveIsDark
                                    ? "0 0 80px rgba(151,71,255,0.06), 0 25px 50px rgba(0,0,0,0.5)"
                                    : "0 25px 50px rgba(0,0,0,0.08)",
                            }}
                        >
                            {/* Subtle gradient border glow at top */}
                            <div
                                className="absolute top-0 left-[10%] right-[10%] h-px"
                                style={{
                                    background: "linear-gradient(90deg, transparent, rgba(245,145,32,0.5), rgba(151,71,255,0.5), transparent)",
                                }}
                            />

                            {/* Form header */}
                            <div className="mb-8">
                                <h3
                                    className="font-aileron font-semibold mb-2"
                                    style={{
                                        fontSize: 24,
                                        lineHeight: "1.3em",
                                        color: effectiveIsDark ? "#FFFFFF" : "#111",
                                    }}
                                >
                                    {rightPanel.title}
                                </h3>
                                <div
                                    className="w-12 h-0.5 rounded-full"
                                    style={{
                                        background: "linear-gradient(90deg, #F59120, #9747FF)",
                                    }}
                                />
                            </div>

                            {/* Form fields via BlockRenderer */}
                            <div className="mb-8">
                                <BlockRenderer blocks={rightPanel.blocks} theme={theme} isDark={effectiveIsDark} />
                            </div>

                            {/* Submit */}
                            <Button
                                variant="primary"
                                size="lg"
                                className="w-full px-8 py-5 font-aileron font-semibold text-base"
                            >
                                {rightPanel.submitLabel || 'GET MY API BROCHURE'}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BrochurePageSection;
