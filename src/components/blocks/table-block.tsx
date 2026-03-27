import React from 'react';
import { cn } from '@/lib/utils';
import { convertLexicalToHtml } from '@/lib/lexical';

export function TableBlock({ block, isDark }: { block: any, isDark: boolean }) {
    const { headers, rows, highlightColumns = [] } = block;
    return (
        <div className={cn(
            "w-full overflow-x-auto rounded-xl border",
            isDark ? "border-neutral-800 bg-[#171717]" : "border-neutral-200 bg-white"
        )}>
            <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                    <tr className={cn("border-b", isDark ? "border-neutral-800" : "border-neutral-200")}>
                        {headers.map((header: string, idx: number) => (
                            <th 
                                key={idx} 
                                className={cn(
                                    "p-6 text-sm font-aileron font-bold uppercase tracking-wider",
                                    highlightColumns.includes(idx) ? "text-[#FF8A05]" : (isDark ? "text-white" : "text-neutral-900")
                                )}>
                                <span dangerouslySetInnerHTML={{ __html: convertLexicalToHtml(header) }} />
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row: any, rowIdx: number) => (
                        <tr 
                            key={rowIdx} 
                            className={cn(
                                "group transition-colors",
                                rowIdx !== rows.length - 1 ? (isDark ? "border-b border-neutral-900" : "border-b border-neutral-100") : ""
                            )}>
                            {row.cells.map((cell: any, cellIdx: number) => (
                                <td 
                                    key={cellIdx} 
                                    className={cn(
                                        "p-6 text-base font-aileron",
                                        highlightColumns.includes(cellIdx) ? "text-[#FF8A05] font-bold" : (isDark ? "text-neutral-400" : "text-neutral-600")
                                    )}>
                                    <span dangerouslySetInnerHTML={{ __html: convertLexicalToHtml(cell) }} />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
