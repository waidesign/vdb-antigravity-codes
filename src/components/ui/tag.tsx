"use client";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface TagProps {
    children: React.ReactNode;
    variant?: "neutral" | "brand" | "info" | "success" | "warning" | "error" | "purple";
    size?: "sm" | "md";
    onRemove?: () => void;
    className?: string;
}

const tagStyles = {
    neutral: "bg-neutral-700 text-neutral-200 border-neutral-600",
    brand: "bg-brand-primary/15 text-brand-primary border-brand-primary/30",
    info: "bg-blue-500/10 text-blue-300 border-blue-500/25",
    success: "bg-green-500/10 text-green-300 border-green-500/25",
    warning: "bg-orange-500/10 text-orange-300 border-orange-500/25",
    error: "bg-red-500/10 text-red-300 border-red-500/25",
    purple: "bg-purple-500/10 text-purple-300 border-purple-500/25",
};

export function Tag({ children, variant = "neutral", size = "md", onRemove, className }: TagProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center gap-1 border rounded-md font-medium",
                size === "sm" ? "px-1.5 py-0.5 text-[11px]" : "px-2.5 py-1 text-xs",
                tagStyles[variant],
                className
            )}
        >
            {children}
            {onRemove && (
                <button
                    onClick={onRemove}
                    className="ml-0.5 opacity-60 hover:opacity-100 transition-opacity rounded-full"
                    aria-label="Remove"
                >
                    <X className="h-3 w-3" />
                </button>
            )}
        </span>
    );
}
