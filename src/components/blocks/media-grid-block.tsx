import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export interface MediaGridBlockProps {
    images: {
        url: string;
        alt?: string;
    }[];
    className?: string;
    columns?: number;
}

export function MediaGridBlock({ images, className, columns = 4 }: MediaGridBlockProps) {
    if (!images || images.length === 0) return null;

    return (
        <div className={cn(
            "grid gap-4 w-full",
            columns === 2 ? "grid-cols-1 sm:grid-cols-2" : 
            columns === 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : 
            "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
            className
        )}>
            {images.map((image, idx) => (
                <div key={idx} className="relative aspect-[4/3] w-full bg-neutral-900 rounded-xl overflow-hidden shadow-sm border border-neutral-800">
                    <img 
                        src={image.url} 
                        alt={image.alt || `Media ${idx + 1}`} 
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                    />
                </div>
            ))}
        </div>
    );
}

export default MediaGridBlock;
