import type { Meta, StoryObj } from "@storybook/react";
import { BlogHero } from "./blog-hero";

const meta: Meta<typeof BlogHero> = {
  title: "Components/BlogHero",
  component: BlogHero,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BlogHero>;

export const Default: Story = {
  args: {},
};
