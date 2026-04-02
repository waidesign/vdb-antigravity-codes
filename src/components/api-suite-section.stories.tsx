import type { Meta, StoryObj } from "@storybook/react";
import { ApiCard } from "./api-suite-section";

const meta: Meta<typeof ApiCard> = {
  title: "Components/ApiCard",
  component: ApiCard,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ApiCard>;

export const Default: Story = {
  args: {},
};
