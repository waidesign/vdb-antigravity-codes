"use client";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
    label?: string;
    description?: string;
    size?: "sm" | "md" | "lg";
}

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
    ({ className, label, description, size = "md", ...props }, ref) => {
        const sizes = {
            sm: { track: "w-8 h-4", thumb: "w-3 h-3 peer-checked:translate-x-4" },
            md: { track: "w-11 h-6", thumb: "w-5 h-5 peer-checked:translate-x-5" },
            lg: { track: "w-14 h-7", thumb: "w-6 h-6 peer-checked:translate-x-7" },
        };
        const s = sizes[size];

        return (
            <label className="flex items-center gap-3 cursor-pointer group select-none">
                <div className="relative flex-shrink-0">
                    <input
                        ref={ref}
                        type="checkbox"
                        role="switch"
                        className="sr-only peer"
                        {...props}
                    />
                    <div
                        className={cn(
                            "relative rounded-full border border-neutral-700 transition-all duration-300",
                            "bg-neutral-800 peer-checked:bg-brand-primary peer-checked:border-brand-primary",
                            "peer-focus-visible:ring-2 peer-focus-visible:ring-brand-primary/30 peer-focus-visible:ring-offset-1 peer-focus-visible:ring-offset-neutral-900",
                            "peer-disabled:opacity-50",
                            s.track,
                            className
                        )}
                    >
                        <div
                            className={cn(
                                "absolute top-0.5 left-0.5 rounded-full bg-white shadow-sm transition-transform duration-300",
                                s.thumb
                            )}
                        />
                    </div>
                </div>
                {(label || description) && (
                    <div className="flex flex-col">
                        {label && (
                            <span className={cn(
                                "font-medium text-neutral-300",
                                size === "sm" ? "text-xs" : size === "lg" ? "text-base" : "text-sm",
                                props.disabled && "opacity-50"
                            )}>
                                {label}
                            </span>
                        )}
                        {description && (
                            <span className="text-xs text-neutral-500 mt-0.5">{description}</span>
                        )}
                    </div>
                )}
            </label>
        );
    }
);
Toggle.displayName = "Toggle";
export { Toggle };
