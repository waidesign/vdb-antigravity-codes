import React from 'react';
import { Column } from './column';
import { cn } from '@/lib/utils';

interface ApiCardsSectionProps {
    title?: string;
    columns: any[];
    layout?: string;
    className?: string;
    theme?: 'light' | 'dark';
    isDark?: boolean;
}

const layoutMap: Record<string, string> = {
    'one-column': 'grid-cols-1',
    'two-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2',
    'three-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
};

export function ApiCardsSection({ 
    title, 
    columns, 
    layout = 'three-column', 
    className,
    theme,
    isDark
}: ApiCardsSectionProps) {
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
                    <div className="mb-16">
                        <h2 className={cn(
                            "font-aileron font-bold text-3xl lg:text-4xl tracking-tight",
                            effectiveIsDark ? "text-white" : "text-neutral-900"
                        )}>
                            {title}
                        </h2>
                    </div>
                )}

                {/* Content Area */}
                <div className={cn("grid gap-6", layoutMap[layout] || layoutMap['three-column'])}>
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
            
            {/* Background Accents (optional, to match premium feel) */}
            <div className={cn(
                "absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none",
                effectiveIsDark ? "bg-white/[0.02]" : "bg-black/[0.02]"
            )} />
        </section>
    );
}

export default ApiCardsSection;
