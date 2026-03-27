import React from 'react';
import { Column } from './column';
import { cn } from '@/lib/utils';
import { BlockRenderer } from './block-renderer';

interface UniqueDownloadAppSectionProps {
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

export function UniqueDownloadAppSectionV1({ 
    title, 
    description, 
    headerBlocks,
    layout = 'two-column', 
    columns, 
    className,
    theme,
    isDark
}: UniqueDownloadAppSectionProps) {
    if (!columns || columns.length === 0) return null;

    const effectiveIsDark = isDark || theme === 'dark';

    return (
        <section className={cn(
            "relative w-full py-24 px-6 lg:px-20 overflow-hidden",
            effectiveIsDark ? "bg-[#000000] text-white" : "bg-white text-neutral-900",
            className
        )}>
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#9747ff]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Area */}
                {(title || description || headerBlocks) && (
                    <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
                        {headerBlocks ? (
                            <BlockRenderer blocks={headerBlocks} theme={theme} isDark={effectiveIsDark} />
                        ) : (
                            <>
                                {title && <h2 className={cn(
                                    "font-aileron font-bold text-3xl lg:text-5xl mb-6",
                                    effectiveIsDark ? "text-white" : "text-neutral-900"
                                )}>{title}</h2>}
                                {description && <p className={cn(
                                    "font-geist text-lg leading-relaxed",
                                    effectiveIsDark ? "text-neutral-400" : "text-neutral-600"
                                )}>{description}</p>}
                            </>
                        )}
                    </div>
                )}

                {/* Content Grid */}
                <div className={cn("grid gap-12 lg:gap-24 items-center", layoutMap[layout] || layoutMap['two-column'])}>
                    {columns.map((col, index) => (
                        <Column 
                            key={index} 
                            blocks={col.blocks} 
                            verticalAlignment={col.verticalAlignment || 'center'} 
                            theme={theme}
                            isDark={effectiveIsDark}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default UniqueDownloadAppSectionV1;
