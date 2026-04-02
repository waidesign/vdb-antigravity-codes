"use client";

import type { Meta, StoryObj } from "@storybook/react";
import { CodeSnippet } from "./code-snippet";

const meta: Meta<typeof CodeSnippet> = {
  title: "UI/Intro/Sub-components/CodeSnippet",
  component: CodeSnippet,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CodeSnippet>;

/**
 * DEFAULT: CLEAN CODE WINDOW
 * Scenario: Basic JSON output, no image, no selector.
 */
export const Default: Story = {
  args: {
    variant: "default",
    code: `{
  "status": "success",
  "data": {
    "vin": "5TQYK30D8FS503804",
    "make": "Tesla",
    "model": "Model Y"
  }
}`,
  },
};

/**
 * WITH LANGUAGE SELECTOR
 * Scenario: Full developer integration mockup with Node, React, PHP, Python tabs.
 */
export const WithLanguageSelector: Story = {
  args: {
    variant: "with-language-selector",
  },
};

/**
 * WITH IMAGE (formerly Python)
 * Scenario: Code window with an overlaid vehicle image.
 */
export const WithImage: Story = {
  args: {
    variant: "with-image",
    code: `import requests\n\nurl = "https://api.vehicledatabases.com/lookup"\nresponse = requests.get(url, params={"vin": "..."})\nprint(response.json())`,
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1000&auto=format&fit=crop",
    alt: "Tesla Model Y Overlay",
  },
};

/**
 * SPECIAL SIZING
 * Scenario: Adjusted constraints for a specific layout.
 */
export const SpecialSizing: Story = {
  args: {
    variant: "with-language-selector",
    minWidth: "800px",
    maxHeight: "500px",
  },
};
/**
 * WITH CARD AND LISTS
 * Scenario: Professional API dashboard view with entity details and documentation link.
 */
export const WithCardAndLists: Story = {
  args: {
    variant: "WithCardAndLists",
    code: `{
  "year": 2023,
  "make": "Harley-Davidson",
  "model": "Road Glide Special",
  "trim": "Base",
  "price": {
    "base_msrp": 30000,
    "delivery_charges": "N/A",
    "currency": "USD"
  },
  "vehicle": {
    "class": "Class III",
    "category": "Touring"
  }
}`,
    items: [
      { label: "Year", value: "2023" },
      { label: "Make", value: "Harley-Davidson" },
      { label: "Model", value: "Road Glide Special" },
    ],
    sideCard: {
      title: "API Documentation",
      description: "We stand committed to providing a seamless and efficient solution to meet the diverse needs of your business within the automotive landscape. As you peruse this documentation, anticipate a rich source of knowledge that will facilitate the effortless integration of these APIs.",
      buttonText: "View Documentation",
      buttonHref: "#",
    },
  },
};

/**
 * ADVANCED VS BASIC
 * Scenario: Comparison view between advanced and basic API responses.
 */
export const AdvancedVsBasic: Story = {
  args: {
    variant: "AdvancedVsBasic",
    toggleOptions: [
      {
        id: "advanced",
        label: "Advanced VIN Decoder",
        code: `{
  "status": "success",
  "data": {
    "intro": {
      "vin": "WBA3A5C50FP604594"
    },
    "basic": {
      "make": "BMW",
      "model": "328I",
      "year": "2015",
      "trim": "3-SERIES",
      "body_type": "Sedan/Saloon",
      "vehicle_type": "Passenger Car",
      "doors": "4",
      "vehicle_size": "",
      "seating_capacity": ""
    },
    "engine": {
      "cylinders": "4"
    }
  }
}`,
      },
      {
        id: "basic",
        label: "Basic VIN Decoder",
        code: `{
  "status": "success",
  "data": {
    "vin": "WBA3A5C50FP604594",
    "make": "BMW",
    "model": "328I",
    "year": "2015"
  }
}`,
      },
    ],
  },
};
