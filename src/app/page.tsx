import { Navbar } from "@/components/home/navbar";
import { HeroSection } from "@/components/home/hero-section";
import { FactsSection } from "@/components/home/facts-section";
import { LogoMarquee } from "@/components/home/logo-marquee";
import { ApiSuiteSection } from "@/components/home/api-suite-section";
import { ApiTestSection } from "@/components/home/api-test-section";
import { AccessSection } from "@/components/home/access-section";
import { ProsSection } from "@/components/home/pros-section";
import { ApiCompareSection } from "@/components/home/api-compare-section";
import { FeaturedBusinessSection } from "@/components/home/featured-business-section";
import { ReviewsSection } from "@/components/home/reviews-section";
import { FaqSection } from "@/components/home/faq-section";
import { CtaSection } from "@/components/home/cta-section";
import { Footer } from "@/components/home/footer";

export default function Home() {
    return (
        <main className="min-h-screen w-full bg-black">
            <Navbar />
            <HeroSection
                variant="homepage"
                heading="Vehicle Databases APIs"
                headingHighlight="APIs"
                description="Vehicle Data APIs empowering businesses, developers, and individuals with access to the largest database of accurate vehicle information"
                badge={{
                    label: "NEW",
                    text: "Join MCP Server Waitlist",
                }}
                ctas={[
                    {
                        text: "Get Started",
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
                ctaFooterText="No Credit Card Required!"
                media={{
                    type: "image",
                    url: "/images/hero-image-552961.png",
                    alt: "Vehicle Databases API Dashboard",
                    width: 660,
                    height: 406,
                }}
            />
            <FactsSection />
            <LogoMarquee />
            <ApiSuiteSection />
            <ApiTestSection />
            <AccessSection />
            <ProsSection />
            <ApiCompareSection />
            <FeaturedBusinessSection />
            <ReviewsSection />
            <FaqSection />
            <CtaSection />
            <Footer />
        </main>
    );
}
