import React from 'react';
import { Column } from './column';
import { cn } from '@/lib/utils';
import { BlockRenderer } from './block-renderer';

interface TrustLogoSectionProps {
    blocks: any[];
    className?: string;
    theme?: 'light' | 'dark';
    isDark?: boolean;
}

export function TrustLogoSection({ 
    blocks,
    className,
    theme,
    isDark
}: TrustLogoSectionProps) {
    if (!blocks || blocks.length === 0) return null;

    const effectiveIsDark = isDark || theme === 'dark';

    return (
        <section className={cn(
            "relative w-full py-16 px-6 lg:px-20",
            effectiveIsDark ? "bg-[#0A0A0A] text-white" : "bg-white text-neutral-900",
            className
        )}>
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <BlockRenderer blocks={blocks} theme={theme} isDark={effectiveIsDark} />
            </div>
        </section>
    );
}

export default TrustLogoSection;
