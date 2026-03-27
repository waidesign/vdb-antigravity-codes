import { cn } from "@/lib/utils";

interface DividerProps {
    label?: string;
    orientation?: "horizontal" | "vertical";
    className?: string;
}

export function Divider({ label, orientation = "horizontal", className }: DividerProps) {
    if (orientation === "vertical") {
        return <div className={cn("w-px bg-neutral-700/60 self-stretch", className)} />;
    }

    if (label) {
        return (
            <div className={cn("flex items-center gap-3 w-full", className)}>
                <div className="flex-1 h-px bg-neutral-700/60" />
                <span className="text-xs text-neutral-500 whitespace-nowrap">{label}</span>
                <div className="flex-1 h-px bg-neutral-700/60" />
            </div>
        );
    }

    return <div className={cn("h-px w-full bg-neutral-700/60", className)} />;
}
