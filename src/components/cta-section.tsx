import Image from "next/image";
import Link from "next/link";

export function CtaSection() {
    return (
        <section className="w-full" style={{ padding: "80px 0", background: "#000000" }}>
            <div className="section-content px-10 lg:px-20 flex flex-col items-center gap-8 text-center">
                {/* Heading */}
                <div className="flex flex-col gap-2">
                    <h2
                        className="font-aileron font-semibold"
                        style={{
                            fontSize: 48,
                            lineHeight: "1.1667em",
                            background: "linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Your FREE API Access
                    </h2>
                    <h2 className="font-aileron font-semibold text-white" style={{ fontSize: 48, lineHeight: "1.1667em" }}>
                        Power Your APP Today.
                    </h2>
                </div>

                {/* Description */}
                <p className="font-geist max-w-xl" style={{ fontSize: 16, lineHeight: "1.5em", color: "#A9ADB5" }}>
                    Sign up today for free access to 15 credits—no credit card required! Test our APIs and explore the
                    possibilities with ease.
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-4">
                    <Link
                        href="#"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-aileron font-semibold text-base text-white transition-opacity hover:opacity-80"
                        style={{ background: "linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)" }}
                    >
                        Start FREE Trial
                        <Image src="/images/arrow-white.svg" alt="" width={5} height={9} />
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-aileron font-semibold text-base text-white border border-white transition-opacity hover:opacity-80"
                    >
                        Schedule a Demo
                        <Image src="/images/calendar-icon.svg" alt="" width={13} height={13} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
