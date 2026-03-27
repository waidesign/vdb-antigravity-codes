"use client";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98]",
    {
        variants: {
            variant: {
                primary:
                    "bg-gradient-to-r from-[#F59120] to-[#9747FF] text-white hover:opacity-90 shadow-[0_0_20px_rgba(245,145,32,0.25)] hover:shadow-[0_0_28px_rgba(245,145,32,0.4)]",
                secondary:
                    "bg-transparent border border-neutral-700 text-neutral-200 hover:border-neutral-400 hover:bg-neutral-800/60",
                ghost:
                    "bg-transparent text-neutral-300 hover:bg-neutral-800/60 hover:text-neutral-100",
                danger:
                    "bg-red-500 text-white hover:bg-red-400 shadow-[0_0_16px_rgba(210,39,47,0.2)] hover:shadow-[0_0_24px_rgba(210,39,47,0.35)]",
                outline:
                    "bg-transparent border border-neutral-700 text-neutral-200 hover:border-neutral-400 hover:bg-neutral-800/60",
                gradient:
                    "bg-gradient-to-r from-[#F59120] to-[#9747FF] text-white hover:opacity-90 shadow-[0_4px_15px_rgba(245,145,32,0.3)]",
            },
            size: {
                sm: "h-8 px-3 text-sm rounded-md",
                md: "h-10 px-4 text-sm",
                lg: "h-12 px-6 text-base",
                xl: "h-14 px-8 text-lg",
                icon: "h-10 w-10 p-0",
                "icon-sm": "h-8 w-8 p-0 rounded-md",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, isLoading, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
        return (
            <button
                ref={ref}
                disabled={disabled || isLoading}
                className={cn(buttonVariants({ variant, size }), className)}
                {...props}
            >
                {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                    leftIcon
                )}
                {children}
                {!isLoading && rightIcon}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
