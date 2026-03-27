import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
    "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset",
    {
        variants: {
            variant: {
                neutral:
                    "bg-neutral-800 text-neutral-300 ring-neutral-700/50",
                info:
                    "bg-blue-500/10 text-blue-300 ring-blue-500/30",
                success:
                    "bg-green-500/10 text-green-300 ring-green-500/30",
                warning:
                    "bg-orange-500/10 text-orange-300 ring-orange-500/30",
                error:
                    "bg-red-500/10 text-red-300 ring-red-500/30",
                brand:
                    "bg-brand-primary/10 text-brand-primary ring-brand-primary/30",
                purple:
                    "bg-purple-500/10 text-purple-300 ring-purple-500/30",
                outline:
                    "bg-transparent text-neutral-300 ring-neutral-700",
            },
            size: {
                sm: "px-2 py-0.5 text-[10px]",
                md: "px-2.5 py-0.5 text-xs",
                lg: "px-3 py-1 text-sm",
            },
        },
        defaultVariants: {
            variant: "neutral",
            size: "md",
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
    dot?: boolean;
}

export function Badge({ className, variant, size, dot, children, ...props }: BadgeProps) {
    const dotColors: Record<string, string> = {
        neutral: "bg-neutral-400",
        info: "bg-blue-400",
        success: "bg-green-400",
        warning: "bg-orange-400",
        error: "bg-red-400",
        brand: "bg-brand-primary",
        purple: "bg-purple-400",
        outline: "bg-neutral-400",
    };

    return (
        <span className={cn(badgeVariants({ variant, size }), className)} {...props}>
            {dot && (
                <span
                    className={cn(
                        "inline-block w-1.5 h-1.5 rounded-full",
                        dotColors[variant ?? "neutral"]
                    )}
                />
            )}
            {children}
        </span>
    );
}
