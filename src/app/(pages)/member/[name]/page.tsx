// NEXTJS IMPORTS
import { notFound } from "next/navigation";

// COMPONENTS
import { TeamMemberHero } from "@/components/(pages)/member/[name]/team-member-hero";
import { TeamMemberContent } from "@/components/(pages)/member/[name]/team-member-content";

// DATA
import { team } from "@/data/team";

export default async function MemberPage({ 
    params

}: { 
    params: Promise<{ name: string }>
}) {
    const { name } = await params;

    const member = team.find(m => m.name === name)

    if (!member) notFound();

    return (
        <main className="min-h-screen bg-black">
            <TeamMemberHero member={member} />
            <TeamMemberContent member={member} />
        </main>
    )
}