import React from 'react';
import { cn } from '@/lib/utils';
import { BlockRenderer } from './block-renderer';

interface UniqueMakeHeroSectionProps {
    backgroundImage: string;
    blocks: any[];
    className?: string;
    theme?: 'light' | 'dark';
    isDark?: boolean;
}

export function UniqueMakeHeroSection({ 
    backgroundImage,
    blocks,
    className,
    theme,
    isDark
}: UniqueMakeHeroSectionProps) {
    if (!blocks || blocks.length === 0) return null;

    const effectiveIsDark = isDark || theme === 'dark';

    return (
        <section className={cn("relative w-full min-h-[500px] lg:min-h-[600px] flex items-center py-20 px-6 lg:px-20", className)}>
            {/* Background Image */}
            <div 
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            
            {/* Dark Overlay for Text Readability */}
            <div className={cn(
                "absolute inset-0 z-10",
                effectiveIsDark ? "bg-black/60 md:bg-black/50" : "bg-white/40 md:bg-white/30"
            )} />

            {/* Content Container */}
            <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-start bg-transparent">
                <div className="w-full max-w-4xl text-left">
                    <BlockRenderer blocks={blocks} theme={theme} isDark={effectiveIsDark} />
                </div>
            </div>
        </section>
    );
}

export default UniqueMakeHeroSection;
