import { Block } from '@/cms/types';

/** Shared fields for buttons/CTAs */
const ctaFields = [
    { name: 'text', type: 'text' as const, required: true },
    { name: 'href', type: 'text' as const, required: true, label: 'URL' },
    {
        name: 'variant',
        type: 'select' as const,
        defaultValue: 'primary',
        options: [
            { label: 'Primary (Gradient)', value: 'primary' },
            { label: 'Outline (White/Border)', value: 'outline' },
            { label: 'Ghost / Text Link', value: 'ghost' },
        ],
    },
];

export const AlternativeIntroBlock: Block = {
    slug: 'alternativeIntroBlock',
    labels: {
        singular: 'Alternative Intro Section',
        plural: 'Alternative Intro Sections',
    },
    fields: [
        {
            name: 'variant',
            type: 'select',
            required: true,
            defaultValue: 'text-stack-left',
            options: [
                { label: 'Standard Text Stack', value: 'text-stack-left' },
                { label: 'Mixed Content — Long Form (Logo Grid, Lists)', value: 'mixed-content-long' },
            ],
            admin: {
                description: 'Dictates the high-level structural layout of the intro.',
            },
        },
        {
            name: 'theme',
            type: 'select',
            defaultValue: 'dark',
            options: [
                { label: 'Dark Mode (Black Background)', value: 'dark' },
                { label: 'Light Mode (White Background)', value: 'light' },
            ],
        },
        {
            name: 'spacingSize',
            type: 'select',
            defaultValue: 'standard',
            options: [
                { label: 'Standard (py-24)', value: 'standard' },
                { label: 'Large (py-32)', value: 'large' },
                { label: 'Compact (py-16)', value: 'compact' },
            ],
        },
        {
            name: 'subheading',
            type: 'text',
            label: 'Subheading / Tagline (e.g. "Introducing Both NMVTIS...")',
        },
        {
            name: 'heading',
            type: 'text',
            required: true,
            label: 'Main Heading (e.g. "NMVTIS")',
        },
        {
            name: 'headingHighlight',
            type: 'text',
            label: 'Heading Highlight (substring to style with brand gradient)',
        },
        {
            name: 'richText',
            type: 'richText',
            required: true,
            label: 'Primary Body Description',
        },
        {
            name: 'secondaryRichText',
            type: 'richText',
            label: 'Secondary Body Description (Optional)',
        },

        // ── Mixed Content Long: Section 2 ─────────────────────────────────────
        {
            name: 'sectionTwoHeading',
            type: 'text',
            label: 'Section 2 Heading',
            admin: {
                condition: (_: any, siblingData: any) => siblingData?.variant === 'mixed-content-long',
            },
        },
        {
            name: 'tertiaryRichText',
            type: 'richText',
            label: 'Section 2 Body Description',
            admin: {
                condition: (_: any, siblingData: any) => siblingData?.variant === 'mixed-content-long',
            },
        },

        // ── Mixed Content Long: Logos ─────────────────────────────────────────
        {
            name: 'logos',
            type: 'array',
            label: 'Logo Grid Cards',
            admin: {
                condition: (_: any, siblingData: any) => siblingData?.variant === 'mixed-content-long',
            },
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
                {
                    name: 'link',
                    type: 'text',
                    label: 'External Link (Optional)',
                },
            ],
        },

        // ── Mixed Content Long: Section 3 & CTAs ───────────────────────────────
        {
            name: 'quaternaryRichText',
            type: 'richText',
            label: 'Section 3 Body Description (shown after logos)',
            admin: {
                condition: (_: any, siblingData: any) => siblingData?.variant === 'mixed-content-long',
            },
        },
        {
            name: 'ctas',
            type: 'array',
            label: 'Call to Action Buttons',
            fields: ctaFields,
            maxRows: 2,
            admin: {
                condition: (_: any, siblingData: any) => siblingData?.variant === 'mixed-content-long',
            },
        },

        // ── Mixed Content Long: Footer List ───────────────────────────────────
        {
            name: 'quinquenaryRichText',
            type: 'richText',
            label: 'Footer Description (shown after buttons)',
            admin: {
                condition: (_: any, siblingData: any) => siblingData?.variant === 'mixed-content-long',
            },
        },
        {
            name: 'listHeading',
            type: 'text',
            label: 'List Section Heading',
            admin: {
                condition: (_: any, siblingData: any) => siblingData?.variant === 'mixed-content-long',
            },
        },
        {
            name: 'listStyle',
            type: 'select',
            defaultValue: 'numbers',
            options: [
                { label: 'Numbered List', value: 'numbers' },
                { label: 'Bulleted List', value: 'bullets' },
            ],
            admin: {
                condition: (_: any, siblingData: any) => siblingData?.variant === 'mixed-content-long',
            },
        },
        {
            name: 'listItems',
            type: 'array',
            label: 'Bottom List Items',
            admin: {
                condition: (_: any, siblingData: any) => siblingData?.variant === 'mixed-content-long',
            },
            fields: [{ name: 'text', type: 'text', required: true }],
        },
    ],
};
