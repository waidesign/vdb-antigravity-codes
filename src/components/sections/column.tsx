import React from 'react';
import { BlockRenderer, BlockProp } from './block-renderer';
import { cn } from '@/lib/utils';

export type ColumnProps = {
    blocks?: BlockProp[];
    verticalAlignment?: 'top' | 'center' | 'bottom';
    horizontalAlignment?: 'left' | 'center' | 'right';
    appearance?: 'default' | 'card' | 'highlight';
    isMCP?: boolean;
    isDark?: boolean;
    className?: string;
    theme?: 'light' | 'dark';
};

const alignmentMap = {
    top: 'justify-start',
    center: 'justify-center',
    bottom: 'justify-end',
};

const horizontalAlignmentMap = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
};

const getAppearanceClasses = (appearance: string, isDark: boolean) => {
    switch (appearance) {
        case 'card':
            return cn(
                'rounded-2xl p-6 lg:p-8 shadow-sm border',
                isDark ? 'bg-[#171717] border-neutral-800' : 'bg-white border-neutral-200'
            );
        case 'highlight':
            return cn(
                'rounded-2xl p-6 lg:p-8 shadow-sm border',
                isDark ? 'bg-[#171717] border-[#f59120]/40' : 'bg-orange-50/50 border-orange-100'
            );
        default:
            return '';
    }
};

export function Column({ 
    blocks, 
    verticalAlignment = 'top', 
    horizontalAlignment = 'left',
    appearance = 'default', 
    isMCP = false, 
    isDark = false,
    className,
    theme = 'light'
}: ColumnProps) {
    const effectiveIsDark = isDark || theme === 'dark';

    return (
        <div className={cn(
            "flex flex-col flex-1 w-full", 
            alignmentMap[verticalAlignment],
            horizontalAlignmentMap[horizontalAlignment],
            getAppearanceClasses(appearance, effectiveIsDark), 
            className
        )}>
            {blocks && <BlockRenderer blocks={blocks} isDark={effectiveIsDark} theme={theme} />}
        </div>
    );
}
