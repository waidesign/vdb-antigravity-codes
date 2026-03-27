import React from 'react';
import { cn } from '@/lib/utils';
// @ts-ignore
import { BlockRenderer } from '@/components/sections/block-renderer';

export function FormSectionBlock({ block, isMCP, isDark }: { block: any, isMCP: boolean, isDark: boolean }) {
    const { title, blocks } = block;
    return (
        <div className="w-full space-y-3">
            {title && (
                <div className={cn("border-b pb-2", isDark ? "border-neutral-800" : "border-neutral-200")}>
                    <h3 className={cn("font-aileron font-bold text-lg", isDark ? "text-white" : "text-neutral-900")}>{title}</h3>
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full pt-1">
                <BlockRenderer blocks={blocks} isMCP={isMCP} theme={isDark ? 'dark' : 'light'} noWrapper={true} />
            </div>
        </div>
    );
}
