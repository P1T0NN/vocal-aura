"use client"

// NEXTJS IMPORTS
import Link from "next/link";

// COMPONENTS
import { Button } from "@/components/ui/button";

// LUCIDE ICONS
import { Phone } from "lucide-react";

export const ScrolledButton = () => {
    return (
        <Button
            variant="outline"
            asChild
        >
            <Link href="/contact-us" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Contact Us</span>
            </Link>
        </Button>
    )
}
