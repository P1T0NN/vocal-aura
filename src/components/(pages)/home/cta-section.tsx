// NEXTJS IMPORTS
import Link from "next/link";

// LIBRARIES
import * as motion from "motion/react-client";

// COMPONENTS
import { Button } from "@/components/ui/button";


export const CTASection = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 opacity-90" />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-4xl mx-auto text-center text-white px-4"
            >
                <h2 className="text-5xl md:text-7xl font-bold mb-8">Ready to Shine?</h2>
                <p className="text-xl md:text-2xl mb-12">Join Vocal Aura and let us help you reach new heights in your musical journey.</p>
                
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                    <Link href="/contact-us">
                    Start Your Journey
                    </Link>
                </Button>
            </motion.div>
        </section>
    );
}