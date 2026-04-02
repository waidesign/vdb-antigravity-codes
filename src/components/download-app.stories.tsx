import type { Meta, StoryObj } from "@storybook/react";
import DownloadApp from "./download-app";

const meta: Meta<typeof DownloadApp> = {
  title: "Components/Home/DownloadApp",
  component: DownloadApp,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="p-10 bg-black min-h-screen flex items-center justify-center">
        <div className="max-w-6xl w-full">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DownloadApp>;

export const Default: Story = {
  args: {
    variant: "default",
    heading: "Take Vehicle Data Anywhere with our Mobile App.",
    body: "Experience the power of the world's most comprehensive vehicle database in the palm of your hand. Scan VINs, decode plates, and access history reports instantly.",
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800", 
    },
    googlePlayUrl: "#",
    appStoreUrl: "#",
    ukGooglePlayUrl: "#",
    ukAppStoreUrl: "#",
  },
};

export const ImageRight: Story = {
  args: {
    variant: "ImageRight",
    heading: "Smart Car Check",
    body: "A UK-based vehicle history report service, uses our License Plate Recognition OCR API within their mobile app. With the application, customers are given an opportunity to either scan their number plates or upload pictures of these plates. After a successful upload, our API quickly reads the plate number from the license plate picture.\n\nSmartCarCheck then employs other APIs, like the UK plate decoder API, to provide users with complete vehicle details, such as vehicle specifications, vehicle registration details, auction records, vehicle log book details, number of previous keepers, and more.",
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    },
    googlePlayUrl: "#",
    appStoreUrl: "#",
  },
};

export const ImageLeft: Story = {
  args: {
    variant: "ImageLeft",
    heading: "Detailed Vehicle History",
    body: "A trusted source for vehicle history reports in the United States, offers its services through a mobile application also and users have found the license plate scanning API quite convenient for easy access to vehicle information. Our License Plate Recognition OCR API quickly reads and processes key details, including the license plate number and the state from any license plate image uploaded or scanned.\n\nThen, additional APIs, such as the Vehicle History API, step in to provide comprehensive vehicle information, including past owners, title history, accident reports, and more. By seamlessly integrating our technology across both the app and website, Detailed Vehicle History ensures that users have a complete and reliable experience, empowering them to make informed choices when dealing with vehicles in the US market.",
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    },
    googlePlayUrl: "#",
    appStoreUrl: "#",
  },
};

export const QRAndMedia: Story = {
  args: {
    variant: "QRAndMedia",
    heading: "Checkout Detailed Vehicle History App on Your Mobile Devices",
    subheading: "Free VIN Decoder & Vehicle History App",
    media: {
      type: "video",
      src: "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
      poster: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1200",
    },
    // QR codes: using generic placeholder QR images
    appStoreQRCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://apps.apple.com/app/vdb&color=000000&bgcolor=ffffff",
    googlePlayQRCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://play.google.com/store/apps/details?id=com.vdb&color=000000&bgcolor=ffffff",
    googlePlayUrl: "#",
    appStoreUrl: "#",
  },
};

export const VideoVariant: Story = {
  args: {
    heading: "The Power of Data in Your Pocket.",
    body: "Real-time lookups and detailed vehicle specs, now optimized for mobile. Join over 50,000 users managing their fleets on the go.",
    media: {
      type: "video",
      src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", // Sample video
    },
    googlePlayUrl: "#",
    appStoreUrl: "#",
  },
};
