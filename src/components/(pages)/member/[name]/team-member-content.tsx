// LIBRARIES
import * as motion from "motion/react-client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// TYPES
import type { typesTeamMember } from "@/types/typesTeamMember";

interface TeamMemberContentProps {
    member: typesTeamMember;
}

export const TeamMemberContent = ({ 
    member 
}: TeamMemberContentProps) => {
    const paragraphs = member.bio.split('\n\n')
    const paragraphs2 = member.bio2?.split('\n\n')

    return (
        <section className="py-16 bg-black">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
                        <CardHeader>
                            <motion.h2 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-3xl font-bold text-white"
                            >
                                About {member.name}
                            </motion.h2>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {paragraphs.map((paragraph, index) => (
                                <motion.p
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                                    className="text-lg text-gray-300 leading-relaxed"
                                >
                                    {paragraph}
                                </motion.p>
                            ))}

                            {paragraphs2 && paragraphs2.map((paragraph, index) => (
                                <motion.p
                                    key={`p2-${index}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: (paragraphs.length + index) * 0.1 + 0.3 }}
                                    className="text-lg text-gray-300 leading-relaxed"
                                >
                                    {paragraph}
                                </motion.p>
                            ))}
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}