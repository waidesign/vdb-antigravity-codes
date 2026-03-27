import { cn } from "@/lib/utils";

type Status = "operational" | "degraded" | "outage" | "maintenance";

const statusConfig: Record<Status, { label: string; color: string; dot: string; bg: string }> = {
    operational: { label: "Operational", color: "text-green-400", dot: "bg-green-400", bg: "bg-green-500/10 border-green-500/20" },
    degraded: { label: "Degraded", color: "text-orange-400", dot: "bg-orange-400", bg: "bg-orange-500/10 border-orange-500/20" },
    outage: { label: "Outage", color: "text-red-400", dot: "bg-red-400", bg: "bg-red-500/10 border-red-500/20" },
    maintenance: { label: "Maintenance", color: "text-blue-400", dot: "bg-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
};

interface StatusIndicatorProps {
    status: Status;
    label?: string;
    showBadge?: boolean;
    pulse?: boolean;
    className?: string;
}

export function StatusIndicator({ status, label, showBadge, pulse = true, className }: StatusIndicatorProps) {
    const cfg = statusConfig[status];

    if (showBadge) {
        return (
            <span className={cn(
                "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium",
                cfg.bg, cfg.color, className
            )}>
                <span className="relative flex h-2 w-2">
                    {pulse && status === "operational" && (
                        <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", cfg.dot)} />
                    )}
                    <span className={cn("relative inline-flex rounded-full h-2 w-2", cfg.dot)} />
                </span>
                {label ?? cfg.label}
            </span>
        );
    }

    return (
        <span className={cn("inline-flex items-center gap-2 text-sm", cfg.color, className)}>
            <span className="relative flex h-2 w-2">
                {pulse && status === "operational" && (
                    <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", cfg.dot)} />
                )}
                <span className={cn("relative inline-flex rounded-full h-2 w-2", cfg.dot)} />
            </span>
            {label ?? cfg.label}
        </span>
    );
}

interface ApiStatusCardProps {
    services: { name: string; status: Status; latency?: string }[];
    className?: string;
}

export function ApiStatusCard({ services, className }: ApiStatusCardProps) {
    const allOperational = services.every((s) => s.status === "operational");

    return (
        <div className={cn("rounded-xl border border-neutral-800 light:border-neutral-700 bg-neutral-800/40 overflow-hidden", className)}>
            <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800 light:border-neutral-700">
                <span className="text-sm font-semibold text-neutral-200">API Status</span>
                <StatusIndicator status={allOperational ? "operational" : "degraded"} showBadge />
            </div>
            <ul className="divide-y divide-neutral-700/40">
                {services.map((svc) => (
                    <li key={svc.name} className="flex items-center justify-between px-4 py-3">
                        <span className="text-sm text-neutral-300">{svc.name}</span>
                        <div className="flex items-center gap-3">
                            {svc.latency && <span className="text-xs text-neutral-500 font-mono">{svc.latency}</span>}
                            <StatusIndicator status={svc.status} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
