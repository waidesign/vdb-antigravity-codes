"use client";

import type { Meta, StoryObj } from "@storybook/react";
import { VisualContent } from "./visual-content";

const meta: Meta<typeof VisualContent> = {
  title: "UI/Intro/Sub-components/VisualContent",
  component: VisualContent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof VisualContent>;

export const CodeDashboard: Story = {
  args: {
    media: {
      type: "code-dashboard",
      code: JSON.stringify({
        vin: "5TQYK30D8FS503804",
        make: "Tesla",
        model: "Model S",
        year: 2023,
      }, null, 2),
    },
    theme: "dark",
  },
};

export const ImageContent: Story = {
  args: {
    media: {
      type: "image",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
      alt: "Porsche 911 on road",
    },
    theme: "light",
  },
};

export const FeatureGrid: Story = {
  args: {
    media: {
      type: "feature-grid-card",
      title: "Custom Visualization",
      items: [
        { text: "Real-time tracking" },
        { text: "Global sync" },
      ],
    },
    theme: "dark",
  },
};
