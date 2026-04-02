import type { Meta, StoryObj } from "@storybook/react";
import { CtaSection } from "./cta-section";

const meta: Meta<typeof CtaSection> = {
  title: "Components/CtaSection",
  component: CtaSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CtaSection>;

export const Default: Story = {
  args: {},
};
