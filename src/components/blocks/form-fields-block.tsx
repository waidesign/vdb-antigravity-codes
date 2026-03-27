import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Radio, RadioGroup } from '@/components/ui/radio';
import { cn } from '@/lib/utils';

export function SelectFieldBlock({ block, isMCP, isDark }: { block: any, isMCP: boolean, isDark: boolean }) {
    const { name, label, options, placeholder, fullWidth, required } = block;
    return (
        <div className={cn("w-full space-y-1.5", fullWidth ? "md:col-span-2" : "")}>
            {label && (
                <label className={cn("font-aileron text-sm font-medium", isDark ? "text-white" : "text-neutral-700")}>
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            <div className="relative w-full">
                <select className={cn(
                    "w-full border rounded-lg p-2.5 font-aileron appearance-none focus:outline-none focus:ring-2 transition-all cursor-pointer",
                    isDark 
                        ? "bg-neutral-900 border-neutral-800 text-white focus:ring-purple-500/20 focus:border-purple-500" 
                        : "bg-[#F8F9FA] border-neutral-200 text-neutral-900 focus:ring-orange-500/20 focus:border-orange-500"
                )}>
                    {placeholder && <option value="" disabled selected>{placeholder}</option>}
                    {options.map((opt: any, idx: number) => (
                        <option key={idx} value={opt.value}>{opt.label}</option>
                    ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <ChevronDown className={cn("w-4 h-4", isDark ? "text-neutral-600" : "text-neutral-400")} />
                </div>
            </div>
        </div>
    );
}

export function CheckboxFieldBlock({ block, isMCP, isDark }: { block: any, isMCP: boolean, isDark: boolean }) {
    const { label, name, description, required } = block;
    return (
        <div className="flex flex-col gap-2 mt-2 w-full md:col-span-2">
            <Checkbox 
                label={label} 
                description={description} 
                name={name}
                required={required}
                className={cn(isDark ? "text-white" : "text-neutral-900")}
            />
        </div>
    );
}

export function CheckboxGroupBlock({ block, isMCP, isDark }: { block: any, isMCP: boolean, isDark: boolean }) {
    const { label, options, name } = block;
    return (
        <div className="flex flex-col gap-3 mt-3 w-full">
            {label && <h4 className={cn("font-aileron font-bold text-lg", isDark ? "text-white" : "text-neutral-900")}>{label}</h4>}
            <div className="flex flex-col gap-3 w-full">
                {options.map((opt: any, i: number) => (
                    <Checkbox 
                        key={i}
                        label={opt.label}
                        description={opt.description}
                        name={name}
                        value={opt.value}
                        className={cn(isDark ? "text-white" : "text-neutral-900")}
                    />
                ))}
            </div>
        </div>
    );
}

export function RadioGroupBlock({ block, isMCP, isDark }: { block: any, isMCP: boolean, isDark: boolean }) {
    const { label, options, name } = block;
    return (
        <div className="flex flex-col gap-3 mt-3 w-full">
            {label && <h4 className={cn("font-aileron font-bold text-lg", isDark ? "text-white" : "text-neutral-900")}>{label}</h4>}
            <RadioGroup className="w-full">
                {options.map((opt: any, i: number) => (
                    <Radio 
                        key={i}
                        label={opt.label}
                        description={opt.description}
                        name={name}
                        value={opt.value}
                        className={cn(isDark ? "text-white" : "text-neutral-900")}
                    />
                ))}
            </RadioGroup>
        </div>
    );
}

export function RecaptchaBlock({ isMCP, isDark }: { isMCP: boolean, isDark: boolean }) {
    return (
        <div className={cn(
            "mt-2 p-3 border rounded-md flex items-center justify-between w-full md:w-[300px] md:col-span-2",
            isDark ? "border-neutral-800 bg-neutral-900" : "border-neutral-200 bg-[#F8F9FA]"
        )}>
            <div className="flex items-center gap-3">
                <div className={cn("w-6 h-6 border-2 rounded", isDark ? "border-neutral-700 bg-neutral-800" : "border-neutral-300 bg-white")} />
                <span className={cn("text-sm font-aileron", isDark ? "text-white" : "text-neutral-700")}>I'm not a robot</span>
            </div>
            <div className="flex flex-col items-center opacity-70">
                <div className={cn("w-8 h-8 rounded-full mb-1", isDark ? "bg-neutral-800" : "bg-neutral-200")} />
                <div className={cn("h-2 w-10 rounded", isDark ? "bg-neutral-800" : "bg-neutral-200")} />
            </div>
        </div>
    );
}

export function renderField(field: any, key: any, isMCP: boolean, isDark: boolean = true) {
    const inputBg = isMCP ? 'bg-white border-neutral-300 text-black' : (isDark ? 'bg-[#171717] border-neutral-800 text-white' : 'bg-white border-neutral-300 text-neutral-900');
    const labelColor = isMCP ? 'text-neutral-900' : (isDark ? 'text-neutral-300' : 'text-neutral-700');

    const wrapperClass = field.type === 'textarea' ? "flex flex-col gap-1.5 md:col-span-2" : "flex flex-col gap-1.5";

    return (
        <div key={key} className={wrapperClass}>
            {field.label && (
                <label className={`text-sm font-medium ${labelColor} px-0.5`}>
                    {field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            {(() => {
                switch (field.type) {
                    case 'text':
                    case 'email':
                    case 'tel':
                        return (
                            <input 
                                type={field.type} 
                                placeholder={field.placeholder} 
                                className={`w-full ${inputBg} border rounded-md px-4 py-2.5 focus:outline-none focus:border-neutral-600 transition-colors text-sm`} 
                            />
                        );
                    case 'select':
                        return (
                            <div className="relative">
                                <select defaultValue="" className={`w-full ${inputBg} border rounded-md px-4 py-2.5 focus:outline-none focus:border-neutral-600 transition-colors text-sm appearance-none cursor-pointer`}>
                                    {field.placeholder && <option value="" disabled>{field.placeholder}</option>}
                                    {field.options?.map((opt: any, i: number) => (
                                        <option key={i} value={opt.value}>{opt.label}</option>
                                    ))}
                                </select>
                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-500"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </div>
                            </div>
                        );
                    case 'checkboxGroup':
                        return (
                            <div className="flex flex-col gap-3 mt-1">
                                {field.options?.map((opt: any, i: number) => (
                                    <Checkbox 
                                        key={i}
                                        label={opt.label}
                                        description={opt.description}
                                        name={field.name}
                                        value={opt.value}
                                        className={isMCP ? "text-neutral-900" : "text-white"}
                                    />
                                ))}
                            </div>
                        );
                    case 'radioGroup':
                        return (
                            <RadioGroup className="mt-1">
                                {field.options?.map((opt: any, i: number) => (
                                    <Radio 
                                        key={i}
                                        label={opt.label}
                                        description={opt.description}
                                        name={field.name}
                                        value={opt.value}
                                        className={isMCP ? "text-neutral-900" : "text-white"}
                                    />
                                ))}
                            </RadioGroup>
                        );
                    case 'textarea':
                        return (
                            <textarea 
                                placeholder={field.placeholder} 
                                rows={field.rows || 3} 
                                className={`w-full ${inputBg} border rounded-md px-4 py-2.5 focus:outline-none focus:border-neutral-600 transition-colors text-sm resize-none`} 
                            />
                        );
                    default:
                        return null;
                }
            })()}
        </div>
    );
}
