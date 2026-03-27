import { cn } from "@/lib/utils";

interface SkeletonProps {
    className?: string;
    variant?: "rect" | "circle" | "text";
    lines?: number;
}

export function Skeleton({ className, variant = "rect", lines = 1 }: SkeletonProps) {
    if (variant === "circle") {
        return (
            <div
                className={cn(
                    "rounded-full bg-neutral-800 animate-pulse",
                    className ?? "w-10 h-10"
                )}
            />
        );
    }

    if (variant === "text") {
        return (
            <div className="flex flex-col gap-2">
                {Array.from({ length: lines }).map((_, i) => (
                    <div
                        key={i}
                        className={cn(
                            "h-4 rounded bg-neutral-800 animate-pulse",
                            i === lines - 1 && lines > 1 ? "w-3/4" : "w-full",
                            className
                        )}
                    />
                ))}
            </div>
        );
    }

    return (
        <div
            className={cn(
                "rounded-lg bg-neutral-800 animate-pulse",
                className ?? "h-20 w-full"
            )}
        />
    );
}

export function SkeletonCard() {
    return (
        <div className="rounded-xl border border-neutral-800 light:border-neutral-700 bg-neutral-800/40 p-6 space-y-4">
            <div className="flex items-center gap-3">
                <Skeleton variant="circle" className="w-10 h-10" />
                <div className="flex-1 space-y-2">
                    <Skeleton variant="text" className="h-4 w-1/2" />
                    <Skeleton variant="text" className="h-3 w-1/3" />
                </div>
            </div>
            <Skeleton variant="text" lines={3} />
            <Skeleton className="h-9 w-full" />
        </div>
    );
}
