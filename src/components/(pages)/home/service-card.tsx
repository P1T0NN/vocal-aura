// COMPONENTS
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export const ServiceCard = ({ 
    icon, 
    title, 
    description 
}: ServiceCardProps) => {
    return (
        <Card className="p-6 hover:shadow-lg transition-shadow bg-black/5 backdrop-blur-lg border-none">
            <div className="mb-4 text-primary">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </Card>
    );
}