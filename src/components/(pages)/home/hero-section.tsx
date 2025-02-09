"use client"

// REACTJS IMPORTS
import { useRef } from "react";

// NEXTJS IMPORTS
import Link from "next/link";

// COMPONENTS
import { Button } from "@/components/ui/button";

// LUCIDE ICONS
import { ChevronDown, Mic2, Music, Sparkles } from "lucide-react";

export const HeroSection = () => {
    const containerRef = useRef(null);

    return (
        <section ref={containerRef} className="min-h-screen bg-gradient-to-br from-purple-900 via-rose-800 to-orange-700">
            <main className="relative pt-16">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -left-4 top-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
                    <div className="absolute right-1/4 top-1/3 w-20 h-20 sm:w-32 sm:h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-700" />
                    <div className="absolute left-1/3 bottom-1/4 w-24 h-24 sm:w-40 sm:h-40 bg-rose-500/20 rounded-full blur-xl animate-pulse delay-1000" />
                </div>

                {/* Main Content */}
                <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
                    <div className="space-y-6 sm:space-y-8 text-center">
                        {/* Floating Icons */}
                        <div className="flex justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
                            <Music className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400 animate-bounce delay-100" />
                            <Mic2 className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 animate-bounce delay-300" />
                            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-rose-400 animate-bounce delay-500" />
                        </div>

                        {/* Main Title with Gradient */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                            <span className="bg-gradient-to-r from-orange-400 via-rose-400 to-purple-400 text-transparent bg-clip-text animate-gradient">
                                VOCALAURA
                            </span>
                        </h1>

                        {/* Tagline with Animation */}
                        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed">
                            Where passion meets opportunity
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 sm:mt-12">
                            <Button
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-full font-medium hover:from-orange-600 hover:to-rose-600 transform hover:scale-105 transition-all w-full sm:w-auto"
                                asChild
                            >
                                <Link href="/#artists">Discover Artists</Link>
                            </Button>

                            <Button
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-medium hover:bg-white/20 transform hover:scale-105 transition-all w-full sm:w-auto"
                                asChild
                            >
                                <Link href="/contact-us">Join Us</Link>
                            </Button>
                        </div>

                        {/* Scroll Indicator */}
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                            <ChevronDown className="w-6 h-6 text-white/50" />
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
}