// LIBRARIES
import * as motion from "motion/react-client";

// COMPONENTS
import { ServiceCard } from "./service-card";

// LUCIDE ICONS
import { Mic, Music, Calendar } from "lucide-react";

export const ServicesSection = () => {
    return (
        <section id="services" className="py-20 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <ServiceCard 
                            icon={<Mic className="h-8 w-8" />}
                            title="Artist Management"
                            description="Comprehensive career guidance and development for emerging talents"
                        />
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <ServiceCard 
                            icon={<Music className="h-8 w-8" />}
                            title="Music Production"
                            description="State-of-the-art production facilities and expert producers"
                        />
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <ServiceCard 
                            icon={<Calendar className="h-8 w-8" />}
                            title="Event Booking"
                            description="Strategic event planning and booking services"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}