"use client";
import React, { useState } from "react";
import { ChevronUp, ChevronDown, ChevronsUpDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Spinner } from "./spinner";

export interface Column<T> {
    key: keyof T | string;
    label: string;
    sortable?: boolean;
    className?: string;
    align?: "left" | "center" | "right";
    render?: (row: T, index: number) => React.ReactNode;
}

interface TableProps<T extends object> {
    columns: Column<T>[];
    data: T[];
    isLoading?: boolean;
    striped?: boolean;
    hoverable?: boolean;
    className?: string;
    emptyMessage?: string;
    keyExtractor?: (row: T, idx: number) => string | number;
}

/**
 * XCircle Helper Component (based on screenshot)
 */
export const TableXIcon = () => (
    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-red-500/20 shadow-[0_0_10px_rgba(239,68,68,0.2)] border border-red-500/30">
        <X className="w-3 h-3 text-red-500" />
    </div>
);

export function Table<T extends object>({
    columns,
    data,
    isLoading,
    striped = true,
    hoverable = true,
    className,
    emptyMessage = "No data available",
    keyExtractor,
}: TableProps<T>) {
    const [sortKey, setSortKey] = useState<string | null>(null);
    const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

    const handleSort = (key: string) => {
        if (sortKey === key) {
            setSortDir(sortDir === "asc" ? "desc" : "asc");
        } else {
            setSortKey(key);
            setSortDir("asc");
        }
    };

    const sorted = [...data].sort((a, b) => {
        if (!sortKey) return 0;
        const av = (a as Record<string, unknown>)[sortKey];
        const bv = (b as Record<string, unknown>)[sortKey];
        if (av === bv) return 0;
        const cmp = av! > bv! ? 1 : -1;
        return sortDir === "asc" ? cmp : -cmp;
    });

    return (
        <div className={cn("w-full overflow-x-auto selection:bg-brand-primary/30", className)}>
            <table className="w-full border-separate border-spacing-0">
                <thead>
                    <tr>
                        {columns.map((col, idx) => (
                            <th
                                key={col.key as string}
                                onClick={() => col.sortable && handleSort(col.key as string)}
                                className={cn(
                                    "h-14 px-6 border-y border-neutral-800/80 bg-neutral-900/60 first:border-l first:rounded-l-full last:border-r last:rounded-r-full group",
                                    col.sortable && "cursor-pointer select-none",
                                    "text-left",
                                    col.className
                                )}
                            >
                                <div className={cn(
                                    "flex items-center gap-2",
                                    "justify-start"
                                )}>
                                    <span className="text-sm font-medium text-neutral-400 group-hover:text-neutral-200 transition-colors">
                                        {col.label}
                                    </span>
                                    {col.sortable && (
                                        <div className="flex flex-col">
                                            {sortKey === col.key ? (
                                                sortDir === "asc" ? (
                                                    <ChevronUp className="h-3 w-3 text-brand-primary" />
                                                ) : (
                                                    <ChevronDown className="h-3 w-3 text-brand-primary" />
                                                )
                                            ) : (
                                                <ChevronsUpDown className="h-3 w-3 text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            )}
                                        </div>
                                    )}
                                </div>
                            </th>
                        ))}
                    </tr>
                    {/* Visual spacer between header and body */}
                    <tr className="h-4" aria-hidden="true" />
                </thead>
                <tbody>
                    {isLoading ? (
                        <tr>
                            <td colSpan={columns.length} className="text-center py-20">
                                <Spinner className="mx-auto" />
                            </td>
                        </tr>
                    ) : sorted.length === 0 ? (
                        <tr>
                            <td colSpan={columns.length} className="text-center py-20 text-neutral-500 font-geist">
                                {emptyMessage}
                            </td>
                        </tr>
                    ) : (
                        sorted.map((row, i) => (
                            <tr
                                key={keyExtractor ? keyExtractor(row, i) : i}
                                className={cn(
                                    "group transition-all duration-200",
                                    striped && i % 2 === 1 ? "bg-neutral-900/40" : "bg-transparent",
                                    hoverable && "hover:bg-neutral-800/30"
                                )}
                            >
                                {columns.map((col, idx) => (
                                    <td
                                        key={col.key as string}
                                        className={cn(
                                            "px-6 py-5 border-b border-neutral-800/40 text-sm leading-relaxed",
                                            idx === 0 ? "text-white font-bold tracking-tight" : "text-neutral-400 text-left",
                                            col.className
                                        )}
                                    >
                                        {col.render
                                            ? col.render(row, i)
                                            : String((row as Record<string, unknown>)[col.key as string] ?? "")}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
