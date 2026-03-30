import { Block } from '@/cms/types';

export const CardBlock: Block = {
  slug: 'cardBlock',
  labels: {
    singular: 'Card',
    plural: 'Cards',
  },
  fields: [
    {
      name: 'variant',
      type: 'select',
      required: true,
      defaultValue: 'h3Body',
      options: [
        { label: 'H3 and Body', value: 'h3Body' },
        { label: 'Icon and Body (Inline)', value: 'iconBodyInline' },
        { label: 'Icon and Body (Normal)', value: 'iconBodyNormal' },
        { label: 'H3, Image and Body (Borderless)', value: 'h3ImageBodyBorderless' },
        { label: 'H3 and Body (Redirect)', value: 'h3BodyRedirect' },
        { label: 'Icon, H3, Body and CTA', value: 'iconH3BodyCTA' },
        { label: 'Icon, Body, Progress, Body', value: 'iconBodyProgressBody' },
        { label: 'Logo, Body, Divider and Body', value: 'logoBodyDividerBody' },
        { label: 'Body Only', value: 'bodyOnly' },
        { label: 'H3, Body, Lists, Body, and CTA', value: 'h3BodyListsBodyCTA' },
        { label: 'Two-Column (Text/Lists | Image)', value: 'twoColumnH3BodyListsBodyImage' },
        { label: 'Technical (Code & Table)', value: 'technical' },
      ],
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      admin: {
        condition: (_: any, siblingData: any) =>
          ['h3Body', 'h3ImageBodyBorderless', 'h3BodyRedirect', 'iconH3BodyCTA', 'h3BodyListsBodyCTA', 'twoColumnH3BodyListsBodyImage', 'technical'].includes(siblingData?.variant),
      },
    },
    {
      name: 'subheading',
      type: 'text',
      admin: {
        condition: (_: any, siblingData: any) => siblingData?.variant === 'technical',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      required: true,
      admin: {
        condition: (_: any, siblingData: any) => siblingData?.variant !== 'logoBodyDividerBody', // Most variants use this
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (_: any, siblingData: any) =>
          ['h3ImageBodyBorderless', 'twoColumnH3BodyListsBodyImage', 'logoBodyDividerBody'].includes(siblingData?.variant),
      },
    },
    {
      name: 'icon',
      type: 'text',
      label: 'Icon Name (Lucide)',
      admin: {
        condition: (_: any, siblingData: any) =>
          ['iconBodyInline', 'iconBodyNormal', 'iconH3BodyCTA', 'iconBodyProgressBody', 'technical'].includes(siblingData?.variant),
      },
    },
    {
      name: 'link',
      type: 'text',
      label: 'Redirect URL',
      admin: {
        condition: (_: any, siblingData: any) => siblingData?.variant === 'h3BodyRedirect',
      },
    },
    {
      name: 'cta',
      type: 'group',
      admin: {
        condition: (_: any, siblingData: any) => ['iconH3BodyCTA', 'h3BodyListsBodyCTA'].includes(siblingData?.variant),
      },
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
        { name: 'variant', type: 'select', options: [{ label: 'Primary', value: 'primary' }, { label: 'Secondary', value: 'secondary' }] },
      ],
    },
    {
      name: 'progress',
      type: 'number',
      min: 0,
      max: 100,
      admin: {
        condition: (_: any, siblingData: any) => siblingData?.variant === 'iconBodyProgressBody',
      },
    },
    {
      name: 'listItems',
      type: 'array',
      admin: {
        condition: (_: any, siblingData: any) => ['h3BodyListsBodyCTA', 'twoColumnH3BodyListsBodyImage'].includes(siblingData?.variant),
      },
      fields: [{ name: 'text', type: 'text', required: true }],
    },
    {
      name: 'codeSnippet',
      type: 'code',
      admin: {
        condition: (_: any, siblingData: any) => siblingData?.variant === 'technical',
      },
    },
    {
      name: 'tableData',
      type: 'json',
      admin: {
        condition: (_: any, siblingData: any) => siblingData?.variant === 'technical',
      },
    },
    {
      name: 'bottomText',
      type: 'richText',
      admin: {
        condition: (_: any, siblingData: any) => ['iconBodyProgressBody', 'logoBodyDividerBody'].includes(siblingData?.variant),
      },
    },
  ],
};
