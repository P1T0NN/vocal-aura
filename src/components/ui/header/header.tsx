"use client"

// REACTJS IMPORTS
import { useState, useEffect } from "react";

// NEXTJS IMPORTS
import Link from "next/link";
import { usePathname } from "next/navigation"

// LIBRARIES
import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion";

// COMPONENTS
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";
import { Logo } from "./logo";
import { ScrolledLogo } from "./scrolled-logo";
import { DefaultButton } from "./default-button"
import { ScrolledButton } from "./scrolled-button"

// DATA
import { leftMenuItems, rightMenuItems } from "./header-data"

// LUCIDE ICONS
import { Menu, X } from "lucide-react";

export const Header = () => {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Add effect to track scroll position
  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.95)"]
  );

  const headerBackdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(8px)"]
  );

  const menuItemVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 4px 20px rgba(130, 30, 255, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.header
      style={{
        backgroundColor: headerBackground,
        backdropFilter: headerBackdropBlur
      }}
      className="fixed top-0 z-50 w-full"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent opacity-50"
        style={{ pointerEvents: "none" }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="flex h-24 items-center justify-between">
          {/* Left Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {leftMenuItems.map((item) => (
              <motion.div
                key={item.label}
                variants={menuItemVariants}
                whileHover="hover"
                className="relative"
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 relative z-10"
                >
                  <item.icon className="h-5 w-5 text-gray-300 group-hover:text-purple-400 transition-colors" />
                  <span className="text-gray-200 group-hover:text-white font-medium tracking-wide transition-colors">
                    {item.label}
                  </span>
                </Link>
                <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </nav>

          {/* Centered Logo */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <AnimatePresence mode="wait">
              {isScrolled || pathname === "/contact-us" ? (
                <motion.div
                  key="scrolled"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ScrolledLogo />
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Logo />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Navigation and Contact Button */}
          <div className="hidden lg:flex items-center space-x-10">
            {rightMenuItems.map((item) => (
              <motion.div
                key={item.label}
                variants={menuItemVariants}
                whileHover="hover"
                className="relative"
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 relative z-10"
                >
                  <item.icon className="h-5 w-5 text-gray-300 group-hover:text-purple-400 transition-colors" />
                  <span className="text-gray-200 group-hover:text-white font-medium tracking-wide transition-colors">
                    {item.label}
                  </span>
                </Link>
                <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}

            <motion.div variants={buttonVariants} whileHover="hover">
              {isScrolled || pathname === "/contact-us" ? <ScrolledButton /> : <DefaultButton />}
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.div 
            className="lg:hidden"
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </motion.div>
        </div>
      </div>

      <MobileNav 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        isScrolled={isScrolled}
      />
    </motion.header>
  )
}