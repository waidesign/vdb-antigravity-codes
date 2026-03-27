"use client";
import React from 'react';
import { cn } from "@/lib/utils";
import { Column, ColumnProps } from './column';

interface RowProps {
    layout?: 'one-column' | 'two-column' | 'three-column' | 'four-column' | 'five-column' | 'six-column' | 'logo-grid';
    columns: ColumnProps[];
    className?: string;
    verticalAlignment?: 'start' | 'center' | 'end';
}

interface UniqueCodeBlockSectionProps {
    rows: RowProps[];
    theme?: 'light' | 'dark';
    className?: string;
    containerClassName?: string;
}

export const UniqueCodeBlockSection: React.FC<UniqueCodeBlockSectionProps> = ({
    rows,
    theme = 'light',
    className,
    containerClassName
}) => {
    const effectiveIsDark = theme === 'dark';

    const getLayoutClass = (layout?: string) => {
        switch (layout) {
            case 'one-column': return 'grid-cols-1';
            case 'two-column': return 'grid-cols-1 lg:grid-cols-2';
            case 'three-column': return 'grid-cols-1 md:grid-cols-3';
            case 'four-column': return 'grid-cols-2 md:grid-cols-4';
            case 'six-column': return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6';
            default: return 'grid-cols-1';
        }
    };

    return (
        <section className={cn(
            "relative w-full overflow-hidden",
            effectiveIsDark ? "bg-[#000000] text-white dark" : "bg-white text-neutral-900",
            className
        )}>
            <div className={cn("max-w-7xl mx-auto px-6 py-24 flex flex-col gap-12", containerClassName)}>
                {rows.map((row, rowIndex) => (
                    <div 
                        key={rowIndex}
                        className={cn(
                            "grid gap-12 w-full",
                            getLayoutClass(row.layout),
                            row.verticalAlignment === 'center' ? "items-center" : "items-start",
                            row.className
                        )}
                    >
                        {row.columns.map((column, colIndex) => (
                            <Column 
                                key={colIndex} 
                                {...column} 
                                theme={theme}
                                isDark={effectiveIsDark}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};
