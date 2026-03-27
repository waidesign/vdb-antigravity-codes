import React from 'react';
import { Column } from './column';
import { cn } from '@/lib/utils';

interface FullWidthCardSectionProps {
    title?: string;
    columns: any[];
    layout?: string;
    className?: string;
}

const layoutMap: Record<string, string> = {
    'two-column': 'grid-cols-1 lg:grid-cols-2',
};

export function FullWidthCardSection({ 
    title, 
    columns, 
    layout = 'two-column', 
    className 
}: FullWidthCardSectionProps) {
    if (!columns || columns.length === 0) return null;

    return (
        <section className={cn("relative w-full py-24 px-6 lg:px-20 bg-[#000000] overflow-hidden", className)}>
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Main Gradient Card */}
                <div className="relative rounded-[40px] p-8 lg:p-20 overflow-hidden bg-gradient-to-r from-[#FF8A05] via-[#D310FF] to-[#6025F5]">
                    {/* Header Area */}
                    {title && (
                        <div className="text-center mb-16 lg:mb-24">
                            <h2 className="text-white font-aileron font-bold text-3xl lg:text-5xl tracking-tight">
                                {title}
                            </h2>
                        </div>
                    )}

                    {/* Content Area */}
                    <div className={cn("grid gap-12 lg:gap-20", layoutMap[layout] || layoutMap['two-column'])}>
                        {columns.map((col, index) => (
                            <Column 
                                key={index} 
                                blocks={col.blocks} 
                                verticalAlignment={col.verticalAlignment || 'top'} 
                            />
                        ))}
                    </div>

                    {/* Subtle Overlay for better readability if needed */}
                    <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                </div>
            </div>
        </section>
    );
}

export default FullWidthCardSection;
