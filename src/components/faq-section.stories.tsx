import type { Meta, StoryObj } from "@storybook/react";
import { FaqSection } from "./faq-section";

const meta: Meta<typeof FaqSection> = {
  title: "Components/FaqSection",
  component: FaqSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FaqSection>;

export const Default: Story = {
  args: {},
};
