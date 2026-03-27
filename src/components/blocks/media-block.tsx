import React from 'react';
import { cn } from '@/lib/utils';

export function MediaBlock({ block, isDark }: { block: any, isDark: boolean }) {
    if (block.mediaType === 'video') {
        return (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-neutral-800">
                <video src={block.url} controls className="w-full h-full object-cover" />
            </div>
        );
    }
    return (
        <div className="relative w-full rounded-2xl overflow-hidden">
            <img src={block.url} alt={block.alt || ''} className="w-full h-auto object-cover" />
        </div>
    );
}

export function ImagePlaceholderBlock({ block }: { block: any }) {
    return (
        <div className="relative w-full rounded-2xl overflow-hidden bg-[#111111] border border-[#6F6F6F] flex flex-col items-center justify-center gap-4 p-12" style={{ aspectRatio: block.aspectRatio || '4/3' }}>
            <div className="w-16 h-16 rounded-2xl bg-neutral-800 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-500">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                </svg>
            </div>
            {block.label && <p className="font-aileron text-sm text-neutral-500 text-center">{block.label}</p>}
        </div>
    );
}

export function VideoPlayerBlock({ block }: { block: any }) {
    return (
        <div className="relative w-full rounded-2xl overflow-hidden bg-[#111111] border border-[#6F6F6F] aspect-video flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F59120] to-[#9747FF] flex items-center justify-center shadow-lg shadow-orange-500/30">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="translate-x-0.5">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
            </div>
            <p className="font-aileron text-sm text-neutral-500 text-center">{block.title || block.alt || 'Video Placeholder'}</p>
        </div>
    );
}
