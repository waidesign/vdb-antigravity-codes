"use client";

import { useState } from "react";
import {
    Zap, Activity, Shield, Globe, Code2, Database,
    Car, Search, Bell, Lock, BarChart3, Cpu,
    ArrowRight, Check, ChevronDown, Download, Star,
    AlertCircle, Info, CheckCircle, AlertTriangle, Sun, Moon,
    Play, Image as ImageIcon
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Radio, RadioGroup } from "@/components/ui/radio";
import { Toggle } from "@/components/ui/toggle";
import { Select } from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Cards } from "@/components/ui";
import { Avatar, AvatarGroup } from "@/components/ui/avatar";
import { Spinner } from "@/components/ui/spinner";
import { Skeleton, SkeletonCard } from "@/components/ui/skeleton";
import { Alert } from "@/components/ui/alert";
import { Progress, CircularProgress } from "@/components/ui/progress";
import { Tabs } from "@/components/ui/tabs";
import { Tag } from "@/components/ui/tag";
import { Divider } from "@/components/ui/divider";
// import { Table } from "@/components/ui/table";
import { Modal } from "@/components/ui/modal";
import { Drawer } from "@/components/ui/drawer";
import { Navbar } from "@/components/ui/navbar";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Pagination } from "@/components/ui/pagination";
import { StatCard } from "@/components/ui/stat-card";
import { CodeBlock } from "@/components/ui/code-block";
import { PricingCard } from "@/components/ui/pricing-card";
import { ApiEndpointCard } from "@/components/ui/api-endpoint-card";
import { StatusIndicator, ApiStatusCard } from "@/components/ui/status-indicator";
import { FeatureCard } from "@/components/ui/feature-card";
import { StepIndicator } from "@/components/ui/step-indicator";

/* ─────────────── Section Wrapper ─────────────── */
function Section({ id, title, description, children }: {
    id: string; title: string; description?: string; children: React.ReactNode;
}) {
    return (
        <section id={id} className="py-16 border-b border-neutral-800/60 scroll-mt-20">
            <div className="mb-10">
                <h2 className="text-2xl font-bold text-neutral-100 mb-2">{title}</h2>
                {description && <p className="text-neutral-500 text-sm max-w-xl">{description}</p>}
            </div>
            {children}
        </section>
    );
}

function Row({ label, children, className }: { label?: string; children: React.ReactNode; className?: string }) {
    return (
        <div className="mb-8">
            {label && <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-600 mb-4">{label}</h3>}
            <div className={className ?? "flex flex-wrap items-center gap-3"}>
                {children}
            </div>
        </div>
    );
}

function Prop({ k, v }: { k: string; v: string }) {
    return (
        <span className="text-xs text-neutral-600">
            <span className="text-purple-400">{k}</span>
            <span className="text-neutral-700">=</span>
            <span className="text-green-400">&quot;{v}&quot;</span>
        </span>
    );
}

/* ─────────────── Table demo data ─────────────── */
// import { TableXIcon } from "@/components/ui/table";
const TableXIcon = () => <span>X</span>;

const comparisonData = [
    { category: "Core Vehicle ID", basic: "Make, Model, Year, Trim, Body Type", premium: "Everything in Basic" },
    { category: "Engine & Drivetrain", basic: "Engine, Transmission, Fuel Type, Drive Type", premium: "Full powertrain specs" },
    { category: "Technical Specs", basic: "Basic dimensions", premium: "Complete specs, weights, suspension, interiors" },
    { category: "Pricing Data", basic: null, premium: "MSRP, invoice, total price" },
    { category: "Fuel & Efficiency", basic: null, premium: "City / Highway / Combined, Green scores" },
    { category: "EV / Hybrid Data", basic: null, premium: "Battery, range, powertrain" },
    { category: "Safety Ratings", basic: null, premium: "NHTSA & IIHS" },
    { category: "Options & Packages", basic: null, premium: "OEM options, packages, colors" },
    { category: "Warranty Info", basic: null, premium: "Manufacturer coverage" },
    { category: "Regions", basic: "US, Canada", premium: "US, Canada, Europe" },
    { category: "VIN Coverage", basic: "1980–Present", premium: "1980–Present" },
];

const comparisonColumns = [
    { key: "category", label: "" },
    { key: "basic", label: "Basic VIN Decode API", render: (row: any) => row.basic ?? <TableXIcon /> },
    { key: "premium", label: "Premium VIN Decode API", render: (row: any) => row.premium ?? <TableXIcon /> },
];

const apiSampleCode = `{
    "status": "success",
    "data": {
        "vin": "1B3AL46XX6N227698",
        "year": 2006,
        "make": "Dodge",
        "model": "Stratus",
        "trim": "SXT",
        "style": "4dr Sedan Automatic",
        "trim_and_style": "SXT 4dr Sedan Automatic",
        "summary": "The 2006 Dodge Stratus SXT is a sedan that comes with a 2.4L I-4 150HP engine and a 4-speed automatic transmission with overdrive. It has standard features like air conditioning, 16\\" alloy wheels, cruise control, power mirrors, power windows, power locks, auto locking doors, remote keyless entry, and an AM/FM stereo with a single CD player and four speakers. Overall, the Stratus SXT offers a comfortable and convenient driving experience with its range of features.",
        "price": {
            "base_msrp": "20,825",
            "delivery_charges": "675",
            "invoice_price": "19,278",
            "total_price": "21,500",
            "currency": "USD"
        },
        "vehicle": {
            "epa_classification": "Midsize Car",
            "rear_door_type": "",
            "body_type": "Sedan",
            "doors": "4"
        },
        "dimensions": [
            {
                "exterior": [
                    {
                        "overall_length": [
                            { "value": "4,856", "unit": "mm" },
                            { "value": "191.18", "unit": "in" }
                        ]
                    },
                    {
                        "overall_width": [
                            { "value": "1,793", "unit": "mm" },
                            { "value": "70.59", "unit": "in" }
                        ]
                    },
                    {
                        "overall_height": [
                            { "value": "1,394", "unit": "mm" },
                            { "value": "54.88", "unit": "in" }
                        ]
                    }
                ]
            }
        ]
    }
}`;

const pricingPlans = [
    {
        tier: "Starter", price: "$29", description: "Great for prototyping and small apps.",
        popular: false, cta: "Start Free Trial",
        features: [
            { text: "10,000 API calls/month", included: true },
            { text: "VIN decode + basic specs", included: true },
            { text: "REST API access", included: true },
            { text: "Community support", included: true },
            { text: "Batch processing", included: false },
            { text: "Webhooks", included: false },
        ],
    },
    {
        tier: "Growth", price: "$99", description: "For startups and growing products.",
        popular: true, cta: "Get Started",
        features: [
            { text: "250,000 API calls/month", included: true },
            { text: "Full vehicle data + specs", included: true },
            { text: "REST + GraphQL API", included: true },
            { text: "Priority email support", included: true },
            { text: "Batch processing (500/req)", included: true },
            { text: "Webhooks — 5 endpoints", included: true },
        ],
    },
    {
        tier: "Enterprise", price: "Custom", period: "", description: "Unlimited scale, SLA, and dedicated support.",
        popular: false, cta: "Contact Sales",
        features: [
            { text: "Unlimited API calls", included: true },
            { text: "All data endpoints", included: true },
            { text: "REST + GraphQL + gRPC", included: true },
            { text: "Dedicated success manager", included: true },
            { text: "Unlimited batch processing", included: true },
            { text: "Unlimited webhooks & SSE", included: true },
        ],
    },
];

const features = [
    { icon: <Zap className="h-5 w-5" />, title: "Sub-50ms Latency", description: "Edge-cached responses delivered in under 50ms from 30+ global PoPs for blazing-fast decodes." },
    { icon: <Shield className="h-5 w-5" />, title: "99.99% Uptime SLA", description: "Enterprise-grade reliability backed by a financial SLA with automatic failover across regions." },
    { icon: <Database className="h-5 w-5" />, title: "500M+ VINs Indexed", description: "Every VIN manufactured since 1981 decoded against verified OEM specification data." },
    { icon: <Code2 className="h-5 w-5" />, title: "First-class DX", description: "SDKs for JavaScript, Python, Go, Ruby, Java. OpenAPI spec. Postman collection. Sandbox mode." },
    { icon: <Globe className="h-5 w-5" />, title: "Global Coverage", description: "Vehicles from 40+ countries. North America, Europe, Asia-Pacific, and Latin America." },
    { icon: <Activity className="h-5 w-5" />, title: "Real-time Webhooks", description: "Push changes — recalls, title events, mileage updates — directly to your endpoint as they happen." },
];

/* ─────────────── Page ─────────────── */
export default function DesignSystemPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [page, setPage] = useState(3);
    const [selectVal, setSelectVal] = useState("");
    const [checked, setChecked] = useState(false);
    const [toggled, setToggled] = useState(true);
    const [step, setStep] = useState(1);
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
        document.documentElement.classList.toggle("light");
    };

    const navSections = [
        "Colors", "Typography", "Buttons", "Badges & Tags", "Form Elements",
        "Cards", "Feedback", "Navigation", "Data Display", "SaaS Components",
    ];

    return (
        <div className="min-h-screen bg-neutral-900 transition-colors duration-300">
            {/* Theme Toggle Floating Button */}
            <button
                onClick={toggleTheme}
                className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full shadow-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-200 hover:bg-neutral-700 transition-colors"
                aria-label="Toggle Theme"
            >
                {isDarkMode ? <Sun className="h-5 w-5 text-amber-500" /> : <Moon className="h-5 w-5 text-blue-400" />}
            </button>

            {/* ── Sticky sidebar nav ── */}
            <div className="flex">
                <aside className="hidden xl:flex flex-col w-56 shrink-0 sticky top-0 h-screen overflow-y-auto border-r border-neutral-800/60 py-8 px-4 scrollbar-thin">
                    <div className="flex items-center gap-2 mb-8 px-2">
                        <div className="w-7 h-7 rounded-lg gradient-brand flex items-center justify-center">
                            <Zap className="h-4 w-4 text-neutral-900" />
                        </div>
                        <span className="text-sm font-bold text-neutral-100">UI Kit</span>
                    </div>
                    <nav className="flex flex-col gap-0.5">
                        {navSections.map((s) => (
                            <a
                                key={s}
                                href={`#${s.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                className="px-3 py-2 rounded-lg text-sm text-neutral-500 hover:text-neutral-200 hover:bg-neutral-800/60 transition-colors"
                            >
                                {s}
                            </a>
                        ))}
                    </nav>
                </aside>

                <main className="flex-1 max-w-5xl mx-auto px-6 lg:px-10">
                    {/* Hero */}
                    <div className="py-16 border-b border-neutral-800/60">
                        <Badge variant="brand" dot className="mb-5">VDB Design System</Badge>
                        <h1 className="text-5xl font-bold text-neutral-100 mb-4 leading-tight">
                            UI Kit <span className="gradient-brand-text">Preview</span>
                        </h1>
                        <p className="text-neutral-400 text-lg max-w-xl leading-relaxed">
                            Every component in the VDB design system, built with Next.js, Tailwind CSS,
                            and design tokens from <code className="px-1.5 py-0.5 rounded bg-neutral-800 text-brand-primary text-sm">design-system.json</code>.
                        </p>
                        <div className="flex flex-wrap gap-3 mt-8">
                            {["Button", "Badge", "Input", "Select", "Card", "Alert", "Modal", "Table", "Tabs", "Pricing"].map((c) => (
                                <Tag key={c} variant="neutral">{c}</Tag>
                            ))}
                            <Tag variant="brand">+20 more</Tag>
                        </div>
                    </div>

                    {/* ── 1. Colors ── */}
                    <Section id="colors" title="Color Palette" description="All colors from design-system.json, organized by category.">
                        <Row label="Brand">
                            {[
                                { name: "Primary", hex: "#F59120", cls: "bg-brand-primary" },
                                { name: "Secondary", hex: "#F9BD24", cls: "bg-brand-secondary" },
                                { name: "Tertiary", hex: "#7B59D7", cls: "bg-brand-tertiary" },
                                { name: "Accent", hex: "#1A1A1A", cls: "bg-neutral-900 border border-neutral-700" },
                            ].map((c) => (
                                <div key={c.name} className="flex flex-col gap-1.5">
                                    <div className={`w-20 h-20 rounded-xl ${c.cls} shadow-lg`} />
                                    <span className="text-xs font-semibold text-neutral-300">{c.name}</span>
                                    <span className="text-[11px] text-neutral-600 font-mono">{c.hex}</span>
                                </div>
                            ))}
                        </Row>

                        <Row label="Neutral Scale">
                            {["100", "200", "300", "400", "500", "600", "700", "800", "900"].map((s) => (
                                <div key={s} className="flex flex-col gap-1.5">
                                    <div className={`w-14 h-14 rounded-xl bg-neutral-${s}`} style={{ backgroundColor: `var(--color-neutral-${s})` }} />
                                    <span className="text-[11px] text-neutral-500 text-center">{s}</span>
                                </div>
                            ))}
                        </Row>

                        <Row label="Semantic Colors">
                            {[
                                { label: "Red", swatches: ["bg-red-300", "bg-red-500", "bg-red-700"] },
                                { label: "Blue", swatches: ["bg-blue-300", "bg-blue-500", "bg-blue-700"] },
                                { label: "Green", swatches: ["bg-green-300", "bg-green-500", "bg-green-700"] },
                                { label: "Orange", swatches: ["bg-orange-300", "bg-orange-500", "bg-orange-700"] },
                                { label: "Purple", swatches: ["bg-purple-300", "bg-purple-500", "bg-purple-700"] },
                            ].map((group) => (
                                <div key={group.label} className="flex flex-col gap-1.5">
                                    <div className="flex gap-1">
                                        {group.swatches.map((cls) => (
                                            <div key={cls} className={`w-8 h-12 rounded-lg ${cls}`} />
                                        ))}
                                    </div>
                                    <span className="text-xs text-neutral-500">{group.label}</span>
                                </div>
                            ))}
                        </Row>
                    </Section>

                    {/* ── 2. Typography ── */}
                    <Section id="typography" title="Typography Scale" description="Font sizes and line heights defined in design-system.json.">
                        <div className="space-y-6">
                            {[
                                { label: "H1 — 56px / 64px", size: "text-5xl", weight: "font-bold", text: "Vehicle API Platform" },
                                { label: "H2 — 48px / 56px", size: "text-4xl", weight: "font-bold", text: "Decode Any VIN Instantly" },
                                { label: "H3 — 40px / 48px", size: "text-3xl", weight: "font-semibold", text: "Trusted by 10,000+ Developers" },
                                { label: "Body LG — 20px / 32px", size: "text-xl", weight: "font-normal", text: "The most reliable VIN decoding API for modern SaaS applications." },
                                { label: "Body MD — 16px / 24px", size: "text-base", weight: "font-normal", text: "Decode VINs, look up specs, and access real-time vehicle data at scale." },
                                { label: "Body SM — 12px / 20px", size: "text-xs", weight: "font-normal", text: "All data is sourced from verified OEM specifications and official databases." },
                            ].map((item) => (
                                <div key={item.label} className="flex gap-6 items-baseline border-b border-neutral-800/50 pb-5">
                                    <span className="text-[10px] text-neutral-600 font-mono uppercase tracking-widest w-40 flex-shrink-0">{item.label}</span>
                                    <span className={`${item.size} ${item.weight} text-neutral-100`}>{item.text}</span>
                                </div>
                            ))}
                            <div className="pt-4">
                                <div className="text-[10px] text-neutral-600 font-mono uppercase tracking-widest mb-3">Monospace (API / Code)</div>
                                <div className="font-mono text-sm text-green-400 bg-neutral-900 px-4 py-3 rounded-lg border border-neutral-800 inline-block">
                                    GET /v1/vin/decode?vin=1HGBH41JXMN109186
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* ── 3. Buttons ── */}
                    <Section id="buttons" title="Buttons" description="6 variants × 5 sizes with loading state, icons, and full disability support.">
                        <Row label="Variants">
                            <Button variant="primary">Primary</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="danger">Danger</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="gradient">Gradient</Button>
                        </Row>
                        <Row label="Sizes">
                            <Button size="sm">Small</Button>
                            <Button size="md">Medium</Button>
                            <Button size="lg">Large</Button>
                            <Button size="xl">Extra Large</Button>
                            <Button size="icon" variant="secondary"><Search className="h-4 w-4" /></Button>
                        </Row>
                        <Row label="States">
                            <Button isLoading>Loading</Button>
                            <Button disabled>Disabled</Button>
                            <Button leftIcon={<Zap className="h-4 w-4" />}>With Left Icon</Button>
                            <Button rightIcon={<ArrowRight className="h-4 w-4" />} variant="outline">With Right Icon</Button>
                        </Row>
                    </Section>

                    {/* ── 4. Badges & Tags ── */}
                    <Section id="badges---tags" title="Badges & Tags" description="Status indicators, version labels, and removable chip tags.">
                        <Row label="Badge Variants">
                            <Badge variant="neutral">Neutral</Badge>
                            <Badge variant="info" dot>Info</Badge>
                            <Badge variant="success" dot>Success</Badge>
                            <Badge variant="warning" dot>Warning</Badge>
                            <Badge variant="error" dot>Error</Badge>
                            <Badge variant="brand">Brand</Badge>
                            <Badge variant="purple">Purple</Badge>
                        </Row>
                        <Row label="Badge Sizes">
                            <Badge size="sm">Small</Badge>
                            <Badge size="md">Medium</Badge>
                            <Badge size="lg">Large</Badge>
                        </Row>
                        <Row label="Tags / Chips">
                            <Tag variant="neutral">VIN Decode</Tag>
                            <Tag variant="brand">REST API</Tag>
                            <Tag variant="info">v2.1.0</Tag>
                            <Tag variant="success">Operational</Tag>
                            <Tag variant="warning">Beta</Tag>
                            <Tag variant="error">Deprecated</Tag>
                            <Tag variant="purple">GraphQL</Tag>
                            <Tag variant="neutral" onRemove={() => { }}>Removable</Tag>
                        </Row>
                    </Section>

                    {/* ── 5. Form Elements ── */}
                    <Section id="form-elements" title="Form Elements" description="Input, Textarea, Select, Checkbox, Radio, and Toggle with all states.">
                        <Row label="Input Variants" className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <Input label="VIN Number" placeholder="e.g. 1HGBH41JXMN109186" helperText="17-character Vehicle Identification Number" />
                            <Input variant="search" placeholder="Search make, model, year…" />
                            <Input label="API Key" type="password" placeholder="sk-…" />
                            <Input label="Email Address" type="email" placeholder="dev@company.com" error="Invalid email address" />
                        </Row>
                        <Row label="Textarea" className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <Textarea label="Webhook Payload Description" placeholder="Describe what this webhook should receive…" helperText="Used for documentation purposes" />
                            <Textarea label="VIN Batch (one per line)" placeholder={"1HGBH41JXMN109186\n1FTFW1E85MKD93472"} showCount maxLength={200} value="" onChange={() => { }} />
                        </Row>
                        <Row label="Select">
                            <div className="w-64">
                                <Select
                                    label="Data Format"
                                    value={selectVal}
                                    onChange={setSelectVal}
                                    placeholder="Choose format…"
                                    options={[
                                        { value: "json", label: "JSON", icon: <Code2 className="h-3.5 w-3.5" /> },
                                        { value: "csv", label: "CSV" },
                                        { value: "xml", label: "XML" },
                                        { value: "parquet", label: "Parquet", disabled: true },
                                    ]}
                                />
                            </div>
                        </Row>
                        <Row label="Checkbox">
                            <Checkbox label="Enable real-time webhooks" description="Push updates as events happen" defaultChecked />
                            <Checkbox label="Enable batch processing" />
                            <Checkbox label="Agree to Terms of Service" indeterminate />
                            <Checkbox label="Disabled option" disabled />
                        </Row>
                        <Row label="Radio">
                            <RadioGroup label="Webhook format">
                                <Radio name="format" label="JSON" description="Recommended" value="json" defaultChecked />
                                <Radio name="format" label="XML" value="xml" />
                                <Radio name="format" label="NDJSON (streaming)" value="ndjson" />
                            </RadioGroup>
                        </Row>
                        <Row label="Toggle">
                            <Toggle label="Enable caching" description="Cache decoded results for 24 hours" checked={toggled} onChange={(e) => setToggled(e.target.checked)} size="md" />
                            <Toggle label="Sandbox mode" size="sm" />
                            <Toggle label="Production mode" size="lg" checked disabled />
                        </Row>
                    </Section>

                    {/* ── 6. Cards ── */}
                    <Section id="cards" title="Cards" description="Unified polymorphic component supporting 12 structural variants for global reusability.">
                        <Row label="Structural Variants" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {/* 1. H3 and Body */}
                            <Cards 
                                variant="h3Body" 
                                heading="Standard Overview"
                                richText="Comprehensive vehicle data including specifications, history, and real-time market valuation."
                            />

                            {/* 2. Icon and Body (Inline) */}
                            <Cards 
                                variant="iconBodyInline" 
                                icon="Zap"
                                richText="<strong>Sub-50ms Latency</strong>. Optimized edge delivery across 30+ global points of presence."
                            />

                            {/* 3. Icon and Body (Normal) */}
                            <Cards 
                                variant="iconBodyNormal" 
                                icon="Shield"
                                richText="Enterprise-grade security with 256-bit encryption and SOC2 Type II compliance."
                            />

                            {/* 4. H3, Image and Body (Borderless) */}
                            <Cards 
                                variant="WithFeaturedImage" 
                                heading="Visual Specifications"
                                image="/api/placeholder/400/225"
                                richText="High-resolution OEM images and interactive 3D vehicle models for every trim level."
                            />

                            {/* 5. H3 and Body (Redirect) */}
                            <Cards 
                                variant="h3BodyRedirect" 
                                heading="API Documentation"
                                richText="Explore our comprehensive endpoint references, SDKs, and integration guides."
                                link="/docs"
                            />

                            {/* 6. Icon, H3, Body and CTA */}
                            <Cards 
                                variant="iconH3BodyCTA" 
                                icon="Code2"
                                heading="Developer Sandbox"
                                richText="Test our full API suite in a safe environment without affecting your production quota."
                                cta={{ label: "Open Sandbox", href: "#" }}
                            />

                            {/* 7. Icon, Body, Progress, Body */}
                            <Cards 
                                variant="iconBodyProgressBody" 
                                icon="Activity"
                                richText="Monthly API Quota Usage"
                                progress={72}
                                bottomText="You have reached <strong>72,000</strong> of 100,000 requests."
                            />

                            {/* 8. Logo, Body, Divider and Body */}
                            <Cards 
                                variant="logoBodyDividerBody" 
                                logo="/api/placeholder/120/40"
                                richText="The VDB API has transformed how we handle vehicle intake and appraisal."
                                bottomText="<strong>Director of Engineering</strong>, Global Motors"
                            />

                            {/* 9. Body Only */}
                            <Cards 
                                variant="bodyOnly" 
                                richText="Simple text-centric layout for micro-copy or secondary information within complex grids."
                            />
                        </Row>

                        <div className="space-y-12">
                             {/* 10. H3, Body, Lists, Body, and CTA */}
                             <Row label="Variant 10: Multi-Feature Layout">
                                <Cards 
                                    variant="h3BodyListsBodyCTA" 
                                    heading="Core Platform Features"
                                    richText="Everything you need to build powerful automotive software products."
                                    listItems={[
                                        { text: "17-character VIN Validation" },
                                        { text: "WMI/VDS Decoding" },
                                        { text: "Real-time Recalls & Safety" }
                                    ]}
                                    cta={{ label: "View All Features", href: "#" }}
                                />
                            </Row>

                            {/* 11. Two-Column variant */}
                            <Row label="Variant 11: Two-Column Feature">
                                <Cards 
                                    variant="twoColumnH3BodyListsBodyImage" 
                                    heading="Enterprise Vehicle Intelligence"
                                    richText="Our proprietary data lake processes millions of vehicle signals daily to provide the most accurate specification matrix in the industry."
                                    listItems={[
                                        { text: "Global OEM specification coverage" },
                                        { text: "Interactive equipment filtering" },
                                        { text: "Historical pricing and auction data" },
                                        { text: "Recalls and technical bulletins" }
                                    ]}
                                    image="/api/placeholder/800/600"
                                />
                            </Row>

                            {/* 12. Technical variant */}
                            <Row label="Variant 12: Technical Engineering Card">
                                <Cards 
                                    variant="technical" 
                                    icon="Cpu"
                                    heading="Batch Processing Engine"
                                    subheading="REQUEST SAMPLE"
                                    codeSnippet={JSON.stringify({
                                        vins: ["1HGBH41JXMN109186", "1FTFW1E85MKD93472"],
                                        format: "json",
                                        include: ["specs", "recalls"]
                                    }, null, 2)}
                                    subheading2="RESPONSE SCHEMA"
                                    tableData={[
                                        { field: "vin", type: "string", description: "Validated 17-char VIN" },
                                        { field: "status", type: "enum", description: "success | error" },
                                        { field: "latency", type: "int", description: "ms" }
                                    ]}
                                    richText="Supports up to 500 VINs per request with asynchronous background processing."
                                />
                            </Row>
                        </div>
                    </Section>

                    {/* ── Avatars ── */}
                    <Section id="avatars" title="Avatars" description="User profile indicators and groups.">
                        <Row label="Avatar Variants">
                            <Avatar size="xs" initials="A" />
                            <Avatar size="sm" initials="JD" />
                            <Avatar size="md" initials="RS" status="online" />
                            <Avatar size="lg" initials="TM" status="away" />
                            <Avatar size="xl" initials="VP" status="busy" />
                            <AvatarGroup>
                                <Avatar initials="A" />
                                <Avatar initials="B" />
                                <Avatar initials="C" />
                                <Avatar initials="D" />
                                <Avatar initials="E" />
                                <Avatar initials="F" />
                            </AvatarGroup>
                        </Row>
                    </Section>

                    {/* ── 7. Feedback ── */}
                    <Section id="feedback" title="Alerts & Feedback" description="Alerts, progress indicators, spinners, and skeleton loading states.">
                        <Row label="Alert Variants" className="flex flex-col gap-3 w-full">
                            <Alert variant="info" title="Rate Limit Warning" dismissible>
                                You have used 87% of your monthly API quota. Upgrade your plan to avoid disruption.
                            </Alert>
                            <Alert variant="success" title="API Key Generated" dismissible>
                                Your new API key <code className="px-1 py-0.5 rounded bg-green-500/20 text-xs font-mono">sk-live-x9k…</code> has been saved.
                            </Alert>
                            <Alert variant="warning" title="Sandbox Mode Active">
                                Requests are returning mocked data. Switch to production when you&apos;re ready.
                            </Alert>
                            <Alert variant="error" title="VIN Not Found">
                                The VIN <code className="font-mono text-xs">1HGBH41JXMN99999</code> was not found in the database.
                            </Alert>
                            <Alert variant="neutral" title="New Endpoint Available">
                                Bulk decode endpoint <code className="font-mono text-xs">/v2/vin/batch</code> is now generally available.
                            </Alert>
                        </Row>

                        <Row label="Progress — Linear">
                            <div className="w-full space-y-4">
                                <Progress value={72} label="API Quota Used" showValue variant="brand" size="lg" />
                                <Progress value={45} variant="success" size="md" label="Uptime" showValue />
                                <Progress value={93} variant="error" size="sm" label="Error Rate Threshold" showValue />
                                <Progress value={30} variant="info" size="md" label="Storage" showValue />
                            </div>
                        </Row>

                        <Row label="Progress — Circular">
                            <CircularProgress value={72} size={90} label={<><span className="text-base font-bold">72%</span></>} />
                            <CircularProgress value={45} size={70} variant="success" label={<span className="text-xs">45%</span>} />
                            <CircularProgress value={93} size={60} variant="error" />
                        </Row>

                        <Row label="Spinners">
                            <Spinner size="xs" />
                            <Spinner size="sm" />
                            <Spinner size="md" />
                            <Spinner size="lg" />
                            <Spinner size="xl" label="Decoding VIN…" />
                        </Row>

                        <Row label="Skeleton" className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                            <SkeletonCard />
                            <div className="space-y-3 pt-3">
                                <Skeleton variant="text" lines={4} />
                                <Skeleton className="h-9 w-32" />
                            </div>
                        </Row>
                    </Section>

                    {/* ── 8. Navigation ── */}
                    <Section id="navigation" title="Navigation" description="Breadcrumbs, tabs, pagination, and dividers.">
                        <Row label="Breadcrumb">
                            <Breadcrumb
                                showHome
                                items={[
                                    { label: "Dashboard", href: "#" },
                                    { label: "API Keys", href: "#" },
                                    { label: "sk-live-x9k…" },
                                ]}
                            />
                        </Row>

                        <Row label="Tabs — Line Variant">
                            <div className="w-full">
                                <Tabs
                                    variant="line"
                                    defaultTab="overview"
                                    items={[
                                        { id: "overview", label: "Overview", icon: <BarChart3 className="h-4 w-4" />, badge: "New", content: <div className="text-sm text-neutral-400 p-4 bg-neutral-800/30 rounded-lg">Overview content shown here.</div> },
                                        { id: "endpoints", label: "Endpoints", icon: <Code2 className="h-4 w-4" />, badge: 12, content: <div className="text-sm text-neutral-400 p-4 bg-neutral-800/30 rounded-lg">Endpoint list here.</div> },
                                        { id: "logs", label: "Logs", icon: <Activity className="h-4 w-4" />, content: <div className="text-sm text-neutral-400 p-4 bg-neutral-800/30 rounded-lg">Request logs here.</div> },
                                        { id: "settings", label: "Settings", disabled: true, content: null },
                                    ]}
                                />
                            </div>
                        </Row>

                        <Row label="Tabs — Pill Variant">
                            <Tabs
                                variant="pill"
                                items={[
                                    { id: "json", label: "JSON" },
                                    { id: "curl", label: "cURL" },
                                    { id: "python", label: "Python" },
                                    { id: "node", label: "Node.js" },
                                ]}
                            />
                        </Row>

                        <Row label="Dividers" className="flex flex-col gap-4 w-full">
                            <Divider />
                            <Divider label="Or continue with" />
                        </Row>

                        <Row label="Pagination">
                            <Pagination page={page} totalPages={12} onPageChange={setPage} />
                        </Row>
                    </Section>

                    {/* ── 9. Data Display ── */}
                    <Section id="data-display" title="Data Display" description="Stat cards, data tables, and API response code blocks.">
                        <Row label="Stat Cards" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <StatCard label="Monthly Requests" value="2.4M" trend={18.5} trendLabel="vs last month" icon={<Activity className="h-4 w-4" />} />
                            <StatCard label="Avg Response Time" value="47" suffix="ms" trend={-12} trendLabel="improved" icon={<Zap className="h-4 w-4" />} />
                            <StatCard label="Success Rate" value="99.97" suffix="%" trend={0.02} icon={<CheckCircle className="h-4 w-4" />} />
                            <StatCard label="VINs in Index" value="523M" trend={3.1} trendLabel="this quarter" icon={<Database className="h-4 w-4" />} />
                        </Row>

                        <Row label="Comparison Table">
                            {/* <Table data={comparisonData} columns={comparisonColumns} /> */}
                            <div className="text-neutral-500 text-sm">Table component omitted</div>
                        </Row>

                        <Row label="Code Block — API Response">
                            <div className="w-full">
                                <CodeBlock code={apiSampleCode} language="json" filename="GET /v1/vin/1HGBH41JXMN109186" />
                            </div>
                        </Row>

                        <Row label="Code Block — cURL">
                            <div className="w-full">
                                <CodeBlock
                                    language="bash"
                                    filename="example.sh"
                                    code={`curl -s https://api.vdb.io/v1/vin/decode \\
  -H "Authorization: Bearer sk-live-x9k…" \\
  -H "Content-Type: application/json" \\
  -d '{"vin": "1HGBH41JXMN109186"}'`}
                                />
                            </div>
                        </Row>
                    </Section>

                    {/* ── 10. SaaS Components ── */}
                    <Section id="saas-components" title="SaaS Components" description="Vehicle API platform-specific components: pricing, endpoints, status, features, and onboarding steps.">
                        <Row label="Pricing Cards" className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                            {pricingPlans.map((plan) => (
                                <PricingCard key={plan.tier} {...plan} />
                            ))}
                        </Row>

                        <Row label="API Endpoint Cards" className="flex flex-col gap-2 w-full">
                            <ApiEndpointCard
                                method="GET" endpoint="/v1/vin/{vin}"
                                title="Decode Single VIN"
                                description="Decodes a 17-character VIN and returns full vehicle specification data."
                                tags={["VIN", "Decode", "Specs"]}
                            />
                            <ApiEndpointCard
                                method="POST" endpoint="/v2/vin/batch"
                                title="Batch VIN Decode"
                                description="Submit up to 500 VINs in a single request. Returns results asynchronously via webhook."
                                tags={["Batch", "Async", "Webhook"]}
                            />
                            <ApiEndpointCard
                                method="GET" endpoint="/v1/recalls/{vin}"
                                title="Vehicle Recalls"
                                description="Fetch open NHTSA recall campaigns for a given VIN."
                                tags={["Recall", "Safety"]}
                            />
                            <ApiEndpointCard
                                method="DELETE" endpoint="/v1/keys/{keyId}"
                                title="Revoke API Key"
                                description="Permanently revokes an API key. This action cannot be undone."
                                tags={["Auth", "Keys"]}
                            />
                            <ApiEndpointCard
                                method="GET" endpoint="/v1/lookup/make/{makeId}"
                                title="Make Lookup (Legacy)"
                                description="Returns make details. Deprecated in favour of /v2/makes."
                                tags={["Make", "Lookup"]}
                                deprecated
                            />
                        </Row>

                        <Row label="Status Indicators">
                            <StatusIndicator status="operational" />
                            <StatusIndicator status="degraded" />
                            <StatusIndicator status="outage" />
                            <StatusIndicator status="maintenance" />
                            <StatusIndicator status="operational" showBadge />
                            <StatusIndicator status="degraded" showBadge />
                            <StatusIndicator status="maintenance" showBadge />
                        </Row>

                        <Row label="API Status Card" className="w-full max-w-md">
                            <ApiStatusCard
                                services={[
                                    { name: "VIN Decode API", status: "operational", latency: "42ms" },
                                    { name: "Batch Processing", status: "operational", latency: "380ms" },
                                    { name: "Webhook Delivery", status: "degraded", latency: "220ms" },
                                    { name: "Dashboard", status: "operational", latency: "110ms" },
                                    { name: "Admin API", status: "maintenance" },
                                ]}
                            />
                        </Row>

                        <Row label="Feature Cards" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {features.slice(0, 3).map((f) => (
                                <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
                            ))}
                        </Row>

                        <Row label="Step Indicator — Horizontal">
                            <div className="w-full">
                                <StepIndicator
                                    currentStep={step}
                                    steps={[
                                        { label: "Create Account" },
                                        { label: "Get API Key" },
                                        { label: "First Request" },
                                        { label: "Go Live" },
                                    ]}
                                />
                                <div className="flex gap-3 mt-6">
                                    <Button variant="secondary" size="sm" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}>Previous</Button>
                                    <Button variant="primary" size="sm" onClick={() => setStep(Math.min(3, step + 1))} disabled={step === 3}>Next</Button>
                                </div>
                            </div>
                        </Row>

                        <Row label="Step Indicator — Vertical">
                            <StepIndicator
                                orientation="vertical"
                                currentStep={2}
                                steps={[
                                    { label: "Sign up", description: "Create your free VDB account" },
                                    { label: "Generate API Key", description: "Get your secret API credentials" },
                                    { label: "Make a Request", description: "Decode your first VIN via the API" },
                                    { label: "Integrate", description: "Embed vehicle data into your product" },
                                ]}
                            />
                        </Row>

                        {/* Overlay trigger demos */}
                        <Row label="Modal & Drawer">
                            <Button variant="primary" onClick={() => setModalOpen(true)}>Open Modal</Button>
                            <Button variant="secondary" onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
                        </Row>
                    </Section>

                    {/* Footer spacer */}
                    <div className="h-24" />
                </main>
            </div>

            {/* ── Modal Demo ── */}
            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                title="Revoke API Key"
                description="This action will permanently disable the selected API key."
                size="md"
                footer={<>
                    <Button variant="secondary" onClick={() => setModalOpen(false)}>Cancel</Button>
                    <Button variant="danger">Revoke Key</Button>
                </>}
            >
                <Alert variant="warning" title="This cannot be undone">
                    Any services using this key will immediately stop working. Make sure to update your integration.
                </Alert>
                <div className="mt-4 p-3 rounded-lg bg-neutral-800/60 border border-neutral-700/60 font-mono text-sm text-neutral-400">
                    sk-live-x9k2m8p4n7q1r3s5t6u9v0w2x4y6z8
                </div>
            </Modal>

            {/* ── Drawer Demo ── */}
            <Drawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                title="API Request Inspector"
                footer={<>
                    <Button variant="secondary" size="sm" onClick={() => setDrawerOpen(false)}>Close</Button>
                    <Button variant="primary" size="sm" leftIcon={<Download className="h-4 w-4" />}>Export Logs</Button>
                </>}
            >
                <div className="space-y-4">
                    <StatCard label="Requests Today" value="14,832" trend={5.2} />
                    <CodeBlock
                        language="json"
                        code={`{
  "status": 200,
  "latency": "43ms",
  "vin": "1HGBH41JXMN109186",
  "make": "Honda",
  "model": "Civic"
}`}
                    />
                    <Alert variant="success" title="All systems normal" />
                </div>
            </Drawer>
        </div>
    );
}
