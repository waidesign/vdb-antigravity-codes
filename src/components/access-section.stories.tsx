import type { Meta, StoryObj } from "@storybook/react";
import { AccessSection } from "./access-section";

const meta: Meta<typeof AccessSection> = {
  title: "Components/AccessSection",
  component: AccessSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AccessSection>;

export const Default: Story = {
  args: {},
};
