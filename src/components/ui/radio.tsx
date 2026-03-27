"use client";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
    description?: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
    ({ className, label, description, ...props }, ref) => {
        return (
            <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex-shrink-0 mt-0.5">
                    <input
                        ref={ref}
                        type="radio"
                        className="sr-only peer"
                        {...props}
                    />
                    <div
                        className={cn(
                            "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200",
                            "border-neutral-600 bg-[#171717] light:bg-neutral-800",
                            "peer-checked:border-brand-primary",
                            "peer-focus-visible:ring-2 peer-focus-visible:ring-brand-primary/30",
                            "group-hover:border-neutral-400",
                            "[&>div]:opacity-0 peer-checked:[&>div]:opacity-100",
                            props.disabled && "opacity-50 cursor-not-allowed",
                            className
                        )}
                    >
                        <div className="w-2.5 h-2.5 rounded-full bg-brand-primary transition-opacity" />
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
                    </div>
                )}
            </label>
        );
    }
);
Radio.displayName = "Radio";

export interface RadioGroupProps {
    label?: string;
    children: React.ReactNode;
    className?: string;
}

export function RadioGroup({ label, children, className }: RadioGroupProps) {
    return (
        <fieldset className={cn("flex flex-col gap-3", className)}>
            {label && <legend className="text-sm font-medium text-neutral-300 mb-1">{label}</legend>}
            {children}
        </fieldset>
    );
}

export { Radio };
