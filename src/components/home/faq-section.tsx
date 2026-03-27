"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "What is Vehicle Databases?",
        answer:
            "Vehicle Databases provides accurate vehicle data and VIN decoding APIs. Our API database helps businesses access essential vehicle information, streamline development, and enhance their products. With a vehicle API, they can retrieve vehicle data on all car types, motorcycles, trucks, trailers, and more vehicles sold in the United States, to improve their business services and increase customer satisfaction.",
    },
    { question: "How to use car API?", answer: null },
    { question: "How can Vehicle Databases benefit my company?", answer: null },
    { question: "Why choose Vehicle Databases?", answer: null },
    { question: "What is an automotive database?", answer: null },
    { question: "What database does Carfax use?", answer: null },
    { question: "Is there a database for VIN numbers?", answer: null },
    { question: "How much does a vehicle database cost?", answer: null },
];

export function FaqSection() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="w-full" style={{ padding: "80px 0", background: "#000000" }}>
            <div className="section-content px-10 lg:px-20 flex flex-col gap-10">
                {/* Title */}
                <h2
                    className="font-aileron font-semibold text-center"
                    style={{
                        fontSize: 32,
                        lineHeight: "1.25em",
                        background: "linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                    }}
                >
                    Frequently Asked Questions
                </h2>

                {/* FAQ List */}
                <div className="flex flex-col">
                    {faqs.map((faq, i) => (
                        <div key={faq.question}>
                            <div
                                className="flex flex-col"
                                style={{ borderBottom: "1px solid #8C929D" }}
                            >
                                <button
                                    className="flex items-center justify-between gap-8 py-6 text-left w-full"
                                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                                >
                                    <span
                                        className="font-geist font-semibold"
                                        style={{ fontSize: 20, lineHeight: "1.4em", color: "#FFFFFF" }}
                                    >
                                        {faq.question}
                                    </span>
                                    {openIndex === i ? (
                                        <ChevronUp size={24} className="text-white shrink-0" />
                                    ) : (
                                        <ChevronDown size={24} className="text-white shrink-0" />
                                    )}
                                </button>
                                {openIndex === i && faq.answer && (
                                    <div className="pb-6">
                                        <p className="font-geist" style={{ fontSize: 20, lineHeight: "1.4em", color: "#A9ADB5" }}>
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                                {openIndex === i && !faq.answer && (
                                    <div className="pb-6">
                                        <p className="font-geist" style={{ fontSize: 20, lineHeight: "1.4em", color: "#A9ADB5" }}>
                                            Contact our support team for detailed information about this topic.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
