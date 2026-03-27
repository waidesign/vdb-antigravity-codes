"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    className?: string;
    type?: "up" | "fade" | "scale" | "clip" | "left" | "right";
    duration?: number;
}

export const Reveal = ({
    children,
    width = "fit-content",
    delay = 0,
    className = "",
    type = "up",
    duration = 0.9,
}: RevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const transition = {
        duration,
        ease: [0.16, 1, 0.3, 1] as const, // The "elegant" cubic-bezier curve
        delay,
    };

    const variants = {
        up: {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition },
        },
        fade: {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition },
        },
        scale: {
            hidden: { opacity: 0, scale: 0.92 },
            visible: { opacity: 1, scale: 1, transition },
        },
        left: {
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0, transition },
        },
        right: {
            hidden: { opacity: 0, x: 60 },
            visible: { opacity: 1, x: 0, transition },
        },
        clip: {
            hidden: { clipPath: "inset(0 0 100% 0)" },
            visible: { clipPath: "inset(0 0 0% 0)", transition },
        },
    };

    return (
        <div ref={ref} style={{ width, position: "relative" }} className={className}>
            <motion.div
                variants={variants[type]}
                initial="hidden"
                animate={mainControls}
                className="w-full h-full"
            >
                {children}
            </motion.div>
        </div>
    );
};
