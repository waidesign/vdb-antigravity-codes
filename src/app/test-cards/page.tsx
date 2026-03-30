import { Cards } from "@/components/ui/cards";
import { Navbar } from "@/components/home/navbar";
import { Footer } from "@/components/home/footer";

export default function TestCardsPage() {
    return (
        <main className="min-h-screen w-full bg-[#0B0B0B]">
            <Navbar />
            
            <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col gap-16">
                <header className="flex flex-col gap-4">
                    <h1 className="text-4xl font-aileron font-bold text-white">Card Components Gallery</h1>
                    <p className="text-neutral-400 font-geist max-w-2xl">
                        A preview of all card variants available in the design system, used extensively for feature highlights, 
                        specifications, and technical data displays.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* H3 and Body */}
                    <Cards 
                        variant="h3Body" 
                        heading="Standard Info Card" 
                        richText="<p>This is a simple H3 and Body card used for general information display with consistent padding and typography.</p>" 
                    />

                    {/* Icon and Body (Inline) */}
                    <Cards 
                        variant="iconBodyInline" 
                        icon="Zap" 
                        richText="<p><strong>Inline Icon:</strong> Perfect for list items or small feature callouts where the icon sits next to the text.</p>" 
                    />

                    {/* Icon and Body (Normal) */}
                    <Cards 
                        variant="iconBodyNormal" 
                        icon="Shield" 
                        richText="<p><strong>Normal Icon:</strong> A classic stacked layout. Great for modular grids and benefit points.</p>" 
                    />

                    {/* H3 Image and Body (Borderless) */}
                    <Cards 
                        variant="h3ImageBodyBorderless" 
                        heading="Media Focused Card" 
                        image="https://images.unsplash.com/photo-1617788131751-40ef6736735e?auto=format&fit=crop&q=80&w=800" 
                        richText="<p>Features a top-aligned image with borderless integration, ideal for visual storytelling.</p>" 
                    />

                    {/* H3 and Body (Redirect) */}
                    <Cards 
                        variant="h3BodyRedirect" 
                        heading="Clickable Link Card" 
                        richText="<p>The entire card acts as a link, perfect for navigating to detailed service or blog pages.</p>" 
                        link="#" 
                    />

                    {/* Icon, H3, Body and CTA */}
                    <Cards 
                        variant="iconH3BodyCTA" 
                        icon="Layers" 
                        heading="Action Oriented" 
                        richText="<p>Combines an icon, heading, and a call-to-action button for conversion-focused sections.</p>" 
                        cta={{ label: "Learn More", href: "#", variant: "secondary" }} 
                    />

                    {/* Icon, Body, Progress, Body */}
                    <Cards 
                        variant="iconBodyProgressBody" 
                        icon="Activity" 
                        richText="<p>Data Accuracy Metric</p>" 
                        progress={82} 
                        bottomText="<p>Verified against <strong>500M+</strong> records.</p>" 
                    />

                    {/* Logo, Body, Divider and Body */}
                    <Cards 
                        variant="logoBodyDividerBody" 
                        logo="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" 
                        richText="<p>Official manufacturer data integration for BMW vehicles globally.</p>" 
                        bottomText="<p>Updated daily with real-time recall and spec data.</p>" 
                    />

                    {/* Body Only */}
                    <Cards 
                        variant="bodyOnly" 
                        richText="<p>Simple content-only card for flexible layout needs where no header or icon is required.</p>" 
                    />
                </div>

                {/* Larger Variants / Full Width */}
                <div className="flex flex-col gap-8">
                    <h2 className="text-2xl font-aileron font-bold text-white border-b border-white/10 pb-4">Complex Variants</h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* H3, Body, Lists, Body, and CTA */}
                        <Cards 
                            variant="h3BodyListsBodyCTA" 
                            heading="Comprehensive Feature Set" 
                            richText="<p>Access our full suite of vehicle intelligence tools with a single integration.</p>" 
                            listItems={[
                                { text: "VIN Decoding (OEM Level)" },
                                { text: "Market Value & Depreciation" },
                                { text: "Recall & Safety Records" },
                                { text: "Theft & Title Check" }
                            ]}
                            cta={{ label: "Get Started", href: "#" }}
                        />

                        {/* Two-Column (Text/Lists | Image) */}
                        <Cards 
                            variant="twoColumnH3BodyListsBodyImage" 
                            heading="Interactive Data Visuals" 
                            richText="<p>Bring your vehicle listings to life with detailed specifications and high-quality imagery.</p>" 
                            listItems={[
                                { text: "Engine & Performance" },
                                { text: "Safety Ratings" },
                                { text: "Fuel Efficiency" },
                                { text: "Standard Equipment" }
                            ]}
                            image="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000" 
                        />
                    </div>

                    {/* Technical Variant */}
                    <Cards 
                        variant="technical" 
                        icon="Code2" 
                        heading="Technical API Documentation" 
                        subheading="Endpoint: /v1/decode"
                        codeSnippet={JSON.stringify({
                            "vin": "1FA6P8CF9G5",
                            "status": "success",
                            "data": {
                                "make": "Ford",
                                "model": "Mustang",
                                "year": 2016,
                                "trim": "GT Premium"
                            }
                        }, null, 2)}
                        subheading2="Response Fields"
                        tableData={[
                            { field: "vin", type: "string", description: "17-digit Identifier" },
                            { field: "year", type: "number", description: "Production Year" },
                            { field: "make", type: "string", description: "Manufacturer Name" },
                            { field: "model", type: "string", description: "Vehicle Model" }
                        ]}
                        richText="<p>Our JSON response follows the REST standard for easy integration across all platforms.</p>"
                    />
                </div>
            </div>

            <Footer />
        </main>
    );
}
