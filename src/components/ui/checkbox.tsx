"use client";
import { forwardRef } from "react";
import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
    description?: string;
    indeterminate?: boolean;
    error?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className, label, description, indeterminate, error, checked, ...props }, ref) => {
        return (
            <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex-shrink-0 mt-0.5">
                    <input
                        ref={ref}
                        type="checkbox"
                        checked={checked}
                        className="sr-only peer"
                        {...props}
                    />
                    <div
                        className={cn(
                            "w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200",
                            "border-neutral-600 bg-[#171717] light:bg-neutral-800",
                            "peer-checked:bg-brand-primary peer-checked:border-brand-primary",
                            "peer-focus-visible:ring-2 peer-focus-visible:ring-brand-primary/30 peer-focus-visible:ring-offset-1 peer-focus-visible:ring-offset-neutral-900",
                            "group-hover:border-neutral-400",
                            error && "border-red-500",
                            props.disabled && "opacity-50 cursor-not-allowed",
                            className
                        )}
                    >
                        {indeterminate ? (
                            <Minus className="h-3 w-3 text-brand-primary" />
                        ) : (
                            <Check className="h-3 w-3 text-neutral-900 font-bold opacity-0 transition-opacity peer-checked:opacity-100" strokeWidth={3} />
                        )}
                    </div>
                </div>
                {(label || description) && (
                    <div className="flex flex-col">
                        {label && (
                            <span className={cn("text-sm font-medium text-neutral-300", props.disabled && "opacity-50")}>
                                {label}
                            </span>
                        )}
                        {description && (
                            <span className="text-xs text-neutral-500 mt-0.5">{description}</span>
                        )}
                        {error && <span className="text-xs text-red-400 mt-0.5">{error}</span>}
                    </div>
                )}
            </label>
        );
    }
);
Checkbox.displayName = "Checkbox";
export { Checkbox };
