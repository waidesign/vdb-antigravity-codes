"use client";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva(
    "flex items-start gap-3 rounded-xl border p-4 text-sm",
    {
        variants: {
            variant: {
                info: "bg-blue-500/8 border-neutral-800 light:border-neutral-700 text-blue-300",
                success: "bg-green-500/8 border-neutral-800 light:border-neutral-700 text-green-300",
                warning: "bg-orange-500/8 border-neutral-800 light:border-neutral-700 text-orange-300",
                error: "bg-red-500/8 border-neutral-800 light:border-neutral-700 text-red-300",
                neutral: "bg-neutral-800 border-neutral-800 light:border-neutral-700 text-neutral-300",
            },
        },
        defaultVariants: { variant: "info" },
    }
);

const icons = {
    info: <Info className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />,
    success: <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />,
    warning: <AlertTriangle className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />,
    error: <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />,
    neutral: <Info className="h-5 w-5 text-neutral-400 flex-shrink-0 mt-0.5" />,
};

export interface AlertProps extends VariantProps<typeof alertVariants> {
    title?: string;
    children?: React.ReactNode;
    dismissible?: boolean;
    className?: string;
}

export function Alert({ variant = "info", title, children, dismissible, className }: AlertProps) {
    const [dismissed, setDismissed] = useState(false);
    if (dismissed) return null;

    return (
        <div className={cn(alertVariants({ variant }), className)}>
            {icons[variant ?? "info"]}
            <div className="flex-1 min-w-0">
                {title && <p className="font-semibold mb-0.5">{title}</p>}
                {children && <div className="text-sm opacity-90 leading-relaxed">{children}</div>}
            </div>
            {dismissible && (
                <button
                    onClick={() => setDismissed(true)}
                    className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity"
                >
                    <X className="h-4 w-4" />
                </button>
            )}
        </div>
    );
}
