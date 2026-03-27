import React from 'react';
import { Column } from './column';
import { cn } from '@/lib/utils';
import { BlockRenderer } from './block-renderer';

interface UniqueFactsSectionProps {
    title?: string;
    columns: any[];
    footerBlocks?: any[];
    layout?: string;
    className?: string;
    theme?: 'light' | 'dark';
    isDark?: boolean;
}

const layoutMap: Record<string, string> = {
    'one-column': 'grid-cols-1',
    'two-column': 'grid-cols-1 md:grid-cols-2',
    'three-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    'four-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
};

export function UniqueFactsSection({ 
    title, 
    columns, 
    footerBlocks,
    layout = 'two-column', 
    className,
    theme,
    isDark
}: UniqueFactsSectionProps) {
    if (!columns || columns.length === 0) return null;

    const effectiveIsDark = isDark || theme === 'dark';

    return (
        <section className={cn(
            "relative w-full py-24 px-6 lg:px-20 overflow-hidden",
            effectiveIsDark ? "bg-[#000000] text-white dark" : "bg-white text-neutral-900",
            className
        )}>
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Area */}
                {title && (
                    <div className="mb-16 lg:mb-20">
                        <h2 className={cn(
                            "font-aileron font-bold text-lg uppercase tracking-wider",
                            effectiveIsDark ? "text-white" : "text-neutral-900"
                        )}>{title}</h2>
                    </div>
                )}

                {/* Metrics Grid */}
                <div className={cn("grid gap-y-16 gap-x-12 lg:gap-x-24 mb-20", layoutMap[layout] || layoutMap['two-column'])}>
                    {columns.map((col, index) => (
                        <Column 
                            key={index} 
                            blocks={col.blocks} 
                            verticalAlignment={col.verticalAlignment || 'start'} 
                            theme={theme}
                            isDark={effectiveIsDark}
                        />
                    ))}
                </div>

                {/* Footer Area */}
                {footerBlocks && (
                    <div className={cn(
                        "flex flex-col items-center text-center max-w-4xl mx-auto pt-10 border-t",
                        effectiveIsDark ? "border-neutral-900" : "border-neutral-200"
                    )}>
                        <BlockRenderer blocks={footerBlocks} theme={theme} isDark={effectiveIsDark} />
                    </div>
                )}
            </div>
        </section>
    );
}

export default UniqueFactsSection;
