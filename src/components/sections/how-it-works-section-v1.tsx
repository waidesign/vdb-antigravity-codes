import React from 'react';
import { Column, ColumnProps } from './column';
import { cn } from '@/lib/utils';

export type HowItWorksSectionProps = {
    layout: 'one-column' | 'two-column' | 'three-column' | 'four-column';
    columns: ColumnProps[];
    className?: string;
    theme?: 'light' | 'dark';
    isDark?: boolean;
};

const layoutMap = {
    'one-column': 'grid-cols-1 max-w-4xl mx-auto',
    'two-column': 'grid-cols-1 lg:grid-cols-2',
    'three-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    'four-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
};

export function HowItWorksSectionV1({ layout, columns, className, theme, isDark }: HowItWorksSectionProps) {
    if (!columns || columns.length === 0) return null;

    const effectiveIsDark = isDark || theme === 'dark';

    return (
        <section className={cn(
            "relative w-full py-24 px-6 lg:px-20",
            effectiveIsDark ? "bg-[#000000]" : "bg-white",
            className
        )}>
            <div className="max-w-7xl mx-auto">
                <div className={cn(
                    "relative w-full border rounded-[2rem] p-10 lg:p-16 overflow-hidden",
                    effectiveIsDark ? "bg-[#131313] border-[#6F6F6F]" : "bg-neutral-50 border-neutral-200"
                )}>
                    {/* Ambient graphic decoration right edge */}
                    <div className="absolute top-0 right-0 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] rounded-full bg-gradient-to-br from-[#f59120]/40 to-[#9747ff]/40 blur-[80px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
                    
                    <div className={cn("relative z-10 grid gap-16 lg:gap-24 items-center", layoutMap[layout] || layoutMap['two-column'])}>
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
            </div>
        </section>
    );
}

export default HowItWorksSectionV1;
