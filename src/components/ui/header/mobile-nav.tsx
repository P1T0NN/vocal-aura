"use client"

// NEXTJS IMPORTS
import Link from "next/link"
import { usePathname } from "next/navigation"

// LIBRARIES
import { motion, AnimatePresence } from "framer-motion"

// COMPONENTS
import { Button } from "@/components/ui/button"
import { DefaultButton } from "./default-button"
import { ScrolledButton } from "./scrolled-button"

// DATA
import { leftMenuItems, rightMenuItems } from "./header-data"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  isScrolled: boolean
}

export const MobileNav = ({ 
  isOpen, 
  onClose, 
  isScrolled 
}: MobileNavProps) => {
  const pathname = usePathname();

  const allMenuItems = [...leftMenuItems, ...rightMenuItems];

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
            {allMenuItems.map((item) => (
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

            <div onClick={onClose}>
              {isScrolled || pathname === "/contact-us" ? <ScrolledButton /> : <DefaultButton />}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}