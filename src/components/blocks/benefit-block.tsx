import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BenefitBlock({ block, isDark }: { block: any, isDark: boolean }) {
    const { text, icon = 'checkmark' } = block;
    return (
        <div className="flex items-start gap-4 group">
            <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Check className="w-4 h-4 text-white" />
            </div>
            <p className={cn(
                "font-aileron text-lg lg:text-xl leading-snug",
                isDark ? "text-white" : "text-neutral-900"
            )}>
                {text}
            </p>
        </div>
    );
}
