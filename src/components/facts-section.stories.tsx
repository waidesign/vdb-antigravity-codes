import type { Meta, StoryObj } from "@storybook/react";
import { FactsSection } from "./facts-section";

const meta: Meta<typeof FactsSection> = {
  title: "Components/Home/FactsSection",
  component: FactsSection,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
        default: 'dark',
    },
  },
};

export default meta;
type Story = StoryObj<typeof FactsSection>;

export const Default: Story = {
  args: {},
};

export const CustomContent: Story = {
  args: {
    stats: [
      { valuePrimary: "100", valueGradient: "B+", label: "API Requests Yearly" },
      { valuePrimary: "250", valueGradient: "ms", label: "P99 Global Latency" },
      { valuePrimary: "4.9", valueGradient: "/5", label: "Developer Satisfaction" },
      { valuePrimary: "24/", valueGradient: "7", label: "Priority Support" },
    ],
  },
};

export const SingleStat: Story = {
  args: {
    stats: [
      { valuePrimary: "100", valueGradient: "%", label: "Data Integrity Guarantee" },
    ],
  },
};
