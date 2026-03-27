import React from 'react';
import { cn } from '@/lib/utils';
import { Column } from './column';

interface UniqueTwoColumnSectionProps {
    columns: any[];
    className?: string;
    theme?: 'light' | 'dark';
    isDark?: boolean;
}

export function UniqueTwoColumnSection({ 
    columns, 
    className,
    theme,
    isDark 
}: UniqueTwoColumnSectionProps) {
    if (!columns || columns.length === 0) return null;

    const effectiveIsDark = isDark || theme === 'dark';

    return (
        <section className={cn(
            "relative w-full py-20 px-6 lg:px-20",
            effectiveIsDark ? "bg-[#0A0A0A] text-white" : "bg-[#F5F5F5] text-neutral-900",
            className
        )}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {columns.map((column, idx) => (
                    <Column 
                        key={idx} 
                        blocks={column.blocks} 
                        theme={theme}
                        isDark={effectiveIsDark}
                    />
                ))}
            </div>
        </section>
    );
}

export default UniqueTwoColumnSection;
