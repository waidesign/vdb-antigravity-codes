"use client";

import type { Meta, StoryObj } from "@storybook/react";
import { 
  Cards, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "./cards";
import { Button } from "./button";

const meta: Meta<typeof Cards> = {
  title: "UI/Components/Cards",
  component: Cards,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Cards>;

const MOCK_TEXT = "<p>Unlock comprehensive vehicle history and detailed specifications with our industry-leading API solutions.</p>";

export const H3Body: Story = {
  args: {
    variant: "h3Body",
    heading: "Full History Reports",
    richText: MOCK_TEXT,
  },
};

export const IconBodyInline: Story = {
  args: {
    variant: "iconBodyInline",
    icon: "Database",
    richText: MOCK_TEXT,
  },
};

export const IconBodyNormal: Story = {
  args: {
    variant: "iconBodyNormal",
    icon: "ShieldCheck",
    richText: MOCK_TEXT,
  },
};

export const WithFeaturedImage: Story = {
  args: {
    variant: "WithFeaturedImage",
    heading: "Technical Documentation",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    richText: MOCK_TEXT,
  },
};

export const H3BodyRedirect: Story = {
  args: {
    variant: "h3BodyRedirect",
    heading: "View API Reference",
    richText: "<p>Explore our documentation and start integrating in minutes with our developer-friendly tools.</p>",
    link: "#",
  },
};

export const IconH3BodyCTA: Story = {
  args: {
    variant: "iconH3BodyCTA",
    icon: "Zap",
    heading: "Instant Lookup",
    richText: "<p>Get real-time data for any VIN with our high-performance lookup engine.</p>",
    cta: {
      label: "Get Started",
      href: "#",
      variant: "primary",
    },
  },
};

export const IconBodyProgressBody: Story = {
  args: {
    variant: "iconBodyProgressBody",
    icon: "Activity",
    richText: "<p>Processing your vehicle data request. This usually takes just a few seconds.</p>",
    progress: 75,
    bottomText: "<p>Estimated time remaining: 2 seconds</p>",
  },
};

export const LogoBodyDividerBody: Story = {
  args: {
    variant: "logoBodyDividerBody",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    richText: "<p>Official data provider for authorized BMW service centers and dealerships nationwide.</p>",
    bottomText: "<p>Verified Partner Since 2021</p>",
  },
};

export const BodyOnly: Story = {
  args: {
    variant: "bodyOnly",
    richText: "<p><strong>Pro Tip:</strong> Use the sandbox environment to test your integration before going live with production data.</p>",
  },
};

export const H3BodyListsBodyCTA: Story = {
  args: {
    variant: "h3BodyListsBodyCTA",
    heading: "Premium Enterprise Plan",
    richText: "<p>Everything you need to scale your vehicle data operations globally.</p>",
    listItems: [
      { text: "Unlimited daily lookups" },
      { text: "Priority support 24/7" },
      { text: "Custom API endpoints" },
      { text: "Whitelabel dashboard" },
    ],
    cta: {
      label: "Contact Sales",
      href: "#",
    },
  },
};
export const TwoColumnH3BodyListsBodyImage: Story = {
  args: {
    variant: "twoColumnH3BodyListsBodyImage",
    heading: "Advanced VIN Decoding",
    richText: "<p>Our advanced decoder breaks down every complex aspect of a vehicle's history, from factory options to service records.</p>",
    listItems: [
      { text: "Standard Equipment Data" },
      { text: "Optional Features List" },
      { text: "Recall & Safety Alerts" },
      { text: "Odometer History Check" },
      { text: "Auction Sales Records" },
      { text: "Market Value Estimates" },
    ],
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800",
  },
};

export const HeadingAndImageStack: Story = {
  args: {
    variant: "headingAndImageStack",
    heading: "Vehicle Intelligence API",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
  },
};

export const BorderlessCardWithIcon: Story = {
  args: {
    variant: "borderlessCardWithIcon",
    icon: "Layers",
    heading: "API Testing Platform for Everyone",
    richText: "Easily test APIs, receive JSON responses, and visualize them in a user-friendly interface. Our platform caters to both developers and non-technical users.",
  },
};

export const IconH3InlineAndBody: Story = {
  args: {
    variant: "IconH3InlineAndBody",
    icon: "DatabaseZap",
    heading: "Fast Response Times",
    richText: "Easily manage your active plans and subscriptions through our intuitive interface. Upgrade, downgrade, or modify your plan with just a few clicks.",
  },
};

export const IconHeadingInline: Story = {
  args: {
    variant: "iconHeadingInline",
    icon: "ShieldAlert",
    heading: "Safety Recalls",
    richText: "<p>Stay informed about any safety concerns or manufacturer recalls affecting this vehicle model.</p>",
  },
};

export const Testimonial: Story = {
  args: {
    variant: "testimonial",
    title: "Easy to use, Excellent service",
    richText: "<p>Great service, their apis have allowed my business to quickly get up and running, with minimal development costs. Someone is also always at hand whether it be Whatsapp or over the phone to help with any issues. Would 100% recommend</p>",
    author: "Lionel Yarbol",
    role: "CEO at Yarbol Logistics",
    accentColor: "#F9BD24",
  },
};

export const TestimonialSpecial: Story = {
  args: {
    variant: "testimonialSpecial",
    richText: "Vehicle Databases has been an outstanding partner for our platform. Their API is fast, reliable, and delivers consistently high-quality vehicle data, which is critical for the accuracy and trust our users expect.",
    author: "Todd Matherne",
    role: "Founder, VinDetecta",
    avatar: "/images/vindetecta-logo.svg",
  },
};

export const ApiTestCard: Story = {
  args: {
    variant: "apiTestCard",
  },
};

export const Technical: Story = {
  args: {
    variant: "technical",
    icon: "Code2",
    heading: "Vehicle Model Lookup",
    subheading: "GET /v1/vin-decode/{vin}",
    codeSnippet: `{
  "status": "success",
  "data": {
    "make": "BMW",
    "model": "328i",
    "year": 2015
  }
}`,
    subheading2: "Response Schema Details",
    tableData: [
      { field: "make", type: "string", description: "The manufacturer name" },
      { field: "model", type: "string", description: "The vehicle model name" },
      { field: "year", type: "number", description: "The manufacturing year" }
    ],
    richText: "<p>For full schema details, please refer to the core documentation.</p>",
  },
};

export const QueryForm: Story = {
  args: {
    variant: "queryForm",
    subheading: "Get in touch",
    heading: "Have more questions?",
    formLabel: "Send in a query",
    submitLabel: "Submit Query",
    description: "Book a demo to connect directly with our team and explore how we can best serve your needs.",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Premium sports car",
    },
    formFields: [
      { name: "firstName", label: "First Name", placeholder: "First Name", type: "text", fullWidth: true },
      { name: "email", label: "Email Address", placeholder: "Email Address", type: "email" },
      { name: "phone", label: "Contact Number", placeholder: "Contact Number", type: "tel" },
      { name: "message", label: "Message", placeholder: "Message", type: "textarea", fullWidth: true },
    ],
    sidebarCtas: [
      { label: "Book a Demo", href: "#", variant: "secondary", icon: "Calendar" },
      { label: "Chat us on Whatsapp", href: "#", variant: "whatsapp", icon: "MessageSquare" },
    ],
  },
};

export const SlidingCards: Story = {
  args: {
    variant: "SlidingCards",
    items: [
      {
        icon: "Zap",
        title: "Fast Response Times",
        description: "Easily manage your active plans and subscriptions through our intuitive interface. Upgrade, downgrade, or modify your plan with just a few clicks.",
      },
      {
        icon: "Layers",
        title: "Scalability",
        description: "Our infrastructure adapts effortlessly to changing demands, maintaining top performance and reliability.",
      },
      {
        icon: "ShieldCheck",
        title: "99.99% Uptime",
        description: "Data is sourced from trusted manufacturer and industry datasets.",
      },
      {
        icon: "Database",
        title: "Unmatched Data",
        description: "Optimized for quick lookups and no unpredictable slowdowns or bottlenecks.",
      },
      {
        icon: "Layout",
        title: "Easy Integration",
        description: "Integration takes less than 10 minutes. Zero technical knowledge required.",
      },
    ],
  },
};

export const H3BodyLinkText: Story = {
  args: {
    variant: "H3BodyLinkText",
    heading: "{orange:VIN Decoding} APIs",
    richText: "Fetch full vehicle information by VIN or YMM to get the complete specs, engine information, color options, packages, and more for any car.",
    linkText: "Learn more",
    linkHref: "#",
  },
};

export const RelatedAPI: Story = {
  args: {
    variant: "RelatedAPI",
    heading: "Related APIs You Might Be Interested In:",
    apis: [
      { label: "Motorcycle Decoder API", href: "#" },
      { label: "Vehicle Specifications API", href: "#" },
      { label: "Electric Vehicle Specifications API", href: "#" },
      { label: "Explore More APIs", href: "#" },
    ],
  },
};
export const TwoColumnsLists: Story = {
  args: {
    variant: "TwoColumnsLists",
    heading: "VIN Decoder APIs are widely used in:",
    listLeft: [
      { text: "Auto dealerships", icon: "BadgeCheck" },
      { text: "Insurance companies", icon: "BadgeCheck" },
      { text: "Vehicle marketplaces", icon: "BadgeCheck" },
      { text: "Fleet and rental services", icon: "BadgeCheck" },
    ],
    listRight: [
      { text: "Government and compliance platforms", icon: "BadgeCheck" },
      { text: "Aftermarket parts sellers", icon: "BadgeCheck" },
      { text: "Mobility and transportation startups", icon: "BadgeCheck" },
    ],
  },
};
export const HeadingAndBodyUnderLists: Story = {
  args: {
    variant: "HeadingAndBodyUnderLists",
    heading: "The Europe VIN Decoding API returns:",
    lists: [
      [
        { text: "Make" },
        { text: "Model" },
        { text: "Model year" },
        { text: "Body style" },
      ],
      [
        { text: "Vehicle class" },
        { text: "Vehicle type" },
        { text: "Manufacturer" },
        { text: "Country" },
      ],
      [
        { text: "Region" },
        { text: "Vehicle specifications" },
        { text: "Standard equipment" },
        { text: "Optional equipment" },
      ],
    ],
    footerHeading: "Europe VIN Decoding API",
    footerRichText: `
      <p>The US VIN Decoder API is designed for vehicles manufactured for or sold in the United States and Canada. It supports standard 17-character VINs and covers vehicles from 1980 to the present.</p>
      <p>European vehicles follow different standards than US vehicles, and decoding them properly requires a different approach. The Europe VIN Decoding API is designed specifically for European-market vehicles and supports VINs from 1980 to the present.</p>
      <p>It is commonly used by businesses handling European registrations, imports, and cross-border vehicle data.</p>
      <p>Using a Europe-specific VIN API helps avoid missing or incorrect data that often occurs when European VINs are decoded using US-only systems.</p>
    `,
  },
};

export const VideoCard: Story = {
  args: {
    variant: "VideoCard",
    thumbnail: "/images/video-thumbnail.jpg",
    heading: "Detailed Vehicle Specifications",
    subheading: "in seconds with VIN Decoder API",
    videoHref: "#",
    description: "The Vehicle Databases VIN Decoder API allows businesses or individuals to identify a vehicle’s make, model, year, engine, and key specifications using a standard 17-digit VIN. It’s fast, reliable, and designed to work across global markets, making it easy to power your products (e.g., websites, apps, and internal systems) with trusted vehicle data. Our VIN Decoder API translates a 17-digit VIN into accurate vehicle information, built for consistency at scale.",
  },
};

export const HowItWorkMain: Story = {
  args: {
    variant: "HowItWorkMain",
    heading: "How",
    subheading: "the VIN Decoder API works?",
    description: "We offer different endpoints based on the region. Region-Specific Endpoints: US, Canada, and Europe—optimized for each market. We are actively working on adding support for other regions & improving our VIN decoding technology.",
    ctas: [
      { label: "Get Started", href: "#", variant: "primary-gradient" },
      { label: "Read Docs", href: "#", variant: "secondary-border" },
    ],
    steps: [
      { title: "Send VIN", description: "via API request (Simple GET request)." },
      { title: "Receive JSON", description: "with structured vehicle data." },
      { title: "Integrate instantly", description: "into your app, website, or internal system" },
    ],
  },
};



export const HeadingBodyImageCTAStack: Story = {
  args: {
    variant: "HeadingBodyImageCTAStack",
    heading: "Sales listing history API",
    body: "If you want to get access to the previous sales history of any vehicle across the UK, USA and Canada, we've got you covered. Signing up for our sales history API will provide you with sales listing data. You can easily look up sales history with a VIN.",
    image: "/images/video-thumbnail.jpg",
    cta: {
      label: "Learn about Sales Listing History API",
      href: "#",
    },
  },
};


export const CardGrid: Story = {
  args: {
    variant: "CardGrid",
    gridCards: [
      {
        title: "VIN Decoding APIs",
        description: "Fetch full vehicle information by VIN or YMM to get the complete specs, engine information, color options, packages, and more for any car.",
        href: "#",
      },
      {
        title: "OCR APIs",
        description: "OCR APIs capture VINs & License plates and converts to text in seconds.",
        href: "#",
      },
      {
        title: "License Plate Decoding APIs",
        description: "Decode the US license plate into VIN, then break down the vehicle information attached to it.",
        href: "#",
      },
      {
        title: "Market Value APIs",
        description: "Fetch the vehicle's market value estimation for private parties, trade-ins, or dealers by VIN.",
        href: "#",
      },
      {
        title: "Maintenance API",
        description: "Get the recommended maintenance schedule and details by VIN or year, make, and model.",
        href: "#",
      },
      {
        title: "Repair API",
        description: "Get full information on the vehicle's warranty records by VIN.",
        href: "#",
      },
    ],
  },
};

export const HeadingCTALists: Story = {
  args: {
    variant: "HeadingCTALists",
    heading: "Need an API just tailored for your business and workflow? Reach out to us, and we will build an API tailored to your business needs.",
    cta: {
      label: "Contact Us",
      href: "#",
    },
    features: [
      { label: "Instant Decoding" },
      { label: "Rich Data" },
      { label: "Global Coverage" },
      { label: "Classic Support" },
      { label: "Easy Integration" },
      { label: "Flexible Plans" },
    ],
  },
};
