import React from 'react';
import { Column } from './column';
import { cn } from '@/lib/utils';

interface TableSectionProps {
    title?: string;
    description?: string;
    columns: any[];
    layout?: string;
    className?: string;
    theme?: 'light' | 'dark';
    isDark?: boolean;
}

const layoutMap: Record<string, string> = {
    'one-column': 'grid-cols-1',
};

export function TableSection({ 
    title, 
    description,
    columns, 
    layout = 'one-column', 
    className,
    theme,
    isDark
}: TableSectionProps) {
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
                {(title || description) && (
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        {title && (
                            <h2 className={cn(
                                "font-aileron font-bold text-3xl lg:text-4xl mb-4 tracking-tight",
                                effectiveIsDark ? "text-white" : "text-neutral-900"
                            )}>
                                {title}
                            </h2>
                        )}
                        {description && (
                            <p className={cn(
                                "font-aileron text-lg leading-relaxed",
                                effectiveIsDark ? "text-neutral-400" : "text-neutral-600"
                            )}>
                                {description}
                            </p>
                        )}
                    </div>
                )}

                {/* Content Area */}
                <div className={cn("grid gap-12", layoutMap[layout] || layoutMap['one-column'])}>
                    {columns.map((col, index) => (
                        <Column 
                            key={index} 
                            blocks={col.blocks} 
                            verticalAlignment={col.verticalAlignment || 'top'} 
                            theme={theme}
                            isDark={effectiveIsDark}
                        />
                    ))}
                </div>
            </div>
            
            {/* Subtle Background Accent */}
            <div className={cn(
                "absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-transparent to-transparent",
                effectiveIsDark ? "via-neutral-800" : "via-neutral-200"
            )} />
        </section>
    );
}

export default TableSection;
