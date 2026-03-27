import React from 'react';
import { Column } from './column';
import { cn } from '@/lib/utils';
import { BlockRenderer } from './block-renderer';

interface SalesHistoryPrivateSalesSectionProps {
    title?: string;
    description?: string;
    headerBlocks?: any[];
    layout?: string;
    columns: any[];
    className?: string;
    theme?: 'light' | 'dark';
    isDark?: boolean;
}

const layoutMap: Record<string, string> = {
    'one-column': 'grid-cols-1 w-full',
    'two-column': 'grid-cols-1 lg:grid-cols-2',
    'three-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    'four-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    'five-column': 'grid-cols-1 md:grid-cols-3 lg:grid-cols-5',
    'six-column': 'grid-cols-1 md:grid-cols-3 lg:grid-cols-6',
    'seven-column': 'grid-cols-1 md:grid-cols-4 lg:grid-cols-7',
    'eight-column': 'grid-cols-1 md:grid-cols-4 lg:grid-cols-8',
    'nine-column': 'grid-cols-1 md:grid-cols-3 lg:grid-cols-9',
    'ten-column': 'grid-cols-1 md:grid-cols-5 lg:grid-cols-10',
};

export function SalesHistoryPrivateSalesSection({ 
    title, 
    description, 
    headerBlocks,
    layout = 'one-column', 
    columns, 
    className,
    theme,
    isDark
}: SalesHistoryPrivateSalesSectionProps) {
    if (!columns || columns.length === 0) return null;

    const effectiveIsDark = isDark || theme === 'dark';

    return (
        <section className={cn(
            "relative w-full py-16 lg:py-24 px-6 lg:px-12 overflow-hidden",
            effectiveIsDark ? "bg-[#000000] text-white" : "bg-white text-neutral-900",
            className
        )}>
            <div className="max-w-6xl mx-auto relative z-10 w-full">
                {/* Optional Header Area */}
                {(title || description || headerBlocks) && (
                    <div className="text-left w-full mb-10 lg:mb-16">
                        {headerBlocks ? (
                            <BlockRenderer blocks={headerBlocks} theme={theme} isDark={effectiveIsDark} />
                        ) : (
                            <>
                                {title && <h2 className={cn(
                                    "font-aileron font-bold text-3xl lg:text-5xl mb-4",
                                    effectiveIsDark ? "text-white" : "text-neutral-900"
                                )}>{title}</h2>}
                                {description && <p className={cn(
                                    "font-geist text-lg leading-relaxed max-w-3xl",
                                    effectiveIsDark ? "text-neutral-400" : "text-neutral-600"
                                )}>{description}</p>}
                            </>
                        )}
                    </div>
                )}

                {/* Content columns render */}
                <div className={cn("grid gap-12 lg:gap-16 w-full", layoutMap[layout] || layoutMap['one-column'])}>
                    {columns.map((col, index) => (
                        <Column 
                            key={index} 
                            blocks={col.blocks} 
                            verticalAlignment={col.verticalAlignment || 'start'} 
                            appearance={col.appearance || 'default'}
                            theme={theme}
                            isDark={effectiveIsDark}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SalesHistoryPrivateSalesSection;
