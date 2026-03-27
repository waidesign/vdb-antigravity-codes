import Image from "next/image";
import Link from "next/link";

interface ApiCardProps {
    title: string;
    description: string;
    highlighted?: boolean;
}

export function ApiCard({ title, description, highlighted = false }: ApiCardProps) {
    return (
        <div
            className="flex flex-col gap-6 p-10 rounded-3xl flex-1 h-full transition-transform duration-200 hover:-translate-y-1"
            style={{
                background: "#16181A",
                border: "1px solid #8C929D",
            }}
        >
            <div className="flex flex-col gap-2 flex-1">
                <h3
                    className="font-aileron font-semibold"
                    style={{
                        fontSize: 24,
                        lineHeight: "1.333em",
                        background: "linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                    }}
                >
                    {title}
                </h3>
                <p
                    className="font-geist"
                    style={{ fontSize: 16, lineHeight: "1.5em", color: "#A9ADB5" }}
                >
                    {description}
                </p>
            </div>
            <Link
                href="#"
                className="flex items-center gap-2 font-aileron font-semibold text-base text-white group transition-opacity hover:opacity-80 active:opacity-60"
            >
                Learn more
                <Image src="/images/arrow-right.svg" alt="" width={13} height={13} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
        </div>
    );
}

const apiCards = [
    {
        title: "VIN Decoding APIs",
        description:
            "Fetch full vehicle information by VIN or YMM to get the complete specs, engine information, color options, packages, and more for any car.",
        highlighted: true,
    },
    {
        title: "OCR APIs",
        description: "OCR APIs capture VINs & License plates and converts to text in seconds.",
    },
    {
        title: "License Plate Decoding APIs",
        description:
            "Decode the US license plate into VIN, then break down the vehicle information attached to it.",
    },
    {
        title: "Market Value APIs",
        description:
            "Fetch the vehicle's market value estimation for private parties, trade-ins, or dealers by VIN.",
    },
    {
        title: "Maintenance API",
        description:
            "Get the recommended maintenance schedule and details by VIN or year, make, and model.",
    },
    {
        title: "Repair API",
        description: "Get full information on the vehicle's warranty records by VIN.",
    },
];

export function ApiSuiteSection() {
    return (
        <section className="w-full" style={{ padding: "80px 0", background: "#000000" }}>
            <div className="section-content px-10 lg:px-20 flex flex-col items-center gap-20">
                {/* Header */}
                <div className="flex flex-col items-center gap-4 text-center max-w-2xl">
                    <div className="flex items-center gap-2 flex-wrap justify-center">
                        <span className="font-aileron font-semibold" style={{ fontSize: 40, lineHeight: "1.2em", color: "#A9ADB5" }}>
                            Complete
                        </span>
                        <span className="font-aileron font-semibold text-white" style={{ fontSize: 40, lineHeight: "1.2em" }}>
                            Vehicle API Suite
                        </span>
                    </div>
                    <p className="font-geist" style={{ fontSize: 16, lineHeight: "1.5em", color: "#A9ADB5" }}>
                        Vehicle Databases offers 25+ automotive data APIs—explore our full range of API solutions.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="w-full flex flex-col gap-10">
                    <div className="flex gap-10 items-stretch">
                        {apiCards.slice(0, 3).map((card) => (
                            <ApiCard key={card.title} {...card} />
                        ))}
                    </div>
                    <div className="flex gap-10 items-stretch">
                        {apiCards.slice(3, 6).map((card) => (
                            <ApiCard key={card.title} {...card} />
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <Link
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-aileron font-semibold text-base text-white transition-opacity hover:opacity-80 active:opacity-70"
                    style={{ background: "linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)" }}
                >
                    Explore All APIs
                    <Image src="/images/arrow-right.svg" alt="" width={13} height={13} />
                </Link>

                {/* Background image placeholder — below cards and CTA */}
                <div className="w-full rounded-3xl overflow-hidden opacity-60">
                    <Image
                        src="/images/api-suite-graphic.png"
                        alt="API suite visual"
                        width={1440}
                        height={905}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
