import React from 'react';
import { Column } from './column';
import { cn } from '@/lib/utils';

interface GetInTouchFormSectionProps {
    title?: string;
    subtitle?: string;
    columns: any[];
    layout?: string;
    className?: string;
}

const layoutMap: Record<string, string> = {
    'two-column': 'grid-cols-1 lg:grid-cols-[1.5fr,1fr]',
};

export function GetInTouchFormSection({ 
    title, 
    subtitle,
    columns, 
    layout = 'two-column', 
    className 
}: GetInTouchFormSectionProps) {
    if (!columns || columns.length === 0) return null;

    return (
        <section className={cn("relative w-full py-24 px-6 lg:px-20 bg-[#000000] overflow-hidden", className)}>
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Main Gradient Card */}
                <div className="relative rounded-[40px] p-8 lg:p-16 overflow-hidden bg-gradient-to-br from-[#D46B89] via-[#8C52FF] to-[#6025F5]">
                    {/* Header Area */}
                    {(title || subtitle) && (
                        <div className="text-center mb-12 lg:mb-20">
                            {subtitle && (
                                <span className="text-white/80 font-aileron text-sm uppercase tracking-[0.2em] mb-4 block">
                                    {subtitle}
                                </span>
                            )}
                            {title && (
                                <h2 className="text-white font-aileron font-bold text-3xl lg:text-5xl tracking-tight">
                                    {title}
                                </h2>
                            )}
                        </div>
                    )}

                    {/* Content Area with Split */}
                    <div className={cn("grid gap-12 lg:gap-20 items-center", layoutMap[layout] || layoutMap['two-column'])}>
                        {columns.map((col, index) => (
                            <React.Fragment key={index}>
                                <Column 
                                    blocks={col.blocks} 
                                    verticalAlignment={col.verticalAlignment || 'center'} 
                                />
                                {index === 0 && columns.length > 1 && (
                                    <div className="hidden lg:block w-px h-full bg-white/20 self-stretch" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Decorative Blurs */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                </div>
            </div>
        </section>
    );
}

export default GetInTouchFormSection;
