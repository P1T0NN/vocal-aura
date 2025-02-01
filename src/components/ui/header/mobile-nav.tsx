"use client"

// NEXTJS IMPORTS
import Link from "next/link"

// LIBRARIES
import { motion, AnimatePresence } from "framer-motion"

// COMPONENTS
import { Button } from "@/components/ui/button"

// DATA
import { menuItems } from "./header-data"

// LUCIDE ICONS
import { Phone } from "lucide-react"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/95 border-t border-white/10"
        >
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                asChild
                className="w-full justify-start text-gray-300 hover:text-white hover:bg-white/10"
                onClick={onClose}
              >
                <Link href={item.href}>
                  <item.icon className="h-5 w-5 mr-2" />
                  {item.label}
                </Link>
              </Button>
            ))}

            <Button
              asChild
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white mt-4"
              onClick={onClose}
            >
              <Link href="/contact-us">
                <Phone className="mr-2 h-4 w-4" />
                Contact Us
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}