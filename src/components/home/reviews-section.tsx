import Link from "next/link";

interface TestimonialProps {
    company: string;
    location: string;
    title: string;
    text: string;
    accentColor: string;
}

function TestimonialCard({ company, location, title, text, accentColor }: TestimonialProps) {
    return (
        <div
            className="flex flex-col gap-6 p-10 rounded-3xl flex-1"
            style={{ background: "#16181A", border: "1px solid #8C929D" }}
        >
            <div className="flex flex-col gap-4 flex-1">
                <p className="font-geist font-semibold text-white" style={{ fontSize: 20, lineHeight: "1.4em" }}>
                    {title}
                </p>
                <p className="font-geist" style={{ fontSize: 16, lineHeight: "1.5em", color: "#A9ADB5" }}>
                    {text}
                </p>
            </div>
            <div className="flex items-center gap-4">
                <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: accentColor, opacity: 0.8 }}
                />
                <div className="flex flex-col gap-1">
                    <span className="font-aileron font-semibold text-white" style={{ fontSize: 20, lineHeight: "1.4em" }}>
                        {company}
                    </span>
                    <span className="font-geist" style={{ fontSize: 16, lineHeight: "1.5em", color: "#A9ADB5" }}>
                        {location}
                    </span>
                </div>
            </div>
        </div>
    );
}

const testimonials: TestimonialProps[] = [
    {
        company: "Redline Used Auto Parts",
        location: "Spain",
        title: "Better experience... impossible.",
        text: "These guys help you with everything and they put all the effort to create the best experience and satisfaction. We are very thankful with them.",
        accentColor: "#F59120",
    },
    {
        company: "Lionel Yarbol",
        location: "Ghana",
        title: "Easy to use, Excellent service",
        text: "Great service, their apis have allowed my business to quickly get up and running, with minimal development costs. Someone is also always at hand whether it be Whatsapp or over the phone to help with any issues. Would 100% recommend",
        accentColor: "#F9BD24",
    },
    {
        company: "Gearshift Solutions",
        location: "United States",
        title: "The support is top-notch",
        text: "The support is top-notch. I don't think I have ever worked with a company that has ever reached out to me repeatedly to just check on me and my progress. I can't say enough good things about them. Also, the product is awesome.",
        accentColor: "#7B59D7",
    },
];

export function ReviewsSection() {
    return (
        <section className="w-full" style={{ background: "#000000", padding: "80px 0" }}>
            <div className="section-content px-10 lg:px-20 flex flex-col gap-10">
                {/* Header */}
                <div className="flex items-center justify-center gap-2 flex-wrap">
                    <span className="font-aileron font-semibold text-white" style={{ fontSize: 40, lineHeight: "1.2em" }}>
                        What Our Clients Saying
                    </span>
                    <span className="font-aileron font-semibold" style={{ fontSize: 40, lineHeight: "1.2em", color: "#A9ADB5" }}>
                        About Us?
                    </span>
                </div>

                {/* Testimonials */}
                <div className="flex gap-10">
                    {testimonials.map((t) => (
                        <TestimonialCard key={t.company} {...t} />
                    ))}
                </div>

                {/* More Testimonials Button */}
                <div className="flex justify-center">
                    <Link
                        href="#"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-aileron font-semibold text-base text-white border border-white transition-opacity hover:opacity-80"
                    >
                        More Testimonials
                    </Link>
                </div>
            </div>
        </section>
    );
}
