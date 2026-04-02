import type { Meta, StoryObj } from "@storybook/react";
import { ProsSection } from "./pros-section";

const meta: Meta<typeof ProsSection> = {
  title: "Components/ProsSection",
  component: ProsSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProsSection>;

export const Default: Story = {
  args: {},
};
