"use client";

import type { Meta, StoryObj } from "@storybook/react";
import { CodeDashboard } from "./code-dashboard";

const meta: Meta<typeof CodeDashboard> = {
  title: "UI/Intro/Sub-components/CodeDashboard",
  component: CodeDashboard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CodeDashboard>;

export const DarkTheme: Story = {
  args: {
    code: JSON.stringify({
      vin: "5TQYK30D8FS503804",
      make: "Tesla",
      model: "Model S",
      year: 2023,
      status: "Verified",
    }, null, 2),
    theme: "dark",
  },
};

export const LightTheme: Story = {
  args: {
    code: JSON.stringify({
      vin: "5TQYK30D8FS503804",
      make: "Tesla",
      model: "Model S",
      year: 2023,
      status: "Verified",
    }, null, 2),
    theme: "light",
  },
};
