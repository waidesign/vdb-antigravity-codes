"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, Play, Loader2 } from "lucide-react";
import { CodeSnippet } from "@/components/code-snippet";

const API_OPTIONS = [
    "Basic VIN Decode",
    "Auction History API",
    "Classic VIN Decoder",
    "Electric Vehicle Specifications",
    "Europe VIN Decode",
    "License Plate OCR",
    "Market Value by VIN",
    "Premium VIN Decode",
    "Sales History",
    "Title Check",
    "UK Registration Decode",
    "US Plate Decode",
    "US Truck Plate Decode",
    "Vehicle Maintenance by VIN",
    "Vehicle Recalls",
    "Vehicle Repair by VIN",
    "Vehicle Warranty",
    "VIN OCR",
    "VIN Suggestion",
    "YMM Specifications",
];

const API_PLACEHOLDERS: Record<string, { input: string; label: string; exampleValue: string; endpoint: string }> = {
    "Basic VIN Decode": { input: "vin", label: "VIN Number", exampleValue: "1HGBH41JXMN109186", endpoint: "/vin-decoder/v3/{vin}" },
    "Auction History API": { input: "vin", label: "VIN Number", exampleValue: "1G1ZT51806F209019", endpoint: "/auction-history/v2/{vin}" },
    "Classic VIN Decoder": { input: "vin", label: "VIN Number", exampleValue: "1G1ZT51806F209019", endpoint: "/classic-vin-decoder/v1/{vin}" },
    "Electric Vehicle Specifications": { input: "vin", label: "VIN Number", exampleValue: "5YJ3E1EA7KF328931", endpoint: "/ev-specs/v1/{vin}" },
    "Europe VIN Decode": { input: "vin", label: "VIN Number", exampleValue: "WBAFR7C57BC603689", endpoint: "/europe-vin-decoder/v1/{vin}" },
    "License Plate OCR": { input: "plate", label: "License Plate", exampleValue: "ABC1234", endpoint: "/ocr/license-plate/{plate}" },
    "Market Value by VIN": { input: "vin", label: "VIN Number", exampleValue: "1HGBH41JXMN109186", endpoint: "/market-value/v2/{vin}" },
    "Premium VIN Decode": { input: "vin", label: "VIN Number", exampleValue: "1HGBH41JXMN109186", endpoint: "/vin-decoder/premium/v1/{vin}" },
    "Sales History": { input: "vin", label: "VIN Number", exampleValue: "1G1ZT51806F209019", endpoint: "/sales-history/v1/{vin}" },
    "Title Check": { input: "vin", label: "VIN Number", exampleValue: "1HGBH41JXMN109186", endpoint: "/title-check/v1/{vin}" },
    "UK Registration Decode": { input: "plate", label: "UK Registration", exampleValue: "AB12CDE", endpoint: "/uk-registration/v1/{plate}" },
    "US Plate Decode": { input: "plate", label: "License Plate", exampleValue: "ABC-1234", endpoint: "/us-plate/v2/{plate}" },
    "US Truck Plate Decode": { input: "plate", label: "Truck Plate", exampleValue: "TK12345", endpoint: "/us-truck-plate/v1/{plate}" },
    "Vehicle Maintenance by VIN": { input: "vin", label: "VIN Number", exampleValue: "1HGBH41JXMN109186", endpoint: "/maintenance/v3/{vin}" },
    "Vehicle Recalls": { input: "vin", label: "VIN Number", exampleValue: "1HGBH41JXMN109186", endpoint: "/recalls/v1/{vin}" },
    "Vehicle Repair by VIN": { input: "vin", label: "VIN Number", exampleValue: "1HGBH41JXMN109186", endpoint: "/repair/v1/{vin}" },
    "Vehicle Warranty": { input: "vin", label: "VIN Number", exampleValue: "1HGBH41JXMN109186", endpoint: "/warranty/v1/{vin}" },
    "VIN OCR": { input: "vin", label: "VIN (from image)", exampleValue: "1HGBH41JXMN109186", endpoint: "/ocr/vin/{vin}" },
    "VIN Suggestion": { input: "vin", label: "Partial VIN", exampleValue: "1HGBH4", endpoint: "/vin-suggestion/v1/{vin}" },
    "YMM Specifications": { input: "ymm", label: "Year / Make / Model", exampleValue: "2021/Honda/Civic", endpoint: "/ymm-specs/v1/{year}/{make}/{model}" },
};

const MOCK_RESPONSES: Record<string, object> = {
    "Basic VIN Decode": {
        status: "success",
        data: {
            vin: "1HGBH41JXMN109186",
            year: 2021,
            make: "Honda",
            model: "Civic",
            trim: "EX",
            engine: "1.5L Turbocharged I4",
            transmission: "CVT",
            drivetrain: "FWD",
            fuel_type: "Gasoline",
            body_style: "Sedan",
            doors: 4,
            country: "United States",
        },
    },
    default: {
        status: "success",
        data: {
            result: "Sample response data returned",
            api: "Vehicle Databases API",
            message: "Sign up to get real API responses with your free 15 credits.",
        },
    },
};

export function ApiTestSection() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedApi, setSelectedApi] = useState("Basic VIN Decode");
    const [inputValue, setInputValue] = useState("1HGBH41JXMN109186");
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<object | null>(MOCK_RESPONSES["Basic VIN Decode"]);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleApiSelect = (api: string) => {
        setSelectedApi(api);
        setDropdownOpen(false);
        setInputValue(API_PLACEHOLDERS[api]?.exampleValue ?? "");
        setResponse(null);
    };

    const handleTest = async () => {
        setLoading(true);
        setResponse(null);
        await new Promise((r) => setTimeout(r, 900));
        setResponse(MOCK_RESPONSES[selectedApi] ?? MOCK_RESPONSES.default);
        setLoading(false);
    };

    const placeholder = API_PLACEHOLDERS[selectedApi];

    return (
        <section className="w-full" style={{ padding: "80px 0", background: "#000000" }}>
            <div className="section-content px-10 lg:px-20 flex flex-col gap-20">
                {/* Header */}
                <div className="flex flex-col items-center gap-4 text-center" style={{ maxWidth: 800, margin: "0 auto" }}>
                    <div className="flex items-center gap-2 flex-wrap justify-center">
                        <span className="font-aileron font-semibold" style={{ fontSize: 40, lineHeight: "1.2em", color: "#A9ADB5" }}>
                            Try out our APIs{" "}
                        </span>
                        <span className="font-aileron font-semibold text-white" style={{ fontSize: 40, lineHeight: "1.2em" }}>
                            for FREE
                        </span>
                    </div>
                    <p className="font-geist" style={{ fontSize: 16, lineHeight: "1.5em", color: "#A9ADB5" }}>
                        Discover the power of our API services and see how they can transform your business! Get started
                        today—test the API for free and experience seamless integration in minutes.
                    </p>
                </div>

                {/* Test Widget */}
                <div
                    className="w-full flex flex-col gap-8 p-10 rounded-3xl"
                    style={{ background: "#16181A", border: "1px solid #8C929D" }}
                >
                    {/* API Selector Row */}
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                        <p className="font-geist" style={{ fontSize: 20, lineHeight: "1.4em", color: "#A9ADB5" }}>
                            Select an API from the dropdown menu to begin testing:
                        </p>

                        {/* Dropdown */}
                        <div className="relative" ref={dropdownRef} style={{ minWidth: 280 }}>
                            <button
                                type="button"
                                onClick={() => setDropdownOpen((v) => !v)}
                                className="flex items-center gap-3 px-4 py-2 rounded-full w-full text-left transition-colors hover:border-orange-400"
                                style={{ border: "1.456px solid #8C929D", background: "#0D0E10" }}
                            >
                                <span className="font-aileron font-semibold text-base text-white flex-1 truncate">
                                    {selectedApi}
                                </span>
                                {dropdownOpen ? (
                                    <ChevronUp size={20} className="text-white shrink-0" />
                                ) : (
                                    <ChevronDown size={20} className="text-white shrink-0" />
                                )}
                            </button>

                            {dropdownOpen && (
                                <div
                                    className="absolute top-full left-0 right-0 mt-2 rounded-2xl overflow-hidden z-50 shadow-2xl"
                                    style={{ background: "#16181A", border: "1px solid #8C929D" }}
                                >
                                    <div className="max-h-72 overflow-y-auto scrollbar-thin">
                                        {API_OPTIONS.map((api) => (
                                            <button
                                                key={api}
                                                type="button"
                                                onClick={() => handleApiSelect(api)}
                                                className="w-full text-left px-4 py-3 font-aileron font-semibold text-sm transition-colors hover:bg-white/5"
                                                style={{
                                                    color: api === selectedApi ? "#F59120" : "#FFFFFF",
                                                    borderBottom: "1px solid rgba(140,146,157,0.2)",
                                                }}
                                            >
                                                {api}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Divider */}
                    <div style={{ height: 1, background: "#8C929D" }} />

                    {/* API Tester UI */}
                    <div className="flex flex-col gap-6 rounded-2xl p-6" style={{ background: "#0D0E10", border: "1px solid rgba(140,146,157,0.4)" }}>
                        {/* Endpoint */}
                        <div className="flex flex-col gap-2">
                            <span className="font-geist text-xs font-semibold uppercase tracking-widest" style={{ color: "#A9ADB5" }}>
                                Endpoint
                            </span>
                            <div
                                className="flex items-center gap-2 px-4 py-2 rounded-lg font-geist text-sm"
                                style={{ background: "#16181A", border: "1px solid #8C929D", color: "#A9ADB5" }}
                            >
                                <span className="text-orange-400 font-semibold">GET</span>
                                <span className="text-white/60">https://api.vehicledatabases.com</span>
                                <span style={{ color: "#F59120" }}>{placeholder?.endpoint}</span>
                            </div>
                        </div>

                        {/* Input */}
                        <div className="flex flex-col gap-2">
                            <label className="font-geist text-xs font-semibold uppercase tracking-widest" style={{ color: "#A9ADB5" }}>
                                {placeholder?.label ?? "Input"}
                            </label>
                            <div className="flex gap-3">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder={placeholder?.exampleValue}
                                    className="flex-1 px-4 py-2 rounded-lg font-geist text-sm text-white outline-none transition-colors focus:border-orange-400"
                                    style={{ background: "#16181A", border: "1px solid #8C929D" }}
                                />
                                <button
                                    type="button"
                                    onClick={handleTest}
                                    disabled={loading || !inputValue.trim()}
                                    className="flex items-center gap-2 px-6 py-2 rounded-lg font-aileron font-semibold text-sm text-white transition-all hover:opacity-90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                                    style={{ background: "linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)" }}
                                >
                                    {loading ? (
                                        <Loader2 size={16} className="animate-spin" />
                                    ) : (
                                        <Play size={16} />
                                    )}
                                    {loading ? "Testing..." : "Test API"}
                                </button>
                            </div>
                        </div>

                        {/* Response */}
                        <div className="flex flex-col gap-4">
                            <span className="font-geist text-xs font-semibold uppercase tracking-widest" style={{ color: "#A9ADB5" }}>
                                Response
                            </span>
                            <div className="relative">
                                {loading ? (
                                    <div 
                                        className="rounded-2xl p-8 min-h-[220px] flex flex-col items-center justify-center gap-4 animate-pulse"
                                        style={{ background: "#000000", border: "1px solid rgba(140,146,157,0.4)" }}
                                    >
                                        <Loader2 size={32} className="text-orange-400 animate-spin" />
                                        <span className="font-geist text-sm text-white/40">Fetching live vehicle data...</span>
                                    </div>
                                ) : response ? (
                                    <CodeSnippet 
                                        variant="default"
                                        code={JSON.stringify(response, null, 2)}
                                        minWidth="100%"
                                        maxWidth="100%"
                                        maxHeight="400px"
                                        className="border-white/5 shadow-none"
                                    />
                                ) : (
                                    <div 
                                        className="rounded-2xl p-8 min-h-[200px] flex flex-col items-center justify-center text-center gap-2"
                                        style={{ background: "#000000", border: "1px solid rgba(140,146,157,0.2)" }}
                                    >
                                        <p className="font-geist text-sm text-white/40">
                                            Hit <span className="text-orange-400 font-semibold font-aileron">Test API</span> to see the live response here.
                                        </p>
                                        <p className="text-xs text-white/20">The JSON result will appear in the window header style above.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="flex flex-col items-center gap-4">
                    <a
                        href="#"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-aileron font-semibold text-base text-white transition-opacity hover:opacity-80 active:opacity-70"
                        style={{ background: "linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)" }}
                    >
                        FREE Sign Up
                    </a>
                    <p className="font-geist font-semibold" style={{ fontSize: 20, lineHeight: "1.4em", color: "#A9ADB5" }}>
                        Sign up for free to test 25+ APIs
                    </p>
                </div>
            </div>
        </section>
    );
}
