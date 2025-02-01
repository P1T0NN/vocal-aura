// LIBRARIES
import * as motion from "motion/react-client";

// LUCIDE ICONS
import { Music, Users, Star, Globe } from "lucide-react";

const features = [
    {
        icon: Music,
        title: "Musical Excellence",
        description: "We cultivate and promote exceptional vocal talent across diverse genres."
    },
    {
        icon: Users,
        title: "Artist Development",
        description: "Comprehensive support for artists to reach their full potential."
    },
    {
        icon: Star,
        title: "Industry Expertise",
        description: "Years of experience in talent management and music production."
    },
    {
        icon: Globe,
        title: "Global Reach",
        description: "Connecting artists with audiences worldwide through strategic partnerships."
    }
]

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-5xl font-bold">Empowering Vocal Artists</h2>
                        <p className="text-xl text-gray-400">
                            At Vocal Aura, we&apos;re more than just a talent agency. We&apos;re a community dedicated to discovering, 
                            developing, and amplifying extraordinary vocal talent. Our mission is to bridge the gap between 
                            exceptional artists and global opportunities.
                        </p>
                    </motion.div>

                    {/* Right Column - Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                            >
                                <feature.icon className="h-8 w-8 text-purple-500 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}