import React from 'react';
import { cn } from '@/lib/utils';
import { Column } from './column';

interface ApiHeroSectionProps {
    columns: any[];
    theme?: 'dark' | 'light';
    className?: string;
}

export function ApiHeroSection({ 
    columns, 
    theme = 'light',
    isDark = false,
    className 
}: ApiHeroSectionProps & { isDark?: boolean }) {
    if (!columns || columns.length === 0) return null;

    // Use light theme by default as per the screenshot, but allow dark override
    const bgClass = theme === 'dark' ? 'bg-[#0A0A0A]' : 'bg-white';
    const isLight = theme === 'light';

    return (
        <section className={cn("relative w-full py-24 px-6 lg:px-20", bgClass, className)}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {columns.map((column, idx) => (
                        <Column 
                            key={idx} 
                            {...column}
                            isDark={isDark} 
                            theme={theme}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ApiHeroSection;
