import React from 'react';
import { Column, ColumnProps } from './column';
import { cn } from '@/lib/utils';

export type CardsSectionProps = {
    layout: 'one-column' | 'two-column' | 'three-column' | 'four-column';
    columns: ColumnProps[];
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

export function CardsSection({ layout, columns, className, theme, isDark }: CardsSectionProps) {
    if (!columns || columns.length === 0) return null;

    const effectiveIsDark = isDark || theme === 'dark';

    return (
        <section className={cn(
            "relative w-full py-20 px-6 lg:px-20",
            effectiveIsDark ? "bg-[#000000] text-white dark" : "bg-white text-neutral-900",
            className
        )}>
            <div className={cn("max-w-7xl mx-auto grid gap-12 lg:gap-16", layoutMap[layout] || layoutMap['one-column'])}>
                {columns.map((col, index) => (
                    <Column 
                        key={index} 
                        blocks={col.blocks} 
                        verticalAlignment={col.verticalAlignment} 
                        theme={theme}
                        isDark={effectiveIsDark}
                    />
                ))}
            </div>
        </section>
    );
}

export default CardsSection;
