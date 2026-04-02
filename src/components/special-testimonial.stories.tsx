import type { Meta, StoryObj } from "@storybook/react";
import SpecialTestimonial from "./special-testimonial";

const meta: Meta<typeof SpecialTestimonial> = {
  title: "Components/Home/SpecialTestimonial",
  component: SpecialTestimonial,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SpecialTestimonial>;

export const Default: Story = {
  args: {
    heading: "Testimonial",
    quote:
      "The integration process was surprisingly smooth. Vehicle Databases' support team was responsive and thorough. Their flexibility and commitment to helping us scale made all the difference. We're proud of this partnership and excited about what's next.",
    author: "Product Manager",
    company: "Detailed Vehicle History",
    logoSrc: "https://www.vehicledatabases.com/assets/images/dvh-logo.png",
    logoAlt: "Detailed Vehicle History logo",
    logoWidth: 64,
    logoHeight: 28,
  },
};

export const WithoutLogo: Story = {
  args: {
    heading: "What our clients say",
    quote:
      "Their API documentation is second to none. We integrated the VIN Decoder API in under a day, and the accuracy of the data has been invaluable for our platform's reputation.",
    author: "CTO",
    company: "AutoMarket Pro",
  },
};

export const CustomHeading: Story = {
  args: {
    heading: "Success Story",
    quote:
      "Before Vehicle Databases, our license plate lookup took over 10 seconds. Now with their OCR and Plate Decode APIs, we process each request in under 500 milliseconds. Our users noticed immediately.",
    author: "Engineering Lead",
    company: "SmartCarCheck UK",
    logoSrc: "https://www.vehicledatabases.com/assets/images/smartcarcheck-logo.png",
    logoAlt: "SmartCarCheck logo",
    logoWidth: 120,
    logoHeight: 32,
  },
};
