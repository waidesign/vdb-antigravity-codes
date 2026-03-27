import React from 'react';
import { Column, ColumnProps } from './column';
import { cn } from '@/lib/utils';

export type UniqueHeroSectionProps = {
    layout: 'one-column' | 'two-column' | 'three-column' | 'four-column';
    columns: ColumnProps[];
    className?: string;
    theme?: 'light' | 'dark';
    isDark?: boolean;
};

const layoutMap = {
    'one-column': 'grid-cols-1 w-full',
    'two-column': 'grid-cols-1 lg:grid-cols-2',
    'three-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    'four-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
};

export function UniqueHeroSectionV4({ layout, columns, className, theme, isDark }: UniqueHeroSectionProps) {
    if (!columns || columns.length === 0) return null;

    const effectiveIsDark = isDark || theme === 'dark';

    return (
        <section className={cn(
            "relative w-full py-16 md:py-24 px-6 lg:px-12 text-center overflow-hidden", 
            effectiveIsDark ? "bg-[#171717] dark" : "bg-neutral-50",
            // Override the default text-neutral-400 from richText blocks so it stands out
            effectiveIsDark && "[&_.text-neutral-400]:!text-white/90",
            className
        )}>
            <div className="max-w-7xl mx-auto">
                <div className={cn("relative z-10 grid gap-12", layoutMap[layout] || layoutMap['one-column'])}>
                    {columns.map((col, index) => (
                        <Column 
                            key={index} 
                            blocks={col.blocks} 
                            verticalAlignment={col.verticalAlignment || 'center'} 
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

export default UniqueHeroSectionV4;
