import { ExternalLink, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "./badge";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

const methodStyles: Record<HttpMethod, string> = {
    GET: "bg-green-500/10 text-green-400 border-green-500/25 ring-green-500/20",
    POST: "bg-blue-500/10  text-blue-400  border-blue-500/25  ring-blue-500/20",
    PUT: "bg-orange-500/10 text-orange-400 border-orange-500/25 ring-orange-500/20",
    PATCH: "bg-purple-500/10 text-purple-400 border-purple-500/25 ring-purple-500/20",
    DELETE: "bg-red-500/10   text-red-400   border-red-500/25   ring-red-500/20",
};

interface ApiEndpointCardProps {
    method: HttpMethod;
    endpoint: string;
    title: string;
    description: string;
    tags?: string[];
    deprecated?: boolean;
    className?: string;
    onTryIt?: () => void;
}

export function ApiEndpointCard({
    method, endpoint, title, description, tags, deprecated, className, onTryIt,
}: ApiEndpointCardProps) {
    return (
        <div className={cn(
            "group rounded-xl border border-neutral-800 light:border-neutral-700 bg-neutral-800/30 hover:border-neutral-700 hover:bg-neutral-800/50 transition-all duration-200 p-3 sm:p-4 cursor-pointer",
            deprecated && "opacity-60",
            className
        )}>
            <div className="flex items-start gap-3 mb-2.5">
                <span className={cn(
                    "flex-shrink-0 mt-0.5 px-2 py-0.5 rounded border text-xs font-bold font-mono ring-1",
                    methodStyles[method] ?? methodStyles.GET
                )}>
                    {method}
                </span>
                <code className="text-sm text-neutral-300 font-mono flex-1 break-all leading-relaxed">
                    {endpoint}
                </code>
                {deprecated && <Badge variant="warning" size="sm">Deprecated</Badge>}
            </div>
            <div className="ml-0 pl-0">
                <h4 className="text-sm font-semibold text-neutral-200 mb-1">{title}</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">{description}</p>
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                        {tags.map((tag) => (
                            <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-neutral-700/60 text-neutral-400 border border-neutral-700">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            {onTryIt && (
                <button
                    onClick={onTryIt}
                    className="mt-3 flex items-center gap-1 text-xs text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    <ExternalLink className="h-3 w-3" />
                    Try it
                </button>
            )}
        </div>
    );
}
