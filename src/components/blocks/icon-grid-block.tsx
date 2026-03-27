import React from 'react';
import { cn } from '@/lib/utils';

export function IconGridBlock({ block, isDark }: { block: any, isDark: boolean }) {
    return (
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-8 mb-12">
            {block.items.map((item: any, i: number) => (
                <div key={i} 
                    className={cn(
                        "flex flex-col items-center gap-4 p-6 rounded-2xl border transition-all hover:shadow-md hover:-translate-y-1 group",
                        isDark ? "bg-[#171717] border-neutral-800" : "bg-white border-neutral-100 shadow-sm"
                    )}
                >
                    <div className="w-16 h-16 flex items-center justify-center rounded-xl p-3 border border-neutral-50 group-hover:scale-110 transition-transform">
                        <img src={item.icon} alt={item.label} className="w-full h-full object-contain" />
                    </div>
                    <span className="font-aileron font-bold text-neutral-900 dark:text-white">{item.label}</span>
                </div>
            ))}
        </div>
    );
}
