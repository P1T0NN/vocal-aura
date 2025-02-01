// COMPONENTS
import { ContactHero } from "@/components/(pages)/contact-us/contact-hero";
import { ContactForm } from "@/components/(pages)/contact-us/contact-form";
import { ContactInfo } from "@/components/(pages)/contact-us/contact-info";

export default function ContactPage() {
    return (
        <main className="bg-black text-white min-h-screen">
            <div className="container mx-auto px-4 py-24">
                <ContactHero />

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <ContactForm />
                    <ContactInfo />
                </div>
            </div>
        </main>
    )
}
