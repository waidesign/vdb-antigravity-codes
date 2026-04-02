import type { Meta, StoryObj } from "@storybook/react";
import { ReviewsSection } from "./reviews-section";

const meta: Meta<typeof ReviewsSection> = {
  title: "Components/ReviewsSection",
  component: ReviewsSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ReviewsSection>;

export const Default: Story = {
  args: {},
};
