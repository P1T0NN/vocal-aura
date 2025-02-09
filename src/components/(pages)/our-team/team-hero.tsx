// LIBRARIES
import * as motion from "motion/react-client";

// LUCIDE ICONS
import { Users, Music, Star } from "lucide-react";

export const TeamHero = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
    }

    return (
        <section className="relative pt-32 pb-24 bg-black text-white overflow-hidden">
            {/* Background Design Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-500/10 via-transparent to-transparent rotate-12 blur-3xl" />
                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-500/10 via-transparent to-transparent -rotate-12 blur-3xl" />
            </div>

            <div className="container relative mx-auto px-4">
                <motion.div initial="initial" animate="animate" className="max-w-4xl mx-auto text-center">
                    <motion.h1 className="text-5xl md:text-6xl font-bold mb-8" {...fadeInUp}>
                        The Talent Behind Vocal Aura
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8"
                        {...fadeInUp}
                        transition={{ delay: 0.2 }}
                    >
                        At Vocal Aura, our success is driven by a passionate team of industry veterans and creative minds. With
                        decades of combined experience, we&apos;re committed to shaping the future of music entertainment.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        {[
                            { icon: Users, title: "Expert Team", description: "Industry veterans with diverse expertise" },
                            { icon: Music, title: "Creative Vision", description: "Innovative approaches to music production" },
                            { icon: Star, title: "Artist Success", description: "Dedicated to nurturing talent and careers" },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                className="flex flex-col items-center"
                                {...fadeInUp}
                                transition={{ delay: 0.4 + index * 0.2 }}
                            >
                                <div className="bg-[#fd792d]/20 p-4 rounded-full mb-4">
                                    <item.icon className="w-8 h-8 text-[#fd792d]" />
                                </div>
                                
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-400">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

