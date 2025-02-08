// NEXTJS IMPORTS
import Link from "next/link";

// LIBRARIES
import * as motion from "motion/react-client";

// LUCIDE ICONS
import { Users, Calendar, Music, Megaphone, ArrowRight } from "lucide-react";

// COMPONENTS
import { Button } from "@/components/ui/button";

const services = [
    {
        icon: Users,
        title: "Talent Management",
        description: "Comprehensive artist management services including career planning, brand development, and industry networking. We guide artists through every step of their professional journey, ensuring sustainable growth and success.",
        features: [
            "Career Strategy Development",
            "Brand Identity Management",
            "Industry Networking",
            "Contract Negotiation"
        ]
    },
    {
        icon: Calendar,
        title: "Artist Booking",
        description: "Professional booking services connecting artists with the right venues and events. We handle negotiations, scheduling, and logistics to ensure seamless performances.",
        features: [
            "Venue Partnership Network",
            "Contract Management",
            "Tour Planning",
            "Performance Scheduling"
        ]
    },
    {
        icon: Music,
        title: "Event Curation",
        description: "Expert curation of music events and showcases. We create unique experiences by matching the perfect artists with the right venues and audiences.",
        features: [
            "Custom Event Planning",
            "Artist Selection",
            "Venue Coordination",
            "Event Management"
        ]
    },
    {
        icon: Megaphone,
        title: "Music Promotion",
        description: "Strategic promotion and marketing services to increase visibility and reach. We utilize modern marketing techniques to build and engage your audience.",
        features: [
            "Social Media Strategy",
            "PR Campaigns",
            "Content Marketing",
            "Audience Development"
        ]
    }
]

export const ServicesSection = () => {
    return (
        <section id="services" className="py-24 bg-gradient-to-b from-black via-black to-background relative">
            <div className="absolute inset-0 bg-black/80" />
            
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-bold text-white mb-4">Our Services</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Comprehensive solutions for artists at every stage of their career
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-black/60 backdrop-blur-sm rounded-xl p-8 hover:bg-black/70 transition-colors border border-white/10"
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="p-3 bg-orange-500/10 rounded-lg">
                                    <service.icon className="h-6 w-6 text-orange-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                            </div>
                            
                            <p className="text-gray-400 mb-6">
                                {service.description}
                            </p>

                            <ul className="space-y-3 mb-6">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-gray-300">
                                        <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                asChild
                                variant="ghost" 
                                className="text-orange-500 hover:text-orange-400 hover:bg-orange-500/10 p-5"
                            >
                                <Link href="/contact-us" className="flex items-center space-x-2">
                                    <span>Learn More</span>
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}