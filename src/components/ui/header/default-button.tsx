"use client"

// NEXTJS IMPORTS
import Link from "next/link";

// COMPONENTS
import { Button } from "@/components/ui/button";

// LUCIDE ICONS
import { Phone } from "lucide-react"

export const DefaultButton = () => {
    return (
        <Button
            asChild
            className="bg-gradient-to-r from-[#FD792D] to-[#FFA07A] hover:from-[#E66B28] hover:to-[#FF8C66] text-white shadow-lg transition-all duration-300"
        >
            <Link href="/contact-us" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Contact Us</span>
            </Link>
        </Button>
    )
}
