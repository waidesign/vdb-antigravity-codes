"use client";

import React from 'react';
import { Column, ColumnProps } from './column';
import { cn } from '@/lib/utils';

export type TwoColumnSectionWithMediaProps = {
    layout?: 'one-column' | 'two-column' | 'three-column' | 'four-column' | 'five-column' | 'six-column' | 'seven-column' | 'eight-column' | 'nine-column' | 'ten-column';
    columns: ColumnProps[];
    theme?: 'dark' | 'light';
    spacing?: 'none' | 'small' | 'medium' | 'large';
    padding?: 'none' | 'small' | 'medium' | 'large';
    className?: string;
    isMCP?: boolean;
    isDark?: boolean;
};

const layoutMap = {
    'one-column': 'grid-cols-1',
    'two-column': 'grid-cols-1 lg:grid-cols-2',
    'three-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    'four-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    'five-column': 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
    'six-column': 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
    'seven-column': 'grid-cols-2 md:grid-cols-4 lg:grid-cols-7',
    'eight-column': 'grid-cols-2 md:grid-cols-4 lg:grid-cols-8',
    'nine-column': 'grid-cols-3 md:grid-cols-6 lg:grid-cols-9',
    'ten-column': 'grid-cols-2 md:grid-cols-5 lg:grid-cols-10',
};

const spacingMap = {
    none: 'gap-0',
    small: 'gap-4 lg:gap-8',
    medium: 'gap-8 lg:gap-16',
    large: 'gap-12 lg:gap-24',
};

const paddingMap = {
    none: 'py-0',
    small: 'py-12 lg:py-16',
    medium: 'py-20 lg:py-24',
    large: 'py-24 lg:py-32',
};

export function TwoColumnSectionWithMedia({ 
    layout = 'two-column', 
    columns, 
    theme = 'dark',
    spacing = 'medium',
    padding = 'medium',
    className,
    isMCP = false,
    isDark = true
}: TwoColumnSectionWithMediaProps) {
    if (!columns || columns.length === 0) return null;

    // Background and text color based on theme
    const bgClass = theme === 'dark' ? 'bg-[#000000] dark' : 'bg-[#F8F9FA]';
    
    return (
        <section className={cn(
            "relative w-full px-6 lg:px-20 overflow-hidden", 
            bgClass,
            paddingMap[padding],
            className
        )}>
            <div className={cn(
                "max-w-7xl mx-auto grid items-start", 
                layoutMap[layout] || layoutMap['two-column'],
                spacingMap[spacing]
            )}>
                {columns.map((col, index) => (
                    <Column 
                        key={index} 
                        {...col}
                        isMCP={isMCP}
                        isDark={isDark}
                    />
                ))}
            </div>
            
            {/* Subtle background glow for dark mode */}
            {theme === 'dark' && (
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                    <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-brand-primary/5 blur-[120px] rounded-full" />
                    <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/5 blur-[120px] rounded-full" />
                </div>
            )}
        </section>
    );
}

export default TwoColumnSectionWithMedia;
