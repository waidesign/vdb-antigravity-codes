"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Phone, Mail, Clock, ShieldCheck, Zap, TrendingUp, CheckCircle2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CodeBlock } from '@/components/ui/code-block';
import { Checkbox } from '@/components/ui/checkbox';
import { Radio, RadioGroup } from '@/components/ui/radio';
import { cn } from '@/lib/utils';

import { convertLexicalToHtml } from '@/lib/lexical';
import { MetricBlock } from '@/components/blocks/metric-block';
import { Accordion } from '@/components/blocks/accordion-block';
import { VerticalStepper } from '@/components/blocks/vertical-stepper-block';
import { Testimonial } from '@/components/blocks/testimonial-block';
import { ApiCard } from '@/components/blocks/api-card-block';
import { TableBlock } from '@/components/blocks/table-block';
import { FormBlock } from '@/components/blocks/form-block';
import { CTAStack } from '@/components/blocks/cta-stack-block';
import { BenefitBlock } from '@/components/blocks/benefit-block';
import { FormSectionBlock } from '@/components/blocks/form-section-block';
import { SelectFieldBlock, CheckboxFieldBlock, CheckboxGroupBlock, RadioGroupBlock, RecaptchaBlock, renderField } from '@/components/blocks/form-fields-block';
import { SalesLookupForm } from '@/components/blocks/sales-lookup-form';
import { AppDownloadBlock } from '@/components/blocks/app-download-block';
import { MediaBlock, ImagePlaceholderBlock, VideoPlayerBlock } from '@/components/blocks/media-block';
import { IconGridBlock } from '@/components/blocks/icon-grid-block';
import { CardGridBlock } from '@/components/blocks/card-grid-block';
import { MediaGridBlock } from '@/components/blocks/media-grid-block';
import { DataGridBlock } from '@/components/blocks/data-grid-block';



export type BlockProp = {
    blockType: string;
    [key: string]: any;
};


export function BlockRenderer({ 
    blocks, 
    isMCP = false, 
    theme = 'light',
    isDark: isDarkProp,
    noWrapper = false
}: { 
    blocks?: any[]; 
    isMCP?: boolean; 
    theme?: 'light' | 'dark';
    isDark?: boolean;
    noWrapper?: boolean;
}) {
    if (!blocks || blocks.length === 0) return null;

    const isDark = isDarkProp ?? theme === 'dark';

    const content = blocks.map((block, index) => {
        switch (block.blockType) {
            case 'badge':
                return (
                    <div key={index} className="inline-flex w-fit items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-[#f59120] to-[#9747ff] mb-2 lg:mb-4">
                        <span className="font-geist text-sm font-bold text-white tracking-wide">{block.text}</span>
                    </div>
                );
            case 'heading': {
                const HeadingTag = block.tag || 'h2';
                const sizeClass = block.tag === 'h1' ? 'text-5xl lg:text-7xl font-black tracking-tight leading-[1.05]' : block.tag === 'h3' ? 'text-xl lg:text-2xl' : 'text-3xl lg:text-4xl lg:text-[40px]';
                const colorClass = block.variant === 'gradient' 
                    ? 'bg-clip-text text-transparent bg-gradient-to-r from-[#F59120] to-[#9747ff]' 
                    : (isDark ? 'text-white' : 'text-neutral-900 dark:text-white');
                
                const renderText = (text: string, highlight?: string) => {
                    if (!highlight) return text;
                    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
                    return parts.map((part, i) => 
                        part.toLowerCase() === highlight.toLowerCase() 
                            ? <span key={i} className="bg-clip-text text-transparent bg-gradient-to-r from-[#f59120] to-[#9747ff]">{part}</span> 
                            : part
                    );
                };

                return (
                    <HeadingTag key={index} 
                        className={cn("font-aileron font-semibold mb-2", sizeClass, colorClass, block.className)}
                    >
                        {renderText(block.text, block.highlight)}
                    </HeadingTag>
                );
            }
            case 'logoGrid':
                return (
                    <div key={index} className="w-full flex flex-wrap justify-center items-center gap-8 lg:gap-12 mt-8 lg:mt-12">
                        {block.logos?.map((logo: any, idx: number) => (
                            <div key={idx} className={cn("rounded-[12px] p-6 flex items-center justify-center transition-transform hover:scale-105", isDark ? "bg-[#171717]" : "bg-white border border-neutral-100")} style={{ width: logo.width || '200px', height: logo.height || '80px' }}>
                                <img 
                                    src={logo.src} 
                                    alt={logo.alt || `Partner logo ${idx + 1}`} 
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                );
            case 'card':
                return (
                    <div key={index} 
                        className={cn("w-full border border-[#6F6F6F] rounded-[20px] shadow-2xl overflow-hidden", block.padding || 'p-8 lg:p-12')}
                        style={{ backgroundColor: block.backgroundColor && block.backgroundColor !== 'white' ? block.backgroundColor : (isDark ? '#171717' : '#FFFFFF') }}
                    >
                        <BlockRenderer blocks={block.blocks} isMCP={isMCP} isDark={isDark} />
                    </div>
                );
            case 'code':
                return (
                    <div key={index} className="flex flex-col w-full">
                        {block.windowTitle && (
                            <div className="flex items-center px-4 py-2 bg-[#171717] rounded-t-lg border-x border-t border-[#6f6f6f] w-fit font-aileron text-xs font-bold text-neutral-400">
                                {block.windowTitle}
                            </div>
                        )}
                        <div className="relative group">
                            <CodeBlock 
                                code={block.code} 
                                language={block.language || 'json'} 
                                className={cn("mt-0", block.windowTitle ? "rounded-tl-none border-t-0" : "")} 
                            />
                            {block.tryItLabel && (
                                <button className="absolute bottom-6 right-6 px-6 py-2 bg-[#1a1a1a] border border-[#6F6F6F] text-white font-bold rounded-lg hover:bg-neutral-800 transition-all shadow-xl">
                                    {block.tryItLabel}
                                </button>
                            )}
                        </div>
                    </div>
                );
            case 'richText': {
                const contentHtml = convertLexicalToHtml(block.content);
                if (block.variant === 'callout') {
                    return (
                        <div key={index} className="p-6 lg:p-10 rounded-xl bg-[#f59120]/10 border border-[#f59120]/20 text-[#f59120] mt-4 mb-4">
                            <div 
                                className="font-geist text-base md:text-lg leading-relaxed dark:text-orange-50 font-medium"
                                dangerouslySetInnerHTML={{ __html: contentHtml }}
                            />
                        </div>
                    );
                }
                return (
                    <div key={index} 
                        className={cn("font-geist text-sm md:text-base leading-relaxed", isMCP ? "text-neutral-600" : (isDark ? "text-white/90" : "text-[#A9ADB5]"))}
                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                    />
                );
            }
            case 'lists':
                if (block.variant === 'iconList') {
                    const renderIcon = (iconName: string) => {
                        switch(iconName) {
                            case 'map-pin': return <MapPin className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />;
                            case 'phone': return <Phone className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />;
                            case 'mail': return <Mail className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />;
                            case 'clock': return <Clock className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />;
                            case 'check': return <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />;
                            default: return <CheckCircle2 className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />;
                        }
                    };
                    const columns = block.columns || 1;
                    return (
                        <ul key={index} className={cn("grid gap-y-4 gap-x-8 mt-10 mb-10 w-full", columns === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1")}>
                            {block.items.map((item: any, i: number) => {
                                const itemText = item.text || item;
                                const html = convertLexicalToHtml(itemText);
                                return (
                                    <li key={i} className={cn("flex flex-row items-start gap-4 font-geist text-base lg:text-lg leading-relaxed group", isDark ? "text-white" : "text-neutral-600 dark:text-neutral-400")}>
                                        <div className="mt-1 transition-transform group-hover:scale-110">
                                            {renderIcon(item.icon || block.icon || 'check')}
                                        </div>
                                        <span 
                                            className="font-medium"
                                            dangerouslySetInnerHTML={{ __html: html }}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    );
                }
                return (
                    <div key={index} className="w-full mt-12 mb-8">
                        <ul className="columns-2 md:columns-4 lg:columns-6 gap-8 text-left max-w-5xl mx-auto">
                            {block.items.map((item: any, i: number) => {
                                const itemText = item.text || item;
                                const html = convertLexicalToHtml(itemText);
                                return (
                                    <li key={i} className={cn("font-geist text-sm md:text-base transition-colors cursor-default break-inside-avoid mb-4", isDark ? "text-white hover:text-orange-400" : "text-neutral-400 hover:text-white")}>
                                        <span dangerouslySetInnerHTML={{ __html: html }} />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            case 'note':
                return (
                    <div key={index} className="pl-6 border-l-4 border-orange-500 my-6">
                        <p className="font-geist text-sm text-neutral-400 leading-relaxed italic">
                            {block.text}
                        </p>
                    </div>
                );
            case 'accordion':
                return <Accordion key={index} items={block.items} />;
            case 'metric':
                return <MetricBlock key={index} value={block.value} description={block.description} icon={block.icon} theme={theme} />;
            case 'verticalStepper':
                return <VerticalStepper key={index} steps={block.steps} />;
            case 'testimonial':
                return <Testimonial block={block} key={index} isDark={isDark} />;
            case 'apiCard':
                return <ApiCard block={block} key={index} isDark={isDark} />;
            case 'table':
                return <TableBlock block={block} key={index} isDark={isDark} />;
            case 'select':
            case 'selectField':
                return <SelectFieldBlock block={block} key={index} isMCP={isMCP} isDark={isDark} />;
            case 'checkboxField':
                return <CheckboxFieldBlock block={block} key={index} isMCP={isMCP} isDark={isDark} />;
            case 'checkboxGroup':
                return <CheckboxGroupBlock block={block} key={index} isMCP={isMCP} isDark={isDark} />;
            case 'radioGroup':
                return <RadioGroupBlock block={block} key={index} isMCP={isMCP} isDark={isDark} />;
            case 'recaptcha':
                return <RecaptchaBlock key={index} isMCP={isMCP} isDark={isDark} />;
            case 'form':
                return <FormBlock block={block} key={index} isDark={isDark} />;
            case 'formSection':
                return <FormSectionBlock block={block} key={index} isMCP={isMCP} isDark={isDark} />;
            case 'ctaStack':
                return <CTAStack block={block} key={index} isDark={isDark} />;
            case 'benefit':
                return <BenefitBlock block={block} key={index} isDark={isDark} />;
            case 'salesLookupForm':
                return <SalesLookupForm key={index} block={block} isDark={isDark} />;
            case 'cta':
            case 'appStoreCta':
                if (block.buttons && Array.isArray(block.buttons)) {
                    return (
                        <div key={index} className="mt-8 flex flex-col md:flex-row gap-4 items-center w-full">
                            {block.buttons.map((button: any, i: number) => (
                                <a 
                                    key={i} 
                                    href={button.link || '#'} 
                                    className={cn(
                                        "px-8 py-3 rounded-lg font-bold transition-all w-full md:w-auto text-center font-aileron shadow-sm hover:shadow-md active:scale-95",
                                        (button.variant === 'primary' || button.variant === 'gradient') ? "bg-gradient-to-r from-[#F59120] to-[#9747FF] text-white shadow-[0_4px_15px_rgba(245,145,32,0.3)] hover:opacity-90" :
                                        button.variant === 'outline' ? (isMCP ? "border border-neutral-200 text-neutral-900 hover:bg-neutral-50" : "border border-neutral-700 text-white hover:bg-neutral-800") :
                                        "bg-white text-black hover:bg-neutral-200"
                                    )}
                                >
                                    {button.label || button.text}
                                </a>
                            ))}
                        </div>
                    );
                }
                return <Button key={index} variant={block.variant || 'primary'} size="lg" className="w-fit mt-4">{block.label}</Button>;
            case 'appDownload':
                return <AppDownloadBlock block={block} key={index} isDark={isDark} />;
            case 'iconGrid':
                return <IconGridBlock block={block} key={index} isDark={isDark} />;
            case 'media':
                return <MediaBlock block={block} key={index} isDark={isDark} />;
            case 'imagePlaceholder':
                return <ImagePlaceholderBlock block={block} key={index} />;
            case 'videoplayer':
                return <VideoPlayerBlock block={block} key={index} />;
            case 'cards':
                return <CardGridBlock block={block} key={index} isDark={isDark} />;
            case 'list':
                return (
                    <ul key={index} className="flex flex-col gap-4 mt-4">
                        {block.items.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-neutral-200 font-geist">
                                <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-[#f59120] flex items-center justify-center">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                );
            case 'mediaGrid':
                return <MediaGridBlock key={index} {...block} />;
            case 'dataGrid':
                return <DataGridBlock key={index} {...block} theme={theme} isDark={isDark} />;
            default:
                console.warn(`Block type "${block.blockType}" is not supported.`);
                return null;
        }
    });

    if (noWrapper) return <>{content}</>;

    return (
        <div className="flex flex-col gap-6 w-full">
            {content}
        </div>
    );
}
