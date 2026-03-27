# Payload CMS Schema - Reusable Section System

This document outlines the generic, scalable schema for the block-based layout system.

## Reusable Section Field

A generic grouping that can be used as a block or a global field.

- **layout**: `select`
    - `one-column`
    - `two-column`
    - `three-column` (up to `ten-column`)
- **alignment**: `select`
    - `left`
    - `center`
    - `right`
- **columns**: `array`
    - **verticalAlignment**: `select` (`top`, `center`, `bottom`)
    - **horizontalAlignment**: `select` (`left`, `center`, `right`)
    - **appearance**: `select` (`default`, `card`, `highlight`)
    - **blocks**: `blocks`
        - `heading`
        - `richText`
        - `media` (Image/Video)
        - `cta` (Buttons array)
        - `lists`
        - `code`
        - `cards` (Variants: `timeline`, `step-cards`, `metrics`, etc.)
        - `table`
        - `appDownload`
        - `checkboxGroup`
        - `radioGroup`

---

## Unique Tab Section

- **tabs**: `array`
    - **label**: `text`
    - **rows**: `array` (Uses the **Reusable Section Field** schema above)

---

## Design Tokens (Tailwind)

- **Colors**:
    - Background: `#000000`
    - Primary Tab Active: `#8B4513` (Brown)
    - Primary Tab Inactive: `#F2F2F2`
    - Gradients: `from-[#f59120] to-[#9747ff]`
- **Typography**:
    - `font-aileron`: Primary Headings
    - `font-geist`: Body Text
