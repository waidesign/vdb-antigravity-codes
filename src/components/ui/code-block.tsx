"use client";
import { useState } from "react";
import { Copy, Check, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
    code: string;
    language?: string;
    filename?: string;
    copyable?: boolean;
    className?: string;
}

export function CodeBlock({ code, language = "json", filename, copyable = true, className }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={cn("rounded-[16px] border border-[#6F6F6F] overflow-hidden bg-[#171717]", className)}>
            <div className="flex items-center justify-between gap-3 px-[24px] py-[16px] bg-[#171717] border-b border-[#6F6F6F]">
                <div className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-neutral-400" />
                    <span className="font-semibold text-[16px] text-[rgba(255,255,255,0.92)] uppercase">
                        {language}
                    </span>
                    {filename && <span className="text-sm text-neutral-500 font-mono ml-4">{filename}</span>}
                </div>
                {copyable && (
                    <button
                        onClick={handleCopy}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm text-[rgba(255,255,255,0.92)] hover:bg-[#2a2a2a] transition-all"
                    >
                        {copied
                            ? <><Check className="h-4 w-4 text-green-400" /><span className="text-green-400">Copied!</span></>
                            : <><Copy className="h-4 w-4" /><span>Copy</span></>
                        }
                    </button>
                )}
            </div>
            <div className="w-full overflow-hidden bg-[#171717] p-2">
                <div className="flex rounded-xl overflow-hidden">
                    <pre className="flex-1 p-4 overflow-x-auto text-[16px] bg-[#171717] scrollbar-thin">
                        <code className={cn("font-mono text-[rgba(255,255,255,0.92)] leading-[24px]", `language-${language}`)}>
                            {code}
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    );
}
