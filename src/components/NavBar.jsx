import { href } from "react-router-dom"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react";

// Barra de navegacion
const navItems = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre Mí", href: "#about" },
    { name: "Habilidades", href: "#skills" },
    { name: "Contacto", href: "#contact" }
]

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Prevent scrool
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}
        >
            <div className="container flex items-center justify-between">
                <a href="hero" className="text-xl font-bold text-primary flex items-center">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Pedro Manga </span>
                        Portfolio
                    </span>
                </a>

                {/* escritorio */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* phone button */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-[110] relative"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

            {/* Overlay phone */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-[100] md:hidden">
                    <div 
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setIsMenuOpen(false)}
                    />
                    
                    {/* menu panel */}
                    <div className="absolute inset-x-0 top-0 bg-background/95 backdrop-blur-md border-b border-border/20 shadow-lg">
                        <div className="flex flex-col items-center justify-center py-20 px-6 min-h-screen">
                            <div className="flex flex-col space-y-8 text-2xl w-full max-w-sm">
                                {navItems.map((item, key) => (
                                    <a 
                                        key={key} 
                                        href={item.href} 
                                        className="text-foreground hover:text-primary transition-colors duration-300 text-center py-3 px-4 rounded-lg hover:bg-accent/10"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            </div>
        </nav>
    )
}