"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Section, { SectionProps } from './section';

export type TabItem = {
    label: string;
    rows: (SectionProps & { id?: string })[];
};

export type UniqueTabSectionProps = {
    tabs: TabItem[];
    className?: string;
    containerClassName?: string;
    initialTab?: number;
    id?: string;
    isDark?: boolean;
    theme?: 'dark' | 'light';
};

export function UniqueTabSection({
    tabs,
    className,
    containerClassName,
    initialTab = 0,
    isDark = true,
    theme = 'dark',
    id
}: UniqueTabSectionProps) {
    const [activeTab, setActiveTab] = useState(initialTab);

    if (!tabs || tabs.length === 0) return null;

    return (
        <section className={cn("w-full bg-[#000000] py-16 lg:py-24 dark", className)} id={id}>
            <div className={cn("max-w-7xl mx-auto px-6 lg:px-12", containerClassName)}>
                {/* Tabs Navigation */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-16 lg:mb-24">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={cn(
                                "px-6 py-3 rounded-xl font-aileron font-bold text-sm lg:text-base transition-all relative overflow-hidden",
                                activeTab === index
                                    ? "bg-gradient-to-r from-[#F59120] to-[#9747FF] text-white shadow-[0_4px_15px_rgba(245,145,32,0.3)]"
                                    : (isDark ? "bg-[#171717] text-neutral-400 hover:bg-neutral-800" : "bg-[#F2F2F2] text-neutral-600 hover:bg-neutral-200")
                            )}
                        >
                            {tab.label}
                            {activeTab === index && (
                                <motion.div
                                    layoutId="activeTabGlow"
                                    className="absolute inset-0 bg-white/5 pointer-events-none"
                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="w-full"
                        >
                            {tabs[activeTab].rows.map((row, rowIndex) => (
                                <Section
                                    key={row.id || rowIndex}
                                    {...row}
                                    isDark={isDark}
                                    theme={theme}
                                    className={cn("!py-0 !px-0 bg-transparent overflow-visible", row.className)}
                                    id={row.id}
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

export default UniqueTabSection;
