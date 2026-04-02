export interface StatItemProps {
    valuePrimary: string;
    valueGradient: string;
    label: string;
}

function StatItem({ valuePrimary, valueGradient, label }: StatItemProps) {
    return (
        <div className="flex flex-col items-center gap-2 px-10 py-10 flex-1 relative overflow-hidden group">
            <div className="flex items-center gap-0.5 transition-transform duration-300 group-hover:scale-110">
                <span
                    className="font-aileron font-semibold text-white"
                    style={{ fontSize: 40, lineHeight: "1.2em" }}
                >
                    {valuePrimary}
                </span>
                <span
                    className="font-aileron font-semibold"
                    style={{
                        fontSize: 40,
                        lineHeight: "1.2em",
                        background: "linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                    }}
                >
                    {valueGradient}
                </span>
            </div>
            <p
                className="font-geist text-center transition-colors duration-300 group-hover:text-white"
                style={{ fontSize: 16, lineHeight: "1.5em", color: "#A9ADB5" }}
            >
                {label}
            </p>
        </div>
    );
}

const DEFAULT_STATS = [
    { valuePrimary: "50", valueGradient: "M+", label: "VINs decoded" },
    { valuePrimary: "1,", valueGradient: "200+", label: "Companies using API" },
    { valuePrimary: "99.", valueGradient: "9%", label: "API uptime SLA" },
    { valuePrimary: "<200", valueGradient: "ms", label: "Avg. response time" },
];

interface FactsSectionProps {
    stats?: StatItemProps[];
    className?: string;
}

export function FactsSection({ 
    stats = DEFAULT_STATS,
    className
}: FactsSectionProps) {
    return (
        <section className={`w-full ${className}`} style={{ padding: "80px 0", background: "#000000" }}>
            <div className="section-content px-10 lg:px-20 flex flex-col gap-0">
                {/* Stats Container */}
                <div
                    className="w-full flex items-center rounded-3xl overflow-hidden bg-[#16181A]/50"
                    style={{ border: "1px solid #8C929D" }}
                >
                    {stats.map((stat, i) => (
                        <div key={stat.label} className="flex-1 flex items-center h-full">
                            <StatItem {...stat} />
                            {i < stats.length - 1 && (
                                <div
                                    className="w-px self-stretch my-8"
                                    style={{ background: "#8C929D", opacity: 0.3 }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
