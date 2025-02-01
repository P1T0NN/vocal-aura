"use client"

// REACTJS IMPORTS
import { useState, useEffect } from "react";

// NEXTJS IMPORTS
import Link from "next/link";

// LIBRARIES
import { motion } from "framer-motion";

// COMPONENTS
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

// LUCIDE ICONS
import { Menu, X, Phone } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? "bg-black/95 backdrop-blur-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto">
        <div className="flex h-20 items-center justify-between px-4">
          <Logo />
          <DesktopNav />

          {/* Contact Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                className="hidden md:flex bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white"
                asChild
              >
                <Link href="/contact-us">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
            </motion.div>

            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <MobileNav 
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </div>
    </header>
  )
}