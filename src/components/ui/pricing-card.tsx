import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Badge } from "./badge";

interface PricingFeature {
    text: string;
    included: boolean;
}

interface PricingCardProps {
    tier: string;
    price: string;
    period?: string;
    description: string;
    features: PricingFeature[];
    cta: string;
    popular?: boolean;
    variant?: "default" | "featured";
    onSelect?: () => void;
    className?: string;
}

export function PricingCard({
    tier, price, period = "/mo", description, features, cta, popular, variant = "default", onSelect, className,
}: PricingCardProps) {
    return (
        <div className={cn(
            "relative flex flex-col rounded-2xl border p-5 sm:p-6 transition-all duration-200 hover-lift",
            popular
                ? "border-brand-primary/50 bg-neutral-800/60 shadow-[0_0_30px_rgba(245,145,32,0.12)]"
                : "border-neutral-800 light:border-neutral-700 bg-neutral-800/30 hover:border-neutral-600",
            className
        )}>
            {popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge variant="brand" className="shadow-lg gap-1">
                        <Star className="h-3 w-3 fill-current" />
                        Most Popular
                    </Badge>
                </div>
            )}

            <div className="mb-5">
                <h3 className="text-base font-semibold text-neutral-200 mb-1">{tier}</h3>
                <p className="text-sm text-neutral-500">{description}</p>
            </div>

            <div className="flex items-end gap-1 mb-6">
                <span className="text-3xl md:text-4xl font-bold text-neutral-100">{price}</span>
                <span className="text-neutral-500 mb-1">{period}</span>
            </div>

            <Button
                variant={popular ? "primary" : "secondary"}
                className="w-full mb-6"
                onClick={onSelect}
            >
                {cta}
            </Button>

            <ul className="flex flex-col gap-3 flex-1">
                {features.map((f, i) => (
                    <li key={i} className={cn("flex items-start gap-2.5 text-sm", f.included ? "text-neutral-300" : "text-neutral-600")}>
                        <Check
                            className={cn("h-4 w-4 flex-shrink-0 mt-0.5", f.included ? "text-green-400" : "text-neutral-700")}
                            strokeWidth={f.included ? 2.5 : 2}
                        />
                        {f.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}
