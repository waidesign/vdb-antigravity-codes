"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    showFirstLast?: boolean;
    className?: string;
}

export function Pagination({ page, totalPages, onPageChange, showFirstLast, className }: PaginationProps) {
    const pages: (number | "...")[] = [];

    if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
        pages.push(1);
        if (page > 3) pages.push("...");
        for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) pages.push(i);
        if (page < totalPages - 2) pages.push("...");
        pages.push(totalPages);
    }

    const btn = (label: React.ReactNode, active: boolean, onClick: () => void, disabled = false) => (
        <button
            onClick={onClick}
            disabled={disabled}
            className={cn(
                "flex items-center justify-center min-w-[36px] h-9 px-2 rounded-lg text-sm font-medium transition-all duration-150 border",
                active
                    ? "bg-brand-primary border-brand-primary text-neutral-900"
                    : "border-neutral-700 text-neutral-400 hover:border-neutral-500 hover:text-neutral-200 bg-neutral-800/40",
                disabled && "opacity-40 cursor-not-allowed"
            )}
        >
            {label}
        </button>
    );

    return (
        <nav className={cn("flex items-center gap-1.5", className)} aria-label="Pagination">
            {btn(<ChevronLeft className="h-4 w-4" />, false, () => onPageChange(page - 1), page <= 1)}
            {pages.map((p, i) =>
                p === "..."
                    ? <span key={`dots-${i}`} className="w-9 flex items-center justify-center text-neutral-600 text-sm">…</span>
                    : btn(p, p === page, () => onPageChange(p as number))
            )}
            {btn(<ChevronRight className="h-4 w-4" />, false, () => onPageChange(page + 1), page >= totalPages)}
        </nav>
    );
}
