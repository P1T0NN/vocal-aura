// NEXTJS IMPORTS
import Link from "next/link";

// LIBRARIES
import * as motion from "motion/react-client";

// COMPONENTS
import { Button } from "@/components/ui/button";

// LUCIDE ICONS
import { ArrowRight, Users } from "lucide-react";

export const TeamSection = () => {
    return (
        <section id="ourteam" className="py-24 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <Users className="h-16 w-16 mx-auto text-purple-500 mb-6" />
                        <h2 className="text-5xl font-bold mb-4">Meet Our Team</h2>
                        <p className="text-xl text-gray-400 mb-8">
                            Get to know the passionate professionals behind Vocal Aura. Our diverse team of industry experts 
                            is dedicated to discovering and nurturing exceptional vocal talent.
                        </p>
                        
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Link href="/our-team">
                                <Button variant="secondary" size="lg" className="group">
                                    View Our Team
                                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}