import React from 'react';
import { Column, ColumnProps } from './column';
import { cn } from '@/lib/utils';

export type SectionProps = {
    layout: 'one-column' | 'two-column' | 'three-column' | 'four-column';
    columns: ColumnProps[];
    className?: string;
};

const layoutMap = {
    'one-column': 'grid-cols-1',
    'two-column': 'grid-cols-1 lg:grid-cols-2',
    'three-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    'four-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
};

export function Section({ layout, columns, className }: SectionProps) {
    if (!columns || columns.length === 0) return null;

    return (
        <section className={cn("relative w-full py-20 px-6 lg:px-20 bg-[#000000]", className)}>
            <div className={cn("max-w-7xl mx-auto grid gap-12 lg:gap-16", layoutMap[layout] || layoutMap['two-column'])}>
                {columns.map((col, index) => (
                    <Column 
                        key={index} 
                        blocks={col.blocks} 
                        verticalAlignment={col.verticalAlignment} 
                    />
                ))}
            </div>
        </section>
    );
}

// Default export renaming to match the user's specific component name requirement
export default Section;
