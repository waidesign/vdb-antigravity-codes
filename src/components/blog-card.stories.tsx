import type { Meta, StoryObj } from "@storybook/react";
import { BlogCard } from "./blog-card";

const meta: Meta<typeof BlogCard> = {
  title: "Components/BlogCard",
  component: BlogCard,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BlogCard>;

export const Default: Story = {
  args: {},
};
