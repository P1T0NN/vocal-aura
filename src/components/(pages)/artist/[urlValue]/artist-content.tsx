// NEXTJS IMPORTS
import Image from "next/image";
import Link from "next/link";

// LIBRARIES
import { getStorageUrl } from "@/lib/supabase/storage";

// COMPONENTS
import { Button } from "@/components/ui/button";
import { SpotifyIcon } from "@/components/ui/icons/spotify-icon";
import { SoundcloudIcon } from "@/components/ui/icons/soundcloud-icon";

// TYPES
import type { typesArtist } from "@/types/typesArtist";

// LUCIDE ICONS
import { Instagram } from "lucide-react";

interface ArtistContentProps {
    artist: typesArtist;
}

export const ArtistContent = ({ 
    artist 
}: ArtistContentProps) => {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <div className="relative h-[80vh] w-full">
                <Image
                    src={getStorageUrl(artist.imageArtistPage)}
                    alt={artist.name}
                    fill
                    className={`
                        object-cover
                        ${artist.name === "Jose" ? "object-[center_15%]" : "object-center"}
                    `}
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content Grid */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
                    {/* Main Content */}
                    <div className="space-y-8">
                        <h1 className="text-4xl font-bold">{artist.artistName}</h1>

                        <div className="space-y-4 text-lg leading-relaxed">
                            {artist.bio.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        {artist.instagramLink && (
                            <div className="flex items-center gap-4">
                                <Button size="lg" className="gap-2">
                                    <Link 
                                        href={artist.instagramLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        <Instagram className="h-5 w-5" />
                                        Follow on Instagram
                                    </Link>
                                </Button>
                            </div>
                        )}

                        {artist.soundcloudLink && (
                            <div className="flex items-center gap-4">
                                <Button size="lg" className="gap-2">
                                    <Link 
                                        href={artist.soundcloudLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        <SoundcloudIcon size={20} />
                                        Follow on Soundcloud
                                    </Link>
                                </Button>
                            </div>
                        )}

                        {artist.spotifyLink && (
                            <div className="flex items-center gap-4">
                                <Button size="lg" className="w-52">
                                    <Link
                                        href={artist.spotifyLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        <SpotifyIcon size={20} />
                                        Follow on Spotify
                                    </Link>
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Artist Info Table */}
                    <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                        <div className="space-y-4">
                            {artist.latestRelease && (
                                <TableRow 
                                    label="LATEST RELEASE" 
                                    value={
                                        <div>
                                            &quot;{artist.latestRelease.title}&quot; - {artist.latestRelease.collaborators}
                                            {artist.latestRelease.collaborators && " (COLLABORATION)"}
                                        </div>
                                    } 
                                />
                            )}
                            <TableRow label="ACTIVE SINCE" value={artist.activeSince} />
                            <TableRow label="ORIGIN" value={artist.origin} />
                            {artist.style && (
                                <TableRow label="STYLE" value={artist.style} />
                            )}
                            <TableRow 
                                label="GENRE" 
                                value={
                                    <div className="whitespace-pre-line">
                                        {artist.genre.split('\n').map((genre, index) => (
                                            <div key={index}>{genre}</div>
                                        ))}
                                    </div>
                                } 
                            />
                            {artist.bpmRange && (
                                <TableRow label="BPM RANGE" value={artist.bpmRange} />

                            )}
                            {artist.format && (
                                <TableRow label="VINYL / DIGITAL" value={artist.format} />
                            )}
                            {artist.topGigs && (
                                <TableRow 
                                    label="TOP GIGS" 
                                    value={
                                        <div className="whitespace-pre-line">
                                            {artist.topGigs.join('\n')}
                                        </div>
                                    } 
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function TableRow({ label, value }: { label: string; value: React.ReactNode }) {
    return (
        <div className="grid grid-cols-2 gap-4 border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
            <div className="text-sm text-white/60">{label}</div>
            <div className="text-sm font-medium">{value}</div>
        </div>
    )
}