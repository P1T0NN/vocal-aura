// COMPONENTS
import { HeroSection } from "@/components/(pages)/home/hero-section";
import { AmplifySection } from "@/components/(pages)/home/amplify-section";
import { AboutSection } from "@/components/(pages)/home/about-us-section";
import { ServicesSection } from "@/components/(pages)/home/services-section";
import { FeaturedArtistsSection } from "@/components/(pages)/home/featured-artists-section";
import { TeamSection } from "@/components/(pages)/home/team-section";
import { CTASection } from "@/components/(pages)/home/cta-section";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen">
        <HeroSection />
        <AmplifySection />
        <AboutSection />
        <ServicesSection />
        <FeaturedArtistsSection />
        <TeamSection />
        <CTASection />
      </main>
    </div>
  );
}