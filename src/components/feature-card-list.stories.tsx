"use client";

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { FeatureCardList } from "./feature-card-list";
import { Zap, Shield, Database, BarChart3 } from "lucide-react";

const meta: Meta<typeof FeatureCardList> = {
  title: "UI/Intro/Sub-components/FeatureCardList",
  component: FeatureCardList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FeatureCardList>;

const mockFeatures = [
  {
    text: "Instant VIN Decoding",
    description: "Get comprehensive vehicle specifications in milliseconds using our advanced decoding engine.",
    icon: "/icons/zap.svg",
  },
  {
    text: "Market Value Appraisal",
    description: "Real-time market data to provide accurate valuations for any vehicle in any region.",
    icon: "/icons/bar-chart.svg",
  },
  {
    text: "History Reports",
    description: "Access detailed accident, title, and service history records from multiple global sources.",
    icon: "/icons/shield.svg",
  },
  {
    text: "Massive Data Lake",
    description: "Over 250 million unique vehicle records updated daily with the latest industry intelligence.",
    icon: "/icons/database.svg",
  },
];

export const DarkTheme: Story = {
  args: {
    features: mockFeatures,
    theme: "dark",
  },
};

export const LightTheme: Story = {
  args: {
    features: mockFeatures,
    theme: "light",
  },
};
