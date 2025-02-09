"use client"

// REACTJS IMPORTS
import { useTransition } from "react";

// LIBRARIES
import * as motion from "motion/react-client";

// COMPONENTS
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

// HOOKS
import { useForm } from "@/hooks/useForm";

// ZOD
import { contactFormSchema, type ContactFormData } from "@/zod/contactFormSchema";

// LUCIDE ICONS
import { Mail, Send, User } from "lucide-react";

// ACTIONS
import { sendContactInformation } from "@/actions/server-actions/sendContactInformation";

export const ContactForm = () => {
    const [isPending, startTransition] = useTransition();
    
    const initialValues: ContactFormData = {
        name: "",
        email: "",
        message: "",
    };

    const {
        formData,
        errors,
        handleInputChange,
        setFieldValue,
        handleSubmit,
    } = useForm<ContactFormData>({
        initialValues,
        validationSchema: contactFormSchema,
        onSubmit: async (values) => {
            startTransition(async () => {
                // Create FormData object
                const formData = new FormData();
                formData.append('name', values.name);
                formData.append('email', values.email);
                formData.append('message', values.message);

                // Send the form data
                const result = await sendContactInformation(formData);

                if (result.success) {
                    toast.success(result.message);

                    // Reset form
                    setFieldValue("name", "");
                    setFieldValue("email", "");
                    setFieldValue("message", "");
                } else {
                    toast.error(result.message);
                }
            });
        },
        useToastForErrors: true,
    });

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <form action={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-gray-400">
                        Name
                    </label>

                    <div className="relative">
                        <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your name"
                            className={`
                                bg-white/5 border-white/10 focus:border-purple-500 pl-10
                                ${errors.name ? "border-red-500" : ""}
                            `}
                        />
                        <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                    {errors.name && (
                        <p className="text-sm text-red-500">{errors.name}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-gray-400">
                        Email
                    </label>
                    <div className="relative">
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Your email"
                            className={`
                                bg-white/5 border-white/10 focus:border-purple-500 pl-10
                                ${errors.email ? "border-red-500" : ""}
                            `}
                        />
                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                    {errors.email && (
                        <p className="text-sm text-red-500">{errors.email}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-gray-400">
                        Message
                    </label>
                    <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your message"
                        className={`
                            min-h-[150px] bg-white/5 border-white/10 focus:border-purple-500 resize-none
                            ${errors.message ? "border-red-500" : ""}
                        `}
                    />
                    {errors.message && (
                        <p className="text-sm text-red-500">{errors.message}</p>
                    )}
                </div>

                <Button
                    type="submit"
                    size="lg"
                    disabled={isPending}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white group"
                >
                    <>
                        {isPending ? "Sending..." : "Send Message"}
                        <Send className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </>
                </Button>
            </form>
        </motion.div>
    );
};