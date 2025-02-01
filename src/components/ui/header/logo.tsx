"use client"

// NEXTJS IMPORTS
import Link from "next/link";

// LIBRARIES
import { motion } from "framer-motion";

// LUCIDE ICONS
import { Mic } from "lucide-react";


export const Logo = () => {
    return (
        <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
                <Mic className="relative h-8 w-8 text-white" />
            </div>
            
            <Link href="/" className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Vocal Aura
            </Link>
        </motion.div>
    )
}