"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
    id: string;
    label: string;
    icon?: React.ReactNode;
    badge?: string | number;
    disabled?: boolean;
    content?: React.ReactNode;
}

interface TabsProps {
    items: TabItem[];
    defaultTab?: string;
    variant?: "line" | "pill" | "card";
    className?: string;
}

export function Tabs({ items, defaultTab, variant = "line", className }: TabsProps) {
    const [active, setActive] = useState(defaultTab ?? items[0]?.id);

    const trackStyles = {
        line: "border-b border-neutral-700/80",
        pill: "bg-neutral-800 p-1 rounded-xl",
        card: "border-b border-neutral-700/60",
    };

    const tabStyles = {
        line: (isActive: boolean) => cn(
            "flex items-center whitespace-nowrap shrink-0 gap-2 px-1 py-3 text-sm font-medium border-b-2 transition-colors duration-200 -mb-px",
            isActive
                ? "border-brand-primary text-brand-primary"
                : "border-transparent text-neutral-400 hover:text-neutral-200 hover:border-neutral-500"
        ),
        pill: (isActive: boolean) => cn(
            "flex items-center whitespace-nowrap shrink-0 gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
            isActive
                ? "bg-neutral-700 text-neutral-100 shadow-sm"
                : "text-neutral-400 hover:text-neutral-200"
        ),
        card: (isActive: boolean) => cn(
            "flex items-center whitespace-nowrap shrink-0 gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors duration-200 -mb-px",
            isActive
                ? "border-brand-primary text-brand-primary bg-brand-primary/5"
                : "border-transparent text-neutral-500 hover:text-neutral-300"
        ),
    };

    const activeItem = items.find((item) => item.id === active);

    return (
        <div className={className}>
            <div className={cn("flex gap-1 overflow-x-auto scrollbar-hide", trackStyles[variant])}>
                {items.map((item) => (
                    <button
                        key={item.id}
                        disabled={item.disabled}
                        onClick={() => !item.disabled && setActive(item.id)}
                        className={cn(
                            tabStyles[variant](item.id === active),
                            item.disabled && "opacity-40 cursor-not-allowed"
                        )}
                    >
                        {item.icon}
                        {item.label}
                        {item.badge !== undefined && (
                            <span className="ml-1 px-1.5 py-0.5 rounded-full text-xs bg-neutral-700 text-neutral-300">
                                {item.badge}
                            </span>
                        )}
                    </button>
                ))}
            </div>
            {activeItem?.content && (
                <div className="pt-4 animate-fade-in">{activeItem.content}</div>
            )}
        </div>
    );
}
