// NEXTJS IMPORTS
import Image from 'next/image';

// LIBRARIES
import * as motion from "motion/react-client";
import { getStorageUrl } from '@/lib/supabase/storage';

// COMPONENTS
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

// DATA
import { launchPartyImagesData } from "@/data/launch-party-images-data";

export const LaunchPartySection = () => {
    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <h2 className="text-5xl font-bold mb-6">First Launch Party</h2>
                    <p className="text-xl text-gray-400">
                        On February 21st, 2025, Vocal Aura Entertainment made its grand debut with an unforgettable launch party. 
                        This milestone event brought together artists, industry professionals, and music enthusiasts, 
                        marking the beginning of our journey to revolutionize the music industry in Valencia.
                    </p>
                </motion.div>

                {/* Main Featured Carousel */}
                <div className="mb-8">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {launchPartyImagesData.map((image) => (
                                <CarouselItem key={image.id} className="md:basis-1/1 lg:basis-1/1">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="relative aspect-[16/9] overflow-hidden rounded-lg"
                                    >
                                        <Image
                                            src={getStorageUrl(image.image)}
                                            alt={`Launch Party Image ${image.id}`}
                                            fill
                                            className="object-cover"
                                            unoptimized
                                        />
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                    </Carousel>
                </div>

                {/* Thumbnail Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {launchPartyImagesData.slice(0, 12).map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative aspect-square overflow-hidden rounded-lg group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Image
                                src={getStorageUrl(image.image)}
                                alt={`Launch Party Image ${image.id}`}
                                fill
                                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                                unoptimized
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}