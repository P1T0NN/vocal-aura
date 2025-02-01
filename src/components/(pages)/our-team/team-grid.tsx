// NEXTJS IMPORTS
import Image from "next/image";

// LIBRARIES
import * as motion from "motion/react-client";
import { getStorageUrl } from "@/lib/supabase/storage";

// DATA
import { team } from "@/data/team";

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
                    <h2 className="text-5xl font-bold mb-4">Meet Our Team</h2>
                    <p className="text-xl text-gray-400">The faces behind your musical journey</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="relative mx-auto w-56 h-56 mb-6">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 animate-pulse" />
                                <Image
                                    src={getStorageUrl(member.image)}
                                    alt={member.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="relative rounded-full object-cover border-4 border-white object-[center_10%] group-hover:scale-105 transition-transform duration-300"
                                    quality={90}
                                />
                            </div>

                            <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                            <p className="text-gray-400 mb-4">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}