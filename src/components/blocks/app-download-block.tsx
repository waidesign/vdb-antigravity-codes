import React from 'react';
import { cn } from '@/lib/utils';

export function AppDownloadBlock({ block, isDark }: { block: any, isDark: boolean }) {
    const themeClass = block.theme === 'dark' || !block.theme ? 'bg-black text-white hover:bg-neutral-900 border border-neutral-800' : 'bg-white text-black hover:bg-neutral-50 border border-neutral-200';
    
    return (
        <div className="flex flex-col gap-6 w-full">
            {block.title && (
                <h3 className={cn("font-aileron font-bold text-xl lg:text-2xl mb-2", isDark ? "text-white" : "text-neutral-900")}>{block.title}</h3>
            )}
            
            {block.qrCodes && (
                <div className="flex flex-row flex-wrap gap-6 items-start">
                    {block.qrCodes.map((qr: any, i: number) => (
                        <div key={i} className="flex flex-col gap-2">
                            <div className="bg-white p-2 rounded-lg w-24 h-24 lg:w-32 lg:h-32 shadow-xl border border-white/10">
                                <img src={qr.url} alt={qr.label || 'QR Code'} className="w-full h-full object-contain" />
                            </div>
                            {qr.label && <span className="text-[10px] text-neutral-500 font-geist font-medium uppercase tracking-wider">{qr.label}</span>}
                        </div>
                    ))}
                </div>
            )}

            <div className="flex flex-row flex-wrap gap-4 mt-2">
                {(block.playStoreUrl || block.googlePlayUrl) && (
                    <a 
                        href={block.playStoreUrl || block.googlePlayUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center px-5 py-2 rounded-xl bg-black border border-neutral-800 hover:bg-neutral-900 transition-all group shadow-lg min-w-[160px]"
                    >
                        <div className="w-7 h-7 flex items-center justify-center shrink-0">
                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                <path d="M10.43 21.23C4.7 24.4 0 31.46 0 42.47v427.06c0 11.01 4.7 18.06 10.43 21.23L13.56 494 256 251.52 13.56 18z" fill="#00E3FF"/>
                                <path d="M339.46 334.86l-83.46-83.34L13.56 494c5.73 3.17 14.95 2.15 19.85-1l306.05-158.14z" fill="#00ED7A"/>
                                <path d="M495.12 251.52c4.9 3.14 4.9 8.24 0 11.38L339.46 348.42l-83.46-83.34 83.46-83.34 155.66 89.78z" fill="#FFC100"/>
                                <path d="M339.46 178.18L33.41 19c-4.9-3.15-14.12-4.17-19.85-1l242.44 243.52 83.47-83.34z" fill="#FF3A44"/>
                            </svg>
                        </div>
                        <div className="flex flex-col ml-3 text-left">
                            <span className="text-[9px] uppercase font-bold text-white/70 leading-none mb-0.5 tracking-tight">Get it on</span>
                            <span className="text-lg font-black text-white leading-none whitespace-nowrap">Google Play</span>
                        </div>
                    </a>
                )}
                {block.appStoreUrl && (
                    <a 
                        href={block.appStoreUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center px-5 py-2 rounded-xl bg-black border border-neutral-800 hover:bg-neutral-900 transition-all group shadow-lg min-w-[160px]"
                    >
                        <div className="w-7 h-7 flex items-center justify-center shrink-0">
                            <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white fill-current">
                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                            </svg>
                        </div>
                        <div className="flex flex-col ml-3 text-left">
                            <span className="text-[9px] uppercase font-bold text-white/70 leading-none mb-0.5 tracking-tight">Download on the</span>
                            <span className="text-lg font-black text-white leading-none whitespace-nowrap">App Store</span>
                        </div>
                    </a>
                )}
            </div>
        </div>
    );
}
