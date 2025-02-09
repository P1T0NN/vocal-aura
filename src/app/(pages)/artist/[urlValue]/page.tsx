// NEXTJS IMPORTS
import { notFound } from "next/navigation";

// COMPONENTS
import { ArtistContent } from "@/components/(pages)/artist/[urlValue]/artist-content";

// DATA
import { artists } from "@/data/artists";

export default async function ArtistPage({ 
    params
}: { 
    params: Promise<{ urlValue: string }>
}) {
    const { urlValue } = await params;

    const artist = artists.find(a => a.urlValue === urlValue)

    if (!artist) notFound();

    return (
        <main className="min-h-screen bg-black">
            <ArtistContent artist={artist} />
        </main>
    )
}