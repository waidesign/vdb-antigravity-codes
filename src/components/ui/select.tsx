"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
    icon?: React.ReactNode;
}

export interface SelectProps {
    options: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    label?: string;
    helperText?: string;
    error?: string;
    disabled?: boolean;
    className?: string;
}

export function Select({
    options,
    value,
    onChange,
    placeholder = "Select option…",
    label,
    helperText,
    error,
    disabled,
    className,
}: SelectProps) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const selected = options.find((o) => o.value === value);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div className={cn("flex flex-col gap-1.5 w-full", className)} ref={ref}>
            {label && (
                <label className="text-sm font-medium text-neutral-300">{label}</label>
            )}
            <div className="relative">
                <button
                    type="button"
                    disabled={disabled}
                    onClick={() => !disabled && setOpen(!open)}
                    className={cn(
                        "w-full flex items-center justify-between gap-2 rounded-lg border px-3 py-2.5 text-sm text-left transition-all duration-200",
                        "bg-neutral-800/60 border-neutral-700",
                        "hover:border-neutral-500 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20",
                        "disabled:opacity-50 disabled:cursor-not-allowed",
                        open && "border-brand-primary ring-2 ring-brand-primary/20",
                        error && "border-red-500 focus:border-red-400",
                    )}
                >
                    <span className={cn("flex items-center gap-2 flex-1 min-w-0", !selected && "text-neutral-600")}>
                        {selected?.icon}
                        <span className="truncate">{selected ? selected.label : placeholder}</span>
                    </span>
                    <ChevronDown
                        className={cn("h-4 w-4 text-neutral-500 flex-shrink-0 transition-transform duration-200", open && "rotate-180")}
                    />
                </button>

                {open && (
                    <div className="absolute z-50 w-full mt-1.5 rounded-lg border border-neutral-700 bg-neutral-800 shadow-xl overflow-hidden animate-fade-in">
                        <ul className="py-1 max-h-60 overflow-y-auto scrollbar-thin">
                            {options.map((option) => (
                                <li key={option.value}>
                                    <button
                                        type="button"
                                        disabled={option.disabled}
                                        onClick={() => {
                                            onChange?.(option.value);
                                            setOpen(false);
                                        }}
                                        className={cn(
                                            "w-full flex items-center justify-between gap-2 px-3 py-2.5 text-sm text-left transition-colors duration-150",
                                            "hover:bg-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed",
                                            value === option.value ? "text-brand-primary" : "text-neutral-200"
                                        )}
                                    >
                                        <span className="flex items-center gap-2">
                                            {option.icon}
                                            {option.label}
                                        </span>
                                        {value === option.value && <Check className="h-4 w-4 flex-shrink-0" />}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            {error ? (
                <p className="text-xs text-red-400">{error}</p>
            ) : helperText ? (
                <p className="text-xs text-neutral-500">{helperText}</p>
            ) : null}
        </div>
    );
}
