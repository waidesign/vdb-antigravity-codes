# UI Components: Sections & Blocks Architecture

## Overview
The sections architecture in this project is built around three core concepts:
1. **Sections**: The outer layout containers (e.g., `Section`, `CardsSection`) that define the grid structure (how many columns, responsive grids) and page-level styling (theme, background).
2. **Columns**: The grid cells inside a section. They act as wrappers for grouping blocks together and handle vertical/horizontal alignment as well as appearance (e.g., making a column look like a card or highlighting it).
3. **Blocks**: The actual atomic content items inside a column (headings, text, buttons, code blocks, images, forms). These are dynamically rendered by the `BlockRenderer`.

---

## 1. Sections (`Section`, `CardsSection`, etc.)
Sections establish the macro layout of a page. They are the top-level container you drop into your page components.

### `Section` Component Props (`src/components/sections/section.tsx`)
- `layout`: Determines the grid structure (`'one-column'` through `'ten-column'`).
- `alignment`: Layout alignment (`'left' | 'center' | 'right'`).
- `theme` / `isDark`: Toggles light or dark mode styling.
- `columns`: Array of `ColumnProps` representing the columns in the grid.
- `className` / `containerClassName`: Optional classes for additional styling or spacing.

### Example Using `Section`
```tsx
import { Section } from '@/components/sections/section';

export default function MyPage() {
  return (
    <main>
      <Section
        layout="two-column"
        theme="dark"
        columns={[
          { /* Left Column props */ },
          { /* Right Column props */ }
        ]}
      />
    </main>
  );
}
```

---

## 2. Columns (`Column.tsx`)
Columns give structure to your blocks. Each object in the `columns` array maps to a `Column` component, which takes an array of blocks and renders them top-to-bottom.

### `Column` Props
- `blocks`: Array of `BlockProp` objects containing the atomic content.
- `verticalAlignment`: Align blocks vertically (`'top' | 'center' | 'bottom'`).
- `horizontalAlignment`: Align blocks horizontally (`'left' | 'center' | 'right'`).
- `appearance`: Adds preset styling to the column container (`'default' | 'card' | 'highlight'`). Use `'card'` for a bordered box appearance.

### Example
```tsx
{
  verticalAlignment: 'center',
  horizontalAlignment: 'left',
  appearance: 'card',
  blocks: [ ... ]
}
```

---

## 3. Blocks (`BlockRenderer.tsx`)
Blocks represent the atomic UI elements (Text, Buttons, Images, etc.). The `BlockRenderer` takes an array of these block objects and renders the corresponding React components.

### Common Block Types
- **`badge`**: A small highlighted pill (e.g., `"New Feature"`).
- **`heading`**: Headers.
  - Options: `tag` (`h1`, `h2`, `h3`), `text`, `highlight` (word to highlight with gradient text), `variant: 'gradient'`.
- **`richText`**: HTML/Lexical content.
  - Options: `content` (HTML string).
- **`cta`** / **`appStoreCta`**: Call to Action buttons.
  - Options: `buttons` an array of `{ label: 'Text', variant: 'primary' | 'outline', link: '/path' }`.
- **`media`**: Images and videos.
- **`lists`**: Bullet or icon lists.
  - Options: `variant: 'iconList'`, `items` (array of objects with `icon` and `text`).
- **`form`** / **`formSection`**: Lead generation forms and inputs.
- **`code`**: Syntax highlighted code blocks.
  - Options: `code`, `language`, `windowTitle`, `tryItLabel`.

### Example Defining Blocks Array
```ts
const blocks = [
  {
    blockType: 'badge',
    text: 'New Feature'
  },
  {
    blockType: 'heading',
    tag: 'h1',
    text: 'Build faster with AI',
    highlight: 'AI'
  },
  {
    blockType: 'richText',
    content: 'Our new AI tools help you ship code 10x faster.'
  },
  {
    blockType: 'cta',
    buttons: [
      { label: 'Get Started', variant: 'primary', link: '/signup' },
      { label: 'Read Docs', variant: 'outline', link: '/docs' }
    ]
  }
];
```

---

## Putting It All Together: A Complete Page Example
Here is how you combine Sections, Columns, and Blocks to build a reusable, modular page layout.

```tsx
import React from 'react';
import { Section } from '@/components/sections/section';

export default function LandingPage() {
  return (
    <div className="bg-black min-h-screen">
      <Section
        layout="two-column"
        theme="dark"
        alignment="center"
        columns={[
          // Column 1: Text Content
          {
            verticalAlignment: 'center',
            horizontalAlignment: 'left',
            appearance: 'default',
            blocks: [
              {
                blockType: 'badge',
                text: 'v2.0 Released'
              },
              {
                blockType: 'heading',
                tag: 'h1',
                text: 'The best vector database for developers.',
                highlight: 'vector database'
              },
              {
                blockType: 'richText',
                content: 'Scale your AI applications instantly with sub-millisecond latency.'
              },
              {
                blockType: 'cta',
                buttons: [
                  { label: 'Start for Free', variant: 'primary', link: '/register' },
                  { label: 'View Documentation', variant: 'outline', link: '/docs' }
                ]
              }
            ]
          },
          // Column 2: Code Snippet / Visual
          {
            verticalAlignment: 'center',
            appearance: 'card', // gives it a bordered card look
            theme: 'dark', // force dark mode for the card
            blocks: [
              {
                blockType: 'code',
                language: 'typescript',
                windowTitle: 'main.ts',
                code: `import { VDB } from "vdb-client";\n\nconst db = new VDB({ apiKey: "..." });\nawait db.insert("users", [{ id: 1, embedding: [0.1, 0.2] }]);`
              }
            ]
          }
        ]}
      />
    </div>
  );
}
```
