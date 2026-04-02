"use client";

import type { Meta, StoryObj } from "@storybook/react";
import { LogoGrid } from "./logo-grid";

const meta: Meta<typeof LogoGrid> = {
  title: "UI/Intro/Sub-components/LogoGrid",
  component: LogoGrid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LogoGrid>;

const mockLogos = [
  { image: { url: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg", alt: "BMW" } },
  { image: { url: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Benz_logo.svg", alt: "Mercedes-Benz" } },
  { image: { url: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg", alt: "Volkswagen" } },
  { image: { url: "https://upload.wikimedia.org/wikipedia/commons/1/12/Hyundai_Motor_Company_logo.svg", alt: "Hyundai" } },
  { image: { url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", alt: "Amazon" } },
];

export const Default: Story = {
  args: {
    logos: mockLogos,
  },
};

export const LimitedLogos: Story = {
  args: {
    logos: mockLogos.slice(0, 3),
  },
};
