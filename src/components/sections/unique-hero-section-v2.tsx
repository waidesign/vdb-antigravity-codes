import React from 'react';
import { Column, ColumnProps } from './column';
import { cn } from '@/lib/utils';

export type UniqueHeroSectionV2Props = {
    layout: 'one-column' | 'two-column' | 'three-column' | 'four-column';
    columns: ColumnProps[];
    className?: string;
    theme?: 'light' | 'dark';
    isDark?: boolean;
};

const layoutMap = {
    'one-column': 'grid-cols-1 max-w-4xl mx-auto',
    'two-column': 'grid-cols-1 lg:grid-cols-2 lg:gap-24', // Extra gap for this specific v2 study layout
    'three-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    'four-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
};

export function UniqueHeroSectionV2({ layout, columns, className, theme, isDark }: UniqueHeroSectionV2Props) {
    if (!columns || columns.length === 0) return null;

    const effectiveIsDark = isDark || theme === 'dark';

    return (
        <section className={cn(
            "relative w-full py-24 px-6 lg:px-20",
            effectiveIsDark ? "bg-[#000000] text-white dark" : "bg-white text-neutral-900",
            className
        )}>
            <div className="max-w-7xl mx-auto">
                <div className={cn("grid gap-12 items-center", layoutMap[layout] || layoutMap['two-column'])}>
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

export default UniqueHeroSectionV2;
