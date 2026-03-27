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
            <HeroSection />
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
