// COMPONENTS
import { FooterBrand } from "./footer-brand"
import { FooterLinks } from "./footer-links"
import { FooterContact } from "./footer-contact"

const quickLinks = [
  { label: "Our Artists", href: "/#artists" },
  { label: "Services", href: "/#services" },
  { label: "Our Team", href: "/#ourteam" },
  { label: "About", href: "/#about" },
]

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FooterBrand />
          <FooterLinks title="Quick Links" links={quickLinks} />
          <FooterContact />
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vocal Aura Entertainment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}