import React from 'react';
import { Divider } from "@/components/ui/divider";
import Section from '@/components/sections/two-column-section';
import CardsSection from '@/components/sections/cards-section';
import CodeBlockSectionV1 from '@/components/sections/code-block-section-v1';
import CodeBlockSectionV2 from '@/components/sections/code-block-section-v2';
import UniqueDownloadAppSection from '@/components/sections/unique-download-app-section';
import UniqueHeroSectionV1 from '@/components/sections/unique-hero-section-v1';
import UniqueHeroSectionV2 from '@/components/sections/unique-hero-section-v2';
import HowItWorksSectionV1 from '@/components/sections/how-it-works-section-v1';
import HowItWorksSectionV2 from '@/components/sections/how-it-works-section-v2';
import HowItWorksSectionV3 from '@/components/sections/how-it-works-section-v3';
import HowItWorksSectionV4 from '@/components/sections/how-it-works-section-v4';
import ListsSection from '@/components/sections/lists-section';
import UniqueHeroSectionV4 from '@/components/sections/unique-hero-section-v4';
import { UniqueCodeBlockSection } from '@/components/sections/unique-code-block-section';
import { UniqueHeroSectionContactUs } from '@/components/sections/unique-hero-section-contact-us';
import UniqueHeroSectionMcp from '@/components/sections/unique-hero-section-mcp';
import UniqueDownloadAppSectionV1 from '@/components/sections/unique-download-app-section-v1';
import UniqueAccordionSection from '@/components/sections/unique-accordion-section';
import UniqueFactsSection from '@/components/sections/unique-facts-section';
import UniqueVerticalStepperSection from '@/components/sections/unique-vertical-stepper-section';
import UniqueTestimonialSection from '@/components/sections/unique-testimonial-section';
import ApiCardsSection from '@/components/sections/api-cards-section';
import TableSection from '@/components/sections/table-section';
import GetInTouchFormSection from '@/components/sections/get-in-touch-form-section';
import FullWidthCardSection from '@/components/sections/full-with-card-section';
import BrochurePageSection from '@/components/sections/brochure-page-section';
import TrustLogoSection from '@/components/sections/trust-logo-section-v1';
import UniqueMakeHeroSection from '@/components/sections/unique-make-hero-section';
import UniqueTwoColumnSection from '@/components/sections/unique-two-column-section';
import ApiHeroSection from '@/components/sections/api-hero-section';
import TwoColumnSectionWithMedia from '@/components/sections/two-column-section-with-media';
import UniqueTabSection from '@/components/sections/unique-tab-section';
import TwoColumnSectionUnique from '@/components/sections/two-column-section-unique';
import ApiHeroSectionWithForm from '@/components/sections/api-hero-section-with-form';
import SalesHistoryPrivateSalesSection from '@/components/sections/sales-history-private-sales-section';

export default function TestSectionPage() {
    const mockDataUniqueCodeBlock = {
        "theme": "dark" as const,
        "rows": [
            {
                "layout": "one-column" as const,
                "className": "text-center max-w-4xl mx-auto",
                "columns": [
                    {
                        "blocks": [
                            {
                                "blockType": "heading",
                                "tag": "h2",
                                "text": "Developer-Ready Image-to-Text API!",
                                "className": "text-3xl lg:text-5xl font-aileron font-black mb-12"
                            },
                            {
                                "blockType": "iconGrid",
                                "items": [
                                    { "label": "Shell", "icon": "https://img.icons8.com/color/96/console.png" },
                                    { "label": "Node", "icon": "https://img.icons8.com/color/96/nodejs.png" },
                                    { "label": "React", "icon": "https://img.icons8.com/color/96/react-native.png" },
                                    { "label": "Ruby", "icon": "https://img.icons8.com/color/96/ruby-programming-language.png" },
                                    { "label": "PHP", "icon": "https://img.icons8.com/offices/96/php-logo.png" },
                                    { "label": "Python", "icon": "https://img.icons8.com/color/96/python--v1.png" }
                                ]
                            },
                            {
                                "blockType": "richText",
                                "content": "<p class=\"text-lg text-neutral-600 font-geist\">Simple REST API with all the tools you need to save development time and get 100% accuracy during data extractions anytime.</p>"
                            }
                        ]
                    }
                ]
            },
            {
                "layout": "one-column" as const,
                "className": "max-w-5xl mx-auto",
                "columns": [
                    {
                        "blocks": [
                            {
                                "blockType": "lists",
                                "variant": "iconList",
                                "columns": 2,
                                "icon": "check",
                                "items": [
                                    "Straightforward endpoints",
                                    "Supports asynchronous processing and webhooks",
                                    "100% data extraction accuracy",
                                    "Full API documentation with examples",
                                    "Sample code in Python, Node.js, PHP",
                                    "Developer support available",
                                    "Response times under 500ms for most requests",
                                    "Secure, SSL-protected endpoints"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "layout": "two-column" as const,
                "className": "gap-8",
                "columns": [
                    {
                        "blocks": [
                            {
                                "blockType": "card",
                                "padding": "p-10",
                                "backgroundColor": "#171717",
                                "blocks": [
                                    { "blockType": "heading", "tag": "h3", "text": "Python", "className": "text-center mb-8 font-aileron font-bold text-2xl text-white" },
                                    { 
                                        "blockType": "code", 
                                        "language": "bash", 
                                        "windowTitle": "CURL",
                                        "tryItLabel": "Try It!",
                                        "code": "curl --request POST \\\n  --url https://api.taggun.io/api/receipt/v1/verbose \\\n  --header 'accept: application/json' \\\n  --header 'content-type: multipart/form-data' \\\n  --form refresh=false \\\n  --form incognito=false \\\n  --form extractTime=false"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "blocks": [
                            {
                                "blockType": "card",
                                "padding": "p-10",
                                "backgroundColor": "#171717",
                                "blocks": [
                                    { "blockType": "heading", "tag": "h3", "text": "Node", "className": "text-center mb-8 font-aileron font-bold text-2xl text-white" },
                                    { 
                                        "blockType": "code", 
                                        "language": "bash", 
                                        "windowTitle": "CURL",
                                        "tryItLabel": "Try It!",
                                        "code": "curl --request POST \\\n  --url https://api.taggun.io/api/receipt/v1/verbose \\\n  --header 'accept: application/json' \\\n  --header 'content-type: multipart/form-data' \\\n  --form refresh=false \\\n  --form incognito=false \\\n  --form extractTime=false"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "layout": "one-column" as const,
                "className": "text-center mt-8",
                "columns": [
                    {
                        "blocks": [

                        ]
                    }
                ]
            }
        ]
    };
    const mockDataApiHero = {
        "theme": "light" as const,
        "columns": [
            {
                "blocks": [
                    {
                        "blockType": "heading",
                        "tag": "h1",
                        "variant": "gradient",
                        "text": "Image to Text",
                        "className": "mb-8"
                    },
                    {
                        "blockType": "richText",
                        "content": "<div class=\"flex flex-col gap-6 mb-10 text-lg lg:text-xl font-geist text-neutral-600 leading-relaxed\"><p>Easily extract text from an image, scanned document, or PDF with the image to text generator. This tool quickly turns files into clean, searchable text; perfect for everyday use, work, businesses, or anything in between.</p><p>Turn scanned documents, PDFs, and image files into structured, searchable text using our powerful Image to Text tool. Extract text from any image in seconds for personal use, apps, and businesses.</p></div>"
                    },
                    {
                        "blockType": "cta",
                        "buttons": [
                            { "text": "Free trial", "variant": "primary", "link": "#" },
                            { "text": "Book a Demo", "variant": "outline", "link": "#" }
                        ]
                    }
                ]
            },
            {
                "blocks": [
                    {
                        "blockType": "card",
                        "backgroundColor": "#9747ff",
                        "padding": "p-1",
                        "blocks": [
                            {
                                "blockType": "heading",
                                "tag": "h3",
                                "text": "IMAGE TO TEXT API",
                                "className": "text-white text-center py-6 font-aileron font-black tracking-widest text-sm lg:text-base opacity-90"
                            },
                            {
                                "blockType": "media",
                                "url": "https://images.unsplash.com/photo-1620712943543-bcc4628c9750?q=80&w=2670&auto=format&fit=crop", 
                                "alt": "API Illustration",
                                "className": "w-full h-auto rounded-b-[18px]"
                            }
                        ]
                    }
                ]
            }
        ]
    };

    const mockDataUniqueTwoColumn = {
        "title": "Built for Developers, Scalable for Enterprise",
        "description": "Our RESTful JSON APIs are designed to be easily integrated into any workflow, whether you're building a new consumer app or migrating legacy dealership systems. Enjoy thorough documentation, rapid response times, and 99.99% uptime.",
        "mediaType": "video" as const,
        "mediaUrl": "https://www.w3schools.com/html/mov_bbb.mp4", 
        "theme": "dark" as const,
        "columns": [
            {
                "blocks": [
                    {
                        "blockType": "card",
                        "backgroundColor": "#171717",
                        "blocks": [
                            {
                                "blockType": "badge",
                                "text": "LET'S GET STARTED!"
                            },
                            {
                                "blockType": "heading",
                                "tag": "h2",
                                "text": "Get a free account with free trial credits & test our APIs easily!"
                            },
                            {
                                "blockType": "ctaStack",
                                "direction": "row",
                                "ctas": [
                                    { "label": "Sign Up", "variant": "primary", "link": "#" },
                                    { "label": "Book a Demo", "variant": "secondary", "link": "#" }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "blocks": [
                    {
                        "blockType": "heading",
                        "tag": "h2",
                        "text": "VIN Decoding API for Audi"
                    },
                    {
                        "blockType": "richText",
                        "content": "<p>The <strong>VIN decoding API for Audi</strong> and the <strong>Vehicle History API</strong> are great resources for automotive businesses providing vehicle history reports to their customers. When Audi buyers visit dealerships to purchase used Audis, they want to learn about the vehicle specifications, manufacturer information, and history of Audis in the inventory. Car buyers expect dealerships to be able to answer the questions they have to ask.</p><br/><p>Having the vehicle specifications, manufacturer information, and vehicle history readily available on a company's website with Audi Vehicle APIs increases credibility and further increases sales. After a successful call, the VIN decoding API for Audi provides accurate vehicle specifications and the Audi vehicle history API returns the accident history, damage history, lien and loan records, theft records, and others.</p>"
                    }
                ]
            }
        ]
    };

    const mockDataUniqueMakeHero = {
        "backgroundImage": "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2669&auto=format&fit=crop", // Audi on a mountain road
        "blocks": [
            {
                "blockType": "heading",
                "tag": "h1",
                "text": "Access Audi Database with Vehicle Data API"
            },
            {
                "blockType": "richText",
                "content": "<p>The <strong>Audi API</strong> is a valuable suite of tools designed to assist dealerships and businesses in delivering comprehensive vehicle information and records to their customers who are interested in Audi automobiles. These APIs provide access to vast automotive databases, enabling dealerships and other automotive companies to cater to their customers' requirements efficiently.</p>"
            }
        ]
    };

    const mockDataTrustLogos = {
        "blocks": [
            {
                "blockType": "badge",
                "text": "smart"
            },
            {
                "blockType": "heading",
                "tag": "h2",
                "text": "Trusted By Many Automotive Data Providers!"
            },
            {
                "blockType": "logoGrid",
                "logos": [
                    { "src": "https://placehold.co/400x160/ffffff/a3a3a3?text=INSTANT+VIN+REPORTS", "alt": "Instant VIN Reports", "width": "180px", "height": "72px" },
                    { "src": "https://placehold.co/400x160/ffffff/a3a3a3?text=DVH", "alt": "Detailed Vehicle History", "width": "180px", "height": "72px" },
                    { "src": "https://placehold.co/400x160/ffffff/a3a3a3?text=CONSULTA+de+VIN", "alt": "Consulta de VIN", "width": "180px", "height": "72px" },
                    { "src": "https://placehold.co/400x160/ffffff/a3a3a3?text=SHOPSMART+AUTOS", "alt": "ShopSmart Autos", "width": "180px", "height": "72px" },
                    { "src": "https://placehold.co/400x160/ffffff/a3a3a3?text=car+trackers", "alt": "Car Trackers", "width": "180px", "height": "72px" },
                    { "src": "https://placehold.co/400x160/ffffff/a3a3a3?text=W!", "alt": "W!", "width": "180px", "height": "72px" },
                    { "src": "https://placehold.co/400x160/ffffff/a3a3a3?text=GoAutoVIN", "alt": "GoAutoVIN", "width": "180px", "height": "72px" }
                ]
            }
        ]
    };
    const mockDataBrochurePage = {
        "leftPanel": {
            "title": "Why Download Our API Brochure?",
            "blocks": [
                { "blockType": "benefit", "text": "Explore 25+ powerful automotive APIs" },
                { "blockType": "benefit", "text": "Get detailed specifications, endpoint details, coverage and more details" },
                { "blockType": "benefit", "text": "Learn how to integrate within hours" },
                { "blockType": "benefit", "text": "Trusted by many businesses worldwide" },
                { 
                    "blockType": "testimonial", 
                    "quote": "Better experience... impossible. These guys help you with everything and they put all the effort to create the best experience and satisfaction. We are very thankful with them.",
                    "author": "Redline Used Auto Parts",
                    "className": "mt-12 bg-white/10 border-white/20"
                },
                {
                    "blockType": "formSection",
                    "blocks": [
                        { "blockType": "metric", "value": "100M+ Records", "description": "" },
                        { "blockType": "metric", "value": "99.9% Uptime", "description": "" }
                    ]
                }
            ]
        },
        "rightPanel": {
            "title": "Get Your API Brochure",
            "description": "Fill out the form below to receive our comprehensive API documentation",
            "submitLabel": "GET MY API BROCHURE",
            "blocks": [
                {
                    "blockType": "formSection",
                    "title": "Contact Information",
                    "blocks": [
                        { "blockType": "form", "fields": [
                            { "type": "text", "label": "First Name", "placeholder": "John" },
                            { "type": "text", "label": "Last Name", "placeholder": "Doe" },
                            { "type": "text", "label": "Email", "placeholder": "example@example.com", "required": true },
                            { "type": "text", "label": "Phone Number", "placeholder": "" }
                        ]}
                    ]
                },
                {
                    "blockType": "formSection",
                    "title": "Business Information",
                    "blocks": [
                        { "blockType": "form", "fields": [
                            { "type": "text", "label": "Business Name", "placeholder": "" },
                            { "type": "text", "label": "Business Website", "placeholder": "" }
                        ]},
                        { "blockType": "selectField", "label": "Industry Type", "placeholder": "Dealership", "options": [{ "label": "SaaS", "value": "saas" }] },
                        { "blockType": "selectField", "label": "Business Size", "placeholder": "Solo", "options": [{ "label": "Enterprise", "value": "enterprise" }] }
                    ]
                },
                {
                    "blockType": "formSection",
                    "title": "API Interest",
                    "blocks": [
                        { "blockType": "selectField", "label": "What best describes your use case?", "placeholder": "Fraud detection", "options": [], "required": true, "fullWidth": true },
                        { "blockType": "form", "fields": [
                            { "type": "textarea", "label": "How do you plan to use the APIs?", "placeholder": "Please describe how you plan to use our APIs...", "required": true }
                        ]},
                        { "blockType": "checkboxField", "label": "I hereby consent to being sent commercial information on services offered by client Vehicle Databases via electronic means of communication to the provided email address. I also declare that I have read the Privacy Policy.", "required": true },
                        { "blockType": "recaptcha" }
                    ]
                }
            ]
        }
    };
    const mockDataFullWidthCard = {
        "title": "Benefits of White-Labeling",
        "layout": "two-column" as const,
        "columns": [
            {
                "blocks": [
                    { "blockType": "benefit", "text": "No need to build your own data—use ours and avoid costly development expenses." },
                    { "blockType": "benefit", "text": "Start delivering to customers right away without the lengthy development process." }
                ]
            },
            {
                "blocks": [
                    { "blockType": "benefit", "text": "Invest less and offer valuable products, leading to increased profit margins." },
                    { "blockType": "benefit", "text": "Use credible data to make your brand trustworthy. Customers will trust a brand backed by reliable data." }
                ]
            }
        ]
    };
    const mockDataGetInTouch = {
        "title": "Have more questions?",
        "subtitle": "Get in touch",
        "layout": "two-column" as const,
        "columns": [
            {
                "blocks": [
                    {
                        "blockType": "form",
                        "title": "Send in a query",
                        "submitLabel": "Submit Query",
                        "fields": [
                            { "name": "firstName", "label": "First Name", "placeholder": "First Name", "type": "text" },
                            { "name": "email", "label": "Email Address", "placeholder": "Email Address", "type": "email" },
                            { "name": "contact", "label": "Contact Number", "placeholder": "Contact Number", "type": "tel" },
                            { "name": "message", "label": "Message", "placeholder": "Message", "type": "textarea" }
                        ]
                    }
                ]
            },
            {
                "blocks": [
                    {
                        "blockType": "appDownload",
                        "appStoreUrl": "https://apps.apple.com",
                        "googlePlayUrl": "https://play.google.com",
                        "theme": "light"
                    }
                ]
            }
        ]
    };
    const mockDataTable = {
        "title": "Key Results & Impact",
        "description": "After integrating Vehicle Databases' APIs, OVH achieved significant improvements:",
        "layout": "one-column" as const,
        "columns": [
            {
                "blocks": [
                    {
                        "blockType": "table",
                        "headers": ["Metric", "Before Integration", "After Integration"],
                        "highlightColumns": [2],
                        "rows": [
                            { "cells": ["VIN Processing Time", "~10 seconds+", "< 1 second"] },
                            { "cells": ["Market Value Accuracy", "60%", "98%"] },
                            { "cells": ["OCR Data Entry Errors", "High", "Reduced by 98%"] },
                            { "cells": ["Vehicle History Report Completeness", "Partial", "Comprehensive"] },
                            { "cells": ["Sales & Auction Data Availability", "None", "Fully Integrated"] },
                            { "cells": ["Conversion Rate", "Baseline", "Increased by 33%"] },
                            { "cells": ["Bounce Rate on Preview Pages", "High", "Reduced by 28%"] },
                            { "cells": ["Mobile App Launch", "Pending", "Successfully Launched"] }
                        ]
                    }
                ]
            }
        ]
    };
    const mockDataApiCards = {
        "title": "OCR APIs",
        "layout": "three-column" as const,
        "columns": [
            {
                "blocks": [
                    {
                        "blockType": "apiCard",
                        "title": "OCR API",
                        "description": "OCR APIs capture VINs & License plates and converts to text in seconds",
                        "link": "#",
                        "icon": "arrow"
                    }
                ]
            },
            {
                "blocks": [
                    {
                        "blockType": "apiCard",
                        "title": "VIN OCR",
                        "description": "OCR API with high accuracy and is optimized to capture and detect VINs in seconds.",
                        "link": "#",
                        "icon": "arrow"
                    }
                ]
            },
            {
                "blocks": [
                    {
                        "blockType": "apiCard",
                        "title": "License Plate OCR",
                        "description": "Fetch full vehicle information by VIN or YMM to get the complete specs, engine information, color options, packages, and more for any car.",
                        "link": "#",
                        "icon": "arrow"
                    }
                ]
            },
            {
                "blocks": [
                    {
                        "blockType": "apiCard",
                        "title": "Receipt OCR API",
                        "description": "Converts scanned or photographed receipts into structured data with just one API call",
                        "link": "#",
                        "icon": "arrow"
                    }
                ]
            },
            {
                "blocks": [
                    {
                        "blockType": "apiCard",
                        "title": "Invoice OCR API",
                        "description": "It returns clean, structured results in JSON format, making it easy to use the data in your accounting tools, finance software, or ERP systems.",
                        "link": "#",
                        "icon": "arrow"
                    }
                ]
            }
        ]
    };
    const mockDataTestimonial = {
        "title": "Testimonial",
        "layout": "one-column" as const,
        "columns": [
            {
                "blocks": [
                    {
                        "blockType": "testimonial",
                        "quote": "The integration process was surprisingly smooth. Vehicle Databases' support team was responsive and thorough. Their flexibility and commitment to helping us scale made all the difference. We're proud of this partnership and excited about what's next.",
                        "author": {
                            "name": "Product Manager",
                            "role": "Detailed Vehicle History",
                            "avatar": { "url": "https://vdb-homepage-with-new-prompt-main.vercel.app/favicon.ico" } // Fallback avatar
                        }
                    }
                ]
            }
        ]
    };
    const mockDataStepper = {
        "title": "Business Growth & Competitive Advantage",
        "layout": "one-column" as const,
        "columns": [
            {
                "blocks": [
                    {
                        "blockType": "verticalStepper",
                        "steps": [
                            {
                                "title": "1. Conversions & Revenue Uplift",
                                "blocks": [
                                    {
                                        "blockType": "richText",
                                        "content": "<p>Sales history and auction images added credibility, boosting report purchases by 33%. Real-time, transparent market pricing built stronger buyer trust.</p>"
                                    }
                                ]
                            },
                            {
                                "title": "2. Lower Bounce Rates & Higher Engagement",
                                "blocks": [
                                    {
                                        "blockType": "richText",
                                        "content": "<p>Auction imagery and richer preview pages helped reduce bounce rates. Users now spend more time exploring detailed reports.</p>"
                                    }
                                ]
                            },
                            {
                                "title": "3. Seamless Mobile App Launch",
                                "blocks": [
                                    {
                                        "blockType": "richText",
                                        "content": "<p>Integration of OCR, plate lookup, and VIN decoding empowered a frictionless mobile experience, resulting in a <span class='text-purple-500 font-bold'>43%</span> increase in mobile engagement.</p>"
                                    }
                                ]
                            },
                            {
                                "title": "4. Expanded Market Reach & Differentiation",
                                "blocks": [
                                    {
                                        "blockType": "richText",
                                        "content": "<p><span class='text-purple-500 font-bold'>License Plate Decoding</span> added a new entry point for users, opening the door to broader marketing and user acquisition opportunities. The inclusion of OCR and auction data set DVH apart from traditional vehicle report providers.</p>"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };
    const mockDataFacts = {
        "title": "Real Results",
        "layout": "two-column" as const,
        "columns": [
            {
                "blocks": [
                    {
                        "blockType": "metric",
                        "value": "43%",
                        "description": "43% increase in mobile engagement.",
                        "icon": "mortarboard"
                    }
                ]
            },
            {
                "blocks": [
                    {
                        "blockType": "metric",
                        "value": "98%",
                        "description": "Reduced input errors by 98%, thanks to OCR.",
                        "icon": "mortarboard"
                    }
                ]
            },
            {
                "blocks": [
                    {
                        "blockType": "metric",
                        "value": "Faster",
                        "description": "Faster inspections and deal closures.",
                        "icon": "mortarboard"
                    }
                ]
            },
            {
                "blocks": [
                    {
                        "blockType": "metric",
                        "value": "Improved Reliability",
                        "description": "Offline support improved reliability in low-connectivity environments.",
                        "icon": "mortarboard"
                    }
                ]
            }
        ],
        "footerBlocks": [
            {
                "blockType": "richText",
                "content": "The DVH Mobile App is more than just a convenient tool—it's an extension of the platform's mission to deliver accurate and reliable vehicle data at your fingertip."
            },
            {
                "blockType": "appDownload",
                "appStoreUrl": "https://apps.apple.com",
                "googlePlayUrl": "https://play.google.com"
            }
        ]
    };
    const mockDataAccordion = {
        "title": "The Solution: A Full Suite of Vehicle Databases APIs",
        "description": "DVH integrated a wide range of APIs from Vehicle Databases, each designed to solve specific product limitations:",
        "layout": "two-column" as const,
        "columns": [
            {
                "verticalAlignment": "start" as const,
                "blocks": [
                    {
                        "blockType": "accordion",
                        "items": [
                            {
                                "title": "1. VIN Decoder API",
                                "blocks": [
                                    {
                                        "blockType": "richText",
                                        "content": "Delivers instant and highly accurate vehicle specs (make, model, year, trim)."
                                    },
                                    {
                                        "blockType": "richText",
                                        "content": "Result: VIN processing time reduced from 10+ seconds to under 1 second."
                                    }
                                ]
                            },
                            {
                                "title": "2. License Plate Decoder API",
                                "blocks": [
                                    {
                                        "blockType": "richText",
                                        "content": "Enables vehicle identification via license plate lookup across multiple states and countries."
                                    }
                                ]
                            },
                            {
                                "title": "3. Vehicle History Report API",
                                "blocks": [
                                    {
                                        "blockType": "richText",
                                        "content": "Comprehensive historical data including title checks, accidents, and ownership history."
                                    }
                                ]
                            },
                            {
                                "title": "4. Market Value API",
                                "blocks": [
                                    {
                                        "blockType": "richText",
                                        "content": "Real-time valuation based on historical sales and auction data."
                                    }
                                ]
                            },
                            {
                                "title": "5. Sales History & Auction History API",
                                "blocks": [
                                    {
                                        "blockType": "richText",
                                        "content": "Access to millions of historical sales records and auction results."
                                    }
                                ]
                            },
                            {
                                "title": "6. OCR API",
                                "blocks": [
                                    {
                                        "blockType": "richText",
                                        "content": "Optical Character Recognition for automated document processing (titles, licenses)."
                                    }
                                ]
                            },
                            {
                                "title": "7. European VIN Decoding API",
                                "blocks": [
                                    {
                                        "blockType": "richText",
                                        "content": "Specialized decoding for European vehicle manufacturers and markets."
                                    }
                                ]
                            },
                            {
                                "title": "8. Stolen Check API & Title Check API",
                                "blocks": [
                                    {
                                        "blockType": "richText",
                                        "content": "Instant verification of stolen status and title brands/liens."
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "verticalAlignment": "start" as const,
                "blocks": [
                    {
                        "blockType": "imagePlaceholder",
                        "label": "API Dashboard Mockup",
                        "aspectRatio": "4/3"
                    }
                ]
            }
        ]
    };
    const mockDataAppDownload = {
        "title": "Mobile App Spotlight: Power in Your Pocket",
        "description": "As part of DVM's mission to make vehicle history data more accessible and actionable, the launch of the Detailed Vehicle History Mobile App marked a major milestone. Built with both everyday consumers and automotive professionals in mind, the app leverages Vehicle Databases' powerful API suite to deliver speed, accuracy, and convenience—anytime, anywhere.",
        "layout": "two-column" as const,
        "columns": [
            {
                "verticalAlignment": "center" as const,
                "blocks": [
                    {
                        "blockType": "videoplayer",
                        "url": "/videos/mobile-app-demo.mp4",
                        "title": "Mobile App Demo",
                        "alt": "Mobile App Mockup",
                        "isPlaceholder": true
                    }
                ]
            },
            {
                "verticalAlignment": "center" as const,
                "blocks": [
                    {
                        "blockType": "appDownload",
                        "title": "Checkout Detailed Vehicle History App on Your Mobile Devices",
                        "qrCodes": [
                            { "url": "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://apps.apple.com", "label": "App Store" },
                            { "url": "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://play.google.com", "label": "Google Play" }
                        ],
                        "appStoreUrl": "https://apps.apple.com",
                        "googlePlayUrl": "https://play.google.com",
                        "theme": "dark"
                    }
                ]
            }
        ]
    };
    const mockDataMCP = {
        "layout": "two-column" as const,
        "columns": [
            {
                "verticalAlignment": "start" as const,
                "blocks": [
                    {
                        "blockType": "heading",
                        "tag": "h1",
                        "text": "Vehicle Databases MCP Server",
                        "highlight": "MCP Server"
                    },
                    {
                        "blockType": "richText",
                        "content": "Natural-language vehicle intelligence for LLMs via the Model Context Protocol."
                    },
                    {
                        "blockType": "richText",
                        "content": "MCP (Model Context Protocol) enables AI models and agents to consume structured vehicle data through natural language — without direct API integration or fragile schemas."
                    },
                    {
                        "blockType": "heading",
                        "tag": "h3",
                        "text": "What is the Vehicle Databases MCP Server?"
                    },
                    {
                        "blockType": "richText",
                        "content": "The Vehicle Databases MCP Server exposes authoritative vehicle intelligence — including VIN decoding, recalls, theft, specifications, and historical signals — as structured context for LLMs."
                    },
                    {
                        "blockType": "richText",
                        "content": "This allows models and agents to reason over verified data instead of hallucinating from the web or relying on brittle RAG pipelines."
                    },
                    {
                        "blockType": "heading",
                        "tag": "h3",
                        "text": "What this enables"
                    },
                    {
                        "blockType": "lists",
                        "variant": "iconList",
                        "items": [
                            { text: "Natural-language queries over vehicle data" },
                            { text: "Deterministic, structured context for LLM reasoning" },
                            { text: "Safer outputs than embeddings or search" },
                            { text: "No custom API glue per model or agent" }
                        ]
                    },
                    {
                        "blockType": "heading",
                        "tag": "h3",
                        "text": "Who it's for"
                    },
                    {
                        "blockType": "lists",
                        "variant": "iconList",
                        "items": [
                            { text: "AI agents and copilots" },
                            { text: "LLM-powered automotive platforms" },
                            { text: "Marketplaces validating listings" },
                            { text: "Insurance, compliance, and import workflows" }
                        ]
                    },
                    {
                        "blockType": "note",
                        "text": "This is not a marketing list. We only notify when MCP is released"
                    }
                ]
            },
            {
                "verticalAlignment": "start" as const,
                "blocks": [
                    {
                        "blockType": "form",
                        "variant": "mcp",
                        "title": "Request MCP access & updates",
                        "submitLabel": "Submit request",
                        "footerText": "Access is reviewed based on use-case fit and MCP availability.",
                        "fields": [
                            {
                                "type": "text",
                                "label": "Name",
                                "placeholder": "Your Name"
                            },
                            {
                                "type": "row",
                                "fields": [
                                    { "type": "email", "label": "Email", "placeholder": "email@example.com" },
                                    { "type": "text", "label": "Company", "placeholder": "Company name" }
                                ]
                            },
                            {
                                "type": "select",
                                "label": "Role",
                                "placeholder": "Select",
                                "options": [
                                    { "label": "Developer", "value": "dev" },
                                    { "label": "Product Manager", "value": "pm" },
                                    { "label": "Founder", "value": "founder" }
                                ]
                            },
                            {
                                "type": "checkboxGroup",
                                "label": "Which APIs are you interested in?",
                                "options": [
                                    { "label": "Select(optional)", "value": "all" },
                                    { "label": "VIN Decoder", "value": "vin" },
                                    { "label": "Market Value", "value": "market" },
                                    { "label": "OCR Services", "value": "ocr" },
                                    { "label": "Vehicle Specifications", "value": "specs" },
                                    { "label": "Motorcycle Data", "value": "moto" },
                                    { "label": "Sales History", "value": "sales" },
                                    { "label": "Window Sticker", "value": "sticker" },
                                    { "label": "Owner's Manual", "value": "manual" },
                                    { "label": "License Plate", "value": "plate" },
                                    { "label": "VIN Title Check", "value": "title" },
                                    { "label": "Stolen Vehicle", "value": "stolen" },
                                    { "label": "Electric Vehicle Specifications", "value": "ev" },
                                    { "label": "Vehicle Services", "value": "services" },
                                    { "label": "Auction History", "value": "auction" }
                                ]
                            },
                            {
                                "type": "select",
                                "label": "What agents or models are you currently using?",
                                "placeholder": "Select (optional)",
                                "options": [
                                    { "label": "ChatGPT / GPT-4", "value": "gpt4" },
                                    { "label": "Claude 3.5 Sonnet", "value": "claude" },
                                    { "label": "Gemini 1.5 Pro", "value": "gemini" }
                                ]
                            },
                            {
                                "type": "textarea",
                                "label": "Tell us more about your MCP use case*",
                                "placeholder": "Describe how your model or agent will consume vehicle context via MCP...",
                                "rows": 4
                            }
                        ]
                    }
                ]
            }
        ]
    };
    const mockDataTwoCol = {
        "layout": "two-column" as const,
        "columns": [
            {
                "verticalAlignment": "center" as const,
                "blocks": [
                    {
                        "blockType": "media",
                        "mediaType": "video",
                        "url": "/videos/ocr-demo.mp4",
                        "alt": "World's Fastest OCR Technology"
                    }
                ]
            },
            {
                "verticalAlignment": "center" as const,
                "blocks": [
                    {
                        "blockType": "heading",
                        "tag": "h2",
                        "text": "Advanced OCR Technology for Capturing and Reading VINs and License Plates"
                    },
                    {
                        "blockType": "list",
                        "items": [
                            "Up to 98% accuracy in detecting VINs and license plates through OCR.",
                            "< 1-second text recognition speed",
                            "Up to 90% accuracy in scanning for VIN, US license plate, or UK registration number.",
                            "Build on cloud infrastructure with 99.99% uptime and reliability."
                        ]
                    },

                ]
            }
        ]
    };

    const mockDataCards = {
        "layout": "one-column" as const,
        "columns": [
            {
                "verticalAlignment": "center" as const,
                "appearance": "default" as const,
                "blocks": [
                    {
                        "blockType": "heading",
                        "tag": "h2",
                        "text": "Benefits of our OCR technology"
                    },
                    {
                        "blockType": "richText",
                        "content": "Automate business processes and enhance work efficiency with OCR technology"
                    },
                    {
                        "blockType": "cards",
                        "items": [
                            {
                                "iconUrl": null,
                                "title": "Text recognition in less than a second",
                                "description": ""
                            },
                            {
                                "iconUrl": null,
                                "title": "Lightning-fast VIN scanning, translation, and decoding",
                                "description": ""
                            },
                            {
                                "iconUrl": null,
                                "title": "Reduces chances of human errors",
                                "description": ""
                            },
                            {
                                "iconUrl": null,
                                "title": "Seamless API integration and implementation",
                                "description": ""
                            },
                            {
                                "iconUrl": null,
                                "title": "Detects in low light and from different angles",
                                "description": ""
                            },
                            {
                                "iconUrl": null,
                                "title": "Excellent customer experience with user-friendly design & operation",
                                "description": ""
                            }
                        ]
                    }
                ]
            }
        ]
    };

    const mockDataCodeBlock = {
        "layout": "two-column" as const,
        "heading": "Basic vs. Advanced VIN Decoder API",
        "description": "Not every use case needs the same level of vehicle data. That's why our VIN decoder API offers two decoding levels for US vehicles.",
        "columns": [
            {
                "verticalAlignment": "top" as const,
                "appearance": "card" as const,
                "blocks": [
                    {
                        "blockType": "heading",
                        "tag": "h3",
                        "text": "Basic VIN Decoder API (US & Canada)"
                    },
                    {
                        "blockType": "richText",
                        "content": "Quickly identify a vehicle by VIN with core specs and identification data."
                    },
                    {
                        "blockType": "list",
                        "items": [
                            "Coverage: 17-character VINs (1980–present)",
                            "Vehicle Types: All major vehicle types, including cars, trucks, vans, and motorcycles."
                        ]
                    },
                    {
                        "blockType": "richText",
                        "content": "Here is an example of VIN: JTEDW21A860014011"
                    },
                    {
                        "blockType": "code",
                        "language": "json",
                        "code": "{\n  \"status\": \"success\",\n  \"data\": {\n    \"intro\": {\n      \"vin\": \"JTEDW21A860014011\"\n    }\n  }\n}"
                    }
                ]
            },
            {
                "verticalAlignment": "top" as const,
                "appearance": "card" as const,
                "blocks": [
                    {
                        "blockType": "heading",
                        "tag": "h3",
                        "text": "Advanced VIN decoder API"
                    },
                    {
                        "blockType": "richText",
                        "content": "Full vehicle configuration and pricing data for deeper automotive insights."
                    },
                    {
                        "blockType": "list",
                        "items": [
                            "Coverage: 17-character VINs (1980–present)",
                            "Vehicle Types: Cars and semi-trucks"
                        ]
                    },
                    {
                        "blockType": "richText",
                        "content": "Here is an example of a VIN: 1B3AL46XX6N227698"
                    },
                    {
                        "blockType": "code",
                        "language": "json",
                        "code": "{\n  \"status\": \"success\",\n  \"data\": {\n    \"vin\": \"1B3AL46XX6N227698\",\n    \"year\": 2006,\n    \"make\": \"Dodge\",\n    \"model\": \"Stratus\"\n  }\n}"
                    }
                ]
            }
        ]
    };

    const mockDataCodeBlockV2 = {
        "layout": "two-column" as const,
        "columns": [
            {
                "verticalAlignment": "top" as const,
                "appearance": "default" as const,
                "blocks": [
                    {
                        "blockType": "heading",
                        "tag": "h3",
                        "text": "JSON Format"
                    },
                    {
                        "blockType": "richText",
                        "content": "With this option, you will get the response (vehicle history data) in JSON format and you can incorporate vehicle history data into your existing systems or applications"
                    },
                    {
                        "blockType": "code",
                        "language": "json",
                        "code": "{\n  \"status\": \"success\",\n  \"vin\": \"SALGS2EF6GA27740\",\n  \"data\": {\n    \"owner_history\": {\n      \"titles\": [\n        \"status\",\n        \"Purchased\"\n      ]\n    }\n  }\n}"
                    },

                ]
            },
            {
                "verticalAlignment": "top" as const,
                "appearance": "default" as const,
                "blocks": [
                    {
                        "blockType": "heading",
                        "tag": "h3",
                        "text": "HTML Format"
                    },
                    {
                        "blockType": "richText",
                        "content": "Looking for a ready-to-use solution instead of handling raw JSON data? We offer vehicle history reports in HTML format through API, fully customizable with your business logo and details."
                    },
                    {
                        "blockType": "media",
                        "mediaType": "image",
                        "url": "/images/html-format-preview.png",
                        "alt": "HTML Format Vehicle Report Preview"
                    }
                ]
            }
        ]
    };

    const mockDataDownloadApp = {
        "layout": "two-column" as const,
        "columns": [
            {
                "verticalAlignment": "center" as const,
                "appearance": "default" as const,
                "blocks": [
                    {
                        "blockType": "media",
                        "mediaType": "image",
                        "url": "/images/license-plate-app-mockup.png",
                        "alt": "License Plate API Live Demo"
                    }
                ]
            },
            {
                "verticalAlignment": "center" as const,
                "appearance": "default" as const,
                "blocks": [
                    {
                        "blockType": "heading",
                        "tag": "h2",
                        "text": "Experience Our License Plate Decoding API Live in Action"
                    },
                    {
                        "blockType": "richText",
                        "content": "The VIN decoder and vehicle History app uses the License plate decoder API from Vehicle Databases to provide License plate decoding and vehicle history reports to vehicle shoppers, sellers, and dealerships with US license plates. Download the app from the App store and Play store to see how it works."
                    },
                    {
                        "blockType": "appStoreCta",
                        "theme": "light",
                        "playStoreUrl": "#",
                        "appStoreUrl": "#"
                    },
                    {
                        "blockType": "richText",
                        "content": "For UK users Smart Car Check App provides this functionality. Download the app from the App store and Play store."
                    },
                    {
                        "blockType": "appStoreCta",
                        "theme": "dark",
                        "playStoreUrl": "#",
                        "appStoreUrl": "#"
                    }
                ]
            }
        ]
    };

    const mockDataUniqueHero = {
        "layout": "one-column" as const,
        "columns": [
            {
                "verticalAlignment": "center" as const,
                "appearance": "default" as const,
                "blocks": [
                    {
                        "blockType": "heading",
                        "tag": "h1",
                        "text": "About Vehicle Databases",
                        "variant": "gradient"
                    },
                    {
                        "blockType": "richText",
                        "content": "Vehicle Databases offers one of the largest and most trusted Vehicle Databases API services in the automotive industry. We help businesses from SMEs to fortune 500 companies, developers, and startups build innovative automotive solutions without the need for heavy R&D."
                    },
                    {
                        "blockType": "richText",
                        "variant": "callout",
                        "content": "Our cloud-based APIs are fast, secure, and reliable. They deliver real-time vehicle data that powers better experiences for auto dealerships, mechanics, auction platforms, and automotive enthusiasts alike. With 24/7 support and scalable infrastructure, we make it easy to integrate vehicle intelligence into your workflow so you can focus on building products, not managing servers."
                    },
                    {
                        "blockType": "cta",
                        "buttons": [
                            {
                                "label": "Free trial",
                                "variant": "gradient"
                            },
                            {
                                "label": "Book a Demo",
                                "variant": "outline"
                            }
                        ]
                    }
                ]
            }
        ]
    };

    const mockDataUniqueHeroV2 = {
        "layout": "two-column" as const,
        "columns": [
            {
                "verticalAlignment": "center" as const,
                "appearance": "default" as const,
                "blocks": [
                    {
                        "blockType": "badge",
                        "text": "Case Study"
                    },
                    {
                        "blockType": "heading",
                        "tag": "h2",
                        "text": "How Detailed Vehicle History (DVH) Leveraged Vehicle Databases' APIs"
                    },
                    {
                        "blockType": "heading",
                        "tag": "h3",
                        "text": "To Enhance Its Product Offerings"
                    },
                    {
                        "blockType": "heading",
                        "tag": "h3",
                        "text": "Overview"
                    },
                    {
                        "blockType": "richText",
                        "content": <div><p className="mb-2"><b>Company:</b> Detailed Vehicle History (DVH)</p><p className="mb-2"><b>Industry:</b> Automotive Data, Vehicle History Reports & Window Stickers</p><p className="mb-2"><b>Challenge:</b> Improve vehicle data accuracy, increase conversions, and optimize user experience.</p><p><b>Solution:</b> Integration of Vehicle Databases' APIs, including VIN Decoder API, license plate decoder API, vehicle history report API, market value API, sales history API, auction history API, OCR API, European VIN decoding API, stolen check API, title Check API.</p></div>
                    }
                ]
            },
            {
                "verticalAlignment": "center" as const,
                "appearance": "highlight" as const,
                "blocks": [
                    {
                        "blockType": "heading",
                        "tag": "h3",
                        "text": "Results:"
                    },
                    {
                        "blockType": "cards",
                        "variant": "metrics",
                        "items": [
                            {
                                "value": "Improved",
                                "description": "data accuracy."
                            },
                            {
                                "value": "Faster",
                                "description": "processing."
                            },
                            {
                                "value": "38% Increase",
                                "description": "in conversions."
                            },
                            {
                                "value": "28% Lower",
                                "description": "bounce rates."
                            }
                        ]
                    }
                ]
            }
        ]
    };

    const mockDataHowItWorks = {
        "layout": "two-column" as const,
        "columns": [
            {
                "verticalAlignment": "center" as const,
                "appearance": "default" as const,
                "blocks": [
                    {
                        "blockType": "heading",
                        "tag": "h2",
                        "text": "How the VIN Decoder API works?"
                    },
                    {
                        "blockType": "richText",
                        "content": "We offer different endpoints based on the region. Region-Specific Endpoints: US, Canada, and Europe—optimized for each market. We are actively working on adding support for other regions & improving our VIN decoding technology."
                    },
                    {
                        "blockType": "appDownload",
                        "appStoreUrl": "https://apps.apple.com",
                        "googlePlayUrl": "https://play.google.com",
                        "theme": "dark"
                    }
                ]
            },
            {
                "verticalAlignment": "center" as const,
                "appearance": "default" as const,
                "blocks": [
                    {
                        "blockType": "cards",
                        "variant": "bentoSteps",
                        "items": [
                            {
                                "badge": "1",
                                "title": "Send VIN",
                                "description": "via API request (Simple GET request)."
                            },
                            {
                                "badge": "2",
                                "title": "Receive JSON",
                                "description": "with structured vehicle data."
                            },
                            {
                                "badge": "3",
                                "title": "Integrate instantly",
                                "description": "into your app, website, or internal system",
                                "fullWidth": true
                            }
                        ]
                    }
                ]
            }
        ]
    };

    const mockDataHowItWorksV2 = {
        "layout": "one-column" as const,
        "columns": [
            {
                "verticalAlignment": "center" as const,
                "appearance": "default" as const,
                "blocks": [
                    {
                        "blockType": "heading",
                        "tag": "h2",
                        "text": "How it works ?"
                    },
                    {
                        "blockType": "cards",
                        "variant": "step-icons",
                        "items": [
                            {
                                "iconUrl": "",
                                "title": "Upload an image",
                                "description": "Containing VIN, barcode or license plate number"
                            },
                            {
                                "iconUrl": "",
                                "title": "Image to text",
                                "description": "OCR API scans and converts it to text"
                            },
                            {
                                "iconUrl": "",
                                "title": "Text to JSON",
                                "description": "Structured text is provided as a JSON response through the API"
                            }
                        ]
                    }
                ]
            }
        ]
    };

    const mockDataHowItWorksV3 = {
        "layout": "one-column" as const,
        "columns": [
            {
                "verticalAlignment": "top" as const,
                "appearance": "default" as const,
                "blocks": [
                    {
                        "blockType": "heading",
                        "tag": "h2",
                        "text": "How the Receipt OCR API Works?"
                    },
                    {
                        "blockType": "richText",
                        "content": "The OCR Receipt Scanner API works in just a few easy steps:"
                    },
                    {
                        "blockType": "cards",
                        "variant": "step-cards",
                        "items": [
                            {
                                "badge": "1",
                                "title": "Upload the Receipt",
                                "description": "Upload the image of the receipt in the accepted formats.",
                                "imageUrl": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=500&fit=crop"
                            },
                            {
                                "badge": "2",
                                "title": "OCR Text Extraction",
                                "description": "Our advanced optical character recognition engine analyzes the image and extracts the printed, handwritten, or typed text.",
                                "imageUrl": "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&h=500&fit=crop"
                            },
                            {
                                "badge": "3",
                                "title": "Receive Clean JSON Output",
                                "description": "You'll see the full extracted text, line by line, exactly as it appears in your image. Businesses can get structured data in JSON format.",
                                "imageUrl": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=500&fit=crop"
                            }
                        ]
                    }
                ]
            }
        ]
    };

    const mockDataHowItWorksV4 = {
        "layout": "one-column" as const,
        "columns": [
            {
                "verticalAlignment": "top" as const,
                "appearance": "default" as const,
                "blocks": [
                    {
                        "blockType": "heading",
                        "tag": "h2",
                        "text": "How the VIN OCR API works"
                    },
                    {
                        "blockType": "richText",
                        "content": "Our VIN OCR API automatically and instantly extracts VINs from vehicles and documents after a successful integration into web and mobile applications. Have a look at how it works."
                    },
                    {
                        "blockType": "cards",
                        "variant": "timeline",
                        "items": [
                            {
                                "badge": "1",
                                "title": "Upload the document",
                                "description": ">You can easily upload the image containing the VIN number to our user-friendly platform or utilize our VIN scanning API for seamless integration.",
                                "imageUrl": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop"
                            },
                            {
                                "badge": "2",
                                "title": "Automated VIN extraction",
                                "description": "Our advanced OCR technology will swiftly analyze the document, recognizing and extracting the VIN number with exceptional accuracy.",
                                "imageUrl": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
                            },
                            {
                                "badge": "3",
                                "title": "Obtain output",
                                "description": "Receive the digitized VIN number in a format that suits your specific requirements, such as JSON, CSV, or plain text.",
                                "imageUrl": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                            }
                        ]
                    }
                ]
            }
        ]
    };

    const mockDataLists = {
        "layout": "one-column" as const,
        "columns": [
            {
                "verticalAlignment": "top" as const,
                "appearance": "default" as const,
                "blocks": [
                    {
                        "blockType": "heading",
                        "tag": "h2",
                        "text": "Owner's Manuals For All Makes and Models"
                    },
                    {
                        "blockType": "richText",
                        "content": "Our Owner's Manual API supports a wide range of manufacturers, including but not limited to:"
                    },
                    {
                        "blockType": "lists",
                        "items": [
                            "Acura", "Alfa Romeo", "Aston Martin", "Buick", "Cadillac", "Chevrolet",
                            "Chrysler", "Dodge", "Ferrari", "Fiat", "Ford", "Genesis",
                            "GMC", "Honda", "Hummer", "Hyundai", "Infiniti", "Jeep",
                            "KIA", "Land Rover", "Lexus", "Lincoln", "Maserati", "Mazda",
                            "Mercedes Benz", "Mini", "Nissan", "RAM", "Saab", "Smart",
                            "Subaru", "Toyota", "Volkswagen", "Volvo"
                        ]
                    }
                ]
            }
        ]
    };

    const mockDataUniqueHeroV4 = {
        "layout": "one-column" as const,
        "columns": [
            {
                "verticalAlignment": "center" as const,
                "appearance": "default" as const,
                "blocks": [
                    {
                        "blockType": "heading",
                        "tag": "h2",
                        "text": "We are happy to work with you on new solutions"
                    },
                    {
                        "blockType": "richText",
                        "content": "Access comprehensive vehicle data through our powerful APIs"
                    }
                ]
            }
        ]
    };

    const mockDataBenefits = {
        "layout": "two-column" as const,
        "theme": "dark" as const,
        "padding": "large" as const,
        "spacing": "large" as const,
        "columns": [
            {
                "verticalAlignment": "center" as const,
                "horizontalAlignment": "left" as const,
                "blocks": [
                    {
                        "blockType": "media",
                        "mediaType": "image",
                        "url": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
                        "alt": "Repair Pricing Chart"
                    }
                ]
            },
            {
                "verticalAlignment": "center" as const,
                "horizontalAlignment": "left" as const,
                "blocks": [
                    {
                        "blockType": "heading",
                        "tag": "h2",
                        "text": "Benefits of Repair Pricing API"
                    },
                    {
                        "blockType": "richText",
                        "content": "Some of the key benefits of our API include:"
                    },
                    {
                        "blockType": "lists",
                        "variant": "iconList",
                        "icon": "check",
                        "items": [
                            "Access to comprehensive repair times and labor rates",
                            "Detailed parts information and pricing",
                            "Integration with existing systems and workflows"
                        ]
                    },
                    {
                        "blockType": "richText",
                        "content": "Need a car parts database? Access 50M+ OE parts and aftermarket catalog data for all makes and models."
                    },

                ]
            }
        ]
    };

    const mockDataInteractive = {
        "layout": "two-column" as const,
        "theme": "dark" as const,
        "padding": "medium" as const,
        "columns": [
            {
                "verticalAlignment": "top" as const,
                "horizontalAlignment": "left" as const,
                "blocks": [
                    {
                        "blockType": "heading",
                        "tag": "h3",
                        "text": "Select Your Features"
                    },
                    {
                        "blockType": "checkboxGroup",
                        "label": "Data Domains",
                        "name": "domains",
                        "options": [
                            { "label": "Repair Times", "description": "Labor rates and durations" },
                            { "label": "Parts Catalog", "description": "OE and Aftermarket parts" },
                            { "label": "Maintenance", "description": "Service schedules" }
                        ]
                    }
                ]
            },
            {
                "verticalAlignment": "top" as const,
                "horizontalAlignment": "left" as const,
                "blocks": [
                    {
                        "blockType": "heading",
                        "tag": "h3",
                        "text": "Choose Your Plan"
                    },
                    {
                        "blockType": "radioGroup",
                        "label": "Billing Cycle",
                        "name": "billing",
                        "options": [
                            { "label": "Monthly", "description": "$99 / month" },
                            { "label": "Annually", "description": "$990 / year (Save 20%)" }
                        ]
                    }
                ]
            }
        ]
    };

    const mockDataContactUs = {
        "layout": "two-column" as const,
        "columns": [
            {
                "verticalAlignment": "center" as const,
                "blocks": [
                    {
                        "blockType": "heading",
                        "tag": "h2",
                        "text": "Contact Us",
                        "variant": "gradient"
                    },
                    {
                        "blockType": "richText",
                        "content": "Have questions? Our team is here to help you integrate and scale."
                    },
                    {
                        "blockType": "lists",
                        "variant": "iconList",
                        "items": [
                            { icon: "map-pin", text: "65 Brunswick Blvd, Dollard-Des Ormeaux, Quebec" },
                            { icon: "phone", text: "(800) 674-3846" },
                            { icon: "mail", text: "support@vehicledatabases.com" }
                        ]
                    }
                ]
            },
            {
                "verticalAlignment": "center" as const,
                "blocks": [
                    {
                        "blockType": "media",
                        "mediaType": "image",
                        "url": "https://images.unsplash.com/photo-1516321318423-f06f84e504b3?q=80&w=2670&auto=format&fit=crop",
                        "alt": "Contact Us Illustration"
                    }
                ]
            }
        ]
    };

    const mockDataPrivateSales = {
        "layout": "one-column" as const,
        "columns": [
            {
                "verticalAlignment": "start" as const,
                "blocks": [
                    {
                        "blockType": "heading",
                        "tag": "h3",
                        "text": "Private Sales",
                        "className": "mb-6 text-2xl lg:text-3xl font-aileron font-bold text-white mt-12"
                    },
                    {
                        "blockType": "mediaGrid",
                        "columns": 4,
                        "className": "mb-8",
                        "images": [
                            { "url": "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2670&auto=format&fit=crop", "alt": "Car View 1" },
                            { "url": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2670&auto=format&fit=crop", "alt": "Car View 2" },
                            { "url": "https://images.unsplash.com/photo-1502877338535-34b160b86a83?q=80&w=2670&auto=format&fit=crop", "alt": "Car View 3" },
                            { "url": "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2670&auto=format&fit=crop", "alt": "Car View 4" }
                        ]
                    },
                    {
                        "blockType": "dataGrid",
                        "columns": 4,
                        "className": "mb-12",
                        "items": [
                            { "label": "Date", "value": "March 1, 2021" },
                            { "label": "Price", "value": "16,200 USD" },
                            { "label": "Avg. Estimated Retail Value", "value": "$28,888 USD" },
                            { "label": "Status", "value": "Status: Pure sale", "badgeVariant": "orange" }
                        ]
                    },
                    {
                        "blockType": "heading",
                        "tag": "h4",
                        "text": "Vehicle Information",
                        "className": "mb-6 text-xl lg:text-2xl font-aileron font-bold text-white"
                    },
                    {
                        "blockType": "dataGrid",
                        "columns": 4,
                        "className": "mb-12",
                        "items": [
                            { "label": "Cylinders", "value": "3.0L (6 cyl)" },
                            { "label": "Drivetrain", "value": "All wheel drive" },
                            { "label": "Transmission", "value": "Automatic" },
                            { "label": "Fuel Type", "value": "Gas" },
                            { "label": "Odometer (mi)", "value": "68,431" },
                            { "label": "Odometer (km)", "value": "110,128" },
                            { "label": "Repair Cost", "value": "$25,800" }
                        ]
                    },
                    {
                        "blockType": "heading",
                        "tag": "h4",
                        "text": "Sales Information",
                        "className": "mb-6 text-xl lg:text-2xl font-aileron font-bold text-white"
                    },
                    {
                        "blockType": "dataGrid",
                        "columns": 5,
                        "className": "mb-8",
                        "items": [
                            { "label": "Seller Type", "value": "Classified" },
                            { "label": "Seller City", "value": "Woodburn" },
                            { "label": "Seller State", "value": "OR" },
                            { "label": "Seller Zip", "value": "Seller Type" },
                            { "label": "Seller Country", "value": "United States" }
                        ]
                    }
                ]
            }
        ]
    };

    return (
        <main className="min-h-screen bg-black text-white pb-20 overflow-x-hidden">
            {/* 1. About Hero Section */}
            <UniqueHeroSectionV1 
                {...mockDataUniqueHero}
                theme="dark"
                isDark={true}
            />
            <Divider className="bg-neutral-800" />

            {/* 2. Case Study Overview */}
            <UniqueHeroSectionV2 
                {...mockDataUniqueHeroV2}
                theme="dark"
                isDark={true}
            />
            <Divider className="bg-neutral-800" />

            {/* 3. Key Results Table */}
            <TableSection 
                {...mockDataTable}
                theme="dark"
                isDark={true}
            />
            <Divider className="bg-neutral-800" />

            {/* 4. Real Results Metrics */}
            <UniqueFactsSection 
                {...mockDataFacts}
                theme="dark"
                isDark={true}
            />
            <Divider className="bg-neutral-800" />

            {/* 5. Business Growth Stepper */}
            <UniqueVerticalStepperSection 
                {...mockDataStepper}
                theme="dark"
                isDark={true}
            />
            <Divider className="bg-neutral-800" />

            {/* 6. The Solution Accordion */}
            <UniqueAccordionSection 
                {...mockDataAccordion}
                theme="dark"
                isDark={true}
            />
            <Divider className="bg-neutral-800" />

            {/* 7. Client Testimonial */}
            <UniqueTestimonialSection 
                {...mockDataTestimonial}
                theme="dark"
                isDark={true}
            />
            <Divider className="bg-neutral-800" />
            {/* 1-5. Benefits of Repair Pricing API (TwoColumnWithMedia Dark) */}
            <TwoColumnSectionWithMedia 
                {...mockDataBenefits}
                theme="dark" 
                className="bg-black"
                isDark={true}
            />
            <Divider className="bg-neutral-800" />

            {/* 10-14. Interactive Car (TwoColumnWithMedia Dark) */}
            <TwoColumnSectionWithMedia 
                {...mockDataInteractive}
                theme="dark" 
                className="bg-black"
                isDark={true}
            />
            <Divider className="bg-neutral-800" />

            {/* Batch 2: Technical and Product Sections */}
            
            {/* 8. OCR Benefits */}
            <CardsSection 
                {...mockDataCards}
                theme="dark"
                isDark={true}
            />
            <Divider className="bg-neutral-800" />

            {/* 9. OCR APIs */}
            <ApiCardsSection 
                {...mockDataApiCards}
                theme="dark"
                isDark={true}
            />
            <Divider className="bg-neutral-800" />

            {/* 10. Developer-Ready (Code Block) */}
            <UniqueCodeBlockSection 
                {...mockDataUniqueCodeBlock}
                theme="dark"
            />
            <Divider className="bg-neutral-800" />

            {/* 11. How it works (V1) */}
            <HowItWorksSectionV1 
                {...mockDataHowItWorks}
                theme="dark"
                isDark={true}
            />
            <Divider className="bg-neutral-800" />

            {/* 12. How it works (V2) - Icons */}
            <HowItWorksSectionV2 
                {...mockDataHowItWorksV2}
                theme="dark"
                isDark={true}
            />
            <Divider className="bg-neutral-800" />

            {/* 13. How it works (V3) - Receipt OCR */}
            <HowItWorksSectionV3 
                {...mockDataHowItWorksV3}
                theme="dark"
                isDark={true}
            />
            <Divider className="bg-neutral-800" />

            {/* 14. How it works (V4) - VIN OCR */}
            <HowItWorksSectionV4 
                {...mockDataHowItWorksV4}
                theme="dark"
                isDark={true}
            />
            <Divider className="bg-neutral-800" />

            {/* 15. Code Block (V1) - Basic vs Advanced */}
            <CodeBlockSectionV1 
                {...mockDataCodeBlock}
                theme="dark"
                isDark={true}
            />
            <Divider className="bg-neutral-800" />

            {/* 16. Code Block (V2) - JSON vs HTML */}
            <CodeBlockSectionV2 
                {...mockDataCodeBlockV2}
                theme="dark"
                isDark={true}
            />
            <Divider className="bg-neutral-800" />

            {/* 17. Live Experience (Download App) */}
            <UniqueDownloadAppSection 
                {...mockDataDownloadApp}
                theme="dark"
                isDark={true}
            />
            <Divider className="bg-neutral-800" />

            {/* 8-9. ApiHeroSection (Sales History) */}
            <ApiHeroSectionWithForm 
                columns={[
                    {
                        verticalAlignment: "center",
                        blocks: [
                            {
                                blockType: "heading",
                                tag: "h1",
                                variant: "gradient",
                                text: "Sales History API",
                                className: "text-4xl lg:text-7xl font-aileron mb-6"
                            },
                            {
                                blockType: "richText",
                                content: "<p class='text-neutral-400 font-geist text-lg lg:text-xl leading-relaxed mb-10'>Introducing Vehicledatabases.com Sales History API - Unparalleled Access to Vehicle Sales Data and Insights</p>"
                            },
                            {
                                blockType: "cta",
                                buttons: [
                                    { "text": "Free trial", "variant": "primary", "link": "#" },
                                    { "text": "Book a Demo", "variant": "outline", "link": "#" }
                                ]
                            }
                        ]
                    },
                    {
                        verticalAlignment: "center",
                        blocks: [
                            {
                                blockType: "salesLookupForm",
                                title: "Lookup Sales History"
                            }
                        ]
                    }
                ]}
                theme="dark"
                isDark={true} 
            />
            <Divider className="bg-neutral-800" />
            
            <ApiHeroSection 
                {...mockDataApiHero}
                theme="dark" 
                isDark={true} 
            />
            {/* 22. Interactive Tabs (VIN, License, Barcode, Docs) */}
            <UniqueTabSection 
                isDark={true} 
                theme="dark" 
                tabs={[
                    {
                        label: "Scan VIN Number",
                        rows: [
                            {
                                layout: "two-column",
                                columns: [
                                    {
                                        verticalAlignment: "center",
                                        blocks: [
                                            {
                                                blockType: "media",
                                                mediaType: "image",
                                                url: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2670&auto=format&fit=crop",
                                                alt: "VIN Scanning Phone",
                                            }
                                        ]
                                    },
                                    {
                                        verticalAlignment: "center",
                                        blocks: [
                                            {
                                                blockType: "heading",
                                                tag: "h3",
                                                text: "Scan VIN number",
                                                className: "text-white text-2xl lg:text-3xl font-aileron font-bold mb-4"
                                            },
                                            {
                                                blockType: "richText",
                                                content: "<p class='text-neutral-400 font-geist text-lg leading-relaxed mb-6'>Replace manual data entry procedures with modern VIN scanning technology.</p>"
                                            },
                                            {
                                                blockType: "lists",
                                                variant: "iconList",
                                                icon: "check",
                                                items: [
                                                    "VIN OCR reader API offers high accuracy in detecting VINs within seconds.",
                                                    "Save time, reduce costs, and minimize errors with high-quality data extraction.",
                                                    "Car VIN number scanner works efficiently in all lighting conditions. VINs can be scanned easily in poorly lit conditions and from different angles.",
                                                    "Fast and accurate VIN scanning takes less than a second for VIN recognition."
                                                ]
                                            },
                                            {
                                                blockType: "cta",
                                                buttons: [
                                                    { "text": "Book a Demo", "variant": "primary", "link": "#" }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: "Scan License Plates",
                        rows: [
                            {
                                layout: "two-column",
                                columns: [
                                    {
                                        verticalAlignment: "center",
                                        blocks: [
                                            {
                                                blockType: "media",
                                                mediaType: "image",
                                                url: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2670&auto=format&fit=crop",
                                                alt: "License Plate Scanning",
                                            }
                                        ]
                                    },
                                    {
                                        verticalAlignment: "center",
                                        blocks: [
                                            {
                                                blockType: "heading",
                                                tag: "h3",
                                                text: "Scan License Plates",
                                                className: "text-white text-2xl lg:text-3xl font-aileron font-bold mb-4"
                                            },
                                            {
                                                blockType: "richText",
                                                content: "<p class='text-neutral-400 font-geist text-lg leading-relaxed mb-6'>Identify vehicles instantly by scanning their license plates with high precision.</p>"
                                            },
                                            {
                                                blockType: "lists",
                                                variant: "iconList",
                                                icon: "check",
                                                items: [
                                                    "Real-time plate detection and recognition.",
                                                    "Supports multiple states and international formats.",
                                                    "High accuracy even in motion or low light.",
                                                    "Direct integration with vehicle specification databases."
                                                ]
                                            },
                                            {
                                                blockType: "cta",
                                                buttons: [
                                                    { "text": "Start Free Trial", "variant": "outline", "link": "#" }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: "Scan Barcodes",
                        rows: [
                            {
                                layout: "two-column",
                                columns: [
                                    {
                                        verticalAlignment: "center",
                                        blocks: [
                                            {
                                                blockType: "media",
                                                mediaType: "image",
                                                url: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2670&auto=format&fit=crop",
                                                alt: "Barcode Scanning",
                                            }
                                        ]
                                    },
                                    {
                                        verticalAlignment: "center",
                                        blocks: [
                                            {
                                                blockType: "heading",
                                                tag: "h3",
                                                text: "Scan Barcodes",
                                                className: "text-white text-2xl lg:text-3xl font-aileron font-bold mb-4"
                                            },
                                            {
                                                blockType: "richText",
                                                content: "<p class='text-neutral-400 font-geist text-lg leading-relaxed mb-6'>Instantly decode vehicle barcodes for part tracking and inventory management.</p>"
                                            },
                                            {
                                                blockType: "lists",
                                                variant: "iconList",
                                                icon: "check",
                                                items: [
                                                    "Scan various barcode types (1D, 2D, QR).",
                                                    "Optimized for automotive industry standards.",
                                                    "Rapid processing for high-volume inventory.",
                                                    "Cloud-sync for real-time data access."
                                                ]
                                            },
                                            {
                                                blockType: "cta",
                                                buttons: [
                                                    { "text": "Contact Sales", "variant": "outline", "link": "#" }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: "Scan Documents",
                        rows: [
                            {
                                layout: "two-column",
                                columns: [
                                    {
                                        verticalAlignment: "center",
                                        blocks: [
                                            {
                                                blockType: "media",
                                                mediaType: "image",
                                                url: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2670&auto=format&fit=crop",
                                                alt: "Document Scanning",
                                            }
                                        ]
                                    },
                                    {
                                        verticalAlignment: "center",
                                        blocks: [
                                            {
                                                blockType: "heading",
                                                tag: "h3",
                                                text: "Scan Documents",
                                                className: "text-white text-2xl lg:text-3xl font-aileron font-bold mb-4"
                                            },
                                            {
                                                blockType: "richText",
                                                content: "<p class='text-neutral-400 font-geist text-lg leading-relaxed mb-6'>Digitize vehicle titles, insurance papers, and other documents with ease.</p>"
                                            },
                                            {
                                                blockType: "lists",
                                                variant: "iconList",
                                                icon: "check",
                                                items: [
                                                    "Intelligent text extraction and categorization.",
                                                    "Automated data entry for dealership forms.",
                                                    "Secure encryption and storage compliance.",
                                                    "Seamless PDF and image to JSON conversion."
                                                ]
                                            },
                                            {
                                                blockType: "cta",
                                                buttons: [
                                                    { "text": "Learn More", "variant": "outline", "link": "#" }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]}
            />
            <Divider className="bg-neutral-800" />

            {/* 23. Real-Life App Case Study (Smart Car Check) */}
            <TwoColumnSectionUnique 
                theme="dark"
                isDark={true}
                headerBlocks={[
                    {
                        blockType: "heading",
                        tag: "h2",
                        text: "Real-Life Applications: OCR Technology Enhancing Vehicle History Reporting",
                        className: "text-white font-aileron font-bold text-center text-3xl lg:text-5xl max-w-4xl mx-auto mb-8"
                    },
                    {
                        blockType: "richText",
                        content: "<p class='text-neutral-400 font-geist text-lg text-center max-w-4xl mx-auto leading-relaxed'>Our License Plate OCR technology employs advanced optical character recognition algorithms to analyze and interpret license plate characters from images.</p>"
                    }
                ]}
                columns={[
                    {
                        verticalAlignment: "center",
                        blocks: [
                            {
                                blockType: "heading",
                                tag: "h3",
                                text: "Smart Car Check",
                                className: "text-white font-aileron font-bold text-3xl lg:text-4xl mb-8"
                            },
                            {
                                blockType: "richText",
                                content: "<div class='flex flex-col gap-6 text-neutral-400 font-geist text-base lg:text-lg leading-relaxed'><p>A UK-based vehicle history report service, uses our License Plate Recognition OCR API within their mobile app. With the application, customers are given an opportunity to either scan their number plates or upload pictures of these plates. After a successful upload, our API quickly reads the plate number from the license plate picture. This initial information forms the basis for further inquiries.</p><p>SmartCarCheck then employs other APIs, like the UK plate decoder API, to provide users with complete vehicle details, such as vehicle specifications, vehicle registration details, auction records, vehicle log book details, number of previous keepers, and more. This seamless integration ensures that users receive accurate and timely information, helping them make informed decisions when buying or selling vehicles in the UK.</p></div>"
                            }
                        ]
                    },
                    {
                        verticalAlignment: "center",
                        blocks: [
                            {
                                blockType: "media",
                                mediaType: "image",
                                url: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=2670&auto=format&fit=crop", 
                                alt: "Smart Car Check Mobile App",
                                className: "w-full h-auto rounded-3xl shadow-2xl overflow-hidden"
                            }
                        ]
                    }
                ]}
                footerBlocks={[
                    {
                        blockType: "appDownload",
                        appStoreUrl: "https://apps.apple.com",
                        googlePlayUrl: "https://play.google.com",
                        theme: "dark"
                    }
                ]}
            />
            <Divider className="bg-neutral-800" />

            {/* 24. Generic Two Column */}
            <UniqueTwoColumnSection 
                {...mockDataUniqueTwoColumn}
                theme="dark"
                isDark={true}
            />
            <Divider className="bg-neutral-800" />

            {/* 25. Make Your Hero */}
            <UniqueMakeHeroSection 
                {...mockDataUniqueMakeHero}
                theme="dark"
                isDark={true}
            />
            <Divider className="bg-neutral-800" />

            {/* 26. Trust Logos */}
            <TrustLogoSection 
                {...mockDataTrustLogos}
                theme="dark"
                isDark={true}
            />
            <Divider className="bg-neutral-800" />

            {/* 27. Brochure */}
            <BrochurePageSection 
                {...mockDataBrochurePage}
                theme="dark"
                isDark={true}
            />
            <Divider className="bg-neutral-800" />

            {/* 28. Another Download App */}
            <UniqueDownloadAppSectionV1 
                {...mockDataAppDownload}
                theme="dark"
                isDark={true}
            />
            <Divider className="bg-neutral-800" />

            {/* 29. MCP Hero */}
            <UniqueHeroSectionMcp 
                {...mockDataMCP}
                theme="dark"
                isDark={true}
            />
            <Divider className="bg-neutral-800" />

            {/* 30. Owner's Manuals (Lists) */}
            <ListsSection 
                {...mockDataLists}
                theme="dark"
                isDark={true}
            />
            <Divider className="bg-neutral-800" />

            {/* 31. Work With Us Hero */}
            <UniqueHeroSectionV4 
                {...mockDataUniqueHeroV4}
                theme="dark"
                isDark={true}
            />
            <Divider className="bg-neutral-800" />

            {/* 32. Contact Us */}
            <UniqueHeroSectionContactUs 
                {...mockDataContactUs}
                theme="dark"
                isDark={true}
            />
            <Divider className="bg-neutral-800" />

            {/* 33. Private Sales Section */}
            <SalesHistoryPrivateSalesSection 
                {...mockDataPrivateSales}
                theme="dark"
                isDark={true}
            />
            <Divider className="bg-neutral-800" />

            {/* 36-37, 40, 44, 47, 56, 71. Other redundant sections removed */}
        </main>
    );
}
