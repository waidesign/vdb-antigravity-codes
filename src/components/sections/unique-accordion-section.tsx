import React from 'react';
import { Column } from './column';
import { cn } from '@/lib/utils';
import { BlockRenderer } from './block-renderer';

interface UniqueAccordionSectionProps {
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
    'one-column': 'grid-cols-1',
    'two-column': 'grid-cols-1 lg:grid-cols-2',
    'three-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    'four-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
};

export function UniqueAccordionSection({ 
    title, 
    description, 
    headerBlocks,
    layout = 'two-column', 
    columns, 
    className,
    theme,
    isDark
}: UniqueAccordionSectionProps) {
    if (!columns || columns.length === 0) return null;

    const effectiveIsDark = isDark || theme === 'dark';

    return (
        <section className={cn(
            "relative w-full py-24 px-6 lg:px-20 overflow-hidden",
            effectiveIsDark ? "bg-[#000000] text-white" : "bg-white text-neutral-900",
            className
        )}>
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Area */}
                {(title || description || headerBlocks) && (
                    <div className="max-w-4xl mb-16 lg:mb-20">
                        {headerBlocks ? (
                            <BlockRenderer blocks={headerBlocks} theme={theme} isDark={effectiveIsDark} />
                        ) : (
                            <>
                                {title && (
                                    <h2 className={cn(
                                        "font-aileron font-bold text-3xl lg:text-5xl mb-6",
                                        effectiveIsDark ? "text-white" : "text-neutral-900"
                                    )}>{title}</h2>
                                )}
                                {description && (
                                    <p className={cn(
                                        "font-geist text-lg leading-relaxed max-w-2xl",
                                        effectiveIsDark ? "text-neutral-400" : "text-neutral-600"
                                    )}>{description}</p>
                                )}
                            </>
                        )}
                    </div>
                )}

                {/* Content Grid */}
                <div className={cn("grid gap-12 lg:gap-24 items-start", layoutMap[layout] || layoutMap['two-column'])}>
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
            </div>
        </section>
    );
}

export default UniqueAccordionSection;
