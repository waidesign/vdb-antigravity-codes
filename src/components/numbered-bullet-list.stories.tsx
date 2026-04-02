"use client";

import type { Meta, StoryObj } from "@storybook/react";
import { NumberedBulletList } from "./numbered-bullet-list";

const meta: Meta<typeof NumberedBulletList> = {
  title: "UI/Intro/Sub-components/NumberedBulletList",
  component: NumberedBulletList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NumberedBulletList>;

const mockItems = [
  { text: "Connect Your Data: Securely link your inventory or DMS system to our global processing engine." },
  { text: "Instant Enrichment: Our AI-powered system automatically appends missing specifications and features." },
  { text: "Publish & Distribute: Push high-fidelity vehicle data to all your sales channels and marketing platforms." },
];

export const DarkTheme: Story = {
  args: {
    items: mockItems,
    theme: "dark",
    style: "numbers",
  },
};

export const LightThemeBullets: Story = {
  args: {
    items: mockItems,
    theme: "light",
    style: "bullets",
  },
};
