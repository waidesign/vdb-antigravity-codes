import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
    return (
        <section
            className="relative w-full flex items-center justify-center"
            style={{ padding: "160px 0 80px", background: "#000000" }}
        >
            <div className="relative section-content px-10 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
                {/* Gradient Glow */}
                <div
                    className="absolute pointer-events-none"
                    style={{
                        left: 258,
                        top: -54,
                        width: 764,
                        height: 526,
                        background: "linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)",
                        opacity: 0.24,
                        filter: "blur(400px)",
                        borderRadius: "50%",
                        zIndex: 0,
                    }}
                />

                {/* Left Content */}
                <div className="relative z-10 flex flex-col gap-10 flex-1">
                    {/* Badge — CTA Button */}
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
                            NEW
                        </span>
                        <span className="font-aileron font-semibold text-base text-white">
                            Join MCP Server Waitlist
                        </span>
                        <Image src="/images/arrow-right.svg" alt="" width={13} height={13} />
                    </button>

                    {/* Heading */}
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-0">
                            <div className="flex items-center gap-2 flex-wrap">
                                <h1
                                    className="font-aileron font-semibold text-white"
                                    style={{ fontSize: 48, lineHeight: "1.1667em" }}
                                >
                                    Vehicle Databases
                                </h1>
                                <span
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
                                    APIs
                                </span>
                            </div>
                            <p
                                className="font-geist"
                                style={{ fontSize: 16, lineHeight: "1.5em", color: "#A9ADB5" }}
                            >
                                Vehicle Data APIs empowering businesses, developers, and individuals with access to the
                                largest database of accurate vehicle information
                            </p>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4 flex-wrap">
                            <Link
                                href="#"
                                className="flex items-center gap-2 px-4 py-2 rounded-lg font-aileron font-semibold text-base text-white transition-opacity hover:opacity-80 active:opacity-70"
                                style={{ background: "linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)" }}
                            >
                                Get Started
                                <Image src="/images/arrow-right.svg" alt="" width={13} height={13} />
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-2 px-4 py-2 rounded-lg font-aileron font-semibold text-base text-white transition-opacity hover:opacity-80 active:opacity-70"
                                style={{ border: "1px solid #FFFFFF" }}
                            >
                                Schedule a Demo
                                <Image src="/images/calendar-icon.svg" alt="" width={13} height={13} />
                            </Link>
                        </div>
                        <p className="font-aileron font-semibold text-base" style={{ color: "#A9ADB5" }}>
                            No Credit Card Required!
                        </p>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative z-10 flex-1 w-full">
                    <Image
                        src="/images/hero-image-552961.png"
                        alt="Vehicle Databases API Dashboard"
                        width={660}
                        height={406}
                        className="w-full rounded-2xl object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
