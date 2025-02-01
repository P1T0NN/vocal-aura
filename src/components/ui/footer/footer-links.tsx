interface FooterLinksProps {
    title: string;
    links: Array<{ label: string; href: string }>;
}

export const FooterLinks = ({ 
    title, 
    links 
}: FooterLinksProps) => {
    return (
        <div>
            <h3 className="font-semibold text-lg mb-4">{title}</h3>
            <ul className="space-y-2">
                {links.map((link) => (
                    <li key={link.href}>
                        <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
