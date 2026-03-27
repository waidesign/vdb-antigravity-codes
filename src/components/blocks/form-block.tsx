"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function FormBlock({ block, isDark }: { block: any, isDark: boolean }) {
    const { title, fields, submitLabel } = block;
    return (
        <div className="w-full">
            {title && <h3 className={cn("font-aileron font-bold text-lg mb-3", isDark ? "text-white" : "text-neutral-900")}>{title}</h3>}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full" onSubmit={(e) => e.preventDefault()}>
                {fields.map((field: any, idx: number) => (
                    <div key={idx} className={cn("w-full flex flex-col gap-1", field.type === 'textarea' ? "col-span-full" : "")}>
                        {field.label && (
                            <label className={cn("text-xs font-aileron font-medium uppercase tracking-wider", isDark ? "text-neutral-400" : "text-neutral-500")}>
                                {field.label} {field.required && <span className="text-red-500">*</span>}
                            </label>
                        )}
                        {field.type === 'textarea' ? (
                            <textarea 
                                placeholder={field.placeholder}
                                className={cn(
                                    "w-full rounded-lg p-2.5 min-h-[80px] font-aileron text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50",
                                    isDark ? "bg-neutral-900 text-white border-neutral-800" : "bg-white text-black border-neutral-200"
                                )}
                            />
                        ) : (
                            <input 
                                type={field.type || 'text'}
                                placeholder={field.placeholder}
                                className={cn(
                                    "w-full rounded-lg p-2.5 font-aileron text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50",
                                    isDark ? "bg-neutral-900 text-white border-neutral-800" : "bg-white text-black border-neutral-200"
                                )}
                            />
                        )}
                    </div>
                ))}
                {submitLabel && (
                    <div className="pt-2">
                        <Button variant="primary" size="lg" className="flex items-center gap-2">
                            {submitLabel}
                        </Button>
                    </div>
                )}
            </form>
        </div>
    );
}
