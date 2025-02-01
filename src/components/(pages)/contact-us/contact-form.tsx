"use client"

// REACTJS IMPORTS
import { useState } from "react";

// LIBRARIES
import * as motion from "motion/react-client";

// COMPONENTS
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

// LUCIDE ICONS
import { Mail, Send, User } from "lucide-react";

export const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000));

        toast.success("We'll get back to you as soon as possible.");

        setIsSubmitting(false);
        ;(e.target as HTMLFormElement).reset();
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-gray-400">
                        Name
                    </label>

                    <div className="relative">
                        <Input
                            id="name"
                            placeholder="Your name"
                            required
                            className="bg-white/5 border-white/10 focus:border-purple-500 pl-10"
                        />
                        <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-gray-400">
                        Email
                    </label>
                    <div className="relative">
                        <Input
                            id="email"
                            type="email"
                            placeholder="Your email"
                            required
                            className="bg-white/5 border-white/10 focus:border-purple-500 pl-10"
                        />
                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-gray-400">
                        Message
                    </label>
                    <Textarea
                        id="message"
                        placeholder="Your message"
                        required
                        className="min-h-[150px] bg-white/5 border-white/10 focus:border-purple-500"
                    />
                </div>

                <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white group"
                >
                    {isSubmitting ? (
                        "Sending..."
                    ) : (
                        <>
                            Send Message
                            <Send className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </Button>
            </form>
        </motion.div>
    )
}