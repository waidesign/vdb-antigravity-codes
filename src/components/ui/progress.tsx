import { cn } from "@/lib/utils";

interface ProgressProps {
    value: number;
    max?: number;
    size?: "sm" | "md" | "lg";
    variant?: "brand" | "success" | "error" | "info";
    label?: string;
    showValue?: boolean;
    className?: string;
}

const trackSizes = { sm: "h-1", md: "h-2", lg: "h-3" };
const fillColors = {
    brand: "bg-gradient-to-r from-brand-primary to-brand-secondary",
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
};

export function Progress({
    value,
    max = 100,
    size = "md",
    variant = "brand",
    label,
    showValue,
    className,
}: ProgressProps) {
    const pct = Math.min(100, Math.max(0, (value / max) * 100));

    return (
        <div className={cn("w-full", className)}>
            {(label || showValue) && (
                <div className="flex justify-between items-center mb-1.5">
                    {label && <span className="text-xs text-neutral-400">{label}</span>}
                    {showValue && <span className="text-xs font-medium text-neutral-300">{Math.round(pct)}%</span>}
                </div>
            )}
            <div className={cn("w-full rounded-full bg-neutral-800 overflow-hidden", trackSizes[size])}>
                <div
                    className={cn("h-full rounded-full transition-all duration-500 ease-out", fillColors[variant])}
                    style={{ width: `${pct}%` }}
                    role="progressbar"
                    aria-valuenow={value}
                    aria-valuemax={max}
                />
            </div>
        </div>
    );
}

interface CircularProgressProps {
    value: number;
    size?: number;
    strokeWidth?: number;
    variant?: "brand" | "success" | "error";
    label?: React.ReactNode;
    className?: string;
}

const circleColors = {
    brand: "#F59120",
    success: "#51D75A",
    error: "#D2272F",
};

export function CircularProgress({
    value,
    size = 80,
    strokeWidth = 6,
    variant = "brand",
    label,
    className,
}: CircularProgressProps) {
    const r = (size - strokeWidth) / 2;
    const circ = 2 * Math.PI * r;
    const pct = Math.min(100, Math.max(0, value));
    const offset = circ - (pct / 100) * circ;

    return (
        <div className={cn("relative inline-flex items-center justify-center", className)}>
            <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
                <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#2D2F35" strokeWidth={strokeWidth} />
                <circle
                    cx={size / 2} cy={size / 2} r={r} fill="none"
                    stroke={circleColors[variant]} strokeWidth={strokeWidth}
                    strokeDasharray={circ} strokeDashoffset={offset}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 0.5s ease" }}
                />
            </svg>
            {label && (
                <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-neutral-200">
                    {label}
                </div>
            )}
        </div>
    );
}
