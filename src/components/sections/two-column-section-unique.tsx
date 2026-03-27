import React from 'react';
import { Column, ColumnProps } from './column';
import { BlockRenderer, BlockProp } from './block-renderer';
import { cn } from '@/lib/utils';

export type TwoColumnSectionUniqueProps = {
    layout?: 'one-column' | 'two-column' | 'three-column' | 'four-column' | 'five-column' | 'six-column' | 'seven-column' | 'eight-column' | 'nine-column' | 'ten-column';
    alignment?: 'left' | 'center' | 'right';
    headerBlocks?: BlockProp[];
    columns: ColumnProps[];
    footerBlocks?: BlockProp[];
    className?: string;
    containerClassName?: string;
    id?: string;
    theme?: 'light' | 'dark';
    isDark?: boolean;
};

const layoutMap = {
    'one-column': 'grid-cols-1 w-full',
    'two-column': 'grid-cols-1 lg:grid-cols-2',
    'three-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    'four-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    'five-column': 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
    'six-column': 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
    'seven-column': 'grid-cols-2 md:grid-cols-4 lg:grid-cols-7',
    'eight-column': 'grid-cols-2 md:grid-cols-4 lg:grid-cols-8',
    'nine-column': 'grid-cols-3 md:grid-cols-5 lg:grid-cols-9',
    'ten-column': 'grid-cols-3 md:grid-cols-5 lg:grid-cols-10',
};

const alignmentMap = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
};

export function TwoColumnSectionUnique({ 
    layout = 'two-column', 
    alignment = 'center',
    headerBlocks,
    columns, 
    footerBlocks,
    className,
    containerClassName,
    id,
    theme = 'dark',
    isDark = true
}: TwoColumnSectionUniqueProps) {
    return (
        <section 
            id={id}
            className={cn(
                "relative w-full py-16 lg:py-32 px-6 lg:px-12 transition-colors duration-300", 
                theme === 'dark' ? "bg-[#000000] text-white dark" : "bg-white text-black",
                className
            )}
        >
            <div className={cn("max-w-7xl mx-auto flex flex-col", alignmentMap[alignment], containerClassName)}>
                {/* Header Blocks Area */}
                {headerBlocks && headerBlocks.length > 0 && (
                    <div className="w-full mb-16 lg:mb-24 flex flex-col items-center text-center">
                        <BlockRenderer blocks={headerBlocks} />
                    </div>
                )}

                {/* Main Content Grid */}
                {columns && columns.length > 0 && (
                    <div className={cn(
                        "relative z-10 grid gap-12 lg:gap-24 w-full", 
                        layoutMap[layout] || layoutMap['two-column']
                    )}>
                        {columns.map((col, index) => (
                            <Column 
                                key={index} 
                                {...col}
                                isDark={isDark}
                                theme={theme}
                            />
                        ))}
                    </div>
                )}

                {/* Footer Blocks Area */}
                {footerBlocks && footerBlocks.length > 0 && (
                    <div className="w-full mt-16 lg:mt-24 flex flex-col items-center text-center">
                        <BlockRenderer blocks={footerBlocks} />
                    </div>
                )}
            </div>
        </section>
    );
}

export default TwoColumnSectionUnique;
