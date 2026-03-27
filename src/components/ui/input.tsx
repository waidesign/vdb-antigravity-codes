"use client";
import { forwardRef, useState } from "react";
import { Eye, EyeOff, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    helperText?: string;
    error?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    onClear?: () => void;
    variant?: "default" | "search" | "password";
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, helperText, error, leftIcon, rightIcon, onClear, variant, type, ...props }, ref) => {
        const [showPassword, setShowPassword] = useState(false);
        const isPassword = type === "password" || variant === "password";
        const isSearch = variant === "search";

        const inputType = isPassword ? (showPassword ? "text" : "password") : (isSearch ? "search" : type);

        return (
            <div className="flex flex-col gap-1.5 w-full">
                {label && (
                    <label className="text-sm font-medium text-neutral-300">
                        {label}
                        {props.required && <span className="text-red-400 ml-1">*</span>}
                    </label>
                )}
                <div className="relative flex items-center">
                    {(leftIcon || isSearch) && (
                        <div className="absolute left-3 text-neutral-500 pointer-events-none">
                            {isSearch ? <Search className="h-4 w-4" /> : leftIcon}
                        </div>
                    )}
                    <input
                        ref={ref}
                        type={inputType}
                        className={cn(
                            "w-full rounded-lg border bg-[#171717] light:bg-neutral-800 text-neutral-100 placeholder:text-neutral-600 transition-all duration-200",
                            "px-3 py-2.5 text-sm",
                            "border-neutral-700 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none",
                            "disabled:opacity-50 disabled:cursor-not-allowed",
                            error && "border-red-500 focus:border-red-400 focus:ring-red-500/20",
                            (leftIcon || isSearch) && "pl-9",
                            (rightIcon || isPassword || onClear) && "pr-9",
                            className
                        )}
                        {...props}
                    />
                    <div className="absolute right-3 flex items-center gap-1.5">
                        {onClear && props.value && (
                            <button
                                type="button"
                                onClick={onClear}
                                className="text-neutral-500 hover:text-neutral-300 transition-colors"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        )}
                        {isPassword && (
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="text-neutral-500 hover:text-neutral-300 transition-colors"
                            >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                        )}
                        {!isPassword && rightIcon && (
                            <div className="text-neutral-500">{rightIcon}</div>
                        )}
                    </div>
                </div>
                {error ? (
                    <p className="text-xs text-red-400">{error}</p>
                ) : helperText ? (
                    <p className="text-xs text-neutral-500">{helperText}</p>
                ) : null}
            </div>
        );
    }
);
Input.displayName = "Input";
export { Input };
