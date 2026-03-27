import React from 'react';
import { Column, ColumnProps } from './column';
import { cn } from '@/lib/utils';

export type SectionProps = {
    layout: 'one-column' | 'two-column' | 'three-column' | 'four-column' | 'five-column' | 'six-column' | 'seven-column' | 'eight-column' | 'nine-column' | 'ten-column';
    alignment?: 'left' | 'center' | 'right';
    columns: ColumnProps[];
    className?: string;
    containerClassName?: string;
    id?: string;
    theme?: 'light' | 'dark';
    isDark?: boolean;
};

const layoutMap = {
    'one-column': 'grid-cols-1 w-full',
    'two-column': 'grid-cols-1 lg:grid-cols-2',
    'three-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    'four-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    'five-column': 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
    'six-column': 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
    'seven-column': 'grid-cols-2 md:grid-cols-4 lg:grid-cols-7',
    'eight-column': 'grid-cols-2 md:grid-cols-4 lg:grid-cols-8',
    'nine-column': 'grid-cols-3 md:grid-cols-5 lg:grid-cols-9',
    'ten-column': 'grid-cols-3 md:grid-cols-5 lg:grid-cols-10',
};

const alignmentMap = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
};

export function Section({ 
    layout = 'one-column', 
    alignment = 'center',
    columns, 
    className,
    containerClassName,
    id,
    theme = 'dark',
    isDark = true
}: SectionProps) {
    if (!columns || columns.length === 0) return null;

    return (
        <section 
            id={id}
            className={cn(
                "relative w-full py-12 lg:py-24 px-6 lg:px-12 transition-colors duration-300", 
                theme === 'dark' ? "bg-[#000000] text-white dark" : "bg-white text-black",
                className
            )}
        >
            <div className={cn("max-w-7xl mx-auto flex flex-col", alignmentMap[alignment], containerClassName)}>
                <div className={cn(
                    "relative z-10 grid gap-8 lg:gap-12 w-full", 
                    layoutMap[layout] || layoutMap['one-column']
                )}>
                    {columns.map((col, index) => (
                        <Column 
                            key={index} 
                            {...col}
                            isDark={isDark}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Section;
