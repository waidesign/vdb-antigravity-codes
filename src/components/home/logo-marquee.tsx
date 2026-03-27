import Image from "next/image";

export function LogoMarquee() {
    return (
        <section className="w-full" style={{ padding: "80px 0" }}>
            <div className="section-content px-10 lg:px-20 flex flex-col items-center gap-10">
                {/* Header */}
                <div className="flex items-center gap-2">
                    <span
                        className="font-aileron font-semibold"
                        style={{ fontSize: 40, lineHeight: "1.2em", color: "#A9ADB5" }}
                    >
                        Trusted by
                    </span>
                    <span
                        className="font-aileron font-semibold text-white"
                        style={{ fontSize: 40, lineHeight: "1.2em" }}
                    >
                        Teams at
                    </span>
                </div>

                {/* Logos — scrolling marquee */}
                <div className="w-full overflow-hidden relative">
                    <div className="flex animate-marquee gap-8 whitespace-nowrap">
                        <Image
                            src="/images/logos-marquee.svg"
                            alt="Trusted company logos"
                            width={1280}
                            height={56}
                            className="h-14 w-auto"
                        />
                        <Image
                            src="/images/logos-marquee.svg"
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
