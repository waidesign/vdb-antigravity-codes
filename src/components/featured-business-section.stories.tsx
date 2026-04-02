import type { Meta, StoryObj } from "@storybook/react";
import { FeaturedBusinessSection } from "./featured-business-section";

const meta: Meta<typeof FeaturedBusinessSection> = {
  title: "Components/FeaturedBusinessSection",
  component: FeaturedBusinessSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FeaturedBusinessSection>;

export const Default: Story = {
  args: {},
};
