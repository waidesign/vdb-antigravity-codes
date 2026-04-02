import type { Meta, StoryObj } from "@storybook/react";
import { KeyBenefits } from "./key-benefits";

const meta: Meta<typeof KeyBenefits> = {
  title: "Components/Home/KeyBenefits",
  component: KeyBenefits,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof KeyBenefits>;

export const Default: Story = {
  args: {
    benefits: [
      {
        iconName: "Shield",
        title: "Fast & Reliable",
        description: "JSON responses in <1 second, 99.99% uptime.",
      },
      {
        iconName: "Globe",
        title: "Global Coverage",
        description: "US, Canada, Europe VINs (1981–2026).",
      },
      {
        iconName: "Database",
        title: "Full Vehicle Data",
        description: "From basic make/model to advanced specs, features, colors, options & packages.",
      },
      {
        iconName: "Code",
        title: "Developer-Friendly",
        description: "REST API with code examples in Python, JavaScript, PHP, Java, C#, Ruby & Go.",
      },
      {
        iconName: "RefreshCcw",
        title: "Regular Updates",
        description: "Frequent data refreshed with new models and corrections.",
      },
      {
        iconName: "Car",
        title: "All Vehicle Types",
        description: "Passenger cars, SUVs, trucks, vans, and more.",
      },
    ],
  },
};
