import React from 'react';
import { Column, ColumnProps } from './column';
import { BlockRenderer, BlockProp } from './block-renderer';
import { cn } from '@/lib/utils';

export type ApiHeroSectionWithFormProps = {
    layout?: 'one-column' | 'two-column';
    alignment?: 'left' | 'center' | 'right';
    columns: ColumnProps[];
    className?: string;
    containerClassName?: string;
    id?: string;
    isDark?: boolean;
    theme?: 'dark' | 'light';
};

const layoutMap = {
    'one-column': 'grid-cols-1 max-w-4xl mx-auto',
    'two-column': 'grid-cols-1 lg:grid-cols-2',
};

const alignmentMap = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
};

export function ApiHeroSectionWithForm({ 
    layout = 'two-column', 
    alignment = 'left',
    columns, 
    className,
    containerClassName,
    id,
    isDark = true,
    theme = 'dark'
}: ApiHeroSectionWithFormProps) {
    if (!columns || columns.length === 0) return null;

    return (
        <section 
            id={id}
            className={cn(
                "relative w-full py-20 lg:py-32 px-6 lg:px-12 bg-[#000000] overflow-hidden dark", 
                className
            )}
        >
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9747ff] rounded-full blur-[150px] opacity-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#f59120] rounded-full blur-[150px] opacity-10 pointer-events-none" />

            <div className={cn("max-w-7xl mx-auto relative z-10", containerClassName)}>
                <div className={cn(
                    "grid gap-12 lg:gap-24 items-center", 
                    layoutMap[layout] || layoutMap['two-column']
                )}>
                    {columns.map((col, index) => (
                        <Column 
                            key={index} 
                            {...col}
                            isDark={isDark}
                            theme={theme}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ApiHeroSectionWithForm;
