// LIBRARIES
import * as motion from "motion/react-client";

// COMPONENTS
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";

// DATA
import { menuItems } from "./header-data";

export const DesktopNav = () => {
    return (
        <div className="hidden md:block">
            <NavigationMenu className="relative">
                <NavigationMenuList className="flex space-x-1">
                    {menuItems.map((item, index) => (
                        <NavigationMenuItem key={item.label}>
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <NavigationMenuLink
                                    className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-gray-100"
                                    href={item.href}
                                >
                                    <item.icon className="mr-2 h-4 w-4" />
                                    <span>{item.label}</span>
                                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform" />
                                </NavigationMenuLink>
                            </motion.div>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}