import React from 'react';
import { Column } from './column';
import { cn } from '@/lib/utils';

interface UniqueHeroSectionMcpProps {
    layout?: string;
    columns: any[];
    className?: string;
    theme?: 'light' | 'dark';
    isDark?: boolean;
}

const layoutMap: Record<string, string> = {
    'one-column': 'grid-cols-1',
    'two-column': 'grid-cols-1 lg:grid-cols-2',
    'three-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    'four-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
};

export function UniqueHeroSectionMcp({ layout = 'two-column', columns, className, theme, isDark }: UniqueHeroSectionMcpProps) {
    if (!columns || columns.length === 0) return null;

    const effectiveIsDark = isDark || theme === 'dark';

    return (
        <section className={cn(
            "relative w-full py-20 px-6 lg:px-20 overflow-hidden",
            effectiveIsDark ? "bg-[#000000] text-white" : "bg-white text-neutral-900",
            className
        )}>
            {/* Background decorative elements matching design system */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-[#f59120]/20 blur-[120px] rounded-full" />
                <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-[#9747ff]/20 blur-[120px] rounded-full" />
            </div>

            <div className={cn("max-w-7xl mx-auto grid gap-12 lg:gap-24 relative z-10", layoutMap[layout] || layoutMap['two-column'])}>
                {columns.map((col, index) => (
                    <Column 
                        key={index} 
                        blocks={col.blocks} 
                        verticalAlignment={col.verticalAlignment || 'start'} 
                        theme={theme}
                        isDark={effectiveIsDark}
                    />
                ))}
            </div>
        </section>
    );
}

export default UniqueHeroSectionMcp;
