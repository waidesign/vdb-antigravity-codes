import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Column, type ColumnProps } from "@/components/sections/column";

const cardVariants = cva(
    "rounded-xl border transition-all duration-200",
    {
        variants: {
            variant: {
                default:
                    "bg-neutral-800/40 border-[#6F6F6F] light:border-neutral-700",
                elevated:
                    "bg-neutral-800/60 border-[#6F6F6F] light:border-neutral-700 shadow-card",
                glass:
                    "glass",
                bordered:
                    "bg-transparent border-[#6F6F6F] light:border-neutral-700",
                brand:
                    "bg-neutral-800/40 border-brand-primary/30 shadow-[0_0_20px_rgba(245,145,32,0.08)]",
                dark:
                    "bg-neutral-900 border-[#6F6F6F]",
            },
            hoverable: {
                true: "hover:border-neutral-600 hover:shadow-card-hover cursor-pointer hover-lift",
                false: "",
            },
        },
        defaultVariants: {
            variant: "default",
            hoverable: false,
        },
    }
);

export interface CardProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
    layout?: 'one-column' | 'two-column' | 'three-column' | 'four-column' | 'five-column' | 'six-column' | 'seven-column' | 'eight-column' | 'nine-column' | 'ten-column';
    alignment?: 'left' | 'center' | 'right';
    columns?: ColumnProps[];
    isMCP?: boolean;
}

function getLayoutClass(layout: string | undefined) {
    switch (layout) {
        case 'one-column': return 'grid-cols-1 max-w-4xl mx-auto';
        case 'two-column': return 'grid-cols-1 md:grid-cols-2';
        case 'three-column': return 'grid-cols-1 md:grid-cols-3';
        case 'four-column': return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
        case 'five-column': return 'grid-cols-1 md:grid-cols-3 lg:grid-cols-5';
        case 'six-column': return 'grid-cols-1 md:grid-cols-3 lg:grid-cols-6';
        case 'seven-column': return 'grid-cols-1 md:grid-cols-4 lg:grid-cols-7';
        case 'eight-column': return 'grid-cols-1 md:grid-cols-4 lg:grid-cols-8';
        case 'nine-column': return 'grid-cols-1 md:grid-cols-5 lg:grid-cols-9';
        case 'ten-column': return 'grid-cols-1 md:grid-cols-5 lg:grid-cols-10';
        default: return 'grid-cols-1';
    }
}

function getAlignmentClass(alignment: string | undefined) {
    switch (alignment) {
        case 'center': return 'items-center text-center';
        case 'right': return 'items-end text-right';
        case 'left':
        default: return 'items-start text-left';
    }
}

export function Card({ className, variant, hoverable, layout, alignment = 'left', columns, isMCP, children, ...props }: CardProps) {
    // CMS Driven Layout
    if (columns && columns.length > 0) {
        return (
            <div
                className={cn(cardVariants({ variant, hoverable }), "p-6 sm:p-8", className)}
                {...props}
            >
                <div className={cn("grid gap-8 w-full", getLayoutClass(layout || 'one-column'), getAlignmentClass(alignment))}>
                    {columns.map((col, idx) => (
                        <Column key={idx} {...col} isMCP={isMCP} />
                    ))}
                </div>
            </div>
        );
    }

    // Standard static rendering
    return (
        <div
            className={cn(cardVariants({ variant, hoverable }), className)}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("flex flex-col space-y-1.5 p-5 sm:p-6", className)} {...props} />
    );
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3 className={cn("text-lg font-semibold text-neutral-100 leading-tight", className)} {...props} />
    );
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p className={cn("text-sm text-neutral-400 leading-relaxed", className)} {...props} />
    );
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("p-5 sm:p-6 pt-0", className)} {...props} />
    );
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("flex items-center gap-3 px-5 sm:px-6 py-4 border-t border-[#6F6F6F] light:border-neutral-700", className)}
            {...props}
        />
    );
}
