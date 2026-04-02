"use client";

import type { Meta, StoryObj } from "@storybook/react";
import { HeadingRenderer } from "./heading-renderer";

const meta: Meta<typeof HeadingRenderer> = {
  title: "UI/Intro/Sub-components/HeadingRenderer",
  component: HeadingRenderer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HeadingRenderer>;

export const Default: Story = {
  args: {
    text: "Supercharge Your Vehicle Data Workflow",
    theme: "dark",
  },
};

export const CenterAligned: Story = {
  args: {
    text: "The World's Most Accurate VIN Database",
    theme: "dark",
  },
};

export const LightTheme: Story = {
  args: {
    text: "Build Faster with Real-time Vehicle Insights",
    theme: "light",
  },
};

export const NoTagline: Story = {
  args: {
    text: "Empowering the Future of Automotive Intelligence",
    theme: "dark",
  },
};
