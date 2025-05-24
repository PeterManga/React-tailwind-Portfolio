import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"
import { cn } from "../lib/utils";

/* toggle modo claro y oscuro*/
export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storeTheme = localStorage.getItem("theme")
        if (storeTheme == "dark") {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark");
        }
        else {
            setIsDarkMode(false)
            document.documentElement.classList.remove("dark");
        }
    }, [])
    
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light")
            setIsDarkMode(false)
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark")
            setIsDarkMode(true)
        }
    }
    
    return (
        <button 
            onClick={toggleTheme} 
            className={cn(
                "fixed top-30 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                "bg-background/80 backdrop-blur-sm border border-border/50",
                "hover:bg-accent hover:text-accent-foreground",
                "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                "shadow-lg"
            )}
            aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        >
            {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
                <Moon className="h-5 w-5 text-slate-700 dark:text-slate-300" />
            )}
        </button>
    )
}