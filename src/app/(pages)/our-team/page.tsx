// NEXTJS IMPORTS
import { Metadata } from "next";

// COMPONENTS
import { TeamGrid } from "@/components/(pages)/our-team/team-grid";
import { TeamHero } from "@/components/(pages)/our-team/team-hero";

export const metadata: Metadata = {
    title: "Our Team | Vocal Aura",
    description: "Meet the passionate professionals behind Vocal Aura's success. Our team of industry experts is dedicated to discovering and nurturing exceptional vocal talent.",
}

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-black">
            <TeamHero />
            <TeamGrid />
        </main>
    )
}