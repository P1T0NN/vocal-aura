// LIBRARIES
import * as motion from "motion/react-client";

export const ContactHero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-16"
        >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Get in Touch
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                Have a question or want to work with us? Send us a message and we&apos;ll get back to you.
            </p>
        </motion.div>
    )
}