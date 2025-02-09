"use client"

// REACTJS IMPORTS
import { useState, useEffect } from "react";
import Link from "next/link";

// COMPONENTS
import { Button } from "@/components/ui/button";

// LUCIDE ICONS
import { ChevronRight, Mic2, Music, Play, Sparkles } from "lucide-react";

export const HeroSectionDesktop = () => {
    const [activeSection, setActiveSection] = useState<"artists" | "talents">("artists")
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1024)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

    return (
        <section className="min-h-screen bg-black overflow-hidden">
      <main className={`relative min-h-screen ${isSmallScreen ? "flex flex-col" : "flex"}`}>
        {/* Left Section - For Artists */}
        <div
          className={`relative ${isSmallScreen ? "w-full h-1/2" : "w-1/2 h-screen"} transition-all duration-500 ease-out ${
            !isSmallScreen && activeSection === "artists" ? "lg:w-3/5" : "lg:w-2/5"
          }`}
          onMouseEnter={() => !isSmallScreen && setActiveSection("artists")}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-black/50" />
          </div>

          <div className="relative h-full flex items-center px-6 lg:px-12">
            <div
              className={`transition-all duration-500 ${
                isSmallScreen || activeSection === "artists"
                  ? "opacity-100 translate-x-0"
                  : "opacity-50 -translate-x-12"
              }`}
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">For Artists</h2>

              <p className="text-lg lg:text-xl text-white/80 max-w-md mb-6 lg:mb-8">
                Launch your career with industry-leading tools and global exposure. Join our community of successful
                artists.
              </p>

              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-center text-white/90">
                  <Music className="w-4 h-4 lg:w-5 lg:h-5 mr-3" />
                  <span className="text-sm lg:text-base">Professional Recording Studios</span>
                </div>

                <div className="flex items-center text-white/90">
                  <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 mr-3" />
                  <span className="text-sm lg:text-base">Marketing & Promotion</span>
                </div>

                <div className="flex items-center text-white/90">
                  <Play className="w-4 h-4 lg:w-5 lg:h-5 mr-3" />
                  <span className="text-sm lg:text-base">Distribution Services</span>
                </div>
              </div>

              <Button
                className="mt-6 lg:mt-8 px-4 lg:px-6 py-2 lg:py-3 bg-purple-500 text-white rounded-full flex items-center group hover:bg-purple-600 transition-colors"
                asChild
              >
                <Link href="/contact-us">
                  Start Creating
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Right Section - For Talent Seekers */}
        <div
          className={`relative ${isSmallScreen ? "w-full h-1/2" : "w-1/2 h-screen"} transition-all duration-500 ease-out ${
            !isSmallScreen && activeSection === "talents" ? "lg:w-3/5" : "lg:w-2/5"
          }`}
          onMouseEnter={() => !isSmallScreen && setActiveSection("talents")}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-l from-orange-900/90 to-black/50" />
          </div>

          <div className="relative h-full flex items-center justify-end px-6 lg:px-12">
            <div
              className={`transition-all duration-500 ${
                isSmallScreen || activeSection === "talents" ? "opacity-100 translate-x-0" : "opacity-50 translate-x-12"
              }`}
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">For Talent Seekers</h2>

              <p className="text-lg lg:text-xl text-white/80 max-w-md mb-6 lg:mb-8">
                Discover exceptional vocal talents for your next project. Access our curated pool of professional
                artists.
              </p>

              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-center text-white/90">
                  <Mic2 className="w-4 h-4 lg:w-5 lg:h-5 mr-3" />
                  <span className="text-sm lg:text-base">Voice-Matching Service</span>
                </div>

                <div className="flex items-center text-white/90">
                  <Music className="w-4 h-4 lg:w-5 lg:h-5 mr-3" />
                  <span className="text-sm lg:text-base">Custom Casting Calls</span>
                </div>

                <div className="flex items-center text-white/90">
                  <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 mr-3" />
                  <span className="text-sm lg:text-base">Direct Artist Contact</span>
                </div>
              </div>

              <Button className="mt-6 lg:mt-8 px-4 lg:px-6 py-2 lg:py-3 bg-orange-500 text-white rounded-full flex items-center group hover:bg-orange-600 transition-colors">
                Find Talent
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Center Logo */}
        <div
          className={`${isSmallScreen ? "relative py-8" : "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"} z-10`}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full blur-xl opacity-50 animate-pulse" />

            <h1 className="text-4xl lg:text-6xl font-bold text-white relative text-center">
              VOCAL
              <br />
              AURA
            </h1>
          </div>
        </div>
      </main>
    </section>
    );
}