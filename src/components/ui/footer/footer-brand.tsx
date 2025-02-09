// NEXTJS IMPORTS
import Link from "next/link";

// COMPONENTS
import { Button } from "@/components/ui/button";

// LUCIDE ICONS
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const socialLinks = [
    { Icon: Facebook, href: "https://facebook.com/vocalaura.ent" },
    { Icon: Twitter, href: "https://twitter.com/vocalaura" },
    { Icon: Instagram, href: "https://www.instagram.com/vocalaura.ent/" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/vocal-aura-9086b9346/" },
];

export const FooterBrand = () => {
    return (
        <div className="space-y-4">
            <div className="flex items-center space-x-2">
                <span className="font-bold text-xl">Vocal Aura</span>
            </div>

            <p className="text-gray-400">Where passion meets opportunity. Authentic music. Unstoppable talent.</p>

            <div className="flex space-x-4">
                {socialLinks.map(({ Icon, href }) => (
                    <Button
                        key={href}
                        variant="ghost"
                        size="icon"
                        className="hover:text-purple-500"
                        asChild
                    >
                        <Link 
                            href={href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <Icon className="h-5 w-5" />
                        </Link>
                    </Button>
                ))}
            </div>
        </div>
    )
}
