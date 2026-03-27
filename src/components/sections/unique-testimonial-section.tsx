import React from 'react';
import { Column } from './column';
import { cn } from '@/lib/utils';

interface UniqueTestimonialSectionProps {
    title?: string;
    columns: any[];
    layout?: string;
    className?: string;
    theme?: 'light' | 'dark';
    isDark?: boolean;
}

const layoutMap: Record<string, string> = {
    'one-column': 'grid-cols-1',
    'two-column': 'grid-cols-1 md:grid-cols-2',
};

export function UniqueTestimonialSection({ 
    title, 
    columns, 
    layout = 'one-column', 
    className,
    theme,
    isDark
}: UniqueTestimonialSectionProps) {
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
                {title && (
                    <div className="text-center mb-16">
                        <h2 className={cn(
                            "font-aileron font-bold text-3xl lg:text-4xl",
                            effectiveIsDark ? "text-white" : "text-neutral-900"
                        )}>
                            {title}
                        </h2>
                    </div>
                )}

                {/* Content Area */}
                <div className={cn("grid gap-16", layoutMap[layout] || layoutMap['one-column'])}>
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

export default UniqueTestimonialSection;
