"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, CloudDownload, Menu, X } from "lucide-react";

const navLinks = [
    { label: "API Services", href: "#", hasDropdown: true },
    { label: "Industries", href: "#", hasDropdown: true },
    { label: "Docs", href: "#" },
    { label: "Book a Meeting", href: "/schedule-a-demo" },
    { label: "Blog", href: "/blog" },
    { label: "Automotive Database", href: "#", hasCloudIcon: true },
];

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 border-b"
            style={{
                height: 80,
                background: "#000000",
                borderBottomColor: "transparent",
                borderImage:
                    "linear-gradient(90deg, rgba(243,243,243,0) 0%, rgba(245,145,32,1) 50%, rgba(243,243,243,0) 100%) 1",
            }}
        >
            <div
                className="section-content h-full flex items-center justify-between px-20"
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 shrink-0">
                    <Image src="/images/logo.svg" alt="Vehicle Databases" width={128} height={32} priority />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="flex items-center gap-0 text-white/59 hover:text-white transition-colors duration-200 font-aileron font-semibold text-base leading-6 whitespace-nowrap"
                            style={{ color: "rgba(255,255,255,0.59)" }}
                        >
                            <span>{link.label}</span>
                            {link.hasDropdown && <ChevronDown size={24} className="ml-0 opacity-70" />}
                            {link.hasCloudIcon && <CloudDownload size={24} className="ml-0 opacity-70" />}
                        </Link>
                    ))}
                </nav>

                {/* CTA Buttons */}
                <div className="hidden lg:flex items-center gap-2 shrink-0">
                    <Link
                        href="#"
                        className="flex items-center justify-center gap-2 px-3 py-1 rounded-lg font-aileron font-semibold text-xs text-white/92 transition-opacity hover:opacity-80 active:opacity-70"
                        style={{
                            border: "1px solid rgba(255,255,255,0.92)",
                            color: "rgba(255,255,255,0.92)",
                        }}
                    >
                        Client login
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center justify-center gap-2 px-3 py-1 rounded-lg font-aileron font-semibold text-xs text-white/92 transition-opacity hover:opacity-80 active:opacity-70"
                        style={{
                            background: "linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)",
                            color: "rgba(255,255,255,0.92)",
                        }}
                    >
                        FREE trial
                        <Image src="/images/arrow-white.svg" alt="" width={5} height={9} />
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    className="lg:hidden text-white p-2"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div
                    className="lg:hidden fixed inset-0 top-20 z-40 flex flex-col gap-6 px-6 py-8"
                    style={{ background: "#000000" }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors font-aileron font-semibold text-lg"
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                            {link.hasDropdown && <ChevronDown size={20} />}
                        </Link>
                    ))}
                    <div className="flex flex-col gap-3 mt-4">
                        <Link
                            href="#"
                            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-aileron font-semibold text-sm text-white/92 border border-white/92"
                            style={{ color: "rgba(255,255,255,0.92)" }}
                        >
                            Client login
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-aileron font-semibold text-sm text-white"
                            style={{
                                background: "linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)",
                            }}
                        >
                            FREE trial
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
