import React from 'react';
import { ShieldCheck, Zap, TrendingUp, CheckCircle2, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const ICON_MAP: Record<string, any> = {
    'shield': ShieldCheck,
    'zap': Zap,
    'trending': TrendingUp,
    'check': CheckCircle2,
    'mortarboard': MapPin, // Reusing MapPin as a placeholder if needed, or adding more
};

export function MetricBlock({ value, description, icon, theme = 'light' }: { value: string, description: string, icon?: string, theme?: 'light' | 'dark' }) {
    const Icon = icon && ICON_MAP[icon] ? ICON_MAP[icon] : ICON_MAP['check'];
    const isDark = theme === 'dark';
    
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#9747ff]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#9747ff]" />
                </div>
                <span className="text-lg font-aileron font-bold bg-gradient-to-r from-[#F59120] to-[#9747FF] bg-clip-text text-transparent">
                    {value}
                </span>
            </div>
            <p className={cn(
                "font-geist text-sm lg:text-base leading-relaxed max-w-[280px]",
                isDark ? "text-white" : "text-neutral-400"
            )}>
                {description}
            </p>
        </div>
    );
}
