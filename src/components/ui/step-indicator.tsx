import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
    label: string;
    description?: string;
}

interface StepIndicatorProps {
    steps: Step[];
    currentStep: number;
    orientation?: "horizontal" | "vertical";
    className?: string;
}

export function StepIndicator({ steps, currentStep, orientation = "horizontal", className }: StepIndicatorProps) {
    if (orientation === "vertical") {
        return (
            <div className={cn("flex flex-col", className)}>
                {steps.map((step, i) => {
                    const completed = i < currentStep;
                    const active = i === currentStep;
                    return (
                        <div key={i} className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className={cn(
                                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-all duration-300 flex-shrink-0",
                                    completed ? "bg-brand-primary border-brand-primary text-neutral-900"
                                        : active ? "border-brand-primary text-brand-primary bg-brand-primary/10"
                                            : "border-neutral-700 text-neutral-600 bg-neutral-800/40"
                                )}>
                                    {completed ? <Check className="h-4 w-4" strokeWidth={3} /> : i + 1}
                                </div>
                                {i < steps.length - 1 && (
                                    <div className={cn("w-0.5 h-10 mt-1 rounded-full", completed ? "bg-brand-primary" : "bg-neutral-700")} />
                                )}
                            </div>
                            <div className="pb-10">
                                <p className={cn("text-sm font-semibold", active ? "text-neutral-100" : completed ? "text-neutral-300" : "text-neutral-600")}>
                                    {step.label}
                                </p>
                                {step.description && (
                                    <p className="text-xs text-neutral-500 mt-0.5">{step.description}</p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <div className={cn("flex items-center", className)}>
            {steps.map((step, i) => {
                const completed = i < currentStep;
                const active = i === currentStep;
                return (
                    <div key={i} className="flex items-center flex-1 last:flex-none">
                        <div className="flex flex-col items-center gap-1.5">
                            <div className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold border-2 transition-all duration-300",
                                completed ? "bg-brand-primary border-brand-primary text-neutral-900"
                                    : active ? "border-brand-primary text-brand-primary bg-brand-primary/10"
                                        : "border-neutral-700 text-neutral-600 bg-neutral-800/40"
                            )}>
                                {completed ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : i + 1}
                            </div>
                            <span className={cn(
                                "text-xs whitespace-nowrap",
                                active ? "text-neutral-200 font-medium" : completed ? "text-neutral-400" : "text-neutral-600"
                            )}>
                                {step.label}
                            </span>
                        </div>
                        {i < steps.length - 1 && (
                            <div className={cn(
                                "flex-1 h-0.5 mx-2 mb-4 rounded-full transition-all duration-500",
                                completed ? "bg-brand-primary" : "bg-neutral-700"
                            )} />
                        )}
                    </div>
                );
            })}
        </div>
    );
}
