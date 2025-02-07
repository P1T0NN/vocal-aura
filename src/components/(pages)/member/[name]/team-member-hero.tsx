// NEXTJS IMPORTS
import Image from "next/image"

// LIBRARIES
import * as motion from "motion/react-client"
import { getStorageUrl } from "@/lib/supabase/storage"

// DATA
import { typesTeamMember } from "@/types/typesTeamMember"

interface TeamMemberHeroProps {
    member: typesTeamMember
}

export const TeamMemberHero = ({ 
    member 
}: TeamMemberHeroProps) => {
    return (
        <section className="relative pt-32 pb-16 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-black to-black" />
                <Image
                    src={getStorageUrl(member.image)}
                    alt={member.name}
                    fill
                    className="object-cover opacity-20 blur-sm object-[center_20%]"
                    quality={90}
                />
            </div>

            <div className="container relative mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-64 h-64 md:w-80 md:h-80"
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 animate-pulse" />
                        <Image
                            src={getStorageUrl(member.image)}
                            alt={member.name}
                            fill
                            className="relative rounded-full object-cover border-4 border-white object-[center_15%]"
                            quality={90}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1 text-center md:text-left"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">{member.name}</h1>
                        <p className="text-xl md:text-2xl text-purple-400 mb-6">{member.role}</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}