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

/** Shared fields for visual media side */
const mediaFields = [
    {
        name: 'type',
        type: 'select' as const,
        required: true,
        defaultValue: 'image',
        options: [
            { label: 'Standard Image', value: 'image' },
            { label: 'Video (Looping)', value: 'video' },
            { label: 'Feature Style (Image + Code Overlay)', value: 'featureCode' },
            { label: 'Code Dashboard (Mockup API Output)', value: 'dashboard' },
            { label: 'Feature Grid (Multi-column list card)', value: 'featureGrid' },
        ],
    },
    {
        name: 'gridTitle',
        type: 'text' as const,
        label: 'Grid Card Title',
        admin: {
            condition: (_: any, siblingData: any) => siblingData?.type === 'featureGrid',
        },
    },
    {
        name: 'gridItems',
        type: 'array' as const,
        label: 'Grid List Items',
        admin: {
            condition: (_: any, siblingData: any) => siblingData?.type === 'featureGrid',
        },
        fields: [{ name: 'text', type: 'text' as const, required: true }],
    },
    {
        name: 'image',
        type: 'upload' as const,
        relationTo: 'media' as const,
        label: 'Primary Image',
        admin: {
            condition: (_: any, siblingData: any) => ['image', 'featureCode'].includes(siblingData?.type),
        },
    },
    {
        name: 'videoUrl',
        type: 'text' as const,
        label: 'Video URL (direct .mp4 link)',
        admin: {
            condition: (_: any, siblingData: any) => siblingData?.type === 'video',
        },
    },
    {
        name: 'codeText',
        type: 'textarea' as const,
        label: 'Code Snippet (JSON/JS)',
        admin: {
            condition: (_: any, siblingData: any) => ['featureCode', 'dashboard'].includes(siblingData?.type),
        },
    },
    { name: 'alt', type: 'text' as const, label: 'Alt text for accessibility' },
];

export const ApiIntroBlock: Block = {
    slug: 'apiIntroBlock',
    labels: {
        singular: 'API Intro Section',
        plural: 'API Intro Sections',
    },
    fields: [
        {
            name: 'variant',
            type: 'select',
            required: true,
            defaultValue: 'api-split-media-right',
            options: [
                { label: 'Split — Media Right', value: 'api-split-media-right' },
                { label: 'Split — Media Left', value: 'api-split-media-left' },
                { label: 'Centered — Minimal (No Media)', value: 'api-centered-minimal' },
                { label: 'Simple — Text Only (Left Aligned)', value: 'api-simple-text' },
                { label: 'Feature List — Media Right (2 Column)', value: 'api-feature-list-split' },
                { label: 'Heading on Top — Media Left (2 Column Grid)', value: 'api-heading-top-split' },
                { label: 'Code Block — Media Right (Split Columns)', value: 'api-code-split' },
                { label: 'Feature Grid Cards — Split (Media Right Card)', value: 'api-feature-grid-split' },
                { label: 'Cards Grid — Vertical (3-Column Grid)', value: 'api-cards-grid' },
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
            name: 'heading',
            type: 'text',
            required: true,
            label: 'Main Heading',
        },
        {
            name: 'headingHighlight',
            type: 'text',
            label: 'Heading Highlight (substring to style with brand gradient)',
        },
        {
            name: 'subheading',
            type: 'text',
            label: 'Subheading / Tagline (appears small above or below heading)',
        },
        {
            name: 'richText',
            type: 'richText',
            required: true,
            label: 'Body / Description',
        },
        {
            name: 'secondaryRichText',
            type: 'richText',
            label: 'Secondary Body / Content (Optional)',
        },
        {
            name: 'features',
            type: 'array',
            label: 'Feature / Icon List',
            admin: {
                condition: (_: any, siblingData: any) => ['api-feature-list-split', 'api-feature-grid-split', 'api-cards-grid'].includes(siblingData?.variant),
            },
            fields: [
                { name: 'stat', type: 'text', label: 'Stat / Numeric Value (e.g. 88%)' },
                { name: 'text', type: 'text', required: true, label: 'Feature Title' },
                { name: 'description', type: 'text', label: 'Feature Description (Optional)' },
                {
                    name: 'icon',
                    type: 'upload',
                    relationTo: 'media',
                    label: 'Custom Icon (Optional)',
                },
            ],
        },
        {
            name: 'ctas',
            type: 'array',
            label: 'Call to Action Buttons',
            fields: ctaFields,
            maxRows: 2,
        },
        {
            name: 'media',
            type: 'group',
            label: 'Visual Content (Media)',
            fields: mediaFields,
        },
        {
            name: 'theme',
            type: 'select',
            defaultValue: 'dark',
            options: [
                { label: 'Dark Mode (Black Bg)', value: 'dark' },
                { label: 'Light Mode (White Bg)', value: 'light' },
            ],
        },
    ],
};
