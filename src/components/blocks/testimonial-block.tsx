import React from 'react';
import { cn } from '@/lib/utils';

export function Testimonial({ block, isDark }: { block: any, isDark: boolean }) {
    const { quote, author, alignment = 'center' } = block;
    return (
        <div className={cn(
            "flex flex-col w-full relative",
            alignment === 'center' ? "items-center text-center px-4" : "items-start text-left"
        )}>
            <div className="flex items-start gap-4 lg:gap-8 w-full justify-center">
                {/* Left Quote */}
                <div className="flex-shrink-0 hidden md:block">
                    <svg width="32" height="26" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.96 40C8.64 40 5.12 38.48 2.4 35.44C-0.32 32.32 -1.04 28 0.24 22.48L5.76 0H18.96L14.64 22.48H21.6V40H12.96ZM39.36 40C35.04 40 31.52 38.48 28.8 35.44C26.08 32.32 25.36 28 26.64 22.48L32.16 0H45.36L41.04 22.48H48V40H39.36Z" fill="#FF8A05"/>
                    </svg>
                </div>

                {/* Quote Text */}
                <p className={cn(
                    "font-aileron font-semibold text-base lg:text-lg leading-relaxed max-w-4xl",
                    isDark ? "text-white" : "text-neutral-900"
                )}>
                    {quote}
                </p>

                {/* Right Quote */}
                <div className="flex-shrink-0 hidden md:block self-end">
                    <svg width="32" height="26" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                        <path d="M12.96 40C8.64 40 5.12 38.48 2.4 35.44C-0.32 32.32 -1.04 28 0.24 22.48L5.76 0H18.96L14.64 22.48H21.6V40H12.96ZM39.36 40C35.04 40 31.52 38.48 28.8 35.44C26.08 32.32 25.36 28 26.64 22.48L32.16 0H45.36L41.04 22.48H48V40H39.36Z" fill="#FF8A05"/>
                    </svg>
                </div>
            </div>

            {/* Author Attribution */}
            {author && (
                <div className="mt-12 flex flex-col items-center">
                    {author.avatar && (
                        <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-neutral-800">
                            <img src={author.avatar.url} alt={author.name} className="w-full h-full object-cover" />
                        </div>
                    )}
                    <h4 className="text-white font-aileron font-bold text-lg">{author.name}</h4>
                    <p className="text-neutral-500 font-aileron text-sm uppercase tracking-widest mt-1">
                        {author.role} {author.company && `| ${author.company}`}
                    </p>
                </div>
            )}
        </div>
    );
}
