import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
 * 1. TypeScript Interfaces (CMS-driven props)
 * ───────────────────────────────────────────── */

/** A single CTA button rendered inside the hero */
export interface HeroCTA {
    text: string;
    href: string;
    variant: "primary" | "outline" | "whatsapp";
    icon?: {
        src: string;
        alt?: string;
        width?: number;
        height?: number;
    };
}

/** The announcement badge / pill shown above the heading */
export interface HeroBadge {
    label: string;
    text: string;
    href?: string;
}

/** Media block — image or video */
export interface HeroMedia {
    type: "image" | "video";
    url: string;
    alt?: string;
    width?: number;
    height?: number;
    posterUrl?: string;
}

/** Props specific to the `homepage` variant */
export interface HeroHomepageProps {
    variant: "homepage";
    heading: string;
    headingHighlight?: string;
    description: string;
    badge?: HeroBadge;
    ctas?: HeroCTA[];
    ctaFooterText?: string;
    media: HeroMedia;
}

/** Props specific to the `serviceWithMedia` variant */
export interface HeroServiceWithMediaProps {
    variant: "serviceWithMedia";
    theme?: "light" | "dark";
    heading: string;
    headingHighlight?: string;
    richText: string;
    ctas?: HeroCTA[];
    media: HeroMedia;
}

/** A single form field definition for the lookup form */
export interface HeroFormField {
    name: string;
    label?: string;
    placeholder: string;
    type: "text" | "email" | "tel" | "select";
    required?: boolean;
    options?: { value: string; label: string }[];
    fullWidth?: boolean;
}

/** Props specific to the `serviceWithForm` variant */
export interface HeroServiceWithFormProps {
    variant: "serviceWithForm";
    theme?: "light" | "dark";
    heading: string;
    headingHighlight?: string;
    richText: string;
    ctas?: HeroCTA[];
    form: {
        title: string;
        fields: HeroFormField[];
        submitLabel: string;
        action?: string;
    };
}

/** Props specific to the `centeredWithMedia` variant */
export interface HeroCenteredWithMediaProps {
    variant: "centeredWithMedia";
    theme?: "light" | "dark";
    heading: string;
    headingHighlight?: string;
    richText: string;
    ctas?: HeroCTA[];
    media: HeroMedia;
}

/** Props specific to the `backgroundImage` variant (Make/brand pages) */
export interface HeroBackgroundImageProps {
    variant: "backgroundImage";
    heading: string;
    headingHighlight?: string;
    richText: string;
    ctas?: HeroCTA[];
    backgroundImage: {
        url: string;
        alt?: string;
    };
    overlayOpacity?: number;
    contentAlign?: "left" | "center";
}

/** A key-value item in the case study overview */
export interface HeroCaseStudyDetail {
    label: string;
    value: string;
}

/** A single metric/result tile */
export interface HeroCaseStudyMetric {
    value: string;
    label: string;
}

/** Props specific to the `caseStudy` variant */
export interface HeroCaseStudyProps {
    variant: "caseStudy";
    theme?: "light" | "dark";
    badge?: {
        text: string;
    };
    heading: string;
    headingHighlight?: string;
    subheading?: string;
    overview: {
        title: string;
        details: HeroCaseStudyDetail[];
    };
    results: {
        title: string;
        metrics: HeroCaseStudyMetric[];
    };
}

/** Props specific to the `legalInformation` variant */
export interface HeroLegalInformationProps {
    variant: "legalInformation";
    heading: string;
    headingHighlight?: string;
    richText: string;
}

/** Props specific to the `aboutUs` variant */
export interface HeroAboutUsProps {
    variant: "aboutUs";
    theme?: "light" | "dark";
    heading: string;
    headingHighlight?: string;
    richText: string;
    calloutText: string;
    ctas?: HeroCTA[];
}

/** A single contact info detail line — address, phone, email, or support label */
export interface HeroContactDetail {
    icon?: "location" | "phone" | "email" | "support";
    text: string;
    href?: string;
}

/** Form field for the contactUs hero — extends the standard set with textarea support */
export interface HeroContactFormField {
    name: string;
    label?: string;
    placeholder: string;
    type: "text" | "email" | "tel" | "select" | "textarea";
    required?: boolean;
    options?: { value: string; label: string }[];
    fullWidth?: boolean;
    rows?: number;
}

/** Props specific to the `contactUs` variant */
export interface HeroContactUsProps {
    variant: "contactUs";
    theme?: "light" | "dark";
    heading: string;
    headingHighlight?: string;
    richText: string;
    contactDetails?: HeroContactDetail[];
    form: {
        title: string;
        fields: HeroContactFormField[];
        submitLabel: string;
        action?: string;
        recaptchaEnabled?: boolean;
        recaptchaSiteKey?: string;
    };
    ctaFooterText?: string;
    ctas?: HeroCTA[];
    media?: HeroMedia;
}

/** Interface for the MCP server access request variant */
export interface HeroMCPSection {
    heading?: string;
    richText?: string;
    listItems?: string[];
}

export interface HeroMCPCheckboxGroup {
    type: "checkboxGroup";
    name: string;
    label: string;
    options: { value: string; label: string }[];
}

export type HeroMCPFormField = HeroContactFormField | HeroMCPCheckboxGroup;

export interface HeroMCPProps {
    variant: "mcp";
    theme?: "light" | "dark";
    heading: string;
    headingHighlight?: string;
    tagline?: string;
    definitionText?: string;
    sections?: HeroMCPSection[];
    disclaimerText?: string;
    form: {
        title: string;
        fields: HeroMCPFormField[];
        submitLabel: string;
        action?: string;
        formDisclaimerText?: string;
    };
}

/** Union type — every variant goes through this single component */
export type HeroSectionProps =
    | HeroHomepageProps
    | HeroServiceWithMediaProps
    | HeroServiceWithFormProps
    | HeroCenteredWithMediaProps
    | HeroBackgroundImageProps
    | HeroCaseStudyProps
    | HeroLegalInformationProps
    | HeroAboutUsProps
    | HeroContactUsProps
    | HeroMCPProps;


/* ─────────────────────────────────────────────
 * 2. Shared sub-components
 * ───────────────────────────────────────────── */

/** Ambient gradient glow used behind hero content */
function GradientGlow({ className }: { className?: string }) {
    return (
        <div
            className={cn("absolute pointer-events-none", className)}
            style={{
                width: 764,
                height: 526,
                background: "linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)",
                opacity: 0.24,
                filter: "blur(400px)",
                borderRadius: "50%",
                zIndex: 0,
            }}
        />
    );
}

/** Renders heading text with an optional gradient-highlighted word/phrase */
function HeroHeading({
    text,
    highlight,
    className,
    tag: Tag = "h1",
    centered = false,
}: {
    text: string;
    highlight?: string;
    className?: string;
    tag?: "h1" | "h2";
    centered?: boolean;
}) {
    const baseClass = cn(
        "font-aileron font-semibold",
        centered ? "text-center" : "flex items-center gap-2 flex-wrap",
        className
    );

    if (!highlight) {
        return <Tag className={baseClass}>{text}</Tag>;
    }

    const idx = text.indexOf(highlight);
    if (idx === -1) {
        return <Tag className={baseClass}>{text}</Tag>;
    }

    const before = text.slice(0, idx);
    const after = text.slice(idx + highlight.length);

    const gradientSpan = (
        <span
            style={{
                background: "linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
            }}
        >
            {highlight}
        </span>
    );

    if (centered) {
        return (
            <Tag className={baseClass}>
                {before}{gradientSpan}{after}
            </Tag>
        );
    }

    return (
        <Tag className={cn("font-aileron font-semibold flex items-center gap-2 flex-wrap", className)}>
            {before && <span>{before}</span>}
            {gradientSpan}
            {after && <span>{after}</span>}
        </Tag>
    );
}

/** Renders a row of CTA buttons */
function HeroCTARow({ ctas, theme = "dark" }: { ctas: HeroCTA[]; theme?: "light" | "dark" }) {
    return (
        <div className="flex items-center gap-4 flex-wrap">
            {ctas.map((cta, i) => {
                const isPrimary = cta.variant === "primary";
                return (
                    <Link
                        key={i}
                        href={cta.href}
                        className={cn(
                            "flex items-center gap-2 px-5 py-2.5 rounded-lg font-aileron font-semibold text-base transition-opacity hover:opacity-80 active:opacity-70",
                            isPrimary || cta.variant === "whatsapp"
                                ? "text-white"
                                : theme === "dark"
                                    ? "text-white"
                                    : "text-neutral-800"
                        )}
                        style={
                            isPrimary
                                ? { background: "linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)" }
                                : cta.variant === "whatsapp"
                                    ? { backgroundColor: "#00A884" } // Official WhatsApp green
                                    : { border: theme === "dark" ? "1px solid #FFFFFF" : "1px solid #D1D5DB" }
                        }
                    >
                        {cta.text}
                        {cta.icon && (
                            <Image
                                src={cta.icon.src}
                                alt={cta.icon.alt ?? ""}
                                width={cta.icon.width ?? 13}
                                height={cta.icon.height ?? 13}
                            />
                        )}
                    </Link>
                );
            })}
        </div>
    );
}

/** Renders the media block (image or video) */
function HeroMediaBlock({ media, className }: { media: HeroMedia; className?: string }) {
    if (media.type === "video") {
        return (
            <video
                src={media.url}
                poster={media.posterUrl}
                autoPlay
                muted
                loop
                playsInline
                className={cn("w-full rounded-2xl object-cover", className)}
            />
        );
    }

    return (
        <Image
            src={media.url}
            alt={media.alt ?? ""}
            width={media.width ?? 660}
            height={media.height ?? 406}
            className={cn("w-full rounded-2xl object-cover", className)}
            priority
        />
    );
}


/* ─────────────────────────────────────────────
 * 3. Variant Renderers
 * ───────────────────────────────────────────── */

/** Homepage hero — dark background, badge pill, two-column layout */
function HeroHomepage(props: HeroHomepageProps) {
    const { heading, headingHighlight, description, badge, ctas, ctaFooterText, media } = props;

    return (
        <section
            className="relative w-full flex items-center justify-center"
            style={{ padding: "160px 0 80px", background: "#000000" }}
        >
            <div className="relative section-content px-10 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
                {/* Gradient Glow */}
                <GradientGlow className="left-[258px] top-[-54px]" />

                {/* Left Content */}
                <div className="relative z-10 flex flex-col gap-10 flex-1">
                    {/* Badge */}
                    {badge && (
                        <button
                            type="button"
                            className="inline-flex items-center gap-2 px-4 py-1 rounded-full self-start cursor-pointer transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-95 active:opacity-80 focus:outline-none focus:ring-2 focus:ring-orange-400/60"
                            style={{
                                background: "linear-gradient(90deg, rgba(249,189,36,1) 4%, rgba(245,145,32,1) 100%)",
                            }}
                        >
                            <span
                                className="flex items-center justify-center px-2 rounded-full font-aileron font-semibold text-xs text-white"
                                style={{
                                    background: "linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)",
                                }}
                            >
                                {badge.label}
                            </span>
                            <span className="font-aileron font-semibold text-base text-white">
                                {badge.text}
                            </span>
                            <Image src="/images/arrow-right.svg" alt="" width={13} height={13} />
                        </button>
                    )}

                    {/* Heading */}
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-0">
                            <HeroHeading
                                text={heading}
                                highlight={headingHighlight}
                                className="text-white"
                                tag="h1"
                            />
                            <p
                                className="font-geist"
                                style={{ fontSize: 16, lineHeight: "1.5em", color: "#A9ADB5" }}
                            >
                                {description}
                            </p>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    {ctas && ctas.length > 0 && (
                        <div className="flex flex-col gap-4">
                            <HeroCTARow ctas={ctas} theme="dark" />
                            {ctaFooterText && (
                                <p className="font-aileron font-semibold text-base" style={{ color: "#A9ADB5" }}>
                                    {ctaFooterText}
                                </p>
                            )}
                        </div>
                    )}
                </div>

                {/* Hero Media */}
                <div className="relative z-10 flex-1 w-full">
                    <HeroMediaBlock media={media} />
                </div>
            </div>
        </section>
    );
}


/** Service page hero — two-column layout with heading, richText, CTAs and media */
function HeroServiceWithMedia(props: HeroServiceWithMediaProps) {
    const { theme = "light", heading, headingHighlight, richText, ctas, media } = props;
    const isDark = theme === "dark";

    return (
        <section
            className="relative w-full flex items-center justify-center overflow-hidden"
            style={{
                padding: "120px 0 80px",
                background: isDark ? "#000000" : "#FFFFFF",
            }}
        >
            <div className="relative section-content px-10 lg:px-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                {/* Gradient Glow */}
                <GradientGlow className="left-[20%] top-[-80px]" />

                {/* Left Content — ~55% */}
                <div className="relative z-10 flex flex-col gap-8 flex-1 lg:max-w-[55%]">
                    {/* Heading */}
                    <HeroHeading
                        text={heading}
                        highlight={headingHighlight}
                        className={cn(
                            "text-3xl lg:text-[42px] lg:leading-[1.2]",
                            isDark ? "text-white" : "text-neutral-900"
                        )}
                        tag="h1"
                    />

                    {/* Rich Text Body */}
                    <div
                        className={cn(
                            "font-geist text-base lg:text-lg leading-relaxed prose prose-p:my-2 max-w-none",
                            isDark
                                ? "text-neutral-400 prose-strong:text-white"
                                : "text-neutral-600 prose-strong:text-neutral-900"
                        )}
                        dangerouslySetInnerHTML={{ __html: richText }}
                    />

                    {/* CTA Buttons */}
                    {ctas && ctas.length > 0 && (
                        <HeroCTARow ctas={ctas} theme={theme} />
                    )}
                </div>

                {/* Right Media — ~45% */}
                <div className="relative z-10 flex-1 w-full lg:max-w-[45%]">
                    <HeroMediaBlock
                        media={media}
                        className="shadow-xl"
                    />
                </div>
            </div>
        </section>
    );
}


/** Lookup form rendered inside the serviceWithForm hero variant */
function HeroLookupForm({
    form,
    theme = "light",
}: {
    form: HeroServiceWithFormProps["form"];
    theme?: "light" | "dark";
}) {
    const isDark = theme === "dark";

    return (
        <div
            className={cn(
                "rounded-2xl border p-6 lg:p-8 flex flex-col gap-6 w-full",
                isDark
                    ? "bg-neutral-900 border-neutral-700"
                    : "bg-white border-neutral-200 shadow-lg"
            )}
        >
            {/* Form Title */}
            <h3
                className={cn(
                    "font-aileron font-semibold text-lg lg:text-xl",
                    isDark ? "text-white" : "text-neutral-900"
                )}
            >
                {form.title}
            </h3>

            {/* Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {form.fields.map((field) => {
                    const isFullWidth = field.fullWidth;

                    if (field.type === "select") {
                        return (
                            <div
                                key={field.name}
                                className={cn(
                                    "flex flex-col gap-1.5",
                                    isFullWidth && "sm:col-span-2"
                                )}
                            >
                                {field.label && (
                                    <label
                                        className={cn(
                                            "text-sm font-medium",
                                            isDark ? "text-neutral-300" : "text-neutral-600"
                                        )}
                                    >
                                        {field.label}
                                        {field.required && <span className="text-red-400 ml-1">*</span>}
                                    </label>
                                )}
                                <div className="relative">
                                    <select
                                        name={field.name}
                                        required={field.required}
                                        className={cn(
                                            "w-full rounded-lg border px-3 py-2.5 text-sm transition-all duration-200 appearance-none cursor-pointer",
                                            "focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20",
                                            isDark
                                                ? "bg-[#171717] border-neutral-700 text-neutral-100"
                                                : "bg-neutral-50 border-neutral-300 text-neutral-900"
                                        )}
                                        defaultValue=""
                                    >
                                        <option value="" disabled className="text-neutral-500">
                                            {field.placeholder}
                                        </option>
                                        {field.options?.map((opt) => (
                                            <option key={opt.value} value={opt.value}>
                                                {opt.label}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            className={isDark ? "text-neutral-500" : "text-neutral-400"}
                                        >
                                            <path
                                                d="M3 4.5L6 7.5L9 4.5"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        );
                    }

                    return (
                        <div
                            key={field.name}
                            className={cn(
                                "flex flex-col gap-1.5",
                                isFullWidth && "sm:col-span-2"
                            )}
                        >
                            {field.label && (
                                <label
                                    className={cn(
                                        "text-sm font-medium",
                                        isDark ? "text-neutral-300" : "text-neutral-600"
                                    )}
                                >
                                    {field.label}
                                    {field.required && <span className="text-red-400 ml-1">*</span>}
                                </label>
                            )}
                            <input
                                name={field.name}
                                type={field.type}
                                placeholder={field.placeholder}
                                required={field.required}
                                className={cn(
                                    "w-full rounded-lg border px-3 py-2.5 text-sm transition-all duration-200",
                                    "focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20",
                                    isDark
                                        ? "bg-[#171717] border-neutral-700 text-neutral-100 placeholder:text-neutral-600"
                                        : "bg-neutral-50 border-neutral-300 text-neutral-900 placeholder:text-neutral-400"
                                )}
                            />
                        </div>
                    );
                })}
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full rounded-lg px-6 py-3 font-aileron font-semibold text-base text-white transition-opacity hover:opacity-90 active:opacity-80"
                style={{
                    background: "linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)",
                }}
            >
                {form.submitLabel}
            </button>
        </div>
    );
}


/** Renders the correct SVG icon for a contact detail row */
function ContactDetailIcon({ type }: { type: HeroContactDetail["icon"] }) {
    switch (type) {
        case "location":
            return (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="shrink-0">
                    <path d="M8 1.5A4.5 4.5 0 0 0 3.5 6c0 3.375 4.5 8.5 4.5 8.5S12.5 9.375 12.5 6A4.5 4.5 0 0 0 8 1.5zm0 6.125a1.625 1.625 0 1 1 0-3.25 1.625 1.625 0 0 1 0 3.25z" fill="currentColor" />
                </svg>
            );
        case "phone":
            return (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="shrink-0">
                    <path d="M13.5 10.5c-.8-.8-1.9-1.3-3-.7l-.9.5c-.3.2-.8.1-1-.2-1-1.3-1.8-2.8-2.3-4.3-.1-.4.1-.8.5-.9l1-.4c1.1-.4 1.7-1.6 1.3-2.7L8.6 1c-.4-1.1-1.7-1.6-2.7-1L4.5 1c-.8.4-1.3 1.3-1.2 2.2.3 3.2 1.8 6.1 4.1 8.4 2.3 2.3 5.2 3.8 8.4 4.1.9.1 1.8-.4 2.2-1.2l1-1.4c.5-1.1 0-2.3-1-2.7l-1.5-.6c-1-.5-2.2 0-3 .6z" fill="currentColor" />
                </svg>
            );
        case "email":
            return (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="shrink-0">
                    <path d="M14 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1.5 2L8 7.5 3.5 4h9zM2 13V5.25l6 3.75 6-3.75V13H2z" fill="currentColor" />
                </svg>
            );
        case "support":
            return (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="shrink-0">
                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm.75 10.5h-1.5v-1.5h1.5v1.5zm0-3h-1.5c0-2.25 2.25-2.1 2.25-3.375 0-.75-.75-1.125-1.5-1.125-.675 0-1.2.3-1.5.75L5.125 4.4A3 3 0 0 1 8 3c1.65 0 3 1.125 3 2.625 0 1.875-2.25 2.1-2.25 2.875z" fill="currentColor" />
                </svg>
            );
        default:
            return null;
    }
}


/** Full contact form rendered inside the contactUs hero variant */
function HeroContactForm({
    form,
    theme = "light",
}: {
    form: HeroContactUsProps["form"];
    theme?: "light" | "dark";
}) {
    const isDark = theme === "dark";

    const inputBase = cn(
        "w-full rounded-lg border px-3 py-2 text-sm transition-all duration-200",
        "focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20",
        isDark
            ? "bg-[#171717] border-neutral-700 text-neutral-100 placeholder:text-neutral-500"
            : "bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400"
    );

    return (
        <form action={form.action} className="flex flex-col gap-3 w-full">
            {/* Fields Grid — 2-column by default, full-width when flagged */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {form.fields.map((field) => {
                    const isFullWidth = field.fullWidth || field.type === "textarea" || field.type === "select";

                    return (
                        <div
                            key={field.name}
                            className={cn("flex flex-col gap-1", isFullWidth && "sm:col-span-2")}
                        >
                            {field.label && (
                                <label
                                    htmlFor={`contact-${field.name}`}
                                    className={cn(
                                        "text-xs font-medium",
                                        isDark ? "text-neutral-400" : "text-neutral-500"
                                    )}
                                >
                                    {field.label}
                                    {field.required && <span className="text-red-400 ml-0.5">*</span>}
                                </label>
                            )}

                            {field.type === "textarea" ? (
                                <textarea
                                    id={`contact-${field.name}`}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    required={field.required}
                                    rows={field.rows ?? 4}
                                    className={cn(inputBase, "resize-none")}
                                />
                            ) : field.type === "select" ? (
                                <div className="relative">
                                    <select
                                        id={`contact-${field.name}`}
                                        name={field.name}
                                        required={field.required}
                                        defaultValue=""
                                        className={cn(inputBase, "appearance-none cursor-pointer")}
                                    >
                                        <option value="" disabled>
                                            {field.placeholder}
                                        </option>
                                        {field.options?.map((opt) => (
                                            <option key={opt.value} value={opt.value}>
                                                {opt.label}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            className={isDark ? "text-neutral-500" : "text-neutral-400"}
                                        >
                                            <path
                                                d="M3 4.5L6 7.5L9 4.5"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            ) : (
                                <input
                                    id={`contact-${field.name}`}
                                    name={field.name}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    required={field.required}
                                    className={inputBase}
                                />
                            )}
                        </div>
                    );
                })}
            </div>

            {/* reCAPTCHA UI slot — replace inner div with <ReCAPTCHA> from react-google-recaptcha when siteKey is live */}
            {form.recaptchaEnabled && (
                <div
                    className={cn(
                        "inline-flex items-center gap-3 px-4 py-3 rounded-lg border w-fit",
                        isDark
                            ? "bg-neutral-900 border-neutral-700"
                            : "bg-neutral-50 border-neutral-200"
                    )}
                    aria-label="reCAPTCHA verification"
                >
                    {/* Checkbox placeholder */}
                    <div
                        className={cn(
                            "w-5 h-5 rounded border-2 flex-shrink-0",
                            isDark ? "border-neutral-500" : "border-neutral-300"
                        )}
                    />
                    <span
                        className={cn(
                            "font-geist text-sm select-none",
                            isDark ? "text-neutral-300" : "text-neutral-600"
                        )}
                    >
                        I&apos;m not a robot
                    </span>
                    {/* reCAPTCHA logo block */}
                    <div className="ml-3 flex flex-col items-center gap-0.5 pl-3 border-l border-dashed border-neutral-300">
                        <svg width="32" height="32" viewBox="0 0 64 64" fill="none" aria-hidden>
                            <circle cx="32" cy="32" r="24" fill="#4A90D9" />
                            <circle cx="32" cy="32" r="16" fill="#fff" />
                            <circle cx="32" cy="32" r="10" fill="#4A90D9" />
                        </svg>
                        <span className="text-[9px] text-neutral-400 leading-none font-medium">reCAPTCHA</span>
                        <span className="text-[7px] text-neutral-400 leading-none">Privacy · Terms</span>
                    </div>
                </div>
            )}

            {/* Submit */}
            <button
                type="submit"
                className="self-start rounded-lg px-8 py-2.5 font-aileron font-semibold text-base text-white transition-opacity hover:opacity-90 active:opacity-80"
                style={{
                    background: "linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)",
                }}
            >
                {form.submitLabel}
            </button>
        </form>
    );
}


/** Service page hero — two-column layout with heading, richText, CTAs and a lookup form */
function HeroServiceWithForm(props: HeroServiceWithFormProps) {
    const { theme = "light", heading, headingHighlight, richText, ctas, form } = props;
    const isDark = theme === "dark";

    return (
        <section
            className="relative w-full flex items-center justify-center overflow-hidden"
            style={{
                padding: "120px 0 80px",
                background: isDark ? "#000000" : "#FFFFFF",
            }}
        >
            <div className="relative section-content px-10 lg:px-20 flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
                {/* Gradient Glow */}
                <GradientGlow className="left-[10%] top-[-60px]" />

                {/* Left Content — ~50% */}
                <div className="relative z-10 flex flex-col gap-8 flex-1 lg:max-w-[50%] pt-4">
                    {/* Heading */}
                    <HeroHeading
                        text={heading}
                        highlight={headingHighlight}
                        className={cn(
                            "text-3xl lg:text-[42px] lg:leading-[1.2]",
                            isDark ? "text-white" : "text-neutral-900"
                        )}
                        tag="h1"
                    />

                    {/* Rich Text Body */}
                    <div
                        className={cn(
                            "font-geist text-base lg:text-lg leading-relaxed prose prose-p:my-2 max-w-none",
                            isDark
                                ? "text-neutral-400 prose-strong:text-white"
                                : "text-neutral-600 prose-strong:text-neutral-900"
                        )}
                        dangerouslySetInnerHTML={{ __html: richText }}
                    />

                    {/* CTA Buttons */}
                    {ctas && ctas.length > 0 && (
                        <HeroCTARow ctas={ctas} theme={theme} />
                    )}
                </div>

                {/* Right Form — ~50% */}
                <div className="relative z-10 flex-1 w-full lg:max-w-[50%]">
                    <HeroLookupForm form={form} theme={theme} />
                </div>
            </div>
        </section>
    );
}


/** Centered hero — single-column, center-aligned layout with media below */
function HeroCenteredWithMedia(props: HeroCenteredWithMediaProps) {
    const { theme = "dark", heading, headingHighlight, richText, ctas, media } = props;
    const isDark = theme === "dark";

    return (
        <section
            className="relative w-full flex items-center justify-center overflow-hidden"
            style={{
                padding: "140px 0 80px",
                background: isDark ? "#000000" : "#FFFFFF",
            }}
        >
            <div className="relative section-content px-10 lg:px-20 flex flex-col items-center gap-12">
                {/* Gradient Glow — centered */}
                <GradientGlow className="left-1/2 -translate-x-1/2 top-[-80px]" />

                {/* Text Content — centered, constrained width */}
                <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl text-center">
                    {/* Heading */}
                    <HeroHeading
                        text={heading}
                        highlight={headingHighlight}
                        centered
                        className={cn(
                            "text-3xl md:text-[44px] md:leading-[1.2] lg:text-[52px] lg:leading-[1.15]",
                            isDark ? "text-white" : "text-neutral-900"
                        )}
                        tag="h1"
                    />

                    {/* Rich Text Body */}
                    <div
                        className={cn(
                            "font-geist text-base lg:text-lg leading-relaxed prose prose-p:my-1 max-w-2xl",
                            isDark
                                ? "text-neutral-400 prose-strong:text-white"
                                : "text-neutral-600 prose-strong:text-neutral-900"
                        )}
                        dangerouslySetInnerHTML={{ __html: richText }}
                    />

                    {/* CTA Buttons — centered */}
                    {ctas && ctas.length > 0 && (
                        <div className="flex items-center justify-center gap-4 flex-wrap pt-2">
                            <HeroCTARow ctas={ctas} theme={theme} />
                        </div>
                    )}
                </div>

                {/* Media — full width below content */}
                <div className="relative z-10 w-full max-w-5xl">
                    <HeroMediaBlock
                        media={media}
                        className="shadow-2xl rounded-xl"
                    />
                </div>
            </div>
        </section>
    );
}


/** Make/brand page hero — full-bleed background image with dark overlay and text content */
function HeroBackgroundImage(props: HeroBackgroundImageProps) {
    const {
        heading,
        headingHighlight,
        richText,
        ctas,
        backgroundImage,
        overlayOpacity = 0.6,
        contentAlign = "left",
    } = props;
    const isCentered = contentAlign === "center";

    return (
        <section className="relative w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <Image
                src={backgroundImage.url}
                alt={backgroundImage.alt ?? ""}
                fill
                className="object-cover"
                priority
            />

            {/* Dark Overlay */}
            <div
                className="absolute inset-0 bg-black"
                style={{ opacity: overlayOpacity }}
            />

            {/* Content */}
            <div
                className={cn(
                    "relative z-10 section-content px-10 lg:px-20 flex flex-col gap-6",
                    isCentered ? "items-center text-center" : "items-start"
                )}
                style={{ padding: "160px 0 80px" }}
            >
                <div className={cn("flex flex-col gap-6", isCentered ? "max-w-3xl items-center" : "max-w-2xl")}>
                    {/* Heading */}
                    <HeroHeading
                        text={heading}
                        highlight={headingHighlight}
                        centered={isCentered}
                        className="text-white text-3xl md:text-[44px] md:leading-[1.2] lg:text-[52px] lg:leading-[1.15]"
                        tag="h1"
                    />

                    {/* Rich Text Body */}
                    <div
                        className="font-geist text-sm lg:text-base leading-relaxed text-neutral-300 prose prose-p:my-1 prose-strong:text-white prose-strong:font-semibold max-w-none"
                        dangerouslySetInnerHTML={{ __html: richText }}
                    />

                    {/* CTA Buttons */}
                    {ctas && ctas.length > 0 && (
                        <div className={cn("pt-2", isCentered && "flex justify-center")}>
                            <HeroCTARow ctas={ctas} theme="dark" />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}


/** Case study hero — badge, heading, two-column overview + results card */
function HeroCaseStudy(props: HeroCaseStudyProps) {
    const { theme = "light", badge, heading, headingHighlight, subheading, overview, results } = props;
    const isDark = theme === "dark";

    return (
        <section
            className="relative w-full flex items-center justify-center overflow-hidden"
            style={{
                padding: "120px 0 80px",
                background: isDark ? "#000000" : "#FFFFFF",
            }}
        >
            <div className="relative section-content px-10 lg:px-20 flex flex-col gap-10">
                {/* Gradient Glow */}
                <GradientGlow className="left-[20%] top-[-100px]" />

                {/* Top — Badge + Heading + Subheading */}
                <div className="relative z-10 flex flex-col gap-4">
                    {badge && (
                        <span
                            className="inline-flex self-start items-center px-4 py-1 rounded-full font-aileron font-semibold text-sm text-white"
                            style={{
                                background: "linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)",
                            }}
                        >
                            {badge.text}
                        </span>
                    )}

                    <HeroHeading
                        text={heading}
                        highlight={headingHighlight}
                        className={cn(
                            "text-3xl lg:text-[42px] lg:leading-[1.2]",
                            isDark ? "text-white" : "text-neutral-900"
                        )}
                        tag="h1"
                    />

                    {subheading && (
                        <p
                            className={cn(
                                "font-aileron font-semibold text-lg lg:text-xl",
                                isDark ? "text-neutral-300" : "text-neutral-700"
                            )}
                        >
                            {subheading}
                        </p>
                    )}
                </div>

                {/* Bottom — Two-column: Overview + Results */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                    {/* Left — Overview */}
                    <div className="flex flex-col gap-4">
                        <h3
                            className={cn(
                                "font-aileron font-semibold text-lg",
                                isDark ? "text-white" : "text-neutral-900"
                            )}
                            style={{
                                background: "linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            {overview.title}
                        </h3>
                        <dl className="flex flex-col gap-3">
                            {overview.details.map((detail, i) => (
                                <div key={i} className="flex gap-3">
                                    <dt
                                        className={cn(
                                            "font-aileron font-semibold text-sm min-w-[100px] shrink-0",
                                            isDark ? "text-neutral-400" : "text-neutral-500"
                                        )}
                                    >
                                        {detail.label}:
                                    </dt>
                                    <dd
                                        className={cn(
                                            "font-geist text-sm leading-relaxed",
                                            isDark ? "text-neutral-300" : "text-neutral-700"
                                        )}
                                    >
                                        {detail.value}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    {/* Right — Results Card */}
                    <div
                        className={cn(
                            "rounded-2xl border p-6 lg:p-8 flex flex-col gap-6",
                            isDark
                                ? "bg-neutral-900 border-neutral-700"
                                : "bg-neutral-50 border-neutral-200"
                        )}
                    >
                        <h3
                            className={cn(
                                "font-aileron font-semibold text-lg",
                                isDark ? "text-white" : "text-neutral-900"
                            )}
                        >
                            {results.title}:
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {results.metrics.map((metric, i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        "rounded-xl border p-4 flex flex-col gap-1",
                                        isDark
                                            ? "bg-neutral-800 border-neutral-700"
                                            : "bg-white border-neutral-200"
                                    )}
                                >
                                    <span
                                        className="font-aileron font-semibold text-base"
                                        style={{
                                            background: "linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text",
                                        }}
                                    >
                                        {metric.value}
                                    </span>
                                    <span
                                        className={cn(
                                            "font-geist text-sm",
                                            isDark ? "text-neutral-400" : "text-neutral-600"
                                        )}
                                    >
                                        {metric.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


/** Legal information hero — full width #171717 background, #6F6F6F bottom border, text content */
function HeroLegalInformation(props: HeroLegalInformationProps) {
    const { heading, headingHighlight, richText } = props;

    return (
        <section
            className="relative w-full flex items-center justify-center overflow-hidden border-b"
            style={{
                backgroundColor: "#171717",
                borderColor: "#6F6F6F",
                padding: "120px 0 60px",
            }}
        >
            <div className="relative section-content px-10 flex flex-col items-center text-center gap-6 mx-auto">
                <HeroHeading
                    text={heading}
                    highlight={headingHighlight}
                    centered
                    className="text-white text-3xl md:text-[40px] md:leading-[1.2] lg:text-[48px] lg:leading-[1.15]"
                    tag="h1"
                />

                <div
                    className="font-geist text-sm lg:text-base leading-relaxed text-neutral-300 prose prose-p:my-1 prose-strong:text-white prose-strong:font-semibold prose-a:text-white prose-a:underline hover:prose-a:text-neutral-300 max-w-3xl"
                    dangerouslySetInnerHTML={{ __html: richText }}
                />
            </div>
        </section>
    );
}


/** About Us hero — left-aligned text, callout box, and CTAs */
function HeroAboutUs(props: HeroAboutUsProps) {
    const { theme = "light", heading, headingHighlight, richText, calloutText, ctas } = props;
    const isDark = theme === "dark";

    return (
        <section
            className="relative w-full overflow-hidden"
            style={{
                padding: "160px 0 80px",
                background: isDark ? "#080808" : "#FFFFFF",
            }}
        >
            <div className="relative section-content px-10 lg:px-20 flex flex-col items-start gap-8">
                {/* Heading */}
                <HeroHeading
                    text={heading}
                    highlight={headingHighlight}
                    className={cn(
                        "text-4xl md:text-[52px] md:leading-[1.15]",
                        isDark ? "text-white" : "text-neutral-900"
                    )}
                    tag="h1"
                />

                {/* Top Rich Text */}
                <div
                    className={cn(
                        "font-geist text-base lg:text-lg leading-relaxed max-w-4xl prose prose-p:my-1",
                        isDark
                            ? "text-neutral-300 prose-strong:text-white"
                            : "text-neutral-700 prose-strong:text-neutral-900"
                    )}
                    dangerouslySetInnerHTML={{ __html: richText }}
                />

                {/* Callout Box */}
                <div
                    className={cn(
                        "p-6 lg:p-8 rounded-lg border max-w-full lg:max-w-4xl",
                        isDark
                            ? "bg-neutral-900/50 border-neutral-800"
                            : "bg-[#FFF6ED] border-[#FFEDD5]" // Light orange tint based on reference
                    )}
                >
                    <div
                        className={cn(
                            "font-geist text-sm lg:text-base leading-relaxed prose prose-p:m-0",
                            isDark
                                ? "text-neutral-300 prose-strong:text-white"
                                : "text-neutral-700 prose-strong:text-neutral-900"
                        )}
                        dangerouslySetInnerHTML={{ __html: calloutText }}
                    />
                </div>

                {/* CTA Buttons */}
                {ctas && ctas.length > 0 && (
                    <div className="pt-2">
                        <HeroCTARow ctas={ctas} theme={theme} />
                    </div>
                )}
            </div>
        </section>
    );
}


/** Contact Us hero — two-column layout: left has heading, richText, contact details, full form + reCAPTCHA + CTAs; right has an image */
function HeroContactUs(props: HeroContactUsProps) {
    const {
        theme = "light",
        heading,
        headingHighlight,
        richText,
        contactDetails,
        form,
        ctaFooterText,
        ctas,
        media,
    } = props;
    const isDark = theme === "dark";

    return (
        <section
            className="relative w-full flex items-center justify-center overflow-hidden"
            style={{
                padding: "120px 0 80px",
                background: isDark ? "#000000" : "#FFFFFF",
            }}
        >
            <div className="relative section-content px-10 lg:px-20 flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
                {/* Ambient gradient glow */}
                <GradientGlow className="left-[10%] top-[-60px]" />

                {/* ── Left Column (~58%) — Content + Form ── */}
                <div className="relative z-10 flex flex-col gap-8 flex-1 lg:max-w-[58%]">
                    {/* Heading */}
                    <HeroHeading
                        text={heading}
                        highlight={headingHighlight}
                        className={cn(
                            "text-3xl lg:text-[42px] lg:leading-[1.2]",
                            isDark ? "text-white" : "text-neutral-900"
                        )}
                        tag="h1"
                    />

                    {/* Intro rich text paragraph */}
                    <div
                        className={cn(
                            "font-geist text-sm lg:text-base leading-relaxed prose prose-p:my-1 max-w-none",
                            isDark
                                ? "text-neutral-400 prose-strong:text-white"
                                : "text-neutral-600 prose-strong:text-neutral-900"
                        )}
                        dangerouslySetInnerHTML={{ __html: richText }}
                    />

                    {/* Contact detail lines (address, phone, email, support text) */}
                    {contactDetails && contactDetails.length > 0 && (
                        <div className="flex flex-col gap-2.5">
                            {contactDetails.map((detail, i) => (
                                <div key={i} className="flex items-start gap-2.5">
                                    {detail.icon && (
                                        <span
                                            className={cn(
                                                "mt-0.5",
                                                isDark ? "text-neutral-400" : "text-neutral-500"
                                            )}
                                        >
                                            <ContactDetailIcon type={detail.icon} />
                                        </span>
                                    )}
                                    {detail.href ? (
                                        <a
                                            href={detail.href}
                                            className={cn(
                                                "font-geist text-sm leading-relaxed transition-colors hover:underline",
                                                isDark
                                                    ? "text-neutral-300 hover:text-white"
                                                    : "text-neutral-700 hover:text-neutral-900"
                                            )}
                                        >
                                            {detail.text}
                                        </a>
                                    ) : (
                                        <span
                                            className={cn(
                                                "font-geist text-sm leading-relaxed",
                                                isDark ? "text-neutral-300" : "text-neutral-700"
                                            )}
                                        >
                                            {detail.text}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Divider between contact info and form */}
                    {contactDetails && contactDetails.length > 0 && (
                        <hr
                            className={cn(
                                "border-t",
                                isDark ? "border-neutral-800" : "border-neutral-200"
                            )}
                        />
                    )}

                    {/* Contact form (fields, reCAPTCHA, submit) */}
                    <HeroContactForm form={form} theme={theme} />

                    {/* Optional CTA row below the form */}
                    {ctas && ctas.length > 0 && (
                        <div className="flex flex-col gap-3 pt-2">
                            {ctaFooterText && (
                                <p
                                    className={cn(
                                        "font-geist text-sm leading-relaxed",
                                        isDark ? "text-neutral-400" : "text-neutral-500"
                                    )}
                                >
                                    {ctaFooterText}
                                </p>
                            )}
                            <HeroCTARow ctas={ctas} theme={theme} />
                        </div>
                    )}
                </div>

                {/* ── Right Column (~42%) — Image ── */}
                {media && (
                    <div className="relative z-10 flex-1 w-full lg:max-w-[42%] lg:sticky lg:top-28 hidden lg:block">
                        <HeroMediaBlock
                            media={media}
                            className={cn(
                                "shadow-2xl w-full rounded-2xl",
                                isDark ? "brightness-90" : ""
                            )}
                        />
                    </div>
                )}
            </div>
        </section>
    );
}


/** Renders the MCP access request form card seated in the right column */
function HeroMCPFormPanel({
    form,
    theme = "light",
}: {
    form: HeroMCPProps["form"];
    theme?: "light" | "dark";
}) {
    const isDark = theme === "dark";

    const inputBase = cn(
        "w-full rounded-lg border px-3 py-2 text-sm transition-all duration-200",
        "focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20",
        isDark
            ? "bg-[#171717] border-neutral-700 text-neutral-100 placeholder:text-neutral-500"
            : "bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400"
    );

    return (
        <div
            className={cn(
                "rounded-2xl border p-6 flex flex-col gap-5 w-full",
                isDark
                    ? "bg-neutral-900 border-neutral-700"
                    : "bg-neutral-50 border-neutral-200 shadow-sm"
            )}
        >
            <h3
                className={cn(
                    "font-aileron font-semibold text-base lg:text-lg",
                    isDark ? "text-white" : "text-neutral-900"
                )}
            >
                {form.title}
            </h3>

            <form action={form.action} className="flex flex-col gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {form.fields.map((field) => {
                        /* ── Checkbox group ── */
                        if (field.type === "checkboxGroup") {
                            return (
                                <div key={field.name} className="sm:col-span-2 flex flex-col gap-2">
                                    <span
                                        className={cn(
                                            "text-xs font-medium leading-snug",
                                            isDark ? "text-neutral-400" : "text-neutral-500"
                                        )}
                                    >
                                        {field.label}
                                    </span>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                        {field.options.map((opt) => (
                                            <label
                                                key={opt.value}
                                                className="flex items-center gap-2 cursor-pointer"
                                            >
                                                <input
                                                    type="checkbox"
                                                    name={field.name}
                                                    value={opt.value}
                                                    className="w-3.5 h-3.5 rounded border accent-orange-500 cursor-pointer"
                                                />
                                                <span
                                                    className={cn(
                                                        "font-geist text-xs select-none leading-relaxed",
                                                        isDark ? "text-neutral-300" : "text-neutral-700"
                                                    )}
                                                >
                                                    {opt.label}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            );
                        }

                        /* ── Standard fields (text / email / tel / select / textarea) ── */
                        const isFullWidth =
                            field.fullWidth || field.type === "textarea" || field.type === "select";

                        return (
                            <div
                                key={field.name}
                                className={cn("flex flex-col gap-1", isFullWidth && "sm:col-span-2")}
                            >
                                {field.label && (
                                    <label
                                        htmlFor={`mcp-${field.name}`}
                                        className={cn(
                                            "text-xs font-medium leading-snug",
                                            isDark ? "text-neutral-400" : "text-neutral-500"
                                        )}
                                    >
                                        {field.label}
                                        {field.required && (
                                            <span className="text-red-400 ml-0.5">*</span>
                                        )}
                                    </label>
                                )}

                                {field.type === "textarea" ? (
                                    <textarea
                                        id={`mcp-${field.name}`}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        required={field.required}
                                        rows={field.rows ?? 3}
                                        className={cn(inputBase, "resize-none")}
                                    />
                                ) : field.type === "select" ? (
                                    <div className="relative">
                                        <select
                                            id={`mcp-${field.name}`}
                                            name={field.name}
                                            required={field.required}
                                            defaultValue=""
                                            className={cn(inputBase, "appearance-none cursor-pointer")}
                                        >
                                            <option value="" disabled>
                                                {field.placeholder}
                                            </option>
                                            {field.options?.map((opt) => (
                                                <option key={opt.value} value={opt.value}>
                                                    {opt.label}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg
                                                width="12"
                                                height="12"
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                className={isDark ? "text-neutral-500" : "text-neutral-400"}
                                            >
                                                <path
                                                    d="M3 4.5L6 7.5L9 4.5"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                ) : (
                                    <input
                                        id={`mcp-${field.name}`}
                                        name={field.name}
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        required={field.required}
                                        className={inputBase}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full rounded-lg px-6 py-3 font-aileron font-semibold text-base text-white transition-opacity hover:opacity-90 active:opacity-80 mt-1"
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)",
                    }}
                >
                    {form.submitLabel}
                </button>

                {/* Small-print disclaimer */}
                {form.formDisclaimerText && (
                    <p
                        className={cn(
                            "font-geist text-xs text-center leading-relaxed",
                            isDark ? "text-neutral-500" : "text-neutral-400"
                        )}
                    >
                        {form.formDisclaimerText}
                    </p>
                )}
            </form>
        </div>
    );
}


/** MCP Server hero — two-column layout: left has heading, tagline, definition, content sections + disclaimer; right has an access request form card */
function HeroMCP(props: HeroMCPProps) {
    const {
        theme = "light",
        heading,
        headingHighlight,
        tagline,
        definitionText,
        sections,
        disclaimerText,
        form,
    } = props;
    const isDark = theme === "dark";

    return (
        <section
            className="relative w-full flex items-center justify-center overflow-hidden"
            style={{
                padding: "120px 0 80px",
                background: isDark ? "#000000" : "#FFFFFF",
            }}
        >
            <div className="relative section-content px-10 lg:px-20 flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
                {/* Gradient glow */}
                <GradientGlow className="left-[10%] top-[-60px]" />

                {/* ── Left Column (~57%) — Content ── */}
                <div className="relative z-10 flex flex-col gap-6 flex-1 lg:max-w-[57%]">
                    {/* Main H1 */}
                    <HeroHeading
                        text={heading}
                        highlight={headingHighlight}
                        className={cn(
                            "text-3xl lg:text-[40px] lg:leading-[1.2]",
                            isDark ? "text-white" : "text-neutral-900"
                        )}
                        tag="h1"
                    />

                    {/* Tagline */}
                    {tagline && (
                        <p
                            className={cn(
                                "font-geist text-sm lg:text-base leading-relaxed",
                                isDark ? "text-neutral-400" : "text-neutral-500"
                            )}
                        >
                            {tagline}
                        </p>
                    )}

                    {/* Definition / bold intro block */}
                    {definitionText && (
                        <div
                            className={cn(
                                "font-geist text-sm leading-relaxed prose prose-p:my-0 max-w-none",
                                isDark
                                    ? "text-neutral-300 prose-strong:text-white"
                                    : "text-neutral-700 prose-strong:text-neutral-900"
                            )}
                            dangerouslySetInnerHTML={{ __html: definitionText }}
                        />
                    )}

                    {/* Content sections */}
                    {sections && sections.length > 0 && (
                        <div className="flex flex-col gap-6">
                            {sections.map((section, i) => (
                                <div key={i} className="flex flex-col gap-2">
                                    {section.heading && (
                                        <h3
                                            className={cn(
                                                "font-aileron font-semibold text-base",
                                                isDark ? "text-white" : "text-neutral-900"
                                            )}
                                        >
                                            {section.heading}
                                        </h3>
                                    )}
                                    {section.richText && (
                                        <div
                                            className={cn(
                                                "font-geist text-sm leading-relaxed prose prose-p:my-1 max-w-none",
                                                isDark
                                                    ? "text-neutral-400 prose-strong:text-white"
                                                    : "text-neutral-600 prose-strong:text-neutral-900"
                                            )}
                                            dangerouslySetInnerHTML={{ __html: section.richText }}
                                        />
                                    )}
                                    {section.listItems && section.listItems.length > 0 && (
                                        <ul className="flex flex-col gap-1.5 list-none pl-0">
                                            {section.listItems.map((item, j) => (
                                                <li key={j} className="flex items-start gap-2">
                                                    <span
                                                        className={cn(
                                                            "mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0",
                                                            isDark ? "bg-neutral-500" : "bg-neutral-400"
                                                        )}
                                                    />
                                                    <span
                                                        className={cn(
                                                            "font-geist text-sm leading-relaxed",
                                                            isDark ? "text-neutral-400" : "text-neutral-600"
                                                        )}
                                                    >
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Bottom disclaimer */}
                    {disclaimerText && (
                        <p
                            className={cn(
                                "font-geist text-xs leading-relaxed italic",
                                isDark ? "text-neutral-500" : "text-neutral-400"
                            )}
                        >
                            {disclaimerText}
                        </p>
                    )}
                </div>

                {/* ── Right Column (~43%) — Form card ── */}
                <div className="relative z-10 flex-1 w-full lg:max-w-[43%] lg:sticky lg:top-28">
                    <HeroMCPFormPanel form={form} theme={theme} />
                </div>
            </div>
        </section>
    );
}


/* ─────────────────────────────────────────────
 * 4. Main Component — Variant Dispatcher
 * ───────────────────────────────────────────── */

export function HeroSection(props: HeroSectionProps) {
    switch (props.variant) {
        case "homepage":
            return <HeroHomepage {...props} />;
        case "serviceWithMedia":
            return <HeroServiceWithMedia {...props} />;
        case "serviceWithForm":
            return <HeroServiceWithForm {...props} />;
        case "centeredWithMedia":
            return <HeroCenteredWithMedia {...props} />;
        case "backgroundImage":
            return <HeroBackgroundImage {...props} />;
        case "caseStudy":
            return <HeroCaseStudy {...props} />;
        case "legalInformation":
            return <HeroLegalInformation {...props} />;
        case "aboutUs":
            return <HeroAboutUs {...props} />;
        case "contactUs":
            return <HeroContactUs {...props} />;
        case "mcp":
            return <HeroMCP {...props} />;
        default:
            return null;
    }
}
