import React from 'react';
import { Column } from './column';
import { cn } from '@/lib/utils';

interface UniqueHeroSectionContactUsProps {
    layout?: string;
    columns: any[];
    theme?: 'light' | 'dark';
    isDark?: boolean;
}

export const UniqueHeroSectionContactUs: React.FC<UniqueHeroSectionContactUsProps> = ({ columns, theme, isDark }) => {
    const effectiveIsDark = isDark || theme === 'dark';

    return (
        <section className={cn(
            "w-full min-h-screen flex items-center py-24 relative overflow-hidden",
            effectiveIsDark ? "bg-[#000000] text-white" : "bg-white text-neutral-900"
        )}>
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-between">
                    {columns.map((col, index) => (
                        <div key={index} className={cn(
                            "w-full flex flex-col justify-start",
                            index === 0 ? 'lg:w-[55%]' : 'lg:w-[40%]'
                        )}>
                            <Column 
                                blocks={col.blocks} 
                                theme={theme}
                                isDark={effectiveIsDark}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
