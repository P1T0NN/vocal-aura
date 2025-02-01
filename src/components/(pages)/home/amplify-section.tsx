// LIBRARIES
import * as motion from "motion/react-client";

export const AmplifySection = () => {
    return (
        <section className="py-32 px-4 bg-black text-white overflow-hidden">
            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-9xl font-bold text-white/10 absolute -left-10 top-0"
                >
                    TALENT
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-9xl font-bold text-white/10 absolute -right-10 bottom-0"
                >
                    MUSIC
                </motion.div>
                <div className="relative z-10 text-center py-20">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">Amplify Your Sound</h2>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
                        Join the next generation of musical talent at Vocal Aura
                    </p>
                </div>
            </div>
        </section>
    );
}