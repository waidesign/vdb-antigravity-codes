import type { Meta, StoryObj } from "@storybook/react";
import { ArticleRenderer } from "./article-renderer";

const meta: Meta<typeof ArticleRenderer> = {
  title: "Components/ArticleRenderer",
  component: ArticleRenderer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ArticleRenderer>;

export const Default: Story = {
  args: {},
};
