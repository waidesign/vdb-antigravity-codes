"use client";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    children?: React.ReactNode;
    footer?: React.ReactNode;
    size?: "sm" | "md" | "lg" | "xl" | "full";
    className?: string;
}

const sizeMap = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-2xl",
    full: "max-w-5xl",
};

export function Modal({ open, onClose, title, description, children, footer, size = "md", className }: ModalProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        if (open) document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />
            <div
                ref={ref}
                className={cn(
                    "relative w-full rounded-2xl border border-neutral-700/60 bg-neutral-900 shadow-modal animate-slide-in-up",
                    sizeMap[size],
                    className
                )}
            >
                {(title || description) && (
                    <div className="flex items-start justify-between gap-4 p-6 border-b border-neutral-700/50">
                        <div>
                            {title && <h2 className="text-lg font-semibold text-neutral-100">{title}</h2>}
                            {description && <p className="text-sm text-neutral-400 mt-1">{description}</p>}
                        </div>
                        <button
                            onClick={onClose}
                            className="flex-shrink-0 rounded-lg p-1.5 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 transition-colors"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                )}
                {children && <div className="p-6">{children}</div>}
                {footer && (
                    <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-neutral-700/50">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );
}
