import React from 'react';
import { cn } from '@/lib/utils';

export function ApiCard({ block, isDark }: { block: any, isDark: boolean }) {
    const { title, description, link, icon = 'arrow' } = block;
    return (
        <a 
            href={link || '#'} 
            className="group block p-8 rounded-xl bg-[#171717] border border-neutral-800 hover:border-neutral-600 transition-all duration-300 relative overflow-hidden h-full"
        >
            <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                    <h3 className={cn(
                        "font-aileron font-bold text-xl group-hover:text-neutral-200 transition-colors",
                        isDark ? "text-white" : "text-neutral-900"
                    )}>
                        {title}
                    </h3>
                    {icon === 'arrow' && (
                        <svg 
                            width="20" height="20" viewBox="0 0 24 24" fill="none" 
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                            className="text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                        >
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    )}
                </div>
                <p className={cn(
                    "font-aileron text-base leading-relaxed grow",
                    isDark ? "text-white/80" : "text-neutral-400"
                )}>
                    {description}
                </p>
            </div>
            {/* Subtle Gradient Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </a>
    );
}
