"use client";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    helperText?: string;
    error?: string;
    showCount?: boolean;
    maxLength?: number;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, label, helperText, error, showCount, maxLength, value, ...props }, ref) => {
        const charCount = typeof value === "string" ? value.length : 0;

        return (
            <div className="flex flex-col gap-1.5 w-full">
                {label && (
                    <label className="text-sm font-medium text-neutral-300">
                        {label}
                        {props.required && <span className="text-red-400 ml-1">*</span>}
                    </label>
                )}
                <textarea
                    ref={ref}
                    value={value}
                    maxLength={maxLength}
                    className={cn(
                        "w-full rounded-lg border bg-[#171717] light:bg-neutral-800 text-neutral-100 placeholder:text-neutral-600",
                        "px-3 py-2.5 text-sm resize-y min-h-[100px] transition-all duration-200",
                        "border-neutral-700 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none",
                        "disabled:opacity-50 disabled:cursor-not-allowed scrollbar-thin",
                        error && "border-red-500 focus:border-red-400 focus:ring-red-500/20",
                        className
                    )}
                    {...props}
                />
                <div className="flex justify-between items-center">
                    <div>
                        {error ? (
                            <p className="text-xs text-red-400">{error}</p>
                        ) : helperText ? (
                            <p className="text-xs text-neutral-500">{helperText}</p>
                        ) : null}
                    </div>
                    {showCount && maxLength && (
                        <span className={cn("text-xs ml-auto", charCount >= maxLength ? "text-red-400" : "text-neutral-600")}>
                            {charCount}/{maxLength}
                        </span>
                    )}
                </div>
            </div>
        );
    }
);
Textarea.displayName = "Textarea";
export { Textarea };
