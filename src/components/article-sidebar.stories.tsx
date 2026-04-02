import type { Meta, StoryObj } from "@storybook/react";
import { ArticleSidebar } from "./article-sidebar";

const meta: Meta<typeof ArticleSidebar> = {
  title: "Components/ArticleSidebar",
  component: ArticleSidebar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ArticleSidebar>;

export const Default: Story = {
  args: {},
};
