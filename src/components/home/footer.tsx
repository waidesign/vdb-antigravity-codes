import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const footerLinks = {
    Products: [
        { label: "VIN Decoding APIs", href: "#" },
        { label: "OCR APIs", href: "#" },
        { label: "License Plate Decoding APIs", href: "#" },
        { label: "Vehicle Information APIs", href: "#" },
        { label: "Vehicle History APIs", href: "#" },
    ],
    Resources: [
        { label: "Case Studies Detailed Vehicle History", href: "#" },
        { label: "Book a Meeting", href: "/schedule-a-demo" },
        { label: "Docs", href: "#" },
        { label: "Free Trial", href: "#" },
        { label: "Client Login", href: "#" },
        { label: "Blog", href: "/blog" },
        { label: "Terms & Conditions", href: "#" },
        { label: "Privacy Policy", href: "#" },
    ],
};

const connectItems = [
    { label: "65 Brunswick Blvd, Dollard-Des Ormeaux, Quebec, CA.", href: null },
    { label: "(800)-205-9337", href: "tel:8002059337" },
    { label: "support@vehicledatabases.com", href: "mailto:support@vehicledatabases.com" },
];

export function Footer() {
    return (
        <footer
            className="w-full"
            style={{
                background: "#171717",
                borderTop: "1px solid #6F6F6F",
                padding: "80px",
            }}
        >
            <div className="section-content flex flex-col gap-10">
                {/* Top: three-column link grid */}
                <div
                    className="flex gap-10 pb-10"
                    style={{ borderBottom: "1px solid #6F6F6F" }}
                >
                    {/* Products */}
                    <div className="flex flex-col gap-4 flex-1">
                        <span
                            className="font-geist font-semibold"
                            style={{ fontSize: 20, lineHeight: "1.4em", color: "rgba(255,255,255,0.92)" }}
                        >
                            Products
                        </span>
                        <div className="flex flex-col gap-2">
                            {footerLinks.Products.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="font-geist transition-colors hover:text-white"
                                    style={{ fontSize: 16, lineHeight: "1.5em", color: "rgba(255,255,255,0.59)" }}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Resources */}
                    <div className="flex flex-col gap-4 flex-1">
                        <span
                            className="font-geist font-semibold"
                            style={{ fontSize: 20, lineHeight: "1.4em", color: "rgba(255,255,255,0.92)" }}
                        >
                            Resources
                        </span>
                        <div className="flex flex-col gap-2">
                            {footerLinks.Resources.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="font-geist transition-colors hover:text-white"
                                    style={{ fontSize: 16, lineHeight: "1.5em", color: "rgba(255,255,255,0.59)" }}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Connect with Us */}
                    <div className="flex flex-col gap-4 flex-1">
                        <span
                            className="font-geist font-semibold"
                            style={{ fontSize: 20, lineHeight: "1.4em", color: "rgba(255,255,255,0.92)" }}
                        >
                            Connect with Us
                        </span>
                        <div className="flex flex-col gap-2">
                            {connectItems.map((item) =>
                                item.href ? (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="font-geist transition-colors hover:text-white"
                                        style={{ fontSize: 16, lineHeight: "1.5em", color: "rgba(255,255,255,0.59)" }}
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <p
                                        key={item.label}
                                        className="font-geist"
                                        style={{ fontSize: 16, lineHeight: "1.5em", color: "rgba(255,255,255,0.59)" }}
                                    >
                                        {item.label}
                                    </p>
                                )
                            )}
                            <Link
                                href="#"
                                className="flex items-center gap-2 font-geist transition-colors hover:text-white"
                                style={{ fontSize: 16, lineHeight: "1.5em", color: "rgba(255,255,255,0.59)" }}
                            >
                                Chat on WhatsApp
                                <ExternalLink size={16} className="shrink-0" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom: Logo left | Social icons + copyright right */}
                <div className="flex items-center justify-between gap-6">
                    {/* Logo */}
                    <Image
                        src="/images/footer-logo.svg"
                        alt="Vehicle Databases"
                        width={384}
                        height={96}
                        className="h-16 w-auto"
                    />

                    {/* Right side: social icons + copyright */}
                    <div className="flex flex-col items-end gap-8">
                        <Image
                            src="/images/footer-social-icons.svg"
                            alt="Social media"
                            width={280}
                            height={40}
                        />
                        <p
                            className="font-geist"
                            style={{ fontSize: 16, lineHeight: "1.5em", color: "rgba(255,255,255,0.92)" }}
                        >
                            ©2018 - 2026 Vehicle Databases. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
