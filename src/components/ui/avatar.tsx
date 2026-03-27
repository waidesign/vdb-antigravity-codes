import { cva, type VariantProps } from "class-variance-authority";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

const avatarVariants = cva(
    "relative inline-flex items-center justify-center rounded-full overflow-hidden flex-shrink-0",
    {
        variants: {
            size: {
                xs: "w-6 h-6 text-[10px]",
                sm: "w-8 h-8 text-xs",
                md: "w-10 h-10 text-sm",
                lg: "w-12 h-12 text-base",
                xl: "w-16 h-16 text-xl",
                "2xl": "w-20 h-20 text-2xl",
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
);

export interface AvatarProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
    src?: string;
    alt?: string;
    initials?: string;
    status?: "online" | "offline" | "away" | "busy";
}

const statusColors = {
    online: "bg-green-500",
    offline: "bg-neutral-500",
    away: "bg-orange-400",
    busy: "bg-red-500",
};

const statusSizes = {
    xs: "w-1.5 h-1.5",
    sm: "w-2 h-2",
    md: "w-2.5 h-2.5",
    lg: "w-3 h-3",
    xl: "w-3.5 h-3.5",
    "2xl": "w-4 h-4",
};

function getInitialsBg(initials?: string) {
    const colors = [
        "bg-blue-600", "bg-purple-600", "bg-green-600",
        "bg-orange-500", "bg-red-600", "bg-brand-tertiary",
    ];
    if (!initials) return colors[0];
    const idx = initials.charCodeAt(0) % colors.length;
    return colors[idx];
}

export function Avatar({ className, size, src, alt, initials, status, ...props }: AvatarProps) {
    return (
        <div className="relative inline-flex" {...props}>
            <div className={cn(avatarVariants({ size }), !src && getInitialsBg(initials), className)}>
                {src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={src} alt={alt || initials || "avatar"} className="w-full h-full object-cover" />
                ) : initials ? (
                    <span className="font-semibold text-white">{initials}</span>
                ) : (
                    <User className="w-1/2 h-1/2 text-white" />
                )}
            </div>
            {status && (
                <span
                    className={cn(
                        "absolute bottom-0 right-0 rounded-full border-2 border-neutral-900",
                        statusColors[status],
                        statusSizes[size ?? "md"]
                    )}
                />
            )}
        </div>
    );
}

export function AvatarGroup({ children, max = 4, className }: { children: React.ReactNode; max?: number; className?: string }) {
    const avatars = Array.isArray(children) ? children : [children];
    const shown = avatars.slice(0, max);
    const rest = avatars.length - max;

    return (
        <div className={cn("flex -space-x-3", className)}>
            {shown.map((child, i) => (
                <div key={i} className="ring-2 ring-neutral-900 rounded-full">
                    {child}
                </div>
            ))}
            {rest > 0 && (
                <div className="ring-2 ring-neutral-900 rounded-full w-10 h-10 bg-neutral-700 flex items-center justify-center text-xs font-semibold text-neutral-300">
                    +{rest}
                </div>
            )}
        </div>
    );
}
