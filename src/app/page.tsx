import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FactsSection } from "@/components/facts-section";
import { LogoTicker } from "@/components/logo-ticker";
import { ApiSuiteSection } from "@/components/api-suite-section";
import { ApiTestSection } from "@/components/api-test-section";
import { AccessSection } from "@/components/access-section";
import { ProsSection } from "@/components/pros-section";
import { Accordions } from "@/components/accordions";
import { FeaturedBusinessSection } from "@/components/featured-business-section";
import { ReviewsSection } from "@/components/reviews-section";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

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
            <LogoTicker />
            <ApiSuiteSection />
            <ApiTestSection />
            <AccessSection />
            <ProsSection />
            <Accordions 
                variant="docAccordion"
                subheading="Simple Documentation -"
                heading="A Better Developer Experience"
                description="Our easy and straightforward documentation provides a stellar experience to developers making API integration smoother than ever."
                languages={["Node", "React", "PHP", "Python"]}
                items={[
                    {
                        id: "market-value",
                        title: "Vehicle Market Value API",
                        description: "Vehicle market value API works as an Edmunds API alternative, allows you to get instant access to any vehicle's accurate market value pricing. We compute used and new car values by analyzing millions of actual sales transactions and auction prices.",
                        link: { label: "Learn more", href: "#" },
                        snippets: {
                            Node: `var request = require('request');

var options = {
  'method': 'GET',
  'url': 'https://api.vehicledatabases.com/market-value/v2/{vin}',
  'headers': {
    'x-AuthKey': '{X-Authkey}'
  }
};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});`,
                            React: `import { useEffect, useState } from 'react';

export function MarketValue({ vin }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(\`https://api.vehicledatabases.com/market-value/v2/\${vin}\`, {
      headers: { 'x-AuthKey': '{X-Authkey}' }
    })
      .then(res => res.json())
      .then(setData);
  }, [vin]);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}`,
                            PHP: `<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.vehicledatabases.com/market-value/v2/{vin}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPHEADER => [
    "x-AuthKey: {X-Authkey}"
  ],
]);

$response = curl_exec($curl);
curl_close($curl);

echo $response;
?>`,
                            Python: `import requests

url = "https://api.vehicledatabases.com/market-value/v2/{vin}"

headers = {
    "x-AuthKey": "{X-Authkey}"
}

response = requests.get(url, headers=headers)
print(response.json())`,
                        },
                    },
                    {
                        id: "vin-decoder",
                        title: "VIN Decoder API",
                        description: "Our VIN Decoder API provides comprehensive vehicle details including year, make, model, trim, engine type, transmission, and over 50+ data points from a single VIN lookup.",
                        link: { label: "Learn more", href: "#" },
                        snippets: {
                            default: `var request = require('request');

var options = {
  'method': 'GET',
  'url': 'https://api.vehicledatabases.com/vin-decoder/v1/{vin}',
  'headers': {
    'x-AuthKey': '{X-Authkey}'
  }
};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});`,
                        },
                    },
                    {
                        id: "maintenance",
                        title: "Maintenance API",
                        description: "Get the recommended maintenance schedule and intervals for any vehicle by VIN or year, make, and model. Perfect for building service reminder features into your application.",
                        link: { label: "Learn more", href: "#" },
                    },
                    {
                        id: "license-plate",
                        title: "License Plate API",
                        description: "Decode any US license plate into a VIN and full vehicle details instantly. Supports all 50 states with near-real-time data synchronization.",
                        link: { label: "Learn more", href: "#" },
                    },
                    {
                        id: "ocr",
                        title: "OCR API",
                        description: "Capture VINs and license plate numbers from images using our advanced Optical Character Recognition API. Returns decoded text and vehicle data in a single request.",
                        link: { label: "Learn more", href: "#" },
                    },
                ]}
                ctas={[
                    {
                        label: "View Documentation",
                        href: "#",
                        variant: "primary",
                        icon: { src: "/images/arrow-white.svg", width: 8, height: 12 },
                    },
                    {
                        label: "Schedule a Demo",
                        href: "#",
                        variant: "secondary",
                        icon: { src: "/images/calendar-icon.svg", width: 14, height: 14 },
                    },
                ]}
            />
            <FeaturedBusinessSection />
            <ReviewsSection />
            <FaqSection />
            <CtaSection />
            <Footer />
        </main>
    );
}
