"use client"

// REACTJS IMPORTS
import { useRef } from "react";

// NEXTJS IMPORTS
import Link from "next/link";

// LIBRARIES
import { motion, useScroll, useTransform } from "framer-motion";

// COMPONENTS
import { Button } from "@/components/ui/button";


// LUCIDE ICONS
import { Sparkles } from "lucide-react";

export const HeroSection = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
            <motion.div 
                style={{ y }}
                className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className="absolute top-1/4 left-1/4 text-white/20 z-0"
            >
                <Sparkles className="h-20 w-20" />
            </motion.div>
            
            <div className="relative z-20 text-center text-white px-4">
                <motion.div
                    className="relative mb-6 text-7xl md:text-9xl font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="absolute top-0 left-0 -ml-1 -mt-1 text-red-500 opacity-70 animate-pulse">
                        VOCAL AURA
                    </span>

                    <span className="absolute top-0 left-0 ml-1 mt-1 text-blue-500 opacity-70 animate-pulse">
                        VOCAL AURA
                    </span>

                    <span>VOCAL AURA</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative text-2xl md:text-4xl mb-12 overflow-hidden"
                >
                    <motion.span
                        animate={{
                            opacity: [0, 1, 1, 0],
                            y: [20, 0, 0, -20],
                        }}
                            transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        className="block"
                    >
                        Where passion meets opportunity
                    </motion.span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="space-x-4"
                >
                    <Button size="lg" variant="secondary" className="relative overflow-hidden group" asChild>
                        <Link href="/#artists">
                            <span className="relative z-10">Discover Artists</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </Button>

                    <Button size="lg" variant="secondary" className="relative overflow-hidden group" asChild>
                        <Link href="/contact-us">
                            <span className="relative z-10">Join Us</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}