import React from 'react';
import { Column } from './column';
import { cn } from '@/lib/utils';

interface UniqueVerticalStepperSectionProps {
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
    'two-column': 'grid-cols-1 md:grid-cols-2',
};

export function UniqueVerticalStepperSection({ 
    title, 
    description,
    columns, 
    layout = 'one-column', 
    className,
    theme,
    isDark
}: UniqueVerticalStepperSectionProps) {
    if (!columns || columns.length === 0) return null;

    const effectiveIsDark = isDark || theme === 'dark';

    return (
        <section className={cn(
            "relative w-full py-24 px-6 lg:px-20 overflow-hidden",
            effectiveIsDark ? "bg-[#000000] text-white" : "bg-white text-neutral-900",
            className
        )}>
            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header Area */}
                {(title || description) && (
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        {title && (
                            <h2 className={cn(
                                "font-aileron font-bold text-3xl lg:text-4xl mb-6",
                                effectiveIsDark ? "text-white" : "text-neutral-900"
                            )}>
                                {title}
                            </h2>
                        )}
                        {description && (
                            <p className={cn(
                                "font-aileron text-lg lg:text-xl leading-relaxed",
                                effectiveIsDark ? "text-neutral-400" : "text-neutral-600"
                            )}>
                                {description}
                            </p>
                        )}
                    </div>
                )}

                {/* Content Area */}
                <div className={cn("grid gap-16", layoutMap[layout] || layoutMap['one-column'])}>
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

export default UniqueVerticalStepperSection;
