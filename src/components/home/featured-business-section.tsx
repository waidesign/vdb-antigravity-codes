import Image from "next/image";
import Link from "next/link";

export function FeaturedBusinessSection() {
    return (
        <section className="w-full" style={{ padding: "80px 0", background: "#000000" }}>
            <div className="section-content px-10 lg:px-20 flex gap-10 items-stretch">
                {/* Left Text */}
                <div className="flex flex-col gap-8" style={{ width: "50%" }}>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-aileron font-semibold" style={{ fontSize: 40, lineHeight: "1.2em", color: "#A9ADB5" }}>
                            Vehicle Databases Powers 50M+ Decoded VINs with 99.99% Uptime.
                        </h2>
                        <h2 className="font-aileron font-semibold" style={{ fontSize: 40, lineHeight: "1.2em", color: "#A9ADB5" }}>
                            VinDetecta saves 100s of Vehicle Intelligence Features.
                        </h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link
                            href="#"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg font-aileron font-semibold text-base text-white transition-opacity hover:opacity-80"
                            style={{ background: "linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)" }}
                        >
                            Start Integrating
                            <Image src="/images/arrow-white.svg" alt="" width={5} height={9} />
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg font-aileron font-semibold text-base text-white border border-white transition-opacity hover:opacity-80"
                        >
                            Case Study
                            <Image src="/images/arrow-right.svg" alt="" width={13} height={13} />
                        </Link>
                    </div>
                </div>

                {/* Right Testimonial Card */}
                <div
                    className="flex flex-col gap-6 p-10 rounded-3xl"
                    style={{ width: "50%", background: "#16181A", border: "1px solid #8C929D" }}
                >
                    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="text-white opacity-60">
                        <path d="M0 24V14.4C0 10.64 1.2 7.44 3.6 4.8C6.08 2.08 9.28 0.48 13.2 0V4.8C11.04 5.2 9.24 6.2 7.8 7.8C6.44 9.32 5.72 11.12 5.6 13.2H10.4V24H0ZM18.4 24V14.4C18.4 10.56 19.64 7.32 22.12 4.68C24.68 2.04 27.92 0.48 31.84 0V4.8C29.6 5.2 27.76 6.2 26.32 7.8C24.96 9.32 24.24 11.12 24.16 13.2H28.96V24H18.4Z" fill="white" fillOpacity="0.6" />
                    </svg>
                    <p className="font-aileron font-semibold text-white" style={{ fontSize: 20, lineHeight: "1.4em" }}>
                        Vehicle Databases has been an outstanding partner for our platform. Their API is fast, reliable, and
                        delivers consistently high-quality vehicle data, which is critical for the accuracy and trust our users
                        expect. Integration was straightforward, documentation was clear, and their support team was responsive
                        whenever we had questions. Using Vehicle Databases allowed us to streamline our workflow and confidently
                        scale our vehicle intelligence features without worrying about data gaps or performance issues.
                    </p>
                    <div className="flex items-center gap-4">
                        <Image
                            src="/images/vindetecta-logo.svg"
                            alt="VinDetecta"
                            width={60}
                            height={32}
                            className="rounded-full"
                        />
                        <div className="flex flex-col gap-1">
                            <span className="font-aileron font-semibold text-white" style={{ fontSize: 24, lineHeight: "1.333em" }}>
                                Todd Matherne
                            </span>
                            <span className="font-aileron font-semibold" style={{ fontSize: 20, lineHeight: "1.4em", color: "#A9ADB5" }}>
                                Founder, VinDetecta
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
