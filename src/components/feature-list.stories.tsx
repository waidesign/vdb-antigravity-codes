"use client";

import type { Meta, StoryObj } from "@storybook/react";
import { FeatureList } from "./feature-list";

const meta: Meta<typeof FeatureList> = {
  title: "UI/Intro/Sub-components/FeatureList",
  component: FeatureList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FeatureList>;

const mockFeatures = [
  { text: "Global VIN Decoding" },
  { text: "Real-time Vehicle Specs" },
  { text: "Maintenance History" },
  { text: "Odometer Verification" },
  { text: "Recall Information" },
  { text: "Market Valuation" },
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
