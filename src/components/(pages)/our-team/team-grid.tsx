// NEXTJS IMPORTS
import Image from "next/image";
import Link from "next/link";

// LIBRARIES
import { getStorageUrl } from "@/lib/supabase/storage";

// DATA
import { team } from "@/data/team";

export const TeamGrid = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-black via-black to-background relative text-white">
            <div className="absolute inset-0 bg-black/80" />

            <div className="relative container mx-auto px-4 z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">Meet Our Team</h2>
                    <p className="text-xl text-gray-400">The faces behind your musical journey</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                    {team.map((member) => (
                        <Link 
                            href={`/member/${member.name}`} 
                            key={member.name}
                            className="block group"
                        >
                            <div className="text-center">
                                <div className="relative mx-auto w-56 h-56 mb-6">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 animate-pulse" />
                                    <Image
                                        src={getStorageUrl(member.image)}
                                        alt={member.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className={`
                                            relative rounded-full object-cover border-4 border-white 
                                            group-hover:scale-105 transition-transform duration-300
                                            ${member.name === "Giovanni" ? "object-[75%_10%]" : "object-[center_10%]"}
                                        `}
                                        unoptimized
                                    />
                                </div>

                                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                                <p className="text-orange-500 font-bold mb-4">{member.role}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}