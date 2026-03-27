import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
    label: string;
    href?: string;
    icon?: React.ReactNode;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    showHome?: boolean;
    className?: string;
}

export function Breadcrumb({ items, showHome = false, className }: BreadcrumbProps) {
    const all = showHome ? [{ label: "Home", href: "/", icon: <Home className="h-3.5 w-3.5" /> }, ...items] : items;

    return (
        <nav aria-label="Breadcrumb" className={cn("flex items-center gap-1.5 text-sm", className)}>
            {all.map((item, i) => {
                const isLast = i === all.length - 1;
                return (
                    <span key={i} className="flex items-center gap-1.5">
                        {item.href && !isLast ? (
                            <Link
                                href={item.href}
                                className="flex items-center gap-1 text-neutral-500 hover:text-neutral-200 transition-colors"
                            >
                                {item.icon}
                                {item.label}
                            </Link>
                        ) : (
                            <span className={cn("flex items-center gap-1", isLast ? "text-neutral-200 font-medium" : "text-neutral-500")}>
                                {item.icon}
                                {item.label}
                            </span>
                        )}
                        {!isLast && <ChevronRight className="h-3.5 w-3.5 text-neutral-700" />}
                    </span>
                );
            })}
        </nav>
    );
}
