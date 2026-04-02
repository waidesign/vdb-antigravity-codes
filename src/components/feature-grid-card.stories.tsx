"use client";

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { FeatureGridCard } from "./feature-grid-card";
import { Zap } from "lucide-react";

const meta: Meta<typeof FeatureGridCard> = {
  title: "UI/Intro/Sub-components/FeatureGridCard",
  component: FeatureGridCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FeatureGridCard>;

export const DarkTheme: Story = {
  args: {
    title: "High-Performance API",
    items: [
      { text: "Experience lightning-fast response times" },
      { text: "Scalable architecture for high volume" },
      { text: "Enterprise-grade security standards" },
      { text: "99.99% Guaranteed uptime SLA" },
    ],
    theme: "dark",
  },
};

export const LightTheme: Story = {
  args: {
    title: "Comprehensive Coverage",
    items: [
      { text: "Access data for millions of vehicles" },
      { text: "North America and Europe support" },
      { text: "Daily updates from OEM sources" },
      { text: "Historical data going back 40 years" },
    ],
    theme: "light",
  },
};
