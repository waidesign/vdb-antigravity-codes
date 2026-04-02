import type { Meta, StoryObj } from "@storybook/react";
import { FlexibleTable, TableXIcon, type Column } from "./flexible-table";

const meta: Meta<typeof FlexibleTable> = {
  title: "UI/FlexibleTable",
  component: FlexibleTable,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A premium dark-themed comparison table inspired by the Figma design. Features a rounded pill header row, alternating stripe rows with correct border colours, and a `TableXIcon` helper for marking unavailable features.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FlexibleTable<VinRow>>;

/* ── Shared types ── */
interface VinRow {
  feature: string;
  basic: string | "X";
  premium: string;
}

/* ── Columns definition ── */
const columns: Column<VinRow>[] = [
  {
    key: "feature",
    label: "Feature",
  },
  {
    key: "basic",
    label: "Basic VIN Decode API",
    render: (row) =>
      row.basic === "X" ? <TableXIcon /> : <span>{row.basic}</span>,
  },
  {
    key: "premium",
    label: "Premium VIN Decode API",
    render: (row) => <span>{row.premium}</span>,
  },
];

/* ── Mock Data ── */
const vinData: VinRow[] = [
  {
    feature: "Core Vehicle ID",
    basic: "Make, Model, Year, Trim, Body Type",
    premium: "Everything in Basic",
  },
  {
    feature: "Engine & Drivetrain",
    basic: "Engine, Transmission, Fuel Type, Drive Type",
    premium: "Full powertrain specs",
  },
  {
    feature: "Technical Specs",
    basic: "Basic dimensions",
    premium: "Complete specs, weights, suspension, interiors",
  },
  {
    feature: "Pricing Data",
    basic: "X",
    premium: "MSRP, invoice, total price",
  },
  {
    feature: "Fuel & Efficiency",
    basic: "X",
    premium: "City / Highway / Combined, Green scores",
  },
  {
    feature: "EV / Hybrid Data",
    basic: "X",
    premium: "Battery, range, powertrain",
  },
  {
    feature: "Safety Ratings",
    basic: "X",
    premium: "NHTSA & IIHS",
  },
  {
    feature: "Options & Packages",
    basic: "X",
    premium: "OEM options, packages, colors",
  },
  {
    feature: "Warranty Info",
    basic: "X",
    premium: "Manufacturer coverage",
  },
  {
    feature: "Regions",
    basic: "US, Canada",
    premium: "US, Canada, Europe",
  },
  {
    feature: "VIN Coverage",
    basic: "1980–Present",
    premium: "1980–Present",
  },
];

/* ── Stories ── */
export const Default: Story = {
  args: {
    columns,
    data: vinData,
  },
};

export const Loading: Story = {
  args: {
    columns,
    data: [],
    isLoading: true,
  },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
    emptyMessage: "No data available for this API.",
  },
};
