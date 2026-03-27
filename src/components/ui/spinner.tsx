import { cn } from "@/lib/utils";

interface SpinnerProps {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    className?: string;
    label?: string;
}

const sizeMap = {
    xs: "h-3 w-3 border",
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-2",
    lg: "h-8 w-8 border-[3px]",
    xl: "h-12 w-12 border-4",
};

export function Spinner({ size = "md", className, label }: SpinnerProps) {
    return (
        <div className={cn("flex flex-col items-center gap-2", className)}>
            <div
                className={cn(
                    "rounded-full border-neutral-700 border-t-brand-primary animate-spin",
                    sizeMap[size]
                )}
                role="status"
                aria-label={label || "Loading"}
            />
            {label && <span className="text-xs text-neutral-500">{label}</span>}
        </div>
    );
}
