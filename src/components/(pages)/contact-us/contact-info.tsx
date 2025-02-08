// LIBRARIES
import * as motion from "motion/react-client";

// CONFIG
import { STREET_ADDRESS, CITY, POSTAL_CODE, COUNTRY, INFO_EMAIL, BOOKINGS_EMAIL } from "@/config";

// LUCIDE ICONS
import { Mail, MessageSquare, MapPin } from "lucide-react";

type ContactLine = {
    label?: string;
    value: string;
}

type ContactItem = {
    icon: React.ElementType;
    title: string;
    description: ContactLine[];
}

const contactItems: ContactItem[] = [
    {
        icon: Mail,
        title: "Email Us",
        description: [
            { label: "General Inquiries", value: INFO_EMAIL },
            { label: "Bookings", value: BOOKINGS_EMAIL }
        ],
    },
    {
        icon: MapPin,
        title: "Visit Us",
        description: [
            { value: STREET_ADDRESS },
            { value: `${CITY}, ${POSTAL_CODE}` },
            { value: COUNTRY }
        ],
    },
    {
        icon: MessageSquare,
        title: "Social Media",
        description: [
            { value: "@vocalaura.ent on all platforms" }
        ],
    },
]

export const ContactInfo = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
        >
            {contactItems.map((item, index) => (
                <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                >
                    <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-3 rounded-full">
                        <item.icon className="h-6 w-6 text-white" />
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <div className="space-y-1">
                            {item.description.map((line, i) => (
                                <div key={i} className="text-gray-400">
                                    {line.label && (
                                        <span className="text-gray-500">{line.label}: </span>
                                    )}
                                    {line.value}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    )
}