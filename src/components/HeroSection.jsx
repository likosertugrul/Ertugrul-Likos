import { ArrowDown } from "lucide-react"
import { cn } from "../lib/utils"
import { useEffect, useState } from "react";



export const HeroSection = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi I'm</span>
                    <span className="opacity-0 animate-fade-in-delay-1 text-primary"> Ertuğrul</span>
                    <span className="opacity-0 animate-fade-in-delay-2 text-primary"> Likos</span>
                </h1>

                <p className="text-md md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-1">
                    A frontend developer crafting clean, responsive interfaces with React and Tailwind CSS
                </p>

                <div className="opacity-0 animate-fade-in-delay-4 pt-4">
                    <a href="#projects" className="cosmic-button">View My Works</a>
                </div>
            </div>
            
            {/* <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-muted-foreground mb-1">Scroll</span>
                <ArrowDown className="h-5 b-5 text-primary"/>
            </div> */}

            <div className={cn("fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce transition-all duration-700 ease-in-out", // animate-bounce
                               isScrolled ? "opacity-0 scale-75 pointer-events-none" : "opacity-100 scale-100")}>
                <span className="text-muted-foreground mb-1">Scroll</span>
                <ArrowDown className="h-5 b-5 text-primary"/>
            </div>
        </section>
    )
}