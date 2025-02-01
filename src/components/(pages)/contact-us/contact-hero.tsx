// LIBRARIES
import * as motion from "motion/react-client";

// LUCIDE ICONS
import { Mic } from "lucide-react";

export const ContactHero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
        >
            <div className="inline-block mb-6">
                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
                    <Mic className="relative h-16 w-16 text-white" />
                </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Get in Touch
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                Have a question or want to work with us? Send us a message and we&apos;ll get back to you.
            </p>
        </motion.div>
    )
}