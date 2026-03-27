import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge'; // Wait, do we have Badge? Let's assume we don't, I'll build a custom badge

export interface DataGridItem {
    label: string;
    value: string;
    badgeVariant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'orange';
}

export interface DataGridBlockProps {
    items: DataGridItem[];
    className?: string;
    columns?: number;
    theme?: 'light' | 'dark';
    isDark?: boolean;
}

export function DataGridBlock({ items, className, columns = 4, theme, isDark }: DataGridBlockProps) {
    if (!items || items.length === 0) return null;

    const effectiveIsDark = isDark || theme === 'dark';

    // Map columns to responsive grid classes, handling up to 5 cols as required by the design
    const gridColsClass = 
        columns === 2 ? "grid-cols-2 lg:grid-cols-2" :
        columns === 3 ? "grid-cols-2 lg:grid-cols-3" :
        columns === 5 ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-5" :
        "grid-cols-2 md:grid-cols-4 lg:grid-cols-4"; // default to 4

    return (
        <div className={cn(
            "grid gap-x-6 gap-y-8 w-full",
            gridColsClass,
            className
        )}>
            {items.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                    <span className={cn(
                        "font-geist text-sm uppercase tracking-wider font-semibold",
                        effectiveIsDark ? "text-neutral-500" : "text-neutral-500"
                    )}>
                        {item.label}
                    </span>
                    
                    {item.badgeVariant ? (
                        <div className={cn(
                            "inline-flex w-fit items-center px-3 py-1.5 rounded-md font-geist text-sm font-semibold",
                            item.badgeVariant === 'orange' ? "bg-[#f59120] text-white" :
                            item.badgeVariant === 'success' ? "bg-green-500 text-white" :
                            item.badgeVariant === 'primary' ? "bg-gradient-to-r from-[#f59120] to-[#9747ff] text-white" :
                            effectiveIsDark ? "bg-[#292929] text-white" : "bg-neutral-100 text-neutral-900"
                        )}>
                            {item.value}
                        </div>
                    ) : (
                        <span className={cn(
                            "font-geist text-lg lg:text-xl font-medium",
                            effectiveIsDark ? "text-white" : "text-neutral-900"
                        )}>
                            {item.value}
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
}

export default DataGridBlock;
