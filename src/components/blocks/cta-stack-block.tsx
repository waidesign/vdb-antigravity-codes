import React from 'react';
import { cn } from '@/lib/utils';

export function CTAStack({ block, isDark }: { block: any, isDark: boolean }) {
    const { text, buttons, ctas } = block;
    const items = buttons || ctas || [];
    return (
        <div className="flex flex-col gap-6 w-full">
            {text && <p className={cn("font-aileron text-lg leading-relaxed", isDark ? "text-white" : "text-neutral-700")}>{text}</p>}
            <div className={cn("flex gap-4 w-full", block.direction === 'row' ? "flex-row flex-wrap" : "flex-col")}>
                {items.map((btn: any, idx: number) => (
                    <button 
                        key={idx}
                        className={cn(
                            "w-full py-4 px-8 rounded-xl font-aileron font-bold flex items-center justify-center gap-3 transition-all active:scale-[0.98]",
                            (btn.variant === 'primary' || btn.variant === 'book')
                                ? "bg-gradient-to-r from-[#F59120] to-[#9747FF] text-white shadow-[0_4px_15px_rgba(245,145,32,0.3)] hover:opacity-90"
                                : (btn.variant === 'secondary' || btn.variant === 'whatsapp' || btn.variant === 'outline')
                                ? "bg-transparent border border-neutral-700 text-white hover:border-neutral-400 hover:bg-neutral-800/60"
                                : (isDark ? "bg-white text-black hover:bg-neutral-100" : "bg-neutral-900 text-white")
                        )}
                    >
                        {btn.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
