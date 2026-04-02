"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { MapPin, Phone, MessageSquare, ExternalLink } from "lucide-react";

export default function ScheduleDemoPage() {
    return (
        <main className="min-h-screen bg-black">
            <Navbar />
            
            <div className="pt-40 pb-20 px-10 lg:px-20">
                <div className="section-content flex flex-col gap-20">
                    {/* Hero Section */}
                    <div className="flex flex-col gap-6 max-w-3xl">
                        <h1 className="font-aileron font-bold text-5xl lg:text-7xl text-white leading-tight">
                            Book a <span className="text-[#F59120]">Meeting</span>
                        </h1>
                        <p className="font-aileron text-xl text-white/59 leading-relaxed">
                            Connect with our experts to discover how our comprehensive vehicle data solutions can empower your business.
                        </p>
                    </div>

                    {/* Calendar Section */}
                    <div 
                        className="w-full rounded-3xl overflow-hidden"
                        style={{ background: "#16181A", border: "1px solid #8C929D" }}
                    >
                        <div className="flex flex-col lg:flex-row min-h-[600px]">
                            {/* Calendar Sidebar */}
                            <div className="lg:w-1/3 p-10 flex flex-col gap-8 border-b lg:border-b-0 lg:border-r" style={{ borderColor: "#8C929D" }}>
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-aileron font-bold text-2xl text-white">Select a Date & Time</h3>
                                    <p className="font-aileron text-white/59">
                                        Choose a slot for a 30-minute discovery call with our team.
                                    </p>
                                </div>
                                
                                <div className="flex flex-col gap-4 mt-auto">
                                    <div className="flex items-center gap-3 text-white/59">
                                        <div className="w-5 h-5 rounded-full bg-[#F59120]/20 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-[#F59120]" />
                                        </div>
                                        <span>30 Min Discovery Call</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-white/59">
                                        <MessageSquare size={18} className="text-[#F59120]" />
                                        <span>English / Spanish</span>
                                    </div>
                                </div>
                            </div>

                            {/* Actual Calendar View (Mock Interactive) */}
                            <div className="flex-1 p-10 flex flex-col gap-10">
                                {/* Month Header */}
                                <div className="flex items-center justify-between">
                                    <h4 className="font-aileron font-bold text-xl text-white">March 2026</h4>
                                    <div className="flex gap-2">
                                        <button className="p-2 rounded-lg hover:bg-white/5 text-white/59">{"<"}</button>
                                        <button className="p-2 rounded-lg hover:bg-white/5 text-white/59">{">"}</button>
                                    </div>
                                </div>

                                {/* Calendar Grid */}
                                <div className="grid grid-cols-7 gap-2">
                                    {["S", "M", "T", "W", "T", "F", "S"].map(day => (
                                        <div key={day} className="text-center text-xs font-bold text-white/30 py-2">{day}</div>
                                    ))}
                                    {Array.from({ length: 31 }).map((_, i) => {
                                        const day = i + 1;
                                        const isToday = day === 13;
                                        const isSelected = day === 16;
                                        const isAvailable = day > 13 && day % 7 !== 0 && day % 7 !== 6;
                                        
                                        return (
                                            <button 
                                                key={i}
                                                disabled={!isAvailable}
                                                className={`
                                                    aspect-square rounded-xl flex items-center justify-center font-aileron text-sm transition-all
                                                    ${isSelected ? "bg-[#F59120] text-white shadow-[0_0_20px_rgba(245,145,32,0.3)]" : ""}
                                                    ${isToday ? "border border-[#F59120] text-[#F59120]" : ""}
                                                    ${isAvailable && !isSelected ? "hover:bg-white/5 text-white/92" : "text-white/20"}
                                                `}
                                            >
                                                {day}
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Availability Slots (shown when date is selected) */}
                                <div className="flex flex-col gap-4">
                                    <p className="text-sm font-semibold text-white/59">Available times for Monday, March 16</p>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                        {["09:00 AM", "10:30 AM", "01:00 PM", "03:30 PM", "04:00 PM"].map(time => (
                                            <button 
                                                key={time}
                                                className="px-4 py-3 rounded-xl border border-[#8C929D] text-white/92 hover:border-[#F59120] hover:text-[#F59120] transition-all text-sm font-semibold"
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </main>
    );
}
