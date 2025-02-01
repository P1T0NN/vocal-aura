// NEXTJS IMPORTS
import Image from "next/image";

// LIBRARIES
import * as motion from "motion/react-client";
import { getStorageUrl } from "@/lib/supabase/storage";

// DATA
import { team } from "@/data/team";

// LUCIDE ICONS
import { ChevronDown } from "lucide-react";

export const TeamGrid = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-black to-background text-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
                    <p className="text-lg md:text-xl text-gray-400">The faces behind your musical journey</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative mx-auto w-48 h-48 md:w-56 md:h-56 mb-6 overflow-hidden rounded-2xl">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                                <Image
                                    src={getStorageUrl(member.image) || "/placeholder.svg"}
                                    alt={member.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
                                    quality={90}
                                />
                            </div>

                            <div className="text-center">
                                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                                <p className="text-gray-400 mb-4">{member.role}</p>

                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p className="text-gray-500 max-w-md mx-auto">{member.bio}</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <button
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                        aria-label="Scroll to learn more"
                    >
                        Learn more about our team
                        <ChevronDown className="ml-2 w-5 h-5 animate-bounce" />
                    </button>
                </motion.div>
            </div>
        </section>
    )
}