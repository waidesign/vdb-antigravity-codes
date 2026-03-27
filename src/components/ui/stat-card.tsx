import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
    label: string;
    value: string | number;
    trend?: number;
    trendLabel?: string;
    icon?: React.ReactNode;
    prefix?: string;
    suffix?: string;
    className?: string;
}

export function StatCard({ label, value, trend, trendLabel, icon, prefix, suffix, className }: StatCardProps) {
    const isPositive = trend !== undefined && trend > 0;
    const isNegative = trend !== undefined && trend < 0;

    return (
        <div className={cn(
            "rounded-xl border border-neutral-800 light:border-neutral-700 bg-neutral-800/40 p-4 sm:p-5 flex flex-col gap-3 hover-lift",
            className
        )}>
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-400">{label}</span>
                {icon && (
                    <div className="w-9 h-9 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                        {icon}
                    </div>
                )}
            </div>
            <div className="flex items-end gap-2">
                <span className="text-2xl sm:text-3xl font-bold text-neutral-100 leading-none">
                    {prefix && <span className="text-xl text-neutral-400 mr-0.5">{prefix}</span>}
                    {value}
                    {suffix && <span className="text-xl text-neutral-400 ml-0.5">{suffix}</span>}
                </span>
            </div>
            {trend !== undefined && (
                <div className="flex items-center gap-1.5">
                    <span className={cn(
                        "flex items-center gap-0.5 text-xs font-semibold",
                        isPositive ? "text-green-400" : isNegative ? "text-red-400" : "text-neutral-500"
                    )}>
                        {isPositive ? <TrendingUp className="h-3.5 w-3.5" /> :
                            isNegative ? <TrendingDown className="h-3.5 w-3.5" /> :
                                <Minus className="h-3.5 w-3.5" />}
                        {Math.abs(trend)}%
                    </span>
                    {trendLabel && <span className="text-xs text-neutral-500">{trendLabel}</span>}
                </div>
            )}
        </div>
    );
}
