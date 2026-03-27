import React from 'react';
import { cn } from '@/lib/utils';

export function CardGridBlock({ block, isDark }: { block: any, isDark: boolean }) {
    if (block.variant === 'timeline') {
        return (
            <div className="relative max-w-6xl mx-auto w-full mt-16 mb-8">
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#9747ff]/50 to-transparent -translate-x-1/2 hidden md:block" />
                <div className="flex flex-col gap-16 md:gap-24 w-full">
                    {block.items.map((item: any, i: number) => {
                        const isEven = i % 2 !== 0;
                        return (
                            <div key={i} className={`flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-20 lg:gap-32 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                <div className="w-full md:w-1/2 flex justify-center z-10">
                                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#171717] border border-[#6F6F6F] shadow-2xl p-4 lg:p-8 flex items-center justify-center">
                                        {item.imageUrl ? <img src={item.imageUrl} alt={item.title} className="w-full h-full object-contain drop-shadow-2xl rounded-lg" /> : <div className="w-full h-full bg-neutral-900 rounded-lg animate-pulse" />}
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col justify-center z-10">
                                    <div className="max-w-md w-full">
                                        {item.badge && (
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9747ff] to-[#f59120] p-[1px] shadow-[0_0_20px_rgba(151,71,255,0.4)] mb-6 flex items-center justify-center">
                                                <div className="w-full h-full bg-[#131313] rounded-full flex items-center justify-center text-white font-black text-lg">{item.badge}</div>
                                            </div>
                                        )}
                                        {item.title && <h3 className="text-white font-aileron font-bold text-3xl mb-4">{item.title}</h3>}
                                        {item.description && <p className="font-geist text-neutral-400 text-lg leading-relaxed">{item.description}</p>}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
    
    if (block.variant === 'step-cards') {
        return (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 w-full">
                {block.items.map((item: any, i: number) => (
                    <div key={i} className="flex flex-col bg-[#171717] border border-[#6F6F6F] rounded-[2rem] p-8 lg:p-10 shadow-2xl relative overflow-hidden group">
                        <div className="flex-grow flex flex-col">
                            {item.badge && <div className="text-5xl lg:text-6xl font-black text-[#f59120] mb-6 tracking-tighter">{item.badge}</div>}
                            {item.title && <h3 className="text-white font-aileron font-bold text-2xl mb-4">{item.title}</h3>}
                            {item.description && <p className="font-geist text-neutral-400 text-base leading-relaxed">{item.description}</p>}
                        </div>
                        {item.imageUrl && (
                            <div className="w-full mt-auto flex justify-center translate-y-8 group-hover:translate-y-6 transition-transform duration-300">
                                <img src={item.imageUrl} alt={item.title || "Step Graphic"} className="w-full h-auto rounded-t-2xl border border-[#6F6F6F] shadow-2xl" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    }

    if (block.variant === 'step-icons') {
        return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mt-12 w-full">
                {block.items.map((item: any, i: number) => (
                    <div key={i} className="flex flex-col items-center text-center gap-5">
                        <div className="w-16 h-16 rounded-full bg-[#f5b620] flex items-center justify-center shadow-lg">
                            {item.iconUrl ? <img src={item.iconUrl} alt={item.title || "Icon"} className="w-8 h-8 object-contain" /> : <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                        </div>
                        <div>
                            {item.title && <h3 className="text-white font-aileron font-bold text-lg mb-2">{item.title}</h3>}
                            {item.description && <p className="font-geist text-white/90 text-sm leading-relaxed max-w-[250px] mx-auto">{item.description}</p>}
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (block.variant === 'bentoSteps') {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {block.items.map((item: any, i: number) => (
                    <div key={i} className={`flex flex-col gap-3 p-6 lg:p-8 rounded-2xl bg-[#171717] border border-[#6F6F6F] shadow-lg ${item.fullWidth ? 'md:col-span-2' : ''}`}>
                        {item.badge && <div className="w-8 h-8 rounded text-[#f59120] border border-[#f59120]/30 flex items-center justify-center font-bold text-sm bg-[#f59120]/10 mb-2">{item.badge}</div>}
                        {item.title && <h3 className="text-white font-aileron font-semibold text-xl">{item.title}</h3>}
                        {item.description && <p className="font-geist text-neutral-400 text-sm leading-relaxed">{item.description}</p>}
                    </div>
                ))}
            </div>
        );
    }

    if (block.variant === 'metrics') {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {block.items.map((item: any, i: number) => (
                    <div key={i} className={cn("flex flex-col gap-2 p-8 rounded-xl border shadow-sm text-center justify-center", isDark ? "bg-[#171717] border-[#6F6F6F]" : "bg-white border-neutral-100")}>
                        <span className="font-aileron font-bold text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#f59120] to-[#cb5cff]">{item.value || item.title}</span>
                        <span className={cn("font-geist text-sm font-medium max-w-[150px] mx-auto", isDark ? "text-neutral-400" : "text-neutral-600")}>{item.description}</span>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-6">
            {block.items.map((card: any, i: number) => (
                <div key={i} className={cn("flex flex-col p-8 rounded-2xl border shadow-sm hover:shadow-md transition-shadow items-center text-center justify-center gap-4", isDark ? "bg-[#171717] border-[#6F6F6F]" : "bg-white border-neutral-100")}>
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-50 text-[#f59120] border border-orange-100 dark:bg-orange-500/10 dark:border-orange-500/20">
                        {card.iconUrl ? <img src={card.iconUrl} alt="" className="w-6 h-6 object-contain" /> : <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fillOpacity="0.2" /><path d="M12 8v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                    </div>
                    <div>
                        {card.title && <h3 className={cn("font-aileron font-semibold text-lg mb-2", isDark ? "text-white" : "text-neutral-900")}>{card.title}</h3>}
                        {card.description && <p className={cn("font-geist text-sm leading-relaxed", isDark ? "text-neutral-400" : "text-neutral-600")}>{card.description}</p>}
                    </div>
                </div>
            ))}
        </div>
    );
}
