import React from 'react';
import { Column, ColumnProps } from './column';
import { cn } from '@/lib/utils';

export type UniqueDownloadAppSectionProps = {
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

export function UniqueDownloadAppSection({ layout, columns, className, theme, isDark }: UniqueDownloadAppSectionProps) {
    if (!columns || columns.length === 0) return null;

    const effectiveIsDark = isDark || theme === 'dark';

    return (
        <section className={cn(
            "relative w-full py-20 px-6 lg:px-20",
            effectiveIsDark ? "bg-[#000000]" : "bg-white",
            className
        )}>
            <div className="max-w-7xl mx-auto">
                <div className={cn(
                    "w-full rounded-[32px] p-8 lg:p-16 shadow-2xl overflow-hidden",
                    effectiveIsDark ? "bg-[#171717]" : "bg-gradient-to-r from-[#f59120] to-[#9747ff]"
                )}>
                    <div className={cn("grid gap-8 lg:gap-16 items-center", layoutMap[layout] || layoutMap['two-column'])}>
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

export default UniqueDownloadAppSection;
