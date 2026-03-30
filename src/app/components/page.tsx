import { HeroSection } from "@/components/home/hero-section";
import { Navbar } from "@/components/home/navbar";
import { Footer } from "@/components/home/footer";

export default function ComponentsPage() {
    return (
        <main className="min-h-screen w-full bg-[#0B0B0B]">
            <Navbar />

            {/* ── Service Page Hero — Light Theme ── */}
            <HeroSection
                variant="serviceWithMedia"
                theme="dark"
                heading="Electric Vehicle Specifications API"
                headingHighlight="API"
                richText="<p>Electric Vehicle Specifications API cover data on all electric vehicles from the year 1999-Present</p>"
                ctas={[
                    {
                        text: "Get Free Trial",
                        href: "#",
                        variant: "primary",
                    },
                    {
                        text: "Book a Demo",
                        href: "#",
                        variant: "outline",
                    },
                ]}
                media={{
                    type: "image",
                    url: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1200&auto=format&fit=crop",
                    alt: "Electric Vehicle Dashboard Interior",
                    width: 600,
                    height: 400,
                }}
            />

            {/* ── Service Page Hero — Dark Theme ── */}
            <HeroSection
                variant="serviceWithMedia"
                theme="dark"
                heading="VIN Decoder API"
                headingHighlight="VIN Decoder"
                richText="<p>Decode any Vehicle Identification Number instantly with our powerful <strong>VIN Decoder API</strong>. Get full specifications, manufacturer details, engine data, and more — all in a single request.</p><p>Trusted by <strong>10,000+</strong> developers and businesses worldwide for accurate, real-time vehicle data.</p>"
                ctas={[
                    {
                        text: "Start Free Trial",
                        href: "#",
                        variant: "primary",
                        icon: { src: "/images/arrow-right.svg" },
                    },
                    {
                        text: "View Documentation",
                        href: "#",
                        variant: "outline",
                    },
                ]}
                media={{
                    type: "image",
                    url: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1200&auto=format&fit=crop",
                    alt: "Car on mountain road",
                    width: 600,
                    height: 400,
                }}
            />

            {/* ── Service Page Hero — Video variant ── */}
            <HeroSection
                variant="serviceWithMedia"
                theme="dark"
                heading="OCR API for Documents"
                headingHighlight="OCR API"
                richText="<p>Automatically extract text from receipts, invoices, vehicle titles, and any scanned document. Our <strong>OCR API</strong> delivers 99.8% accuracy with sub-second response times.</p>"
                ctas={[
                    {
                        text: "Try It Free",
                        href: "#",
                        variant: "primary",
                    },
                ]}
                media={{
                    type: "video",
                    url: "https://www.w3schools.com/html/mov_bbb.mp4",
                    alt: "OCR API Demo",
                    posterUrl: "https://images.unsplash.com/photo-1620712943543-bcc4628c9750?q=80&w=1200&auto=format&fit=crop",
                }}
            />

            {/* ── Service Page Hero — Form variant (Light) ── */}
            <HeroSection
                variant="serviceWithForm"
                theme="dark"
                heading="Decode Plate Numbers into Structured Vehicle Data with License Plate API"
                headingHighlight="License Plate API"
                richText="<p>Quickly decode any license plate in the US and UK using the license plate API. Easily integrate it into your apps or websites to access accurate vehicle information.</p>"
                ctas={[
                    {
                        text: "Free Trial",
                        href: "#",
                        variant: "primary",
                    },
                    {
                        text: "Book a Demo",
                        href: "#",
                        variant: "outline",
                    },
                ]}
                form={{
                    title: "Lookup any U.S. License Plate",
                    fields: [
                        {
                            name: "plate",
                            placeholder: "Enter Plate",
                            type: "text",
                            required: true,
                        },
                        {
                            name: "model",
                            placeholder: "Model",
                            type: "select",
                            options: [
                                { value: "any", label: "Any Model" },
                                { value: "sedan", label: "Sedan" },
                                { value: "suv", label: "SUV" },
                                { value: "truck", label: "Truck" },
                                { value: "coupe", label: "Coupe" },
                                { value: "van", label: "Van" },
                            ],
                        },
                        {
                            name: "email",
                            placeholder: "Enter Email Address",
                            type: "email",
                        },
                        {
                            name: "phone",
                            placeholder: "Enter Phone",
                            type: "tel",
                        },
                    ],
                    submitLabel: "Search License Plate",
                }}
            />

            {/* ── Service Page Hero — Form variant (Dark) ── */}
            <HeroSection
                variant="serviceWithForm"
                theme="dark"
                heading="Instant VIN Check & Vehicle History Report"
                headingHighlight="VIN Check"
                richText="<p>Enter any VIN to instantly retrieve <strong>full vehicle history</strong>, accident records, title status, and ownership details. Our database covers <strong>500M+ vehicles</strong> in the United States.</p>"
                form={{
                    title: "Check Any Vehicle by VIN",
                    fields: [
                        {
                            name: "vin",
                            placeholder: "Enter 17-digit VIN",
                            type: "text",
                            required: true,
                            fullWidth: true,
                        },
                        {
                            name: "email",
                            placeholder: "Your Email Address",
                            type: "email",
                            required: true,
                        },
                        {
                            name: "phone",
                            placeholder: "Phone (optional)",
                            type: "tel",
                        },
                    ],
                    submitLabel: "Get Vehicle Report",
                }}
            />

            {/* ── Centered Hero — Dark Theme ── */}
            <HeroSection
                variant="centeredWithMedia"
                theme="dark"
                heading="Decode VINs into Accurate Vehicle Data in <1 second"
                headingHighlight="<1 second"
                richText="<p>Decode any VIN into year, make, model, trim, engine, options, and OEM specs instantly. Fast, reliable, and trusted by automotive marketplaces, insurers, dealerships, and fleet operators worldwide.</p>"
                ctas={[
                    {
                        text: "Start for FREE",
                        href: "#",
                        variant: "primary",
                        icon: { src: "/images/arrow-right.svg" },
                    },
                    {
                        text: "Schedule a Demo",
                        href: "#",
                        variant: "outline",
                        icon: { src: "/images/calendar-icon.svg" },
                    },
                ]}
                media={{
                    type: "image",
                    url: "/images/hero-image-552961.png",
                    alt: "VIN Decoding API Dashboard",
                    width: 1200,
                    height: 700,
                }}
            />

            {/* ── Centered Hero — Light Theme ── */}
            <HeroSection
                variant="centeredWithMedia"
                theme="dark"
                heading="The Most Comprehensive Vehicle Data Platform"
                headingHighlight="Vehicle Data Platform"
                richText="<p>Access <strong>25+ APIs</strong> covering VIN decoding, market values, maintenance schedules, license plate lookups, and more — all from a single, unified platform built for scale.</p>"
                ctas={[
                    {
                        text: "Explore APIs",
                        href: "#",
                        variant: "primary",
                    },
                    {
                        text: "View Pricing",
                        href: "#",
                        variant: "outline",
                    },
                ]}
                media={{
                    type: "image",
                    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
                    alt: "Analytics Dashboard",
                    width: 1200,
                    height: 700,
                }}
            />

            {/* ── Background Image Hero — Left Aligned ── */}
            <HeroSection
                variant="backgroundImage"
                heading="Access Audi Database with Vehicle Data API"
                headingHighlight="Audi Database"
                richText="<p>The <strong>Audi API</strong> is a valuable suite of tools designed to assist dealerships and businesses in delivering comprehensive vehicle information and records to their customers who are interested in Audi automobiles. These APIs provide access to vast automotive databases, enabling dealerships and other automotive companies to cater to their customers' requirements efficiently.</p>"
                ctas={[
                    {
                        text: "Free Trial",
                        href: "#",
                        variant: "primary",
                        icon: { src: "/images/arrow-right.svg" },
                    },
                    {
                        text: "Book a Demo",
                        href: "#",
                        variant: "outline",
                        icon: { src: "/images/calendar-icon.svg" },
                    },
                ]}
                backgroundImage={{
                    url: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1600&auto=format&fit=crop",
                    alt: "Audi vehicle on road",
                }}
                overlayOpacity={0.65}
            />

            {/* ── Background Image Hero — Center Aligned ── */}
            <HeroSection
                variant="backgroundImage"
                contentAlign="center"
                heading="Explore Toyota Vehicle Specifications"
                headingHighlight="Toyota"
                richText="<p>Access the complete <strong>Toyota vehicle database</strong> — from Camry to Land Cruiser. Get detailed specs, trim levels, engine data, and pricing information for every model year.</p>"
                ctas={[
                    {
                        text: "Get Started",
                        href: "#",
                        variant: "primary",
                    },
                    {
                        text: "View Documentation",
                        href: "#",
                        variant: "outline",
                    },
                ]}
                backgroundImage={{
                    url: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1600&auto=format&fit=crop",
                    alt: "Toyota vehicle",
                }}
                overlayOpacity={0.7}
            />

            {/* ── Case Study Hero — Dark Theme ── */}
            <HeroSection
                variant="caseStudy"
                theme="dark"
                badge={{ text: "Case Study" }}
                heading="How Detailed Vehicle History (DVH) Leveraged Vehicle Databases’ APIs"
                subheading="To Enhance Its Product Offerings"
                overview={{
                    title: "Overview",
                    details: [
                        { label: "Company", value: "Detailed Vehicle History (DVH)" },
                        { label: "Industry", value: "Automotive Data, Vehicle History Reports & Window Stickers" },
                        { label: "Challenge", value: "Improve vehicle data accuracy, increase conversions, and optimize user experience." },
                        { label: "Solution", value: "Integration of Vehicle Databases' APIs, including VIN Decoder API, license plate decoder API, vehicle history report API, market value API, sales history API, auction history API, OCR API, European VIN decoding API, stolen check API, Title Check API." }
                    ]
                }}
                results={{
                    title: "Results",
                    metrics: [
                        { value: "Improved", label: "data accuracy." },
                        { value: "Faster", label: "processing." },
                        { value: "38% Increase", label: "in conversions." },
                        { value: "28% Lower", label: "bounce rates." }
                    ]
                }}
            />

            {/* ── Case Study Hero — Light Theme ── */}
            <HeroSection
                variant="caseStudy"
                theme="dark"
                badge={{ text: "Success Story" }}
                heading="AutoMarket Doubled Their Lead Quality with Real-Time VIN Lookups"
                subheading="Streamlining Dealer Operations"
                overview={{
                    title: "Overview",
                    details: [
                        { label: "Company", value: "AutoMarket" },
                        { label: "Industry", value: "Automotive Marketplace" },
                        { label: "Challenge", value: "High bounce rates on inventory listings due to missing vehicle specifications and inaccurate trim data." },
                        { label: "Solution", value: "Integrated VDB VIN Decoder API for real-time population of 150+ OEM data points the moment a dealer enters a VIN." }
                    ]
                }}
                results={{
                    title: "Impact",
                    metrics: [
                        { value: "2X Lead Quality", label: "improvement in 3 months." },
                        { value: "Zero manual data", label: "entry required by dealers." },
                        { value: "15% Boost", label: "in inventory publishing speed." },
                        { value: "4.5M+ lookups", label: "handled securely per month." }
                    ]
                }}
            />

            {/* ── Legal Information Hero ── */}
            <HeroSection
                variant="legalInformation"
                heading="Vehicle Databases Privacy Policy"
                headingHighlight="Privacy Policy"
                richText="<p>Vehicle Databases Inc. (<a href='https://vehicledatabases.com'>https://vehicledatabases.com</a>) (&ldquo;Vehicle Databases&rdquo;, &ldquo;VDB&rdquo;, &ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) is dedicated to protecting your privacy and the privacy of your customers. This policy explains what data we collect, why we collect it, and what we do with it when you use our website or any of our Vehicle Data APIs (&ldquo;products&rdquo;, &ldquo;services&rdquo;). We take privacy issues very seriously, and never sell lists, personal information or email addresses. Please read the following to learn more about our Privacy Policy.</p>"
            />

            {/* ── About Us Hero ── */}
            <HeroSection
                variant="aboutUs"
                theme="dark"
                heading="About Vehicle Databases"
                headingHighlight="About Vehicle Databases"
                richText="<p>Vehicle Databases offers one of the largest and most trusted Vehicle Databases API services in the automotive industry. We help businesses from SMEs to fortune 500 companies, developers, and startups build innovative automotive solutions without the need for heavy R&D.</p>"
                calloutText="<p>Our cloud-based APIs are fast, secure, and reliable. They deliver real-time vehicle data that powers better experiences for auto dealerships, mechanics, auction platforms, and automotive enthusiasts alike. With 24/7 support and scalable infrastructure, we make it easy to integrate vehicle intelligence into your workflow so you can focus on building products, not managing servers.</p>"
                ctas={[
                    { text: "Free Trial", href: "#", variant: "primary" },
                    { text: "Book a Demo", href: "#", variant: "outline" }
                ]}
            />

            {/* ── Contact Us Hero ── */}
            <HeroSection
                variant="contactUs"
                theme="dark"
                heading="Contact Us"
                richText="<p>Our team is happy to answer your sales questions. Fill out the form and we'll be in touch as soon as possible.</p>"
                contactDetails={[
                    { icon: "location", text: "65 Brunswick Blvd, Dollard-Des Ormeaux, Quebec" },
                    { icon: "phone", text: "(800) 874-2646", href: "tel:8008742646" },
                    { icon: "email", text: "support@vehicledatabases.com", href: "mailto:support@vehicledatabases.com" },
                    { icon: "support", text: "24/7 Support" },
                ]}
                form={{
                    title: "Get in touch with our team",
                    recaptchaEnabled: true,
                    submitLabel: "Submit",
                    fields: [
                        { name: "firstName", placeholder: "First Name", type: "text", required: true },
                        { name: "lastName", placeholder: "Last Name", type: "text", required: true },
                        { name: "email", placeholder: "Email Address", type: "email", required: true },
                        { name: "phone", placeholder: "Phone", type: "tel" },
                        { name: "companyName", placeholder: "Company Name", type: "text" },
                        { name: "companyWebsite", placeholder: "Company Website", type: "text" },
                        {
                            name: "apiUsage",
                            placeholder: "Just getting started, no API calls yet OR not sure",
                            type: "select",
                            fullWidth: true,
                            options: [
                                { value: "getting-started", label: "Just getting started, no API calls yet OR not sure" },
                                { value: "under-10k", label: "Under 10,000 API calls / month" },
                                { value: "10k-100k", label: "10,000 – 100,000 API calls / month" },
                                { value: "100k-1m", label: "100,000 – 1,000,000 API calls / month" },
                                { value: "over-1m", label: "Over 1,000,000 API calls / month" },
                            ],
                        },
                        { name: "message", placeholder: "Message", type: "textarea", fullWidth: true, rows: 4 },
                    ],
                }}
                ctaFooterText="Book a demo to connect directly with our team and explore how we can best serve your needs."
                ctas={[
                    { text: "Book a Demo", href: "#", variant: "outline" },
                    { text: "Chat with us on WhatsApp", href: "#", variant: "whatsapp" },
                ]}
                media={{
                    type: "image",
                    url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200&auto=format&fit=crop",
                    alt: "Contact us — team at work",
                    width: 600,
                    height: 800,
                }}
            />

            {/* ── MCP Server Hero ── */}
            <HeroSection
                variant="mcp"
                theme="dark"
                heading="Vehicle Databases MCP Server"
                headingHighlight="Vehicle Databases MCP Server"
                tagline="Natural-language vehicle intelligence for LLMs via the Model Context Protocol."
                definitionText="<p><strong>MCP (Model Context Protocol)</strong> enables AI models and agents to consume structured vehicle data through natural language — without direct API integration or fragile schemas.</p>"
                sections={[
                    {
                        heading: "What is the Vehicle Databases MCP Server?",
                        richText: "<p>The Vehicle Databases MCP Server exposes authoritative vehicle intelligence — including VIN decoding, recalls, theft, specifications, and historical signals — as structured context for LLMs.</p><p>This allows models and agents to reason over verified data instead of hallucinating from the web or relying on brittle RAG pipelines.</p>",
                    },
                    {
                        heading: "What this enables",
                        listItems: [
                            "Natural-language queries over vehicle data",
                            "Deterministic, structured context for LLM reasoning",
                            "Safer outputs than embeddings or search",
                            "No custom API glue per model or agent",
                        ],
                    },
                    {
                        heading: "Who it's for",
                        listItems: [
                            "AI agents and copilots",
                            "LLM-powered automotive platforms",
                            "Marketplaces validating listings",
                            "Insurance, compliance, and import workflows",
                        ],
                    },
                ]}
                disclaimerText="This is not a marketing list. We only notify when MCP is released."
                form={{
                    title: "Request MCP access & updates",
                    submitLabel: "Submit request",
                    formDisclaimerText: "Access is reviewed based on use case fit and MCP availability.",
                    fields: [
                        { name: "name", placeholder: "Your Name", type: "text", required: true, fullWidth: true },
                        { name: "email", placeholder: "email@example.com", type: "email", required: true, label: "Email" },
                        { name: "company", placeholder: "Company name", type: "text", label: "Company" },
                        {
                            name: "role",
                            placeholder: "Select",
                            type: "select",
                            label: "Role",
                            fullWidth: true,
                            options: [
                                { value: "developer", label: "Developer / Engineer" },
                                { value: "product", label: "Product Manager" },
                                { value: "data-scientist", label: "Data Scientist" },
                                { value: "founder", label: "Founder / Executive" },
                                { value: "other", label: "Other" },
                            ],
                        },
                        {
                            name: "apis",
                            type: "checkboxGroup",
                            label: "Which APIs are you interested in? (Select optional)",
                            options: [
                                { value: "vin-decoder", label: "VIN Decoder" },
                                { value: "market-value", label: "Market Value" },
                                { value: "ocr-services", label: "OCR Services" },
                                { value: "vehicle-specs", label: "Vehicle Specifications" },
                                { value: "motorcycle-data", label: "Motorcycle Data" },
                                { value: "sales-history", label: "Sales History" },
                                { value: "window-sticker", label: "Window Sticker" },
                                { value: "owners-manual", label: "Owner's Manual" },
                                { value: "license-plate", label: "License Plate" },
                                { value: "vin-title-check", label: "VIN Title Check" },
                                { value: "stolen-vehicle", label: "Stolen Vehicle" },
                                { value: "ev-specs", label: "Electric Vehicle Specifications" },
                                { value: "vehicle-services", label: "Vehicle Services" },
                                { value: "auction-history", label: "Auction History" },
                            ],
                        },
                        {
                            name: "agents",
                            placeholder: "Select option(s)",
                            type: "select",
                            label: "What agents or models are you currently using?",
                            fullWidth: true,
                            options: [
                                { value: "gpt4", label: "GPT-4 / ChatGPT" },
                                { value: "claude", label: "Claude" },
                                { value: "gemini", label: "Gemini" },
                                { value: "llama", label: "Llama" },
                                { value: "custom", label: "Custom / Other" },
                            ],
                        },
                        {
                            name: "useCase",
                            placeholder: "Describe how your model or agent will consume vehicle context via MCP.",
                            type: "textarea",
                            label: "Tell us more about your MCP use case*",
                            required: true,
                            fullWidth: true,
                            rows: 3,
                        },
                    ],
                }}
            />

            <Footer />
        </main>
    );
}
