import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "@fontsource/aileron/300.css";
import "@fontsource/aileron/400.css";
import "@fontsource/aileron/600.css";
import "@fontsource/aileron/700.css";
import "@fontsource/aileron/800.css";
import "../styles/globals.css";

export const metadata: Metadata = {
    title: "VDB — Vehicle Data API | Fast, Reliable VIN Decoding",
    description:
        "The most powerful Vehicle Database API for SaaS applications. Decode VINs, lookup specs, and access real-time vehicle data at scale.",
};

import { Agentation } from "agentation";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scrollbar-thin">
            <body className={`${GeistSans.variable} min-h-screen bg-black text-neutral-100 antialiased`}>
                {children}
                {process.env.NODE_ENV === "development" && <Agentation />}
            </body>
        </html>
    );
}
