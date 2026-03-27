"use client";
import { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DrawerProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    children?: React.ReactNode;
    footer?: React.ReactNode;
    side?: "right" | "left";
    width?: string;
    className?: string;
}

export function Drawer({ open, onClose, title, children, footer, side = "right", width = "w-96", className }: DrawerProps) {
    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        if (open) document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex animate-fade-in">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
            <div
                className={cn(
                    "relative flex flex-col bg-neutral-900 border-neutral-700/60 shadow-modal h-full max-h-screen overflow-hidden",
                    width,
                    side === "right" ? "ml-auto border-l animate-slide-in-right" : "mr-auto border-r",
                    className
                )}
            >
                <div className="flex items-center justify-between gap-4 p-5 border-b border-neutral-700/50 flex-shrink-0">
                    {title && <h2 className="text-base font-semibold text-neutral-100">{title}</h2>}
                    <button
                        onClick={onClose}
                        className="ml-auto rounded-lg p-1.5 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 transition-colors"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto p-5 scrollbar-thin">{children}</div>
                {footer && (
                    <div className="flex items-center justify-end gap-3 px-5 py-4 border-t border-neutral-700/50 flex-shrink-0">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );
}
