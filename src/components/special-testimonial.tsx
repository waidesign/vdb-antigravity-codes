"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────────────────────
 * Types & Interfaces
 * ───────────────────────────────────────────────────────────────────────────── */

export interface SpecialTestimonialProps {
  /** Section heading rendered above the quote. Defaults to "Testimonial". */
  heading?: string;
  /** The main testimonial quote text. */
  quote: string;
  /** Author / role label, e.g. "Product Manager" */
  author: string;
  /** Company name shown below the author, e.g. "Detailed Vehicle History" */
  company: string;
  /** Optional company/partner logo image URL */
  logoSrc?: string;
  /** Alt text for the logo image */
  logoAlt?: string;
  /** Optional explicit width for logo (px). Defaults to 56 */
  logoWidth?: number;
  /** Optional explicit height for logo (px). Defaults to 24 */
  logoHeight?: number;
  /** Optional extra className for the outer section wrapper */
  className?: string;
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Decorative Quote Mark SVG
 * ───────────────────────────────────────────────────────────────────────────── */

function QuoteMark({
  flip = false,
  className,
}: {
  flip?: boolean;
  className?: string;
}) {
  return (
    <svg
      width="56"
      height="48"
      viewBox="0 0 56 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "shrink-0 select-none",
        flip && "scale-x-[-1]",
        className
      )}
      aria-hidden="true"
    >
      {/* Left quote glyph */}
      <path
        d="M0 48V28.8C0 20.16 1.6 13.12 4.8 7.68C8.16 2.24 13.44 0 20.64 0L24 4.8C19.52 5.76 16.16 8.16 13.92 12C11.84 15.84 10.8 20.32 10.8 25.44H21.6V48H0ZM30.4 48V28.8C30.4 20.16 32 13.12 35.2 7.68C38.56 2.24 43.84 0 51.04 0L54.4 4.8C49.92 5.76 46.56 8.16 44.32 12C42.24 15.84 41.2 20.32 41.2 25.44H52V48H30.4Z"
        fill="url(#quote-gradient)"
      />
      <defs>
        <linearGradient id="quote-gradient" x1="0" y1="0" x2="54" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59120" />
          <stop offset="1" stopColor="#9747FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Main Component
 * ───────────────────────────────────────────────────────────────────────────── */

export default function SpecialTestimonial({
  heading = "Testimonial",
  quote,
  author,
  company,
  logoSrc,
  logoAlt,
  logoWidth = 64,
  logoHeight = 28,
  className,
}: SpecialTestimonialProps) {
  return (
    <section
      className={cn(
        "w-full py-20 lg:py-28 bg-black overflow-hidden",
        className
      )}
    >
      <div className="mx-auto max-w-4xl px-6 md:px-12 lg:px-8 flex flex-col items-center gap-10 lg:gap-14 text-center">
        {/* ── Heading ── */}
        <h2 className="font-aileron font-semibold text-3xl lg:text-4xl text-white tracking-tight">
          {heading}
        </h2>

        {/* ── Quote block ── */}
        <div className="flex items-start gap-6 lg:gap-10">
          {/* Opening quote mark */}
          <QuoteMark className="mt-1 lg:mt-2 opacity-90" />

          {/* Quote text */}
          <blockquote className="font-geist text-lg lg:text-xl xl:text-2xl text-white/80 leading-[1.7] font-medium text-center">
            {quote}
          </blockquote>

          {/* Closing quote mark (mirrored) */}
          <QuoteMark flip className="mt-auto mb-1 lg:mb-2 opacity-90" />
        </div>

        {/* ── Attribution ── */}
        <div className="flex flex-col items-center gap-3 pt-2">
          {/* Logo */}
          {logoSrc && (
            <div className="relative mb-1" style={{ width: logoWidth, height: logoHeight }}>
              <Image
                src={logoSrc}
                alt={logoAlt || company}
                fill
                className="object-contain"
              />
            </div>
          )}

          {/* Author */}
          <span className="font-aileron font-semibold text-base lg:text-lg text-white">
            {author}
          </span>

          {/* Company */}
          <span className="font-geist text-sm lg:text-base text-white/50">
            {company}
          </span>
        </div>
      </div>
    </section>
  );
}
