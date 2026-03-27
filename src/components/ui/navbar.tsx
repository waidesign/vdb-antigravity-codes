"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface NavItem {
    label: string;
    href: string;
    badge?: string;
}

interface NavbarProps {
    logo?: React.ReactNode;
    items?: NavItem[];
    actions?: React.ReactNode;
    className?: string;
}

const defaultItems: NavItem[] = [
    { label: "Components", href: "/test-section" },
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Status", href: "#", badge: "99.99%" },
];

export function Navbar({ logo, items = defaultItems, actions, className }: NavbarProps) {
    const [open, setOpen] = useState(false);

    return (
        <header className={cn(
            "fixed top-0 inset-x-0 z-40 glass border-b border-neutral-700/30",
            className
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
                        {logo ?? (
                            <>
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-[0_0_12px_rgba(245,145,32,0.4)]">
                                    <Zap className="h-4 w-4 text-neutral-900" />
                                </div>
                                <span className="font-bold text-lg text-neutral-100">VDB<span className="text-brand-primary">.</span></span>
                            </>
                        )}
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-0.5">
                        {items.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/60 transition-all duration-150"
                            >
                                {item.label}
                                {item.badge && (
                                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-green-500/15 text-green-400 font-medium">
                                        {item.badge}
                                    </span>
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-2">
                        {actions ?? (
                            <>
                                <Button variant="ghost" size="sm">Sign In</Button>
                                <Button variant="primary" size="sm">Get API Key</Button>
                            </>
                        )}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden rounded-lg p-2 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 transition-colors"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden pb-4 pt-2 border-t border-neutral-700/50 animate-slide-in-up">
                        <nav className="flex flex-col gap-1">
                            {items.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-neutral-300 hover:bg-neutral-800 hover:text-neutral-100 transition-colors"
                                >
                                    {item.label}
                                    {item.badge && (
                                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-green-500/15 text-green-400 font-medium">
                                            {item.badge}
                                        </span>
                                    )}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-neutral-700/50">
                                <Button variant="secondary" size="md" className="w-full">Sign In</Button>
                                <Button variant="primary" size="md" className="w-full">Get API Key</Button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
