"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
// @ts-ignore
import { BlockRenderer } from '@/components/sections/block-renderer';

export function Accordion({ items }: { items: any[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="flex flex-col w-full border-t border-neutral-800">
            {items.map((item, i) => (
                <AccordionItem 
                    key={i}
                    title={item.title}
                    blocks={item.blocks}
                    isOpen={openIndex === i}
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                />
            ))}
        </div>
    );
}

function AccordionItem({ title, blocks, isOpen, onClick }: { title: string, blocks: any[], isOpen: boolean, onClick: () => void }) {
    return (
        <div className="border-b border-neutral-800 overflow-hidden">
            <button 
                onClick={onClick}
                className="w-full py-6 flex flex-row items-center justify-between text-left group"
            >
                <span className={`font-aileron font-bold text-lg lg:text-xl transition-colors ${isOpen ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'}`}>
                    {title}
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : 'text-neutral-500'}`} />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className="pb-8 pl-4 pr-4">
                            <BlockRenderer blocks={blocks} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
