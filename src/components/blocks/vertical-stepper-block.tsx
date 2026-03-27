import React from 'react';
// @ts-ignore
import { BlockRenderer } from '@/components/sections/block-renderer';

export function VerticalStepper({ steps }: { steps: any[] }) {
    return (
        <div className="flex flex-col w-full">
            {steps.map((step, i) => (
                <div key={i} className="relative flex gap-8 group">
                    {/* Visual Connector */}
                    <div className="flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full border-2 border-[#ff8a05] flex items-center justify-center bg-black relative z-10">
                            <div className="w-2 h-2 rounded-full bg-[#ff8a05]" />
                        </div>
                        {i !== steps.length - 1 && (
                            <div className="w-[2px] h-full bg-gradient-to-b from-[#ff8a05] to-[#ff5400]/20 my-1" />
                        )}
                    </div>

                    {/* Content */}
                    <div className="pb-16 pt-0.5">
                        <h3 className="text-xl lg:text-2xl font-aileron font-bold text-[#ff8a05] mb-4">
                            {step.title}
                        </h3>
                        <div className="text-neutral-400">
                            <BlockRenderer blocks={step.blocks} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
