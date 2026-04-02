import type { Meta, StoryObj } from "@storybook/react";
import { LogoTicker } from "./logo-ticker";

const meta: Meta<typeof LogoTicker> = {
  title: "Home/LogoTicker",
  component: LogoTicker,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LogoTicker>;

export const Default: Story = {
  args: {
    headingPrimary: "Trusted by",
    headingSecondary: "Teams at",
    logoSrc: "/images/logos-marquee.svg",
  },
};

export const CustomContent: Story = {
  args: {
    headingPrimary: "Empowering",
    headingSecondary: "Developers at",
  },
};

export const CustomLogo: Story = {
  args: {
    headingPrimary: "Featured in",
    headingSecondary: "Top Publications",
    // Note: Assuming a different logo asset exists or using the same for demo
    logoSrc: "/images/logos-marquee.svg",
  },
};
