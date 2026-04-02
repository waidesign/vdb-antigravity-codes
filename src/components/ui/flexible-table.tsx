"use client";
import React, { useState } from "react";
import { ChevronUp, ChevronDown, ChevronsUpDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Spinner } from "./spinner";

/* ──────────────────────────────────────────────────────────────────────────
 * Types
 * ────────────────────────────────────────────────────────────────────────── */

export interface Column<T> {
  key: keyof T | string;
  label: string;
  sortable?: boolean;
  className?: string;
  align?: "left" | "center" | "right";
  render?: (row: T, index: number) => React.ReactNode;
}

interface FlexibleTableProps<T extends object> {
  columns: Column<T>[];
  data: T[];
  isLoading?: boolean;
  className?: string;
  emptyMessage?: string;
  keyExtractor?: (row: T, idx: number) => string | number;
  /** Width of the first (label) column. Defaults to 320px */
  labelColumnWidth?: number;
  /** Whether to show the first column's label in the header pill */
  showFirstColumnHeader?: boolean;
}

/* ──────────────────────────────────────────────────────────────────────────
 * Helper Icons
 * ────────────────────────────────────────────────────────────────────────── */

/**
 * Red X badge — shown when a feature is unavailable for a plan/tier.
 * Matches the Figma design exactly (red filled circle with white X).
 */
export const TableXIcon = () => (
  <div className="flex items-center justify-center w-[26px] h-[26px] rounded-full bg-[#EB5757]">
    <X className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
  </div>
);

/* ──────────────────────────────────────────────────────────────────────────
 * Main FlexibleTable Component
 * ────────────────────────────────────────────────────────────────────────── */

export function FlexibleTable<T extends object>({
  columns,
  data,
  isLoading,
  className,
  emptyMessage = "No data available",
  keyExtractor,
  labelColumnWidth = 320,
  showFirstColumnHeader = false,
}: FlexibleTableProps<T>) {
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

  const headerCols = columns.slice(1);

  return (
    <div className={cn("w-full overflow-x-auto selection:bg-brand-primary/30", className)}>
      <table className="w-full border-separate border-spacing-y-3">
        {/* ── HEADER ROW ── */}
        <thead>
          <tr>
            {/* label-column header cell */}
            <th
              style={{ width: labelColumnWidth, minWidth: labelColumnWidth }}
              className="bg-black rounded-l-[24px] border border-r-0 border-[#6f6f6f] px-6 py-4 text-left"
            >
              {showFirstColumnHeader && columns[0] && (
                <span className="font-geist font-semibold text-[20px] leading-[28px] text-[rgba(255,255,255,0.59)]">
                  {columns[0].label}
                </span>
              )}
            </th>
            {/* data column headers */}
            {headerCols.map((col, idx) => (
              <th
                key={col.key as string}
                onClick={() => col.sortable && handleSort(col.key as string)}
                className={cn(
                  "bg-black border-y border-[#6f6f6f] px-2 py-4 group",
                  idx === headerCols.length - 1 && "rounded-r-[24px] border-r border-[#6f6f6f]",
                  col.sortable && "cursor-pointer select-none"
                )}
              >
                <div className="flex items-center gap-2">
                  <span className="font-geist font-semibold text-[20px] leading-[28px] text-[rgba(255,255,255,0.59)]">
                    {col.label}
                  </span>
                  {col.sortable && (
                    <div className="flex flex-col shrink-0">
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
        </thead>

        {/* ── BODY ── */}
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={columns.length} className="text-center py-20">
                <Spinner className="mx-auto" />
              </td>
            </tr>
          ) : sorted.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-20 font-geist text-[rgba(255,255,255,0.4)]"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            sorted.map((row, i) => {
              /* Alternating pattern from Figma: Odd-indexed rows (1, 3...) are filled */
              const isFilled = i % 2 === 1;

              return (
                <tr key={keyExtractor ? keyExtractor(row, i) : i}>
                  {columns.map((col, idx) => {
                    const isLabelCol = idx === 0;
                    const isLastCol = idx === columns.length - 1;

                    return (
                      <td
                        key={col.key as string}
                        style={isLabelCol ? { width: labelColumnWidth, minWidth: labelColumnWidth } : undefined}
                        className={cn(
                          "px-6 py-5 align-middle transition-colors",
                          /* Background & Rounding */
                          isFilled ? "bg-black" : "bg-transparent",
                          isFilled && isLabelCol && "rounded-l-2xl border-l border-y border-[#6f6f6f]",
                          isFilled && !isLabelCol && !isLastCol && "border-y border-[#6f6f6f]",
                          isFilled && isLastCol && "rounded-r-2xl border-r border-y border-[#6f6f6f]",
                          /* Text Styling */
                          isLabelCol
                            ? "font-geist font-semibold text-[20px] leading-[28px] text-[rgba(255,255,255,0.92)]"
                            : "font-geist font-normal text-[20px] leading-[28px] text-[rgba(255,255,255,0.92)]",
                          col.className
                        )}
                      >
                        {col.render
                          ? col.render(row, i)
                          : String(
                              (row as Record<string, unknown>)[col.key as string] ?? ""
                            )}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
