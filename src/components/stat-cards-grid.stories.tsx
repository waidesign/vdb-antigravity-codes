"use client";

import type { Meta, StoryObj } from "@storybook/react";
import { StatCardsGrid } from "./stat-cards-grid";

const meta: Meta<typeof StatCardsGrid> = {
  title: "UI/Intro/Sub-components/StatCardsGrid",
  component: StatCardsGrid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof StatCardsGrid>;

const mockFeatures = [
  { stat: "25M+", text: "Verified VINs" },
  { stat: "99.9%", text: "API Uptime" },
  { stat: "150ms", text: "Avg Latency" },
  { stat: "45+", text: "Data Sources" },
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
