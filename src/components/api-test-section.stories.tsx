import type { Meta, StoryObj } from "@storybook/react";
import { ApiTestSection } from "./api-test-section";

const meta: Meta<typeof ApiTestSection> = {
  title: "Components/ApiTestSection",
  component: ApiTestSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ApiTestSection>;

export const Default: Story = {
  args: {},
};
