"use client";

import type { Meta, StoryObj } from "@storybook/react";
import { CTAButtonGroup } from "./cta-button-group";

const meta: Meta<typeof CTAButtonGroup> = {
  title: "UI/Intro/Sub-components/CTAButtonGroup",
  component: CTAButtonGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CTAButtonGroup>;

const mockCTAs = [
  { text: "Get Started", href: "/get-started", variant: "primary" as const },
  { text: "View Documentation", href: "/docs", variant: "outline" as const },
];

export const DarkTheme: Story = {
  args: {
    ctas: mockCTAs,
    theme: "dark",
  },
};

export const LightTheme: Story = {
  args: {
    ctas: mockCTAs,
    theme: "light",
  },
};

export const Enterprise: Story = {
  args: {
    ctas: [
      { text: "Contact Sales", href: "/contact", variant: "primary" as const },
      { text: "Book a Demo", href: "/demo", variant: "outline" as const },
      { text: "Pricing", href: "/pricing", variant: "ghost" as const },
    ],
    theme: "dark",
  },
};
