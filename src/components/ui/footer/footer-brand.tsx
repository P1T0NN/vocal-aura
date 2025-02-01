// COMPONENTS
import { Button } from "@/components/ui/button";

// LUCIDE ICONS
import { Mic, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const FooterBrand = () => {
    return (
        <div className="space-y-4">
            <div className="flex items-center space-x-2">
                <Mic className="h-6 w-6" />
                <span className="font-bold text-xl">Vocal Aura</span>
            </div>

            <p className="text-gray-400">Where passion meets opportunity. Authentic music. Unstoppable talent.</p>

            <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                    <Button key={index} variant="ghost" size="icon" className="hover:text-purple-500">
                        <Icon className="h-5 w-5" />
                    </Button>
                ))}
            </div>
        </div>
    )
}
