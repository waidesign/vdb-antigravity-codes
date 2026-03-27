import { cn } from "@/lib/utils";

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    variant?: "default" | "gradient" | "dark";
    className?: string;
}

const iconBg = {
    default: "from-brand-primary/20 to-brand-secondary/10 border-brand-primary/20",
    gradient: "from-purple-500/20 to-blue-500/10 border-purple-500/20",
    dark: "from-neutral-700 to-neutral-800 border-neutral-700",
};

export function FeatureCard({ icon, title, description, variant = "default", className }: FeatureCardProps) {
    return (
        <div className={cn(
            "flex flex-col gap-3 sm:gap-4 p-5 sm:p-6 rounded-xl border border-neutral-800 light:border-neutral-700 bg-neutral-800/30 hover:border-neutral-600 transition-all duration-200 hover-lift group",
            className
        )}>
            <div className={cn(
                "w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br border text-brand-primary group-hover:scale-105 transition-transform duration-200",
                iconBg[variant]
            )}>
                {icon}
            </div>
            <div>
                <h3 className="text-base font-semibold text-neutral-100 mb-1.5">{title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
