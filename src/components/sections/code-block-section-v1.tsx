import React from 'react';
import { Column, ColumnProps } from './column';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';

export type CodeBlockSectionProps = {
    layout: 'one-column' | 'two-column' | 'three-column' | 'four-column';
    columns: ColumnProps[];
    heading?: string;
    description?: string;
    className?: string;
    theme?: 'light' | 'dark';
    isDark?: boolean;
};

const layoutMap = {
    'one-column': 'grid-cols-1',
    'two-column': 'grid-cols-1 lg:grid-cols-2',
    'three-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    'four-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
};

export function CodeBlockSectionV1({ layout, columns, heading, description, className, theme, isDark }: CodeBlockSectionProps) {
    if (!columns || columns.length === 0) return null;

    const effectiveIsDark = isDark || theme === 'dark';

    return (
        <section className={cn(
            "relative w-full py-20 px-6 lg:px-20",
            effectiveIsDark ? "bg-[#000000] text-white" : "bg-white text-neutral-900",
            className
        )}>
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                
                {/* Optional Top-level Heading for the Section itself */}
                {(heading || description) && (
                    <div className="flex flex-col gap-4 max-w-3xl">
                        {heading && (
                            <h2 className={cn(
                                "font-aileron font-semibold text-3xl lg:text-4xl",
                                effectiveIsDark ? "text-white" : "text-neutral-900"
                            )}>
                                {heading}
                            </h2>
                        )}
                        {description && (
                            <p className={cn(
                                "font-geist text-base leading-relaxed",
                                effectiveIsDark ? "text-neutral-400" : "text-neutral-600"
                            )}>
                                {description}
                            </p>
                        )}
                    </div>
                )}

                {/* Grid Layout of Columns rendering their respective blocks */}
                <div className={cn("grid gap-8 lg:gap-10 items-stretch", layoutMap[layout] || layoutMap['two-column'])}>
                    {columns.map((col, index) => (
                        <Column 
                            key={index} 
                            blocks={col.blocks} 
                            verticalAlignment={col.verticalAlignment} 
                            appearance={col.appearance || 'card'} // Defaulting to 'card' purely for this specific code block section vibe
                            theme={theme}
                            isDark={effectiveIsDark}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CodeBlockSectionV1;
