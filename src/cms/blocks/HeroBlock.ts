import { Block } from '@/cms/types';

// ─── Shared field factories ───────────────────────────────────────────────────

/** CTA button group used across multiple variants */
const ctaFields = [
    { name: 'text', type: 'text' as const, required: true },
    { name: 'href', type: 'text' as const, required: true, label: 'URL' },
    {
        name: 'variant',
        type: 'select' as const,
        defaultValue: 'primary',
        options: [
            { label: 'Primary (gradient)', value: 'primary' },
            { label: 'Outline', value: 'outline' },
            { label: 'WhatsApp (Green)', value: 'whatsapp' },
        ],
    },
    {
        name: 'icon',
        type: 'group' as const,
        label: 'Button Icon (optional)',
        fields: [
            { name: 'src', type: 'text' as const, label: 'Icon path (e.g. /images/arrow-right.svg)' },
            { name: 'alt', type: 'text' as const },
            { name: 'width', type: 'number' as const, defaultValue: 13 },
            { name: 'height', type: 'number' as const, defaultValue: 13 },
        ],
    },
];

/** Standard media block group */
const mediaFields = [
    {
        name: 'type',
        type: 'select' as const,
        required: true,
        defaultValue: 'image',
        options: [
            { label: 'Image', value: 'image' },
            { label: 'Video', value: 'video' },
        ],
    },
    {
        name: 'image',
        type: 'upload' as const,
        relationTo: 'media' as const,
        label: 'Image',
        admin: {
            condition: (_: any, siblingData: any) => siblingData?.type === 'image',
        },
    },
    {
        name: 'videoUrl',
        type: 'text' as const,
        label: 'Video URL',
        admin: {
            condition: (_: any, siblingData: any) => siblingData?.type === 'video',
        },
    },
    {
        name: 'posterUrl',
        type: 'text' as const,
        label: 'Video Poster URL',
        admin: {
            condition: (_: any, siblingData: any) => siblingData?.type === 'video',
        },
    },
    { name: 'alt', type: 'text' as const, label: 'Alt text' },
];

// ─── Variant-specific condition helpers ──────────────────────────────────────

const VARIANTS_WITH_MEDIA = ['homepage', 'serviceWithMedia', 'centeredWithMedia'];
const VARIANTS_WITH_RICH_TEXT = [
    'serviceWithMedia', 'serviceWithForm', 'centeredWithMedia',
    'backgroundImage', 'caseStudy', 'legalInformation', 'aboutUs', 'contactUs',
];
const VARIANTS_WITH_THEME = [
    'serviceWithMedia', 'serviceWithForm', 'centeredWithMedia', 'caseStudy', 'aboutUs', 'contactUs', 'mcp',
];
const VARIANTS_WITH_CTA = [
    'homepage', 'serviceWithMedia', 'serviceWithForm', 'centeredWithMedia',
    'backgroundImage', 'aboutUs', 'contactUs',
];

// ─── Main HeroBlock schema ────────────────────────────────────────────────────

export const HeroBlock: Block = {
    slug: 'heroBlock',
    labels: {
        singular: 'Hero Section',
        plural: 'Hero Sections',
    },
    fields: [
        // ── Variant selector ──────────────────────────────────────────────────
        {
            name: 'variant',
            type: 'select',
            required: true,
            defaultValue: 'homepage',
            label: 'Layout Variant',
            options: [
                { label: 'Homepage (Badge + Two-Column + Media)', value: 'homepage' },
                { label: 'Service — With Media', value: 'serviceWithMedia' },
                { label: 'Service — With Lookup Form', value: 'serviceWithForm' },
                { label: 'Centered — With Media Below', value: 'centeredWithMedia' },
                { label: 'Background Image (Make / Brand pages)', value: 'backgroundImage' },
                { label: 'Case Study', value: 'caseStudy' },
                { label: 'Legal Information', value: 'legalInformation' },
                { label: 'About Us', value: 'aboutUs' },
                { label: 'Contact Us', value: 'contactUs' },
                { label: 'MCP Server Access', value: 'mcp' },
            ],
        },

        // ── Shared: theme ─────────────────────────────────────────────────────
        {
            name: 'theme',
            type: 'select',
            defaultValue: 'light',
            label: 'Theme',
            options: [
                { label: 'Light', value: 'light' },
                { label: 'Dark', value: 'dark' },
            ],
            admin: {
                condition: (_: any, siblingData: any) =>
                    VARIANTS_WITH_THEME.includes(siblingData?.variant),
            },
        },

        // ── Shared: heading ───────────────────────────────────────────────────
        {
            name: 'heading',
            type: 'text',
            required: true,
            label: 'Heading',
        },
        {
            name: 'headingHighlight',
            type: 'text',
            label: 'Heading Highlight (gradient word/phrase — must match a substring of Heading)',
        },

        // ── Shared: richText ──────────────────────────────────────────────────
        {
            name: 'richText',
            type: 'richText',
            label: 'Body / Description',
            admin: {
                condition: (_: any, siblingData: any) =>
                    VARIANTS_WITH_RICH_TEXT.includes(siblingData?.variant),
            },
        },

        // ── homepage: badge ───────────────────────────────────────────────────
        {
            name: 'badge',
            type: 'group',
            label: 'Announcement Badge',
            admin: {
                condition: (_: any, siblingData: any) =>
                    ['homepage', 'caseStudy'].includes(siblingData?.variant),
            },
            fields: [
                { name: 'label', type: 'text', label: 'Badge Label (pill left)' },
                { name: 'text', type: 'text', label: 'Badge Text' },
                { name: 'href', type: 'text', label: 'Link URL (optional)' },
            ],
        },

        // ── homepage: description + ctaFooterText ─────────────────────────────
        {
            name: 'description',
            type: 'text',
            label: 'Short Description (plain text, below heading)',
            admin: {
                condition: (_: any, siblingData: any) => siblingData?.variant === 'homepage',
            },
        },
        {
            name: 'ctaFooterText',
            type: 'text',
            label: 'CTA Footer Text (shown below buttons)',
            admin: {
                condition: (_: any, siblingData: any) =>
                    ['homepage', 'contactUs'].includes(siblingData?.variant),
            },
        },

        // ── Shared: CTAs ──────────────────────────────────────────────────────
        {
            name: 'ctas',
            type: 'array',
            label: 'Call-to-Action Buttons',
            admin: {
                condition: (_: any, siblingData: any) =>
                    VARIANTS_WITH_CTA.includes(siblingData?.variant),
            },
            fields: ctaFields,
        },

        // ── Shared: media ─────────────────────────────────────────────────────
        {
            name: 'media',
            type: 'group',
            label: 'Media (Image or Video)',
            admin: {
                condition: (_: any, siblingData: any) =>
                    [...VARIANTS_WITH_MEDIA, 'contactUs'].includes(siblingData?.variant),
            },
            fields: mediaFields,
        },

        // ── serviceWithForm / contactUs: form fields ──────────────────────────
        {
            name: 'lookupForm',
            type: 'group',
            label: 'Lookup Form (serviceWithForm)',
            admin: {
                condition: (_: any, siblingData: any) => siblingData?.variant === 'serviceWithForm',
            },
            fields: [
                { name: 'title', type: 'text', required: true, label: 'Form Card Title' },
                {
                    name: 'fields',
                    type: 'array',
                    label: 'Form Fields',
                    fields: [
                        { name: 'name', type: 'text', required: true, label: 'Field Name (HTML name attr)' },
                        { name: 'label', type: 'text', label: 'Label (optional)' },
                        { name: 'placeholder', type: 'text', required: true },
                        {
                            name: 'type',
                            type: 'select',
                            required: true,
                            options: [
                                { label: 'Text', value: 'text' },
                                { label: 'Email', value: 'email' },
                                { label: 'Tel', value: 'tel' },
                                { label: 'Select / Dropdown', value: 'select' },
                            ],
                        },
                        { name: 'required', type: 'checkbox', label: 'Required field?' },
                        { name: 'fullWidth', type: 'checkbox', label: 'Full width?' },
                        {
                            name: 'options',
                            type: 'array',
                            label: 'Dropdown Options (select type only)',
                            admin: {
                                condition: (_: any, siblingData: any) => siblingData?.type === 'select',
                            },
                            fields: [
                                { name: 'value', type: 'text', required: true },
                                { name: 'label', type: 'text', required: true },
                            ],
                        },
                    ],
                },
                { name: 'submitLabel', type: 'text', required: true, defaultValue: 'Submit' },
                { name: 'action', type: 'text', label: 'Form Action URL (optional)' },
            ],
        },

        // ── contactUs: contactDetails ─────────────────────────────────────────
        {
            name: 'contactDetails',
            type: 'array',
            label: 'Contact Detail Lines (address, phone, email, support, etc.)',
            admin: {
                condition: (_: any, siblingData: any) => siblingData?.variant === 'contactUs',
            },
            fields: [
                {
                    name: 'icon',
                    type: 'select',
                    label: 'Icon',
                    options: [
                        { label: 'Location / Address', value: 'location' },
                        { label: 'Phone', value: 'phone' },
                        { label: 'Email', value: 'email' },
                        { label: 'Support', value: 'support' },
                    ],
                },
                { name: 'text', type: 'text', required: true, label: 'Display Text' },
                { name: 'href', type: 'text', label: 'Link URL (optional — mailto:, tel:, https://)' },
            ],
        },

        // ── contactUs: contact form ───────────────────────────────────────────
        {
            name: 'contactForm',
            type: 'group',
            label: 'Contact Form',
            admin: {
                condition: (_: any, siblingData: any) => siblingData?.variant === 'contactUs',
            },
            fields: [
                {
                    name: 'fields',
                    type: 'array',
                    label: 'Form Fields',
                    fields: [
                        { name: 'name', type: 'text', required: true, label: 'Field Name (HTML name attr)' },
                        { name: 'label', type: 'text', label: 'Label (optional)' },
                        { name: 'placeholder', type: 'text', required: true },
                        {
                            name: 'type',
                            type: 'select',
                            required: true,
                            options: [
                                { label: 'Text', value: 'text' },
                                { label: 'Email', value: 'email' },
                                { label: 'Tel', value: 'tel' },
                                { label: 'Select / Dropdown', value: 'select' },
                                { label: 'Textarea', value: 'textarea' },
                            ],
                        },
                        { name: 'required', type: 'checkbox', label: 'Required field?' },
                        { name: 'fullWidth', type: 'checkbox', label: 'Full width?' },
                        {
                            name: 'rows',
                            type: 'number',
                            label: 'Textarea rows',
                            defaultValue: 4,
                            admin: {
                                condition: (_: any, siblingData: any) => siblingData?.type === 'textarea',
                            },
                        },
                        {
                            name: 'options',
                            type: 'array',
                            label: 'Dropdown Options (select type only)',
                            admin: {
                                condition: (_: any, siblingData: any) => siblingData?.type === 'select',
                            },
                            fields: [
                                { name: 'value', type: 'text', required: true },
                                { name: 'label', type: 'text', required: true },
                            ],
                        },
                    ],
                },
                { name: 'submitLabel', type: 'text', required: true, defaultValue: 'Submit' },
                {
                    name: 'recaptchaEnabled',
                    type: 'checkbox',
                    label: 'Show reCAPTCHA?',
                    defaultValue: false,
                },
                {
                    name: 'recaptchaSiteKey',
                    type: 'text',
                    label: 'reCAPTCHA Site Key',
                    admin: {
                        condition: (_: any, siblingData: any) => siblingData?.recaptchaEnabled,
                    },
                },
                { name: 'action', type: 'text', label: 'Form Action URL (optional)' },
            ],
        },

        // ── backgroundImage: config ───────────────────────────────────────────
        {
            name: 'backgroundImage',
            type: 'group',
            label: 'Background Image',
            admin: {
                condition: (_: any, siblingData: any) => siblingData?.variant === 'backgroundImage',
            },
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
                { name: 'alt', type: 'text' },
            ],
        },
        {
            name: 'overlayOpacity',
            type: 'number',
            label: 'Dark Overlay Opacity (0–1)',
            defaultValue: 0.6,
            min: 0,
            max: 1,
            admin: {
                condition: (_: any, siblingData: any) => siblingData?.variant === 'backgroundImage',
            },
        },
        {
            name: 'contentAlign',
            type: 'select',
            label: 'Content Alignment',
            defaultValue: 'left',
            options: [
                { label: 'Left', value: 'left' },
                { label: 'Center', value: 'center' },
            ],
            admin: {
                condition: (_: any, siblingData: any) => siblingData?.variant === 'backgroundImage',
            },
        },

        // ── caseStudy: subheading + overview + results ────────────────────────
        {
            name: 'subheading',
            type: 'text',
            label: 'Subheading (below main heading)',
            admin: {
                condition: (_: any, siblingData: any) => siblingData?.variant === 'caseStudy',
            },
        },
        {
            name: 'overview',
            type: 'group',
            label: 'Overview panel',
            admin: {
                condition: (_: any, siblingData: any) => siblingData?.variant === 'caseStudy',
            },
            fields: [
                { name: 'title', type: 'text', required: true, defaultValue: 'Overview' },
                {
                    name: 'details',
                    type: 'array',
                    label: 'Detail rows',
                    fields: [
                        { name: 'label', type: 'text', required: true },
                        { name: 'value', type: 'text', required: true },
                    ],
                },
            ],
        },
        {
            name: 'results',
            type: 'group',
            label: 'Results / metrics card',
            admin: {
                condition: (_: any, siblingData: any) => siblingData?.variant === 'caseStudy',
            },
            fields: [
                { name: 'title', type: 'text', required: true, defaultValue: 'Results' },
                {
                    name: 'metrics',
                    type: 'array',
                    label: 'Metric tiles',
                    fields: [
                        { name: 'value', type: 'text', required: true, label: 'Big value (e.g. 38%)' },
                        { name: 'label', type: 'text', required: true, label: 'Descriptor (e.g. increase in conversions)' },
                    ],
                },
            ],
        },

        // ── aboutUs: calloutText ──────────────────────────────────────────────
        {
            name: 'calloutText',
            type: 'richText',
            label: 'Callout Box Text',
            admin: {
                condition: (_: any, siblingData: any) => siblingData?.variant === 'aboutUs',
            },
        },

        // ── mcp: tagline + definitionText + sections + disclaimerText + form ──
        {
            name: 'tagline',
            type: 'text',
            label: 'Tagline (short plain-text line below heading)',
            admin: {
                condition: (_: any, siblingData: any) => siblingData?.variant === 'mcp',
            },
        },
        {
            name: 'definitionText',
            type: 'richText',
            label: 'Definition Text (intro paragraph — use Bold for highlighted terms)',
            admin: {
                condition: (_: any, siblingData: any) => siblingData?.variant === 'mcp',
            },
        },
        {
            name: 'sections',
            type: 'array',
            label: 'Content Sections (left column)',
            admin: {
                condition: (_: any, siblingData: any) => siblingData?.variant === 'mcp',
            },
            fields: [
                { name: 'heading', type: 'text' as const, label: 'Section H3 heading (optional)' },
                { name: 'richText', type: 'richText' as const, label: 'Body text (optional)' },
                {
                    name: 'listItems',
                    type: 'array' as const,
                    label: 'Bullet list items (optional)',
                    fields: [
                        { name: 'text', type: 'text' as const, required: true },
                    ],
                },
            ],
        },
        {
            name: 'disclaimerText',
            type: 'text',
            label: 'Bottom Disclaimer (italic, small — e.g. "Not a marketing list")',
            admin: {
                condition: (_: any, siblingData: any) => siblingData?.variant === 'mcp',
            },
        },
        {
            name: 'mcpForm',
            type: 'group',
            label: 'MCP Access Request Form (right card)',
            admin: {
                condition: (_: any, siblingData: any) => siblingData?.variant === 'mcp',
            },
            fields: [
                { name: 'title', type: 'text' as const, required: true, label: 'Form Card Title' },
                {
                    name: 'fields',
                    type: 'array' as const,
                    label: 'Form Fields',
                    fields: [
                        { name: 'name', type: 'text' as const, required: true, label: 'Field Name (HTML name attr)' },
                        { name: 'label', type: 'text' as const, label: 'Label (optional)' },
                        { name: 'placeholder', type: 'text' as const, label: 'Placeholder / helper text' },
                        {
                            name: 'type',
                            type: 'select' as const,
                            required: true,
                            options: [
                                { label: 'Text', value: 'text' },
                                { label: 'Email', value: 'email' },
                                { label: 'Tel', value: 'tel' },
                                { label: 'Select / Dropdown', value: 'select' },
                                { label: 'Textarea', value: 'textarea' },
                                { label: 'Checkbox Group', value: 'checkboxGroup' },
                            ],
                        },
                        { name: 'required', type: 'checkbox' as const, label: 'Required field?' },
                        { name: 'fullWidth', type: 'checkbox' as const, label: 'Full width?' },
                        {
                            name: 'rows',
                            type: 'number' as const,
                            label: 'Textarea rows',
                            defaultValue: 3,
                            admin: {
                                condition: (_: any, siblingData: any) => siblingData?.type === 'textarea',
                            },
                        },
                        {
                            name: 'options',
                            type: 'array' as const,
                            label: 'Options (for select & checkboxGroup types)',
                            admin: {
                                condition: (_: any, siblingData: any) =>
                                    ['select', 'checkboxGroup'].includes(siblingData?.type),
                            },
                            fields: [
                                { name: 'value', type: 'text' as const, required: true },
                                { name: 'label', type: 'text' as const, required: true },
                            ],
                        },
                    ],
                },
                { name: 'submitLabel', type: 'text' as const, required: true, defaultValue: 'Submit request' },
                { name: 'formDisclaimerText', type: 'text' as const, label: 'Small-print below submit button' },
                { name: 'action', type: 'text' as const, label: 'Form Action URL (optional)' },
            ],
        },
    ],
};
