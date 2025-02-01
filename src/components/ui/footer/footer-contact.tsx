// CONFIG
import { STREET_ADDRESS, CITY, POSTAL_CODE, COUNTRY, INFO_EMAIL, BOOKINGS_EMAIL } from "@/config";

// COMPONENTS
import { Button } from "@/components/ui/button";

// LUCIDE ICONS
import { Mail } from "lucide-react";

export const FooterContact = () => {
    return (
        <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-400">
                <p>{STREET_ADDRESS}</p>
                <p>{CITY}, {POSTAL_CODE}</p>
                <p>{COUNTRY}</p>
                <p>Info: {INFO_EMAIL}</p>
                <p>Bookings: {BOOKINGS_EMAIL}</p>
            </div>
            
            <Button className="mt-4 bg-purple-600 hover:bg-purple-700">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
            </Button>
        </div>
    )
}
