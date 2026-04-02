import type { Meta, StoryObj } from "@storybook/react";
import { CategoryTabs } from "./category-tabs";

const meta: Meta<typeof CategoryTabs> = {
  title: "Components/CategoryTabs",
  component: CategoryTabs,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CategoryTabs>;

export const Default: Story = {
  args: {},
};
