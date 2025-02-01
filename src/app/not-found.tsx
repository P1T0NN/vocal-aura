// NEXTJS IMPORTS
import Link from 'next/link'

// COMPONENTS
import { Button } from "@/components/ui/button";

// LUCIDE ICONS
import { Headphones } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
            <div className="max-w-md">
                <Headphones className="w-24 h-24 text-purple-600 mx-auto mb-8" />
                <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>

                <p className="text-xl text-gray-600 mb-8">
                    Oops! Looks like this track skipped. The page you&apos;re looking for doesn&apos;t exist.
                </p>

                <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                    <Link href="/">
                        Return to Homepage
                    </Link>
                </Button>
            </div>
        </main>
    )
}