import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function SalesLookupForm({ block, isDark }: { block: any, isDark: boolean }) {
    return (
        <div className={cn(
            "rounded-[2rem] p-8 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.15)] w-full max-w-xl self-center lg:self-end",
            isDark ? "bg-[#171717] border border-neutral-800" : "bg-white"
        )}>
            <h3 className={cn("font-aileron font-bold text-2xl lg:text-3xl text-center mb-8", isDark ? "text-white" : "text-black")}>
                {block.title || 'Lookup Sales History'}
            </h3>
            
            <div className="flex mb-8">
                <div className="inline-flex items-center px-6 py-2 rounded-lg bg-[#2D5BFF] text-white font-aileron font-bold text-sm shadow-lg relative">
                    By VIN
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#2D5BFF] rotate-45" />
                </div>
            </div>

            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                <div className="w-full">
                    <input 
                        type="text" 
                        placeholder="Enter VIN" 
                        className={cn(
                            "w-full border rounded-lg px-6 py-4 font-aileron focus:outline-none focus:ring-1 transition-all",
                            isDark 
                                ? "bg-[#171717] border-neutral-800 text-white focus:border-[#2D5BFF] focus:ring-[#2D5BFF]" 
                                : "bg-white border-neutral-200 text-neutral-900 focus:border-[#2D5BFF] focus:ring-[#2D5BFF]"
                        )}
                    />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                        type="email" 
                        placeholder="Enter Email Address" 
                        className={cn(
                            "w-full border rounded-lg px-6 py-4 font-aileron focus:outline-none focus:ring-1 transition-all",
                            isDark 
                                ? "bg-[#171717] border-neutral-800 text-white focus:border-[#2D5BFF] focus:ring-[#2D5BFF]" 
                                : "bg-white border-neutral-200 text-neutral-900 focus:border-[#2D5BFF] focus:ring-[#2D5BFF]"
                        )}
                    />
                    <input 
                        type="tel" 
                        placeholder="Enter Phone" 
                        className={cn(
                            "w-full border rounded-lg px-6 py-4 font-aileron focus:outline-none focus:ring-1 transition-all",
                            isDark 
                                ? "bg-[#171717] border-neutral-800 text-white focus:border-[#2D5BFF] focus:ring-[#2D5BFF]" 
                                : "bg-white border-neutral-200 text-neutral-900 focus:border-[#2D5BFF] focus:ring-[#2D5BFF]"
                        )}
                    />
                </div>

                <Button className="w-full py-6 mt-4 bg-[#2D5BFF] hover:bg-blue-600 text-white font-aileron font-bold text-lg rounded-xl transition-all shadow-xl hover:shadow-2xl active:scale-[0.98]">
                    Search
                </Button>
            </form>
        </div>
    );
}
