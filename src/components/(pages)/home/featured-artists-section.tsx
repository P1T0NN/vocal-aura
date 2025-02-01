// NEXTJS IMPORTS
import Image from "next/image";

// LIBRARIES
import * as motion from "motion/react-client";
import { getStorageUrl } from "@/lib/supabase/storage";

// DATA
import { artists } from "@/data/artists";

export const FeaturedArtistsSection = () => {
  return (
    <section id="artists" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">Featured Artists</h2>
          <p className="text-xl text-gray-400">Discover our exceptional talent roster</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                <Image
                  src={getStorageUrl(artist.image)}
                  alt={artist.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-1">{artist.artistName}</h3>
                  <p className="text-gray-300">{artist.niche}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
