import type { Meta, StoryObj } from "@storybook/react";
import { Accordions } from "./accordions";

const meta: Meta<typeof Accordions> = {
    title: "Home/Sections/Accordions",
    component: Accordions,
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;
type Story = StoryObj<typeof Accordions>;

export const DeveloperExperience: Story = {
    args: {
        variant: "docAccordion",
        subheading: "Simple Documentation -",
        heading: "A Better Developer Experience",
        description: "Our easy and straightforward documentation provides a stellar experience to developers making API integration smoother than ever.",
        languages: ["Node", "React", "PHP", "Python"],
        items: [
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
                snippets: {
                    default: `// Maintenance API Data Fetcher`,
                },
            },
            {
                id: "license-plate",
                title: "License Plate API",
                description: "Decode any US license plate into a VIN and full vehicle details instantly. Supports all 50 states with near-real-time data synchronization.",
                link: { label: "Learn more", href: "#" },
                snippets: {
                    default: `// License Plate API Data Fetcher`,
                },
            },
            {
                id: "ocr",
                title: "OCR API",
                description: "Capture VINs and license plate numbers from images using our advanced Optical Character Recognition API. Returns decoded text and vehicle data in a single request.",
                link: { label: "Learn more", href: "#" },
                snippets: {
                    default: `// OCR API Data Fetcher`,
                },
            },
        ],
        ctas: [
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
        ],
    },
};

export const AccordionGrid: Story = {
    args: {
        variant: "accordionGrid",
        subheading: "Automotive Industry -",
        heading: "Powerful Usage for Every Business",
        description: "Explore how our high-performance vehicle data APIs can transform your business operations and customer experience.",
        columns: [
            {
                items: [
                    {
                        id: "flow-1",
                        title: "Improve Customer Experience with Instant Vehicle Data",
                        subtitle: "Flow 1",
                        content: [
                            {
                                type: "list",
                                title: "VIN Decoder APIs instantly return:",
                                items: [
                                    "Make, model, year, and trim",
                                    "Engine, transmission, and drivetrain",
                                    "Factory specs and vehicle features"
                                ]
                            },
                            {
                                type: "list",
                                title: "Business benefits:",
                                items: [
                                    "Faster user onboarding",
                                    "Reduced form friction",
                                    "Higher conversion rates",
                                    "Increased platform trust"
                                ]
                            },
                            {
                                type: "text",
                                content: "Best for: Automotive marketplaces, insurance apps, dealer portals, and inspection platforms.",
                                isHighlight: true
                            }
                        ]
                    },
                    {
                        id: "flow-3",
                        title: "Enable Smarter Pricing, Valuation & Risk Decisions",
                        subtitle: "Flow 3",
                        content: [
                            {
                                type: "text",
                                content: "Access real-time market values and historical pricing data to make informed financial decisions."
                            },
                            {
                                type: "list",
                                title: "Key features:",
                                items: [
                                    "Market value estimation",
                                    "Historical pricing trends",
                                    "Regional price adjustments"
                                ]
                            }
                        ]
                    },
                    {
                        id: "flow-5",
                        title: "Power Smarter Marketing & Personalization",
                        subtitle: "Flow 5",
                        content: [
                            {
                                type: "text",
                                content: "Deliver highly relevant marketing messages based on the exact vehicle specifications of your customers."
                            }
                        ]
                    }
                ]
            },
            {
                items: [
                    {
                        id: "flow-2",
                        title: "Automate Vehicle Identification & Reduce Manual Work",
                        subtitle: "Flow 2",
                        content: [
                            {
                                type: "text",
                                content: "VIN decoding removes the need for long manual data entry forms by auto-filling vehicle information."
                            },
                            {
                                type: "list",
                                title: "Operational advantages:",
                                items: [
                                    "Lower data errors",
                                    "Faster processing workflows",
                                    "Lower support and labor costs",
                                    "Improved internal efficiency"
                                ]
                            },
                            {
                                type: "list",
                                title: "Business benefits:",
                                items: [
                                    "Faster user onboarding",
                                    "Reduced form friction",
                                    "Higher conversion rates",
                                    "Increased platform trust"
                                ]
                            },
                            {
                                type: "text",
                                content: "Ideal for: Fleet operators, rental services, car marketplaces, and registration platforms.",
                                isHighlight: true
                            }
                        ]
                    },
                    {
                        id: "flow-4",
                        title: "Prevent Fraud & Verify Vehicle Identity",
                        subtitle: "Flow 4",
                        content: [
                            {
                                type: "text",
                                content: "Cross-reference VIN data with government and insurance records to verify vehicle authenticity."
                            }
                        ]
                    },
                    {
                        id: "flow-6",
                        title: "Reduce Development Time & Accelerate Product Launch",
                        subtitle: "Flow 6",
                        content: [
                            {
                                type: "text",
                                content: "Our easy-to-integrate REST APIs allow developers to build vehicle-centric features in days, not months."
                            }
                        ]
                    }
                ]
            }
        ]
    }
};

export const WithChangingImage: Story = {
    args: {
        variant: "WithChangingImage",
        subheading: "Powerful APIs —",
        heading: "One Integration, Infinite Possibilities",
        description: "Select any API to see how it seamlessly integrates with our platform and powers real-world applications.",
        defaultOpenIndex: 0,
        items: [
            {
                id: "vin-decoder",
                title: "VIN Decoder API",
                description: "Delivers instant and highly accurate vehicle specs (make, model, year, trim). Our decoder processes over 50+ data points from a single VIN, powering everything from dealer portals to insurance applications.",
                result: "VIN processing time reduced from 10+ seconds to under 1 second.",
                image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1200",
                imageAlt: "VIN Decoder API Dashboard",
                link: { label: "View Documentation", href: "#" },
            },
            {
                id: "license-plate",
                title: "License Plate Decoder API",
                description: "Convert any US or international license plate number directly into a full vehicle profile. Supports all 50 states and major international markets with near-real-time data synchronization.",
                result: "Plate-to-VIN resolution in under 500ms.",
                image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=1200",
                imageAlt: "License Plate Decoder dashboard",
                link: { label: "View Documentation", href: "#" },
            },
            {
                id: "vehicle-history",
                title: "Vehicle History Report API",
                description: "Access complete title history, accident records, odometer readings, ownership chains, and recall information from a single, reliable endpoint.",
                result: "Complete 20-year history delivered in under 2 seconds.",
                image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200",
                imageAlt: "Vehicle History Report example",
                link: { label: "View Documentation", href: "#" },
            },
            {
                id: "market-value",
                title: "Market Value API",
                description: "Get precise, real-time vehicle market values backed by millions of actual sales transactions and live auction data. Supports both retail and wholesale valuations.",
                result: "Valuation accuracy within 2.3% of actual sale price.",
                image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1200",
                imageAlt: "Market Value API chart",
                link: { label: "View Documentation", href: "#" },
            },
            {
                id: "sales-history",
                title: "Sales History & Auction History API",
                description: "Retrieve granular records of past sales and auction events for specific vehicles. Ideal for pricing tools, resale platforms, and financial underwriting workflows.",
                image: "https://images.unsplash.com/photo-1514316703755-dca7d7d9d882?auto=format&fit=crop&q=80&w=1200",
                imageAlt: "Auction history data",
            },
            {
                id: "ocr",
                title: "OCR API",
                description: "Capture VINs and license plate numbers directly from uploaded images using our advanced Optical Character Recognition engine. Supports JPEG, PNG, and HEIC formats.",
                result: "99.2% character recognition accuracy across supported formats.",
                image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200",
                imageAlt: "OCR API processing a license plate",
                link: { label: "View Documentation", href: "#" },
            },
            {
                id: "european-vin",
                title: "European VIN Decoding API",
                description: "Comprehensive VIN decoding for all major European vehicle markets. Supports DVLA (UK), German KBA, French SIV, and EUdraVIN specifications.",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1200",
                imageAlt: "European VIN decoding dashboard",
            },
            {
                id: "stolen-title",
                title: "Stolen Check API & Title Check API",
                description: "Instantly verify whether a vehicle has been reported stolen or has title issues across all 50 US state DMV databases and NICB records.",
                result: "Cross-referenced across 50+ state and federal databases.",
                image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&q=80&w=1200",
                imageAlt: "Stolen check API result screen",
                link: { label: "View Documentation", href: "#" },
            },
        ],
    },
};

export const FAQ: Story = {
    args: {
        variant: "FAQAccordion",
        items: [
            {
                id: "1",
                question: "What is Vehicle Databases?",
                answer: "Vehicle Databases provides accurate vehicle data and VIN decoding APIs. Our API database helps businesses access essential vehicle information, streamline development, and enhance their products."
            },
            {
                id: "2",
                question: "How to use car API?",
                answer: "Using our car API is simple. Once you have an API key, you can make RESTful requests to our endpoints with a VIN or vehicle parameters to receive structured JSON data."
            },
            {
                id: "3",
                question: "How can Vehicle Databases benefit my company?",
                answer: "It streamlines inventory management, powers search filters, and provides accurate technical specifications for automotive platforms, leading to better user experiences."
            },
            {
                id: "4",
                question: "Why choose Vehicle Databases?",
                answer: "We offer the most comprehensive and up-to-date dataset for US vehicles, with high uptime, low latency, and a developer-friendly API."
            },
            {
                id: "5",
                question: "What is an automotive database?",
                answer: "An automotive database is a structured collection of technical data about vehicles, including makes, models, years, specifications, and VIN-related information."
            }
        ]
    }
};
