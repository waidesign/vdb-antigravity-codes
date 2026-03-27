"use client";
import React, { useState } from "react";
import { ChevronUp, ChevronDown, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Spinner } from "./spinner";

export interface Column<T> {
    key: keyof T | string;
    label: string;
    sortable?: boolean;
    className?: string;
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

export function Table<T extends object>({
    columns,
    data,
    isLoading,
    striped = false,
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
        <div className={cn("w-full overflow-x-auto rounded-xl border border-neutral-700/60", className)}>
            <table className="min-w-full text-sm">
                <thead>
                    <tr className="border-b border-neutral-700/60 bg-neutral-800/60">
                        {columns.map((col) => (
                            <th
                                key={col.key as string}
                                onClick={() => col.sortable && handleSort(col.key as string)}
                                className={cn(
                                    "px-4 py-3 text-left font-semibold text-neutral-400 text-xs uppercase tracking-wider whitespace-nowrap",
                                    col.sortable && "cursor-pointer select-none hover:text-neutral-200 transition-colors",
                                    col.className
                                )}
                            >
                                <span className="flex items-center gap-1.5">
                                    {col.label}
                                    {col.sortable && (
                                        sortKey === col.key
                                            ? sortDir === "asc"
                                                ? <ChevronUp className="h-3.5 w-3.5 text-brand-primary" />
                                                : <ChevronDown className="h-3.5 w-3.5 text-brand-primary" />
                                            : <ChevronsUpDown className="h-3.5 w-3.5 opacity-40" />
                                    )}
                                </span>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? (
                        <tr>
                            <td colSpan={columns.length} className="text-center py-12">
                                <Spinner className="mx-auto" />
                            </td>
                        </tr>
                    ) : sorted.length === 0 ? (
                        <tr>
                            <td colSpan={columns.length} className="text-center py-12 text-neutral-500">
                                {emptyMessage}
                            </td>
                        </tr>
                    ) : (
                        sorted.map((row, i) => (
                            <tr
                                key={keyExtractor ? keyExtractor(row, i) : i}
                                className={cn(
                                    "border-b border-neutral-700/30 transition-colors duration-150",
                                    striped && i % 2 === 1 && "bg-neutral-800/20",
                                    hoverable && "hover:bg-neutral-800/40"
                                )}
                            >
                                {columns.map((col) => (
                                    <td key={col.key as string} className={cn("px-4 py-3.5 text-neutral-200", col.className)}>
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
