import type { Meta, StoryObj } from "@storybook/react";
import { IntroSection } from "./intro-section";

const meta: Meta<typeof IntroSection> = {
  title: "UI/IntroSection",
  component: IntroSection,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "split-media-right",
        "split-media-left",
        "centered",
        "text-only",
        "feature-split",
        "heading-top-split",
        "code-split",
        "feature-grid-split",
        "stat-cards",
        "text-stack",
        "mixed-content",
      ],
    },
    theme: {
      control: "radio",
      options: ["dark", "light"],
    },
    spacingSize: {
      control: "select",
      options: ["compact", "standard", "large"],
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full min-h-screen bg-[#0B0B0B]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof IntroSection>;

/**
 * DEFAULT: SPLIT MEDIA RIGHT
 * Scenario: Electric Vehicle VIN Specifications
 */
export const ElectricVehicleSpecs: Story = {
  args: {
    variant: "split-media-right",
    theme: "dark",
    subheading: "Vehicle Data API",
    heading: "Access Professional Electric Vehicle Specifications",
    headingHighlight: "Specifications",
    richText: "<p>The <strong>Electric Vehicle Specifications API</strong> provides comprehensive technical data for any EV or plug-in hybrid. Access over 50+ unique data points including battery capacity, charging speeds, and real-world range.</p>",
    ctas: [
      { text: "Try Playground", href: "#", variant: "primary" },
      { text: "Documentation", href: "#", variant: "outline" },
    ],
    media: {
      type: "code-snippet",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1000&auto=format&fit=crop",
      code: `{
  "status": "success",
  "data": {
    "make": "Tesla",
    "model": "Model Y",
    "battery": "75 kWh",
    "charging": "250 kW Max"
  }
}`,
      alt: "Tesla Model Y Specifications",
    },
  },
};

/**
 * STAT CARDS
 * Scenario: Market Analytics & Impact
 */
export const MarketImpact: Story = {
  args: {
    variant: "stat-cards",
    theme: "dark",
    heading: "Scale Your Business with Real-Time Market Intelligence",
    headingHighlight: "Market Intelligence",
    richText: "<p>Our APIs process millions of automotive transactions daily, providing you with the most accurate market-level pricing and demand metrics in the industry.</p>",
    features: [
      { 
        stat: "88%", 
        text: "Efficiency Boost", 
        description: "Automate 88% of your manual VIN data entry tasks." 
      },
      { 
        stat: "99.9%", 
        text: "Data Uptime", 
        description: "Robust infrastructure with enterprise-grade SLA guarantee." 
      },
      { 
        stat: "1.2s", 
        text: "Fast Latency", 
        description: "Industry-leading sub-second average response times." 
      },
    ],
    ctas: [
      { text: "Get API Keys", href: "#", variant: "primary" },
    ],
  },
};

/**
 * FEATURE GRID
 * Scenario: Fleet Operations System
 */
export const FleetOperations: Story = {
  args: {
    variant: "feature-grid-split",
    theme: "dark",
    subheading: "Enterprise Logistics",
    heading: "Complete Control Over Your Commercial Fleet",
    headingHighlight: "Complete Control",
    richText: "<p>Bridge the gap between logistics and data. Our fleet integration tools allow you to track titles, maintenance records, and market value fluctuations across thousands of units instantly.</p>",
    features: [
        { 
            text: "Global Coverage", 
            description: "Access data for 100+ countries with localized formatting." 
        },
        { 
            text: "Title Monitoring", 
            description: "Real-time alerts for salvage, theft, or lien changes." 
        }
    ],
    media: {
      type: "feature-grid-card",
      title: "Active Data Points per VIN:",
      items: [
        { text: "NMVTIS Title Status" },
        { text: "Open Recall Checks" },
        { text: "Auction History" },
        { text: "Market Value Pricing" },
        { text: "Lien & Lease Records" },
        { text: "Owner Identification" },
        { text: "Safety Ratings" },
        { text: "Emissions Data" },
      ],
    },
    ctas: [
      { text: "Schedule Demo", href: "#", variant: "primary" },
    ],
  },
};

/**
 * CODE DASHBOARD
 * Scenario: Professional VIN History REST API
 */
export const DeveloperExperience: Story = {
  args: {
    variant: "split-media-right",
    theme: "dark",
    subheading: "Developer Playground",
    heading: "Simple Integration. Powerful Results.",
    headingHighlight: "Simple Integration",
    richText: "<p>Developers love our <strong>RESTful APIs</strong> because they are built with modern JSON standards and thorough versioning. No more dealing with inconsistent XML or legacy SOAP protocols.</p>",
    media: {
      type: "code-dashboard",
      code: JSON.stringify({
        vin: "5TQYK30D8FS503804",
        status: "success",
        history: {
          registrations: 4,
          accidents: 0,
          services: 12
        }
      }, null, 2),
    },
    ctas: [
      { text: "Start Coding", href: "#", variant: "primary" },
    ],
  },
};
