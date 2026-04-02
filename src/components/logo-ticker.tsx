import Image from "next/image";

interface LogoTickerProps {
    headingPrimary?: string;
    headingSecondary?: string;
    logoSrc?: string;
    className?: string;
}

export function LogoTicker({
    headingPrimary = "Trusted by",
    headingSecondary = "Teams at",
    logoSrc = "/images/logos-marquee.svg",
    className = ""
}: LogoTickerProps) {
    return (
        <section className={`w-full ${className}`} style={{ padding: "80px 0" }}>
            <div className="section-content px-10 lg:px-20 flex flex-col items-center gap-10">
                {/* Header */}
                <div className="flex items-center gap-2">
                    <span
                        className="font-aileron font-semibold"
                        style={{ fontSize: 40, lineHeight: "1.2em", color: "#A9ADB5" }}
                    >
                        {headingPrimary}
                    </span>
                    <span
                        className="font-aileron font-semibold text-white"
                        style={{ fontSize: 40, lineHeight: "1.2em" }}
                    >
                        {headingSecondary}
                    </span>
                </div>

                {/* Logos — scrolling marquee */}
                <div className="w-full overflow-hidden relative">
                    <div className="flex animate-marquee gap-8 whitespace-nowrap">
                        <Image
                            src={logoSrc}
                            alt="Trusted company logos"
                            width={1280}
                            height={56}
                            className="h-14 w-auto"
                        />
                        <Image
                            src={logoSrc}
                            alt=""
                            aria-hidden
                            width={1280}
                            height={56}
                            className="h-14 w-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
